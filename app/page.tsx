"use client";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="min-w-[200px] max-w-[700px] whitespace-pre-wrap p-2 text-justify text-base lg:text-xl">
        {`Bienvenue dans ce que je dénomme mon répertoire de révisions.\n\nLorsque j'assimile de nouvelles connaissances à travers diverses formations, j'apprécie de consigner ce que j'ai appris et de le rédiger à ma manière, en plus de pratiquer simultanément (merci à Melvynx pour sa formation fort enrichissante).\n\nCette démarche m'a incité à concevoir un site web comprenant des articles de blog. Pour ce faire, j'ai opté pour le balisage Markdown, car je souhaitais pouvoir rédiger mes leçons de manière simple, tout en bénéficiant de la syntaxe de code et de la coloration syntaxique pour les divers exemples que je peux aisément copier grâce à un bouton dédié.\n\nCette méthode m'aide à mieux mémoriser ce que j'assimile et à m'organiser de manière efficace. La création de ce site m'a également permis d'acquérir des compétences telles que la vérification des types provenant d'une API, la mise en cache des données avec React Query, et l'exploitation de la puissance de TypeScript, qui vise à renforcer la cohésion du code.\n\nLes concepts et le fonctionnement de NextJS ainsi que l'utilisation de Tailwind étaient également au coeur de cet apprentissage`}
      </p>
    </div>
  );
};

export default Home;
