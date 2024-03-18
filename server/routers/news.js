const router = require("express").Router();
const { getNews } = require("../controllers/news");

router.get('/get-news/:page/:category', getNews)

module.exports = router;