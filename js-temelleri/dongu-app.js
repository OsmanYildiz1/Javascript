let sayilar = [1, 5, 7, 15, 3, 25, 2, 4, 6];
// 1-) Sayılar listesindeki her elemanın karesini yazdırınız.

// for (let index = 0; index < sayilar.length; index++) {
//   console.log(sayilar[index] * sayilar[index]);
// }

// // alternatif çözüm
// for (let sayi of sayilar) {
//   console.log(sayi * sayi);
// }

// 2-) Sayılar listesindeki hangi sayılar 5'in katıdır?
// for (let sayi of sayilar) {
//   if (sayi % 5 == 0) {
//     let kat = sayi;
//     console.log(kat);
//   }
// }

// alternatif çözüm
// for (let index = 0; index < sayilar.length; index++) {
//   if (sayilar[index] % 5 == 0) {
//     console.log(sayilar[index]);
//   }
// }

// 3-) Sayilar listesindeki çift sayıların toplamını bulunuz.
// var toplam = 0;
// var cift;
// for (var sayi of sayilar) {
//   if (sayi % 2 == 0) {
//     cift = sayi;
//     console.log(cift);
//     toplam += cift;
//   }
// }
// console.log("Çift sayiların toplamı=" + toplam);

//alternatif çözüm
// let toplam = 0;
// for (let i in sayilar) {
//   if (sayilar[i] % 2 == 0) {
//     toplam += sayilar[i];
//   }
// }
// console.log(toplam);

let urunler = [
  "iphone 12",
  "samsung s22",
  "iphone 13",
  "samsung s23",
  "samsung s20",
];
// 4-) urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.
// for (let urun of urunler) {
//   console.log(urun.toUpperCase());
// }

// 5-) urunler listesinde samsung geçen kaç ürün vardır?
// let adet = 0;
// for (let urun of urunler) {
//   if (urun.includes("samsung")) {
//     // includes: urun dizisinde samsung var mı. true veya false döndürür.
//     adet++;
//   }
// }
// console.log(adet);

let ogrenciler = [
  { ad: "yigit", soyad: "bilgi", notlar: [60, 70, 60] },
  { ad: "ada", soyad: "bilgi", notlar: [80, 70, 80] },
  { ad: "çınar", soyad: "turan", notlar: [10, 40, 60] },
];

//6-)ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.
for (let ogrenci of ogrenciler) {
  let not_toplam = 0;
  let ortalama = 0;
  let adet = 0;
  for (let not of ogrenci.notlar) {
    not_toplam += not;
    adet++;
  }

  ortalama = not_toplam / adet;
  console.log(
    `${ogrenci.ad} ${ogrenci.soyad} isimli öğrencinin not ortalaması: ${ortalama}.`
  );

  if (ortalama >= 50) {
    console.log("başarılı");
  } else {
    console.log("başarısız");
  }
}
//7-) tüm öğrencilerin not ortalaması kaçtır.
let tort = 0;
let sınavadet = 0;
for (let x of ogrenciler) {
  for (let y of x.notlar) {
    tort += y;
    sınavadet++;
  }
}
console.log("Sınıf ortalaması:" + tort / sınavadet);
