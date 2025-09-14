const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const closeBtn = lightbox.querySelector('.close-btn');
const prevBtn = lightbox.querySelector('.prev');
const nextBtn = lightbox.querySelector('.next');
const orderAreaLightbox = lightbox.querySelector('.order-area-lightbox');
const orderBtnLightbox = lightbox.querySelector('.order-area-lightbox .order-btn-lightbox');
const textareaLightbox = lightbox.querySelector('.order-area-lightbox textarea');

let gallery = [];
let currentIndex = 0;
let currentWarung = "";

document.querySelectorAll('.menu-item img').forEach(img => {
    img.addEventListener('click', () => {
        const menuItem = img.closest('.menu-item');
        currentWarung = menuItem.querySelector('.menu-title').textContent;
        orderBtnLightbox.dataset.warung = currentWarung;

        // Ambil URL gambar pertama dari tag <img>
        const gambarUtama = img.src;

        // Ambil URL gambar-gambar tambahan dari atribut data-gambar
        const gambarTambahan = menuItem.dataset.gambar;

        // Buat array gallery
        gallery = [gambarUtama]; // Masukkan gambar utama terlebih dahulu

        // Jika ada gambar tambahan, tambahkan ke array
        if (gambarTambahan) {
            const arrGambarTambahan = gambarTambahan.split(','); // Split berdasarkan koma
            gallery = gallery.concat(arrGambarTambahan); // Gabungkan array
        }

        currentIndex = 0; // Selalu mulai dari gambar pertama
        showImage();

        orderAreaLightbox.style.display = 'block';
        lightbox.style.display = 'flex';
    });
});

function showImage() {
    lightboxImg.src = gallery[currentIndex];
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
    showImage();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % gallery.length;
    showImage();
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    orderAreaLightbox.style.display = 'none';
    textareaLightbox.value = "";
});

lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
        orderAreaLightbox.style.display = 'none';
        textareaLightbox.value = "";
    }
});

let startX = 0;
let endX = 0;

lightboxImg.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
});

lightboxImg.addEventListener('touchend', e => {
    endX = e.changedTouches[0].clientX;
    let diff = endX - startX;
    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
        } else {
            currentIndex = (currentIndex + 1) % gallery.length;
        }
        showImage();
    }
});

orderBtnLightbox.addEventListener('click', () => {
    const warung = orderBtnLightbox.dataset.warung;
    const isiPesan = textareaLightbox.value.trim();

    if (!isiPesan) {
        textareaLightbox.focus();
        alert("Tulis pesanan Anda!"); // Pesan error yang lebih jelas
        return;
    }

    const text = `Halo SIIP DELIVERY, saya mau pesan dari ${warung}:\n${isiPesan}`;
    const waURL = `https://wa.me/628990216387?text=${encodeURIComponent(text)}`;
    window.open(waURL, '_blank');

    textareaLightbox.value = "";
    orderBtnLightbox.textContent = "Pesanan Dikirim!"; // Feedback sukses
    setTimeout(() => {
        orderBtnLightbox.textContent = "Pesan"; // Kembalikan teks tombol setelah beberapa detik
    }, 3000);
});
