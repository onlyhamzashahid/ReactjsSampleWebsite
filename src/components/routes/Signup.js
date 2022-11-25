import React, { useState, useEffect} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  
  // TwitterAuthProvider,
} from "firebase/auth";

// import { useDispatch } from "react-redux";
// import { login } from "../../redux/slice/authSlice";



import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { auth, db , onAuth} from "../../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {  useDispatch } from "react-redux";
import { login, logout} from "../../redux/slice/authSlice";

// const dispatch = useDispatch;
//  let user = auth.currentUser;







const Signup = ({inputs}) => {
  const dispatch = useDispatch();


  useEffect(() => {
    onAuth(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in, send the user's details to redux, store the current user in the state
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  const navitage = useNavigate();

  const provider = new GoogleAuthProvider();

  const googleHandler = async () => {
    provider.setCustomParameters({ prompt: "select_account" });
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // console.log(credential)
        // const token = credential.accessToken;
        // The signed-in user info.

        const user = result.user;
        // console.log(user.email)
        // console.log(user.displayName)

        setDoc(doc(db, "users", user.uid), {
          email: user.email,
          phone: user.phoneNumber,
          username: user.displayName,
          timeStamp: serverTimestamp(),
        });
      })
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })

      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  // const twitterHandler = async () => {
  //   const provider = new TwitterAuthProvider();
  // signInWithPopup(auth, provider)
  //   .then((result) => {
  //     // The signed-in user info.
  //     const user = result.user;
  //     console.log(user)

  //     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  //     const credential = TwitterAuthProvider.credentialFromResult(result);
  //     console.log(credential)
  //     // const accessToken = credential.accessToken;

  //     // ...
  //   })
  //   .catch((error) => {
  //     // Handle Errors here.
  //     // const errorCode = error.code;
  //     // const errorMessage = error.message;
  //     // The email of the user's account used.
  //     // const email = error.customData.email;
  //     // The AuthCredential type that was used.
  //     // const credential = FacebookAuthProvider.credentialFromError(error);

  //   });

  // };

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      updateProfile(auth.currentUser, {
        displayName: data.name,
        // photoURL: profilePic,
      });

      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });

      signInWithEmailAndPassword(auth, data.email, data.password).then(
        (userCredential) => {
          // Signed in
          // const currentUser = userCredential.user;
          // console.log(currentUser)

          navitage("/");
        }
      );

      dispatch(
        login({
          ...data
        })
      );
     } catch (err) {
      setError(err);
      console.log(error);
      if (err.code === "auth/email-already-in-use") {
        toast.error("User already exists");
      }
    }
  };

  return (
    <>
      <div className="bg-[url('../images/background-min.png')] bg-cover bg-fixed bg-no-repeat w-full h-full">
        <div className="pt-20 px-20 font-sans">
          <div className="relative min-h-screen w-auto h-auto flex flex-col sm:justify-center items-center  ">
            <div className="relative sm:max-w-sm w-full">
              <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
              <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
              <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                <label
                  htmlFor=""
                  className="block mt-3 text-sm text-gray-700 text-center font-semibold"
                >
                  Sign Up
                </label>
                <form onSubmit={handleSignup} className="mt-10">
                  {inputs?.map((input) => (
                    <div className="formInput" key={input.id}>
                      <label>{input.label}</label>
                      <input
                        id={input.id}
                        type={input.type}
                        placeholder={input.placeholder}
                        onChange={handleInput}
                        className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                      />
                    </div>
                  ))}

                  <div className="mt-7">
                    <button
                      type="submit"
                      className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                    >
                      Sign Up
                    </button>
                  </div>

                  <div className="flex mt-7 items-center text-center">
                    <hr className="border-gray-300 border-1 w-full rounded-md" />
                    <label className="block font-medium text-sm text-gray-600 w-full">
                      OR
                    </label>
                    <hr className="border-gray-300 border-1 w-full rounded-md" />
                  </div>
                </form>

                <div className="flex mt-7 justify-center w-full">
                  <div>
                    <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                      Facebook
                    </button>
                  </div>

                  <div>
                    <button
                      onClick={googleHandler}
                      className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                    >
                      Google
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
