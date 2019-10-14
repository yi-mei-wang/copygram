import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 50%;
`;

export const RoundImage = ({ src, width, height, alt }) => (
  <>
    <StyledImage src={src} width={width} height={height} alt={alt} />
  </>
);
