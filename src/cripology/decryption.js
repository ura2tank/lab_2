let DalfabetArrayLower = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let DalfabetArrayUpper = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  
function stringToArray(str) {
    let tempArr = [];
    for (let i = 0; i < str.length; i++) {
        tempArr.push(str[i]);
    }
    return tempArr;
}
  
function replaceLatter(latter, stringArray, indexString){

    DalfabetArrayLower.forEach(function(alfabetItem, lowerIndexString){
        let offset = (26-13+lowerIndexString)%26;
        if (latter == alfabetItem){
            stringArray[indexString] = DalfabetArrayLower[offset];
            return true;
        }
    });
    DalfabetArrayUpper.forEach(function(alfabetItem, UpperIndexString){
        let offset = (26-13+UpperIndexString)%26;
        if (latter == alfabetItem){
            stringArray[indexString] = DalfabetArrayUpper[offset];
            return true;
        }
    });
    return false;

}
  
function encryption(stringArray,) {
    stringArray.forEach(function(stringItem, indexString) {
        if (replaceLatter(stringItem, stringArray, indexString)){
            pass;
        }
        else{
            stringArray[indexString] = stringArray[indexString];
        }        
    });
    return stringArray;
}

function decryptText(str) {
    let stringArray = encryption(stringToArray(str));
    let result = "";
    stringArray.forEach(function(latter){
        result = result+latter;
    });
    return result;
}
window.decryptText = decryptText;

(function(){

    if (document.getElementById('decrypt-autoinput')) return;
    let container = document.createElement('div');
    container.className = 'decrypt-container';

    let inputOutputWrapper = document.createElement('div');
    inputOutputWrapper.className = 'input-output-wrapper';

    let textarea = document.createElement('textarea');
    textarea.id = 'decrypt-autoinput';
    textarea.rows = 5;
    textarea.placeholder = 'Введите текст для расшифровки';

    let output = document.createElement('div');
    output.id = 'decrypt-autooutput';
    output.className = 'decrypt-output';

    output.appendChild(document.createElement('p'))

    textarea.onkeyup = function() {
        output.children[0].textContent = window.decryptText(textarea.value);
        textarea.style.height = 'auto';
        textarea.style.height = (textarea.scrollHeight) + 'px';
    };

    inputOutputWrapper.appendChild(textarea);
    inputOutputWrapper.appendChild(output);

    container.appendChild(inputOutputWrapper);

    document.getElementById('display').appendChild(container);
})();