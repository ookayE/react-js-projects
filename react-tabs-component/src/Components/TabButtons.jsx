const TabButtons = ({ petData, setCurrentTab }) => {
  return (
    <>
      {petData.map((petItem, index) => (
        <li key={petItem.animal} onClick={() => setCurrentTab(index)}>
          {petItem.animal}
        </li>
      ))}
    </>
  );
};

export default TabButtons;
