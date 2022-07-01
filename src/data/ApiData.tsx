import React, { useEffect, useState } from 'react'

const ApiData = () => {
    const [data, setData] = useState([])
   
    useEffect(() => {
        const fetchData = () =>{
           
            fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(res => setData(res))
        return data
        }
        fetchData()
    }, [])

    console.log(data);
    
return(
    <div>{data}</div>
)
}

export default ApiData