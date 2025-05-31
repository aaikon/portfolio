const Header = () => {
  return (
    <header className="flex h-fit w-full items-end justify-between">
      <div className="flex flex-row items-center gap-2 w-full justify-start">
        <h1>ARTTU IKONEN</h1>
        <h2>SOFTWARE DEVELOPER</h2>
      </div>
      <div className="flex flex-row items-center gap-2  w-full justify-center">
        <a href="https://github.com/aaikon" target="_blank">
          GITHUB
        </a>
        <a
          href="https://www.linkedin.com/in/arttu-ikonen-657911367/"
          target="_blank"
        >
          LINKED IN
        </a>
      </div>
      <div className="flex flex-row items-center gap-2  w-full justify-end">
        <h1>TURKU</h1>
        <div className="size-2 rounded-full bg-white" />
      </div>
    </header>
  );
};

export default Header;
