import { categoryLessonName } from "@utils/types";
import Link from "next/link";

type MarkdownLinksProps = {
  categoryLesson: categoryLessonName;
  lesson: {
    slug: string;
    meta: {
      title: string;
      description: string;
    };
  };
};

const MarkdownLinks = ({ categoryLesson, lesson }: MarkdownLinksProps) => {
  return (
    <Link
      href={`/markdowns/${categoryLesson}/${lesson.slug}`}
      passHref
      key={lesson.meta.title}
    >
      <div className="flex flex-col items-center xl:flex-row">
        <div className="flex min-w-full items-center justify-center rounded-lg border border-solid border-jade6 bg-jade3 p-4 text-jade11 hover:border-jade7 hover:bg-jade4 hover:text-jade12 xl:min-w-[400px]">
          {lesson.meta.title}
        </div>
        <div className="pl-4 text-base">{lesson.meta.description}</div>
      </div>
    </Link>
  );
};

export default MarkdownLinks;
