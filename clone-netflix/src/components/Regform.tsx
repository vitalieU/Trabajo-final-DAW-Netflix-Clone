import FormHeader from "./FormHeader";
import { useRecoilState } from "recoil";
import { userState } from "../atoms/Atom";
import restService from "../services/restService";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';


export default function Regform() {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useRecoilState(userState);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const Navigate = useNavigate();
  useEffect(() => {
    user?.email !== '' && setUserEmail(user!.email);

    if(location.pathname === "/regform"){
      setIsLogin(false);
    }
  }, [user, location.pathname]);

  function onInputChange(e: ChangeEvent<HTMLInputElement>): void {
    const target = e.target as HTMLInputElement;
    if (target.name === "email") {
      setUserEmail(target.value);
      setUser({...user, email: target.value});
    } else if (target.name === "password") {
      setUserPassword(target.value);
    }
  }

  async function onFormSubmit(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    //check if the inputs are not empty
    if (!userEmail || !userPassword) {
        setError("Por favor, rellene todos los campos.");
      return;
    }
    if(isLogin){
      Login();
    }
    else{
      Registration();
    }
  }

  async function Login(){
    const resp = restService.login(userEmail, userPassword);
    if (typeof resp === "object" && resp !== null) {
      setUser(await resp);
      Navigate( "/home" );
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  }
  async function Registration(){
    const resp = restService.register(userEmail, userPassword);
    if (typeof resp === "object" && resp !== null) {
    
      Navigate("/pricing" );
    }
  }

  return (
    <>
      <header>
        <FormHeader />
      </header>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="mx-auto w-1/4 flex flex-col justify-center">
        <div className="p-4">
          {!isLogin && <span className="text-sm p-2">Paso 1 de 3</span>} 
          <h1 className="text-3xl font-bold p-2 text-center">
 
            {isLogin ? "Inicia sesión" : "Regístrate" }
          </h1>
          <span className="text-md font-bold p-2"> { isLogin ? "" : "¡Faltan solo algunos pasos!"}
          </span>
        </div>
        <form onSubmit={onFormSubmit}>
          <label className="block  text-sm font-bold mb-2" htmlFor="username">
            Direcion de correo
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-black"
            value={userEmail}
            name="email"
            onChange={onInputChange}
            id="username"
            type="email"
            placeholder="mail@mail.com"
          />
          <label className="block  text-sm font-bold mb-2" htmlFor="password">
            Contraseña
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-black"
            id="password"
            name="password"
            value={userPassword}
            onChange={onInputChange}
            type="password"
            placeholder="Añadir una contraseña"
          />
          <span className=" text-center text-red-600 text-sm">{error} </span>
        
        <br />
        <br />
        <div className="flex justify-center">
          <button className="p-4 text-l font-semibold bg-red-600 hover:bg-red-700 text-white w-2/5" type="submit">
            <span className=" text">Siguiente</span>
          </button>
        </div>
        </form>

        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
