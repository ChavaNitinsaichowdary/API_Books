
import mongoose from "mongoose";
mongoose.connect('process.env.MONGODB_URI', { useNewUrlParser: true, useUnifiedTopology: true });
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publishedYear: Number,
});
const Book = mongoose.model('Book', bookSchema);
export default Book;