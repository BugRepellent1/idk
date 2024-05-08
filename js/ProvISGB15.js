'use strict'

let oGlobalObject = {
    timerId: 0,
    h2Ref: document.querySelector('h2'),
};

// HH:MM:SS
function getFormatedTimeOfDay(){
    let oDataTime = new Date();
    return oDataTime.toLocaleTimeString();
}

function buttonDisableOrEnable(){
    let startButton = document.querySelector('#startClock');
    let endButton = document.querySelector('#endClock');

    if(endButton.hasAttribute('disabled')){
        endButton.removeAttribute('disabled');
        startButton.setAttribute('disabled', 'disabled');
    }else{
        endButton.setAttribute('disabled', 'disabled');
        startButton.removeAttribute('disabled');
    }
}