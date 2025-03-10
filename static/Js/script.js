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

// Fetch handling
const url = "https://randomuser.me/api/";

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Errore nella richiesta: ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    const user = data.results[0];
    
    document.querySelector('.picture').innerHTML = `<img src="${user.picture.large}" alt="Profile Picture" class="img-fluid rounded-circle img-settings">`;
    document.querySelector('.name').innerText = `Name: ${user.name.first} ${user.name.last}`;
    document.querySelector('.details').innerText = `Age: ${user.dob.age}, ${user.gender}, Nationality: ${user.nat}`;
    document.querySelector('.contacts').innerText = `Email: ${user.email}, Phone number: ${user.phone}`;
    
    document.querySelector('.indirizzo').innerText = `Address: ${user.location.street.name} ${user.location.street.number}`;
    document.querySelector('.location').innerText = `Where I'm from: ${user.location.city}, ${user.location.state}, ${user.location.country}`;
    
    console.log(user);
  })
  .catch(error => {
    document.querySelector('.info').innerText = 'Si è verificato un errore: ' + error.message;
    console.log(error.message);
  });