import React from "react";

export default function ({ img, alt }) {
  return (
    <picture className="w-[60px] h-[60px] overflow-hidden max-[500px]:w-[40px] max-[500px]:h-[40px]">
      <img className="w-full h-full object-contain" src={img} alt={alt} />
    </picture>
  );
}
