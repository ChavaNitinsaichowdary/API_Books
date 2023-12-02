import mongoose from "mongoose";
mongoose.connect('mongodb://localhost:27017/library', { useNewUrlParser: true, useUnifiedTopology: true });
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publishedYear: Number,
});

const Book = mongoose.model('Book', bookSchema);
export default Book;