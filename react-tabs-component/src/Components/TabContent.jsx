const TabContent = ({ petData, currentTab }) => {
  const currentPet = petData[currentTab];

  return (
    <>
      <span>{currentPet.fact}</span>
    </>
  );
};

export default TabContent;
