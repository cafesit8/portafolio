import React from 'react'
import doc from '../document/cv.pdf'

export default function SobreMi() {
  return (
    <section id='SobreMi' className='w-full py-20 flex'>
      <div className='w-[1000px] m-auto max-[1020px]:w-[92%]'>
        <h2 className='text-center text-[70px] max-[500px]:text-[40px] dark:text-white/40 font-extrabold'>Sobre Mi</h2>
        <div className='flex gap-5 max-[1030px]:flex-col max-[1030px]:items-center'>
          <div className='w-[40%] flex flex-col justify-center items-center max-[1020px]:w-full'>
            <h3 className='text-[30px] text-left max-[500px]:text-center font-semibold max-[500px]:text-[25px]'>Desarrollador Fronted Junior,
            Diseñador Web</h3>
            <a download='Elias-Limaymanta-Melgarejo-CV' href={doc} className='self-baseline max-[500px]:self-center mt-3 bg-[#bb6c45] text-white py-2 px-3 rounded-lg'>
              <button>Descargar CV</button>
            </a>
          </div>
          <div className='w-[60%] max-[1020px]:w-full'>
            <p className='text-[16px]'>Con la carrera terminada de Computación e Informática y buenos conocimientos en Frontend Web Junior, muchas horas invertidas en la investigación, código actualizado. Soy alguien autodidacta, siempre con ganas de aprender y seguir aprendiendo en este campo del Desarrollo Web. Me gusta leer documentación de JavaScript, código de otros desarrolladores y también en mi tiempo libre, poder compartir con mi familia, yendo a paseos o ver alguna serie de Netflix y HBO. Un admirador del deporte como fútbol y mi deporte favorito, el Tenis, ganador de varios torneos en años anteriores y participante del torneo nacional de tenis de primera categoría mayores de 18 años.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
