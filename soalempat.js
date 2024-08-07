let suku_pertama = 4
let ratio = 3

let jumlah = 0

for (let n = 1; n <= 10; n++) {
    let deret = suku_pertama * Math.pow(ratio, (n-1))
    console.log("Nilai deret geometri ke-"+n+" adalah "+deret)
    jumlah += deret
}

console.log("Jumlah total 10 deret geometri pertama adalah "+jumlah)
