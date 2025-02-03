const router = require('express').Router();
const bookController = require('../controller/bookController');

router.get('/', bookController.getAllBooks);
router.get('/', (req, res) => {
  console.log('GET /api/books hit');
  bookController.getAllBooks(req, res);
});

router.post('/', bookController.addNewBook);
router.put('/:bookId', bookController.updateBook);
router.delete('/:bookId', bookController.deleteBook);

module.exports = router;
