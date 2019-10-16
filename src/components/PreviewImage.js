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
    ) : message ? (
      <h4>message</h4>
    ) : (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%"
        }}
      >
        <label htmlFor="image-file"></label>
        <h4 style={{ height: "1rem" }}>Choose an image</h4>
      </div>
    )}
  </Container>
);
