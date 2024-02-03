
import { Link } from 'react-router-dom';

const CreateNewList = () => {
    return (
        
            
      <div
        className="hero w-full h-auto p-10 shadow-2xl rounded bg-base-200"
        
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-center text-2xl font-bold pt-4">
              Create a new list
            </h1>

            <form  className="card-body">
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="input your name"
                    name="name"
                    className="input input-bordered"
                  />
                  
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo url</span>
                  </label>
                  <input
                    type="text"
                    placeholder="input your photo url"
                    name="photoUrl"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
        
                    name="email"
                    className="input input-bordered"
                  />
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    
                    name="password"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Add To List"
                    className="btn bg-blue-500 text-white hover:bg-blue-600"
                  />
                </div>
                
              </div>
              <div className="text-center">
                
              </div>
            </form>
          </div>

          <div className="text-center lg:text-left">
            <img src='' alt="" />
          </div>
        </div>
      </div>
    
    )
    
};

export default CreateNewList;