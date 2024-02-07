import Link from "next/link";

type NavLinksProps = {
  closeMenu: () => void;
};

export type lessonName = "typescript" | "next" | "fetch" | "javascript" | "";

const NavLinks = ({ closeMenu }: NavLinksProps) => {

  const lessons = ["javascript","typescript","fetch","next"]

  return (
    <>

      {lessons.map((lesson,idx) => (
        <li
        key={`lesson${idx}`}
        className="cursor-pointer p-2 text-base font-bold sm:w-full sm:hover:bg-jade4 lg:w-4 lg:p-0 lg:hover:bg-transparent"
        onClick={() => closeMenu()}
      >
        <Link href={`/markdowns/${lesson}/`}>{lesson.charAt(0).toUpperCase() + lesson.substring(1)}</Link>
      </li>
      ))}
    </>
  );
};

export default NavLinks;
