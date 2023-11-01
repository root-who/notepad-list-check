const todoNotes = document.querySelector('.todo-note-container')

function createNoteHtml(data){
    return $.parseHTML(
            `<div class="note-container">`+
                `<header class="note-header">`+
                    `<h1 class="note-title">${data.title}</h1>`+
                    `<span class="note-status"></span>`+
                `</header>`+
                `<div class="note-content">`+
                    `<p class="note-date">Date-Time: ${data.date} - ${data.hour}</p>`+
                    `<p class="note-description">Conteudo:<br></br>${data.content}</p>`+
                `</div>`+
            `</div>`
    )
}

function colectData(e){
    return {
        title:e.target.title.value,
        date:e.target.date.value,
        hour:e.target.hour.value,
        content:e.target.content.value
        }
}

function createNote(e){
    note = createNoteHtml(colectData(e))
    $('.todo-note-container').append(note);
}


const form = document.querySelector('.form')
form.addEventListener('submit', e => {
    e.preventDefault()
    createNote(e)
})
let noteTitleValue = ""
let noteDateValue= ""
let noteTimeValue= ""
let noteContentValue= ""



