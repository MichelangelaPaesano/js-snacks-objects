//formo un array di stringhe 

const lista = ['Cane', 'GATTO', 'coniglio', 'fiumiciattolo']
console.log (lista)

//ne formo uno vuoto dove andrò a mettere le parole da formattare
let updatedList = []

//adesso devo formattare le parole per renderle con maiuscola iniziale e tutto piccolo
for (let i = 0; i < lista.length; i++) {
    const currentElement = lista [i]
    const formattazione = currentElement.charAt(0).toUpperCase() + currentElement.slice(1).toLowerCase()
    updatedList.push(formattazione) 
}

console.log(updatedList)


