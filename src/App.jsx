import { IoSaveSharp } from "react-icons/io5";
function app() {
  return (
    <div className="parent" >
      <div className="card">
        <div className="top">
          <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaL-7RRx5SW9qx4AJw4mjQHfar35O2ScabD2zkXUV8kg&s=10'/>
          <button>Save<IoSaveSharp className = "icon"/></button>
        </div>
        <div className="middle">
          <h2>Amazon <span>5 days ago</span></h2>
          <h2>Senior UI/UX Designer</h2>
          <div >
            <h4 id = "one">Part-time</h4>
            <h4 id = "two">Senior level</h4>
          </div>
        </div>
        
        <div className="bottom">
         
          <div>
          <h2>$120/hr</h2>
          <span id = "add">Mumbai , Maharashtra</span>
          </div>
          <button>Apply Now</button>
        </div>
          
        </div>
    </div>
  )
}
export default app 
