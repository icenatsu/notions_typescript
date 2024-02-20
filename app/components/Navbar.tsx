"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";
import NavLinks from "@components/NavLinks";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleClickCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      <nav className="relative flex h-14 items-center bg-jade5 border-b-2 border-b-jade6">
        <div className="grow-[0.1] p-4">
          <Image
            className="rounded-full"
            src="/natsu2.webp"
            alt="Natsu"
            width={50}
            height={50}
          ></Image>
        </div>
        <p className="text-md grow-[1.5] font-sacramento">
          ice&apos;s Revision Directory
        </p>
        <ul className="hidden grow-[6] justify-around lg:flex">
          <NavLinks
            closeMenu={handleClickCloseMenu}
          />
        </ul>
        <div className="p-4 lg:hidden" onClick={handleClick}>
          <Icon
            aria-label="Afficher le menu"
            icon="icon-park-outline:hamburger-button"
            hFlip={true}
          />
        </div>
      </nav>
      {showMenu && (
        <ul className="flex basis-full flex-col items-center bg-jade3 lg:hidden">
          <NavLinks 
            closeMenu={handleClickCloseMenu}
          />
        </ul>
      )}
    </>
  );
};

export default Navbar;
