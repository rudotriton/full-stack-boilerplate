const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('build'));

app.get('/api/getUsername', (req, res) =>
  res.send({
    username: os.userInfo().username,
  })
);

app.listen(process.env.PORT || 8080, () =>
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
