import fs from "fs";
import path from "path";
import matter from "gray-matter";
import rehypePrettyCode from "rehype-pretty-code";
import { MDXRemote } from "next-mdx-remote/rsc";
import { visit } from "unist-util-visit";
import { Pre } from "@components/PreComponent";
import { ColoredHeading } from "@components/CustomComponentsMdx/ColoredHeading";
import BackButton from "@/app/components/CustomComponentsMdx/BackButton";
import { categoryLessonName } from "@utils/types";
import remarkEmoji from "remark-emoji";
import remarkGfm from "remark-gfm";

// generateStaticParams remplace la fonction getStaticPaths et getStaticProps dans App router
export async function generateStaticParams() {
  const lessonsDirectory = fs.readdirSync("markdowns");

  const paths = lessonsDirectory.flatMap((categoryLesson) => {
    
    const contentLessonsDirectory = fs.readdirSync(path.join("markdowns", categoryLesson));

    return contentLessonsDirectory.flatMap((content) => {
      const itemPath = path.join("markdowns", categoryLesson, content);
      const isDirectory = fs.statSync(itemPath).isDirectory();

      if (isDirectory) {
        const directory = fs.readdirSync(itemPath);
        return directory.map((subFilename) => ({
          category: categoryLesson,
          slug: [content, subFilename.replace(".mdx", "")],
        }));
      }

      return {
        category: categoryLesson,
        slug: [content.replace(".mdx", "")],
      };
    });
  });

  return paths;
}


type getLessonsProps = {
  category: string;
  slug: string;
};

async function getLessons({ category, slug }: getLessonsProps) {

    const markdownFile = slug.length > 1
    ? fs.readFileSync(
      path.join("markdowns", category, slug[0], slug[1] + ".mdx"),
      "utf-8",
    )
    :fs.readFileSync(
      path.join("markdowns", category, slug + ".mdx"),
      "utf-8",
    );

  const { data: fontMatter, content } = matter(markdownFile);

  return {
    content,
    fontMatter,
    category,
  };
}

export default async function Page({ params }: any) {
  const props = await getLessons(params);

  const components = {
    Pre,
    ColoredHeading,
    BackButton,
  };

  return (
    <article className="md:prose-md prose prose-slate !prose-invert mx-auto lg:prose-lg xl:prose-xl">
      <div className="flex items-center justify-between">
        <h1 className="pt-10 text-jade11">{props.fontMatter.title}</h1>
        <span className="inline rounded-md border border-solid text-5xl hover:bg-jade4">
          <BackButton categoryLesson={props.category as categoryLessonName} />
        </span>
      </div>
      <MDXRemote
        source={props.content}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkEmoji as any],
            rehypePlugins: [
              () => (tree) => {
                visit(tree, (node) => {
                  // console.log(node?.tagName);
                  // node permet de voir tout ce que contient le mdx (h1, h3, pre, p...)

                  // On récupère uniquement tout ce qui est de type element et pre
                  if (node?.type === "element" && node?.tagName === "pre") {
                    // On récupère les enfants de pre avec leurs propriétés (donc code)
                    const [codeEl] = node.children;

                    if (codeEl.tagName !== "code") return;

                    // On renvoie les informations dans les props de children (pre)
                    node.properties = node.properties || {};
                    node.properties.raw = codeEl.children?.[0].value;
                    node.properties.lang =
                      codeEl.properties.className?.[0].split("-")?.[1];
                  }
                });
              },
              [
                rehypePrettyCode as any,
                {
                  defaultLang: "plaintext",
                  keepBackground: true,
                  theme: JSON.parse(
                    fs.readFileSync(
                      path.join("app", "themes", "moonlight-ii.json"),
                      "utf-8",
                    ),
                  ),
                },
              ],
              // () => (tree) => {
              //   visit(tree, 'element', (node) => {
              //     if (node?.type === 'element' && node?.tagName === 'pre') {
              //       node.properties['raw'] = node.raw
              //       console.log(node) //here to see if you're getting the raw text
              //     }
              //   })
              // },
            ],
          },
        }}
      ></MDXRemote>
    </article>
  );
}
