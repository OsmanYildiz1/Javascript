let sonuc;
sonuc = 10;
sonuc = "10";
sonuc = Number("10");
sonuc = parseFloat("10.6"); // parseint bilgisi tam sayı döndürür
sonuc = parseInt("a10a");
// NaN: not a number

sonuc = isNaN("10"); // isNaN kullanarak bir sayı mı değil mi öğrenebiliriz.

let sayi = 15.1565283312;

sonuc = sayi.toPrecision(5); // toPresicison: number fonksiyonudur. içine girilen sayı kadar basamağını alır.
console.log(sonuc);
sonuc = sayi.toFixed(5); // toFixed: noktadan sonraki kısmın 5 basamağını alır.

sonuc = Math.round(2.4);
console.log(sonuc);
sonuc = Math.round(2.6); // math interfacei kullanarak içine girilen değeri yuvarlatabiliriz.
sonuc = Math.ceil(2.2); // ceil her durumda yukarı yuvarlar
sonuc = Math.floor(2.6); // floor her durumda aşağı yuvarlar.
sonuc = Math.sqrt(25); // sqrt girilen sayının karekökünü alır.
sonuc = Math.pow(2, 5); // pow: üs alma işlemi yapar. 2 üzeri 5
sonuc = Math.abs(-10); // girilen sayının mutlak değerini alır
sonuc = Math.min(-10, 1, 2, 8, -15); // girilen sayılar arasından en küçüğü bulur.
sonuc = Math.max(-10, 1, 2, 8, -15); // girilen sayılar arasından en büyüğü bulur.
sonuc = Math.random(); // rastgele bir sayı üretir. 0 ile bir arasında
sonuc = Math.random() * 10; // 10 ile çarparak sıfır ile dokuz arasında bir sayı ürettirdik.
sonuc = Math.round(Math.random() * 100 + 50); // floor ile üretilen rastgele sayıyı bir altına yuvarladık

console.log(typeof sonuc);
console.log(sonuc);
