const markAll = document.querySelector(".mark-all");
const unread = document.querySelectorAll(".unread");
const posts = document.querySelectorAll(".post");
const notificationNumber = document.querySelector(".notification-number");

notificationNumber.textContent = unread.length;


markAll.onclick = function() {
  for (let i = 0; i < unread.length; i++) {
    unread[i].innerHTML = "";
  }
  for (let i = 0; i < posts.length; i++) {
    posts[i].classList.remove("unread-post");
  }
  notificationNumber.textContent = 0;
}
