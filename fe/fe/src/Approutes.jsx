import { Routes, Route } from "react-router-dom";
import  Layout  from "./Layout";
import Signup from "./Signup";
import Signin from "./Signin";
import UserPRofile from "./userProfile";

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/signin" />;
}
export default function AppRoutes() {
  return (
    <div>
    <Routes>    
      <Route path="/" element={<Layout />}/>
        <Route
          index
          element={
            <PrivateRoute>
              <UserPRofile />
            </PrivateRoute>
          }
        />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
    </div>
  );
}
