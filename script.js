async function searchBooks() {
  const query = document.getElementById('search').value.toLowerCase();
  const resultsDiv = document.getElementById('results');
  const noResults = document.getElementById('no-results');
  resultsDiv.innerHTML = '';

  const response = await fetch('books.json');
  const books = await response.json();

  const filtered = books.filter(
    b => b.title.toLowerCase().includes(query) || b.author.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    noResults.style.display = 'block';
  } else {
    noResults.style.display = 'none';
    filtered.forEach(book => {
      const div = document.createElement('div');
      div.className = 'book';
      div.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p>`;
      resultsDiv.appendChild(div);
    });
  }
}
