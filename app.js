window.onload = function () {
    obtenerAPOD();
};
function obtenerAPOD(fecha = "") {
    let url = `https://api.nasa.gov/planetary/apod?api_key=dpxWyqyYGrYomyUy3vjyjpD7NzV7jkRdfDf90OaE&date=${fecha}`;

    fetch(url)
        .then(response => response.json())
        .then(data => mostrarAPOD(data))
        .catch(err => console.error("Error:", err));
}


function mostrarAPOD(data) {
    document.getElementById("titulo").textContent = data.title;
    document.getElementById("fecha-apod").textContent = data.date;
    document.getElementById("explicacion").textContent = data.explanation;

    const mediaDiv = document.getElementById("media");
    mediaDiv.innerHTML = "";

    if (data.media_type === "image") {
        mediaDiv.innerHTML = `<img src="${data.url}" width="400">`;
    }
}

document.getElementById("btn-search").addEventListener("click", () => {
    const fecha = document.getElementById("date-input").value;
    console.log(fecha);

    if (!fecha) {
        alert("Debes seleccionar una fecha.");
        return;
    }

    obtenerAPOD(fecha);
});
