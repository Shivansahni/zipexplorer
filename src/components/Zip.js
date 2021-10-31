import styled from "styled-components";

import React, { IFileInfo, useCallback, Component } from "react";
import { useDropzone } from "react-dropzone";

import { useState, useEffect, moment } from "react";

import axios from "axios";

import JSZip from "jszip";

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

function myDrop() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Container {...getRootProps()}>
      <Logo src={"/icons/zip file.png"} />
      <input {...getInputProps()} type="file" onChange={this.onFileChange} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
      {this.fileData()}
    </Container>
  );
}

export default MyDropzone;
