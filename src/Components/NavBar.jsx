import React, { useState,useEffect, useContext } from 'react'
import { NavLink , Link, useNavigate} from 'react-router-dom'
import { shopcontext } from '../ContextApi';

function NavBar() {

  const {wishlist,cart,navbarscroll,setNavbarScroll} = useContext(shopcontext)

  // logo click and refresh to home

 const navigate = useNavigate()

  // sidebar show & hidden

  const [sidebarShow,SetSidebarShow] = useState(false);


  // scroll and navbar style


useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbarScroll(true);
    } else {
      setNavbarScroll(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  // Clean up the event listener on component unmount
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
     <>
     <header className={`fixed z-50 w-full ${navbarscroll ? "bg-white" : "bg-transpernt"} px-5 py-5 transition-all duration-1000 flex justify-between items-center`}>
      
        {/* Logo */}
        <img src={ navbarscroll ? "LOGO-black.svg" : "LOGO-white.svg"} className="w-[120px] md:w-[180px] transition-all duration-1000"  alt="logo image" onClick={()=>{navigate("/")}}/>

        {/* navigation bar */}
        <ul className=' hidden md:flex gap-[20px] items-center font-jost '>

          <li>
          <NavLink 
            to="/" 
            className={`pb-1 ${navbarscroll? "text-black" : "text-white"} text-[16px] font-medium border-b-[3px] border-transparent hover:border-underline hover:text-underline transition-all duration-700`}>
            HOME
          </NavLink> 
          </li>

          <li>
          <NavLink 
            to="/menu" 
            className={`pb-1 ${navbarscroll? "text-black" : "text-white"} text-[16px] font-medium  border-b-[3px] border-transparent hover:border-underline hover:text-underline transition-all duration-700`}>
            MENU
          </NavLink> 
          </li>

          <li>
          <NavLink 
            to="/about" 
            className={`pb-1 ${navbarscroll? "text-black" : "text-white"} text-[16px] font-medium  border-b-[3px] border-transparent hover:border-underline hover:text-underline transition-all duration-700`}>
            ABOUT
          </NavLink> 
          </li>

          <li>
          <NavLink 
            to="/contact" 
            className={`pb-1 ${navbarscroll? "text-black" : "text-white"} text-[16px] font-medium  border-b-[3px] border-transparent hover:border-underline hover:text-underline transition-all duration-700`}>
            CONTACT
          </NavLink> 
          </li>

        </ul>

        {/* icons section */}
        <div className='flex gap-[15px] items-end'>

            {/* heart */}

            <div className='relative'>
              <img src={ navbarscroll ? "heart-black.svg" : "heart-white.svg"} className="w-[25px] cursor-pointer"  alt="heart image" onClick={()=>{navigate("/wishlist")}}/>
              <span className={`absolute top-[-10px] right-[-7px] rounded-full ${wishlist.length > 0 ? "bg-underline": "bg-transparent"}  min-w-[9px] min-h-[9px]`}></span>
            </div>

            {/* cart */}

            <div className='relative'>
              <img src={ navbarscroll ? "cart-black.svg" : "cart-white.svg"} className="w-[25px] cursor-pointer"  alt="heart image"   onClick={()=>{navigate("/cart")}}/>
              <span className={`absolute top-[-6px] right-[-6px] rounded-full ${cart.length > 0 ? "bg-underline": "bg-transparent"} min-w-[9px] min-h-[9px]`}></span>
            </div>

            {/* hamburger menu */}

            <img src={ navbarscroll ? "menu-black.svg" : "menu-white.svg"} className="w-[25px] cursor-pointer  md:hidden"  alt="heart image" onClick={()=>{SetSidebarShow(true)}}/>


        </div>


        {/* sidebar */}
        <div className={`fixed top-0 right-0 ${sidebarShow? "w-full":"w-0"}  h-screen bg-white pt-[20vh] flex flex-col items-center md:hidden overflow-hidden transition-all duration-500`}>

          {/* CLOSE ICON */}
           <img src="close-icon.svg" alt="close-icon" className='absolute top-[30px] right-[20px] cursor-pointer w-[25px]' onClick={()=>{SetSidebarShow(false)}} />

          {/* navigation btn */}
          <ul className='flex flex-col items-center gap-[40px]  font-jost'>
                <li>
                  <Link to="/" className="text-2xl text-black border-b-2 border-transparent hover:text-underline hover:border-underline pb-[2px]"  onClick={()=>{SetSidebarShow(false)}}>
                    HOME
                  </Link>
                </li>
                <li>
                  <Link to="/menu" className="text-2xl text-black border-b-2 border-transparent hover:text-underline hover:border-underline pb-[2px]"  onClick={()=>{SetSidebarShow(false)}}>
                    MENU
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-2xl text-black border-b-2 border-transparent hover:text-underline hover:border-underline pb-[2px]"  onClick={()=>{SetSidebarShow(false)}}>
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-2xl text-black border-b-2 border-transparent hover:text-underline hover:border-underline pb-[2px]"  onClick={()=>{SetSidebarShow(false)}}>
                    CONTACT
                  </Link>
                </li>


         </ul>


        </div>





     </header>
     </>
  )
}

export default NavBar