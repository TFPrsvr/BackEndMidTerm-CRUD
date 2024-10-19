import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [user, setUser] = useState([]);
  const [edit, setEdit] = useState([]);

  const handleChange = (e) => {
    setData({
      username: e.target.value,
    });
  };

  const handleSubmit = () => {
    axios({
      method: "post",
      url: "http://localhost:3002/create",
      data: data,
    })
      .then((res) => {
        console.log("res.data", res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleGetUsers = () => {
    axios({
      method: "get",
      url: "http://localhost:3002/getUsers",
    })
      .then((res) => {
        console.log("res.data:", res.data);
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (e) => {
    console.log("handleDelete hit");
    axios({
      method: "delete",
      url: `http://localhost:3002/delete/${e.target.id}`,
    })
      .then((deleted) => {
        console.log("deleted", deleted);
      })
      .catch((err) => console.log(err));
  };

  const handleEditChange = (e) => {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = (id) => {
    axios({
      method: "put",
      url: `http://localhost:3002/update/${id}`,
      data: edit
    })
      .then((edited) => {
        console.log("edited", edited);
      })
      .catch((err) => console.log('err', err));
  };

  return (
    <>
      {console.log("edited!!:", edit)}
      {console.log('user!!:', user)}
      {console.log(`{item._id}:`, edit)}


      <input
        type="text"
        onChange={(e) => handleChange(e)}
        placeholder="Username"
      />

      <br />
      <br />
  
      {/* <br />
        <input type='text' placeholder='username' onChange={(e) => handleChange(e)} />
        <br /> */}
  
  
  
        <br />
        <button onClick={handleSubmit}>Submit</button>
        <br />
   
  
  
        <br />
        <button onClick={handleGetUsers}>Get Users</button>
      <br />

<div id="map">

      {user.map((item) => {
        return (
          <div key={item._id}>
            <p id={item._id}>{item.username}</p>

            <br />
            <button 
                id={item._id} 
                onClick={(e) => handleDelete(e)}>
              Delete
            </button>
            <br />
       
          <br />
            <input
              type="text"
              name='username'
              placeholder="Edit Username"
              onChange={handleEditChange}/>

          <br />

            <br />
            <button 
                onClick={(e) => handleEdit(item._id)}>
              Edit
            </button>
            <br />

          {/* <br />
          <button 
          onClick={handleSubmit}>
            Submit
            </button>
            <br /> */}

          </div>
        );
      })}
      </div>
      <br />


      {/* <button onClick={() => handleSubmit()}>Submit</button> */}
      {/* <button onClick={handleGetUsers}>Get Users</button> */}
    </>
  );
}

export default App;