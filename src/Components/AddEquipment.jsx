import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
import { toast } from "react-toastify";


const AddEquipment = () => {

    const {user} = useContext(AuthContext) ;

const handleAdd = e => {
    e.preventDefault() ;
    const form = e.target ;
    const name = form.name.value ;
    const email = form.email.value ;
    const item = form.item.value ;
    const category = form.category.value ;
    const price = form.price.value ;
    const customization = form.customization.value ;
    const description = form.description.value ;
    const stock = form.stock.value ;
    const photo = form.photo.value ;
    const rating = form.rating.value ;
    const delivery = form.delivery.value ;
    console.log(name,email,item, category,price,customization,description,stock,photo,rating,delivery) ;
    const newEquipment = {name,email,item, category,price,customization,description,stock,photo,rating,delivery}

fetch("http://localhost:5000/equipments",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
      },
    body: JSON.stringify(newEquipment),
})
.then(res =>res.json())
.then(data => {
    console.log(data)
    if(data.insertedId){
        toast.success("New Item Added")
        form.reset() ;
    }
})

}

    return (
        <div>
           <div className=" min-h-screen">
    <div className=" bg-base-100 w-full ">
      <form onSubmit={handleAdd} className="card-body gap-6 px-0">
      
      {/* name + email  */}
      <div className="flex gap-10 flex-col md:flex-row">
       <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Name:</span>
          </label>
          <input name="name" type="text" value={user.displayName} readOnly className="input  w-full input-bordered" required />
        </div> 
        <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Email:</span>
          </label>
          <input name="email" type="email" value={user.email} readOnly className="input  w-full input-bordered" required />
        </div> 
       </div>

      {/*item name + category  */}
      <div className="flex gap-10 flex-col md:flex-row">
        <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Item Name:</span>
          </label>
          <input name="item" type="text" className="input  w-full input-bordered" required />
        </div>
        <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Category:</span>
          </label>
          <select name="category" className="select select-bordered w-full " required>
  <option disabled value='' selected>Select Category</option>
  <option value="Football">Football</option>
  <option value="Cricket">Cricket</option>
  <option value="Badminton">Badminton</option>
  <option value="Tennis">Tennis</option>
  <option value="Others">Others</option>
</select>
        </div>
       </div>

      {/* rating + delivery time  */}
       <div className="flex gap-10 flex-col md:flex-row">
       <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Ratings:</span>
          </label>
          <input name="rating" type="text"  className="input  w-full input-bordered" required />
        </div> 
        <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Delivery Time (Days):</span>
          </label>
          <input name="delivery" type="text"  className="input  w-full input-bordered" required />
        </div> 
       </div>
      
      {/* Stock + price  */}
       <div className="flex gap-10 flex-col md:flex-row">
       <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Availability (pcs):</span>
          </label>
          <input name="stock" type="text"  className="input  w-full input-bordered" required />
        </div> 
        <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Price-$:</span>
          </label>
          <input name="price" type="text"  className="input  w-full input-bordered" required />
        </div> 
       </div>
     
      
      {/* photo + customization  */}
       <div className="flex gap-10 flex-col md:flex-row">
       <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Photo-URL:</span>
          </label>
          <input name="photo" type="text"  className="input  w-full input-bordered" required />
        </div> 
        <div className="form-control w-full flex-row items-center gap-3">
          <label className="label md:w-1/4">
            <span className="label-text">Customization:</span>
          </label>
          <input name="customization" type="text"  className="input  w-full input-bordered" required />
        </div> 
       </div>
      
      {/* description  */}
      <div className="flex gap-10 flex-col md:flex-row">
       <div className="form-control w-full flex-row items-center gap-3 flex-wrap lg:flex-nowrap">
          <label className="label w-[9vw]">
            <span className="label-text">Description:</span>
          </label>
          <textarea name="description" className="textarea textarea-bordered w-full"></textarea>
        </div> 
</div>
        <div className="form-control mt-6">
          <button className="btn bg-[#ffa400] hover:bg-[#d58b00] text-black">Add Equipment</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default AddEquipment;