let meyveler = ["Elma", "Armut", "Muz", "Çilek"];
// let sonuc = meyveler.length; // dizi kaç elemanlı
console.log(meyveler.length);
// let ilk = meyveler.shift(); // dizinin ilk elemanını çıkarır ve çıkarılanı gösterir
console.log(meyveler[0]); // ilk elemanı göster
// let son = meyveler.pop(); // dizinin son elemanını çıkarır ve çıkarılanı gösterir.
console.log(meyveler[meyveler.length - 1]);
// let elemaniMi = meyveler.includes("Elma"); // elma dizinin bir elemanı mdıır
console.log(meyveler.includes("Elma"));
// meyveler.push("Kiraz");  // dizinin sonuna Kiraz eklendi.
meyveler[meyveler.length] = "Kiraz";
// meyveler.splice(2, 2); // dizinin ikinci elemanından başla 2 elemanı sil
meyveler.pop();
meyveler.pop();
// console.log(sonuc);
// console.log(ilk);
// console.log(son);
// console.log(elemaniMi);
// console.log(meyveler);
console.log(meyveler);
