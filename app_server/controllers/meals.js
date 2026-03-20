const meals = (req, res) => {
  res.locals.currentPage = 'meals';
  res.render('meals', { title: 'Meals' });
}

module.exports = { meals };