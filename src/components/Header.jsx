const Header = () => {
  return (
    <div className="flex h-auto w-full flex-row gap-[16px]">
      <div className="flex w-full flex-row gap-[16px]">
        <div className="h-[220px] w-[200px] bg-[#888888]" />
        <p>arttu ikonen</p>
      </div>
      <div className="flex w-full flex-col items-center justify-end gap-[16px]">
        <p>O O</p>
        <div className="flex h-full flex-col justify-end">
          <h1>Software Developer</h1>
          <h1>& Digital Artist</h1>
        </div>
      </div>
      <div className="flex w-full flex-col items-end gap-[16px]">
        <p>arttu.ikonen@outlook.com</p>
        <p>Linked In</p>
        <p>GitHub</p>
      </div>
    </div>
  );
};

export default Header;
