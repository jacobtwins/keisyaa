let pin = ""; // Untuk menyimpan PIN yang dimasukkan
const correctPin = "111104"; // PIN yang benar
const maxPinLength = 6; // Panjang maksimum PIN

function enterPin(number) {
    if (pin.length < maxPinLength) {
        pin += number;
        updatePinDisplay();
    }
}

function clearPin() {
    pin = "";
    updatePinDisplay();
}

function submitPin() {
    if (pin === correctPin) {
        // Jika PIN benar, tampilkan pesan sukses dan arahkan ke halaman dashboard
        Swal.fire({
            title: "PIN Benar!",
            text: "Selamat datang, sayangg! ❤",
            icon: "success",
            confirmButtonText: "Lanjutkan"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "dashboard.html"; // Arahkan ke halaman dashboard
            }
        });
    } else {
        // Jika PIN salah, tampilkan pesan gagal
        Swal.fire({
            title: "PIN Salah!",
            text: "Coba lagi ya, sayangg 😔",
            icon: "error",
            confirmButtonText: "Oke"
        });
    }
    clearPin();
}

function updatePinDisplay() {
    const pinDisplay = document.getElementById("pinDisplay");
    pinDisplay.textContent = pin.padEnd(maxPinLength, '*'); // Menampilkan PIN dan sisa bintang
}

function flipPhoto() {
    const flipCardInner = document.getElementById("flipCardInner");
    flipCardInner.style.transform = flipCardInner.style.transform === "rotateY(180deg)" ? "" : "rotateY(180deg)";
}
