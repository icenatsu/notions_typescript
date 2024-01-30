import fs from "fs";
import path from "path";
import matter from "gray-matter";
import rehypePrettyCode from "rehype-pretty-code";
import { MDXRemote } from "next-mdx-remote/rsc";
import {visit} from "unist-util-visit"
import { Pre } from "@components/PreComponent";

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

type test = {
  category: string,
  slug: string
}

async function getPosts({ category, slug }: test) {  
  
  const markdownFile = fs.readFileSync(
    path.join("markdowns", category, slug + ".mdx"),
    "utf-8"
  );

  const { data: fontMatter, content } = matter(markdownFile);

  return {
    content,
    fontMatter,
  };
}

export default async function Page({ params }: any) {

  
  const props = await getPosts(params);

  const components = {
    Pre,
  };

  return (
    <article className="prose md:prose-md lg:prose-lg xl:prose-xl prose-slate !prose-invert mx-auto">
      <h1 className="">{props.fontMatter.title}</h1>

      <MDXRemote
        source={props.content}
        components={ components }
        options={{
          mdxOptions: {
            rehypePlugins: [
              () => (tree) => {
                visit(tree, (node) => {
                  // console.log(node?.tagName);
                  // node permet de voir tout ce que contient le mdx (h1, h3, pre, p...)

                  // On récupère uniquement tout ce qui est de tupe element et pre
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
