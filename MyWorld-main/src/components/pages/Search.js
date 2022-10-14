import Axios from "axios";
import React, { useEffect, useState } from "react";
// import db from ".../db.json";

const Search=()=>{
    const[query,setquery]=useState("");
    // console.log(query);

    const [users, setUser] = useState([]);
    useEffect(() => {
        loadUsers();
      }, []);
    
      const loadUsers = async () => {
        const result = await Axios.get("http://localhost:3003/users");
        setUser(result.data.reverse());
      };


    return(
        <div style={{margin:"-7% 35% 0% 35%"}}>
            <div className="input-group rounded">
                <input type="search" className="form-control rounded" 
                placeholder="Search..." aria-label="Search"
                aria-describedby="search-addon" 
                onChange={(e)=>setquery(e.target.value)}
                />
                <button>Search</button><br/>
                <ul className="list">
                    {users.filter((user)=>
                    user.name.toLowerCase().includes(query) 
                    ) .map((user)=>(
                        <li key={user.id} className="listItem">
                            {user.name}
                        </li>
                    ))
                    }
                </ul>
  {/* <span className="input-group-text border-0" id="search-addon">
    <i className="fas fa-search"></i>
  </span> */}
            </div>
        </div>
    )

}
export default Search;