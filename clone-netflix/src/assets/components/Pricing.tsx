import FormHeader from "./FormHeader";
import { useState, } from 'react'



function Pricing() {

    const [plan, setPlan] = useState(0)

    const handlePlan = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const target = e.target as HTMLImageElement;
        setPlan(target.dataset.value ? +target.dataset.value : 0);

    }
 


return (
    <>
    <header><FormHeader/></header>
    <br/><br/><br/><br/><br/><br/><br/>
    

    <div className="mx-auto w-3/4 flex flex-col justify-center" >
        
        <div className="p-4">

        <p className="text-sm p-2 text-center">Paso 2 de 3</p>
        <h1 className="text-3xl font-bold p-2 text-center">Elige el plan ideal para ti</h1>
        </div>

        <div className="flex flex-row justify-center">
            <img src='/first-pricing.png'  className={`"w-1/4 m-2 rounded-3xl cursor-pointer ${plan === 1 ? 'border-8 border-slate-500' : ''}`}  data-value="1"onClick={handlePlan}/>
            <img src='/second-pricing.png' className={`"w-1/4 m-2 rounded-3xl cursor-pointer ${plan === 2 ? 'border-8 border-slate-500' : ''}`} data-value="2" onClick={handlePlan}/>
            <img src='/third-pricing.png' className= {`"w-1/4 m-2 rounded-3xl cursor-pointer ${plan === 3 ? 'border-8 border-slate-500' : ''}`} data-value="3"  onClick={handlePlan}/>
        </div>

        <p className="p-2 text-md">Más información sobre el plan con anuncios. Si eliges un plan con anuncios, tendrás que facilitar tu fecha de nacimiento para la personalización de anuncios y otros fines coherentes con la Declaración de privacidad de Netflix.</p>
        <p className="p-2 text-md">La disponibilidad del contenido en Full HD (1080p), Ultra HD (4K) y HDR depende de la capacidad de tu servicio de internet y del dispositivo. No todo el contenido está disponible en todas las resoluciones. Consulta los Términos de uso para obtener más información.</p>
        <p className="p-2 text-md">Solo pueden usar tu cuenta las personas que viven contigo. Añade un/a suscriptor/a extra con el plan Estándar o hasta dos con el plan Premium. Más información. Puedes ver Netflix en cuatro dispositivos a la vez con el plan Premium, y en dos con el plan Estándar o el plan Estándar con anuncios.</p>

        <br/>
        <br/>
        <div className="flex justify-center">
          <button className="p-4 text-l font-semibold bg-red-600 hover:bg-red-700 text-white w-2/5">
                <span className="text-3xl">Siguiente</span>
          </button>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

    </div>


    </>
)
}


export default Pricing;
