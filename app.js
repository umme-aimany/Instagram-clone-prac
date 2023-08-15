// Sample data for posts
const posts = [
    {
        id: 1,
        username: 'user1',
        image: 'post1.jpg',
        caption: 'Amazing sunset view! #sunset',
        likes: 123,
    },
    {
        id: 2,
        username: 'user2',
        image: 'post2.jpg',
        caption: 'Exploring the city streets. #citylife',
        likes: 87,
    },
    // Add more posts here
];

// Function to render posts
function renderPosts() {
    const mainElement = document.querySelector('main');
    mainElement.innerHTML = '';

    for (const post of posts) {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <img src="${post.image}" alt="Post Image">
            <div class="post-details">
                <span class="username">${post.username}</span>
                <p class="caption">${post.caption}</p>
                <button class="like-button" data-id="${post.id}">
                    <span>${post.likes}</span> Likes
                </button>
            </div>
        `;

        const likeButton = postElement.querySelector('.like-button');
        likeButton.addEventListener('click', handleLike);

        mainElement.appendChild(postElement);
    }
}

// Function to handle like button click
function handleLike(event) {
    const postId = parseInt(event.target.dataset.id);
    const post = posts.find(post => post.id === postId);

    if (post) {
        post.likes++;
        renderPosts();
    }
}

// Initial render of posts
renderPosts();
