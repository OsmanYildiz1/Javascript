let ogrenciler = ["çınar", "yiğit", "ada"];

sonuc = ogrenciler.length;

// array to string
sonuc = ogrenciler.toString(); // her bir eleman arasına virgül getirilirek stringe cevirilir.
sonuc = ogrenciler.join(" "); // her bir eleman arasına bosluk getirilirek stringe cevirilir.

// eleman silme
// sonuc = ogrenciler.pop(); // dizinin son elemanı silinir ve silinen eleman geri döndürülür.
// sonuc = ogrenciler.shift(); // dizinin ilk elemanı silinir.

// eleman ekleme
// sonuc = ogrenciler.push("sena"); // elemanı en sona ekler.
// sonuc = ogrenciler.unshift("sena"); // listenin başına eleman ekler.

let markarlar1 = ["mazda", "toyota"];
let markarlar2 = ["opel", "renault"];
let markarlar3 = ["mercedes"];

// birlestirme
// sonuc = markarlar1.concat(markarlar2, markarlar3); // concat metodu dizileri birleştirir ama asıl diziyi etkilemez.

// sonuc = markarlar1.splice(0, 1, "fiat", "audi"); // splice metodu hem ekleme hem de silme işleminde kullanılır.
// splice metodunun ilk parametresi baslangıc indeksi, ikincisi kaç elemanın silineceği, üçüncüsü eklenecek elemanlar
sonuc = markarlar1.splice(0, 1); // eleman eklemedik, 0'dan basladık ve ilk elemanı sildik. silinen elemanı gösterdi.

let x = markarlar2.includes("opel"); // markalar2'de opel var mı. true ya da false döner.
let y = markarlar2.indexOf("audi"); // markalar2'de audi varsa index numarasını gönderir. yoksa eksi değer döndürür.
let z = markarlar2.sort(); // sıralama işlemi (string ise alfabetik olarak yapar.)
console.log(z);
let r = markarlar2.reverse(); // sıralamayı tersten yapar

console.log(x);
console.log(y);

console.log(r);
console.log(sonuc);
console.log(markarlar1);
