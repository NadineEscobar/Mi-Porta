const proyectosContainer = document.getElementById("tarjetasContainer");
const aside = document.getElementsByTagName("aside")[0];
const estudiosContainer = document.getElementById("estudiosContainer");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeModal = document.getElementsByClassName("close")[0];

const getTecnologias = (tecnologias) =>{
    let res = "";
    tecnologias.forEach(tecnologia => {
        res += `<span class= "tecnologia">${tecnologia}</span>`
    })
    return res;
}

//Creación proyectos
proyectos.forEach(proyecto =>{
    const nuevoProyecto = document.createElement("div");
    nuevoProyecto.classList = "tarjeta proyecto";
    proyectosContainer.appendChild(nuevoProyecto);
    nuevoProyecto.innerHTML = `
     <img src="img/proyectos/${proyecto.imagen}">
       <div>
         <h3>${proyecto.titulo}</h3>
         <p>${proyecto.descripcion}</p>
         <p>Tecnologias:${getTecnologias(proyecto.tecnologias)}</p>
        </div>
     <a href="${proyecto.link}" target="_blank">Ver proyecto</a>
    `
})

//Creación info personal
const nuevaPresentacion = document.createElement("div");
nuevaPresentacion.classList = "presentacion";
nuevaPresentacion.innerHTML = `
  <img src="${informacionPersonal.imagen}">
`;
nuevaPresentacion.innerHTML += `
<h2>${informacionPersonal.subtitulo}<h2>
`;
informacionPersonal.otros.forEach(dato => {
    nuevaPresentacion.innerHTML += `
    <div>
      <span>${dato[0]}:</span>
      <span>${dato[1]}</span>
    </div>
    `
})
aside.appendChild(nuevaPresentacion);

//Idiomas
const nuevoIdiomas = document.createElement("div");
nuevoIdiomas.classList = "idioma";
informacionPersonal.idiomas.forEach(dato => {
  nuevoIdiomas.innerHTML += `
    <div>
      <span>${dato[0]}:</span>
      <span>${dato[1]}</span>
    </div>
  `
})
aside.appendChild(nuevoIdiomas);

//Lenguajes de programación
const nuevaTecnologias = document.createElement("div");
nuevaTecnologias.classList = "tecnologias";
informacionPersonal.tecnologias.forEach(dato => {
    nuevaTecnologias.innerHTML += `
    <div>
      <span>${dato[0]}</span>
      <span>${dato[1]}</span>
    </div>
    <progress max="10" value=${dato[1]}>
  `
})
aside.appendChild(nuevaTecnologias);

const getIconoRed = (red) =>{
  switch(red.toLowerCase()){
    case "github":
      return "github.svg";
    case "linkedin":
      return "linkedin.svg";
    case "gmail":
      return "gmail.svg";
    default:
      return "globe-solid.svg";
  }
}

//Links
const nuevaRedes = document.createElement("div");
nuevaRedes.classList = "redes";
informacionPersonal.redes.forEach(dato => {
  if(dato[1] === "") return;
  const esGmail = dato[0].toLowerCase() === "gmail";
    nuevaRedes.innerHTML += `
    <a href="${dato[1]}" target="_blank">
      <img src="img/iconos/${getIconoRed(dato[0])}">
    </a>
  `
})
aside.appendChild(nuevaRedes);

//Certificados de Estudios

estudios.forEach(estudio => {
    const nuevoEstudio = document.createElement("div");
    nuevoEstudio.classList = "tarjeta estudio";
    estudiosContainer.appendChild(nuevoEstudio);
    nuevoEstudio.innerHTML = `
        <img class="estudio-img" src="img/certificados/${estudio.imagen}" alt="Certificado de ${estudio.titulo}">
        <div>
            <h3>${estudio.titulo}</h3>
            <p>Institución: ${estudio.institucion}</p>
            <p>Fecha: ${estudio.fecha}</p>
        </div>
    `;

// Evento para abrir el modal al hacer clic en la imagen
const img = nuevoEstudio.querySelector(".estudio-img");
img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = estudio.titulo;
});
});

// Cerrar el modal
closeModal.onclick = () => {
modal.style.display = "none";
};