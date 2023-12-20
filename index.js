// 1. Mencari keliling perssegi panjang
// Memasukkan nilai panjang dan lebar
// Menghitung rumus : 2*P + 2*L
// Menampilkan hasil

let panjang = 150;
let lebar = 40;

// Menghitung rumus
let hasil1 = 2 * panjang + 2 * lebar;

// Menampilkan hasil
console.log("keliling persegi panjang adalah " + hasil1)

// 2. Luas lingkaran
// rumus phi * r *

let phi = 3.14;
let r = 10;

// Menghitung rumus
let hasil2 = phi * r * r;


// Menampilkan hasil
console.log("Luas lingkaran adalah " + hasil2)

// 3. Keliling persegi

let lp = 64;
let sisi = Math.sqrt(lp)


// Menghitung rumus
let hasilnya = 4 * sisi;

// Menampilkan hasil
console.log("Keliling persegi adalah " + hasilnya)

// Syarat membuat KTP
// Input
let umur = 18;

// Proses
if(umur >= 17){
    result = "Bisa Membuat KTP"
} else {
    result = "Pulang aja dek !!!"
}

// Output
console.log(result)

let PABP = 86;
let MTK = 52;
let DPK = 77;
let rata2 = (PABP + MTK + DPK) / 3;

if (rata2 >= 80 && rata2 <= 100) {
  grade = "A";
} 
else if (rata2 >= 75 && rata2 <= 80) {
  grade = "B";
} 
else if (rata2 >= 65 && rata2 <= 75) {
  grade = "C";
} 
else if (rata2 >= 45 && rata2 <= 65) {
  grade = "D";
} 
else if (rata2 >= 0 && rata2 <= 45) {
  grade = "E";
} 
else {
  grade = "K";
}

console.log("Nilai Rata-Rata adalah " + rata2)
console.log("Maka ditetapkan di kelas " + grade)