import Header from "./components/Header";
import Projects from "./components/Projects";

const App = () => {
  const projects = [
    {
      id: 1,
      title: "TITLE",
      date: "2023-10-01",
      tags: ["REACT", "TAILWIND"],
    },
    {
      id: 2,
      title: "TITLE",
      date: "2023-10-01",
      tags: ["REACT", "TAILWIND"],
    },
    {
      id: 3,
      title: "TITLE",
      date: "2023-10-01",
      tags: ["REACT", "TAILWIND"],
    },
  ];
  return (
    <div className="h-fit w-full p-4">
      <Header />
      <div className="h-[400px]" />
      <Projects projects={projects} />
    </div>
  );
};

export default App;
