import axios from "axios";
import UseAuth from "../../Hooks/UseAuth";
import EmptyState from "../../Components/EmptyState";
import { useEffect, useState } from "react";
import MyCartCard from "./MyCartCard";

const MyCart = () => {
  const { user } = UseAuth() || {};
  const [items, setItems] = useState();

  useEffect(() => {
    axios(`http://localhost:5000/myProduct/${user?.email}`)
      .then((res) => {
        setItems(res.data);
        if (setItems.length < 1) {
          return (
            <EmptyState
              message={"No Bookmarks added!"}
              address={"/blogs"}
              label={"Browse Blogs"}
            />
          );
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [user]);

  if(items?.length < 1){
    return <EmptyState 
    message={'No Products added yet!'}
    address={'/blogs'}
    label={'Browse Products'}
    />

  }


  const handleDelete = (id) =>{
    console.log(id);
    // axios(`http://localhost:5000/myProduct/${id}`)
    // .then(res => {
    //   console.log(res.data);
    // })
    // .catch(error => {
    //   console.log(error.message);
    // })
  }

  return (
    <div className="min-h-[calc(100vh-380px)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 mt-10 mb-12 py-12 max-w-screen-xl bg-base-200 mx-auto">
      {items?.map((item) => (
        <MyCartCard
          handleDelete={handleDelete}
          deletable={true}
          key={item._id}
          item={item}
        />
      ))}
    </div>
  );
};

export default MyCart;
