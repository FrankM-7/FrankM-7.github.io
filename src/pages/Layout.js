import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
    return (
        <div>
            <nav style={{border: '1px red solid'}}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />

            <footer className="footer" style={{border: '1px red solid'}}>
                <p>Footer</p>
            </footer>
        </div>
    )
};

export default Layout;