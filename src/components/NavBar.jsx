import { useEffect, useState } from 'react'
import {BsFillMoonFill, BsSunFill} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {CgClose} from 'react-icons/cg'
import '../index.css'

export default function NavBar() {
    const [icon, setIcon] = useState(true)
    const [close, setClose] = useState(true)

    const handleList=()=>{
        const list = document.querySelector('.list')
        list.classList.toggle('active')
        setClose(!close)
    }

    const handleIcon=()=>{
        const state = !icon
        setIcon(state)
        localStorage.setItem('Dia/Noche', JSON.stringify(state))
        document.documentElement.classList.toggle('dark')
    }

    useEffect(()=>{
        const state = JSON.parse(localStorage.getItem('Dia/Noche'))
        !state ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
        setIcon(state)
    }, [])

  return (
    <nav className='w-[1500px] bg-[#f8f1e8] dark:bg-[#141414] duration-200 flex items-center justify-between py-5 max-[1530px]:w-[95%] fixed max-[750px]:py-3 z-40'>
      <span className='font-medium text-[#db865b] text-[20px] '>Cafecito</span>
      <div className='flex items-center gap-10 max-[750px]:gap-5'>
        <ul className='list flex gap-10 items-center max-[750px]:absolute max-[750px]:w-full max-[750px]:left-0 max-[750px]:top-[-400%] max-[750px]:flex-col max-[750px]:gap-5 max-[750px]:py-5 max-[750px]:z-20 max-[750px]:bg-[#fcf6ee] dark:max-[750px]:bg-[#361b0b] duration-200'>
          <li><a className='text-[17px]' href='#inicio'>Inicio</a></li>
          <li><a className='text-[17px]' href='#SobreMi'>Sobre Mi</a></li>
          <li><a className='text-[17px]' href='#proyectos'>Proyectos</a></li>
          <li><a className='text-[17px]' href='#contacto'>Contacto</a></li>
        </ul>
        {icon ? <BsFillMoonFill onClick={handleIcon} className='text-[20px] cursor-pointer z-20'/>: <BsSunFill onClick={handleIcon} className='text-[25px] cursor-pointer z-20'/>}
        {close ? <GiHamburgerMenu onClick={handleList} className='text-[22px] z-20 min-[750px]:hidden'/> : <CgClose onClick={handleList} className='text-[22px] z-20 min-[750px]:hidden'/>}
      </div>
    </nav>
  )
}
