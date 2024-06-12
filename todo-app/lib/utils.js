function reload(arr, component, parent_component, place) {
    place.innerHTML= "";

    const categoryElements = {};

    for (let item of arr) {
        const todo = component(item);
        let category_elem = categoryElements[item.category];

        if (!category_elem) {
            category_elem = parent_component(item.category);
            categoryElements[item.category] = category_elem;
        }

        category_elem.append(todo);
    }

    for (let category_elem of Object.values(categoryElements)) {
        place.append(category_elem);
    }
}

function submit(form, arr) {
    let data = {
        id: crypto.randomUUID()
    };

    const fm = new FormData(form);

    fm.forEach((val, key) => data[key] = val);

    arr.push(data);
}

export {reload, submit};