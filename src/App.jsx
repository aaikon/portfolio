import Header from "./components/Header";
import Content from "./components/Content";
import Projects from "./components/Projects";

const App = () => {
  const projects = [
    {
      title: "MALVAH",
      image: "./image-1.png",
      tags: ["Next.js", "React"],
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
    },
    {
      title: "STUDIO FREIGHT",
      image: "./image-2.png",
      tags: ["Next.js", "React Three Fiber", "React"],
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
    },
  ];

  return (
    <div className="w-full p-4">
      <Header />
      <Content />
      <Projects projects={projects} />
    </div>
  );
};

export default App;
