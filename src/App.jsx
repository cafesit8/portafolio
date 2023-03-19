import Contacto from "./components/Contacto"
import { Inicio } from "./components/Inicio"
import { NavBar } from "./components/NavBar"
import { Proyectos } from "./components/Proyectos"
import SobreMi from "./components/SobreMi"

function App() {
  return (
    <main className="bg-[#f8f1e8] w-full h-auto text-black flex flex-col items-center dark:text-white dark:bg-[#361b0b] duration-200">
      <NavBar />
      <Inicio />
      <SobreMi />
      <Proyectos />
      <Contacto />
    </main>
  )
}

export default App
