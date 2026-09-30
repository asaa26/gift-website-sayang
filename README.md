# Gift Website — For You, Sayang 💙

Website hadiah ulang tahun dengan:
- Lock screen pembuka
- Tombol kejutan
- Animasi confetti
- Ucapan ulang tahun
- 1 foto
- 1 video
- Backsound
- Backsound otomatis berhenti ketika video diputar
- Audio video digunakan selama video berjalan
- Backsound dilanjutkan setelah video selesai
- Responsive untuk HP

## Menambahkan musik

Karena file lagu "Shape of My Heart" belum diunggah, website ini menunggu file musik milikmu sendiri.

Masukkan file MP3 yang kamu punya/berhak gunakan ke:

`assets/shape-of-my-heart.mp3`

Tidak perlu mengubah kode.

## Memilih bagian lagu

Untuk nuansa opening yang lembut, gunakan bagian intro/instrumental awal sebagai awal backsound. Jika ingin lebih emosional saat ucapan muncul, kamu bisa mulai dari bagian chorus/refrain pada file milikmu. Website menggunakan satu file musik dan akan mengulangnya otomatis.

## Upload ke GitHub Pages

1. Buat repository baru di GitHub.
2. Upload `index.html`, `style.css`, `script.js`, dan folder `assets`.
3. Pastikan `foto.jpg` dan `video.mp4` ada di dalam `assets`.
4. Tambahkan `shape-of-my-heart.mp3` ke dalam `assets`.
5. Buka Settings → Pages.
6. Pilih Deploy from a branch → branch `main` → folder `/root`.
7. Simpan dan tunggu GitHub Pages membuat alamat website.

Catatan: browser HP dapat membatasi autoplay audio. Website sudah dirancang agar musik dimulai setelah pengguna menekan tombol buka kunci, yaitu setelah ada interaksi pengguna.
