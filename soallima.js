class Lingkaran{
    constructor(j){
        this.jari_jari = j
    }

    luas = () => {
        return Math.PI * (this.jari_jari**2)
    }

    keliling = () => {
        return 2 * Math.PI * this.jari_jari
    }
}

class Tabung extends Lingkaran{
    constructor(j, t){
        super(j)
        this.tinggi = t
    }
    
    volume = () => {
        return Math.PI * (this.jari_jari**2) * this.tinggi
    }

    luasPermukaan = () => {
        return 2 * Math.PI * this.jari_jari* this.tinggi + 2 * Math.PI * this.jari_jari**2
    }

    luasSelimut = () => {
        return 2 * Math.PI * this.jari_jari * this.tinggi
    }
}

class Kerucut extends Lingkaran{
    constructor(j, t){
        super(j)
        this.tinggi = t
    }
    
    volume = () => {
        return 1/3 * Math.PI * this.jari_jari**2 * this.tinggi
    }

    luasPermukaan = () => {
        return (Math.PI * this.jari_jari * Math.sqrt(this.jari_jari**2+this.tinggi**2)) + (Math.PI * this.jari_jari**2)
    }

    luasSelimut = () => {
        return Math.PI * this.jari_jari * Math.sqrt(this.jari_jari**2+this.tinggi**2)
    }
}

class Bola extends Lingkaran{
    constructor(j){
        super(j)
    }

    volume = () => {
        return 4/3 * Math.PI * this.jari_jari**3
    }

    luasPermukaan = () => {
        return 4 * (Math.PI*this.jari_jari**2)
    }
}

let bolaSepak = new Bola(15)
let topiZombie = new Kerucut(10, 40)
let gelas = new Tabung(15/2, 50)

console.log("\n")

console.log("----------BOLA SEPAK----------")
console.log("Volume Bola Sepak Adalah: "+bolaSepak.volume().toFixed(2)+" cm\u{00B3}")
console.log("Luas Permukaan Bola Sepak Adalah: "+bolaSepak.luasPermukaan().toFixed(2)+" cm\u{00B2}")
console.log("------------------------------\n")

console.log("----------TOPI ZOMBIE----------")
console.log("Volume Topi Zombie Adalah: "+topiZombie.volume().toFixed(2)+" cm\u{00B3}")
console.log("Luas Permukaan Topi Zombie Adalah: "+topiZombie.luasPermukaan().toFixed(2)+" cm\u{00B2}")
console.log("Luas Selimut Topi Zombie Adalah: "+topiZombie.luasSelimut().toFixed(2)+" cm\u{00B2}")
console.log("-------------------------------\n")

console.log("----------GELAS----------")
console.log("Volume Gelas Adalah: "+gelas.volume().toFixed(2)+" cm\u{00B3}")
console.log("Luas Permukaan Gelas Adalah: "+gelas.luasPermukaan().toFixed(2)+" cm\u{00B2}")
console.log("Luas Selimut Gelas Adalah: "+gelas.luasSelimut().toFixed(2)+" cm\u{00B2}")
console.log("-------------------------\n")