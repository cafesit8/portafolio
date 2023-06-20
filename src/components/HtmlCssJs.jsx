import img1 from '../img/red-social.webp'
import img2 from '../img/ecommerce.webp'
import img3 from '../img/jikanApi.webp'
import img4 from '../img/fruits.webp'
import img5 from '../img/headphones.webp'
import img6 from '../img/estaciones.webp'
import img7 from '../img/space.webp'
import img8 from '../img/music-app.webp'
import img9 from '../img/helados.webp'
import img10 from '../img/bookmark.webp'
import img11 from '../img/landing-page.webp'
import img12 from '../img/grid.webp'
import html from "../img/html-5.png";
import css from "../img/css-3.png";
import js from "../img/js.png";
import github from '../img/github.webp'
import sass from '../img/sass.png'
import tailwind from '../img/Tailwind CSS.png'
import { lazy, Suspense } from 'react'
const LazyHtmlCssJsItem = lazy(()=> import('./ProyectoDetalles'))
import '../index.css'

export default function HtmlCssJs() {
  return (
    <div className='content mt-7'>
      <Suspense fallback={<h5>Cargando</h5>}>
        <LazyHtmlCssJsItem 
          html={html}
          sass={sass}
          js={js}
          github={github}
          urlGitHub='https://github.com/cafesit8/Red-Social'
          url='https://cafesito-book.netlify.app' 
          img={img1} />
        <LazyHtmlCssJsItem
          html={html}
          css={css}
          js={js}
          github={github}
          urlGitHub='https://github.com/cafesit8/ecommerce'
          url='https://cafesito-shop.netlify.app' 
          img={img2} />
        <LazyHtmlCssJsItem
          html={html}
          css={css}
          js={js}
          github={github}
          urlGitHub='https://github.com/cafesit8/Jikan-Api'
          url='https://api-anime.netlify.app' 
          img={img3} />
        <LazyHtmlCssJsItem 
          html={html}
          sass={sass}
          js={js}
          github={github}
          urlGitHub='https://github.com/cafesit8/Fruits'
          url='https://cafesit8.github.io/Fruits/' 
          img={img4} />
        <LazyHtmlCssJsItem
          html={html}
          tailwind={tailwind}
          js={js}
          github={github}
          urlGitHub='https://github.com/cafesit8/headphones-tailwind'
          url='https://cafesit8.github.io/headphones-tailwind/' 
          img={img5} />
        <LazyHtmlCssJsItem
          html={html}
          sass={sass}
          js={js}
          github={github}
          urlGitHub='https://github.com/cafesit8/estaciones'
          url='https://cafesit8.github.io/estaciones/' 
          img={img6} />
        <LazyHtmlCssJsItem
          html={html}
          sass={sass}
          js={js}
          github={github}
          urlGitHub='https://github.com/cafesit8/space'
          url='https://cafesit8.github.io/space/' 
          img={img7} />
        <LazyHtmlCssJsItem
          html={html}
          css={css}
          js={js}
          github={github}
          urlGitHub='https://github.com/cafesit8/Music-App'
          url='https://cafesit8.github.io/Music-App/' 
          img={img8} />
        <LazyHtmlCssJsItem
          html={html}
          sass={sass}
          github={github}
          urlGitHub='https://github.com/cafesit8/reposter-a'
          url='https://respoteria.netlify.app' 
          img={img9} />
        <LazyHtmlCssJsItem
          html={html}
          css={css}
          js={js}
          github={github}
          urlGitHub='https://github.com/cafesit8/Bookmark'
          url='https://cafesit8.github.io/Bookmark/?submit=Contact+Us' 
          img={img10} />
          <LazyHtmlCssJsItem
          html={html}
          css={css}
          github={github}
          urlGitHub='https://github.com/cafesit8/landing-page'
          url='https://cafesit8.github.io/landing-page/' 
          img={img11} />
          <LazyHtmlCssJsItem
          html={html}
          css={css}
          github={github}
          urlGitHub='https://github.com/cafesit8/cartillas-grid'
          url='https://cafesit8.github.io/cartillas-grid/' 
          img={img12} />
      </Suspense>
    </div>
  )
}
