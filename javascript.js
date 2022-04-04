var penumpang = ["Galang", undefined, "Yeyen"];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  //jika bison amanatul kosong
  if (penumpang.length == 0) {
    //tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    //kembalikan isi array dan keluar dari function
    return penumpang;
  } else {
    //telusuri seluruh kursi dari awal
    for (i = 0; i < penumpang.length; i++) {
      //jika ada kursi kosong
      if (penumpang[i] == undefined) {
        //tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        //kembalikan isi array dan keluar function
        return penumpang;
        //jika ada nama penumpang yang sama
      } else if (penumpang[i] == namaPenumpang) {
        //tampilkan pesan kesalahan
        console.log(namaPenumpang + "sudah ada di dalam angkot");
        //kembalikan isi arrat dan keluar function
        return penumpang;
        //jika seluruh kursi terisi
      } else if (i == penumpang.length - 1) {
        //tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        //kembalikan isi array dan keluar function
        return penumpang;
      }
    }
  }
};
