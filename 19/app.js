const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
const PAGE_SIZE = 10;

// Async Generator
async function* fetchPages(baseUrl, pageSize = 10) {
    let start = 0;

    while (true) {
        const url = `${baseUrl}?_start=${start}&_limit=${pageSize}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.length === 0) return;

        yield data;
        start += pageSize;
    }
}

// UI Elements
const postsDiv = document.getElementById("posts");
const btn = document.getElementById("loadMore");
const status = document.getElementById("status");

const generator = fetchPages(BASE_URL, PAGE_SIZE);
let page = 0;

// Render function
function renderPosts(posts) {
    posts.forEach(post => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `<h4>${post.title}</h4><p>${post.body}</p>`;
        postsDiv.appendChild(div);
    });
}

// Load More Button
btn.addEventListener("click", async () => {
    btn.disabled = true;

    const { value, done } = await generator.next();

    if (done) {
        status.textContent = "All posts loaded";
        btn.style.display = "none";
        return;
    }

    page++;
    renderPosts(value);
    status.textContent = `Page ${page} loaded`;

    btn.disabled = false;
});

// Batch Loader
async function loadAll(url) {
    const gen = fetchPages(url);
    let all = [];

    for await (const page of gen) {
        all = all.concat(page);
    }

    return all;
}

// Example usage:
window.loadAllPosts = async () => {
    const all = await loadAll(BASE_URL);
    console.log("Total posts:", all.length);
};