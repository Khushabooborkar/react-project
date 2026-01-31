import { useState} from 'react';
import { Form } from 'react-bootstrap'
import axios from 'axios'
import {useNavigate} from 'react-router'

function Createuser() {
    const [id, setid] = useState()
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [mobno, setmobno] = useState()

    const nav = useNavigate()
    return (
        <>
            <h2>Create Page</h2>
            <Form>
                <table align='center'>
                    <tr>
                        <th>Employee ID : </th>
                        <td><input type='number' placeholder='Enter employee Id' onChange={(e) => { setid(e.target.value) }}></input></td>
                    </tr>
                    <tr>
                        <th>Employee Name : </th>
                        <td><input type='text' placeholder='Enter employee name' onChange={(e) => { setname(e.target.value) }}></input></td>
                    </tr>
                    <tr>
                        <th>Employee Email : </th>
                        <td><input type='email' placeholder='Enter employee email' onChange={(e) => { setemail(e.target.value) }}></input></td>
                    </tr>
                    <tr>
                        <th>Employee Mobile No : </th>
                        <td><input type='tel' placeholder='Enter employee mobno' onChange={(e) => { setmobno(e.target.value) }}></input></td>
                    </tr><br></br>
                    <tr>
                        <td>
                            <input type='reset' value='Reset'></input>
                        </td>
                        <td>
                            <input type='button' value='Submit'
                                onClick={(e) => {
                                    e.preventDefault()
                                    const emp = {
                                        id : id,
                                        name : name,
                                        email : email,
                                        mobno : mobno
                                    }
                                    axios.post('http://localhost:3000/employee',emp)
                                        .then((res) => {
                                            console.log("Connect")
                                            console.log(res.data)
                                            nav('/')
                                        })
                                        .catch((err) => {
                                            console.log(err)
                                        })
                                }}></input>
                        </td>
                    </tr>
                </table>
            </Form>
        </>
    );
}

export default Createuser;