const index = (req, res) => {
  res.locals.currentPage = 'home';
  res.render('index', { title: 'Travlr Getaways' });
}

module.exports = { index };