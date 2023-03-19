import { useEffect, useState } from 'react'
import HtmlCssJs from './HtmlCssJs'
import {ReactProyecto} from './React-Proyecto'

export default function ProyectosPoyecto() {

    const [valor, setValor] = useState('HTML, CSS, JS')

    const handleSelect=(e)=>{
        setValor(e.target.value)
    }
  return (
    <div className='mt-24 flex flex-col'>
    <h3 className='text-center mb-5 text-[70px] dark:text-white/40 font-extrabold max-[500px]:text-[40px]'>Proyectos</h3>
      <select onChange={handleSelect} className='bg-[#bb6c45] self-baseline text-white py-2 px-4 rounded-lg outline-none'>
        <option value='HTML, CSS, JS' >HTML, CSS, JS</option>
        <option value='React Js'>React Js</option>
      </select>
      {valor === 'HTML, CSS, JS' ? <HtmlCssJs /> : <ReactProyecto />}
    </div>
  )
}
