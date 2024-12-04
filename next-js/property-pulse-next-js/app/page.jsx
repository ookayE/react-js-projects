import Hero from "@/components/Hero";
import HomePoperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes";
import connectDB from "@/config/db";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <InfoBoxes />
      <HomePoperties />
    </div>
  );
};

export default HomePage;
