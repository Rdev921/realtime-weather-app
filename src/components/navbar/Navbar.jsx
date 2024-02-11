import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <nav>
                <div class="wrapper">
                    <a href="#" class="logo">Weather App</a>
                    <div class="menu-items">
                        <Link to="/">Home</Link>
                        <Link to="/chart">Chart</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar