import Product from "../models/product.model.js";

export const getAllProducts = async (req, res) => {
  console.log(req);
  try {
    const producs = await Product.findAll();
    res.json(producs);
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(product[0]);
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    await Product.create(req.body);
    res.json({
      message: "Product Created",
    });
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "Product Updated" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.destroy({
      where: {
        id: id.params.id,
      },
    });
    res.json({ message: "Product Deleted" });
  } catch (err) {
    res.json({ message: err.message });
  }
};
