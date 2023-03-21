import React, { Suspense, lazy } from 'react'
import img1 from '../img/weather.png'
import img2 from '../img/cafecitobook.png'
import img3 from '../img/taskList.png'
import img4 from '../img/christmas.png'
import img5 from '../img/landing.png'
import img6 from '../img/rick&&morty.png'
import react from '../img/react.png'
import css from "../img/css-3.png"
import tailwind from '../img/Tailwind CSS.png'
import github from '../img/github.png'
import firebase from '../img/firebase.png'
import sass from '../img/sass.png'
const LazyHtmlCssJsItem = lazy(()=> import('./ProyectoDetalles'))

export function ReactProyecto() {
  return (
    <div className='content-react mt-7'>
      <Suspense fallback={<h1>Cargando</h1>}>
        <LazyHtmlCssJsItem 
          icon1={<img className="w-[35px] h-[30px] self-end mb-3 ml-4" src={react} />} 
          icon2={<img className="w-[37px] h-[28px] self-end mb-3 ml-4" src={tailwind} />} 
          icon3={<a className="icon self-end" target='_blank' href="https://github.com/cafesit8/Weather-App">
              <img className="w-[30px] h-[30px] mb-3 ml-4" src={github} />
          </a>} 
          url='https://cafesit8.github.io/Weather-App/'
          img={img1} />
        <LazyHtmlCssJsItem 
          icon1={<img className="w-[35px] h-[30px] self-end mb-3 ml-4" src={react} />}  
          icon2={<img className="w-[35px] h-[30px] self-end mb-3 ml-4" src={tailwind} />}  
          icon3={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" src={firebase} />}  
          icon4={<a className="icon self-end" target='_blank' href="https://github.com/cafesit8/CafecitBook">
              <img className="w-[30px] h-[30px] mb-3 ml-4" src={github} />
          </a>}  
          url='https://cafesit8.github.io/CafecitBook/'
          img={img2} />
        <LazyHtmlCssJsItem 
          icon1={<img className="w-[35px] h-[30px] self-end mb-3 ml-4" src={react} />}  
          icon2={<img className="w-[40px] h-[30px] self-end mb-3 ml-4" src={tailwind} />}  
          icon3={<a className="icon self-end" target='_blank' href="https://github.com/cafesit8/Task-App">
              <img className="w-[30px] h-[30px] mb-3 ml-4" src={github} />
          </a>}  
          url='https://cafesit8.github.io/Task-App/'
          img={img3} />
          <LazyHtmlCssJsItem 
          icon1={<img className="w-[35px] h-[30px] self-end mb-3 ml-4" src={react} />}  
          icon2={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" src={sass} />}  
          icon3={<a className="icon self-end" target='_blank' href="https://github.com/cafesit8/christmas-react">
              <img className="w-[30px] h-[30px] mb-3 ml-4" src={github} />
          </a>}  
          url='https://cafesit8.github.io/christmas-react/'
          img={img4} />
          <LazyHtmlCssJsItem 
          icon1={<img className="w-[35px] h-[30px] self-end mb-3 ml-4" src={react} />}  
          icon2={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" src={css} />}  
          icon3={<a className="icon self-end" target='_blank' href="https://github.com/cafesit8/Landing-Page-React">
              <img className="w-[30px] h-[30px] mb-3 ml-4" src={github} />
          </a>}  
          url='https://cafesit8.github.io/Landing-Page-React/'
          img={img5} />
          <LazyHtmlCssJsItem 
          icon1={<img className="w-[35px] h-[30px] self-end mb-3 ml-4" src={react} />}  
          icon2={<img className="w-[40px] h-[30px] self-end mb-3 ml-4" src={tailwind} />}  
          icon3={<a className="icon self-end" target='_blank' href="https://github.com/cafesit8/Rick-y-Morty-React-Vite">
              <img className="w-[30px] h-[30px] mb-3 ml-4" src={github} />
          </a>}  
          url='https://cafesit8.github.io/Rick-y-Morty-React-Vite/'
          img={img6} />
      </Suspense>
    </div>
  )
}
