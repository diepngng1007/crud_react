import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IProduct } from "../interface/product";
import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
import { getOneProduct, updateProduct } from "../api/api";

function ProductUpdate() {
  // const [product, setProduct] = useState<IProduct>()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IProduct>();
  const { id } = useParams();
  //   console.log(id)
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if(id){
            const response = await getOneProduct(id);
            console.log(response);
            // setProduct(response)
            reset(response);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);

  const onSubmit = async (data: IProduct) => {
    try {
        
      await updateProduct(data);
      navigate("/");
      alert("Success!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mt-3">
      <h2 className="text-center">Update Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-50 container">
        <div className="form-group">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter product name..."
            {...register("name", { required: true })}
          />
          {errors.name && (
            <small className="text-danger">
              Trường này không được để trống
            </small>
          )}
        </div>
        <div className="form-group">
          <label className="form-label">Product Image</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter product image..."
            {...register("image", { required: true })}
          />
          {errors.image && (
            <small className="text-danger">
              Trường này không được để trống
            </small>
          )}
        </div>
        <div className="form-group">
          <label className="form-label">Product Price</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter product price..."
            {...register("price", { required: true, min: 0 })}
          />
          {errors.price && (
            <small className="text-danger">
              Trường này không được để trống và phải là số dương
            </small>
          )}
        </div>
        <div className="form-group">
          <label className="form-label">Product Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter product description..."
            {...register("desc", { required: true })}
          />
          {errors.desc && (
            <small className="text-danger">
              Trường này không được để trống
            </small>
          )}
        </div>
        <button className="btn btn-primary">Submit form</button>
      </form>
    </div>
  );
}

export default ProductUpdate;
