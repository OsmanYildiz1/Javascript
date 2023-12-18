function selamlama(msg) {
  console.log(msg);
}
selamlama(1);
selamlama(12);
selamlama(13);
selamlama("selam");

function yasHesapla(dogumYili) {
  return new Date().getFullYear() - dogumYili;
}
let yasAhmet = yasHesapla(1985);
let yasAyse = yasHesapla(1987);

console.log(yasAhmet, yasAyse);

function emekliligeKacYilKaldi(dogumYili, isim) {
  let yas = yasHesapla(dogumYili);
  let kalan_sene = 65 - yas;
  if (kalan_sene > 0) {
    console.log(`${isim} emekli olmanıza ${kalan_sene} yıl kaldı`);
  } else {
    console.log("Zaten emekli oldunuz.");
  }
}

emekliligeKacYilKaldi(1998, "Osman");
emekliligeKacYilKaldi(1950, "Ayse");
