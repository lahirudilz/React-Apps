import Tabs from "./tabs";

export default function TabTest() {
  function RandomComponent() {
    return <h1>Some random content</h1>;
  }

  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is the content of the tab1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is the content of the tab2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
