import { NavLink, Outlet } from "react-router-dom"

const About = () => {
  return (
    <div>
          <h1>About page</h1>
          <nav>
              <NavLink to='aim'>Aim</NavLink>
              <NavLink to='company'>Company</NavLink>
              <NavLink to='team'>Team</NavLink>
          </nav>

          <Outlet/>
    </div>
  )
}

export default About
