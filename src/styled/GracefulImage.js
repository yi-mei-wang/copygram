import React from "react";
import Image from "react-graceful-image";

export const GracefulImage = ({ src, width, height, alt, round }) => (
  <>
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      style={{
        borderRadius: round === 1 ? "50%" : 0
      }}
    />
  </>
);
