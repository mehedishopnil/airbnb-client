import { Link } from "react-router-dom";

const CreateNewList = () => {
  return (
    <div className="hero w-full h-auto p-10 shadow-2xl rounded bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-center text-2xl font-bold pt-4">
            Create a new list
          </h1>

          <form className="card-body">
            <div>
              <div className="form-control ">
                <h2 className="label text-base">Share some basic about your place:</h2>
                <div className="grid grid-cols-4 gap-5">
                  <label className="label">
                    <span className="label-text">Guests</span>
                  </label>
                  <input
                    type="number"
                    placeholder="input your name"
                    name="name"
                    className="input w-[70px] input-bordered"
                  />

                  <label className="label">
                    <span className="label-text">Bedrooms</span>
                  </label>
                  <input
                    type="number"
                    placeholder="input your name"
                    name="name"
                    className="input w-[70px] input-bordered"
                  />

                  <label className="label">
                    <span className="label-text">Beds</span>
                  </label>
                  <input
                    type="number"
                    placeholder="input your name"
                    name="name"
                    className="input w-[70px] input-bordered"
                  />

                  <label className="label">
                    <span className="label-text">Bathrooms</span>
                  </label>
                  <input
                    type="number"
                    placeholder="input your name"
                    name="name"
                    className="input w-[70px] input-bordered"
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">
                    What type of place will guests have?
                  </span>
                </label>
                <select
                  name="placeType"
                  className="select select-bordered"
                  defaultValue="" // Provide a default value if needed
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="entirePlace">An entire place</option>
                  <option value="room">A room</option>
                  <option value="sharedRoom">A shared room</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Where your place located?</span>
                </label>
                <input
                  type="text"
                  placeholder="place name"
                  name="place"
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
            <div className="text-center"></div>
          </form>
        </div>

        <div className="text-center lg:text-left">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CreateNewList;
