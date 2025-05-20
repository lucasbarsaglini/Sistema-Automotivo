import { useState } from "react";
import "../styles/login.css"; 
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Função para validar e-mail
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); 

    // Valida se os campos estão preenchidos
    if (!email || !password) {
      setError("Preencha todos os campos!");
      return;
    }

    // Valida se o e-mail tem um formato correto
    if (!isValidEmail(email)) {
      setError("E-mail inválido! Use um formato válido.");
      return;
    }

    // Valida se a senha tem pelo menos 8 caracteres
    if (password.length < 8) {
      setError("A senha deve ter pelo menos 8 caracteres.");
      return;
    }

    alert("Login realizado com sucesso!");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-button">Entrar</button>
      </form>

      <p className="login-links">
        <Link to="/forgot-password">Esqueci minha senha</Link>|
        <Link to="/register">Cadastrar</Link>
      </p>
      <Link to="/" className="icon-home"><FaHome /></Link>
    </div>
  );
};

export default Login;