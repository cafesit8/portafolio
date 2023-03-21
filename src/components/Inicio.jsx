import foto from '../img/foto.jpeg'
import { InicioArticle } from './Inicio-article'

export function Inicio() {
  return (
    <section id='inicio' className='w-full h-screen flex items-center justify-center'>
        <div className='flex flex-col gap-5 w-[1000px] overflow-hidden max-[1030px]:w-[94%] max-[600px]:gap-3'>
            <picture className='self-center w-[250px] h-[250px] rounded-full overflow-hidden max-[600px]:w-[150px] max-[600px]:h-[150px]'>
                <img className='w-full h-full object-cover' alt={foto} src={foto} />
            </picture>
            <InicioArticle/>
        </div>
    </section>
  )
}
