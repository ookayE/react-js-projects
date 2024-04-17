import { useState } from "react";
import TabButtons from "./Components/TabButtons";
import TabContent from "./Components/TabContent";

const App = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const petData = [
    {
      animal: "Cheetah",
      fact: "Cheetahs are the fastest land animals, capable of reaching speeds up to 75 mph.",
    },
    {
      animal: "Koala",
      fact: "Koalas sleep around 20 hours a day and are known for their eucalyptus diet.",
    },
    {
      animal: "Elephant",
      fact: "Elephants have the largest brains among land animals and demonstrate remarkable intelligence.",
    },
    {
      animal: "Zebra",
      fact: "Zebras have distinctive black and white stripes that act as a natural defense against predators.",
    },
    {
      animal: "Horse",
      fact: "Horses have excellent memory and are capable of recognizing human emotions.",
    },
  ];
  return (
    <>
      <TabButtons petData={petData} setCurrentTab={setCurrentTab} />
      <TabContent petData={petData} currentTab={currentTab} />
    </>
  );
};

export default App;