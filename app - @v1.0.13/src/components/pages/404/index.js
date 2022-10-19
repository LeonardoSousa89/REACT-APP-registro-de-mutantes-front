import '../../../App.css'

import { Link } from 'react-router-dom'

export default function Erro(){
  return (
    <div className="erro">
       <h1>Erro 404</h1>
       <h5>Página não encontrada ;)</h5>

       <Link to={'/login'}>
          <p id="click">retorne a página de login aqui.</p>
        </Link>
    </div>
    );
}

