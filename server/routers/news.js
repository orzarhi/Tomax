const router = require("express").Router();
const { getNews } = require("../controllers/news");

router.post('/news/:category', getNews)

module.exports = router;