import { useState } from "react";
import logo from "./assets/logo.svg";
import Dashboard from "./components/Dashboard.jsx";
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

    // Show success message on the login form, then navigate to dashboard after brief delay
    setMessage("Login successful 🔐");

    setTimeout(() => {
      localStorage.setItem("token", data.token);
      setToken(data.token);
      // clear message so it doesn't appear on the dashboard
      setMessage("");
    }, 1200);
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

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setMessage("Logged out successfully 👋");
    setIsLogin(true);
  };

  return (
    <>
      {!token ? (
        <div
          className="form"
      
        >
          <header className="app-header" style={{ textAlign: "center" }}>
            <img src={logo} alt="BerriFunds logo" className="logo" />
            <h1>BerriFunds</h1>
          </header>

          <form onSubmit={isLogin ? handleLogin : handleSignup}>
            {!isLogin && (
              <>
                <input
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  required
                />
                <br />
                <br />
              </>
            )}

            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <br />
            <br />

            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <br />
            <br />

            <button type="submit">{isLogin ? "Login" : "Signup"}</button>

            <br />
            <br />

            {!isLogin && (
              <p style={{ color: "#FFF8E3" }}>Already have an account?</p>
            )}
            <button type="button" onClick={() => setIsLogin(!isLogin)}>
              Go to {isLogin ? "Signup" : "Login"}
            </button>
          </form>

          <p>{message}</p>
        </div>
      ) : (
        <div className="dashboard-page">
  <Dashboard onLogout={handleLogout} />
</div>

      )}
    </>
  );
}

export default App;
