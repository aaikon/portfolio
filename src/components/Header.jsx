const Header = () => {
  return (
    <div className="flex h-auto w-full flex-row gap-4">
      <div className="flex w-full flex-row gap-4">
        <div className="h-[220px] w-[200px] bg-[#888888]" />
        <p>arttu ikonen</p>
      </div>
      <div className="flex w-full flex-col items-center justify-end gap-4">
        <div className="flex h-full flex-col justify-end">
          <h1 className="pl-[104px] text-[42px] text-nowrap">
            Software Developer
          </h1>
          <h1 className="text-[42px] text-nowrap">& Digital Artist</h1>
        </div>
      </div>
      <div className="flex w-full flex-col   items-end gap-4">
        <p>arttu.ikonen@outlook.com</p>
        <div className="flex flex-row">
          <a
            className="pr-[10px]"
            href="https://www.linkedin.com/in/arttu-ikonen-657911367/"
            target="_blank"
          >
            Linked In
          </a>
          <img src={"./icons/arrow.svg"} />
        </div>
        <div className="flex flex-row">
          <a
            className="pr-[10px]"
            href="https://github.com/aaikon"
            target="_blank"
          >
            GitHub
          </a>
          <img src={"./icons/arrow.svg"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
