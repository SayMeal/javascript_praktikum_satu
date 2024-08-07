const panjang = 20.5
const lebar = 30
const harga = 1500000

let nominal = (panjang*lebar)*harga
nominal += nominal*15/100

console.log("Nominal yang harus dibayarkan Pak Arman adalah sebesar Rp "+Intl.NumberFormat().format(nominal))