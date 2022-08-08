import React from "react";
import axios from "axios";

const baseurl = "http://localhost:8080/";

const Products = () => {
  const [products, setProducts] = React.useState(null);

  const getProducts = async () => {
    const res = await axios.get(baseurl + "products");
    if(res.data.length === 0){
        setProducts(null)
    }
    setProducts(res.data);
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  if (products)
    return (
      <div>
        <h1>Nenhum Produto Localizado</h1>
        <p>Crie um produto para começar</p>
        <button>Criar</button>
      </div>
    );

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>{product.title}</p>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
