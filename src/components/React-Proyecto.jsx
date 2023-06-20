import React, { Suspense, lazy } from 'react'
import img1 from '../img/weather.webp'
import img2 from '../img/cafecitobook.webp'
import img3 from '../img/taskList.webp'
import img4 from '../img/christmas.webp'
import img5 from '../img/landing.webp'
import img6 from '../img/rick&&morty.webp'
import img7 from '../img/pokemon.webp'
import react from '../img/react.webp'
import css from "../img/css-3.png"
import tailwind from '../img/Tailwind CSS.png'
import github from '../img/github.webp'
import firebase from '../img/firebase.png'
import sass from '../img/sass.png'
import typescript from '../img/typescript.webp'
const LazyHtmlCssJsItem = lazy(()=> import('./ProyectoDetalles'))

export function ReactProyecto() {
  return (
    <div className='content-react mt-7'>
      <Suspense fallback={<h5>Cargando</h5>}>
        <LazyHtmlCssJsItem 
          react={react}
          tailwind={tailwind}
          urlGitHub='https://github.com/cafesit8/Weather-App'
          url='https://cafesit8.github.io/Weather-App/'
          github={github}
          img={img1} />
        <LazyHtmlCssJsItem 
          react={react}
          tailwind={tailwind}
          firebase={firebase}
          urlGitHub='https://github.com/cafesit8/CafecitBook'
          github={github}
          url='https://cafesit8.github.io/CafecitBook/'
          img={img2} />
        <LazyHtmlCssJsItem 
          react={react}
          tailwind={tailwind}
          urlGitHub='https://github.com/cafesit8/Task-App'
          github={github}
          url='https://cafesit8.github.io/Task-App/'
          img={img3} />
          <LazyHtmlCssJsItem 
          react={react}
          sass={sass}
          urlGitHub='https://github.com/cafesit8/christmas-react'
          github={github}
          url='https://cafesit8.github.io/christmas-react/'
          img={img4} />
          <LazyHtmlCssJsItem 
          react={react}
          css={css}
          urlGitHub='https://github.com/cafesit8/Landing-Page-React'
          github={github}
          url='https://cafesit8.github.io/Landing-Page-React/'
          img={img5} />
          <LazyHtmlCssJsItem 
          react={react}
          tailwind={tailwind}
          urlGitHub='https://github.com/cafesit8/Rick-y-Morty-React-Vite'
          github={github} 
          url='https://cafesit8.github.io/Rick-y-Morty-React-Vite/'
          img={img6} />
          <LazyHtmlCssJsItem 
          react={react}
          typescript={typescript}
          tailwind={tailwind}
          urlGitHub='https://github.com/cafesit8/poke-api'
          github={github} 
          url='https://cafesit8.github.io/poke-api/'
          img={img7} />
      </Suspense>
    </div>
  )
}
