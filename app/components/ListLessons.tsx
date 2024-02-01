import Link from "next/link";
import { useFetch } from "@Hooks/Fetch/useFetch";
import { lessonName } from "@/app/page";
import { Icon } from "@iconify/react";
import { LessonsResponse } from "@Hooks/Fetch/useFetch"


type listLessonProps = {
  lesson: lessonName;
};

const ListLessons = ({ lesson }: listLessonProps) => {
  const { data } = useFetch<LessonsResponse>(lesson);

  return (
    <div className="flex flex-col items-center justify-center xl:flex-row">
      {lesson === "typescript" && (
        <Icon icon="logos:typescript-icon-round" className="mt-4 xl:mr-20 text-9xl" />
      )}
      {lesson === "next" && (
        <Icon icon="teenyicons:nextjs-outline" className="mt-4 xl:mr-20 text-9xl" />
      )}
      {lesson === "fetch" && (
        <Icon icon="tabler:api" className="mt-4 xl:mr-20 text-9xl" />
      )}

      <div className="flex flex-col items-center gap-10">
        <h1 className="m-4 text-jade11">
          {lesson.charAt(0).toUpperCase() + lesson.substring(1)}
        </h1>
        <section className="">
          <h2 className="m-5 text-jade12">Catégories</h2>

          <div className="m-4 mt-10 flex flex-col gap-4">
            {data?.map((markdown) => (
              <>
                <Link
                  href={`/markdowns/${lesson}/${markdown.slug}`}
                  passHref
                  key={markdown.slug}
                >
                  <div className="flex flex-col items-center xl:flex-row">
                    <div className="flex min-w-full items-center justify-center rounded-lg border border-solid border-jade6 bg-jade3 p-4 text-jade11 hover:border-jade7 hover:bg-jade4 hover:text-jade12 xl:min-w-[400px]">
                      {markdown.meta.title}
                    </div>
                    <div className="pl-4 text-base">
                      {markdown.meta.description}
                    </div>
                  </div>
                </Link>
              </>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ListLessons;
