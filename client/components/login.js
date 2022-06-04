import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/localstorage";

export default function LogInForm() {

  const [user, setUser] = useLocalStorage("user", "");
  const [password, setPassword] = useLocalStorage("password", "");

  // useEffect(() => {
  //   let variable = localStorage.getItem("user");
  //   alert(user)
  // }, []);

  function ingresar(){
    
  }

  return (
    <>
      <p id="valorPPMID" hidden></p>
      <p id="cambiarBack" hidden></p>
      <h1 className="text-center p-4 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        LogIn
      </h1>
      <form>
        <div class="flex items-center justify-center ">
          <div>
            {" "}
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
                <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Password
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="password"
                  placeholder="******************"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p class="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-center w-full">
          <div className="flex gap-4">
            <input
              type="submit"
              onClick={() => localStorage.setItem("sessionn",true)}
              class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            />
          </div>
          <div>
            <a
              href="/register"
              class="focus:outline-none text-pruple-700   focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 border"
            >
              Registrar
            </a>
          </div>
        </div>
      </form>
    </>
  );
}
