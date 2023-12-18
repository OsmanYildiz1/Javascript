// Kendisine gönderilen kelimeyi belirtilen sayıda ekrana yazan fonksiyonu yazın.
function kelimeyiYaz(kelime, tekrar) {
  for (let i = 1; i <= tekrar; i++) {
    console.log(kelime);
  }
}
kelimeyiYaz("selam", 5);

// Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazın.
function dikDortgen(kisa, uzun) {
  let alan = kisa * uzun;
  let cevre = 2 * kisa + 2 * uzun;
  return `alan: ${alan} çevre: ${cevre}`;
}
console.log(dikDortgen(3, 5));

// Yazı tura uygulamasını fonksiyon kullanarak yapınız.
function yaziTura() {
  let sayi = Math.random();
  if (sayi > 0.5) {
    console.log("Yazı");
  } else {
    console.log("Tura");
  }
}
yaziTura();

// Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyon
function tamBolenler(sayi) {
  let sayilar = [];
  for (let i = 2; i < sayi; i++) {
    if (sayi % i == 0) {
      sayilar.push(i);
    }
  }

  return sayilar;
}
console.log(tamBolenler(35));
console.log(tamBolenler(15));

// Değişken sayıda parametre alan toplam isminde bir fonksiyon
function toplam() {
  //   console.log(arguments); // key sistemiyle parametre kullanmadan değer tutmayı sağlar.
  let sonuc = 0;
  for (let i = 0; i < arguments.length; i++) {
    // girilen parametre sayısı kadar döngünün dönmesini sağladık.
    sonuc += arguments[i];
  }
  return sonuc;
}
console.log(toplam(2, 5));
console.log(toplam(2, 5, 100, 140));
console.log(toplam(2, 5, 889451));
