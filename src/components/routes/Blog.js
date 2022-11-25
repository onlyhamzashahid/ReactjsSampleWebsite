import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";



function Blog() {

   useEffect(() => {
     AOS.init({
       duration: 800,
       offset: 150,
       easing: "ease",
       once: false,
     });
   });

   
  return (
    <>
      <div className="bg-[url('../images/background-min.png')] bg-cover bg-fixed bg-no-repeat w-full h-full">
        <section className=" px-10 py-12 flex justify-center flex-row items-center">
          <div className="container px-6 pt-14 mx-auto">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-white capitalize lg:text-4xl">
                From the blog
              </h1>

              <p className="max-w-lg mx-auto mt-4 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                veritatis sint autem nesciunt, laudantium quia tempore delect
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
              <div data-aos="zoom-in">
                <img
                  className="relative  object-cover w-full rounded-tl-3xl rounded-br-3xl h-96"
                  src={require("../routes/routesimages/blog3.jpg")}
                  alt="Logo"
                />

                <div className="relative  max-w-lg p-6 mx-auto -mt-20 bg-white rounded-tl-3xl rounded-br-3xl shadow dark:bg-gray-900">
                  <a
                    href="/"
                    className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                  >
                    All the features you want to know
                  </a>

                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure veritatis sint autem nesciunt, laudantium quia tempore
                    delect
                  </p>

                  <p className="mt-3 text-sm text-blue-500">21 October 2019</p>
                </div>
              </div>

              <div data-aos="zoom-in">
                <img
                  className="relative  object-cover w-full rounded-tl-3xl rounded-br-3xl h-96"
                  src={require("../routes/routesimages/blog2.jpg")}
                  alt="Logo"
                />

                <div className="relative  max-w-lg p-6 mx-auto -mt-20 bg-white rounded-tl-3xl rounded-br-3xl shadow dark:bg-gray-900">
                  <a
                    href="/"
                    className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                  >
                    How to use sticky note for problem solving
                  </a>

                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure veritatis sint autem nesciunt, laudantium quia tempore
                    delect
                  </p>

                  <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
                </div>
              </div>

              <div data-aos="zoom-in">
                <img
                  className="relative  object-cover w-full rounded-tl-3xl rounded-br-3xl h-96"
                  src={require("../routes/routesimages/blog2.jpg")}
                  alt="Logo"
                />

                <div className="relative  max-w-lg p-6 mx-auto -mt-20 bg-white rounded-tl-3xl rounded-br-3xl shadow dark:bg-gray-900">
                  <a
                    href="/"
                    className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                  >
                    How to use sticky note for problem solving
                  </a>

                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure veritatis sint autem nesciunt, laudantium quia tempore
                    delect
                  </p>

                  <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
                </div>
              </div>

              <div data-aos="zoom-in">
                <img
                  className="relative object-cover w-full rounded-tl-3xl rounded-br-3xl h-96"
                  src={require("../routes/routesimages/blog2.jpg")}
                  alt="Logo"
                />

                <div className="relative  max-w-lg p-6 mx-auto -mt-20 bg-white rounded-tl-3xl rounded-br-3xl shadow dark:bg-gray-900">
                  <a
                    href="/"
                    className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                  >
                    How to use sticky note for problem solving
                  </a>

                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure veritatis sint autem nesciunt, laudantium quia tempore
                    delect
                  </p>

                  <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
                </div>
              </div>

              <div data-aos="zoom-in">
                <img
                  className="relative  object-cover w-full rounded-tl-3xl rounded-br-3xl h-96"
                  src={require("../routes/routesimages/blog2.jpg")}
                  alt="Logo"
                />

                <div className="relative  max-w-lg p-6 mx-auto -mt-20 bg-white rounded-tl-3xl rounded-br-3xl shadow dark:bg-gray-900">
                  <a
                    href="/"
                    className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                  >
                    How to use sticky note for problem solving
                  </a>

                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure veritatis sint autem nesciunt, laudantium quia tempore
                    delect
                  </p>

                  <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
                </div>
              </div>

              <div data-aos="zoom-in">
                <img
                  className="relative  object-cover w-full rounded-tl-3xl rounded-br-3xl h-96"
                  src={require("../routes/routesimages/blog2.jpg")}
                  alt="Logo"
                />
                <div className="relative  max-w-lg p-6 mx-auto -mt-20 bg-white rounded-tl-3xl rounded-br-3xl shadow dark:bg-gray-900">
                  <a
                    href="/"
                    className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                  >
                    How to use sticky note for problem solving
                  </a>

                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure veritatis sint autem nesciunt, laudantium quia tempore
                    delect
                  </p>

                  <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Blog;
