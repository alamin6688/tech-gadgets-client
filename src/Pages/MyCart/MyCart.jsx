import axios from "axios";
import UseAuth from "../../Hooks/UseAuth";
import { useEffect } from "react";

const MyCart = () => {

  const { user } = UseAuth() || {};
  console.log(user);

  useEffect(()=>{
    axios(`http://localhost:5000/myProduct/${user?.email}`)
    .then(res => {
      console.log(res.data);
    })
    .catch(error =>{
      console.log(error.message);
    })
  },[user])
  
  return (
    <div className="min-h-[calc(100vh-380px)]">
      <h2>My Cart</h2>
    </div>
  );
};

export default MyCart;
