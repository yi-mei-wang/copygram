import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => (props.round === 1 ? "50%" : "0")};
`;

export const RoundImage = ({ src, width, height, alt }) => (
  <>
    <StyledImage src={src} width={width} height={height} alt={alt} />
  </>
);
