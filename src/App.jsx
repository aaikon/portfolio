import Header from "./components/Header";
import Projects from "./components/Projects";

const App = () => {
  const projects = [
    {
      id: 1,
      title: "TITLE",
      date: "2023-10-01",
      link: "http://localhost:5173/",
      tags: ["REACT", "TAILWIND"],
    },
    {
      id: 2,
      title: "TITLE",
      date: "2023-10-01",
      link: "http://localhost:5173/",
      tags: ["REACT", "TAILWIND"],
    },
    {
      id: 3,
      title: "TITLE",
      date: "2023-10-01",
      link: "http://localhost:5173/",
      tags: ["REACT", "TAILWIND"],
    },
  ];
  return (
    <div className="h-fit w-full p-4 flex flex-col gap-4">
      <Header />
      <Projects projects={projects} />
    </div>
  );
};

export default App;
