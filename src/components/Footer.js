import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {

    let Links = [
      { name: "HOME", link: "/" },
      { name: "Play", link: "/play" },
      { name: "ABOUT", link: "/about" },
      { name: "BLOG", link: "/blog" },
      { name: "CONTACT", link: "/contact" },
    ];
  return (
    <div >
      <footer className="bg-[url('../images/background-min.png')] bg-cover bg-fixed bg-no-repeat w-full h-full">
        <div className="max-w-5xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="flex justify-center text-white" >
            <div className="font-bold text-2xl cursor-pointer flex items-center ">
              <span className="text-3xl text-indigo-600 mr-1 pt-2">
                <img
                  src={require("../images/bittorrypng100px.png")}
                  alt="Logo"
                />
              </span>
              Bittorry
            </div>
          </div>

          <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-400">
            Easy to play and trusted play to earn games with just one click.
          </p>

          <nav className="mt-12" aria-labelledby="footer-navigation">
            <h2 className="sr-only" id="footer-navigation">
              Footer navigation
            </h2>

            <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
              {Links.map((link) => (
                <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                  <Link
                    to={link.link}
                    className="text-white transition hover:text-white/75"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* <hr className="bg-white h-2 w-1/4 self-center" /> */}

          <div className="pt-6 mt-10 border-t border-gray-800">
            <div className="flex justify-between text-center sm:flex sm:justify-between sm:text-left">
              <p className="mt-3 text-sm text-gray-400 sm:order-first sm:mt-0">
                &copy; 2022 Bittorry
              </p>

              <div className="flex justify-evenly">
                <p>
                  <span className="text-gray-400 sm:inline">
                    All rights reserved.
                  </span>
                </p>

                <a
                  className="inline-block text-indigo-500 underline transition hover:text-indigo-400"
                  href="/"
                >
                  Terms & Conditions
                </a>

                <span>&middot;</span>

                <a
                  className="inline-block text-indigo-500 underline transition hover:text-indigo-400"
                  href="/"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer