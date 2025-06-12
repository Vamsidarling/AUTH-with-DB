import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    try {
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:3000/user/signin",
        { email, password },
        {
          withCredentials: true, // This is correct
          headers: { "Content-Type": "application/json" },
        }
      );
      login({
      name: email.split("@")[0],
      email: email
    });
    } catch (error) {
      console.log("Error signing in:", error);
    }
  }
  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
        </div>
      </form>
      <br />
      <Link to="/signup">Sign Up</Link> |{" "}
      <Link to="/forgot-password">Forgot Password?</Link>
    </div>
  );
}
