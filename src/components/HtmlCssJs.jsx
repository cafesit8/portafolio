import img1 from '../img/red-social.png'
import img2 from '../img/ecommerce.png'
import img3 from '../img/jikanApi.png'
import img4 from '../img/fruits.png'
import img5 from '../img/headphones.png'
import img6 from '../img/estaciones.png'
import img7 from '../img/space.png'
import img8 from '../img/music-app.png'
import img9 from '../img/helados.png'
import img10 from '../img/bookmark.png'
import img11 from '../img/landing-page.jpg'
import img12 from '../img/grid.png'
import '../index.css'
import html from "../img/html-5.png";
import css from "../img/css-3.png";
import js from "../img/js.png";
import github from '../img/github.png'
import sass from '../img/sass.png'
import tailwind from '../img/Tailwind CSS.png'
import { lazy, Suspense } from 'react'
const LazyHtmlCssJsItem = lazy(()=> import('./ProyectoDetalles'))

export default function HtmlCssJs() {
  return (
    <div className='content mt-7'>
      <Suspense fallback={<h1>Cargando</h1>}>
        <LazyHtmlCssJsItem 
          icon1={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={html} src={html} />} 
          icon2={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={sass} src={sass} />}
          icon3={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={js} src={js} />}
          icon4={<a className="icon self-end" target='_blank' href="https://github.com/cafesit8/Red-Social">
              <img className="w-[30px] h-[30px] mb-3 ml-4" alt={github} src={github} />
          </a>}
          url='https://cafesito-book.netlify.app' 
          img={img1} />
        <LazyHtmlCssJsItem
          icon1={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={html} src={html} />} 
          icon2={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={css} src={css} />}
          icon3={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={js} src={js} />}
          icon4={<a className="icon self-end" target='_blank' href="https://github.com/cafesit8/ecommerce">
              <img className="w-[30px] h-[30px] mb-3 ml-4" alt={github} src={github} />
          </a>}
          url='https://cafesito-shop.netlify.app' img={img2} />
        <LazyHtmlCssJsItem
          icon1={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={html} src={html} />} 
          icon2={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={css} src={css} />}
          icon3={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={js} src={js} />}
          icon4={<a className="icon self-end" target='_blank' href="https://github.com/cafesit8/Jikan-Api">
              <img className="w-[30px] h-[30px] mb-3 ml-4" alt={github} src={github} />
          </a>}
          url='https://api-anime.netlify.app' img={img3} />
        <LazyHtmlCssJsItem 
          icon1={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={html} src={html} />} 
          icon2={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={sass} src={sass} />}
          icon3={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={js} src={js} />}
          icon4={<a className="icon self-end" target='_blank' href="https://github.com/cafesit8/Fruits">
              <img className="w-[30px] h-[30px] mb-3 ml-4" alt={github} src={github} />
          </a>}
          url='https://cafesit8.github.io/Fruits/' img={img4} />
        <LazyHtmlCssJsItem
          icon1={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={html} src={html} />} 
          icon2={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={tailwind} src={tailwind} />}
          icon3={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={js} src={js} />}
          icon4={<a className="icon self-end" target='_blank' href="https://github.com/cafesit8/headphones-tailwind">
              <img className="w-[30px] h-[30px] mb-3 ml-4" alt={github} src={github} />
          </a>}
          url='https://cafesit8.github.io/headphones-tailwind/' img={img5} />
        <LazyHtmlCssJsItem
          icon1={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={html} src={html} />} 
          icon2={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={sass} src={sass} />}
          icon3={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={js} src={js} />}
          icon4={<a className="icon self-end" target='_blank' href="https://github.com/cafesit8/estaciones">
              <img className="w-[30px] h-[30px] mb-3 ml-4" alt={github} src={github} />
          </a>}
          url='https://cafesit8.github.io/estaciones/' img={img6} />
        <LazyHtmlCssJsItem
          icon1={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={html} src={html} />} 
          icon2={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={sass} src={sass} />}
          icon3={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={html} src={js} />}
          icon4={<a className="icon self-end" target='_blank' href="https://github.com/cafesit8/space">
              <img className="w-[30px] h-[30px] mb-3 ml-4" alt={github} src={github} />
          </a>}
          url='https://cafesit8.github.io/space/' img={img7} />
        <LazyHtmlCssJsItem
          icon1={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={html} src={html} />} 
          icon2={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={css} src={css} />}
          icon3={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={js} src={js} />}
          icon4={<a className="icon self-end" target='_blank' href="https://github.com/cafesit8/Music-App">
              <img className="w-[30px] h-[30px] mb-3 ml-4" alt={github} src={github} />
          </a>}
          url='https://cafesit8.github.io/Music-App/' img={img8} />
        <LazyHtmlCssJsItem
          icon1={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={html} src={html} />} 
          icon2={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={sass} src={sass} />}
          icon4={<a className="icon self-end" target='_blank' href="https://github.com/cafesit8/reposter-a">
              <img className="w-[30px] h-[30px] mb-3 ml-4" alt={github} src={github} />
          </a>}
          url='https://respoteria.netlify.app' img={img9} />
        <LazyHtmlCssJsItem
          icon1={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={html} src={html} />} 
          icon2={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={css} src={css} />}
          icon3={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={js} src={js} />}
          icon4={<a className="icon self-end" target='_blank' href="https://github.com/cafesit8/Bookmark">
              <img className="w-[30px] h-[30px] mb-3 ml-4" alt={github} src={github} />
          </a>}
          url='https://cafesit8.github.io/Bookmark/?submit=Contact+Us' img={img10} />
          <LazyHtmlCssJsItem
          icon1={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={html} src={html} />} 
          icon2={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={css} src={css} />}
          icon4={<a className="icon self-end" target='_blank' href="https://github.com/cafesit8/landing-page">
              <img className="w-[30px] h-[30px] mb-3 ml-4" alt={github} src={github} />
          </a>}
          url='https://cafesit8.github.io/landing-page/' img={img11} />
          <LazyHtmlCssJsItem
          icon1={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={html} src={html} />} 
          icon2={<img className="w-[30px] h-[30px] self-end mb-3 ml-4" alt={css} src={css} />}
          icon4={<a className="icon self-end" target='_blank' href="https://github.com/cafesit8/cartillas-grid">
              <img className="w-[30px] h-[30px] mb-3 ml-4" alt={github} src={github} />
          </a>}
          url='https://cafesit8.github.io/cartillas-grid/' img={img12} />
      </Suspense>
    </div>
  )
}
