const contact = (req, res) => {
  res.locals.currentPage = 'contact';
  res.render('contact', { title: 'Contact' });
}

module.exports = { contact };