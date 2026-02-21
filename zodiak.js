const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tentukanZodiak(tanggal, bulan) {
    if ((tanggal >= 21 && bulan == 3) || (tanggal <= 19 && bulan == 4)) {
        return "Aries";
    } else if ((tanggal >= 20 && bulan == 4) || (tanggal <= 20 && bulan == 5)) {
        return "Taurus";
    } else if ((tanggal >= 21 && bulan == 5) || (tanggal <= 20 && bulan == 6)) {
        return "Gemini";
    } else if ((tanggal >= 21 && bulan == 6) || (tanggal <= 22 && bulan == 7)) {
        return "Cancer";
    } else if ((tanggal >= 23 && bulan == 7) || (tanggal <= 22 && bulan == 8)) {
        return "Leo";
    } else if ((tanggal >= 23 && bulan == 8) || (tanggal <= 22 && bulan == 9)) {
        return "Virgo";
    } else if ((tanggal >= 23 && bulan == 9) || (tanggal <= 22 && bulan == 10)) {
        return "Libra";
    } else if ((tanggal >= 23 && bulan == 10) || (tanggal <= 21 && bulan == 11)) {
        return "Scorpio";
    } else if ((tanggal >= 22 && bulan == 11) || (tanggal <= 21 && bulan == 12)) {
        return "Sagittarius";
    } else if ((tanggal >= 22 && bulan == 12) || (tanggal <= 19 && bulan == 1)) {
        return "Capricorn";
    } else if ((tanggal >= 20 && bulan == 1) || (tanggal <= 18 && bulan == 2)) {
        return "Aquarius";
    } else if ((tanggal >= 19 && bulan == 2) || (tanggal <= 20 && bulan == 3)) {
        return "Pisces";
    } else {
        return "Tanggal atau bulan tidak valid";
    }
}

rl.question("Masukkan tanggal lahir (1-31): ", function(tgl) {
    rl.question("Masukkan bulan lahir (1-12): ", function(bln) {

        let tanggal = parseInt(tgl);
        let bulan = parseInt(bln);

        if (tanggal < 1 || tanggal > 31 || bulan < 1 || bulan > 12) {
            console.log("Input tidak valid!");
        } else {
            let zodiak = tentukanZodiak(tanggal, bulan);
            console.log("\n===== HASIL =====");
            console.log("Tanggal Lahir :", tanggal + "/" + bulan);
            console.log("Zodiak        :", zodiak);
        }

        rl.close();
    });
});