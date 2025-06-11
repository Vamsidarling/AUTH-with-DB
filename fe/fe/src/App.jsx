import { useState } from "react";
import AppRoutes from "./Approutes";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./AuthContext";
function App() {
  return (
    <>
      <div className="App">
        <h1>Welcome to Vite React</h1>
        <BrowserRouter>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
