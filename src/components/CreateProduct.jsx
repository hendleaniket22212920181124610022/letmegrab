import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { fetchProducts, addProduct, updateProduct, deleteProduct, fetchCategories } from "./api";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]); 
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    loadProducts();
    loadCategories();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      toast.error("Error fetching products");
    }
  };

  const loadCategories = async () => {
    try {
      const data = await fetchCategories();
      setCategories(data);
    } catch (error) {
      toast.error("Error fetching categories");
    }
  };

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleFilterChange = (e) => setFilterCategory(e.target.value);

  const handleView = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleAdd = () => {
    setSelectedProduct({
      id: "",
      title: "",
      price: "",
      description: "",
      image: "",
      category: "",
    });
    setShowModal(true);
  };

  const handleSave = async () => {
    const productData = {
      ...selectedProduct,
      price: parseFloat(selectedProduct.price),
    };

    try {
      if (selectedProduct.id) {
        const updatedProduct = await updateProduct(selectedProduct.id, productData);
        setProducts(products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)));
        toast.success(`Updated Product: ${updatedProduct.title}`);
      } else {
        const newProduct = await addProduct(productData);
        setProducts([...products, newProduct]);
        toast.success(`Added Product: ${newProduct.title}`);
      }
      setShowModal(false);
    } catch (error) {
      toast.error("Error saving product");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product.id !== id));
      toast.success("Product deleted successfully");
    } catch (error) {
      toast.error("Error deleting product");
    }
  };

  const filteredProducts = products.filter((product) => {
    const isCategoryMatch = filterCategory === "All" || product.category === filterCategory;
    const isSearchMatch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return isCategoryMatch && isSearchMatch;
  });

  return (
    <div className="container mt-5">
      <div className="mb-3">
        <FaArrowLeft
          style={{ cursor: "pointer", fontSize: "24px" }}
          onClick={() => navigate("/")}
          title="Go Back to Home"
        />
      </div>
      <h2 className="text-center mb-4">Product Management</h2>

      <div className="row mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search products"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="col-md-6">
          <select
            className="form-select"
            value={filterCategory}
            onChange={handleFilterChange}
          >
            <option value="All">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-4 text-end">
        <Button className="btn btn-primary" onClick={handleAdd}>
          Add New Product
        </Button>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} width="50" />
              </td>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>
                <Button className="btn btn-info me-2" onClick={() => handleView(product)}>
                  View
                </Button>
                <Button className="btn btn-danger" onClick={() => handleDelete(product.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct.id ? "Edit Product" : "Add Product"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                value={selectedProduct.title}
                onChange={(e) =>
                  setSelectedProduct({ ...selectedProduct, title: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                type="number"
                className="form-control"
                value={selectedProduct.price}
                onChange={(e) =>
                  setSelectedProduct({ ...selectedProduct, price: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                value={selectedProduct.description}
                onChange={(e) =>
                  setSelectedProduct({ ...selectedProduct, description: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Image URL</label>
              <input
                type="text"
                className="form-control"
                value={selectedProduct.image}
                onChange={(e) =>
                  setSelectedProduct({ ...selectedProduct, image: e.target.value })
                }
              />
              {selectedProduct.image && (
                <img
                  src={selectedProduct.image}
                  alt="Preview"
                  className="mt-2"
                  width="100"
                />
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Category</label>
              <input
                type="text"
                className="form-control"
                value={selectedProduct.category}
                onChange={(e) =>
                  setSelectedProduct({ ...selectedProduct, category: e.target.value })
                }
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default ProductTable;
