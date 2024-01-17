function Soru(soruMetni, cevapSecenekleri, dogruCevap){    // constructor/class tanımlarken büyük harfle tanımlanır. nesneler ise küçük harflerle tanımlanır.
    this.soruMetni = soruMetni; // dışarıdan girileni üretilen sınıfa,kopyaya aktarma.
    this.cevapSecenekleri= cevapSecenekleri;
    this.dogruCevap=dogruCevap;  
    // console.log(this); // this sınıftan türetilen her nesneyi temsil eder.
}
//PROTOTYPE
Soru.prototype.cevabiKontrolEt = function(cevap){ // her obje için cevabı kontrol et fonksiyonu üretilmez. Sorunun prototype'ının içerisinde cevabı kontrol et göürünür.
    return cevap === this.dogruCevap;   // bu sayede daha fazla performans alırız.
}

// nesne türetme

let sorular =[  // dizi kullanarakta nesne türetebiliriz.
    new Soru("1-Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget"}, "c"),
    new Soru("2-Hangisi frontend kapsamında değerlendirilmez?", { a: "css", b: "html", c: "javascript", d: "sql"}, "d"),
    new Soru("3-Hangisi backend kapsamında değerlendirilir?", { a: "Node.js", b: "typescript", c: "angular", d: "react"}, "a"),
    new Soru("4-Hangisi javascript programlama dilini kullanmaz?", { a: "react", b: "angular", c: "vuejs", d: "aps.net"}, "d") 
];