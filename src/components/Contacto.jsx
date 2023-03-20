import { useState } from "react"
import img from '../img/email.png'

export default function Contacto() {
  const [nombre, setNombre] = useState('')
  const [mensaje, setMensaje] = useState('')

  const Btn=()=>{
    if(nombre==='' || mensaje===''){
      return <button disabled className="bg-[#fae7dd] text-black/50 dark:bg-[#572c17] dark:text-white/30 p-2 rounded-lg">Enviar</button>
    }else{
      return <button className="bg-[#bb6c45] p-2 rounded-lg">Enviar</button>
    }
  }

  return (
    <section id="contacto" className='w-full py-16 flex flex-col items-center justify-center'>
      <h3 className='text-center text-[70px] max-[500px]:text-[40px] dark:text-white/40 font-extrabold'>Contáctame</h3>
      <div className="flex w-[1000px] max-[1020px]:flex-col max-[1020px]:w-[95%]">
        <picture>
          <img className="m-auto" alt={img} src={img} />
        </picture>
        <form className="rounded-md flex gap-3 flex-col w-[70%] self-center p-5 max-[1020px]:w-full" action="https://formsubmit.co/bf05bd4b5648a5cbc4d720495f98ac29" method="POST">
          <input onChange={(e)=>setNombre(e.target.value)} className='text-white py-2 px-3 placeholder:text-white/50 outline-none rounded-lg bg-[#bb6c45]' placeholder="Nombre" type="text" name="nombre" />
          <textarea onChange={(e)=>setMensaje(e.target.value)} className='text-white py-2 px-3 h-[150px] resize-none placeholder:text-white/50 outline-none rounded-lg bg-[#bb6c45]' placeholder="Mensaje" type="text" name="mensaje" />
          <Btn />
          <input type="hidden" name="_captcha" value="false"></input>
          <input type="hidden" name="_next" value="https://cafesit8.github.io/portafolio/" />
        </form>
      </div>
    </section>
  )
}
