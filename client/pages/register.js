import { useEffect, useState } from "react";
import { userData } from "../data/data.users";
import { useLocalStorage } from "../hooks/localstorage";

export default function LogInForm() {
  const [user, setUser] = useLocalStorage("user", "");
  const [password, setPassword] = useLocalStorage("password", "");
  const [city, setCity] = useLocalStorage("city", "");
  const [phone, setPhone] = useLocalStorage("phone", "");

  function insertarUsuario() {
    let variable = localStorage.getItem("user");
    var item = {
      user: "admin",
      password: "admin",
      city: "Riobamba",
      phone: "123123123",
    };
    userData.push(item);
    console.log(item);
  }

  useEffect(() => {});

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="bg-gray-100 p-8 rounded-xl shadow">
      <p id="valorPPMID" hidden></p>
      <p id="cambiarBack" hidden></p>
      <h1 className="text-center p-4 block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2">
        Registrar Usuario
      </h1>
      <form>
        <div class="flex items-center justify-center">
          <div>
            {" "}
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full  px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  User
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Andres G"
                  onChange={(e) => setUser(e.target.value)}
                />
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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full  px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-city"
                >
                  City
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="Albuquerque"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div class="w-full  px-3 mb-6 md:mb-0 mt-4">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  PHONE
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                  placeholder="+593 999282767"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-center w-full">
        
          <div className="flex gap-4 w-full">
            <button
              onClick={() =>
                function insdf() {
                  let variable = localStorage.getItem("user");
                  var item = {
                    user: "admin",
                    password: "admin",
                    city: "Riobamba",
                    phone: "123123123",
                  };
                  userData.push(item);
                  console.log(item);
                  alert("ASdfasdf");
                }
              }
              
              class="w-full focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              
            >
            Registrar</button>
          </div>
         
        </div>
        <div>
            <a
              href="/"
              type="button"
              class="focus:outline-none text-pruple-700   focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5  border w-full text-center"
            >
              ya tienes una cuenta?
            </a>
          </div>
      </form>
      </div>
    </div>
  );
}
