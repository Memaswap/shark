import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 256 256" {...props}>
      <image width="256" height="256" href="data:img/png;base64,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"/>
    </Svg>
  );
};

export default Icon;