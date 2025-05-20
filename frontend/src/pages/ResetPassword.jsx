import { useState } from "react";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams(); 
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    // Verifica se as senhas foram preenchidas
    if (!newPassword || !confirmPassword) {
      setError("Preencha todos os campos!");
      return;
    }

    // Verifica se a senha tem pelo menos 8 caracteres
    if (newPassword.length < 8) {
      setError("A senha deve ter pelo menos 8 caracteres.");
      return;
    }

    // Verifica se as senhas são iguais
    if (newPassword !== confirmPassword) {
      setError("As senhas não coincidem!");
      return;
    }

    setMessage("Senha redefinida com sucesso! Você já pode fazer login.");
  };

  return (
    <div className="reset-container">
      <h2>Redefinir Senha</h2>

      {error && <p className="error-message">{error}</p>}
      {message && <p className="success-message">{message}</p>}

      <form onSubmit={handleResetPassword}>
        <div className="input-group">
          <label>Nova Senha</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Confirme a Nova Senha</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="reset-button">Redefinir Senha</button>
      </form>

      <p className="reset-links">
        <a href="/login">Voltar para o Login</a>
      </p>
    </div>
  );
};

export default ResetPassword;
