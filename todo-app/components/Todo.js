
function Todo(item) {
    let li = document.createElement('li')

    li.innerHTML = `${item.title} <b>${item.category}</b>`

    return li
}


function Ul_Div(category) {
    let div = document.createElement('div')
    let h2 = document.createElement('h2')
    let ul = document.createElement('ul')

    h2.innerHTML = category
    div.setAttribute(`data-${category}`, '')

    div.classList.add('category')

    div.append(h2, ul)

    return div
}


export {Todo, Ul_Div}