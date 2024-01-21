import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import css from "./page.module.css"


export default function Home() {
  // Nom du répertoire qui contient les markdowns
  const blogDir  = "markdowns";

  // files représentes tous les fichiers contenu dans blog
  const files = fs.readdirSync(path.join(blogDir));

  // On map le répertoire pour lire les fichiers
  const markdowns =  files.map(filename =>{

    // Ce qui est contenu dans chacun des fichiers 
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8')    

    // Extraire les métadonnées de chaque contenu de blog
    const {data: frontMatter} = matter(fileContent);
    
    return {
      meta: frontMatter,
      // frontMatter corresponds aux métadonnées des blog
      //{
      //title: 'My First Blog',
      //date: '23th June 2023',
      //description: 'Welcome to my first blog in next.js app'
      //}
      slug: filename.replace('.mdx', '')
      // On supprime .mdx => first.blog.mdx devient first.blog
    }

  })
  return (
    <div className={css.typescript}>
      <h1 className={css.title}>
        Typescript
      </h1>

      <section className={css.subtitle}>
      <h2 className='text-2xl font-blod'>
        Catégories
      </h2>

      <div className={css.markdowns}>
        {markdowns.map(markdowns =>(
          <Link href={'/markdowns/' + markdowns.slug} passHref key={markdowns.slug}>
            <div className={css.metamarkdown}>
              <div>
                <h3 className={css.metamarkdown__title}>
                  {markdowns.meta.title}
                </h3>
                <div>
                  <p className={css.metamarkdown__description}>{markdowns.meta.description}</p>
                </div>
              </div> 
            </div>
          </Link>
        ))}
      </div>
      </section>
    </div>
  )
}
