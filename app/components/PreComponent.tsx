import { CopyButton } from "@components/CopyButton";

type PreProps = {
  children: React.ReactElement<{ raw: string, lang: string }>; // Définir le type de children
};

export const Pre = ({ children }: PreProps) => {

  const raw = children?.props.raw;
  const lang = children?.props.lang;

  return (
    <pre className="rounded-md bg-black">
      <div className="">
        <CopyButton text={raw} lang={lang}/>
      </div>
      {children}
    </pre>
  );
};


// Tailwind
// Remark