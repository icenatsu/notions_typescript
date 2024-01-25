import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="flex items-center bg-black h-20 text-md">
        <div className="grow-[0.5]">
            <Image className="rounded-full" src="/natsu2.png" alt="Natsu" width={50} height={50}></Image>
        </div>
        <p className="grow-[1.5] font-sacramento">ice&apos;s Revision Directory</p>
        <ul className="grow-[6] flex justify-around items-center m-0 h-full font-inter">
          <li>
            <Link
              href="typescript"
            >
            Typescript
            </Link>
          </li>
          <li className="">
            <Link
              href="/#skills"
            >
            NextJs
            </Link>
          </li>
        </ul>
      </nav>
    );
};

export default Navbar;