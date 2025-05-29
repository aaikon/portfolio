const Header = () => {
  return (
    <header className="flex h-fit w-full items-end justify-between">
      <div className="flex flex-row items-center gap-2">
        <h1>ARTTU IKONEN</h1>
        <h2>SOFTWARE DEVELOPER</h2>
      </div>
      <div className="flex flex-row items-center gap-2">
        <h1>TURKU</h1>
        <div className="size-2 rounded-full bg-white" />
      </div>
    </header>
  );
};

export default Header;
