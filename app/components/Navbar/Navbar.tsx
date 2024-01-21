import css from "./NavBar.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className={css.navbar}>
        <div className={css.logo}>
            <Image className={css.logo__img} src="/natsu2.png" alt="Natsu" width={50} height={50}></Image>
        </div>
        <p className={css.title}>ice&apos;s Revision Directory</p>
        <ul className={css.list}>
          <li className={css.list__item}>
            <Link
              href="typescript"
            >
            Typescript
            </Link>
          </li>
          <li className={css.list__item}>
            <Link
              href="/#skills"
              scroll={false}
            >
            NextJs
            </Link>
          </li>
        </ul>
      </nav>
    );
};

export default Navbar;