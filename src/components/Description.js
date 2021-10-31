import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const TitleContainer = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 50px;
  padding: 1%;
  margin-left: 10%;
  font-family: sans-serif;
`;
const TextContainer = styled.div`
  font-size: 30px;
  padding: 20px;
  margin-right: 10%;
  margin-top: 7%;
  font-family: sans-serif;
`;
const Logo = styled.img`
  width: 140px;
  height: 140px;
  margin-left: 10%;
  padding: 4%;
`;

const format = ({ img, title, detail }) => {
  return (
    <Container>
      <Logo src={img}></Logo>
      <TitleContainer>{title}</TitleContainer>
      <TextContainer>{detail}</TextContainer>
    </Container>
  );
};

export default format;
