import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IProduct } from "../interface/product";
import { addProduct } from "../api/api";
import { useNavigate } from "react-router-dom";

function ProductAdd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IProduct> = async (data: IProduct) => {
    await addProduct(data);
    navigate("/");
    alert("Success!");
  };
  return (
    <div className="container mt-3">
      <h2 className="text-center">Add Form</h2>
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
            type="text"
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

export default ProductAdd;
