/* nack 3
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi. */

const animali = [
    {
        nome:'leone',
        famiglia:'felini',
        classe:'mammiferi',
    },
    {
        nome:'cane',
        famiglia:'canidi',
        classe:'mammiferi',
    },
    {
        nome:'gallina',
        famiglia:'fasianidi',
        classe:'uccelli',
    }
]

const mammiferi = animali.filter(animale=>{
    // blocco di codice che deve restituire true
    if (animale.classe === 'mammiferi') {
        return true
    }
})
console.log(mammiferi)


