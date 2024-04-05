export default function TabButtons({ petData, setActiveTab }) {
  return (
    <div>
      <div>
        {petData.map((petName, index) => (
          <div onClick={() => setActiveTab(index)}>{petName.animal}</div>
        ))}
      </div>
    </div>
  );
}
