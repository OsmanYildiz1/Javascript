var ogrenci_1Ad = "Ada";
let ogrenci_1Soyad = "Bilgi";
let ogr1_dt = "2012";
let ogr1_mat1 = 70;
let ogr1_mat2 = 70;
let ogr1_mat3 = 80;
let ogr1_ort = (ogr1_mat1 + ogr1_mat2 + ogr1_mat3) / 3;
console.log(parseFloat(ogr1_ort));
console.log(typeof ogr1_ort);
console.log(ogr1_ort >= 50);

var ogrenci_2Ad = "Yigit";
let ogrenci2_Soyad = "Bilgi";
let ogr2_dt = "2010";
let ogr2_mat1 = 40;
let ogr2_mat2 = 40;
let ogr2_mat3 = 50;
let ogr2_ort = (ogr2_mat1 + ogr2_mat2 + ogr2_mat3) / 3;
console.log(parseFloat(ogr2_ort));
console.log(typeof ogr2_ort);
console.log(ogr2_ort >= 50);

let suankiYil = new Date().getFullYear(); // su anki yıl bilgisi
let ogr1_yas = suankiYil - parseInt(ogr1_dt);
let ogr2_yas = suankiYil - parseInt(ogr2_dt);
console.log(ogr1_yas);
console.log(ogr2_yas);
