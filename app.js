//let button = document.getElementById('berechnen')
//let input_muenzen = document.getElementById('muenzen')
//let input_popularitaet = document.getElementById('popularitaet')
//let input_ressourcen = document.getElementById('ressourcen')
//let input_territorien = document.getElementById('territorien')
let input_fabrik = document.getElementById('fabrik')
//let input_sterne = document.getElementById('sterne')
//let input_bonus = document.getElementById('bonus')
let input_gesamt = document.getElementById('gesamt')
let output_muenzen = document.getElementById('highscore_muenzen')
let output_ressourcen = document.getElementById('highscore_ressourcen')
let output_territorien = document.getElementById('highscore_territorien')
let output_bonus = document.getElementById('highscore_bonus')
let output_gesamt = document.getElementById('highscore_gesamt')

let form = document.getElementById('eingaben')

form.addEventListener('submit', function (event) {
    event.preventDefault(); //stoppt Weiterleitung zur scoreboard.php, führt stattdessen folgendes Script aus
    console.log('form wurde gestoppt')

    let data = new FormData(form) //speichert die eingegebenen Daten der inputs

    let muenzen = input_muenzen.value
    let popularitaet = input_popularitaet.value
    let ressourcen = input_ressourcen.value
    let territorien = input_territorien.value
    let fabrik = input_fabrik.value
    let sterne = input_sterne.value
    let bonus = input_bonus.value
    let gesamt = input_gesamt.value

    let sternePunkte = 3
    let territorienPunkte = 2
    let ressourcenPunkte = 1

    if (fabrik === 'true') {
        fabrik = 1
    } else {
        fabrik = 0
    }

    let gesamtSterne = sternePunkte + popularitaet -1 * sterne
    let gesamtTerritorien = territorienPunkte + popularitaet -1 * territorien
    let gesamtRessourcen = ressourcenPunkte + popularitaet -1 * Ressourcen/2

    if(fabrik == 1) {
        fabrik += 30
    } else {
        fabrik += 0
    }

    let Rechnung = gesamtSterne + gesamtTerritorien + gesamtRessourcen + muenzen + bonus + fabrik
    gesamt = Rechnung

console.log(gesamt)

    data.set('gesamt', gesamt)
    data.set('fabrik', fabrik) //aktualisiert die Fabrik in der FormData durch die if

    fetch(form.action, { //übernimmt die Post Methode der form und nutzt dafür die scoreboard.php
        method: form.method,
        body: data //die daten aus den inputs
    }).then(function (response) { //muss so
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    }).then(function (data) { //zeigt daten in der konsole an
        console.log(data);
    })
})


fetch('scoreboard.php', { //übernimmt die Get Methode und nutzt dafür die scoreboard.php
    method: 'GET'
}).then(function (response) { //muss so
    if (response.ok) {
        return response.json();
    }
    return Promise.reject(response);
}).then(function (response) { //kann die abgefragten daten nun nutzen und anzeigen
    console.log(response);
    let ergebnis = response.data
    output_muenzen = ergebnis.Muenzen //hier kannst du mit den werten aus der datenbank arbeiten
})

//todo: in index.html elemente bauen wo der highscore angezeigt wird