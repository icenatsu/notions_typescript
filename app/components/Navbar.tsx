"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { lessonName } from "@/app/page";
import NavLinks from "@components/NavLinks";

type NavbarProps = {
  handleClickCategoryLessons: (arg0: lessonName) => void;
};

const Navbar = ({ handleClickCategoryLessons }: NavbarProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleClickCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      <nav className="relative flex h-20 items-center bg-black">
        <div className="grow-[0.1] p-4">
          <Image
            className="rounded-full"
            src="/natsu2.png"
            alt="Natsu"
            width={50}
            height={50}
          ></Image>
        </div>
        <p className="text-md grow-[1.5] font-sacramento">
          ice&apos;s Revision Directory
        </p>
        <ul className="hidden grow-[6] justify-around md:flex">
          <NavLinks
            closeMenu={handleClickCloseMenu}
            handleClickCategoryLessons={handleClickCategoryLessons}
          />
        </ul>
        <div className="p-4 md:hidden" onClick={handleClick}>
          <Icon
            aria-label="Afficher le menu"
            icon="icon-park-outline:hamburger-button"
            hFlip={true}
          />
        </div>
      </nav>
      {showMenu && (
        <ul className="flex basis-full flex-col items-center bg-jade3 md:hidden">
          <NavLinks
            closeMenu={handleClickCloseMenu}
            handleClickCategoryLessons={handleClickCategoryLessons}
          />
        </ul>
      )}
    </>
  );
};

export default Navbar;
