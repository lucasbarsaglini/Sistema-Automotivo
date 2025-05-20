import { useState } from "react";
import { Link } from "react-router-dom"; 
import "../styles/forgotPassword.css"; 
import { FaHome } from "react-icons/fa"

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Função para validar e-mail
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    // Verifica se o campo está preenchido
    if (!email) {
      setError("Por favor, insira seu e-mail!");
      return;
    }

    // Verifica se o e-mail é válido
    if (!isValidEmail(email)) {
      setError("E-mail inválido! Use um formato correto.");
      return;
    }

    setMessage("Se o e-mail existir no nosso sistema, você receberá um link para redefinir sua senha.");
  };

  return (
    <div className="forgot-container">
      <h2>Esqueci Minha Senha</h2>

      {error && <p className="error-message">{error}</p>}
      {message && <p className="success-message">{message}</p>}

      <form onSubmit={handleForgotPassword}>
        <div className="input-group">
          <label>E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="link-button">Enviar Link</button>
      </form>
      
      <Link to="/" className="icon"><FaHome /></Link>
    </div>
  );
};

export default ForgotPassword;