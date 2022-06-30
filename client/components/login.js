import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/localstorage";
import { getData } from "../controllers/users.controller";

export default function LogInForm() {

  const [isSession, setisSession] =useState(false);
  const iniciarSesion = ()=>{
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

    getData().then(async(resp)=>{
      if(!resp?.data){
        alert("UPS ALGO SALIO MAL");
        return
      }
      const usuarios = resp.data;

      let founded =  usuarios.find(x => x.attributes.username == username && x.attributes.password == password);
      const isLogin = founded?true:false

      console.log("RESPUESTA =====", founded);

      localStorage.setItem("isSession", isLogin)

      if(isLogin){
        localStorage.setItem("user",JSON.stringify(founded))
        alert("Bienvenido")
        setisSession(true )
      }else{
        alert("Usuario o contraseña incorrectos")
        setisSession(false)
      }
  })


    localStorage.setItem("isSession", true)
    
  }
  
  useEffect(() => {
      setisSession(localStorage.getItem("isSession"));
  },[]);

  return (
    <div className="w-screen h-screen  flex justify-center items-center">
      <div className="bg-gray-100 p-8 rounded-xl shadow w-1/3">
        {isSession ? (<><button onClick={()=>{localStorage.setItem("isSession", false) 
        setisSession(false)} }>Logout</button></>):(<><p id="valorPPMID" hidden></p>
        <p id="cambiarBack" hidden></p>
        <h1 className="text-center text-xl p-4 block uppercase tracking-wide text-gray-700  font-bold mb-2">
          Iniciar Sesion
        </h1>
        <form onSubmit={(e)=>{e.preventDefault()
           iniciarSesion()}}>
          <div class="flex items-center justify-center w-full">
            <div className="w-full">
              {" "}
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Usuario
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="username"
                    type="text"
                    placeholder="Jane"
                   
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Contraseña
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="password"
                    type="password"
                    placeholder="******************"
                 
                  />
                  <p class="text-gray-600 text-xs italic">
                    Aun no tienes una cuenta? <a href="/register">click aqui</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center w-full">
            <div className="flex gap-4 w-full">
              <input
                type={"submit"}
                class="w-full focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                value="Iniciar Sesion"
              />
            </div>
          </div>
        </form></>)}
        
      </div>
    </div>
  );
}
