const animali = [
    {
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammifero'
    },

    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammifero'
    },

    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli'
    },

    {
        nome: 'tigre',
        famiglia: 'felidi',
        classe: 'mammifero'
    },

    {
        nome: 'cavalluccio marino',
        famiglia: 'syngnathidae',
        classe: 'pesce'
    }
]

const mammiferi = []

for (let i=0; i < animali.length; i++) {
    const currentElement = animali [i]

    if (currentElement.classe === 'mammifero') {
        mammiferi.push(currentElement)
    } else {
        console.log (animali)
    }
}


console.log(mammiferi)