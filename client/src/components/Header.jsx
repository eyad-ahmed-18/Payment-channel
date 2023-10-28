import { setGlobalState } from "../store";

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between drop-shadow-md py-2 px-5 bg-black">
      <div className="flex flex-row justify-center items-center cursor-pointer">
        <span className="flex text-center text-sky-400 text-3xl font-bold">
          Payment Channel
        </span>
      </div>
      <nav className="flex flex-row justify-center items-center list-none">
        <li className="cursor-pointer mr-3"></li>
      </nav>
    </header>
  );
};

export default Header;
