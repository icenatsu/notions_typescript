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
    <div className="text-s absolute right-2 top-3 flex items-center">
      <p className="">{lang}</p>
      <figure className="text-md ml-2">
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
  );
};
