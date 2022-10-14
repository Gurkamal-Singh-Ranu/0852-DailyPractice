import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Details = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  const[query,setquery]=useState("....");

  return (
    <div className="container">
      <div className="py-4">
        <span style={{fontSize:"45px",margin:"0px 5% 1% 0%"}}>Details</span>
        
        <div style={{margin:"-7% 35% 0% 35%"}}>
            <div className="input-group rounded">
                <input type="search" 
                placeholder=" Search..."
                onChange={(e)=>setquery(e.target.value ? e.target.value:"....")}
                id="inp"
                style={{width:"250px",height:"35px",borderRadius:"25px"}}
                />
                <div id="ul" className="list">
                    {
                            users.filter((user)=>
                            user.name.toLowerCase().includes(query) 
                            ) .map((user)=>(
                            <div style={{margin:"2% 0% 0% 25%"}} key={user.id} className="listItem">
                                <Link class="btn btn-dark" style={{borderColor: "#e7e7e7;color: black"}} to={`/users/${user.id}`}>
                                {user.name}
                                </Link>
                            </div>
                    ))
                        }
                </div>
            </div>
        </div>


        <Link style={{margin:"0% 0% 1% 91%",backgroundColor:"blue"}} className="btn btn-primary" to="/users/add">Add User</Link>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details;
