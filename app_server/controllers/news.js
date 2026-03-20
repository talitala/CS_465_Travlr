const news = (req, res) => {
  res.locals.currentPage = 'news';
  res.render('news', { title: 'News' });
}

module.exports = { news };