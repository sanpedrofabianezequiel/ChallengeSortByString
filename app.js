// Un grupo de científicos está analizando una forma de vida inteligente extraterrestre en la reconocida área 52. Han descubierto que,
// sorprendentemente, estos usan las mismas letras que nosotros (26 letras, excluyendo la ñ) aunque su alfabeto posee un orden distinto.
// Se nos encomienda la tarea de reordenar un diccionario en español para que los extraterrestres puedan buscar palabras en nuestra 
// lengua más fácilmente. Diseñar un algoritmo que dada un string que representa todas las letras del alfabeto ordenadas según los e
// xtraterrestres y una lista de palabras, devuelva una lista de palabras ordenadas (en el orden que entiendan los extraterrestres)

// Ejemplo (en python):
// # lista = ['miel', 'extraterrestre', 'al', 'automovil', 'auto', 'revestir']
// # alfabeto = 'zyxwvutsrqponmlkjihgfedcba'

// def ordenar_extraterrestre(desordenadas, orden_alfabeto):
//     # ordenada = ['revestir', 'miel', 'extraterrestre', 'auto', 'automovil', 'al']
//     return ordenada
const lista = ['miel', 'extraterrestre', 'al', 'automovil', 'auto', 'revestir']
const condition = 'zyxwvutsrqponmlkjihgfedcba'

function mergeSort(arr,condition) {
    if (arr.length < 2) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(mergeSort(left,condition), mergeSort(right,condition),condition);
}

function merge(left, right,condition) {
    const results = [];
    console.log("left+right",left,right)
    while (left.length && right.length) {
        if (sortBy(left[0],right[0],condition)) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    return [...results, ...left, ...right];
}

console.log(mergeSort(lista,condition));
//console.log(sortBy(lista,alfabeto));

function sortBy(arrLeft,arrRight,condition) {
    if(condition===undefined)return;
    const split = condition.split('');
    if( split.indexOf(arrLeft[0]) === split.indexOf(arrRight[0]) ){
       return sortBy(arrLeft.slice(1),arrRight.slice(1),condition);
    }
    else if(  split.indexOf(arrLeft[0]) < split.indexOf(arrRight[0]) ){
        return true;
    }else  if(split.indexOf(arrLeft[0]) > split.indexOf(arrRight[0]) ){
        return false;
    }
}

   