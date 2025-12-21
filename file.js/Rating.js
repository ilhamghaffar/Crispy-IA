let rating = 4;
if (rating >= 4.5) {
document.getElementById("hasil-rating").textContent = "★★★★★ Sangat Disarankan";
} else if (rating >= 3) {
document.getElementById("hasil-rating").textContent = "★★★ Rekomendasi Biasa";
} else {
document.getElementById("hasil-rating").textContent = "★ Tidak Direkomendasikan";
}