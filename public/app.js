console.log('seite ist fertig geladen')

let button = document.getElementById('berechnen')
let sterne = document.getElementById('sterne')
let muenzen = document.getElementById('muenzen')

button.addEventListener('click', function(event) { //erst wenn der Button geklickt wurde, führe den Code in den Klammern aus
    console.log('button wurde geklickt')
    console.log(sterne.value) //greife auf den Wert von "sterne" zu
    post('/scoreboard') //übergebe an localhost/scoreboard?
})

function post(url){
    var xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.onload = function () {
    console.log(this.responseText);
};
xhr.send()
}