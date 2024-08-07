"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

type CopyButtonProps = {
  text: string;
  lang: string;
};

export const CopyButton = ({ text, lang }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <>
      <div className="flex justify-between items-center rounded-sm px-4">
        <p className="">{lang}</p>
        <figure className="text-md flex flex-col">
          {isCopied ? (
            "Copied!"
          ) : (
            <Icon
              className="ml-2 cursor-pointer"
              icon="mingcute:copy-line"
              onClick={copy}
            />
          )}
        </figure>
      </div>
      <hr className="bg-slate-100"/>
    </>
  );
};
