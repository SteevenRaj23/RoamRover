import React, { useState } from 'react';
import axios from 'axios';

const ProductUpload = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    days: '', 
    details: '',
    image: null,
  });
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
    setSuccess('');
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { name, price, days, details, image } = formData;

    // Basic validation
    if (!name || !price || !days || !details || !image) {
      setError('All fields are required');
      return;
    }

    const form = new FormData();
    form.append('name', name);
    form.append('price', price);
    form.append('days', days); // Updated to days
    form.append('details', details);
    form.append('image', image);

    try {
      const response = await axios.post('http://localhost:5000/api/package', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Product uploaded:', response.data);
      setSuccess('Product uploaded successfully!');
      setFormData({ name: '', price: '', days: '', details: '', image: null });
    } catch (error) {
      console.error('Error uploading product:', error);
      setError('Failed to upload product. Please try again.');
    }
  };

  return (
    <div style={{display:"flex",justifyContent:"center"}}>
    <div style={{marginTop:"200px",width:"60%"}}>
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <input 
        type="text" 
        name="name" 
        placeholder="Product Name" 
        value={formData.name} 
        onChange={handleChange} 
      />
      <input 
        type="number" 
        name="price" 
        placeholder="Price" 
        value={formData.price} 
        onChange={handleChange} 
      />
      <input 
        type="number" 
        name="days" 
        placeholder="Days" // Updated placeholder to reflect 'days'
        value={formData.days} 
        onChange={handleChange} 
      />
      <textarea 
        name="details" 
        placeholder="Details" 
        value={formData.details} 
        onChange={handleChange} 
      />
      <input 
        type="file" 
        name="image" 
        accept="image/*" 
        onChange={handleFileChange} 
      />
      <button type="submit">Upload Product</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </form>
    </div>
    </div>
  );
};

export default ProductUpload;
