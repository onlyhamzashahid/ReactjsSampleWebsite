import React, { useState} from "react";

// using ionicons library for icons
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";



const Nav = () => {

  const [open, setOpen] = useState(true);
  
  let Links = [
    { name: "HOME", link: "/" },
    { name: "PLAY", link: "play" },
    { name: "BLOG", link: "blog" },
    { name: "ABOUT", link: "about" },
    { name: "CONTACT", link: "contact" },
  ];



 

  return (
    <>
      <div className="shadow-md w-full z-10 fixed top-0 left-0 ">
        <div className=" bg-[url('../images/background-min.png')] bg-cover bg-fixed bg-no-repeat w-full h-full z-10">
          <div className="md:flex items-center justify-between  py-4 md:px-10 px-7">

            <div className="font-bold text-white text-2xl cursor-pointer flex items-center ">
              <span className="text-3xl text-white mr-1 pt-2">
                <img
                  src={require("../images/bittorrypng100px.png")}
                  alt="Logo"
                />
              </span>
              Bittorry
            </div>

            <div
              onClick={() => setOpen(!open)}
              className=" text-3xl absolute right-8 top-6 cursor-pointer lg:hidden"
             >
              {open ? (
                <Icon icon="ic:baseline-menu" color="white" />
              ) : (
                <Icon icon="ic:baseline-close" color="white" />
              )}
            </div>

            <ul
              className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static  h-auto md:z-auto z-10 left-0  md:w-auto md:pl-0 pl-9 bg-[url('../images/background-min.png')] bg-cover bg-fixed bg-no-repeat w-full 
              ${
                open ? "Top-20 opacity-0 hidden" : "Top-[-490px]"
              } md:opacity-100`}
             >
              {Links.map((link) => (

                <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7 ">
                  <Link
                    to={link.link}
                    onClick={() => setOpen(!open)}
                    className="text-white hover:text-gray-400 duration-500 active:text-gray-500 "
                  >
                    {link.name}
                  </Link>
                </li>
                
              ))}

              <li>
               
                  <div className="grid grid-cols-2 pl-10">

                    <div>
                      <Link
                        to={"login"}
                        className="transition-all duration-100 text-center p-2 rounded-md text-white w-auto bg-gradient-to-r from-indigo-700 to-indigo-500 hover:shadow-md hover:from-indigo-500 hover:to-indigo-700 focus:outline-none focus:ring-1 focus:ring-indigo-600 "
                      >
                        Log in
                      </Link>
                    </div>

                    <div>
                      <Link
                        to={"signup"}
                        className="transition-all duration-100 text-center p-2 rounded-md text-white w-auto bg-gradient-to-r from-indigo-700 to-indigo-500 hover:shadow-md hover:from-indigo-500 hover:to-indigo-700 focus:outline-none focus:ring-1 focus:ring-indigo-600 "
                      >
                        Sign up
                      </Link>
                    </div>

                  </div>

               
              </li>
            </ul>


          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;



