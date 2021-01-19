let personajes = ['David', 'Isaías', 'José', 'Aarón', 'Gamaliel', 'Gedeón']
let participantes1 = ['Juan', 'Pepe']
let participantes1YaJugaron = []
let participantes2 = ['José', 'Pepo']
let participantes2YaJugaron = []
let puntajeGrupo1 = 0
let puntajeGrupo2 = 0

let etapa = 0

let titulo = document.getElementById('titulo')
let sub = document.getElementById('sub')

function pedirDatos() {
    let jugadores1 = prompt('¿Cuantos jugadores son en el equipo 1?')
    let jugadores2 = prompt('¿Cuantos jugadores son en el equipo 2?')
    for (let i = 0; i < jugadores1; i++) {
        participantes1.push(prompt('Equipo 1 - Nombre:'))
    }
    for (let i = 0; i < jugadores2; i++) {
        participantes1.push(prompt('Equipo 2 - Nombre:'))
    }
}

function ComenzarMano() {
    titulo.innerHTML = 'Comienza mano!'
    var id1 = Math.floor(Math.random() * participantes1.length)
    var id2 = Math.floor(Math.random() * participantes2.length)
    sub.innerHTML = participantes1[id1] + ' VS ' + participantes2[id2]
    participantes1YaJugaron.push(participantes1[id1])
    participantes2YaJugaron.push(participantes1[id2])
    participantes1.splice(id1, 1)
    participantes2.splice(id2, 1)
}