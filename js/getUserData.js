const USERNAME_ELEMENT = document.getElementById("username_data");
const LINKS_GRID = document.getElementById("links_grid");

const setupUserData = async () => {
  const userData = await fetch("db/userData.json").then((res) => res.json());
  const userNickname = userData.nickname;
  const userSocialLinks = userData.socialLinks;

  USERNAME_ELEMENT.textContent = userNickname;
};

setupUserData();
