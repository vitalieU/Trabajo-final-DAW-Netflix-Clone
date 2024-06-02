import { ChangeEvent, useState, MouseEvent } from "react";
import {Navigate} from 'react-router-dom';

function FirstPage() {

  const [email , setEmail] = useState("");

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }
 
  function handleClick(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    if(email === ""){
      return;
    }
    Navigate({to: "/login"});
  }

  return (
    <div>
      <div
        className="h-screen flex justify-center items-center bg-cover bg-center " 
        style={{
          backgroundImage:
            "linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url('https://assets.nflxext.com/ffe/siteui/vlv3/c0a32732-b033-43b3-be2a-8fee037a6146/2fe6e3c0-5613-4625-a0c1-3d605effd10b/IN-en-20210607-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
        }}
      >
        <div className="absolute top-0 left-0 mt-5 ml-5">
          <svg
            viewBox="0 0 111 30"
            fill="#e50914"
            className="w-28"
            focusable="false"
          >
            <g id="netflix-logo">
              <path
                d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                id="Fill-14"
              ></path>
            </g>
          </svg>
        </div>
        <button className="absolute bg-red-600 hover:bg-red-700 text-white p-3 top-0 right-0 mt-3 mr-5">
          Inicia sesión
        </button>
        <div className="space-y-5">
          <p className="text-white font-bold text-5xl flex flex-col items-center">
            <span>Películas y series sin límites y mucho más</span>
          </p>
          <p className="text-white font-semibold text-3xl flex flex-col items-center">
            Disfruta donde quieras. Cancela cuando quieras.
          </p>
          <p className="text-white text-lg flex flex-col items-center">
            ¿Quieres ver algo ya? Escribe tu dirección de correo para crear una
            suscripción a Netflix o reactivarla.
          </p>
          <div className="flex flex-row items-center justify-center">
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleEmail}
              placeholder="Email address"
              className="p-4 focus:outline-none focus:ring-1 focus:ring-blue-300 w-3/4"
            />
            <button className="p-4 text-l font-semibold bg-red-600 hover:bg-red-700 text-white" onClick={handleClick}>
              Empezar{" "}
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="h-screen flex items-center justify-center bg-black p-5">
        <div className="space-y-5 p-5">
          <p className="text-white font-bold text-4xl">Disfruta en tu tele.</p>
          <p className="text-white font-semiboldbold text-xl">
            Smart TV, Playstation, Xbox, Chromecast, Apple TV, reproductores
            Blu-ray y muchos más.
          </p>
        </div>
        <div>
          <img
            alt="TV"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          ></img>
        </div>
      </div>
      <hr />
      <div className="h-screen flex items-center justify-center bg-black p-5">
        <div>
          <img
            alt=""
            className="our-story-card-img"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            data-uia="our-story-card-img"
          />
        </div>
        <div className="space-y-5">
          <p className="text-white font-bold text-4xl">
            Usa cualquier dispositivo
          </p>
          <p className="text-white font-semiboldbold text-xl">
            Disfruta de Netflix en tierra, mar y aire…
          </p>
        </div>
      </div>
      <hr />
      <div className="h-screen flex items-center justify-center bg-black p-5">
        <div className="space-y-5 p-5">
          <p className="text-white font-bold text-4xl">
            Usa cualquier dispositivo
          </p>
          <p className="text-white font-semiboldbold text-xl">
            Ve en streaming todas las películas y series en tu móvil, tableta,
            ordenador y televisor..
          </p>
        </div>
        <div>
          <img
            alt=""
            className="our-story-card-img"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            data-uia="our-story-card-img"
          />
        </div>
      </div>
      <hr />
      <div className="h-screen flex items-center justify-center bg-black p-5">
        <div className="p-5">
          <img
            alt=""
            className="our-story-card-img"
            src="https://occ-0-5556-3662.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf"
            data-uia="our-story-card-img"
          />
        </div>
        <div className="space-y-5">
          <p className="text-white font-bold text-4xl">
            Crea perfiles infantiles
          </p>
          <p className="text-white font-semiboldbold text-xl">
            Deja que los niños vivan aventuras con sus personajes favoritos en
            un espacio diseñado exclusivamente para ellos, gratis con tu
            suscripción.
          </p>
        </div>
      </div>

      <hr />
      <div className="h-screen flex  items-center justify-center bg-black p-5 flex-col">
        
      <p className="p-5 text-white font-bold text-5xl ">
          Preguntas frecuentes
        </p>
      <div className=" flex  flex-col justify-around  ">
        
        <div className="m-2 space-y-2  w-3/4 ">
          <div
            className="group flex flex-col gap-2 rounded-lg bg-[#303030] p-5 text-white "
            tabIndex={1}
          >
            <div className="flex cursor-pointer items-center justify-between p-3">
              <span className="text-3xl text-white"> ¿Qué es Netflix? </span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
              />
            </div>
            <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 text-3xl">
              <p className="p-4">Netflix es un servicio de streaming que ofrece una amplia variedad de series, películas, títulos de anime, documentales y otros contenidos premiados en miles de dispositivos conectados a internet.</p>
              <br/>
              <p className="p-4">Puedes ver todo lo que quieras, cuando quieras, por una tarifa mensual reducida. ¡Siempre hay algo nuevo que descubrir, y cada semana se añaden nuevas series y películas!</p>
            </div>
          </div>
        </div>

        <div className="m-2 space-y-2  w-3/4 bg-black">
          <div
            className="group flex flex-col gap-2 rounded-lg bg-[#303030] p-5 text-white "
            tabIndex={1}
          >
            <div className="flex cursor-pointer items-center justify-between p-3">
              <span className="text-3xl text-white"> ¿Cuánto cuesta Netflix? </span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
              />
            </div>
            <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 text-3xl">
              <p className="p-4">Disfruta de Netflix en tu smartphone, tablet, Smart TV, laptop o dispositivo de streaming por una tarifa mensual fija. ¡Sin costes adicionales ni contratos!</p>
            </div>
          </div>
        </div>
        <div className="m-2 space-y-2  w-3/4 ">
          <div
            className="group flex flex-col gap-2 rounded-lg bg-[#303030] p-5 text-white "
            tabIndex={1}
          >
            <div className="flex cursor-pointer items-center justify-between p-3">
              <span className="text-3xl text-white"> ¿Dónde puedo ver Netflix? </span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
              />
            </div>
            <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 text-3xl">
              <p className="p-4">Disfruta donde quieras y cuando quieras. Inicia sesión con tu cuenta de Netflix para disfrutar al instante de todo el contenido de netflix.com desde tu ordenador personal o en cualquier dispositivo conectado a internet que ofrezca la aplicación de Netflix, entre ellos, smart TV, smartphones, tabletas, reproductores multimedia de streaming y consolas de juegos.</p>
              <p className="p-4">También puedes descargar tus series favoritas con la aplicación de iOS, Android o Windows 10. Utiliza las descargas para ver títulos dondequiera que vayas y cuando no dispongas de conexión a internet. Netflix siempre te acompaña.</p>
            </div>
          </div>
        </div>
        <div className="m-2 space-y-2  w-3/4 ">
          <div
            className="group flex flex-col gap-2 rounded-lg bg-[#303030] p-5 text-white "
            tabIndex={1}
          >
            <div className="flex cursor-pointer items-center justify-between p-3">
              <span className="text-3xl text-white"> ¿Cómo cancelo? </span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
              />
            </div>
            <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 text-3xl">
              <p className="p-4">Netflix es flexible. Sin contratos liosos ni compromisos. Puedes cancelar fácilmente tu cuenta en línea con tan solo dos clics. Sin cargos por cancelación: activa o cancela tu cuenta en cualquier momento.</p>
            </div>
          </div>
        </div>
        <div className="m-2 space-y-2  w-3/4 ">
          <div
            className="group flex flex-col gap-2 rounded-lg bg-[#303030] p-5 text-white "
            tabIndex={1}
          >
            <div className="flex cursor-pointer items-center justify-between p-3">
              <span className="text-3xl text-white"> ¿Qué puedo ver en Netflix? </span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
              />
            </div>
            <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 text-3xl">
              <p className="p-4">Netflix dispone de una amplia biblioteca de originales de Netflix galardonados, títulos de anime, series de TV, documentales, largometrajes y otros contenidos. Ve todo el contenido que quieras, cuando quieras.</p>
            </div>
          </div>
        </div>
        <div className="m-2 space-y-2  w-3/4 ">
          <div
            className="group flex flex-col gap-2 rounded-lg bg-[#303030] p-5 text-white "
            tabIndex={1}
          >
            <div className="flex cursor-pointer items-center justify-between p-3">
              <span className="text-3xl text-white"> ¿Es Netflix bueno para los niños? </span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
              />
            </div>
            <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 text-3xl">
              <p className="p-4">La experiencia infantil de Netflix se incluye en la suscripción para que los padres tengan el control mientras los niños disfrutan de series y películas familiares en su propio espacio.</p>
              <p className="p-4">Los perfiles infantiles incluyen controles parentales protegidos por PIN que te permiten restringir la calificación por edades del contenido que pueden ver los niños y bloquear determinados títulos que no quieras que vean.</p>
            </div>
          </div>
        </div>
    </div>
      </div>
     
    </div>
  );
}

export default FirstPage;
