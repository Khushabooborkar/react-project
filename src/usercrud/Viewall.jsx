import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap'
import axios from 'axios'

function Viewalluser() {
    const [emp, setemp] = useState([
        // {
        // "id": 101,
        // "name":"Khushaboo",
        // "email":"khushaboo@gmail.com",
        // "mobno": 9563285326
        // }
    ])
    const viewall = () => {
        axios.get('http://localhost:3000/employee')
            .then((res) => {
                console.log("Connect")
                console.log(res.data)
                setemp(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(()=>{
        viewall()
    },[])
    return (
        <>
            <h2>View All User Page</h2>
            <Table>
                <thead>
                    <tr>
                        <th>Emp Id</th>
                        <th>Emp Name</th>
                        <th>Emp Email</th>
                        <th>Emp Mobile No</th>
                    </tr>
                </thead>

                {
                    emp.map((e) => (
                        <tbody>
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.mobno}</td>
                            </tr>
                        </tbody>
                    ))
                }

            </Table>
        </>
    );
}

export default Viewalluser;