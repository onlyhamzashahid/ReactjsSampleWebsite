import { useState , useEffect} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db, onAuth} from "../../firebase";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { login, logout } from "../../redux/slice/authSlice";




import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { doc, getDoc } from "firebase/firestore";




const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);


   const dispatch = useDispatch();

   useEffect(() => {
    
     onAuth(auth, (userAuth) => {

      const ref = doc(db, "users", userAuth.uid);
      const docSnap = getDoc(ref);
      if (docSnap) {
        const user = docSnap.data();
        console.log(user);
      } else {
        console.log("no data");
      }

      dispatch(
        login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          // photoUrl: userAuth.photoURL,
        })
      );
       if (userAuth) {
         // user is logged in, send the user's details to redux, store the current user in the state
         
       } else {
         dispatch(logout());
       }
     });
   }, [dispatch]);

  const navitage = useNavigate();






  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.warning("Please fill in all fields");
    } else {
      try {
        await signInWithEmailAndPassword(auth, email,password)
        .then((userCredential) => {
          // Signed in
          
          

          navitage("/");
        })

        
      } catch (error) {
         setError(true);
          toast.warning({ error });
          console.log(error)
      }
      
        
        
    }
  };

  return (
    <>
      <div className="bg-[url('../images/background-min.png')] bg-cover bg-fixed bg-no-repeat w-full h-full">
        <div className="pt-24 px-20 font-sans">
          <div className="relative min-h-screen w-auto h-auto flex flex-col sm:justify-center items-center  ">
            <div className="relative sm:max-w-sm w-full ">
              <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
              <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
              <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                <label
                  htmlFor=""
                  className="block mt-3 text-sm text-gray-700 text-center font-semibold"
                >
                  Login
                </label>
                <form onSubmit={handleLogin} className="mt-10">
                  <div>
                    <input
                      type="email"
                      placeholder="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                    />
                  </div>

                  <div className="mt-7">
                    <input
                      type="password"
                      placeholder="password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                    />
                  </div>

                  <div className="mt-7 flex">
                    <label
                      htmlFor="remember_me"
                      className="inline-flex items-center w-full cursor-pointer"
                    >
                      <input
                        id="remember_me"
                        type="checkbox"
                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        name="remember"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        Remember Me
                      </span>
                    </label>

                    <div className="w-full text-right">
                      <a
                        className="underline text-sm text-gray-600 hover:text-gray-900"
                        href="/"
                      >
                        Forget Password?
                      </a>
                    </div>
                  </div>

                  <div className="mt-7">
                    <button
                      type="submit"
                      className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                    >
                      Login
                    </button>
                  </div>
                  {error && <span>Wrong email or password!</span>}

                  <div className="flex mt-7 items-center text-center">
                    <hr className="border-gray-300 border-1 w-full rounded-md" />
                    <label className="block font-medium text-sm text-gray-600 w-full">
                      OR
                    </label>
                    <hr className="border-gray-300 border-1 w-full rounded-md" />
                  </div>

                  <div className="flex mt-7 justify-center w-full">
                    <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                      Facebook
                    </button>

                    <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                      Google
                    </button>
                  </div>

                  <div className="mt-7">
                    <div className="flex justify-center items-center">
                      <label className="mr-2">Don't Have Account</label>
                      <Link
                        to={"/signup"}
                        className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                      >
                        Sign Up
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
