import express from 'express';  
const router = express.Router();
import Book from '../db/index.js'
router.get('/',async(req,res)=>{
    try{
        const books = await Book.find();
        res.send(books);
    }
    catch(error){
        res.status(500).json({message : 'Internal server error!!'});
    }
    
});
router.post('/', async (req, res) => {
    const { title, author, publishedYear } = req.body;
  
    if (!title || !author || !publishedYear) {
      return res.status(400).json({ error: 'Incomplete book details' });
    }
  
    try {
      const newBook = new Book({ title, author, publishedYear });
      await newBook.save();
      res.status(201).json(newBook);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, author, publishedYear } = req.body;
    if (!title || !author || !publishedYear) {
      return res.status(400).json({ error: 'Incomplete book details' });
    }
  
    try {
      
      const updatedBook = await Book.findByIdAndUpdate(id, { title, author, publishedYear }, { new: true });
  
      if (!updatedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
  
      res.json(updatedBook);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
export default router;