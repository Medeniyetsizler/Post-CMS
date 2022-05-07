import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordErrors, setPasswordErrors] = useState([]);
  const [emailErrors, setEmailErrors] = useState([]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setPasswordErrors([]);
    setEmailErrors([]);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/signin",
        {
          email,
          password,
        }
      );
    } catch (e) {
      e.response.data.errors.map((err) => {
        if (err.field === "password") {
          const errs = [...passwordErrors, err];
          console.log(errs);
          setPasswordErrors(errs);
        } else if (err.field === "email") {
          setEmailErrors([...emailErrors, err]);
        }
      });
    }
  };

  return (
    <div className="flex flex-nowrap p-5 h-screen">
      <div className="flex justify-center items-center grow shrink">
        <div className="flex flex-col w-1/2 items-center p-10">
          <h1 className="text-4xl font-bold my-8">Login</h1>
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-full border-2 rounded-md my-1.5 p-2"
            placeholder="Email address"
          />
          {emailErrors.length > 0 && (
            <div className="w-full h-full p-1 text-gray-700">
              {emailErrors.map((err, index) => (
                <li key={index}>{err.message}</li>
              ))}
            </div>
          )}
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-full border-2 rounded-md my-1.5 p-1"
            placeholder="Password"
          />
          {passwordErrors.length > 0 && (
            <div className="w-full p-2 text-gray-700">
              {passwordErrors.map((err) => (
                <li key={err.message}>{err.message}</li>
              ))}
            </div>
          )}
          <div className="self-start">
            <input type="checkbox" name="RememberMe" />
            <label htmlFor="RememberMe"> Remember me</label>
          </div>
          <button
            type="submit"
            onClick={onSubmit}
            className="w-full bg-indigo-600 hover:bg-indigo-700 rounded-md text-white h-10 mt-6"
          >
            Sign in
          </button>
          <p className="mt-1">
            Dont have a account?
            <Link href="/signup">
              <a className="text-blue-900"> Sign up</a>
            </Link>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center h-full bg-slate-500 rounded-2xl grow shrink ">
        <img src="Login photo.svg" />
      </div>
    </div>
  );
}
