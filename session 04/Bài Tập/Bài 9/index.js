
import { listPost, maxPost, addPost, search, renderPosts } from "../Bài 9/managerPost.js";

const showPost = document.getElementById("showPost");

document.getElementById("addPost").addEventListener("click", addPost);

document.getElementById("searchTitle").addEventListener("input", search);

document.getElementById("postFull").addEventListener("click", renderPosts);