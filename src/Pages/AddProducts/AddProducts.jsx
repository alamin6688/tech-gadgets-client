import axios from "axios";
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";

const AddProducts = ({ update }) => {
  const { user } = UseAuth() || {};

  const handleAddProduct = (e) => {
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
    const productInfo = {
      name,
      description,
      email,
      image,
      brandName,
      type,
      price,
      rating,
    };
    console.log("Product Info:", productInfo);

    axios
      .post("http://localhost:5000/addProduct", productInfo)
      .then((res) => {
        console.log("Response Data:", res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your product added successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Failed to add product",
            showConfirmButton: true,
          });
        }
      })
      .catch((error) => {
        console.error("Error posting data:", error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error adding product",
          text: error.message,
          showConfirmButton: true,
        });
      });
  };

  return (
    <div className="min-h-[calc(100vh-380px)] max-w-screen-xl mx-auto flex flex-col items-center justify-center mt-10 mb-16">
      <div className="bg-base-200 w-full rounded-xl py-8 md:px-16">
        <h2 className="text-center font-inter text-3xl font-extrabold">
          <span>{update ? "Update" : "Add"}</span> Your Product
        </h2>
        <form onSubmit={handleAddProduct} className="card-body px-6">
          <div className="flex flex-col gap-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[16px] font-bold">Name/Title</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
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
                placeholder="Enter your description"
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
                placeholder="Enter Image URL"
                className="input bg-gray-200"
                required
              />
            </div>
          </div>
          <div className="md:flex gap-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-[16px] font-bold">
                  Brand Name
                </span>
              </label>
              <select
                name="brandName"
                className="select bg-gray-200 w-full"
                required
              >
                <option value="" disabled selected>
                  Select brand
                </option>
                <option value="Brand A">Brand A</option>
                <option value="Brand B">Brand B</option>
                <option value="Brand C">Brand C</option>
              </select>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-[16px] font-bold">Type</span>
              </label>
              <input
                type="text"
                name="Type"
                placeholder="Enter product type"
                className="input bg-gray-200"
                required
              />
            </div>
          </div>
          <div className="md:flex gap-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-[16px] font-bold">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Enter price"
                className="input bg-gray-200"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-[16px] font-bold">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                placeholder="Enter your rating"
                className="input bg-gray-200"
                required
              />
            </div>
          </div>
          <div className="form-control mt-8">
            <button className="btn btn-primary hover:btn-secondary border-none text-white text-[18px]">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
