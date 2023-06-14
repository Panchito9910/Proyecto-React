import logo from "./assets/logo.png"
export function NavBar(){
    return (
    <nav className="navbar">
      <div className="contenedor">
        <div className="fila">
            <div className="col-xs-12 col-sm-12 md-lg-12 col-lg-12">
                <img src={logo} alt="" />
            </div>
        </div>
      </div>
    </nav>
    );
}