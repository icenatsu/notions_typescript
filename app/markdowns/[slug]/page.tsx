import fs from "fs";
import path from "path";
import matter from "gray-matter";
import css from "./page.module.css";
import rehypePrettyCode from "rehype-pretty-code";
import { MDXRemote } from "next-mdx-remote/rsc";
import Button from "@components/Test/Test"

// app/[...slug]/page.js

// generateStaticParams remplace la fonction getStaticPaths et getStaticProps dans App router
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("markdowns"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

async function getPosts({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("markdowns", slug + ".mdx"),
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
    h1: (props: any) => (
        <>
      <h1 {...props} className="large-text">
        {props.children}
      </h1>
      <div>coucou</div>
      </>
    ),
  }

  return (
    <article className={css.article}>
      <h1>{props.fontMatter.title}</h1>

      <MDXRemote
        source={props.content}
        components={{Button}}
        options={{
          mdxOptions: {
            rehypePlugins: [
              [
                rehypePrettyCode as any,
                {
                  defaultLang: "plaintext",
                  // keepBackground: false,
                  theme: JSON.parse(
                    fs.readFileSync(
                      path.join("app", "themes", "moonlight-ii.json"),
                      "utf-8"
                    )
                  ),
                },
              ],
            ],
          },
        }}
      ></MDXRemote>
    </article>
  );
}
