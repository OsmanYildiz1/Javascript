let url = "https://www.sadikturan.com/";
let kursAdi = "Komple Web Geliştirme Kursu";

// 1) url kaç karakterlidir?
let karakterSayisi = url.length;
console.log(karakterSayisi);

// 2) kursAdi kaç kelimeden oluşmaktadır?
let kelimeSayisi = kursAdi.split(" ").length;
console.log(kelimeSayisi);

// 3) url https ile mi başlıyor?
let ileMi = url.startsWith("https"); // startwiht ile ne ile basladığını sorguladık true veya false döndü
console.log(ileMi);

//4) kursAdi içerisinde Eğitimi kelimesi var mı?
if (kursAdi.indexOf("Eğitimi") > 0) {
  console.log("Evet var");
} else {
  console.log("hayir yok");
}

// 5) url ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.
// https://www.sadikturan.com/komple-web-gelistirme-kursu

sonuc = kursAdi.toLowerCase();
sonuc = sonuc.replaceAll(" ", "-").replaceAll("ı", "i").replaceAll("ş", "s");
url += sonuc;
console.log(url);
