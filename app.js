//let button = document.getElementById('berechnen')
let input_muenzen = document.getElementById('muenzen')
let input_popularitaet = document.getElementById('popularitaet')
let input_ressourcen = document.getElementById('ressourcen')
let input_territorien = document.getElementById('territorien')
let input_fabrik = document.getElementById('fabrik')
let input_sterne = document.getElementById('sterne')
let input_bonus = document.getElementById('bonus')
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

    let muenzen = parseInt(input_muenzen.value)
    let popularitaet = parseInt(input_popularitaet.value)
    let ressourcen = parseInt(input_ressourcen.value)
    let territorien = parseInt(input_territorien.value)
    let fabrik = input_fabrik.value
    let sterne = parseInt(input_sterne.value)
    let bonus = parseInt(input_bonus.value)

    let sternePunkte = 3
    let territorienPunkte = 2
    let ressourcenPunkte = 1

    let gesamtSterne = (sternePunkte + popularitaet -1) * sterne
    let gesamtTerritorien;
    let gesamtRessourcen = (ressourcenPunkte + popularitaet -1) * (ressourcen/2)
    let gesamt;

    if(fabrik === 'true') {
        gesamtTerritorien = (territorienPunkte + popularitaet -1) * (territorien +3)
        fabrik = 1
    } else {
        gesamtTerritorien = (territorienPunkte + popularitaet -1) * territorien
        fabrik = 0
    }

    console.log("gesamt Sterne:" + gesamtSterne)
    console.log("gesamt Ressourcen:" + gesamtRessourcen)
    console.log("gesamt Territorien:" + gesamtTerritorien)

    let rechnung = gesamtSterne + gesamtTerritorien + gesamtRessourcen + muenzen + bonus

console.log("fabrik punkte:" + fabrik)

    gesamt = rechnung
    input_gesamt.value = gesamt

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
    let ergebnis = response.highscore
    output_muenzen.innerHTML = "Highscore:" + ergebnis.Muenzen //hier kannst du mit den werten aus der datenbank arbeiten
    console.log(ergebnis.Muenzen)
})

//todo: in index.html elemente bauen wo der highscore angezeigt wird