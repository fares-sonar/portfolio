import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("mode") ?? "bg-primary"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("bg-primary");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("bg-primary");
    }
  }, [theme]);
  return (
    <header className="flex items-center justify-between px-9 mt-5 " id="up">
      <div>
        <button
          className="icon-bars block md:hidden bg-header p-3 rounded-full text-subtitle border border-border transition-colors hover:text-title  "
          onClick={() => {
            setShowModal(true);
          }}
        />
      </div>

      <nav className="hidden md:block bg-header px-6 py-3 rounded-3xl shadow">
        <ul className="flex gap-4">
          <li>
            <a 
              className="text-title text-[.88rem] opacity-90 font-medium hover:text-[.9rem] hover:text-blue hover:opacity-100 transition-colors  "
              href="#hero"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-title text-[.88rem] opacity-90 font-medium hover:text-[.9rem] hover:text-blue hover:opacity-100 transition-colors  "
              href="#"
            >
              Articles
            </a>
          </li>
          <li>
            <a 
              className="text-title text-[.88rem] opacity-90 font-medium hover:text-[.9rem] hover:text-blue hover:opacity-100 transition-colors  "
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="text-title text-[.88rem] opacity-90 font-medium hover:text-[.9rem] hover:text-blue hover:opacity-100 transition-colors  "
              href="#"
            >
              Speaking
            </a>
          </li>
          <li>
            <a 
              className="text-title text-[.88rem] opacity-90 font-medium hover:text-[.9rem] hover:text-blue hover:opacity-100 transition-colors  "
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          localStorage.setItem(
            "mode",
            theme === "bg-primary" ? "light" : "bg-primary"
          );
          setTheme(localStorage.getItem("mode"));
        }}
        className={`${
          localStorage.getItem("mode") === "bg-primary"
            ? "icon-moon-o text-subtitle"
            : "icon-sun text-orange-300"
        }  text-[1.2rem] bg-header p-3 rounded-full border-orange-300 border-opacity-25  border border-border transition-colors hover:text-title`}
      />

      {showModal && (
        <div className="fixed inset-0 bg-modalBg backdrop-blur">
          <ul className="container mx-auto mt-8 px-4 py-8 bg-secondary rounded-2xl space-y-2 animate-popUp  ">
            <li className="text-white text-right">
              <button
                className="icon-close text-subtitle text-xl transition-colors hover:text-title"
                onClick={() => {
                  setShowModal(false);
                }}
              />
            </li>
            <li className="border-b border-border pb-4">
              <a
                className="text-title text-[.88rem] opacity-90 font-medium hover:text-[.9rem] hover:text-blue hover:opacity-100 transition-colors  "
                href="#"
              >
                Home
              </a>
            </li>
            <li className="border-b border-border pb-4">
              <a
                className="text-title text-[.88rem] opacity-90 font-medium hover:text-[.9rem] hover:text-blue hover:opacity-100 transition-colors  "
                href="#"
              >
                Articles
              </a>
            </li>
            <li className="border-b border-border pb-4">
              <a
                className="text-title text-[.88rem] opacity-90 font-medium hover:text-[.9rem] hover:text-blue hover:opacity-100 transition-colors  "
                href="#"
              >
                Projects
              </a>
            </li>
            <li className="border-b border-border pb-4">
              <a
                className="text-title text-[.88rem] opacity-90 font-medium hover:text-[.9rem] hover:text-blue hover:opacity-100 transition-colors  "
                href="#"
              >
                Speaking
              </a>
            </li>
            <li className="">
              <a
                className="text-title text-[.88rem] opacity-90 font-medium hover:text-[.9rem] hover:text-blue hover:opacity-100 transition-colors  "
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
5;
