const schedaPersonale = [
    {
        nome:'Lucia',
        cognome: 'Rossi',
        eta: '12'
    },

    {
        nome:'Carolina',
        cognome: 'Verdi',
        eta: '22'
    },

    {
        nome:'Roberto',
        cognome: 'Bianchi',
        eta: '45'
    },

    {
        nome:'Francesc0',
        cognome: 'Marrone',
        eta: '85'
    },

    {
        nome:'Michelangela',
        cognome: 'Paesano',
        eta: '29'
    },

    {
        nome:'Antonio',
        cognome: 'Morena',
        eta: '8'
    }
]

console.log (schedaPersonale)

const guidatore = []

for (let i=0; i < schedaPersonale.length; i++) {
    const currentElement = schedaPersonale[i]

    if (currentElement.eta >= 18) {
        guidatore.push(`${currentElement.nome} ${currentElement.cognome} può guidare`)
    } else {
        console.log (`${currentElement.nome} ${currentElement.cognome} non può guidare`)
    }
}

console.log(guidatore)
