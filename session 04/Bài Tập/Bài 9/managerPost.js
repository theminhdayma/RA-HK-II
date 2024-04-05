
var listPost = [];
var maxPost = 5;

// Thêm post
function addPost(){
    let titleInput = document.getElementById("titleInput");
    let contentInput = document.getElementById("contentInput");
    let authorInput = document.getElementById("authorInput");

    const post = {
        title: titleInput.value,
        content: contentInput.value,
        author: authorInput.value,
    }

    listPost = [...listPost, post];

    if(listPost.length >= maxPost){
        alert("Danh sách đã đầy");
        return;
    }

    showPost.innerHTML += `
        <div class="showPost">
            <span class="elementPost">${post.title}</span>
            <span class="elementPost">${post.content}</span>
            <span class="elementPost">${post.author}</span>
        </div>
    `;

    titleInput.value = "";
    contentInput.value = "";
    authorInput.value = "";

}

function search() {
    let searchTitle = document.getElementById("searchTitle").value.toLowerCase();
    let filteredPosts = listPost.filter(item => item.title.toLowerCase().startsWith(searchTitle));

    showPost.innerHTML = "";

    filteredPosts.forEach(item => {
        showPost.innerHTML += `
        <div class="showPost">
            <span>${item.title}</span>
            <span>${item.content}</span>
            <span>${item.author}</span>
        </div>
        `;
    });
}

// Hiển thị các post
function renderPosts(){
    showPost.innerHTML = "";
    for(let item of listPost){
        showPost.innerHTML += `
        <div class="showPost">
            <span>${item.title}</span>
            <span>${item.content}</span>
            <span>${item.author}</span>
        </div>
        `
    }
}

export { listPost, maxPost, addPost, search, renderPosts };