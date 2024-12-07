import './home.css'
import { useEffect, useState } from "react";
export default function House() {
    const [arryData, setarryData] = useState([]);
    const [search, setSearch] = useState();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((res) => setarryData(res))
    }, [])
    console.log(arryData);
    function getData(data){
    //   console.log(data)
    
    // const userSearch = arryData.filter()
    const filteredData = arryData.filter(item => item.title.includes(data));
    // console.log(filteredData);
    setarryData(filteredData)
    }
    return (
        <>
       <input type="text" placeholder='search' onChange={(e) => {getData(e.target.value)}}/>
       
     
        <h1>Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>user=Id</th>
                        <th>ID</th>
                        <th>title</th>
                        <th>body</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        arryData.map((val) => {
                            return (
                                <tr>
                                    <td>{val.userId}</td>
                                    <td>{val.id}</td>
                                    <td>{val.title}</td>
                                    <td>{val.body}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}