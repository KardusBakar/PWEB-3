# PWEB-3

Penjelasan code

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

createInterface() membuat koneksi antara terminal dan program. process.stdin agar  menerima input dari keyboard. process.stdout untuk menampilkan output ke layar.Variabel rl digunakan untuk membaca pertanyaan dan jawaban user.

if ((tanggal >= 20 && bulan == 4) || (tanggal <= 20 && bulan == 5)) {
    return "Taurus";
}

Mengecek apakah tanggal dan bulan berada dalam rentang Taurus. Jika benar → fungsi mengembalikan teks "Taurus". return digunakan untuk mengirim hasil dari fungsi.
Struktur ini diulang untuk semua zodiak: Aries, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces.

else {
    return "Tanggal atau bulan tidak valid";
}

Jika tidak cocok dengan semua kondisi

rl.question("Masukkan tanggal lahir (1-31): ", function(tgl) {

rl.question() digunakan untuk menampilkan pertanyaan. Jawaban user disimpan dalam parameter tgl. Nilai masih berupa string.

rl.question("Masukkan bulan lahir (1-12): ", function(bln) {
Menanyakan bulan lahir dan Jawaban disimpan dalam variabel bln.

let tanggal = parseInt(tgl); let bulan = parseInt(bln);
parseInt() mengubah teks menjadi angka. Diperlukan agar bisa dibandingkan dengan operator matematika.

if (tanggal < 1 || tanggal > 31 || bulan < 1 || bulan > 12) {
    console.log("Input tidak valid!");
}

Mengecek apakah angka di luar batas normal. Jika salah maka menampilkan pesan error.

let zodiak = tentukanZodiak(tanggal, bulan);
console.log("\n===== HASIL =====");
console.log("Tanggal Lahir :", tanggal + "/" + bulan);
console.log("Zodiak        :", zodiak);
Memanggil fungsi tentukanZodiak. Menyimpan hasil ke variabel zodiak. console.log() digunakan untuk menampilkan teks di terminal. \n membuat baris baru.

rl.close();
Menutup proses input. Tanpa ini program tidak akan berhenti.
