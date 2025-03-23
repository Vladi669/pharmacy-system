import axios from "axios";

//const baseURL = "http://localhost:8080/";
  const baseURL = "https://api-pharmacy-six.vercel.app/";
// export const imageUrl = "http://localhost:8080";
//export const imageUrl = "https://api-pharmacy-six.vercel.app";
const api = axios.create({
  baseURL,
});

export const putRegisterUser = async ({ name, lastName, email, password }) => {
  try {
    const response = await api.put("auth/", { name, lastName, email, password });
    return response;
  } catch (error) {
    if (error.response) {
      throw error;
    } else if (error.request) {
      const err = new Error('No response from the server. Please try again later.');
      err.status = 503;
      throw err;
    } 
  }
};

export const postLoginUser = async ({ email, password }) => {
  try {
    const user = await api.post("auth/", { email, password });
    return user;
  } catch (error) {
    if (error.response) {
      throw error;
    } else if (error.request) {
      const err = new Error('No response from the server. Please try again later.');
      err.status = 503;
      throw err;
    } 
  }
};

export const postProduct = async ({ name, description, price, quantity,manufacturer,packaging, imagePath,category }) => {
  try {
    const formData = new FormData(); // FormData to send both text and file data
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('quantity', quantity);
    formData.append('manufacturer', manufacturer);
    formData.append('packaging', packaging);
    formData.append('category', category);
    formData.append('imagePath', imagePath);
    // if (image) {
    //   formData.append('image', image); // Include the image file if provided
    // }

    // Send the product details to the backend using axios post
    const response = await api.post("product/add-product", formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Required for file uploads
      },
    });

    return response.data; // Return the server's response
  } catch (error) {
    if (error.response) {
      throw error; // Pass on the error from the server
    } else if (error.request) {
      const err = new Error('No response from the server. Please try again later.');
      err.status = 503;
      throw err;
    } 
  }
};

export const fetchProducts = async ({ searchQuery = '', category = '', mg = '', manufacturer = '' }) => {
  try {
    console.log(searchQuery, category, mg, manufacturer);
    const response = await api.get('/product/products', {
      params: {
        name: searchQuery,       // Pass searchQuery as a query parameter
        category: category,      // Pass category filter
        mg: mg,                  // Pass mg filter
        manufacturer: manufacturer, // Pass manufacturer filter
      },
    });
    return response;
  } catch (error) {
    if (error.response) {
      throw error; // Pass on the error from the server
    } else if (error.request) {
      const err = new Error('No response from the server. Please try again later.');
      err.status = 503;
      throw err;
    } 
  }
};

// Edit product by ID
export const updateProduct = async (productId, updatedProductData) => {
  try {
    const response = await api.put(`/product/${productId}`, updatedProductData);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error; // Pass on the error from the server
    } else if (error.request) {
      const err = new Error('No response from the server. Please try again later.');
      err.status = 503;
      throw err;
    } 
  }
};

// Delete product by ID
export const deleteProduct = async (productId) => {
  try {
    const response = await api.delete(`/product/${productId}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error; // Pass on the error from the server
    } else if (error.request) {
      const err = new Error('No response from the server. Please try again later.');
      err.status = 503;
      throw err;
    } 
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await api.get(`/product/${productId}`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching product:', error);
    throw new Error('Unable to fetch the product');
  }
};

