import Header from "./components/Header";
import Projects from "./components/Projects";

const App = () => {
  const projects = [
    {
      title: "TITLE",
      tags: ["REACT", "TAILWIND"],
    },
    {
      title: "TITLE",
      tags: ["REACT", "TAILWIND"],
    },
    {
      title: "TITLE",
      tags: ["REACT", "TAILWIND"],
    },
    {
      title: "TITLE",
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
