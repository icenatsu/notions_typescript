"use client";
import Link from "next/link";
import { getData } from "@utils/getData";
import { Icon } from "@iconify/react";
import { lessonName } from "@components/NavLinks";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { LessonsResponse } from "@utils/types";
import { LessonsSchema } from "@utils/schemas";

const ListLessons = () => {
  const pathname = usePathname();
  const lesson = pathname.split("/")[2] as lessonName;

  const [data, setData] = useState<LessonsResponse | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    getData(lesson, abortController.signal, LessonsSchema)
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        if (e.name === "AbortError") return;

        setData([]);

        throw { e };
      });

    return () => {
      abortController.abort;
    };
  }, [lesson]);

  return (
    <div className="flex flex-col items-center justify-center xl:flex-row">
      {lesson === "javascript" && (
        <Icon
          icon="skill-icons:javascript"
          className="mt-4 text-9xl xl:mr-20"
        />
      )}
      {lesson === "typescript" && (
        <Icon
          icon="logos:typescript-icon-round"
          className="mt-4 text-9xl xl:mr-20"
        />
      )}
      {lesson === "next" && (
        <Icon
          icon="teenyicons:nextjs-outline"
          className="mt-4 text-9xl xl:mr-20"
        />
      )}
      {lesson === "fetch" && (
        <Icon icon="tabler:api" className="mt-4 text-9xl xl:mr-20" />
      )}
      <div className="flex flex-col items-center gap-10">
        <h1 className="m-4 text-jade11">
          {lesson.charAt(0).toUpperCase() + lesson.substring(1)}
        </h1>
        <section className="">
          <h2 className="m-5 text-jade12">Catégories</h2>

          <div className="m-4 mt-10 flex flex-col gap-4">
            {data?.map((markdown) => (
              <Link
                key={markdown.slug}
                href={`/markdowns/${lesson}/${markdown.slug}`}
                passHref
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
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ListLessons;
