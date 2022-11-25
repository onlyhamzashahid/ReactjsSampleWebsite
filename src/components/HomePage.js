import React,{useEffect} from "react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 10,
      easing: "ease",
      once: false,
    });

  } );

  
  return (
    <>

      {/* backgroundimage */}
      <div className=" bg-[url('../images/background-min.png')] bg-cover bg-fixed bg-no-repeat w-full h-full ">

        {/* homepage start */}
        <div className="grid place-items-center  ">
          <div className=" my-28 lg:grid lg:grid-cols-2 lg:gap-5 content-center grid grid-rows gap-4">

            {/* left image */}
            <div className="px-10" data-aos="fade-right">

              <div className="grid   place-items-start auto-rows-min  ">
                <div>
                  <img
                    
                    src={require("../images/homepage1-min.png")}
                    alt="homePageImage1"
                  />
                </div>
              </div>

              {/* left button */}
              <div>
                <button
                  type="button"
                  className="transition-all duration-100 text-white w-96 bg-gradient-to-r from-indigo-700 to-indigo-500 hover:shadow-md hover:from-indigo-500 hover:to-indigo-700 focus:outline-none focus:ring-1 focus:ring-indigo-600   font-medium rounded-md shadow-lg text-sm px-5 py-2.5 text-center mr-2 mb-20"
                >
                  Read Blog
                </button>
              </div>

            </div>

            <div className="px-10" data-aos="fade-left">
              <div
                className="grid   place-items-start auto-rows-min 
               "
              >
                {/*right image */}
                <div>
                  <img
                    
                    src={require("../images/homepage2-min.png")}
                    alt="homePageImage2"
                  />
                </div>
              </div>

              {/*right button */}
              <div>
                <button
                  type="button"
                  className=" transition-all duration-100 text-white w-96  bg-gradient-to-r from-indigo-700 to-indigo-500 hover:shadow-md hover:from-indigo-500 hover:to-indigo-700 focus:outline-none focus:ring-1 focus:ring-indigo-600   font-medium rounded-md shadow-lg text-sm px-5 py-2.5 text-center mr-2 mb-20"
                >
                  Play Games
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* <!--blog component --> */}

        <section className="w-auto pt-10 pb-10 lg:pb-20 grid place-items-center">
          <div className="container">
            <div className="flex flex-wrap justify-center -mx-4">
              <div className="w-full px-4">
                <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                  <h2 className=" font-bold text-3xl sm:text-4xl md:text-[40px]  text-white mb-4 ">
                    Our Recent Blogs
                  </h2>
                  <hr></hr>
                </div>
              </div>
            </div>

            <div className="grid place-items-center w-full">
              <div className="lg:grid lg:grid-cols-3 lg:gap-5 content-center grid grid-rows  gap-5  place-items-center">
                <div
                  className="w-full  px-10  grid auto-rows-min place-content-center"
                  data-aos="zoom-in-right"
                >
                  <div className="mx-auto mb-10  bg-indigo-600 rounded-lg shadow-md">
                    <div className="rounded overflow-hidden mb-8">
                      <img
                        src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                        alt="blogImage1"
                        className="w-full rounded-t-lg"
                      />
                    </div>

                    <div>
                      <span className=" bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold  text-gray-300 mb-5 ">
                        Dec 22, 2023
                      </span>
                      <h3>
                        <a
                          href="/"
                          className="px-3 font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-gray-200 hover:text-gray-300 "
                        >
                          Meet AutoManage, the best AI management tools
                        </a>
                      </h3>
                      <p className="px-3 mb-3 text-white">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="w-full  px-10  grid auto-rows-min place-content-center"
                  data-aos="zoom-in-up"
                >
                  <div className=" mx-auto mb-10 bg bg-indigo-600 rounded-lg shadow-md">
                    <div className="rounded overflow-hidden mb-8">
                      <img
                        src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
                        alt="blogImage2"
                        className="w-full rounded-t-lg"
                      />
                    </div>
                    <div>
                      <span className=" bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-gray-300 mb-5">
                        Mar 15, 2023
                      </span>
                      <h3>
                        <a
                          href="/"
                          className="px-3  font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-gray-200 hover:text-primary "
                        >
                          How to earn more money as a wellness coach
                        </a>
                      </h3>
                      <p className="px-3 mb-3 text-white">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="w-auto  px-10  grid auto-rows-min place-content-center"
                  data-aos="zoom-in-left"
                >
                  <div className="mx-auto mb-10 bg-indigo-600 rounded-lg shadow-md">
                    <div className="rounded overflow-hidden mb-8">
                      <img
                        src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg"
                        alt="blogImage3"
                        className="w-full rounded-t-lg"
                      />
                    </div>
                    <div>
                      <span className=" bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold  text-gray-300 mb-5 ">
                        Jan 05, 2023
                      </span>
                      <h3>
                        <a
                          href="/"
                          className=" px-3 font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-gray-200 hover:text-primary "
                        >
                          The no-fuss guide to upselling and cross selling
                        </a>
                      </h3>
                      <p className="text-white px-3 mb-3">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


{/* aboutus bottom */}
        <div
          className="py-24 px-10 justify-items-center grid "
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className=" bg-indigo-600 lg:mx-8  lg:max-w-5xl lg:shadow-lg h-auto md:h-min rounded-tl-3xl rounded-br-3xl lg:grid lg:grid-cols-2 grid grid-rows ">
            <div className="h-full w-full">
              <div className=" bg-auto h-full ">
                <img
                  className="rounded-tl-3xl h-full"
                  src={require("../images/aboutusbottom.jpg")}
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
                earn money with just one click. If you're looking for a new way
                to play to earn games, then check out Bittorry today!
              </p>

              <div className="mt-8">
                <button className="transition-all duration-100 text-center p-2 rounded-md text-white w-1/2 bg-gradient-to-r from-indigo-700 to-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-700  shadow-lg hover:from-indigo-500 hover:to-indigo-700">
                  View Full-Size
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
