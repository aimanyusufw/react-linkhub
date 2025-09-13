import React, { useState } from "react";
import { links } from "./const/data";
import { FaChevronDown } from "react-icons/fa6";

const App = () => {
  const [openGroup, setOpenGroup] = useState(null);

  const toggleGroup = (name) => {
    setOpenGroup(openGroup === name ? null : name);
  };

  return (
    <main className="h-screen">
      <div className="max-w-2xl mx-auto h-screen relative">
        {/* Header */}
        <div>
          <div className="relative bg-black text-white py-40 md:py-72">
            <img
              src={"profile-2.jpg"}
              alt="Aiman Yusuf Wicaksono"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 w-full p-10 text-white bg-gradient-to-t from-black/90 to-transparent flex flex-col items-center justify-end">
              <h1 className="font-semibold uppercase text-2xl text-center">
                Aiman Yusuf Wicaksono
              </h1>
              <h3 className="text-sm mt-2 text-slate-300">Software Engineer</h3>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-5 mt-10 p-8">
          {links.map((data) => {
            const Icon = data.icon;
            if (data.children) {
              // Section with children (collapsible)
              return (
                <div key={data.name} className="w-full md:w-3/4 mx-auto">
                  <button
                    onClick={() => toggleGroup(data.name)}
                    className="w-full py-3 px-8 md:py-5 relative md:px-10 flex items-center border rounded-full font-semibold"
                  >
                    <Icon className="w-6 h-6" />
                    <span className="text-center w-full uppercase text-sm md:text-lg">
                      {data.name}
                    </span>
                    <FaChevronDown
                      className={`transition-all duration-200 ${
                        openGroup != null ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {/* Children links */}
                  <div
                    className={`mt-3 grid grid-cols-4 overflow-hidden transition-all duration-300 ease-in-out ${
                      openGroup === data.name
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {data.children.map((child) => {
                      const ChildIcon = child.icon;
                      return (
                        <a
                          href={child.isRelease ? child.url : "/"}
                          target={child.isRelease ? "_blank" : undefined}
                          key={child.url}
                          className="py-5 px-4 relative font-medium rounded-xl flex flex-col items-center justify-center "
                        >
                          <ChildIcon className="w-6 h-6 mb-2" />
                          <span className="text-center text-sm">
                            {child.name}
                          </span>

                          {/* Optional "Soon" badge */}
                          {!child.isRelease && (
                            <span class="top-5 right-10 absolute w-4 h-4 bg-yellow-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
                          )}
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            } else {
              // Normal single link
              return (
                <a
                  href={data.isRelease ? data.url : "/"}
                  target={data.isRelease ? "_blank" : undefined}
                  key={data.url}
                  className="py-3 px-8 md:py-5 relative md:px-10 flex items-center border rounded-full w-full md:w-3/4 mx-auto font-semibold"
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-center text-sm md:text-lg w-full uppercase">
                    {data.name}
                  </span>
                  {!data.isRelease && (
                    <span className="absolute top-0 -right-5 bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Soon
                    </span>
                  )}
                </a>
              );
            }
          })}
        </div>
        <footer className="mt-10 text-sm text-slate-300 text-center">
          Made By{" "}
          <a href="https://aimanyusuf.me" className="underline">
            Aiman
          </a>{" "}
          with love 💗
        </footer>
      </div>
    </main>
  );
};

export default App;
