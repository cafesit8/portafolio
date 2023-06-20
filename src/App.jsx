import { lazy, Suspense } from "react"
import Loading from "./components/Loading"
const LazySobreMi = lazy(()=>import('./components/SobreMi'))
const NavBar = lazy(()=>import('./components/NavBar'))
const Proyectos = lazy(()=>import('./components/Proyectos'))
const Contacto = lazy(()=>import('./components/Contacto'))
const Inicio = lazy(()=>import('./components/Inicio'))

function App() {
  return (
    <main className="bg-[#f8f1e8] w-full h-auto text-black flex flex-col items-center dark:text-white dark:bg-[#141414] duration-200">
      <Suspense fallback={<Loading />}>
        <NavBar />
        <Inicio />
        <LazySobreMi />
        <Proyectos />
        <Contacto />
      </Suspense>
    </main>
  )
}

export default App
