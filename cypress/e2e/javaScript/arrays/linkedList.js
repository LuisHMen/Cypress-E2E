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

Lista.prototype.search = function(value) {
    if(this.head.value == value) return true;
    else {
        let backUpNodo = this.head;

        while(backUpNodo.next != null) {
            if(backUpNodo.next.value == value) return true;
            backUpNodo = backUpNodo.next;
        }
    }
    return false;
}

let list = new Lista();

list.add(71);
list.add('Prueba');
list.add([7, 11, 90]);
list.add('Luis H. Men');
list.add('Loki');

console.log(list.head);
// console.log(list.head.next)
// console.log(list.head.next.next)

console.log(list.search('Loki'));