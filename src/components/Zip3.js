import JSZip from "jszip";
import styled from "styled-components";
import React from "react";
import { IFileInfo, moment, useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  padding: 150px;
  margin: 50px 250px 100px 250px;
  font-family: sans-serif;
  border-style: dashed;
  border-radius: 1ex;
  text-align: center;
`;

const Logo = styled.img`
  width: 140px;
  height: 140px;
  margin: auto;
  padding: 20px;
  display: flex;
`;

function App() {
  const [files, setFiles] = useState(File);
  const [fileInfo, setFileInfo] = useState(IFileInfo);

  useEffect(() => {
    if (files) {
      const f = files[0];
      const dateBefore = new Date();
      JSZip.loadAsync(f) // 1) read the Blob
        .then(
          (zip) => {
            const contents = [];
            zip.forEach((relativePath, zipEntry) => {
              // 2) print entries
              contents.push(zipEntry.name);
            });
            const loadTime = moment(new Date()).diff(moment(dateBefore));
            setFileInfo({
              loadTime,
              contents: contents.sort(),
              error: null,
            });
          },
          (e) => {
            const loadTime = moment(new Date()).diff(moment(dateBefore));
            setFileInfo({
              loadTime,
              contents: [],
              error: "Error reading " + f.name + ": " + e.message,
            });
          }
        );
    }
  }, [files]);

  return (
    <Container>
      <Logo src={"/icons/zip file.png"} />
    </Container>
  );
}

export default App;
