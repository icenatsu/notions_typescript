import { CopyButton } from "@components/CopyButton";

type PreProps = {
  children: React.ReactElement<{ raw: string; lang: string }>; // Définir le type de children
};

export const Pre = ({ children }: PreProps) => {
  const raw = children?.props.raw;
  const lang = children?.props.lang;

  return (
    <pre className="flex flex-col rounded-md bg-grey grow">
      <div className="relative flex flex-col">
        <CopyButton text={raw} lang={lang} />
        {children}
      </div>
    </pre>
  );
};
