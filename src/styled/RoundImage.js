import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 50%;
`;

export const RoundImage = ({ imgUrl, width, height }) => (
  <>
    <StyledImage
      src={imgUrl}
      alt="profile avatar"
      width={width}
      height={height}
    />
  </>
);
