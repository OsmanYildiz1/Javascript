// Kapsamlar
var isim = "Ahmet"; // global scope
const adres = "İstanbul"; // const: sabit. uygulama boyunca değişmeyecek durumlarda kullanılır.
function yazdir() {
  var isim = "Ayse";
  var yas = 20;
  console.log(isim, yas); // function scope
}
if (true) {
  var isim = "Zeynep"; // var ile tanımlanmış degiskenler (if, for gibi blocklarda)  global scope'a dahildir.
  // fakat let veya const ile tanımlanmış olsaydı yeni bir scope oluşurdu(tıpkı fonksiyonlardaki gibi) dışarıdan erişilemezdi.
  console.log(isim);
}
adres = "Kocaeli"; // const degistirilmeye calısıldıgında hata alırız.
console.log(isim);
yazdir();
// console.log(isim);
// console.log(yas); // hata alırız çünkü yas degiskeni global scopeda tanımlı değil, fonksiyonun içinde tanımlıdır.
