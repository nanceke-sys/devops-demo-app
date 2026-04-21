const express = require('express');
const path = require('path');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/info', (req, res) => {
  res.json({
    version: '2.0.0',
    hostname: os.hostname()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
