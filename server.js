const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;

// ✅ Serve library.html first
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'library.html'));
});

// ✅ Then allow static files (like JS, CSS)
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
