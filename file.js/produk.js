
document.addEventListener("DOMContentLoaded", function () {
    const produkInput = document.getElementById("produkInput");
    const tambahBtn = document.getElementById("tambahBtn");
    const daftarProduk = document.getElementById("daftarProduk");
    const previewProduk = document.getElementById("previewProduk");
    const temaSelect = document.getElementById("temaSelect");
    // Event 1: Tambah Produk ke daftar (click)
    tambahBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const namaProduk = produkInput.value.trim();
        if (namaProduk !== "") {
            const li = document.createElement("li");
            li.textContent = namaProduk;

            // Tambahkan Event Hover (mouseover & mouseout)
            li.addEventListener("mouseover", () =>
                li.style.backgroundColor = "#e0e0e0");
            li.addEventListener("mouseout", () => li.style.backgroundColor
                = "");
            // Tambahkan Event Hapus (dblclick)
            li.addEventListener("dblclick", () => {
                if (confirm("Yakin ingin menghapus produk ini?")) {
                    li.remove();
                }
            });
            daftarProduk.appendChild(li);
            produkInput.value = "";
            previewProduk.textContent = "";
        }
    });
    // Event 2: Preview input secara langsung (keyup)
    produkInput.addEventListener("keyup", function () {
        previewProduk.textContent = produkInput.value;
    });
    // Event 3: Ubah tema background (change)
    temaSelect.addEventListener("change", function () {
        document.body.style.backgroundColor = temaSelect.value;
    });
});
