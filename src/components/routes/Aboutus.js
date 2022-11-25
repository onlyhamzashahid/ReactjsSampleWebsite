import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function Aboutus() {

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
        <section className=" px-10 py-12 flex justify-center flex-col items-center">
          <div>


            <div className="pt-14">
              <h1 className="text-3xl font-semibold text-white capitalize lg:text-4xl ">
                Explore Our Awesome Games
              </h1>

              <div className="mt-2">
                <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
              </div>
            </div>

            <div className="mt-2 xl:mt-8 lg:flex lg:items-center">
              <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">

                <div className="space-y-3" data-aos="fade-right">
                  <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </span>

                  <h1 className="text-2xl font-semibold text-white capitalize ">
                    Play To Earn
                  </h1>

                  <p className="text-gray-400">
                    Play to earn is a great way to make money. A great way to
                    make money and have fun at the same time.
                  </p>
                </div>

                <div className="space-y-3" data-aos="fade-left">
                  <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                      />
                    </svg>
                  </span>

                  <h1 className="text-2xl font-semibold text-white capitalize ">
                    Elegant Lottery Games
                  </h1>

                  <p className="text-gray-400">
                    These games are both simple, elegant and a great way to win
                    some quick cash.
                  </p>
                </div>

                <div className="space-y-3" data-aos="fade-right">
                  <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                      />
                    </svg>
                  </span>

                  <h1 className="text-2xl font-semibold text-white capitalize ">
                    Easy To Play
                  </h1>

                  <p className="text-gray-400">
                    Easy to play to earn, just tap and start collecting rewards!
                  </p>
                </div>

                <div className="space-y-3" data-aos="fade-left">
                  <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </span>

                  <h1 className="text-2xl font-semibold text-white capitalize ">
                    Simple & Trusted
                  </h1>

                  <p className="text-gray-400">
                    It's easy to play and you can trust that the game will be
                    fair.
                  </p>
                </div>

              </div>

              <div
                className="hidden lg:flex lg:w-1/2 lg:justify-center"
                data-aos="zoom-in"
               >
                <img
                  className="w-24 h-24 flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full "
                  src={require("../routes/routesimages/aboutusup.jpg")}
                  alt="Logo"
                ></img>
              </div>

            </div>



            <div
              className="py-24 px-10  justify-items-center grid "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className=" bg-indigo-600 lg:mx-8  lg:max-w-5xl lg:shadow-lg h-auto md:h-min rounded-tl-3xl rounded-br-3xl lg:grid lg:grid-cols-2 grid grid-rows ">
                
                <div className="h-full w-full">
                  <div className=" bg-auto h-full ">
                    <img
                      className="rounded-tl-3xl h-full"
                      src={require("../routes/routesimages/aboutusbottom.jpg")}
                      alt="Logo"
                    />
                  </div>
                </div>

                <div className="max-w-fit px-6 py-12 lg:max-w-5xl md:h-min  w-full">
                  <h2 className="text-2xl font-bold text-gray-800  md:text-3xl">
                    Join Bittorry<span className="text-white "> Now</span>
                  </h2>
                  <p className="mt-4 text-gray-600">
                    Bittorry is an online platform that allows you to play games
                    without having to download them. With this platform, you can
                    earn money with just one click. If you're looking for a new
                    way to play to earn games, then check out Bittorry today!
                  </p>

                  <div className="mt-8">
                    <button className="transition-all duration-100 text-center p-2 rounded-md text-white w-1/2 bg-gradient-to-r from-gray-800 to-gray-600 hover:shadow-md hover:from-black hover:to-gray-700">
                      View Full-Size
                    </button>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Aboutus