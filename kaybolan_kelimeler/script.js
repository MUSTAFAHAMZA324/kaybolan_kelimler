// Kelime listesi (Geliştirebilirsin!)
const kelimeler = [
    { kelime: "Müşfik", anlam: "Şefkatli, sevecen" },
    { kelime: "Mütehammil", anlam: "Sabırlı, dayanıklı" },
    { kelime: "Pekâlâ", anlam: "Çok iyi, elbette" },
    { kelime: "Tefekkür", anlam: "Düşünme, derin düşünce" },
    { kelime: "Mülevven", anlam: "Renkli, çeşitli" },
    { kelime: "Müstesna", anlam: "Özel, seçkin" },
    { kelime: "Müteessir", anlam: "Üzgün, kederli" },
    { kelime: "Mütemadiyen", anlam: "Sürekli, devamlı" },
    { kelime: "Mütereddit", anlam: "Kararsız, tereddüt eden" },
    { kelime: "Müreffeh", anlam: "Refah içinde, rahat" },
    { kelime: "Neşet", anlam: "Ortaya çıkmak, doğmak" },
    { kelime: "Tahayyül", anlam: "Hayal etme, tasavvur" },
    { kelime: "Tebessüm", anlam: "Gülümseme" },
    { kelime: "Tecessüs", anlam: "Merak etme, araştırma" },
    { kelime: "Teessüf", anlam: "Üzüntü, pişmanlık" },
    { kelime: "Teferruat", anlam: "Ayrıntılar, detaylar" },
    { kelime: "Tekâmül", anlam: "Gelişme, olgunlaşma" },
    { kelime: "Temayüz", anlam: "Öne çıkma, sivrilme" },
    { kelime: "Tenasüp", anlam: "Uygunluk, denge" },
    { kelime: "Teşrifat", anlam: "Tören düzeni, protokol" },
    { kelime: "Tiryaki", anlam: "Bağımlı, alışkanlık sahibi" },
    { kelime: "Ulvi", anlam: "Yüce, yüksek" },
    { kelime: "Vakar", anlam: "Ağırbaşlılık, ciddiyet" },
    { kelime: "Vuslat", anlam: "Kavuşma, birleşme" },
    { kelime: "Yadigâr", anlam: "Hatıra, anı" },
    { kelime: "Zarafet", anlam: "İncelik, nezaket" },
    { kelime: "Zihniyet", anlam: "Düşünce yapısı" },
    { kelime: "Ziyadesiyle", anlam: "Fazlasıyla, oldukça" },
    { kelime: "Şefkat", anlam: "Merhamet, sevgi" },
    { kelime: "Şayan", anlam: "Layık, uygun" },
    { kelime: "Şedid", anlam: "Sert, şiddetli" },
    { kelime: "Şuur", anlam: "Bilinç, farkındalık" },
    { kelime: "İstidat", anlam: "Yetenek, kabiliyet" },
    { kelime: "İhtişam", anlam: "Görkem, şaşaa" },
    { kelime: "İltifat", anlam: "Övgü, nazik söz" },
    { kelime: "İntizar", anlam: "Bekleme, gözleme" },
    { kelime: "İrfan", anlam: "Bilgelik, kültür" },
    { kelime: "İstidat", anlam: "Doğuştan gelen yetenek" },
    { kelime: "İsabet", anlam: "Doğruluk, hedefi tutturma" },
    { kelime: "İzdivaç", anlam: "Evlilik" },
    { kelime: "Kadim", anlam: "Eski, çok eski" },
    { kelime: "Kadem", anlam: "Adım, ayak" },
    { kelime: "Kifayet", anlam: "Yeterlilik, yetenek" },
    { kelime: "Kudsiyet", anlam: "Kutsallık, yücelik" },
    { kelime: "Layiha", anlam: "Tasarı, öneri" },
    { kelime: "Liyakat", anlam: "Hak etme, uygunluk" },
    { kelime: "Maksut", anlam: "Amaç, hedef" },
    { kelime: "Mecal", anlam: "Güç, takat" },
    { kelime: "Mehabet", anlam: "Heybet, saygınlık" },
    { kelime: "Meskur", anlam: "Anılmış, zikredilmiş" },
    { kelime: "Metanet", anlam: "Dayanıklılık, sabır" },
    { kelime: "Miftah", anlam: "Anahtar" },
    { kelime: "Muahede", anlam: "Anlaşma, sözleşme" },
    { kelime: "Muhabbet", anlam: "Sevgi, dostluk" },
    { kelime: "Muktedir", anlam: "Güçlü, yetenekli" },
    { kelime: "Mümeyyiz", anlam: "Ayırt edici, belirgin" },
    { kelime: "Müsamaha", anlam: "Hoşgörü, tolerans" },
    { kelime: "Müstesna", anlam: "Nadir, seçkin" },
    { kelime: "Mütalaa", anlam: "İnceleme, düşünme" },
    { kelime: "Nevbahar", anlam: "İlkbahar" },
    { kelime: "Nevzat", anlam: "Yeni doğmuş çocuk" },
    { kelime: "Niyaz", anlam: "Dua, dilek" },
    { kelime: "Perişan", anlam: "Dağınık, düzensiz" },
    { kelime: "Revaç", anlam: "Gözde olma, rağbet" },
    { kelime: "Sefa", anlam: "Neşe, eğlence" },
    { kelime: "Serdar", anlam: "Komutan, lider" },
    { kelime: "Seyir", anlam: "Gezinti, dolaşma" },
    { kelime: "Sükûnet", anlam: "Huzur, sessizlik" },
    { kelime: "Şecaat", anlam: "Cesaret, yiğitlik" },
    { kelime: "Şevk", anlam: "İstek, heyecan" },
    { kelime: "Şevval", anlam: "Hicri takvime göre bir ay adı" },
    { kelime: "Tahakküm", anlam: "Baskı, zorbalık" },
    { kelime: "Tahayyül", anlam: "Hayal etme" },
    { kelime: "Taravet", anlam: "Tazelik, güzellik" },
    { kelime: "Tesir", anlam: "Etkileme, iz bırakma" },
    { kelime: "Tevazu", anlam: "Alçakgönüllülük" },
    { kelime: "Tiryaki", anlam: "Bağımlı, alışkanlık sahibi" },
    { kelime: "Ulvi", anlam: "Yüce, yüksek" },
    { kelime: "Vakar", anlam: "Ağırbaşlılık, ciddiyet" },
    { kelime: "Vuslat", anlam: "Kavuşma, birleşme" },
    { kelime: "Yadigâr", anlam: "Hatıra, anı" },
    { kelime: "Zarafet", anlam: "İncelik, nezaket" },
    { kelime: "Zihniyet", anlam: "Düşünce yapısı" }
];


// Sayfa yüklendiğinde rastgele kelime seç
function gununKelimesi() {
    let rastgele = kelimeler[Math.floor(Math.random() * kelimeler.length)];
    document.getElementById("gununKelimesi").innerText = `${rastgele.kelime}: ${rastgele.anlam}`;
}

// Kelime arama fonksiyonu
function kelimeAra() {
    let arama = document.getElementById("aramaKutusu").value.toLowerCase();
    let liste = document.getElementById("kelimeListesi");
    liste.innerHTML = ""; // Önceki listeyi temizle

    kelimeler.forEach(k => {
        if (k.kelime.toLowerCase().includes(arama)) {
            let li = document.createElement("li");
            li.textContent = `${k.kelime}: ${k.anlam}`;
            liste.appendChild(li);
        }
    });
}

// Quiz için rastgele kelime seç
let quizKelime;
function quizBaslat() {
    quizKelime = kelimeler[Math.floor(Math.random() * kelimeler.length)];
    document.getElementById("quizSoru").innerText = `"${quizKelime.kelime}" kelimesinin anlamı nedir?`;
    document.getElementById("quizSonuc").innerText = "";
    document.getElementById("quizCevap").value = "";
}

// Quiz cevabını kontrol et
function quizKontrol() {
    let cevap = document.getElementById("quizCevap").value.trim().toLowerCase();
    let sonuc = document.getElementById("quizSonuc");
    
    if (cevap === quizKelime.anlam.toLowerCase()) {
        sonuc.innerText = "✅ Doğru!";
        sonuc.style.color = "green";
    } else {
        sonuc.innerText = `❌ Yanlış! Doğru cevap: ${quizKelime.anlam}`;
        sonuc.style.color = "red";
    }
}

// Sayfa yüklendiğinde çalıştır
window.onload = gununKelimesi;
