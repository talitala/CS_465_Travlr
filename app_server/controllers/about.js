const about = (req, res) => {
  res.locals.currentPage = 'about';
  res.render('about', { title: 'About' });
}

module.exports = { about };