import React, { useEffect, useState } from 'react'
import axios from 'axios'

const baseURL = "https://jsonplaceholder.typicode.com/users";

const IndexPage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(baseURL)
                setData(response.data)
                console.log(response);
            } catch (error) {
                console.log("error is = ", error);
            }
        }
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </thead>
                <tbody>
                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default IndexPage
