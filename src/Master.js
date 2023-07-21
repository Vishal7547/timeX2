import React from "react";
import { useEffect, useState } from "react";
import Loader from "./Loader";
const Master = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([{}]);
  const [detail,setDetail]=useState();
  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setData(json);
      });
  }, []);
  console.log("gug", data);

  const handleAdd=(x)=>{
setDetail(x);
  console.log(detail,"details")
  }

  if (loading) return <Loader />;
  return (
    <div className="mainContainer">
      <section className="productContainer">
        {data.map((product, index) => (
          <div key={product.id} className="productTeaser">
            <div className="images">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="title">
              <span>{product.title}</span>
            </div>
            <div className="price">
              <span>Price:${product.price}</span>
            </div>
            <div>
              <button onClick={()=>handleAdd(product)}>Details</button>
            </div>
          </div>
        ))}
      </section>
    <section className="productContainer2">
        <h1 style={{textAlign:"center",fontSize:"2rem"}}>PRODUCT DETAILS</h1>
  {
    detail && <div className='DetailsContainer'>
      <div className='ImageDetails'><img src={detail?.image} alt="" /></div>
      <div className='parts'>
        <p style={{fontSize:"2rem"}}><b>{detail?.category}</b></p>
        <p>{detail?.title}</p>
        <p style={{fontSize:"1.5rem"}}>price:${detail?.price}</p>
        {/* <span>{detail?.rating.rate}</span> */}
        {/* <span>total item:{detail?.rating.count}</span> */}
        <p>{detail?.description}</p>

      </div>
    </div>
  }
      </section>
  
    </div>
  );
};

export default Master;
