import CartWidget from "../CartWidget/CartWidget.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h3 className="navbar-brand" href="#">
        Istorecba
        </h3>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Iphone
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                MacBook
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Accesorios
              </a>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
