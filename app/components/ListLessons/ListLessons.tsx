import Link from "next/link";
import { useFetch } from "@Hooks/Fetch/useFetch";

type Markdown = {
  meta: {
    title: string;
  };
  slug: string;
}

const ListLessons = () => {

  const { data } = useFetch<Markdown[]>('typescript')

  return (
    <div className="flex flex-col gap-10">
      <h1 className="m-4 text-jade11">Typescript</h1>
      <section className="">
        <h2 className="m-5 text-jade12">Catégories</h2>

        <div className="flex gap-4 m-4">
          {data?.map((markdown) => (
            <Link
              href={`/markdowns/${markdown.slug}`}
              passHref
              key={markdown.slug}
            >
              <div className="flex items-center justify-center rounded-lg border border-solid border-jade6 bg-jade2 p-4 text-jade7 hover:border-jade8 hover:text-jade8">
                {markdown.meta.title}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ListLessons;