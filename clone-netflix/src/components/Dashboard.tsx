import "../styles/Dashboard.css";
import { useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

const socket = new WebSocket("ws://172.26.7.149:8080");

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);




export default function Dashboard() {

    const [stats, setStats]  = useState([]);
    const [users, setUsers] = useState(0);
    const [media, setMedia] = useState({movie_count: 0, tv_show_count: 0});
    const [earnings, setEarnings] = useState<{ email: string, amount: number, stripe_status: string }[]>([]);

    function getMoths() {
        const months = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
        ];
        const actualMonth = new Date().getMonth();
        const arrayToReturn = [];
        for (let i = 0; i <= actualMonth; i++) {
            arrayToReturn.push(months[i]);
        }
        return arrayToReturn;
    }

   const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Usuarios suscritos',
          },
        },
      };
      
      const labels = getMoths();
      
    const data = {
        labels,
        datasets: [
            {
                label: 'Usuarios',
                data: (stats as { user_count: number }[]).map((stat) => stat.user_count),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };


  // Connection opened
  socket.addEventListener("open", () => {
    socket.send("Connection established");
  });

  // Listen for messages
  socket.addEventListener("message", (event) => {
    console.log("Message from server ", event.data);
    const data = JSON.parse(event.data);
    setStats(data.stats);
    setUsers(data.users.count);
    setMedia(data.media);
    setEarnings(data.earnings);
  });
  //on close

  socket.addEventListener("close", (event) => {
    console.log("Connection closed", event);
  });

  return (
    <div>
      <body className="text-gray-800 font-inter">
        <div className="fixed left-0 top-0 w-64 h-full bg-[#f8f4f3] p-4 z-50 sidebar-menu transition-transform">
          <a
            href="#"
            className="flex items-center pb-4 border-b border-b-gray-800"
          >
            <h2 className="font-bold text-2xl">
             Netflix {' '}
              <span className="bg-[#f84525] text-white px-2 rounded-md">
                 Dashboard
              </span>
            </h2>
          </a>
          <ul className="mt-4">
            <span className="text-gray-400 font-bold">ADMIN</span>
            <li className="mb-1 group">
              <a
                href=""
                className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              >
                <i className="ri-home-2-line mr-3 text-lg"></i>
                <span className="text-sm">Dashboard</span>
              </a>
            </li>
            <li className="mb-1 group">
              <a
                href=""
                className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
              >
                <i className="bx bx-user mr-3 text-lg"></i>
                <span className="text-sm">Users</span>
                <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
              </a>
              <ul className="pl-7 mt-2 hidden group-[.selected]:block">
                <li className="mb-4">
                  <a
                    href=""
                    className="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                  >
                    All
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href=""
                    className="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                  >
                    Roles
                  </a>
                </li>
              </ul>
            </li>
            <li className="mb-1 group">
              <a
                href=""
                className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              >
                <i className="bx bx-list-ul mr-3 text-lg"></i>
                <span className="text-sm">Activities</span>
              </a>
            </li>
            <span className="text-gray-400 font-bold">BLOG</span>
            <li className="mb-1 group">
              <a
                href=""
                className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
              >
                <i className="bx bxl-blogger mr-3 text-lg"></i>
                <span className="text-sm">Post</span>
                <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
              </a>
              <ul className="pl-7 mt-2 hidden group-[.selected]:block">
                <li className="mb-4">
                  <a
                    href=""
                    className="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                  >
                    All
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href=""
                    className="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                  >
                    Categories
                  </a>
                </li>
              </ul>
            </li>
            <li className="mb-1 group">
              <a
                href=""
                className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              >
                <i className="bx bx-archive mr-3 text-lg"></i>
                <span className="text-sm">Archive</span>
              </a>
            </li>
            <span className="text-gray-400 font-bold">PERSONAL</span>
            <li className="mb-1 group">
              <a
                href=""
                className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              >
                <i className="bx bx-bell mr-3 text-lg"></i>
                <span className="text-sm">Notifications</span>
                <span className=" md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-600 bg-red-200 rounded-full">
                  5
                </span>
              </a>
            </li>
            <li className="mb-1 group">
              <a
                href=""
                className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              >
                <i className="bx bx-envelope mr-3 text-lg"></i>
                <span className="text-sm">Messages</span>
                <span className=" md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-600 bg-green-200 rounded-full">
                  2 New
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"></div>

        <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-200 min-h-screen transition-all main">
          <div className="py-2 px-6 bg-[#f8f4f3] flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
            <button
              type="button"
              className="text-lg text-gray-900 font-semibold sidebar-toggle"
            >
              <i className="ri-menu-line"></i>
            </button>

          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                <div className="flex justify-between mb-6">
                  <div>
                    <div className="flex items-center mb-1">
                      <div className="text-2xl font-semibold">{users}</div>
                    </div>
                    <div className="text-sm font-medium text-gray-400">
                      Usuarios
                    </div>
                  </div>
 
                </div>

                <a
                  href="/gebruikers"
                  className="text-[#f84525] font-medium text-sm hover:text-red-800"
                >
                  View
                </a>
              </div>
              <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                <div className="flex justify-between mb-4">
                  <div>
                    <div className="flex items-center mb-1">
                      <div className="text-2xl font-semibold">{media.movie_count}</div>
   
                    </div>
                    <div className="text-sm font-medium text-gray-400">
                      Peliculas
                    </div>
                  </div>
                  
                </div>
                <a
                  href="/dierenartsen"
                  className="text-[#f84525] font-medium text-sm hover:text-red-800"
                >
                  View
                </a>
              </div>
              <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                <div className="flex justify-between mb-6">
                  <div>
                    <div className="text-2xl font-semibold mb-1">{media.tv_show_count}</div>
                    <div className="text-sm font-medium text-gray-400">
                      Series
                    </div>
                  </div>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="dropdown-toggle text-gray-400 hover:text-gray-600"
                    >
                      <i className="ri-more-fill"></i>
                    </button>
                    <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <a
                  href=""
                  className="text-[#f84525] font-medium text-sm hover:text-red-800"
                >
                  View
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

            
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md lg:col-span-2">
                <div className="flex justify-between mb-4 items-start">
                  <div className="font-medium">Estadisticas de suscripciones</div>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="dropdown-toggle text-gray-400 hover:text-gray-600"
                    >
                      <i className="ri-more-fill"></i>
                    </button>
                    <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  
                </div>
                <div>
 
                    <Line data={data} options={options} id="order-chart" />

                </div>
              </div>
              <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
                <div className="flex justify-between mb-4 items-start">
                  <div className="font-medium">Ganancias</div>
  
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[460px]">
                    <thead>
                      <tr>
                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                          Service
                        </th>
                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                          Earning
                        </th>
                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="flex items-center">
                            <img
                              src="https://placehold.co/32x32"
                              alt=""
                              className="w-8 h-8 rounded object-cover block"
                            />
                            <a
                              href="#"
                              className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >
                              Create landing page
                            </a>
                          </div>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-emerald-500">
                            +$235
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                            Pending
                          </span>
                        </td>
                      </tr>
                      
                      {
                        earnings.map((earning) => (

                          <tr id={earning.email}>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="flex items-center">
                            <img
                              src="https://placehold.co/32x32"
                              alt=""
                              className="w-8 h-8 rounded object-cover block"
                            />
                            <a
                              href="#"
                              className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                            >
                              {earning.email + ' ha contratado tu servicio'}
                            </a>
                          </div>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-emerald-500">
                            {earning.amount + '€'}
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                            {earning.stripe_status}
                          </span>
                        </td>
                      </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </div>
  );
}
