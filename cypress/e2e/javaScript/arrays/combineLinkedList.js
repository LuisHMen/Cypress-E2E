// Exercise
// Combine rows into a linked list

function Lista() {
    this.head = null;
}

function Nodo(value) {
    this.value = value;
    this.next = null;
}

Lista.prototype.add = function(value) {
    if(this.head == null) this.head = new Nodo(value);
    else {
        let backUpNodo = this.head;

        while(backUpNodo.next != null) {
            backUpNodo = backUpNodo.next;
        }
        backUpNodo.next = new Nodo(value);
    }
}

Lista.prototype.combine = function(lista1, lista2) {
    let array = [lista1.head.value, lista2.head.value];

    let referencia1 = lista1.head;
    let referencia2 = lista2.head;

    while(referencia2.next != null) {
        array.push(referencia1.next.value);
        array.push(referencia2.next.value);
        referencia1 = referencia1.next;
        referencia2 = referencia2.next;
    }

    let listaCombinada = new Lista();

    for(let i = 0; i <= array.length; i++) {
        listaCombinada.add(array[i])
        console.log(array[i]);
    }

    return listaCombinada;
}

let list1 = new Lista();
list1.add("Luis");
list1.add("Pedro");
list1.add("Pablo");
list1.add("José");

let list2 = new Lista();
list2.add("María");
list2.add("claudia");
list2.add("Flor");
list2.add("Clara");

let listaCombinada = list1.combine(list1, list2);
console.log('Lista enlazada.')
console.log(listaCombinada);