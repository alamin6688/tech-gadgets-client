import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const AddProducts = ({ update }) => {

  const { user} = useContext(AuthContext)

    const handleAddProduct = (e) => {
      e.preventDefault();
      const form = e.target;
      const userName = user?.email;
      const name = form.name.value;
      const image = form.image.value;
      const brandName = form.brandName.value;
      const type = form.Type.value;
      const price = form.price.value;
      const rating = form.rating.value;
      const productInfo = {
        userName,
        name,
        image,
        brandName,
        type,
        price,
        rating,
      };
      console.log(productInfo);
    };
  
    return (
      <div className="min-h-[calc(100vh-380px)] max-w-screen-xl mx-auto mt-6">
        <h2 className="text-center font-inter text-3xl font-extrabold">
        <span>
          { update ? 'Update' : 'Add'}
        </span>
        {' '}Your Product
        </h2>
        <form onSubmit={handleAddProduct} className="card-body bg-base-100">
          <div className="flex flex-col gap-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Enter Image URL"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="md:flex gap-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Brand Name</span>
              </label>
              <select
                name="brandName"
                className="select select-bordered w-full"
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
                <span className="label-text font-bold">Type</span>
              </label>
              <input
                type="text"
                name="Type"
                placeholder="Enter product type"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="md:flex gap-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Enter price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                placeholder="Enter your rating"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary hover:btn-secondary border-none text-white text-[18px]">
              Add Product
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AddProducts;
  