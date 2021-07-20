//membuat object
//Object literal
var mahasiswa = {}
mahasiswa = {
    nama: "jansen",
    umur: 22,
    ips: [4.00, 3.9, 3.5],
    alamat: {
        Kampus: "USU",
        Kota: "medan"
    }
};
var mahasiswa2 = {
    ...mahasiswa,
    Peringkat: "cumlaude"
}

//function declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mahasiswaF = {}
    mahasiswaF.nama = nama;
    mahasiswaF.nrp = nrp;
    mahasiswaF.email = email;
    mahasiswaF.jurusan = jurusan;
    return mahasiswaF;

};

var mahasiswa3 = buatObjectMahasiswa("jansen", 180403151, "jansenstan24@gmail.com", "teknik industri");

// * Contructor
/*
 * ketika menggunnakan contructor untuk object sudah terdeclare sendiri
 */
function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
};

var mahasiswa4 = new Mahasiswa("jansen", 180403154, "jansenstan24@gmail.com", "teknik industri");

// * this object
// function halo(){
//     console.log("halo");
// }
// halo();

//cara ke-2
// var obj = {};
// obj.halo = function () {
//     console.log("halo");
// };
// obj.halo();

//cara ke-3-contructor
function Hallo() {
    console.log("hallo oleh contructor");
};
new Hallo;

//this (default object global / window)
console.log("does this equals to window?: ", this === window);
var a = 100;
console.log(this.a);

function haloThis() {
    console.log(this);
    console.log("hello this");
}

this.haloThis();
//this mengembalikan object global

//this object literal
var obj = {
    a: 10,
    nama:"jansen"
};
obj.halo = function () {
    console.log(this);
    console.log("halo");
};
obj.halo();
//this return obejct yang bersangkutan

//cara this contructor
function HelloThiscons(){
    console.log(this);
    console.log("CONS");
};
new HelloThiscons();

console.log(" ");
console.log("OBJECT AKHIR(LATIHAN)");
//Penumpang Angkot using Object
function Angkot(supir,trayek,penumpang, kas){
    this.supir =supir;
    this.trayek = trayek;
    this.kas=kas;
    this.penumpang = penumpang;

    this.penumpangNaik = function (namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return penumpang;
    }
    this.penumpangTurun = function (namaPenumpang , bayar){
        if(this.penumpang.length === 0){
            alert("Angkot masih Kosong");
            return false;
        }
        for(let i = 0; i< this.penumpang.length;i++){
            if(this.penumpang[i] === namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                alert(`${namaPenumpang} sudah turun dan membayar Rp.${bayar}`);
                return this.penumpang;
            }
        }
    }
};

var angkot1 = new Angkot("jansen",["Pinang baris","Medan Mall"],
    [],0);
var angkot2 = new Angkot("stanlie",["Belawan","Thamrin"],
    [],0);
console.log(angkot1);
console.log(angkot2);

