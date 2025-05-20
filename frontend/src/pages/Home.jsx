import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1>📅 Agendamentos fáceis, serviços eficientes!</h1>
        <p>Gerenciar uma oficina pode ser desafiador, 
          e nós estamos aqui para simplificar esse processo. 
          Com o 📊AutoFlow, você tem um painel completo para agendar revisões, 
          acompanhar o histórico de serviços dos clientes e manter sua equipe organizada.<br></br><br></br>
        </p>
        <div className="buttons">
          <Link to="/register">
            <button className="register-button">Teste gratuito</button>
          </Link>
          <Link to="/login">
            <button className="login-bt">Já possuo uma conta</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
