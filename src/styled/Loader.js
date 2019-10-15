import React from "react";

export const Loader = ({ fill, width, height }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "70vh" }}
    >
      <svg
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        class="lds-ripple"
        style={{ background: "none" }}
      >
        <circle
          cx="50"
          cy="50"
          r="6.36995"
          fill="none"
          ng-attr-stroke="{{config.c1}}"
          ng-attr-stroke-width="{{config.width}}"
          stroke="#1d3f72"
          stroke-width="2"
        >
          <animate
            attributeName="r"
            calcMode="spline"
            values="0;40"
            keyTimes="0;1"
            dur="1"
            keySplines="0 0.2 0.8 1"
            begin="-0.5s"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="opacity"
            calcMode="spline"
            values="1;0"
            keyTimes="0;1"
            dur="1"
            keySplines="0.2 0 0.8 1"
            begin="-0.5s"
            repeatCount="indefinite"
          ></animate>
        </circle>
        <circle
          cx="50"
          cy="50"
          r="28.5409"
          fill="none"
          ng-attr-stroke="{{config.c2}}"
          ng-attr-stroke-width="{{config.width}}"
          stroke="#5699d2"
          stroke-width="2"
        >
          <animate
            attributeName="r"
            calcMode="spline"
            values="0;40"
            keyTimes="0;1"
            dur="1"
            keySplines="0 0.2 0.8 1"
            begin="0s"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="opacity"
            calcMode="spline"
            values="1;0"
            keyTimes="0;1"
            dur="1"
            keySplines="0.2 0 0.8 1"
            begin="0s"
            repeatCount="indefinite"
          ></animate>
        </circle>
      </svg>
    </div>
  );
};
