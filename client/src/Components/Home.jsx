import React from "react"
import axios from 'axios'
import { useState,useEffect } from "react"
import { Add } from "./Add";
import { Link } from "react-router-dom";

export default function Home() {

    const [read, setRead] = useState([]);

    useEffect(()=>{
        const fetchAllData = async () => {
            try {
                const res = await axios.get("http://localhost:8080/read");
                setRead(res.data);
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchAllData();
    },[])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/delete/${id}`);
            window.location.reload();
            console.log("Successfully Deleted!")
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
        <div>
            <div className="ReadHeader">
                <h1>Read Table Data</h1>
                <button><Link to="/add">Add new data</Link></button>
            </div>
            {read.map((data) => (
                <div key={data.ID}>
                    <h2>{data.Name}</h2>
                    <h2>{data.Age}</h2>
                    <h2>{data.Country}</h2>
                    <h2>{data.Position}</h2>
                    <h2>${data.Wage}</h2>
                    <button className="delete" onClick={()=>handleDelete(data.ID)}>Delete</button>
                    <button className="update"><Link to={`/update/${data.ID}`}>Update</Link></button>
                    <hr></hr>
                </div>
            ))}
        </div>
        </>
    )
}