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
    <div className="flex-col relative">
      <div className="flex items-center absolute top-0 right-2 text-s">
        <p className="p-2">{lang}</p>
        <figure>
          {isCopied ? "Copied!" : <Icon className="cursor-pointer" icon="mingcute:copy-line" onClick={copy} />}
        </figure>
      </div>
    </div>
  );
};
