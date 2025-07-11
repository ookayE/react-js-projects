import { useState } from "react";

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Tab 1",
      content: "This is tab 1",
    },
    {
      title: "Tab 2",
      content: "This is tab 2",
    },
    {
      title: "Tab 3",
      content: "This is tab 3",
    },
  ];

  return (
    <div>
      {/* tab buttons */}
      <div className="py-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className="mx-10 my-4 text-white px-4 py-2 rounded-lg bg-blue-500"
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* tab content */}
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabsComponent;
