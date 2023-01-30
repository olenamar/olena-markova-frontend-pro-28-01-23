const form = document.forms[0];
const nameImput = document.getElementsByClassName('nameImput')[0];
const surnameImput = document.getElementsByClassName('surnameImput')[0];
const dateImput = document.getElementsByClassName('dateImput')[0];
const sexRadio = document.getElementsByClassName('radio')[0]
const citySelect = document.querySelector('.selectCity');
const textAddress = document.querySelector('.areaAddress')
const lang = document.getElementsByClassName('checkLang')[0]
const langCheck = document.getElementsByClassName('checkLang')
const button = document.getElementsByTagName('button')[0];

function getForm(event) {
    event.preventDefault();
    document.getElementsByTagName('form')[0].hidden = true;
   
    const formTable = document.createElement('table');
    const container = document.createElement('div');
    document.body.append(container); 
    container.append(formTable);

    for (i = 0; i < 7; i++){
        let rowForm;
        let cellForm;  
        rowForm = formTable.insertRow(i);
        for (j = 0; j < 2; j++){
            cellForm = rowForm.insertCell(j);
        }
    }

    const cellZero = document.getElementsByTagName('td')[0];
    cellZero.innerText = nameImput.getAttribute('name');
    const cellOne = document.getElementsByTagName('td')[1];
    cellOne.innerText = nameImput.value;
    const cellTwo = document.getElementsByTagName('td')[2];
    cellTwo.innerText = surnameImput.getAttribute('name');
    const cellThree = document.getElementsByTagName('td')[3];
    cellThree.innerText = surnameImput.value;
    const cellFour = document.getElementsByTagName('td')[4];
    cellFour.innerText = dateImput.getAttribute('name');
    const cellFive = document.getElementsByTagName('td')[5];
    cellFive.innerText = dateImput.value;
    const ceellSix = document.getElementsByTagName('td')[6];
    ceellSix.innerText = sexRadio.getAttribute('name');
    const sellSeven = document.getElementsByTagName('td')[7];
    sellSeven.innerText = document.forms[0].Sex.value;
    const sellEight = document.getElementsByTagName('td')[8];
    sellEight.innerText = citySelect.getAttribute('name');
    const sellNine = document.getElementsByTagName('td')[9];
    if (citySelect.value.includes('selectCity')){
        sellNine.innerText = '';
    } else {
        sellNine.innerText = citySelect.value;
    }
    const sellTen = document.getElementsByTagName('td')[10]
    sellTen.innerText = textAddress.getAttribute('name');
    const sellEleven = document.getElementsByTagName('td')[11]
    sellEleven.innerText = textAddress.value;
    const selected = [];
    for (const box of langCheck) {
        if (box.checked === true) {
            selected.push(box.value);
        }
    }
    const sellTwelve = document.getElementsByTagName('td')[12]
    sellTwelve.innerText = lang.getAttribute('name');
    const sellThirteen = document.getElementsByTagName('td')[13]
    sellThirteen.innerText = selected;
}

form.addEventListener('submit', getForm)