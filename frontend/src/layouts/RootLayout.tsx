import { Outlet,Link} from "react-router-dom";

export default function RootLayout(){
    return (
        <div className="app-container">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </nav>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}