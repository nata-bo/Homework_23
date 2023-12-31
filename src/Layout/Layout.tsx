import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export default function Layout():JSX.Element{

    return(
        <>
        <header>
          
          <NavBar />
        </header>

        <main>
         <Outlet />
        </main>

        <footer>
           
        </footer>
        </>
    )
}