const router = require("express").Router();
const { getNews, chooseCategory } = require("../controllers/news");

router.get('/get-news', getNews)
router.post('/choose-category', chooseCategory)

module.exports = router;