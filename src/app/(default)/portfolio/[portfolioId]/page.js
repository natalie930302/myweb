import Image from "next/image";
import Link from "next/link";

const Portfolio = ({ params }) => {
  return (
    <main>
      <section>
        <h2 className="text-2xl mb-4">
          Welcome to My Portfolio {params.portfolioId}
        </h2>
        <p>This is a simple interface designed using Next.js and React.</p>
      </section>
    </main>
  );
};

export default Portfolio;
