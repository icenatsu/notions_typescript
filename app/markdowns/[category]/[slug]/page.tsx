import fs from "fs";
import path from "path";
import matter from "gray-matter";
import rehypePrettyCode from "rehype-pretty-code";
import { MDXRemote } from "next-mdx-remote/rsc";
import {visit} from "unist-util-visit"
import {Pre} from "@components/PreComponent";
import {ColoredHeading} from "@components/CustomComponentsMdx/ColoredHeading";
import BackButton from "@/app/components/CustomComponentsMdx/BackButton";
import { lessonName } from "@components/NavLinks";
import remarkEmoji from "remark-emoji"


// generateStaticParams remplace la fonction getStaticPaths et getStaticProps dans App router
export async function generateStaticParams() {
  const mdDir = fs.readdirSync(path.join("markdowns"));

  const paths = mdDir.flatMap((dir) => {
    const files = fs.readdirSync(path.join("markdowns", dir));    

    return files.map((filename) => ({      
      category: dir, // Catégorie représente le lien après /markdowns/[category]/
      slug: filename.replace(".mdx", ""), // Slug représente le lien après /markdowns/[category]/[slug]
    }));
  });
  
  return paths
}

type getLessonsProps = {
  category: string,
  slug: string
}

async function getLessons({ category, slug }: getLessonsProps) {  
  
  const markdownFile = fs.readFileSync(
    path.join("markdowns", category, slug + ".mdx"),
    "utf-8"
  );

  const { data: fontMatter, content } = matter(markdownFile);

  return {
    content,
    fontMatter,
    category
  };
}

export default async function Page({ params }: any) {

  const props = await getLessons(params);

  const components = {
    Pre,
    ColoredHeading,
    BackButton
  };

  return (
    <article className="prose md:prose-md lg:prose-lg prose-slate !prose-invert mx-auto">
      <div className="flex items-center justify-between">
      <h1 className="text-jade11 pt-10">{props.fontMatter.title}</h1>
      <span className="inline text-5xl border border-solid rounded-md hover:bg-jade4">
        <BackButton lesson = {props.category as lessonName}/>
      </span>
      </div>
      <MDXRemote
        source={props.content}
        components={ components }
        options={{
          mdxOptions: {
            remarkPlugins: [remarkEmoji as any],
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
                    node.properties.lang = codeEl.properties.className?.[0].split("-")?.[1];
                    
                  }
                });
              },
              [ 
                rehypePrettyCode as any,
                {
                  defaultLang: "plaintext",
                  keepBackground: false,
                  theme: JSON.parse(
                    fs.readFileSync(
                      path.join("app", "themes", "moonlight-ii.json"),
                      "utf-8"
                    )
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
