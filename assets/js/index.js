function setKategoriCari(kategori) {
  button = document.getElementById("dropdownKategoriButton");
  textButton = document.getElementById("textKategoriSearch");
  textButton.innerText = kategori;
  button.click();
}
