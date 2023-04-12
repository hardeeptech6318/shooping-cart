import React  from 'react'
import { Link } from 'react-router-dom'

// import {incNumber} from "../actions/index"


import  '../App.css'
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";


function Home() {

  

    const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();
    // const dispatch2 = useDispatch()

   
   

    
// const updateorder =()=>{
//     console.log("order update")
// }


  return (
   <>
<div className='container'>
    <div className='row'>
       
        {items && items.length && items.map((element,i)=>{
return <>
 <div   className='col-4 my-2' key={i}>
<div  className="card" style={{height:"100%"}} >
<img src={element.img} className="img " alt=""/>
<div className='card-title'>{element.title}</div>
<div className="card-body">
 
  <p className='fs-5'>₹{element.price}</p>
  <button className="btn btn-warning" onClick={() => dispatch(addToCart(element))} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>Add to Cart</button>

<div className="btn btn-success mx-3"><Link to="/cart">Go To Cart</Link></div>


</div>
</div>
</div>
</>

   })}

       
    </div>
   
   
</div>
  
   
   
   </>
  )
}

export default Home