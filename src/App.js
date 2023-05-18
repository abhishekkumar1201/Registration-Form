// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const data = {name:'', email:'', mobile:'', address:''};
  const [inputData,setInputData] = useState(data);
  const [flag,setFlag] = useState(false);
  const [users,setUsers] = useState([]);

  useEffect(()=>{

  },[flag])
  function handleData(e){
    setInputData({...inputData,[e.target.name]:e.target.value});
  }

  function handleSubmit(e){
    e.preventDefault();
    if(!inputData.name || !inputData.email || !inputData.mobile || !inputData.address){
      toast('All Field are mandatory');
    }else{
      setFlag(true);
      let temp = users;
      temp.push(inputData);
      setUsers(temp);
      toast(`${inputData.name} Registered Successfully...!!`)
      setInputData({name:'', email:'', mobile:'', address:''});
    }
  }
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card m-5'>
              {/* <pre>{(flag)? <h6>Hello, {inputData.name} You have registed successfully.</h6> : ''}</pre> */}
              <ToastContainer />
              <h4 className='text-center'>Registration Form</h4>
              <form className='m-3 font-weight-bold' onSubmit={handleSubmit}>
                <div className='form-group'>
                  <span>Name:</span>
                  <input className='form-control' type='text' name='name' placeholder='Enter Your Name' value={inputData.name} onChange={handleData} />
                </div>
                <div className='form-group'>
                  <span>Email:</span>
                  <input className='form-control' type='text' name='email' placeholder='Enter Your Email' value={inputData.email} onChange={handleData} />
                </div>
                <div className='form-group'>
                  <span>Mobile:</span>
                  <input className='form-control' type='text' name='mobile' placeholder='Enter Your Mobile' value={inputData.mobile} onChange={handleData} />
                </div>
                <div className='form-group'>
                  <span>Address:</span>
                  <input className='form-control' type='text' name='address' placeholder='Enter Your Address' value={inputData.address} onChange={handleData} />
                </div>
                <div>
                  <input type='submit' className='btn btn-success' value='Save'/>
                </div>
              </form>
            </div>
          </div>
          <div className='col-md-12'>
            <h6>User List</h6>
            <table className='table table-border text-center'>
              <tr className='bg-dark text-light'>
                <td>Name</td>
                <td>Email</td>
                <td>Mobile</td>
                <td>Address</td>
                <td>Action</td>
              </tr>
              { 
                users.map((value,index)=>(
                  <tr>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.mobile}</td>
                    <td>{value.address}</td>
                    <td><button className='btn btn-warning'>Edit</button> <button className='btn btn-danger'>Delete</button></td>
                  </tr>
                ))
              }
            </table>
            {users.length>0 ? '' : <h4 className='text-center'>No Record Found</h4>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
