let button = document.getElementById('berechnen')
let input_sterne = document.getElementById('sterne')
let input_muenzen = document.getElementById('muenzen')

button.addEventListener('click', function(event) { //erst wenn der Button geklickt wurde, führe den Code in den Klammern aus
    
    // if () //hier felder validieren
    
    let sterne = input_sterne.value
    let muenzen = input_muenzen.value
    console.log('button wurde geklickt')
    const data = `sterne=${sterne}&muenzen=${muenzen}&popularitaet=test&territorien=1&ressourcen=4&bonus=1&fabrik=0&gesamt=4`
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