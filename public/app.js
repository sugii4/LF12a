let button = document.getElementById('berechnen')
let input_muenzen = document.getElementById('muenzen')
let input_popularitaet = document.getElementById('popularitaet')
let input_ressourcen = document.getElementById('ressourcen')
let input_territorien = document.getElementById('territorien')
let input_fabrik = document.getElementById('fabrik')
let input_sterne = document.getElementById('sterne')
let input_bonus = document.getElementById('bonus')
let input_gesamt = document.getElementById('gesamt')


button.addEventListener('click', function(event) { //erst wenn der Button geklickt wurde, führe den Code in den Klammern aus
    
    // if () //hier felder validieren
    
    let muenzen = input_muenzen.value
    let popularitaet = parseInt(input_popularitaet.value)
    let ressourcen = input_ressourcen.value
    let territorien = input_territorien.value
    let fabrik = input_fabrik.value
    let sterne = parseInt(input_sterne.value)
    let bonus = input_bonus.value
    let gesamt = input_gesamt.value

    console.log('button wurde geklickt')
    const data = `sterne=${sterne}&muenzen=${muenzen}&popularitaet=${popularitaet}&territorien=${territorien}&ressourcen=${ressourcen}&bonus=${bonus}&fabrik=${fabrik}&gesamt=${gesamt}`
    post('/scoreboard', data) //übergebe an localhost/scoreboard?
})

function post(url, data) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    /*xhr.onload = function () {
        console.log(this.responseText);
    };*/
    xhr.send(data)
}

//todo: in index.html elemente bauen wo der highscore angezeigt wird