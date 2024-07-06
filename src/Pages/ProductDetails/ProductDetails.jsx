import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const ProductDetails = () => {
  const { user } = UseAuth() || {};
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios(`http://localhost:5000/singleProduct/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user?.email;
    const name = form.name.value;
    const description = form.description.value;
    const image = form.image.value;
    const brandName = form.brandName.value;
    const type = form.Type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const UpdatedProductInfo = {
      name,
      description,
      email,
      image,
      brandName,
      type,
      price,
      rating,
    };
    console.log("Updated Product Info", UpdatedProductInfo);
  };

  return (
    <div className="min-h-[calc(100vh-382px)] max-w-screen-xl mx-auto bg-base-200 mt-10 mb-12 py-8 px-4 flex flex-col items-center justify-center">
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          Product Details
        </h2>
        <div className="card flex lg:card-side bg-base-100 shadow-xl mt-8">
          <figure className="w-full md:w-1/2">
            <img src={product.image} className="p-6" alt="" />
          </figure>
          <div className="card-body md:w-1/2">
            <h2 className="card-title text-3xl font-bold">{product.name}</h2>
            <div className="space-y-3">
              <p>Description: {product.description}</p>
              <p>Brand name: {product.brandName}</p>
              <p>Type: {product.type}</p>
              <p>Rating: {product.rating}</p>
              <p>Price: {product.price}</p>
            </div>
            <div className="card-actions justify-start mt-2">
              <button
                className="btn btn-success"
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
              >
                Update Details
              </button>
              <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                  <div className="modal-action">
                    <form
                      onSubmit={handleUpdate}
                      method="dialog"
                      className="card-body px-0 md:px-4"
                    >
                      <h2 className="text-center text-2xl md:text-4xl font-bold mb-4">
                        Update Your Product
                      </h2>
                      <div className="flex flex-col gap-3">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text text-[16px] font-bold">
                              Name/Title
                            </span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            defaultValue={product.name}
                            className="input w-full bg-gray-200"
                            required
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text text-[16px] font-bold">
                              Description
                            </span>
                          </label>
                          <input
                            type="text"
                            name="description"
                            defaultValue={product.description}
                            className="input w-full h-20 bg-gray-200"
                            required
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text text-[16px] font-bold">
                              Image URL
                            </span>
                          </label>
                          <input
                            type="text"
                            name="image"
                            defaultValue={product.image}
                            className="input bg-gray-200"
                            required
                          />
                        </div>
                      </div>
                      <div className="md:flex gap-6 space-y-3">
                        <div className="form-control md:w-1/2">
                          <label className="label">
                            <span className="label-text text-[16px] font-bold">
                              Brand Name
                            </span>
                          </label>
                          <select
                            name="brandName"
                            defaultValue={product.brandName}
                            className="select bg-gray-200 w-full"
                            required
                          >
                            <option value="" disabled>
                              Select brand
                            </option>
                            <option value="Brand A">Brand A</option>
                            <option value="Brand B">Brand B</option>
                            <option value="Brand C">Brand C</option>
                          </select>
                        </div>
                        <div className="form-control md:w-1/2">
                          <label className="label">
                            <span className="label-text text-[16px] font-bold">
                              Type
                            </span>
                          </label>
                          <input
                            type="text"
                            name="Type"
                            defaultValue={product.type}
                            className="input bg-gray-200"
                            required
                          />
                        </div>
                      </div>
                      <div className="md:flex gap-6 space-y-3">
                        <div className="form-control md:w-1/2">
                          <label className="label">
                            <span className="label-text text-[16px] font-bold">
                              Price
                            </span>
                          </label>
                          <input
                            type="text"
                            name="price"
                            defaultValue={product.price}
                            className="input bg-gray-200"
                            required
                          />
                        </div>
                        <div className="form-control md:w-1/2">
                          <label className="label">
                            <span className="label-text text-[16px] font-bold">
                              Rating
                            </span>
                          </label>
                          <input
                            type="text"
                            name="rating"
                            defaultValue={product.rating}
                            className="input bg-gray-200"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-control mt-8">
                        <button className="btn btn-primary hover:btn-secondary border-none text-white text-[18px]">
                          Update Product
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
