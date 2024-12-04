import React from "react";
import Headers from "../others/Headers";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10">
      <Headers />
      <div>
        <form
          action=""
          className="flex flex-wrap w-full bg-red-200 items-start justify-between"
        >
          <div className="w-1/2">
            <div>
              <h3>Task Title</h3>
              <input type="text" placeholder="Make a UI design" />
            </div>
            <div>
              <h3>Date</h3>
              <input type="date" />
            </div>
            <div>
              <h3>Assign to</h3>
              <input type="text" placeholder="John Doe" />
            </div>
            <div>
              <h3>Category</h3>
              <input type="text" placeholder="Design, Dev etc" />
            </div>
          </div>

          <div className="w-1/2">
            <h3>Description</h3>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Create a UI design for the website"
            ></textarea>
            <button>Create Task</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
