const books = [
  { title: "Java for Beginners", author: "John Smith" },
  { title: "Python Basics", author: "Alice" },
  { title: "Data Structures", author: "Bob" },
  { title: "Machine Learning", author: "Charlie" },
  { title: "Artificial Intelligence", author: "David" },
  { title: "Deep Learning", author: "Eve" },
  { title: "C++ Programming", author: "Frank" },
  { title: "Web Development with JavaScript", author: "Grace" },
  { title: "React for Beginners", author: "Hannah" },
  { title: "Django Web Framework", author: "Ian" },
  { title: "Algorithms Unlocked", author: "Robert Sedgewick" },
  { title: "Operating Systems Concepts", author: "Abraham Silberschatz" },
  { title: "Database Management Systems", author: "Ramez Elmasri" },
  { title: "Computer Networks", author: "Andrew Tanenbaum" },
  { title: "Data Science from Scratch", author: "Joel Grus" }
];


function searchBooks() {
  const query = document.getElementById("search").value.trim().toLowerCase();
  const resultsDiv = document.getElementById("results");
  const noResults = document.getElementById("no-results");
  resultsDiv.innerHTML = "";

  if (!query) {
    noResults.style.display = "none";
    return;
  }

  const filtered = books.filter(
    b => b.title.toLowerCase().includes(query) || b.author.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
    filtered.forEach(book => {
      const div = document.createElement("div");
      div.className = "book";
      div.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p>`;
      resultsDiv.appendChild(div);
    });
  }
}

// Trigger search automatically on input or Enter key
document.getElementById("search").addEventListener("input", searchBooks);
document.getElementById("search").addEventListener("keypress", function(e) {
  if (e.key === "Enter") searchBooks();
});
