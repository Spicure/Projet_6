async function fetchImagesFromDb() {
  try {
    const response = await fetch("http://localhost:5678/api/works");
    const parsedData = await response.json();
    console.log(response);
    console.log(parsedData);
    displayImages(parsedData);
  } catch (error) {
    console.log(error);
  }
}

fetchImagesFromDb();

function displayImages(parsedData) {
  const gallery = document.querySelector(".gallery");
  for (let i = 0; i < parsedData.length; i++) {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");

    img.src = parsedData[i].imageUrl;
    img.alt = parsedData[i].title;

    figcaption.innerText = parsedData[i].title;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    gallery.appendChild(figure);
  }
}

//utiliser map pour parcourir le tableau  leTableau.map(variable, indice, copieDuTableau) propriété filter permet de selectionné et trier
