let ogr1 = ["Yigit", "Bilgi", 2010, [70, 60, 80]];
let ogr2 = ["Ada", "Bilgi", 2012, [80, 80, 90]];
let ogr3 = ["Ahmet", "Turan", 2009, [60, 60, 70]];
let ogrenciler = [ogr1, ogr2, ogr3];
let yas1 = new Date().getFullYear() - ogrenciler[0][2];
let yas2 = new Date().getFullYear() - ogrenciler[1][2];
let yas3 = new Date().getFullYear() - ogrenciler[2][2];

let not1 =
  (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3;
let not2 =
  (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3;
let not3 =
  (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3;
console.log(yas1, yas2, yas3);
console.log(not1.toFixed(1), not2.toFixed(1), not3.toFixed(1)); // to fixed: virgülden sonra kaç basamak alınsın.
