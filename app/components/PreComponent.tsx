import { CopyButton } from "@components/CopyButton";

type PreProps = {
  children: React.ReactElement<{ raw: string, lang: string }>; // Définir le type de children
};

export const Pre = ({ children }: PreProps) => {

  const raw = children?.props.raw;
  const lang = children?.props.lang;

  return (
    <pre className="rounded-md bg-transparent !p-0 !mb-0">
      <div className="flex flex-col relative">
      <CopyButton text={raw} lang={lang}/>
      {children}
      </div>
    </pre>
  );
};


// Tailwind
// Remark