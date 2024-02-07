'use client'
import { usePathname } from 'next/navigation'
import { lessonName } from "@components/NavLinks";
import ListLessons from "@components/ListLessons";

const Page = () => {
    const pathname = usePathname()
    const lesson = pathname.split('/')[2] as lessonName

    return (
        <>
            {lesson === "typescript" && <ListLessons />}
            {lesson === "next" && <ListLessons />}
            {lesson === "fetch" && <ListLessons />}
            {lesson === "javascript" && <ListLessons />}
        </>
    );
};

export default Page;