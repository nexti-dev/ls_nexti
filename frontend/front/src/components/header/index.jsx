import Logo from '../../assets/img/logo-ls.svg';
import { Link } from 'react-router-dom';

import Icon from '../../assets/img/icon-profile.svg';
import Search from '../../assets/img/search.svg';

import './style.css';


export function Header () {
  return (
    <header>
      <figure>
        <img src={Logo} alt="Logo LS" />
      </figure>

        <select name="" id="">
            <option value="">Buscar por todas as áreas</option>
            <option value="area1">Área 1</option>
            <option value="area2">Área 2</option>
            <option value="area3">Área 3</option>
        </select>

        <div className="input-search">
            
            <img src={Search} alt="" />
            <input type="text" />
        </div>

        <div className="profile">
            <img src={Icon} alt="" />
            <p>Bem-vindo visitante,  
                 Faça o <Link>Login</Link> ou <Link>Cadastre-se!</Link>
            </p>
        </div>
    </header>
  );
}