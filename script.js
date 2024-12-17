let ulang = true;
while (ulang) {
  let angka = prompt("Masukan Angka");
  if (angka % 2 == 0) {
    alert("Genap");
  } else if (angka % 2 == 1) {
    alert("ganjil");
  } else {
    alert("Yang anda masukan bukan angka");
  }
  ulang = confirm("Ulang?");
}
