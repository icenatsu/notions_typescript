import Link from "next/link";

type NavLinksProps = {
  closeMenu: () => void;
};

const NavLinks = ({ closeMenu }: NavLinksProps) => {
  const categorylessons = ["javascript", "typescript", "fetch", "next"];

  return (
    <>
      {categorylessons.map((categoryLesson, idx) => (
        <li
          key={`categoryLesson${idx}`}
          className="p-2 text-base font-bold sm:w-full sm:hover:bg-jade4 lg:w-4 lg:p-0 lg:hover:bg-transparent"
          onClick={() => closeMenu()}
        >
          <Link
            className="cursor-pointer"
            href={`/markdowns/${categoryLesson}/`}
          >
            {categoryLesson.charAt(0).toUpperCase() +
              categoryLesson.substring(1)}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavLinks;