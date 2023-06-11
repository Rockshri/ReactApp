 import React, { useEffect, useState } from 'react'


const Fetchapi = () => {
//    api = "https://fakestoreapi.com/products"

  const [fake, setFake] = useState([]);
  useEffect(()=>{
    fakeStore();
  },[]);



     async function fakeStore(){
            const response = await fetch("https://fakestoreapi.com/products");
            console.log(response);
            const data = await response.json();
            console.log(data);
            setFake(data);
     }

    

  return (
    <>
    <div>

        
      <h1>Fake Store</h1>
      <main className='Container'>
      {fake.map((x)=>{
        return(
            <>
           <div className='card'>
           <div className='content'>
             <h5>{x.title}</h5>
             <p><span className='discription'>Discription :</span> {x.description}</p>
           </div>
           <img src={x.image} alt="loading" srcset="" />
       </div>
       </>
        )})}
     
  

      </main>
    </div>
    </>
  )
}

export default Fetchapi
