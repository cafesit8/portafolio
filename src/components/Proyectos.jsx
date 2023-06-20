import html from '../img/html-5.png'
import css from '../img/css-3.png'
import js from '../img/js.png'
import typescript from '../img/typescript.webp'
import sass from '../img/sass.png'
import react from '../img/react.webp'
import github from '../img/github.webp'
import git from '../img/git.png'
import tailwind from '../img/Tailwind CSS.png'
import firebase from '../img/firebase.png'
import vite from '../img/vite.png'
import { lazy, Suspense } from 'react'
import Loading from './Loading'
const ProyectosPoyecto = lazy(() => import('./Proyectos-Poyecto'))
const LazyHabilidades = lazy(() => import('./Habilidades'))

export default function Proyectos() {
  return (
    <section id='proyectos' className='w-full h-auto mt-32 py-10'>
      <div className='w-[1222px] m-auto flex flex-col gap-7 max-[1230px]:w-[93%]'>
        <h5 className='text-[35px] text-center font-bold dark:text-white/50'>Habilidades:</h5>
        <Suspense fallback={<Loading />}>
          <div className='flex gap-3 flex-wrap justify-evenly'>
            <LazyHabilidades img={html} alt='html' />
            <LazyHabilidades img={css} alt='css' />
            <LazyHabilidades img={js} alt='javascript' />
            <LazyHabilidades img={typescript} alt='typescript' />
            <LazyHabilidades img={sass} alt='sass' />
            <LazyHabilidades img={react} alt='react' />
            <LazyHabilidades img={git} alt='git' />
            <LazyHabilidades img={github} alt='github' />
            <LazyHabilidades img={tailwind} alt='tailwind' />
            <LazyHabilidades img={firebase} alt='firebase' />
            <LazyHabilidades img={vite} alt='vite' />
          </div>
          <ProyectosPoyecto />
        </Suspense >
      </div>
    </section>
  )
}
