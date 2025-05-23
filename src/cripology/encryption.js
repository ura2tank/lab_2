let alfabetArrayLower = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let alfabetArrayUpper = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var arrOperation = []
function stringToArray(str) {
    let tempArr = [];
    for (let i = 0; i < str.length; i++) {
        tempArr.push(str[i]);
    }
    return tempArr;
}

function replaceLatter(latter, stringArray, indexString){

    alfabetArrayLower.forEach(function(alfabetItem, lowerIndexString){
        let offset = (26+13+lowerIndexString)%26;
        if (latter == alfabetItem){
            stringArray[indexString] = alfabetArrayLower[offset];
            // arrOperation.push(stringArray[indexString]+"->"+alfabetArrayLower[offset]);
            // arrOperation.push("a");
            // console.log(arrOperation);
            return true;
        }
    });
    alfabetArrayUpper.forEach(function(alfabetItem, UpperIndexString){
        let offset = (26+13+UpperIndexString)%26;
        if (latter == alfabetItem){
            stringArray[indexString] = alfabetArrayUpper[offset];
            // arrOperation.push(stringArray[indexString]+"->"+alfabetArrayUpper[offset]);
            return true;
        }
    });
    return false;   
}

function encryption(stringArray) {
    stringArray.forEach(function(stringItem, indexString) {
        if (replaceLatter(stringItem, stringArray, indexString)){
            pass;
        }
        else{
            stringArray[indexString] = stringArray[indexString];
            // arrOperation.push(stringArray[indexString]+"->"+stringArray[indexString]);
        }        
    });
    return stringArray;
}

function encryptText(str) {
    let stringArray = encryption(stringToArray(str));
    let result = "";
    stringArray.forEach(function(latter){
        result = result+latter;
    });
    return result;
}
window.encryptText = encryptText;

(function(){
    if (document.getElementById('encrypt-autoinput')) return;
    let container = document.createElement('div');
    container.className = 'encrypt-container';

    let inputOutputWrapper = document.createElement('div');
    inputOutputWrapper.className = 'input-output-wrapper';

    let textarea = document.createElement('textarea');
    textarea.id = 'encrypt-autoinput';
    textarea.rows = 5;
    textarea.placeholder = 'Введите текст для шифрования';

    let output = document.createElement('div');
    output.id = 'encrypt-autooutput';
    output.className = 'encrypt-output';

    output.appendChild(document.createElement('p'))

    textarea.onkeyup = function() {
        output.children[0].textContent = window.encryptText(textarea.value);
        // Автоматическое растягивание textarea по высоте
        textarea.style.height = 'auto'; // Сброс высоты для корректного измерения
        textarea.style.height = (textarea.scrollHeight) + 'px'; // Установка высоты по содержимому
    };

    inputOutputWrapper.appendChild(textarea);
    inputOutputWrapper.appendChild(output);

    container.appendChild(inputOutputWrapper);

    document.getElementById('display').appendChild(container);
})();