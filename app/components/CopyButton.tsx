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
      <div className="flex items-center absolute top-3 right-2 text-s">
        <p className="">{lang}</p>
        <figure className="text-md ml-2">
          {isCopied ? "Copied!" : <Icon className="cursor-pointer ml-2" icon="mingcute:copy-line" onClick={copy} />}
        </figure>
    </div>
  );
};
