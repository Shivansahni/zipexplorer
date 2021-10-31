import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 40px;
  padding: 100px;
  font-family: sans-serif;
  text-align: center;
`;

function footer() {
  return (
    <div>
      <hr />
      <Container>Footer</Container>
    </div>
  );
}

export default footer;
