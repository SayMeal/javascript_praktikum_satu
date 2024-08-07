let tinggi_badan = 170
let berat_badan = 90

let BMI = (berat_badan/((tinggi_badan*tinggi_badan)/10000)).toFixed(2)
let status_berat_badan = ""

if (BMI < 18.5) {
    status_berat_badan = "Kekurangan berat badan"
} else if (BMI >= 18.5 & BMI <= 24.9) {
    status_berat_badan = "Normal(ideal)"
} else if (BMI >= 25.0 & BMI <= 29.9) {
    status_berat_badan = "Kelebihan berat badan"
} else {
    status_berat_badan = "Kegemukan(Obesitas)"
}

console.log("Tinggi badan Rhodey adalah "+tinggi_badan+"\nBerat badan Rhodey adalah "+berat_badan+"\nBMI Rhodey adalah "+BMI+"\n Rhodey "+status_berat_badan)