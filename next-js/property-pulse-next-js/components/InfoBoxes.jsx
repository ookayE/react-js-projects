import InfoBox from "./InfoBox";

const HerBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox />
          <InfoBox />
        </div>
      </div>
    </section>
  );
};

export default HerBoxes;
