//selecting overlay,popupboxand addbutton
var popup_overlay = document.querySelector(".popup-overlay")
var popup_box = document.querySelector(".popup-box")
var add_popup_button = document.getElementById("add-popup-btn")
add_popup_button.addEventListener("click", function() {
    popup_overlay.style.display = "block"
    popup_box.style.display = "block"
})

/*
//prevent refreashing page
var cancel_button = document.getElementById("cancel-button")
cancel_button.addEventListener("press", function(event){
     popup_overlay.style.display = "none"
     popup_box.style.display = "none"
     //event.preventDefault();
})*/
var cancel_button = document.getElementById("cancel-button")
function can(event){
 //event.preventDefault();
    popup_overlay.style.display = "none"
     popup_box.style.display = "none"
}
//selecting container,titleinput,autor,decs,add
var container = document.querySelector(".container")
var title_input = document.getElementById("title-input")
var author_input = document.getElementById("author-input")
var description_input = document.getElementById("description-input")
var add_button_popup = document.getElementById("add-button-popup")

add_button_popup.addEventListener("click", function (event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h2>${title_input.value}</h2>
    <h5>${author_input.value}</h5>
    <p>${description_input.value}</p>
    <button onclick="del(event)">Delete</button>
    `
    container.append(div)
    popup_overlay.style.display = "none"
    popup_box.style.display = "none"

})

function del(event){
    event.target.parentElement.remove()
}