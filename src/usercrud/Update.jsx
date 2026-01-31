import { useState } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router';

function Updateuser() {
    const [id,setid]=useState()
    const [name,setname]=useState()
    const [email,setemail]=useState()
    const [mobno,setmobno]=useState()

    const nav=useNavigate()
    return ( 
        <div>
        <h2>Update User Page</h2>
        <Form>
            <table>
                <tr>
                    <th>Employee id : </th>
                    <td><input type='number' onChange={(e)=>{setid(e.target.value)}} value={id}></input></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type='button' value='View Emp' 
                    onClick={(e)=>{
                        e.preventDefault() 
                        axios.get('http://localhost:3000/employee/'+ id) 
                        .then(
                            (res)=>{
                                console.log('sucess')
                                console.log(res.data)
                                setname(res.data.name)
                                setemail(res.data.email)
                                setmobno(res.data.mobno)
                            }
                        ) 
                        .catch((err)=>{
                            console.log(err)
                            })
                        }}
                        ></input></td>
                </tr>
                <tr>
                    <th>Employee name : </th>
                    <td><input type='text' onChange={(e)=>{setname(e.target.value)}} value={name}></input></td>
                </tr>
                <tr>
                    <th>Employee email : </th>
                    <td><input type='email' onChange={(e)=>{setemail(e.target.value)}} value={email}></input></td>
                </tr>
                <tr>
                    <th>Employee mobno : </th>
                    <td><input type='tel' onChange={(e)=>{setmobno(e.target.value)}} value={mobno}></input></td>
                </tr>
                <tr>
                    <td><input type='reset' value='Reset'></input></td>
                    <td><input type='button' value='Update'
                    onClick={(e)=>{
                        e.preventDefault()
                        axios.put('http://localhost:3000/employee/'+ id ,{name:name,email:email,mobno:mobno})
                        .then((res)=>{
                            console.log('Update Successfully')
                            console.log(res.data)
                            nav('/')
                        })
                        .catch((err)=>{
                            console.log(err)
                            })
                    }}
                    ></input></td>
                </tr>
            </table>
        </Form>
        </div>
     );
}

export default Updateuser;