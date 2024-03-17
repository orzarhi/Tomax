const { getNews } = require("../controllers/news");

const router = require("express").Router();

router.get('/news', getNews)

module.exports = router;