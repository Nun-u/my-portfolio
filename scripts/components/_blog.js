let blogPosts = document.getElementsByClassName("blog-post");

const blogStore = [
  {
    num: "1",
    title: "Bouldering & CS",
    timeStamp: "30/01/2023",
    content:
      "Disclaimer, I am well aware that the probability of someone actually reading this is minuscule, although here I am, explaining to you why you as a programmer should pursue bouldering.<br><br>Bouldering instinctually trains one's brain for programming. Similar to programming, it faces the paradox of being objective yet abstract in how you solve its problems. To succeed in a boulder you need to face it in a way which caters to your preferences, while still following the sequence the setter intended, and for that reason you are fooled into believing there is only one way to solve the problem, just like you are with programming.<br><br>This sport is truly socially, physically and intellectually challenging, and for that reason I am convinced everyone should give it a go, to the extent of writing this useless blog post about it.",
  },
];

setupPosts();

function setupPosts() {
  for (let i = 0; i < blogPosts.length; i++) {
    blogPosts[i].addEventListener("click", function (clickEvent) {
      loadPost(clickEvent);
      clickEvent.target.removeEventListener("click", arguments.callee);
      unloadPost();
    });
    blogPosts[i].addEventListener("touchstart", function (mobileEvent) {
      loadPost(mobileEvent);
      mobileEvent.target.removeEventListener("touchstart", arguments.callee);
      unloadPost();
    });
  }
}

function loadPost(event) {
  const blogNum = event.target.classList[1];
  let formattedContent =
    "<span class='blog-title'>" +
    blogStore[blogNum - 1].title +
    " | " +
    blogStore[blogNum - 1].timeStamp +
    "</span><br><br>";
  formattedContent = formattedContent + blogStore[blogNum - 1].content;
  formattedContent =
    formattedContent + "<br><br><span class='back-btn'>Go back.</span>";

  event.target.parentElement.classList.add("active-list");

  let listItems = document
    .querySelector(".blog-list")
    .querySelectorAll(".blog-post");
  for (let item of listItems) {
    if (!item.classList.contains(blogNum)) item.classList.add("inactive-blog");
  }

  event.target.innerHTML = formattedContent;
  event.target.classList.add("active-blog");
}

function unloadPost() {
  const btnBack = document.getElementsByClassName("back-btn");
  const postsList = document
    .querySelector(".blog-list")
    .querySelectorAll(".blog-post");

  for (let i = 0; i < btnBack.length; i++) {
    btnBack[i].addEventListener("click", function (e) {
      postTagRemovals(postsList);
    });
    btnBack[i].addEventListener("touchstart", function (e) {
      postTagRemovals(postsList);
    });
    btnBack[i].removeEventListener("click", arguments.callee);
    btnBack[i].removeEventListener("touchstart", arguments.callee);
  }
  for (post of postsList) {
    post.removeEventListener("click", arguments.callee);
    post.removeEventListener("touchstart", arguments.callee);
  }
  setupPosts();
}

function postTagRemovals(postsList) {
  const blogPost = document.getElementsByClassName("active-blog");
  const blogNum = blogPost[0].classList[1];

  blogPost[0].innerText = blogStore[blogNum - 1].title;
  for (let item of postsList) {
    item.classList.remove("active-blog");
    item.classList.remove("inactive-blog");
  }
  document
    .getElementsByClassName("blog-list")[0]
    .classList.remove("active-list");
}
