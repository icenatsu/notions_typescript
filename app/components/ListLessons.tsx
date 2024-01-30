import Link from "next/link";
import { useFetch } from "@Hooks/Fetch/useFetch";
import { lessonName } from "@/app/page";

type Markdown = {
  meta: {
    title: string;
  };
  slug: string;
};

type listLessonProps = {
  lesson: lessonName;
};

const ListLessons = ({ lesson }: listLessonProps) => {
  const { data } = useFetch<Markdown[]>(lesson);

  return (
    <div className="flex flex-col gap-10">
      <h1 className="m-4 text-jade11">
        {lesson.charAt(0).toUpperCase() + lesson.substring(1)}
      </h1>
      <section className="">
        <h2 className="m-5 text-jade12">Catégories</h2>

        <div className="m-4 flex flex-col md:flex md:flex-row gap-4 mt-10">
          {data?.map((markdown) => (
            <Link
              href={`/markdowns/${lesson}/${markdown.slug}`}
              passHref
              key={markdown.slug}
            >
              <div className="flex items-center justify-center rounded-lg border border-solid border-jade6 bg-jade3 p-4 text-jade11 hover:border-jade7 hover:text-jade12 hover:bg-jade4">
                {markdown.meta.title}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ListLessons;
