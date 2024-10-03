import CartWidget from '../CartWidget/CartWidget.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h3 className="navbar-brand" href="#">Mi ecommerce</h3>
            <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Categoria 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Categoria 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Categoria 3</a>
            </li>
          </ul>
          <CartWidget />
        </div>
            
        </nav>
    )
}

export default NavBar