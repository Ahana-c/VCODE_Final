import React from "react";
import { signInWithPopup } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import authimage from "../static/images/authimage.jpg";
import logo from "../static/images/logo.png";
import googleicon from "../static/images/googleicon.png";

import { auth, provider } from "../Firebase";
import { adduser } from "../redux/Slice/user";

const Login = () => {
  const user = useSelector((state) => state.userState.user);
  const dispatch = useDispatch();

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        // console.log(data);
        dispatch(adduser(data.user.email));
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {
        !!user && !!Object.keys(user).length && <Navigate to="/home" />
        /* If there exist a user then redirect to Home Page */
      }

      <div className="w-full h-screen md:flex sm:justify-center">
        <div class="w-3/5 h-full sm:hidden md:flex ">
          <img src={authimage} className="h-full object-cover" />
        </div>

        <div class="w-2/5 h-full md:pl-8 md:flex-col sm:p-5">
          {/* Csi logo and text  */}
          <div className="mt-[60px] top-[70px]">
            <div className="flex items-center font-bold space-x-2">
              <img src={logo} width="85px" height="70px" />
              <div className="flex flex-col text-dark">
                <h1 className="text-[33px]  font-juneauBold">Resume</h1>
                <h1 className="text-[33px]  font-juneauBold mt-[-0.7rem]">
                  Builder
                </h1>
              </div>
            </div>
          </div>
          {/* end of csi logo and text  */}

          <div className="pt-5 mt-5 border-t-solid border-t-4 ls:w-[500px]  sm:w-[400px] border-t-green">
            <h1 className="font-juneauBold text-[32px]">
              Nice to see you here.
            </h1>
            <div className="flex md:justify-center pt-10">
              <button
                onClick={handleSignIn}
                className="bg-dark flex items-center space-x-4 justify-center w-[300px] p-3 rounded-md"
              >
                <img src={googleicon} width={30} />
                <a className="text-white">Sign in with Google</a>
              </button>
            </div>
          </div>
          <div className="flex pt-5">
            <p className="md:left-[170px] relative">© CSI CHAPTER 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;