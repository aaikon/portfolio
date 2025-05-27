const Header = () => {
  return (
    <div className="flex h-auto w-full flex-row gap-4">
      <div className="flex w-full flex-row gap-4">
        <div className="h-[220px] w-[200px] bg-[#888888]" />
        <p>arttu ikonen</p>
      </div>
      <div className="flex w-full flex-col items-center justify-end gap-4">
        <p>O O</p>
        <div className="flex h-full flex-col justify-end">
          <h1>Software Developer</h1>
          <h1>& Digital Artist</h1>
        </div>
      </div>
      <div className="flex w-full flex-col items-end gap-4">
        <p>arttu.ikonen@outlook.com</p>
        <a
          href="https://www.linkedin.com/in/arttu-ikonen-657911367/"
          target="_blank"
        >
          Linked In
        </a>
        <a href="https://github.com/aaikon" target="_blank">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Header;
