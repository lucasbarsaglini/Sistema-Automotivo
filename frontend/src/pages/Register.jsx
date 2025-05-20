import { useState } from "react";
import "../styles/register.css"; 
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Função para validar e-mail
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Função para validar senha forte (mínimo 8 caracteres, um número e uma letra maiúscula)
  const isValidPassword = (password) => {
    return /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    // Verifica se todos os campos estão preenchidos
    if (!name || !email || !password || !confirmPassword) {
      setError("Todos os campos são obrigatórios!");
      return;
    }

    // Verifica se o e-mail é válido
    if (!isValidEmail(email)) {
      setError("E-mail inválido! Use um formato válido (exemplo@dominio.com).");
      return;
    }

    // Verifica se a senha atende aos critérios de segurança
    if (!isValidPassword(password)) {
      setError("A senha deve ter pelo menos 8 caracteres, incluindo um número e uma letra maiúscula.");
      return;
    }

    // Verifica se as senhas são iguais
    if (password !== confirmPassword) {
      setError("As senhas não coincidem!");
      return;
    }

    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div className="register-container">
      <h2>Efetuar Cadastro</h2>

      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleRegister}>
        <div className="input-group">
          <label>Nome da Oficina</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Endereço completo</label>
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required
          />
        </div>

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

        <div className="input-group">
          <label>Confirme a Senha</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="register-bt">Cadastrar</button>
      </form>

      <p className="register-link">
        Já tem uma conta? <Link to="/login">Entrar</Link>
      </p>
    </div>
  );
};

export default Register;