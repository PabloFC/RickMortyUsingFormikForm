import { Link, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import '../App.css';

function Layout() {
  const { auth, logout } = useAuthContext();
  return (
    <div>
      <nav>
        {auth && (
          <>
            <h3>Protected Routes</h3>
            <ul>
              <li>
                {/* tendria que ser con /characters en Layout, Login y App.jsx */}
                <Link to="/">Characters</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <button onClick={logout}>Logout</button>
            </ul>
          </>
        )}
      </nav>
  
      <main className="app">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
