console.log('test');
let noteForm = document.getElementById('noteForm');
let container = document.getElementById('container');
let title = noteForm.title;
let description = noteForm.description;
noteForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let note = {
        title: title.value,
        description: description.value
    };
    addNote(note);
    console.log(note);
});
//accepts a note and adds display of the note to the page
function addNote(note) {
    let divElement = document.createElement('div');
    divElement.classList.add('note');
    let titleElement = document.createElement('h1');
    titleElement.innerHTML = note.title;
    let descriptionElement = document.createElement('p');
    descriptionElement.innerHTML = note.description;
    divElement.appendChild(titleElement);
    divElement.appendChild(descriptionElement);
    container.appendChild(divElement);
}
