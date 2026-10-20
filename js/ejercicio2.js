
const items = [
  { texto: "Real Estate", img: "img/foto1.jpg" },
  { texto: "Library", img: "img/foto2.jpg" },
  { texto: "Transportation", img: "img/foto3.jpg" },
  { texto: "Gas & Oil", img: "img/foto4.jpg" },
  { texto: "Marketing Agency", img: "img/foto5.jpg" },
  { texto: "Pizza", img: "img/foto6.jpg" },
  { texto: "Flooring", img: "img/foto7.jpg" },
  { texto: "Steel Processing", img: "img/foto8.jpg" },
];

function crear(tag, clase, texto) {
  const el = document.createElement(tag);
  if (clase) el.className = clase;
  if (texto) el.textContent = texto;
  return el;
}

const titulo = crear("h1", null, "Beautiful, Hand-crafted Layouts");
const galeria = crear("section", "galeria");

items.forEach(({ texto, img }) => {
  const fig = crear("figure", "item");
  const imagen = crear("img");
  imagen.src = img;
  imagen.alt = texto;
  fig.append(imagen, crear("figcaption", null, texto));
  galeria.appendChild(fig);
});

const pronto = crear("figure", "item pronto");
const caja = crear("div", "caja");
const icono = crear("img");
icono.src = "img/pronto.svg";
icono.alt = "Coming Soon";
caja.appendChild(icono);
pronto.append(caja, crear("figcaption", null, "Coming Soon"));
galeria.appendChild(pronto);

document.body.append(titulo, galeria);
