let suku_pertama = 4
let ratio = 3

let jumlah = 0

for (let i = 1; i <= 10; i++) {
    let deret = suku_pertama*(1 - ratio**i)/(1-ratio)
    console.log("Nilai deret geometri ke-"+i+" adalah "+deret)
    jumlah += deret
}

console.log("Jumlah total 10 deret geometri pertama adalah "+jumlah)