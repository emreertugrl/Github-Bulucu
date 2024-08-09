import Github from "/github.js";
import UI from "/uı.js";
// github ve uı class örneğini oluşturma
const github = new Github();
const ui = new UI();

new Github();
const searchButton = document.getElementById("search-button");
const searchUser = document.getElementById("search-user");
console.log(searchButton, searchUser);

// eğer ara butonuna tıklanırsa
searchButton.addEventListener("click", getInput);
// eğer enter tıklanırsa
searchUser.addEventListener("keypress", (e) => {
  if (e.code == "Enter") {
    getInput();
  }
});

function getInput() {
  // eğer inputun içi doluysa api isteği at
  if (searchUser.value !== "") {
    github.getUser(searchUser.value).then((data) => {
      if (data.profile.message === "Not Found") {
        // hata mesajı
        ui.showAlert("Aradığınız Kullanıcı Bulunamadı", "alert alert-danger");
      } else {
        // kullanıcıya gönder
        ui.showAlert("Aradığınız Kullanıcı Bulundu", "alert alert-success");
        // kullanıcıyı göster
        ui.showProfile(data.profile);
        // projeleri göster
        ui.showRepos(data.repos);
      }
    });
  } else {
    ui.showAlert("Form Alanı Boş Olamaz.", "alert alert-info");

    // eğer input boşsa uyarı ver.
    ui.clearProfile();
  }
  searchUser.value = "";
}

// tema
const themeBtn = document.getElementById("theme");

themeBtn.addEventListener("click", changeTheme);

function changeTheme() {
  const body = document.querySelector("body");
  body.classList.toggle("bg-dark");
  body.classList.toggle("text-bg-dark");

  if (body.classList.contains("bg-dark")) {
    themeBtn.innerText = "Açık Mod";
  } else {
    themeBtn.innerText = "Koyu Mod";
  }
}
changeTheme();
