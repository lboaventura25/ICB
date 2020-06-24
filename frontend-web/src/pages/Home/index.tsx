import React, { useState, FormEvent } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import './styles.css';

import rallyLogo from '../../assets/rallybiblico_logo-adaptive2.png';

const Home = () => {
  const [adminID, setAdminID] = useState('');
  const [user, setUser] = useState('');

  const history = useHistory();

  function handleLoginAdmin(e: FormEvent) {
    e.preventDefault();

    history.push('/admin-profile');
  }

  return (
    <div className="home-container">
      <div className="content">
        <section className="form">
          <img style={{ width: 300 }} src={rallyLogo} alt="Rally Bíblico" />
        </section>

        <form className="form-container" onSubmit={handleLoginAdmin}>
          <h1>Rally Bíblico</h1>
          <p>Entre na plataforma e cadastre as trilhas do Rally Bíblico</p>

          <div className="input-group">
            <input
              type="text"
              placeholder="Seu User de admin"
              value={user}
              onChange={e => setUser(e.target.value)}
            />

            <input
              type="text"
              placeholder="Sua Senha de admin"
              value={adminID}
              onChange={e => setAdminID(e.target.value)}
            />
          </div>

          <button className="button" type="submit">
            <FiLogIn size={16} color="#000000" />
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
