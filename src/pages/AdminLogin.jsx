import React from "react";
import { actionCodeSettings } from "../firebase";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

function AdminLogin() {
  const [email, setEmail] = React.useState("");

  const changeHandler = (event) => {
    // search if the provided value is an email
    const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        event.target.value
      ),
      isEmpty = !event.target.value;

    // if email is not valid then change the border color to red
    if (!isEmail && !isEmpty) {
      event.target.style.borderColor = "red";
    } else {
      event.target.style.borderColor = "";
    }

    // if it is an email, set the email state
    isEmail ? setEmail(event.target.value) : setEmail("");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // if the email not set in the state then show an error
    if (!email) {
      alert("Please enter a valid email");
    } else {
      console.log(email);

      const auth = getAuth();
      sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
          // inform the user theat the email is sent
          alert("Email sent");
          window.localStorage.setItem("emailForSignIn", email);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // log the error
          console.log(errorCode, errorMessage);
        });
    }
  };

  return (
    <div className="h-[93.3vh] flex justify-center items-center bg-slate-400">
      <div className=" h-[65%] w-full md:w-[25%] shadow-md flex flex-col justify-evenly items-center p-4 rounded-md border-2 bg-slate-300">
        <h2 className="text-xl font-semibold text-slate-700">Admin Login</h2>
        <form className="flex">
          <input
            type="email"
            name="Email"
            id=""
            className="border-2 p-2 border-slate-300 focus-visible:outline-none "
            placeholder="Enter email"
            required
            onChange={changeHandler}
          />
          <div
            className="ml-2 bg-emerald-500 px-3 py-2 text-white font-semibold"
            onClick={submitHandler}
          >
            Login
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
