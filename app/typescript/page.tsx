import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function Home() {
  // Nom du répertoire qui contient les markdowns
  const blogDir = "markdowns";

  // files représentes tous les fichiers contenu dans blog
  const files = fs.readdirSync(path.join(blogDir));

  // On map le répertoire pour lire les fichiers
  const markdowns = files.map((filename) => {
    // Ce qui est contenu dans chacun des fichiers
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

    // Extraire les métadonnées de chaque contenu de blog
    const { data: frontMatter } = matter(fileContent);

    return {
      meta: frontMatter,
      // frontMatter corresponds aux métadonnées des blog
      //{
      //title: 'My First Blog',
      //date: '23th June 2023',
      //description: 'Welcome to my first blog in next.js app'
      //}
      slug: filename.replace(".mdx", ""),
      // On supprime .mdx => first.blog.mdx devient first.blog
    };
  });
  return (
    <div className="flex flex-col gap-10">
      <h1 className="m-4 text-jade11">Typescript</h1>
      <section className="">
        <h2 className="m-5 text-jade12">Catégories</h2>

        <div className="flex gap-4 m-4">
          {markdowns.map((markdowns) => (
            <Link
              href={"/markdowns/" + markdowns.slug}
              passHref
              key={markdowns.slug}
            >
              <div className="flex items-center justify-center rounded-lg border border-solid border-jade6 bg-jade2 p-4 text-jade7 hover:border-jade8 hover:text-jade8">
                  {markdowns.meta.title}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
