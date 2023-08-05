import React, { useState } from 'react'

function Fileupload() {
    const [image,setImage]= useState('')
    function handleImage (e) {
        console.log(e.target.files)
        setImage(e.target.files[0])
    }
    return (
        <div>
            <input type='file' name='file' onChange={handleImage}></input>
        </div>
    )
}

export default Fileupload