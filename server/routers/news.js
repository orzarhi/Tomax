const router = require("express").Router();
const { getNews } = require("../controllers/news");

router.post('/news', getNews)

module.exports = router;