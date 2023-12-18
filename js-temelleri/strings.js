let ad = "Osman";
let soyad = "Yıldız";
let yas = 45;
let sehir = "İstanbul";
// ternary operators
let emeklilik =
  65 - yas > 0
    ? "Emekliliğe " + (65 - yas) + " yıl kaldı."
    : "Zaten emekli oldunuz.";
let mesaj;

// backtick = ``
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'da yaşıyorum. ${emeklilik} `;

console.log(mesaj);
