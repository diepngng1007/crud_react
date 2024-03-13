import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../interface/product";
import { getOneProduct } from "../api/api";

function ProductDetail() {
  const [product, setProduct] = useState<IProduct>();
  const { id } = useParams();
  useEffect(() => {
    fetchProduct();
  }, []);
  const fetchProduct = async () => {
    if (id) {
      const response = await getOneProduct(id);
      console.log(response);
      setProduct(response);
    }
  };
  // if(!product){
  //     return <div>Product not found</div>

  // }
  return (
    <div>
      {product && (
        <div>
          <img src={`${product.image}`} alt={`${product.name}`} />
          <h3>{product.name}</h3>
          <strong className="text-warning">{product.price}</strong>
          <p>{product.desc}</p>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
