
function cifraOrBase64(){
    var selectOption = document.getElementById('chooseCifraOr64')
    var key = document.getElementById('incremento')
    if (selectOption.value = cifra1) {
    key.style.display = 'flex';
    key.innetHTM(`<label id=chaveCodificadora>Incremento</label>
                  <input id=incrementoID> Incremento: </input>`)
   }    
}

function mudarCodOuDecod() {
    var botaoCodDecod = document.getElementById('codifica-ou-decod')
}

var cifraDeCesar ={
        'alphabet': ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
        'textoUsuário': document.getElementById('incremento').map(Number),
        'codLetraCharCode': charcode(textoUsuário).map(Number),

        "codificar": function(){
            convert = (codLetraCharCode - 65 - textoUsuário) %26; 
            inputResultConv = document.getElementById('resultado-input');
            inputResultConv.value = inputResultConv.value + String.fromCharCode(convert);
        },
        'decodificar': function(){
            deconvert = (codLetraCharCode - 65 + textoUsuário)%26;
            inputResultConv = document.getElementById('resultado-input');
            inputResultConv.value = inputResultConv.value + String.fromCharCode(convert);
        },

        'selected': document.getElementById('chooseCifraOr64'),
        'options': selected.options[selected.selectedIndex],
        "cod-ou-decod": function(){
            if (options.text == 'Codificar'){
                function codificar();
            } else if (options.text == 'Decodificar'){
                function decodificar();
            }

        },
}

var cifraOrBase64 ={
    'textoUsuário': document.getElementById('texto')

}

//var createLabel = document.createElement('label');
        //createLabel.innerText = "Chave da Cifra";
        //createLabet.innetHTM
    
//var isChecked = document.getElementById("cesar").checked