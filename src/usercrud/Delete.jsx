import {Form} from 'react-bootstrap'
import { useNavigate } from 'react-router'; 
import axios from 'axios';
import { useState } from 'react';

function Deleteuser() {
    const [id,setid]=useState()
    const nav=useNavigate()
    return ( 
        <div>
        <h2>Delete User Page</h2>
        <Form>
            <table>
                <tr>
                    <th>Employee Id </th>
                    <td><input type='number' onChange={(e)=>{setid(e.target.value)}}></input></td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type='button' value='Delete'
                        onClick={(e)=>{
                            e.preventDefault()
                            axios.delete('http://localhost:3000/employee/' + id)
                            .then(()=>{
                                nav('/')
                            })
                            .catch((err)=>{
                                console.log(err)
                            })
                        }}
                        ></input>
                    </td>
                </tr>
            </table>
        </Form>
        </div>
     );
}

export default Deleteuser;