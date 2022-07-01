import React, { useState } from 'react'

const HeaderCarousel = () => {
    const [hide, setHide] = useState(true)

    return (
        <>
        {hide == true ? (
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:'1rem', backgroundColor:'red'}}>
                <div>HeaderCarousel </div>
                <button onClick={() => setHide(false)} style={{border:"none", background:"transparent", fontSize:'20px', transition:"0.3s"}}>x</button>
            </div>
        ) : null}
        </>
    )
}

export default HeaderCarousel