import { NavLink } from "react-router-dom";
import '../main.css'

let Header = ()=>{
        return(
            
              <ul >
                <li>
                <NavLink to={'/'}>Home</NavLink>
                </li>
                <li >
                <NavLink to={'/about'}>About</NavLink>
                </li>
                <li >
                <NavLink to={'/err'}>Error</NavLink>
                </li>
               
              </ul>


        )
}

export default Header 