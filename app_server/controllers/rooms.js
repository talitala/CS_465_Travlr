const rooms = (req, res) => {
  res.locals.currentPage = 'rooms';
  res.render('rooms', { title: 'Rooms' });
}

module.exports = { rooms };