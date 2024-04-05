export default function TabContent({ petData, activeTab }) {
  const currentAnimal = petData[activeTab];

  return (
    <div>
      <div>{currentAnimal.fact}</div>
    </div>
  );
}
