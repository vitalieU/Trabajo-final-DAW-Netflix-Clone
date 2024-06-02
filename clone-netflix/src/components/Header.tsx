import { useEffect, useState } from "react"
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'


function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
  
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
  
    return (
      <header className={`${isScrolled && 'bg-[#141414]'}`}>
        <div className="flex items-center space-x-2 md:space-x-10">

          <img src="/netflix_logo.svg" alt="netflix logo" className="cursor-pointer object-contain" width={100}
          height={100} />
  
          <ul className="hidden space-x-4 md:flex">
            <li className="headerLink">Home</li>
            <li className="headerLink">TV Shows</li>
            <li className="headerLink">Movies</li>
            <li className="headerLink">New & Popular</li>
            <li className="headerLink">My List</li>
          </ul>
        </div>
  
        <div className="flex items-center space-x-4 text-sm font-light">
          <MagnifyingGlassIcon className="hidden h-6 w-6 sm:inline" />
          <p className="hidden lg:inline">Kids</p>
          <BellIcon className="h-6 w-6" />

          <img src="/avatar.png" alt="avatar" className="cursor-pointer rounded" />
        </div>
      </header>
    )
  }
  
  export default Header
  