"use client";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState, Dispatch, SetStateAction, useEffect } from "react";
import { lessonName } from "@/app/page";

type NavbarProps = {
  lesson: lessonName,
  setLesson: Dispatch<SetStateAction<lessonName>>
}

const Navbar = ({lesson, setLesson}: NavbarProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  // Déroulement de la navbar en version mobile et tablette
  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  
  const handleClickTypescriptLessons = () => {
    setLesson('typescript')
  };

  return (
    <nav className="flex h-20 items-center bg-black">
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
      <ul className="sm:hidden lg:flex m-0 flex h-full grow-[6] items-center justify-around font-inter text-base">
        <li className="cursor-pointer" onClick={handleClickTypescriptLessons}>
          Typescript
        </li>
        <li className="">
          <Link href="/#skills">NextJs</Link>
        </li>
      </ul>
      <div
        className="p-4 md:block lg:hidden"
        // onClick={handleClick}
      >
        <Icon
          aria-label="Afficher le menu"
          icon="icon-park-outline:hamburger-button"
          hFlip={true}
        />
      </div>
    </nav>
  );
};

export default Navbar;
