import clsx from "clsx";

const SubHeader = ({ active }) => {
  return (
    <nav className=" max-w-5xl w-full my-4 overflow-x-scroll">
      <ul className="list-none flex md:gap-12 gap-8 text-base font-bold border-slate-600/20 border-b items-center text-center">
        <li
          className={clsx(
            "py-2 ",
            active
              ? "text-blue-600 border-blue-600 border-b-2"
              : "text-slate-600 ",
          )}
        >
          <a href="#">Overview</a>
        </li>
        <li
          className={clsx(
            "py-2 ",
            active
              ? "text-blue-600 border-blue-600 border-b-2"
              : "text-slate-600",
          )}
        >
          <a href="#">Fundamentals</a>
        </li>
        <li
          className={clsx(
            "py-2 ",
            active
              ? "text-blue-600 border-blue-600 border-b-2"
              : "text-slate-600",
          )}
        >
          <a href="#">New Insights</a>
        </li>
        <li
          className={clsx(
            "py-2 ",
            active
              ? "text-blue-600 border-blue-600 border-b-2"
              : "text-slate-600",
          )}
        >
          <a href="#">Sentiments</a>
        </li>
        <li
          className={clsx(
            "py-2 ",
            active
              ? "text-blue-600 border-blue-600 border-b-2"
              : "text-slate-600",
          )}
        >
          <a href="#">Team</a>
        </li>
        <li
          className={clsx(
            "py-2 ",
            active
              ? "text-blue-600 border-blue-600 border-b-2"
              : "text-slate-600",
          )}
        >
          <a href="#">Techincals</a>
        </li>
        <li
          className={clsx(
            "py-2 ",
            active
              ? "text-blue-600 border-blue-600 border-b-2"
              : "text-slate-600",
          )}
        >
          <a href="#">Tokenomics</a>
        </li>
      </ul>
    </nav>
  );
};

export default SubHeader;
