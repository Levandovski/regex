const { name, RG, CPF } = require('./users');

console.log(name)

const regExp1 = /(João )(da|de)( Silva|Oliveira)/gi;

console.log(regExp1.exec(name));

//Formated CPF

const regexCPF = /^([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})/gi;
const regexCPFFormatedMasc = "$1-$2-$3-$4";
const regexCPFFormatedMascCrypt = "***-***-$3-$4";

if (CPF.match(regexCPF) !== null) {
    console.log(CPF.replace(regexCPF, regexCPFFormatedMascCrypt));
    console.log(CPF.replace(regexCPF, regexCPFFormatedMasc));
} else {
    console.log("CPF Inválido!");
}

//Formated RG

const regexRG = /^([0-9]{2})([0-9]{3})([0-9]{3})([0-9]|[x]{1})/gi;
const regexRGFormated = "$1.$2.$3-$4";


if (RG.match(regexRG) !== null) {
    console.log(RG.replace(regexRG, regexRGFormated));
} else {
    console.log("RG Inválido");
}





