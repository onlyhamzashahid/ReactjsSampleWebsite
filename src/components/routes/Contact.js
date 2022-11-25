import {React , useRef} from 'react'

function Contact() {


    const emailRef = useRef();
    const nameRef = useRef();
    const phoneRef = useRef();
    const messageRef = useRef();

    const handleSubmit = (e) => {
      e.preventDefault();
      /* 
    Do something here !
    */
    };
  return (
    <>
      <div className="bg-[url('../images/background-min.png')] bg-cover bg-fixed bg-no-repeat w-full h-full">
        <div className="grid place-items-center min-h-screen">
          {/* :MAIN CONTAINER */}
          <div className="  py-12 relative  object-center   w-full h-3/4 flex flex-col items-center">
            {/* ::Title Container */}
            <div className="text-center space-y-2">
              {/* :::title */}
              <h2 className="text-4xl font-semibold tracking-wider">
                Drop us a line
              </h2>
              {/* :::text */}
              <p className="text-base text-gray-500">
                We'll get back to you as soon as we can!
              </p>
            </div>

            {/* ::Contact Container */}
            <div className="mt-10 mx-auto w-full max-w-xl">
              <form
                action=""
                className="grid grid-cols-2  gap-y-6 gap-x-4 "
                onSubmit={handleSubmit}
              >
                {/* ::::email input */}
                <div className="col-span-full text-black ">
                  <label
                    ref={emailRef}
                    htmlFor="email"
                    className="sr-only text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="form-input h-16 w-full block shadow-sm rounded border-gray-200 bg-gray-50 bg-opacity-90 text-base placeholder-gray-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                  />
                </div>
                {/* ::::name input */}
                <div className="col-span-full sm:col-span-1">
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    ref={nameRef}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="form-input w-full block shadow-sm rounded border-gray-200 bg-gray-50 bg-opacity-90 text-base placeholder-gray-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                  />
                </div>
                {/* ::::phone input */}
                <div className="col-span-full sm:col-span-1">
                  <label htmlFor="phone" className="sr-only">
                    Name
                  </label>
                  <input
                    ref={phoneRef}
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Phone number"
                    className="form-input w-full block shadow-sm rounded border-gray-200 bg-gray-50 bg-opacity-90 text-base placeholder-gray-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                  />
                </div>
                {/* :::message */}
                <div className="col-span-full">
                  <label htmlFor="message" className="sr-only text-black">
                    Message
                  </label>
                  <textarea
                    ref={messageRef}
                    name="message"
                    id="message"
                    cols="30"
                    rows="4"
                    placeholder="How can we help?"
                    className="form-textarea resize-none w-full shadow-sm rounded border-gray-200 bg-gray-50 bg-opacity-90 placeholder-gray-300 focus:border-rose-500 focus:ring-rose-500"
                  ></textarea>
                </div>
                {/* :::submit button */}
                <div className="col-span-full pt-5">
                  <button
                    type="submit"
                    className="py-1.5 px-6 w-full sm:w-40 shadow-xl rounded bg-gradient-to-br from-rose-500 to-rose-500 text-lg text-white hover:to-rose-700"
                  >
                    SEND
                  </button>
                </div>
              </form>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Contact