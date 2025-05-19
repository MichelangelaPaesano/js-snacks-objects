//SNACK1 --- MACCHINE E ALIMENTAZIONE 

const macchine = [
    {
        modello: '500',
        marca: 'Fiat',
        alimentazione: 'Benzina'
    },

    {
        marca: 'AlfaRomeo',
        modello: 'Tonale',
        alimentazione: 'Elettrica'
    },

    {
        marca: 'Audi',
        modello: 'R8',
        alimentazione: 'Diesel'
    },

    {
        marca: 'BMW',
        modello: 'G8',
        alimentazione: 'GPL'
    },

    {
        marca: 'Peugeout',
        modello: '107',
        alimentazione: 'Benzina'
    },

    {
        marca: 'Dacia',
        modello: 'Sandero',
        alimentazione: 'Diesel'
    },

    {
        marca: 'Cupra',
        modello: 'Terramar',
        alimentazione: 'Ibrida'
    },

    {
        marca: 'Fiat',
        modello: 'Punto',
        alimentazione: 'Diesel'
    },

    {
        marca: 'Mercedes',
        modello: 'Classe A',
        alimentazione: 'Diesel'
    },

    {
        marca: 'Citroen',
        modello: 'C1',
        alimentazione: 'Benzina'
    }

]

const benzina = []
const diesel = []
const diversaAlimentazione = []

for (let i = 0; i < macchine.length; i++) {
    const currentElement = macchine[i]
    console.log (i, currentElement)

if (currentElement.alimentazione === 'Benzina') {
    benzina.push(currentElement)
} else if (currentElement.alimentazione === 'Diesel') {
    diesel.push(currentElement)
} else {diversaAlimentazione.push(currentElement)}
 console.log (benzina)
 console.log (diesel)
 console.log (diversaAlimentazione)

}