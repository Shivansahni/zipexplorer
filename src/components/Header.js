import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  padding: 20px;
  font-family: sans-serif;
  border-style: double;
  border-color: black;
  text-align: center;
`;

function header() {
  return (
    <div>
      <Container>Zip Explorer</Container>
    </div>
  );
}

export default header;
