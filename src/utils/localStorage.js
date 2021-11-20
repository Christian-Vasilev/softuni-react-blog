const store = (name, data) => {
    if (typeof data === 'object') {
        data = JSON.stringify(data);
    }

    localStorage.setItem(name, data);
}

const read = (name) => {
    let data = localStorage.getItem(name);

    if (!data) {
        return {};
    }

    if (typeof JSON.parse(data) === 'object') {
        return JSON.parse(data);
    }

    return data;
}

const remove = (name) => {
    localStorage.removeItem(name);
}

export default { store, read, remove }