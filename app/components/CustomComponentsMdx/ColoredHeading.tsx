import { PropsWithChildren } from "react";

type ColoredHeadingProps = {
    color: string,
    heading: string,
} & PropsWithChildren

export const ColoredHeading = ({ heading, color="text-jade12", children }: ColoredHeadingProps) => {
    if(heading === 'h1') return <h1 className={color}>{children}</h1>;
    if(heading ==='h2') return <h2 className={color}>{children}</h2>;
    if(heading ==='h3')  return <h3 className={color}>{children}</h3>;
    if(heading ==='h4') return <h4 className={color}>{children}</h4>;
    if(heading ==='h5') return <h5 className={color}>{children}</h5>;
    if(heading ==='h6') return <h6 className={color}>{children}</h6>;
};

  
