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

// 1. Konversi Jam ke Detik
let Jam = 3; 
  
let Detik = Jam * 3600;

console.log(`${Detik} Detik`)

// 2. Konversi Jam ke Menit
let jam = 2;

let Menit = jam * 60;

console.log(`${Menit} Menit`)

// 3. Konversi KM ke M
let KM = 4;

let M = KM * 1000;

console.log(`${M} Meter`)

// 4. Konversi KG ke G
let KG = 15;

let G = KG * 1000;

console.log(`${G} Gram`)

// 5. Penjumlahan 2 Angka 
let Bil1 = 30;
let Bil2 = 25;

let Jumlah = Bil1 + Bil2;

console.log(`Jadi hasilnya adalah ${Jumlah}`)

// selection atau percabangan
// NO 1
let a = 1;
let b = 2;
let c = 3;
    
if (a>b && a>c) {
    console.log("bilangan satu paling besar")
} else if (b>a && b>c) {
    console.log("bilangan dua paling besar")
} else if (c>a && c>b) {
    console.log("bilangan tiga paling besar")
}

// NO 2
let angka = 0;

if (angka >= 0) {
    hasil1 = "Positif"
} else {
    hasil1 = "Negatif"
}

if (angka %2 == 0) {
    hasil2 = "Genap"
} else {
    hasil2 = "Ganjil"
}

console.log(`Hasilnya adalah bilangan ${hasil1} dan bilangan ${hasil2}`)

// NO 3
let saklar = 0;

if (saklar == 0) {
    akhir = "Lampu Mati"
} else if (saklar == 1) {
    akhir = "Lampu Menyala"
}

// NO 4
let barang1 = 45000;
let barang2 = 45000;
let barang3 = 15000;

let harga = barang1 + barang2 + barang3;
let diskon = 10/100 * harga;
let total = harga - diskon;

if (harga >= 100000) {
    console.log(`Total ${harga} karena pelanggan belanja lebih dari 100000 maka mendapat diskon 10% dan harus membayar ${total}`)
} else if (harga < 100000) {
    console.log(`Pelanggan tidak mendapat diskon dan harus membayar ${harga}`)
}

// NO 5
let lembur = 7;
let gaji1 = 100000;
let gaji2 = 200000;
let gaji3 = 300000;

if (lembur < 6) {
    console.log(`Gaji lembur yang didapat adalah ${gaji1}`)
} else if (lembur == 6) {
    console.log(`Gaji lembur yang didapat adalah ${gaji2}`)
} else {
    console.log(`Gaji lembur yang didapat adalah ${gaji3}`)
}

// NO 6 
let air = 650;
let status1 = "Aman";
let status2 = "Waspada";
let status3 = "Siaga 2";
let status4 = "Siaga 1";

if (air <= 500.0 ) {
    console.log(`Tinggi air ${air} Meter, Status ${status1}`)
} else if (air <= 600.0) {
    console.log(`Tinggi air ${air} Meter, Status ${status2}`)
} else if (air <= 650.0) {
    console.log(`Tinggi air ${air} Meter, Status ${status3}`)
} else if (air >=650.1) {
    console.log(`Tinggi air ${air} Meter, Status ${status4}`)
}