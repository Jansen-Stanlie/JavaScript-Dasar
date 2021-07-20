// !!Rules
/*
 *penumpang naik duduk di kursi kosong
 * penumpang duduk di kursi berikutnya
 * jika ada kursi kosong, penumpang naik duduk di kursi kosong terlebih dahulu
 * asusmsi kursi tidak akan penuh dan akan bertambah terus jika ada penumpang naik
 * nama penumpang tidak boleh sama
 */

var penumpang = ["stanlie", undefined, "koko"];
var tambahPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        for (let i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            } else if (penumpang[i] == namaPenumpang) {
                console.log(`${namaPenumpang} sudah ada di dalam angkot`);
                return penumpang;

            } else if (i == penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}
var hapusPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        console.log("angkot masih kosong");
        return penumpang;
    } else {
        for (let i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            } else if (i == penumpang.length - 1) {
                console.log(`${namaPenumpang} tidak ada di dalam angkot`);
                return penumpang;
            }
        }
    }

}