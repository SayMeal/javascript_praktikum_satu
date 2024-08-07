let barang = [
    { nama: "Beras", harga: 10000, jumlah: 5 },
    { nama: "Gula", harga: 14000, jumlah: 5 },
    { nama: "Telur", harga: 20000, jumlah: 2 },
    { nama: "Minyak Goreng", harga: 9000, jumlah: 10 }
]

let total = 0

for (let i = 0; i < barang.length; i++) {
    let totalB = barang[i].harga*barang[i].jumlah
    total += totalB
    console.log("Pembelian "+barang[i].nama+" seharga Rp "+Intl.NumberFormat().format(barang[i].harga)+" dengan jumlah "+barang[i].jumlah + "\nTotal pembayaran untuk pembelian "+ barang[i].nama + " adalah Rp "+Intl.NumberFormat().format(totalB) + "\n")
}

console.log("Total pembelian Bu Astuti sejumlah Rp "+Intl.NumberFormat().format(total))