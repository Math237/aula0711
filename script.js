// Quando temos uma quatidade prè definida de repetições  utilizamos o for

// O for possui 3 parãmetros: (contador; condição; modificador)

// para repetir 3 vezes:

for (var i = 0; i < 3; i++) {
    console.log("O i vale:", i);
}

// Todo array pode ser percorrido com for

var frutas = ['maçã', 'banana' , 'uva' , 'pessego'  , 'Melão'];
for (var i = 0; i < frutas.length; i++){
    console.log("A fruta [" + i +"] é: " + frutas[i]);
}