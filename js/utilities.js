
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);

    inputField.value = '';
    return inputFieldValue;
}

function getElementValueById(elementValue){
    const element = document.getElementById(elementValue);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString);
    return value;
}

function setTextElementById(elementId, newValue){
    const newElementId = document.getElementById(elementId);
    newElementId.innerText = newValue;
}
