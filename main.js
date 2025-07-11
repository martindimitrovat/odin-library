const library = [
    {
        title: "The Millionaire Fastlane",
        author: "MJ DeMarco",
        pages: 400, 
    },
    {
        title: "Unscripted",
        author: "MJ DeMarco",
        pages: 400,
    },
    {
        title: "Unscripted",
        author: "MJ DeMarco",
        pages: 400,
    },
    {
        title: "Unscripted",
        author: "MJ DeMarco",
        pages: 400,
    },
    {
        title: "Unscripted",
        author: "MJ DeMarco",
        pages: 400,
    },
    {
        title: "Unscripted",
        author: "MJ DeMarco",
        pages: 400,
    },
    {
        title: "Unscripted",
        author: "MJ DeMarco",
        pages: 400,
    },
    {
        title: "Unscripted",
        author: "MJ DeMarco",
        pages: 400,
    },
    {
        title: "Unscripted",
        author: "MJ DeMarco",
        pages: 400,
    },
    {
        title: "Unscripted",
        author: "MJ DeMarco",
        pages: 400,
    },
    {
        title: "Unscripted",
        author: "MJ DeMarco",
        pages: 400,
    },
    {
        title: "Unscripted",
        author: "MJ DeMarco",
        pages: 400,
    },
    {
        title: "Unscripted",
        author: "MJ DeMarco",
        pages: 400,
    },
];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

}

// Display books on page
function renderLibrary(library) {
    const frag = document.createDocumentFragment();
    
    library.forEach((book, index) => {
        const tr = document.createElement("tr");
        const tdTitle = document.createElement("td");
        const tdAuthor = document.createElement("td");
        const tdPages = document.createElement("td");
        const tdRead = document.createElement("td");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const tdDelete = document.createElement("td");
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("secondary-btn", "label-sm");

        tdTitle.innerText = book.title;
        tdAuthor.innerText = book.author;
        tdPages.innerText = book.pages;
        tr.appendChild(tdTitle);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdPages);
        tr.appendChild(tdRead);
        tdRead.appendChild(checkbox);
        tr.appendChild(tdDelete);
        tdDelete.appendChild(deleteBtn);
        deleteBtn.innerText = "Delete";
        frag.appendChild(tr);
    })

    const tbody = document.getElementById("library-body");
    tbody.appendChild(frag);
}

renderLibrary(library);