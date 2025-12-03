// Projeler butonları
document.querySelectorAll(".project-btn").forEach(function(btn){
    btn.addEventListener("click", function(){
        alert("Projeyi görüntülemek için tıklama örneği!");
    });
});

// Motivasyon üretici
document.addEventListener("DOMContentLoaded", function() {
    const motivationSentences = [
        "Bugün harika şeyler başaracaksın",
        "Sakın durma, doğru yoldasın",
        "Kendine inan, kendin için",
        "Başarının anahtarı sensin",
        "Her adım seni daha güçlü yapıyor",
        "Hayallerin senden vazgeçmedi, sende vazgeçme",
        "Zorlanıyosan doğru yerdesin",
        "Bugün sadece kendin için bişeyler yap",
        "Unutma güzel şeyler zorluklarla gelir",
        "Emeğin asla boşa gitmeyecek",
        "Sendeki bu güce inan",
        "Güzel yerlere giden yollar dikenlidir, vazgeçme",
        "Başardığın gün çok yakın"
    ];

    const motivationBtn = document.getElementById("motivationBtn");
    const motivationText = document.getElementById("motivationText");

    motivationBtn.addEventListener("click", function() {
        const randomIndex = Math.floor(Math.random() * motivationSentences.length);
        motivationText.textContent = motivationSentences[randomIndex];
    });
}) 

