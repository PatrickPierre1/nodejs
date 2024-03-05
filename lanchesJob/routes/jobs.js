const express = require('express');

const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
    res.send('Deu Certo');

});

router.post('/teste', (req, res) => {
    res.send('Testando API');
});
