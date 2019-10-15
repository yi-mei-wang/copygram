import React from "react";
import Image from "react-graceful-image";
import styled from "styled-components";

const Container = styled.div`
  /* width: calc(100% / 3); */
  width: ${props => props.width};
  /* height: calc(100% / 3); */
  height: ${props => props.height};
  background-color: #efefef;
  position: relative;
  display: inline-block;
  grid-area: img;
`;

export const GracefulImage = ({ src, width, height, alt, round }) => (
  <Container width={width} height={height}>
    <Image
      src={src}
      alt={alt}
      width="100%"
      style={{
        borderRadius: round === 1 ? "50%" : 0,
        objectFit: "cover",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
      }}
    />
  </Container>
);
