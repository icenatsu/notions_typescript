"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";
import NavLinks from "@components/NavLinks";
import Link from "next/link";

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
      <nav className="relative flex h-14 items-center border-b-2 border-b-jade6 bg-jade5">
        <Link href={'/'} className="grow-[0.1] p-4">
          <Image
            className="rounded-full"
            src="/natsu2.webp"
            alt="Natsu"
            width={50}
            height={50}
          ></Image>
        </Link>
        <p className="text-md grow-[1.5] font-sacramento">
          ice&apos;s Revision Directory
        </p>
        <ul className="hidden grow-[6] justify-around lg:flex">
          <NavLinks closeMenu={handleClickCloseMenu} />
        </ul>
        <button className="p-4 lg:hidden" onClick={handleClick}>
          <Icon
            aria-label="Afficher le menu"
            icon="icon-park-outline:hamburger-button"
            hFlip={true}
          />
        </button>
      </nav>
      {showMenu && (
        <ul className="flex basis-full flex-col items-center bg-jade3 lg:hidden">
          <NavLinks closeMenu={handleClickCloseMenu} />
        </ul>
      )}
    </>
  );
};

export default Navbar;
