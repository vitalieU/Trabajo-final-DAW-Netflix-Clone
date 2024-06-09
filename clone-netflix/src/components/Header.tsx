import { useEffect, useState } from "react"
import  {searchState} from '../atoms/Atom'
import { searchResult } from "../atoms/Atom"
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import {Link} from 'react-router-dom'
import restService from "../services/restService"
import { useRecoilState } from "recoil"


function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [localSearch, setLocalSearch] = useState(false)
    const [, setSearch] = useRecoilState(searchState)
    const [,setSearchResult] = useRecoilState(searchResult)

  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }
  
      window.addEventListener('scroll', handleScroll)
  
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])

    function onClickSearch(){
      setLocalSearch(!localSearch)
    }
    async function onInputChange(e: React.ChangeEvent<HTMLInputElement>){
      const query = e.target.value;
      if(query.length===0){
        setSearch(false);
        setSearchResult([]);
        return;
      }
      const resp = await restService.search(query);
      if(resp.length>0){
        setSearchResult(resp);
        setSearch(true);
      }

    }
  
    return (
      <header className={`${isScrolled && 'bg-[#141414]'}`}>
        <div className="flex items-center space-x-2 md:space-x-10">

          <img src="/netflix_logo.svg" alt="netflix logo" className="cursor-pointer object-contain" width={100}
          height={100} />
  
          <ul className="hidden space-x-4 md:flex">
            <li className="headerLink"><Link to='/home?type=all'>Home</Link></li>
            <li className="headerLink"><Link to='/home?type=tv'>Series</Link></li>
            <li className="headerLink"><Link to='/home?type=movie'>Peliculas</Link></li>
            <li className="headerLink">Mis listas</li>
          </ul>
        </div>
  
        <div className="flex items-center space-x-4 text-sm font-light">
          
        {
            localSearch && (
              <input
                type="text"
                className="hidden xl:inline text-white bg-transparent border p-1 rounded-md focus:outline-none focus:border-transparent"
                placeholder="Buscar por titulo"
                onChange={onInputChange }
              />
              
            )
          }
            
          <MagnifyingGlassIcon className="hidden h-6 w-6 sm:inline cursor-pointer"  onClick={onClickSearch}/>
          <p className="hidden lg:inline">Kids</p>
          <BellIcon className="h-6 w-6" />

          <img src="/avatar.png" alt="avatar" className="cursor-pointer rounded" />
        </div>
      </header>
    )
  }
  
  export default Header
  