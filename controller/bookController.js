const Book = require('../model/Book');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.addNewBook = async (req, res) => {
  try {
    const newBook = req.body;
    await Book.create(newBook);
    res.json(newBook);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const updatedBook = await Book.findOneAndUpdate(
      { bookId }, 
      req.body, 
      { new: true }
    );
    if (!updatedBook) return res.status(404).json({ msg: 'Book not found' });
    res.json(updatedBook);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const deletedBook = await Book.findOneAndDelete({ bookId });
    if (!deletedBook) return res.status(404).json({ msg: 'Book not found' });
    res.json({ msg: 'Book deleted successfully' });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
