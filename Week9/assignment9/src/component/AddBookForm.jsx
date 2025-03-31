import { useState } from 'react';

const AddBookForm = ({ onAddBook }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    yearPublished: '',
    image: '',
    genre: []
  });

  const [errors, setErrors] = useState({});

  //  input changes
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  //  checkbox changes for genres
  const handleCheckboxChange = (evt) => {
    const { name, checked } = evt.target;
    setFormData(prevData => {
      let updatedGenres = [...prevData.genre];
      if (checked) {
        updatedGenres.push(name);
      } else {
        updatedGenres = updatedGenres.filter(genre => genre !== name);
      }
      return { ...prevData, genre: updatedGenres };
    });
  };

  // Validate form  
  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.author) newErrors.author = 'Author is required';
    if (!formData.description) newErrors.description = 'Description is required';
    return newErrors;
  };

  //  form submission
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    // If no errors, proceed with adding the book
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      onAddBook(formData);  // Pass form data to the parent component
      setFormData({       // Reset form
        title: '',
        author: '',
        description: '',
        yearPublished: '',
        image: '',
        genre: []
      });
    }
  };

  return (
    <div className="add-book-form-container">
      <h2 className="form-title">Add a New Book Set</h2>

      <form className="add-book-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="required">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
          {errors.title && <p className="error">{errors.title}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="author" className="required">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
          />
          {errors.author && <p className="error">{errors.author}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="description" className="required">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
          {errors.description && <p className="error">{errors.description}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="yearPublished">Year Published</label>
          <input
            type="text"
            id="yearPublished"
            name="yearPublished"
            value={formData.yearPublished}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label className="required">Genre</label>
          <div>
            <input
              type="checkbox"
              id="fantasy"
              name="fantasy"
              checked={formData.genre.includes('fantasy')}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="fantasy">Fantasy</label>

            <input
              type="checkbox"
              id="classic"
              name="classic"
              checked={formData.genre.includes('classic')}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="classic">Classic</label>

            <input
              type="checkbox"
              id="romance"
              name="romance"
              checked={formData.genre.includes('romance')}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="romance">Romance</label>

            <input
              type="checkbox"
              id="children"
              name="children"
              checked={formData.genre.includes('children')}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="children">Children's</label>

            <input
              type="checkbox"
              id="thriller"
              name="thriller"
              checked={formData.genre.includes('thriller')}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="thriller">Thriller</label>

            <input
              type="checkbox"
              id="mystery"
              name="mystery"
              checked={formData.genre.includes('mystery')}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="mystery">Mystery</label>
          </div>
        </div>

        <button type="submit" className="submit-btn">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
