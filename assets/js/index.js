function setKategoriCari(kategori) {
  button = document.getElementById("dropdownKategoriButton");
  textButton = document.getElementById("textKategoriSearch");
  textButton.innerText = kategori;
  button.click();
}

function setKategoriCariMobile(kategori) {
  button = document.getElementById("dropdownKategoriMobileButton");
  textButton = document.getElementById("textKategoriSearchMobile");
  textButton.innerText = kategori;
  button.click();
}
