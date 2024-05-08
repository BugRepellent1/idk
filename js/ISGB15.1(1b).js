'use strict'

let oGlobalObjekt = {

    calculateNbrOfPoints: function(ulRef) {
        let assessment = ulRef.querySelector('li[data-passedI]').getAttribute('data-passedI');
        let writtenExam = ulRef.querySelector('li[data-passedT]').getAttribute('data-passedT');

        assessment = parseInt(assessment);
        writtenExam = parseInt(writtenExam);

        return(assessment+writtenExam);
    },

    getLiReference: function(ulRef){
        return ulRef.querySelector('li[data-id');
    },

    getUlElments: function(){
        return document.querySelectorAll('ul');
    },

    getNbrOfElements: function(ulRefs){
        return ulRefs.length;
    }
};

function init(){
    console.log(getLiReference, getUlElments, getNbrOfElements);
}