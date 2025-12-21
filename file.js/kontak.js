document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formKontak");
    const nama = document.getElementById("nama");
    const email = document.getElementById("email");
    const pesan = document.getElementById("pesan");
    const errorMsg = document.getElementById("errorMsg");
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // mencegah reload halaman
        if (nama.value === "" || email.value === "" || pesan.value === "") {
            errorMsg.textContent = "Semua field harus diisi.";
        } else {
            errorMsg.textContent = "";
            alert("Pesan berhasil dikirim!");
            form.reset();
        }
    });
});
document.getElementById("nama").addEventListener("blur", function () {
    const errorNama = document.getElementById("errorNama");
    if (this.value.trim() === "") {
        errorNama.textContent = "Nama wajib diisi.";
    } else {
        errorNama.textContent = "";
    }
});
document.getElementById("pesan").addEventListener("input", function () {
    const errorPesan = document.getElementById("errorPesan");
    if (this.value.trim().length < 10) {
        errorPesan.textContent = "Pesan minimal 10 karakter.";
    } else {
        errorPesan.textContent = "";
    }
});

document.getElementById("langganan").addEventListener("change", function () {
    if (this.checked) {
        alert("Terima kasih telah berlangganan newsletter!");
    }
});