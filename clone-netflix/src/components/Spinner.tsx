import { CircularProgress } from "@mui/material"; 
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userState } from "../atoms/Atom";
import { useRecoilState } from "recoil";
import FormHeader from "./FormHeader";
import restService from "../services/restService";
export default function Spinner() {

    const [user, setUser] = useRecoilState(userState);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(async () => {
            const resp = await restService.checkSubscription(user!.email);
            if(resp.suscribed){
                setUser(resp.user!);
                navigate('/home');
            }
        }
        , 3000);
    }, []);

  return (
    <div className="container">
        <header ><FormHeader></FormHeader></header>
        <div className="flex justify-center items-center h-screen  flex-col ">
            <h1 className=" text-2xl">Completa tu pago  </h1>
            <CircularProgress className="m-5" />
        </div>
    </div>
  );
}