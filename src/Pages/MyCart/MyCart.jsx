import axios from "axios";
import UseAuth from "../../Hooks/UseAuth";
import EmptyState from "../../Components/EmptyState";
import { useEffect, useState } from "react";
import MyCartCard from "./MyCartCard";
import Swal from "sweetalert2";

const MyCart = () => {
  const { user } = UseAuth() || {};
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios(`http://localhost:5000/myProduct/${user?.email}`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [user]);

  if (items?.length < 1) {
    return (
      <EmptyState
        message={"No Products added yet!"}
        address={"/blogs"}
        label={"Browse Products"}
      />
    );
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/delete/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              setItems(items.filter((item) => item._id !== id));
            }
          })
          .catch((error) => {
            console.log("Error deleting item:", error.message);
          });
      }
    });
  };

  return (
    <div className="min-h-[calc(100vh-380px)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 mt-10 mb-12 py-12 max-w-screen-xl bg-base-200 mx-auto">
      {items?.map((item) => (
        <MyCartCard
          handleDelete={() => handleDelete(item._id)}
          deletable={true}
          key={item._id}
          item={item}
        />
      ))}
    </div>
  );
};

export default MyCart;
