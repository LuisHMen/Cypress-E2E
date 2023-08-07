// Functionality example
// Linked lists work like that

let head = {
    gancho: null
}

let nodo1 = {
    dato: 'palabra',
    puntero: null
}
let nodo2 = {
    dato: 701,
    puntero: null
}
let nodo3 = {
    dato: [5, 3, 9],
    puntero: null
}

head.puntero = nodo1;
head.puntero.puntero = nodo2;
head.puntero.puntero.puntero = nodo3;