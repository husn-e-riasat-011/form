import React, { useState } from 'react'





const App = () => {
  const [value, setVAlue] = useState('')

  const handleonChange = (e) => {
    setVAlue(e.target.value)
  }
  return (
    <>
      <div className="w-50 justify-content-center align-items-center mx-auto ">
        <div class="mb-3 " >
          <label for="exampleFormControlInput1" class="form-label" >Name</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" onChange={handleonChange} value={value} placeholder="name" />
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" onChange={handleonChange} value={value} placeholder="name@example.com" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </div>
    </>
  )
}

export default App
