let kursAdi = "Komple Uygulamalı Web Geliştirme Eğitimi.";

let sonuc;

sonuc = kursAdi.toLowerCase();
sonuc = kursAdi.toUpperCase();
sonuc = kursAdi.length;
sonuc = kursAdi[0];
sonuc = kursAdi.slice(0, 6);
console.log(sonuc);
sonuc = kursAdi.slice(10); // 10. indexten baslar
console.log(sonuc);

sonuc = kursAdi.slice(-10);
console.log(sonuc);

sonuc = kursAdi.slice(-10, -5); // tersten de başlayabiliriz.
console.log(sonuc);

sonuc = kursAdi.substring(0, 6); // slice ile mantık aynı
console.log(sonuc);
sonuc = kursAdi.substring(10);
console.log(sonuc);

sonuc = kursAdi.replace("Eğitimi", "Kursu"); // değiştirilecek metin
console.log(sonuc);

sonuc = kursAdi.trim(); // bütün bosluk karakterlerini siler.
sonuc = kursAdi.trimEnd(); // sondaki bosluk karakterlerini siler
sonuc = kursAdi.trimStart(); // baştaki bosluk karakterlerini siler

sonuc = kursAdi.indexOf("Komple"); // komple kelimesini bulur ve başlangıc indeksini getirir.
console.log(sonuc);
sonuc = kursAdi.split(" "); // verilen karakter ile kelimeleri ayırarark bir dizi halina getirir. yani burada her boslukta bir eleman olusturur.
console.log(sonuc);
sonuc = kursAdi.split(" ")[4]; // dizi olarak ayırdığı kelimelerden 4.cü olanı seçmek
console.log(sonuc);
console.log(sonuc);
