import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const PreviewImage = ({ previewImage, message }) => (
  <Container>
    {previewImage ? (
      <Img src={previewImage} alt="Preview upload" />
    ) : (
      <h3 className="text-center">{message ? message : "Live preview"}</h3>
    )}
  </Container>
);
