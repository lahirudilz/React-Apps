import { useEffect, useState } from "react";
import "./style.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [disableBtn, setDisableBtn] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableBtn(true);
  }, [products]);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      setErrorMessage(e.message);
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Loading Please Wait!</div>;
  }

  if (errorMessage !== null) {
    return <div> Error Occurred! {errorMessage}</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div key={item.id} className="product">
                <img alt={item.title} src={item.thumbnail} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableBtn} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableBtn ? <p>You have reached the end! </p> : null}
      </div>
    </div>
  );
}
