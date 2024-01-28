import SwiperComponent from "@/components/Swiper";
import PortfolioCard from "@/components/portfolio-card";

const Home = () => {
  return (
    <main>
      <section>
        <div className="container mx-auto py-8 overflow-hidden">
          <h2 className="text-3xl text-primary-700 font-bold mb-4">人氣排行</h2>
          <SwiperComponent />
        </div>
      </section>
      <section>
        <div className="container mx-auto py-8">
          <h2 className="text-2xl mb-4">Home</h2>
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-4 gap-3">
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
