// 1.
// var numbers = [2, 4, 6, 8, 10];

// var product = numbers.reduce(function(a, b) 
// {
//     return a * b;
// }, 1); 

// console.log("Cavab:", product); 


// 2.
// let arr = [1, 2, 3, 4, 4, 5, 6, 6];
// let testArr = [...new Set(arr)];

// console.log(testArr); 

// 3.
// let array = [1, 'iki', 3, 'dord', 5];
// let result = [];

// for (let item of array) {
//     if (typeof item === 'number') {
//         result.push(item);
//     }
// }

// console.log(result); 


// 4.
// function reverseWord(word) {
//     let reversedWord = "";
//     for (let i = word.length - 1; i >= 0; i--) {
//         reversedWord += word[i];
//     }
//     return reversedWord;
// }


// let word = "Proqramlasdirma";
// let reversed = reverseWord(word);
// console.log(reversed); 


// 5.
// function tersineCevirCumle(cumle) {
//     return cumle.split(' ').reverse().join(' ');
// }

// let orijinalCumle = "Həm texniki, həm də fəlsəfi baxımdan kodlaşdırma ilə bağlı seviləcək çox şey var.";
// let tersineCumle = tersineCevirCumle(orijinalCumle);
// console.log(tersineCumle); 



// 6.
// function sayilar(number) {
//     const words = ['Sifir', 'Bir', 'İki', 'Uc', 'Dord', 'Bes', 'Alti', 'Yeddi', 'Sekkiz', 'Doqquz'];
//     return words[number];
// }

// let number = 9;
// let words = sayilar(number);
// console.log(words); 

// 7.
// function isInteger(number) {
//     return (number % 1 === 0);
// }
// console.log(isInteger(42));  
// console.log(isInteger(99.9)); 


// 8.
// function sayilanSozler(cumle) {
//     let count = 0;
//     let isWord = false;

//     for (let char of cumle) {
//         if (char === ' ') {
//             isWord = false;
//         } else {
//             if (!isWord) {
//                 count++;
//                 isWord = true;
//             }
//         }
//     }
//     return count;
// }
// let cumle = "Həm texniki, həm də fəlsəfi baxımdan kodlaşdırma ilə bağlı seviləcək çox şey var.";
// console.log(sayilanSozler(cumle)); 


// 11.
function masBeraber(array1, array2)
{
    if (array1.length !== array2.length) {
        return false;
    }
    return array1.every((element, index) => element === array2[index]);
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 2, 3, 4, 5];
console.log(masBeraber(array1, array2)); 

let array3 = [1, 2, 3, 4, 5];
let array4 = [1, 2, 3, 4, 6];
console.log(masBeraber(array3, array4)); 


