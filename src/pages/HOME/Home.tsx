import NavBar from "../../components/Navbar/NavBar"
import { Toolbar } from "@mui/material"
import Hero from "./sections/Hero/Hero"
import Sobre from "./sections/About/Sobre"
import Projetos from "./sections/Projects/Projetos"

const Home = () => {

  return (
    <>
    <NavBar/>
    <Toolbar />
     <Hero/>
     <Sobre/>
     <Projetos/>
    </>
  )
}

export default Home
