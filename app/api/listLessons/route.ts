import { NextResponse, NextRequest } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const GET = async (req: NextRequest) => {
  try {
    const folder = req.nextUrl.searchParams.get("folder");
    const folderDecode = decodeURIComponent(folder as string);

    const lessonsCategoryDirectory = `markdowns/${folderDecode}/`;

    const contentlessonsCategoryDirectory = fs.readdirSync(path.join(process.cwd(), lessonsCategoryDirectory));

    const metadataAndNameLesson = contentlessonsCategoryDirectory.flatMap((content) => {
      
      const contentPath = path.join(lessonsCategoryDirectory, content);
      const isDirectory = fs.statSync(contentPath).isDirectory();

      if (isDirectory) {
        const directory = fs.readdirSync(path.join(lessonsCategoryDirectory, content), "utf-8");
        // Utiliser map ici pour traiter chaque fichier dans le répertoire
        return directory.flatMap((filename) => {
          const fileContent = fs.readFileSync(
            path.join(lessonsCategoryDirectory, content, filename),
            "utf-8",
          );
          const { data: frontMatter } = matter(fileContent);
          return {
            meta: frontMatter,
            slug: `${content}/${filename.replace(".mdx", "")}`,
          };
        });
      }
      // Si ce n'est pas un répertoire, traiter simplement le fichier actuel
      const fileContent = fs.readFileSync(
        path.join(lessonsCategoryDirectory, content),
        "utf-8",
      );
      const { data: frontMatter } = matter(fileContent);
      return {
        meta: frontMatter,
        slug: content.replace(".mdx", ""),
      };
    });
    
    return NextResponse.json(metadataAndNameLesson, { status: 200 });
  } catch (error) {
    throw error;
  }
};
