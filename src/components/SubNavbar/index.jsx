import clsx from "clsx";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const SubNavbar = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.hash);
  useEffect(() => {
    const onHashChange = () => {
      setCurrentPath(window.location.hash);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <nav className=" lg:w-4/5 w-full my-4 overflow-x-scroll">
      <ul className="list-none flex md:gap-12 gap-8 text-base font-bold border-slate-600/20 border-b items-center text-center">
        <li
          className={clsx(
            "py-2 ",
            currentPath === "#overview"
              ? "text-blue-600 border-blue-600 border-b-2"
              : "text-slate-600 ",
          )}
        >
          <a href="#overview">Overview</a>
        </li>
        <li
          className={clsx(
            "py-2 ",
            currentPath === "#fundamentals"
              ? "text-blue-600 border-blue-600 border-b-2"
              : "text-slate-600",
          )}
        >
          <a href="#fundamentals">Fundamentals</a>
        </li>
        <li
          className={clsx(
            "py-2 ",
            currentPath === "#newinsights"
              ? "text-blue-600 border-blue-600 border-b-2"
              : "text-slate-600",
          )}
        >
          <a href="#newinsights">New Insights</a>
        </li>
        <li
          className={clsx(
            "py-2 ",
            currentPath === "#sentiments"
              ? "text-blue-600 border-blue-600 border-b-2"
              : "text-slate-600",
          )}
        >
          <a href="#sentiments">Sentiments</a>
        </li>
        <li
          className={clsx(
            "py-2 ",
            currentPath === "#team"
              ? "text-blue-600 border-blue-600 border-b-2"
              : "text-slate-600",
          )}
        >
          <a href="#team">Team</a>
        </li>
        <li
          className={clsx(
            "py-2 ",
            currentPath === "#technicals"
              ? "text-blue-600 border-blue-600 border-b-2"
              : "text-slate-600",
          )}
        >
          <a href="#technicals">Techincals</a>
        </li>
        <li
          className={clsx(
            "py-2 ",
            currentPath === "#tokenomics"
              ? "text-blue-600 border-blue-600 border-b-2"
              : "text-slate-600",
          )}
        >
          <a href="#tokenomics">Tokenomics</a>
        </li>
      </ul>
    </nav>
  );
};

export default SubNavbar;
