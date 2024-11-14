import List from "./List";

const settings = [
  {
    id: 100,
    icon: "/src/assets/home.svg",
    text: "Dashboard",
  },
  {
    id: 200,
    icon: "/src/assets/user.svg",
    text: "Docentes",
  },
  {
    id: 300,
    icon: "/src/assets/clock.svg",
    text: "Checador",
  },
];

const Lists = ({ navState }) => {
  return (
    <>
      {settings.map((list) => (
        <List
          navState={navState}
          key={list.id}
          icon={list.icon}
          text={list.text}
        />
      ))}
    </>
  );
};

export default Lists;
