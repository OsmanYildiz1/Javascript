let simdi = new Date(); // Date sınıfıyla olusturulan tarih tutan nesne. şimdiki tarih -saat

// Get Methods
sonuc = simdi;
sonuc = simdi.getDate(); //  ayın kaçıncı günü oldugunu söyler
sonuc = simdi.getDay(); // haftanın günlerini numaralandırır. 0: pazar, 6: cumartesi
sonuc = simdi.getFullYear(); // yıl bilgisi
sonuc = simdi.getHours(); // saat bilgisi
sonuc = simdi.getTime(); // su anki saat bilgisini milisecond cinsinden verir.

// Set Methods - tarih üzerinde değişiklik yapma
// simdi.setFullYear(2025); // yıl bilgisini degistirir.
simdi.setMonth(1); // ay bilgisini değistirir. 1:subat
simdi.setDate(15); //gün bilgisini yaptıgımız degisiklikle verir.

sonuc = simdi;

let dogumTarihi = new Date(1990, 5, 15);

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear(); // yıl bilgisini çıkardık
// sonuc = simdi - dogumTarihi; // bu sekilde ckarınca ms sonuc verir.

let milisecond = simdi - dogumTarihi;
let saniye = milisecond / 1000;
let dakika = saniye / 60;
let saat = dakika / 60;
let gün = saat / 24;
sonuc = gün;

let dg = new Date("2023-03");

dg.toDateString(); // okunabilirliği arttırır. günü ve ayı yazı ile belirtir.
console.log(typeof sonuc);
console.log(sonuc);
console.log(dg);
