import { lessonName } from "@/app/page";

type NavLinksProps = {
  closeMenu: () => void;
  handleClickCategoryLessons: (arg0: lessonName) => void;
};

const NavLinks = ({ closeMenu, handleClickCategoryLessons }: NavLinksProps) => {
  const handleClickTypescriptLessons = () => {
    handleClickCategoryLessons("typescript");
    closeMenu();
  };

  const handleClickNextLessons = () => {
    handleClickCategoryLessons("next");
    closeMenu();
  };

  const handleClickFetchLessons = () => {
    handleClickCategoryLessons("fetch");
    closeMenu();
  };

  return (
    <>
      <li
        className="cursor-pointer p-2 text-base font-bold sm:w-full sm:hover:bg-jade4 md:w-4 md:p-0 md:hover:bg-transparent"
        onClick={handleClickTypescriptLessons}
      >
        Typescript
      </li>
      <li
        className="cursor-pointer p-2 text-base font-bold sm:w-full sm:hover:bg-jade4 md:w-4 md:p-0 md:hover:bg-transparent"
        onClick={handleClickFetchLessons}
      >
        Fetch
      </li>
      <li
        className="cursor-pointer p-2 text-base font-bold sm:w-full sm:hover:bg-jade4 md:w-4 md:p-0 md:hover:bg-transparent"
        onClick={handleClickNextLessons}
      >
        NextJs
      </li>
    </>
  );
};

export default NavLinks;
