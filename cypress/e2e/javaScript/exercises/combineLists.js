const arreglo1 = ['Pato', 'Buho', 'Aguila', 'Pichon'];
const arreglo2 = ['Lobo', 'Oso', 'Alce', 'Pez'];
const arregloCombi = [''];

for(let i = 0; i <= (arreglo1.length + arreglo2.length); i++) {
    arregloCombi.push(arreglo1[i]);
    arregloCombi.push(arreglo2[i]);

    console.log(arregloCombi[i]);
}