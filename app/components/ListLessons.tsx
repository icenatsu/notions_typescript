"use client";

import { Icon } from "@iconify/react";
import { categoryLessonName } from "@utils/types";
import { usePathname } from "next/navigation";
import useLessons from "@Hooks/useLessons";
import Loader from "@components/Loader";
import MarkdownLinks from "@components/MarkdownLinks";
import Error from "@components/Error";

const ListLessons = () => {
  const pathname = usePathname();

  const categoryLesson = pathname.split("/")[2] as categoryLessonName;

  const { data, isPending, isError, refetch } = useLessons(categoryLesson);

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return <Error error="Erreur..." message="Désolé, nous rencontrons actuellement un problème lors du chargement des données." reset={() => refetch()}/>;
  }

  const metaAndNameLesson = data;

  const pagesSlug = metaAndNameLesson.map((markdown) => {
    if (!markdown.slug.includes("/")) return;

    const [category] = markdown.slug.split("/");
    return category;
  });

  const categorys = Array.from(new Set(pagesSlug));

  return (
    <div className="flex flex-col items-center justify-center xl:flex-row">
      {categoryLesson === "javascript" && (
        <Icon
          icon="skill-icons:javascript"
          className="mt-4 text-9xl xl:mr-20"
        />
      )}
      {categoryLesson === "typescript" && (
        <Icon
          icon="logos:typescript-icon-round"
          className="mt-4 text-9xl xl:mr-20"
        />
      )}
      {categoryLesson === "next" && (
        <Icon
          icon="teenyicons:nextjs-outline"
          className="mt-4 text-9xl xl:mr-20"
        />
      )}
      {categoryLesson === "fetch" && (
        <Icon icon="tabler:api" className="mt-4 text-9xl xl:mr-20" />
      )}
      <div className="flex flex-col items-center gap-10">
        <h1 className="m-4 text-jade11">
          {categoryLesson.charAt(0).toUpperCase() + categoryLesson.substring(1)}
        </h1>
        <section className="flex flex-col items-center">
          <h2 className="m-5 text-jade12">Catégories</h2>
          <div className="flex flex-col">
            {categorys.map((category) => (
              <>
                {category !== undefined ? (
                  <>
                    <h3>{category}</h3>
                    <div className="m-4 mt-10 flex flex-col gap-4">
                      {metaAndNameLesson
                        .filter(
                          (lesson) => lesson.slug.split("/")[0] === category,
                        )
                        .map((lesson) => (
                          <MarkdownLinks
                            key={`1_${lesson.slug}`}
                            categoryLesson={categoryLesson}
                            lesson={lesson}
                          />
                        ))}
                    </div>
                  </>
                ) : (
                  <div className="m-4 mt-10 flex flex-col gap-4">
                    {metaAndNameLesson.map((lesson) => (
                      <MarkdownLinks
                        key={`2_${lesson.slug}`}
                        categoryLesson={categoryLesson}
                        lesson={lesson}
                      />
                    ))}
                  </div>
                )}
              </>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ListLessons;
