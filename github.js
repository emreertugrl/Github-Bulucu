class Github {
  constructor() {
    this.client_id = " Ov23liJHtF3TBWDiBTa2 ";
    this.client_secret = " 8853ac3f9fb0b4d4e7b60b0e1089d8c3449087e7 ";
    this.repos_count = 10;
    this.repos_sort = "asc";
  }
  async getUser(user) {
    // gelen userla beraber istek atma
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    // kullanıcının repolarını çekme
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}}`
    );

    /*  
    !sınırlı api kullanımı olan yerlerde  ?client_id=${this.client_id}&client_secret=${this.client_secret} bu tanım yapılarak girişlerin apiye 
    sağlaması yağılır.
    ? link sonuna konulan soru işareti ile gelecek veriyi sınırlandırma,linke etki etmiyor ,kimlik belirtme gibi özellikler vardır.
    */

    // gelen cevabı json çevirme
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return { profile, repos };
  }
}

export default Github;

/*










































*/
//hatayı yönetme
// try {
//   const profileResponse = await fetch(
//     `https://api.github.com/users/${user}`
//   );
//   const profile = await profileResponse.json();

//   return profile;
// } catch (err) {
//   console.log(err);
// }
