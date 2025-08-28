function PlusBubble() {
  return <span className="bubble-plus">＋</span>;
}

function CategoryCard({ id, title, color, image, tall = false }) {
  return (
    <article id={id} className={`card ${tall ? "tall" : ""}`} style={{ backgroundColor: color.bg, borderColor: color.border }}>
      <PlusBubble />
      <div className="card-media">
        <img src={image} alt={title} />
      </div>
      <h3 style={{ color: color.text }}>{title}</h3>
    </article>
  );
}

export default function CategoryStrip() {
  return (
    <section className="strip">
      <CategoryCard
        id="novedades"
        title={"Novedades\n del mes"}
        color={{ bg: "#d8e9f7", border: "#b7d4ee", text: "#7b5f00" }}
        image="/img/novedades.png"
        tall
      />
      <CategoryCard
        id="secuencias"
        title="Secuencias"
        color={{ bg: "#d8c3ea", border: "#c5aee0", text: "#ffffff" }}
        image="/img/secuencias.png"
      />
      <CategoryCard
        id="proyectos"
        title="Proyectos"
        color={{ bg: "#c78f20", border: "#b67f17", text: "#ffffff" }}
        image="/img/proyectos.png"
      />
      <CategoryCard
        id="efemerides"
        title="Efemérides"
        color={{ bg: "#ee6521", border: "#de5713", text: "#ffffff" }}
        image="/img/efemerides.png"
      />
    </section>
  );
}
