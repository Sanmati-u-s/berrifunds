import { useState } from "react";
import logo from "./assets/logo.svg";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [message, setMessage] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // SIGNUP
  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("");

    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setMessage(res.ok ? "Signup successful 🎉" : data.message);
  };

  // LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.email,
        password: form.password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.message || "Login failed");
      return;
    }

    // 🔐 STORE JWT
    localStorage.setItem("token", data.token);
    setToken(data.token);

    setMessage("Login successful 🔐");
  };

  // PROTECTED API CALL
  const accessProtectedRoute = async () => {
    const res = await fetch("http://localhost:5000/api/test/protected", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div  className="form" style={{ padding: "40px", maxWidth: "400px" }}>
      <header className="app-header">
        <img src={logo} alt="BerriFunds logo" className="logo" />
        <h1>BerriFunds</h1>
      </header>

      
      <form className="form" onSubmit={isLogin ? handleLogin : handleSignup}> 
        {!isLogin && (
          <>
            <input
              name="name"
              placeholder="Name"
              onChange={handleChange}
              required
            />
            <br /><br />
          </>
        )}

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">
          {isLogin ? "Login" : "Signup"}
        </button>

        <button onClick={() => setIsLogin(!isLogin)}>
        Go to {isLogin ? "Signup" : "Login"}
      </button>

      </form>

      <p>{message}</p>

      {token && (
        <>
          <hr />
          <button class="access" onClick={accessProtectedRoute}>
            Access Protected Route 🔒
          </button>
        </>
      )}
    </div>
  );
}

export default App;
