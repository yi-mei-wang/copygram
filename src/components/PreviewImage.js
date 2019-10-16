import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 3px dashed #f50080;
  border-radius: 15px;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 1rem 0;
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
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <label htmlFor="image-file"></label>
        <p>Choose an image</p>
      </div>
    )}
  </Container>
);
