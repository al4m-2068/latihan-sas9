function cprght() {
    return alert("Copyright © 2025 by Albar Abdul Malik")
}

function loopBtn() {
    for (let loopKe = 1; loopKe < 4; loopKe++) {
        alert(`Tombol 1 diklik, loop ke ${loopKe}`)
    }   
}
function loopBtn2() {
    for (let loopKe = 1; loopKe < 4; loopKe++) {
        alert(`Tombol 2 diklik, loop ke ${loopKe}`)
    }   
}
function loopBtn3() {
    for (let loopKe = 1; loopKe < 4; loopKe++) {
        alert(`Tombol 3 diklik, loop ke ${loopKe}`)
    }   
}

function tambah(a = parseInt(prompt("Masukkan angka pertama")), b = parseInt(prompt("Masukkan angka kedua"))) {
    if (isNaN(a) || isNaN(b)) {
        alert("Masukkan angka yang valid >A<!")
    } else {
        c = a + b;
        return alert(`Hasil dari ${a} + ${b} adalah ${c}`)
    }
}