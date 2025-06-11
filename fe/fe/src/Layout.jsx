import { Outlet } from "react-router-dom"
import NavBar from "./Headers"
import UserPRofile from "./userProfile"
import { useAuth } from "./AuthContext"
import { Navigate } from "react-router-dom"

export default function Layout()
{
    const  { user , logout } = useAuth();
    const handleLogout = () => {
    logout();
    Navigate("/")

   }
    return(
         <div>
      <nav>
        <div style={{ display: 'flex', gap: '10px', padding: '10px' }}>
          {user ? (
            <div>
              <span style={{ marginRight: '10px' }}>Welcome, {user.name}</span>
              <button onClick={handleLogout} style={{ padding: '5px 10px' }}>Logout</button>
            </div>
          ) : (
            <>
             <NavBar/>
            </>
          )}
        </div>
      </nav>
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
}