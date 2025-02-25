//questa funzione permette uno scroll automatico tramite il click
//dell'anchor nel nav e del button nell'hero

function scrollToId() {
    let section = document.getElementById("SubSection");
    section.scrollIntoView({ behavior: 'smooth' });
}

let scrollLink = document.querySelector("#scroll-link");
scrollLink.addEventListener("click", scrollToId);

let scrollButton = document.querySelector("#scroll-button");
scrollButton.addEventListener("click", scrollToId);

//Fetch handling
