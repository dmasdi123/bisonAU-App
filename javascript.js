var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  //jika angkot kosong
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
      }
    }
  }
};
