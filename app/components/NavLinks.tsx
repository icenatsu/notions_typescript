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

  return (
    <>
      <li
        className="cursor-pointer p-2 sm:w-full sm:hover:bg-jade4 md:p-0 md:hover:bg-transparent md:w-4"
        onClick={handleClickTypescriptLessons}
      >
        Typescript
      </li>
      <li
        className="cursor-pointer p-2 sm:w-full sm:hover:bg-jade4 md:p-0 md:hover:bg-transparent md:w-4"
        onClick={handleClickNextLessons}
      >
        NextJs
      </li>
    </>
  );
};

export default NavLinks;