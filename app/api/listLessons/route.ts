import { NextResponse, NextRequest } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const GET = async (req: NextRequest) => {

  try {
      const folder = req.nextUrl.searchParams.get("folder")
      
      const blogDir = `markdowns/${folder}/`;
      const files = fs.readdirSync(path.join(blogDir));
        
      const markdowns = files.map((filename) => {
        const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");
        const { data: frontMatter } = matter(fileContent);
        
        return {
          meta: frontMatter,
          slug: filename.replace(".mdx", ""),
        };
      });
      
      return NextResponse.json( markdowns, {status: 200});
    } catch (error) {
      throw error;
    }
  };
  
