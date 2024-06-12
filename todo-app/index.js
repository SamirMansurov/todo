import { Option } from "./components/Option.js"
import { Todo, Ul_Div } from "./components/Todo.js"
import { reload, submit } from "./lib/utils.js"

const forms = Array.from(document.forms)
const select = document.getElementById('categs')
const container = document.querySelector('.container')
const store = {
    todos: [],
    categories: []
}

forms.forEach((form) => {
    form.onsubmit = (e) => {
        e.preventDefault();

        submit(e.target, store[form.name])

        if(form.name === 'categories') {
            for (let category of store[form.name]) {
                select.append(Option(category))
            }
        } else {
            reload(store[form.name], Todo, Ul_Div, container)
        }

    }
})

const showButton = document.getElementById("showButton");
const blockToShow = document.getElementById("blockToShow");

showButton.onclick = () => {
    blockToShow.classList.remove("hidden");
     
}

const closeButton = document.getElementById("closeButton");

closeButton.onclick = () => {
    blockToShow.style.display = "none"; 
}



    