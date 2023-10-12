import { useState, useEffect, useContext } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
import { motion, AnimatePresence } from 'framer-motion'
import ToggleTheme from './toggle-button'
import { context } from '../context'

export default function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);
  const {dark} = useContext(context)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const links = [{
      text: "About us",
      link: "#about"
    },
    {
      text: "Product",
      link: "#product"
    },
    {
      text: "Resource",
      link: "#resource"
    },
    {
      text: "Contact",
      link: "#contact"
    }
  ]

  return (
    <header className={`flex bg-[#F2F9FE] justify-between p-5 fixed w-full xl:px-20 ${dark ? 'dark' : ''}`}>
      <img src={`/assets/alarado-icon-homepage${dark ? '-white' : ''}.svg`} alt="" />
      {width < 1024 
        ? <MobileNav links={links} dark={dark}/> 
        : <DesktopTabletNav links={links} dark={dark}/>}
    </header>
  )
}

interface links {
  link: string,
  text: string
}

function MobileNav({links, dark}: {links: links[], dark: boolean}) {
  const [open, setOpen] = useState(false)

  const handleMenu = () => {
    setOpen(!open);
  }

  return (
    <>
    <button onClick={handleMenu} className='z-10'>{open ? <RxCross2 size={24}/> : <GiHamburgerMenu size={24}/>}</button>
    <AnimatePresence>
    {open ? 
    <motion.nav initial={{right:-288, opacity:0}} animate={{right:0, opacity:1}} exit={{right:-288, opacity:0}}  className={`bg-white top-0 fixed w-72 h-screen ${dark ? 'dark' : ''}`}>
      <ul className='pt-14'>
        {links.map((link: { text: string, link: string }) => 
        <li className='flex py-5 pr-16 justify-center' key={link.text}>
          <a className={`w-full text-center text-3xl font-bold text-[#909193] active:text-[#223344] ${dark ? 'dark' : ''}`} href={link.link}>{link.text}</a>
        </li>
        )}
        <li className='flex py-5 pr-16 justify-center'><ToggleTheme/></li>
      </ul>
    </motion.nav> : null}
    </AnimatePresence>
    </>        
  )
}

function DesktopTabletNav({links, dark}: {links: links[], dark: boolean}) {
  return (
    <>
    <nav className='flex justify-between items-center'>
      <ul className='flex gap-5 h-fit'>
        {links.map((link: { text: string, link: string }) => 
        <li className='h-fit' key={link.text}>
          <a className={`text-lg font-bold text-[#909193] active:text-[#223344] ${dark ? 'dark' : ''}`} href={link.link}>{link.text}</a>
        </li>
        )}
      </ul>
    </nav>
    <ToggleTheme/>
    </>        
  )
}