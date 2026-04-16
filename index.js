// Write your code here!
async function fetchAndDisplayPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const posts = await response.json();
    displayPosts(posts);
  }
  catch (error) {
    console.error("Error fetching posts:", error);
  }
}

function displayPosts(posts) {
  const postList = document.getElementById('post-list');

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    const postContent = document.createElement("li");

    const postHeading = document.createElement("h1");
    postHeading.textContent = posts[i].title;

    const postInfo = document.createElement("p");
    postInfo.textContent = posts[i].body;

    postContent.appendChild(postHeading);
    postContent.appendChild(postInfo);

    postList.appendChild(postContent);
  }
}

fetchAndDisplayPosts();