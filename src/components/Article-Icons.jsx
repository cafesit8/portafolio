import React from "react";

export function ArticleIcons({url, icon}) {
  return (
    <a target="_blank" href={url}>
      <div className="bg-[#fae7dd] rounded-full p-2 w-[45px] h-[45px] flex items-center justify-center hover:bg-[#bb6c45] duration-300">
        {icon}
      </div>
    </a>
  );
}
