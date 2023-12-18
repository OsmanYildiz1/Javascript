// dict, json yapısı gibi

let userA = {
  name: "Sadık", // anahtar kullanarak object olusturma
  last: "Turan",
  yas: "38",
  adres: {
    sehir: "kocaeli",
    ilce: "izmit",
  },
  hobiler: ["sinema", "spor"], // objeler dizi olarakta tanımlanabilir.
};
let userB = {
  name: "Osman", // anahtar kullanarak object olusturma
  last: "Yıldız",
  yas: "25",
  adres: {
    sehir: "istanbul",
    ilce: "bağcılar",
  },
  hobiler: ["sinema", "spor"], // objects dizi olarakta tanımlanabilir.
};

let sonuc;
sonuc = userA.name;
sonuc = userA.last;
sonuc = userA["yas"];
sonuc = userA.adres.sehir;
sonuc = userA.adres.ilce;
sonuc = userA.hobiler[0];
sonuc = userA.hobiler[1];

let users = [userA, userB]; // dizilerin içinde objectleride kullanabiliriz.
sonuc = users[1].name;

let urunler = [
  { urun_adi: "samsung s22", urun_fiyat: "13000" },
  { urun_adi: "samsung s23", urun_fiyat: "15000" },
];
sonuc = urunler[0].urun_adi;
console.log(sonuc);
