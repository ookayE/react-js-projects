import Tabs from "./tabs";

function RandomComponent() {
  <div>
    <h1>Random Stuff</h1>
  </div>;
}

export default function ParentTab() {
  const tabs = [
    {
      label: "Tab1",
      content: <div>Tab 1 content</div>,
    },
    {
      label: "Tab2",
      content: <div>Tab 4 content</div>,
    },
    {
      label: "Tab3",
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <tabs tabsContent={tabs} onChange={handleChange} />;
}
