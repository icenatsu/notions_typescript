"use client";
import { usePathname } from "next/navigation";
import { categoryLessonName } from "@utils/types";
import ListLessons from "@components/ListLessons";

const Page = () => {
  const pathname = usePathname();
  const categoryLesson = pathname.split("/")[2] as categoryLessonName;

  return <>{categoryLesson !== "" && <ListLessons />}</>;
};

export default Page;
