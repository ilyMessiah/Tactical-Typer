const data = document.getElementById('txtData');

const genTxt = document.getElementById('genTxt');

const checkTxt = document.getElementById('checkTxt');

let lbl = document.getElementById('txtLbl');

let matchLbl = document.getElementById('matchLbl');

const txtInput = document.getElementById("txtInput");

fetch('https://random-word-api.herokuapp.com/all').then(response => response.json()).then(wordlist => {

    document.getElementById("loaded").hidden = false;
    document.getElementById("loading").hidden = true;

    var randomList = ""

    genTxt.addEventListener('click', async () => {

    randomList="";
        for(i = 0; i < 20; i ++) 
            randomList = randomList + wordlist[Math.floor(Math.random() * wordlist.length)] + " ";

      data.textContent = randomList;
    })


  
    checkTxt.addEventListener('click', async () => {
        checkWordMatch();
    });

    function checkWordMatch() {
        if (txtInput.value == randomList.slice(0, -1)) {
            matchLbl.innerText = "Text matches!";
            matchLbl.style.color = "green";
            return;
        } else {
            matchLbl.innerText = "Text is wrong!";
            matchLbl.style.color = "red";
            return;
        }
    }

});
