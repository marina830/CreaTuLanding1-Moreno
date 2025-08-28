import CartWidget from "./CartWidget.jsx";

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="brand">
        <span className="plus">＋</span>
        <div className="brand-text">
          <span className="line1">TU ACOMPAÑANTE</span>
          <span className="line2">EDUCATIVA</span>
        </div>
      </div>

      <nav className="links">
        <a href="#novedades">Novedades</a>
        <a href="#secuencias">Secuencias</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#efemerides">Efemérides</a>
      </nav>

      {/* requisito: CartWidget dentro de NavBar */}
      <CartWidget count={0} />
    </header>
  );
}
