/**
 * SOAL NO. 1
 */


/**
 * Lengkapi function berikut yang bertugas untuk menggabungkan elemen-element pada array yang diterima sebagai parameter
 * menjadi suatu kalimat.
 */


// function formASentence(array) {
//   let str = array.join(" ")
//   return str
// }

// function formASentence(array) {
//   let temp = ""

//   for (let i = 0; i < array.length; i++) {
//     temp += array[i] + ' '
//   }
//   return temp;
// }



// console.log(formASentence(['Aku', 'mau', 'pergi', 'ke', 'sekolah'])) // expected output: "Aku mau pergi ke sekolah"
// console.log(formASentence(['I', 'love', 'coding'])) // expected output: "I love coding"
// console.log(formASentence(['Aku', 'sedang', 'belajar', 'BE', 'Javascript'])) // expected output: "Aku sedang belajar BE Javascript"


/**
 * SOAL NO. 2
 */


/**
 * Lengkapi function untuk membalik kata yang dimasukkan sebagai parameter
 */

// function reverseString(str) {
//   let temp = str.split('')
//   let result = temp.reverse().join('')
//   return result;
// }

// console.log(reverseString('Javascript')) // expected output: "tpircsavaJ"
// console.log(reverseString('Binar Academy')) // expected output: "ymedacA raniB"
// console.log(reverseString('Botol aqua')) // expected output: "auqa lotoB"


/**
 * SOAL NO. 3
 */


/**
 * Lengkapi function berikut untuk menghitung jumlah kata yang ada di dalam suatu kalimat
 */

function countWords(str) {
  // split => string menjadi array
  // proprty length => panjang array
  // [''] => 1
  // falsy => '', 0, undefined, null, dsb
  if (!str) {
    return 0
  }
  let temp = str.split(' ').length
  return temp
}

// console.log(countWords('I love coding')) // expected output: 3
// console.log(countWords('Saya ada seorang Binarian')) // expected output: 4
// console.log(countWords('Saya')) // expected output: 1
// console.log(countWords('')) // expected output: 0


// /**
//  * SOAL NO. 4
//  */


// /**
//  * Lengkapi function untuk mengubah menit menjadi detik
//  */
function converseMinute(str) {
  // input string: 'MM:SS'
  // (M * 60) + S
  let minute = str.split(':')[0]
  let seconds = str.split(':')[1]
  let result = (+minute * 60) + Number(seconds) 
  return result
  // mengubah string menjadi number => + (unary operator), Number()
}

// console.log(converseMinute('01:12')) // expected output: 72
// console.log(converseMinute('10:30')) // expected output: 630
// console.log(converseMinute('07:45')) // expected output: 465


// /**
//  * SOAL NO. 5
//  */

// /**
//  * Lengkapi function berikut untuk menghilangkan semua elemen dalam array yang berupa string
//  */

function removeAllString(arr) {
  // method filter => menghilangkan elemen-elemen yang tidak kita inginkan

  // let result = arr.filter((element) => typeof element !== 'string')
  // return result;

  // cara 2 => foreach
  let temp = []
  arr.forEach(e => {
    if (typeof e !== 'string') {
      temp.push(e)
    }
  })
  return temp;
}

// console.log(removeAllString([undefined, "coding", 1, ["love", 3], null, false])) // expected output: [undefined, 1, ["love", 3], null, false]
// console.log(removeAllString(["mangkok"])) // expected output: []
// console.log(removeAllString([1, true, null])) // expected output: [1, true, null]


/**
 * SOAL NO. 6
 */

/**
 * Implementasikan function graduates untuk mendapatkan daftar student yang lulus dengan aturan:
 * - Student dapat dinyatakan lulus apabila score lebih besar dari 75.
 * - Masukkan name dan score dari student ke class yang dia ikuti.
 * - Student yang tidak lulus tidak perlu ditampilkan.
 * Output yang diharapkan berupa Object Literal dengan format sebagai berikut:
 * <class>: [
 *    { name: <name>, score: <score> },
 *    ...
 *    ],
 * <class>: [
 *    { name: <name>, score: <score> },
 *    ...
 *    ],
 * <class>: [] //NOTE: Jika tidak ada student yang lulus, class ini akan diisi oleh array kosong
 * }
 */

 function graduates (students) {
    // list semua student yg nilainya di atas 75
    const passedStudents = students.filter((e) => e.score >= 75)
    // Object {key: value}, key nya dalah class, valuenya adalah array of students dari class
    // kalau diliat dari input: tigers, wolves, sama foxes
    let result = {}

    // ngecek satu-satu studentnya
    // classnya => kalau classnya belum dibuat di result, maka gw akan nambahin classnya di result dan nambah studentnya
    // kalau udah dibikin di result, maka gw tinggal nambah studentnya

    passedStudents.forEach((element) => {
      if (result[element.class]) {
        result[element.class].push({name: element.name, score: element.score})
      } else {
        result[element.class] = [{name: element.name, score: element.score}]
      }
    })

    return result
 }

// console.log(graduates([
//   {
//     name: 'Dimitri',
//     score: 90,
//     class: 'foxes'
//   },
//   {
//     name: 'Alexei',
//     score: 85,
//     class: 'wolves'
//   },
//   {
//     name: 'Sergei',
//     score: 74,
//     class: 'foxes'
//   },
//   {
//     name: 'Anastasia',
//     score: 78,
//     class: 'wolves'
//   }
// ]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

// console.log(graduates([
//   {
//     name: 'Alexander',
//     score: 100,
//     class: 'foxes'
//   },
//   {
//     name: 'Alisa',
//     score: 76,
//     class: 'wolves'
//   },
//   {
//     name: 'Vladimir',
//     score: 92,
//     class: 'foxes'
//   },
//   {
//     name: 'Albert',
//     score: 71,
//     class: 'wolves'
//   },
//   {
//     name: 'Viktor',
//     score: 80,
//     class: 'tigers'
//   }
// ]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


// console.log(graduates([])); //{}


// SOAL NO. 7

/**
 * Lengkapi function untuk mengubah elemen-elemen dalam array yang memiliki tipe data number menjadi tipe data string
 */


function transfromToString(arr) {
  return arr.map((element) => typeof element === 'number' ? element.toString() : element)

  // return arr.map((element) => {
  //   if (typeof element === 'number') {
  //     return element.toString()
  //   } else {
  //     return element
  //   }
  // })
}

// console.log(transfromToString([true, 1, 9])) // expected output: [true, "1", "9"]
// console.log(transfromToString([undefined, 9, "erase"])) // expected output: [undefined, "9", "erase"]
// console.log(transfromToString([])) // expected output: []


// SOAL NO. 8

/**
 * Lengkapi function berikut untuk menghitung elemen-elemen pada array
 */


function countMe(arr) {
  let temp = {}
  let count;

  arr.sort()
  arr.forEach(element => {
    if (!(element in temp)) {
      count = 1
      temp[element] = count
    } else {
      count += 1
      temp[element] = count
    }
  })
  return temp
}

// console.log(countMe(['Sofi', 'Riko', 'Sofi', 'Sam', 'Sam', 'Lila']));
// { Sofi: 2, Riko: 1, Sam: 2, Lila: 1 }

// console.log(countMe([ 1, 15, 9, 10, 8, 1, 12, 15, 10, 3 ]));
// { '1': 2, '3': 1, '8': 1, '9': 1, '10': 2, '12': 1, '15': 2 }


// SOAL NO. 9

/**
 * Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui 
 * berapa kali angka tersebut muncul di dalam arrNumber.
 * Dilarang mengubah mengubah 2 lines di dalam function mostFrequentLargestNumbers yaitu lines:
 * let listSort = sorting(arrNumber)
 * let countHighest = getTotal(listSort)
 */
// function sorting(arrNumber) {
//   // code di sini
//   // boleh menggunakan built-in function sorting
//   // return array

//   // sorting ascending => naik
//   // sorting descending => turun
//   return arrNumber.sort((a, b) => b - a) // w3school
//   // mau mendapat angka paling besar => di index 0
//   // mendapat jumlahnya
// }

// function getTotal(arrNumber) {
//   // code di sini
//   let count = 0
//   let largestNumber = arrNumber[0] // karena udah di sorting

//   arrNumber.forEach((element) => {
//     if (element === largestNumber) {
//       count += 1
//     }
//   })

//   if (arrNumber.length === 0) {
//     return ''
//   }
//   return `angka paling besar adalah ${largestNumber} dan jumlah kemunculan sebanyak ${count} kali`
// }

// function mostFrequentLargestNumbers(arrNumber) {
//   var listSort = sorting(arrNumber);
//   var countHighest = getTotal(listSort);
//   return countHighest;
// }

// console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
// //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

// console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
// //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

// console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
// //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

// console.log(mostFrequentLargestNumbers([]));
// //''


// /**
//  * SOAL NO. 10
//  */

// /**
//  * Diberikan sebuah function changeMe yang menerima satu parameter berupa array multidimensi
//  * dimana array tersebut berisi value (pasti berurut dari kiri ke kanan) First Name, Last Name, Gender dan Birth Year.
//  * Fungsi ini akan menampilkan object literal yang memiliki property firstName, lastName, gender dan age.
//  * Nilai age didapatkan dari tahun sekarang dikurang tahun lahir. Jika tahun lahir tidak diisi atau tahun lahir lebih besar
//  * dibandingkan tahun sekarang maka age akan berisi Invalid Birth Year.
//  * Contoh jika arr inputan adalah [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]] dan tahun sekarang = 2020, maka output:
//  * Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 24 }
//  * John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 19 }
//  */

function changeMe(arr) {
 arr.forEach((element, index) => {
   let age;
   if (element[3]) {
     age = 2022 - element[3]
   } else {
     age = 'Invalid birth year'
   }
    console.log(`${index+1}. ${element[0]} ${element[1]}`)
    console.log({
      firstName: element[0],
      lastName: element[1],
      gender: element[2],
      age: age
    })
 })
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 38 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
