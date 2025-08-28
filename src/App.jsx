import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import CategoryStrip from "./components/CategoryStrip.jsx";

export default function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        {/* Hero con props (requisito de la entrega) */}
        <ItemListContainer greeting="¡Bienvenida! Explorá las novedades del mes 🧡" />

        {/* Tiras de tarjetas como en el mockup */}
        <CategoryStrip />
      </main>
    </>
  );
}
