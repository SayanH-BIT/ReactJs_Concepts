import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Map = () => {
    const dummyArr = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
        },
        {
            "id": 6,
            "name": "Mrs. Dennis Schulist",
            "username": "Leopoldo_Corkery",
            "email": "Karley_Dach@jasper.info",
        },
        {
            "id": 7,
            "name": "Kurtis Weissnat",
            "username": "Elwyn.Skiles",
            "email": "Telly.Hoeger@billy.biz",
        },
        {
            "id": 8,
            "name": "Nicholas Runolfsdottir V",
            "username": "Maxime_Nienow",
            "email": "Sherwood@rosamond.me",
        },
        {
            "id": 9,
            "name": "Glenna Reichert",
            "username": "Delphine",
            "email": "Chaim_McDermott@dana.io",
        },
        {
            "id": 10,
            "name": "Clementina DuBuque",
            "username": "Moriah.Stanton",
            "email": "Rey.Padberg@karina.biz",
        }
    ]
    const dummyArr1 = ["superman", "batman", "shaktiman", "hanuman", "ironman", "antman"]
    //
    const mapped = dummyArr.map((ele, index) => (
        <h4 key={ele.id}>{ele.id}: {ele.name} <br />
            {ele.username} {ele.email}
            <br/> and index is {index}
        </h4>
    ))
    return (
        <div>
            <h1>Learning map function</h1>
            {/* normal data fetching from array */}
            {dummyArr1[0]} <br />
            {dummyArr1[1]} <br />
            {dummyArr1[2]} <br />
            {dummyArr1[3]} <br />
            {dummyArr1[4]} <br />
            {dummyArr1[5]} <br />
            <br />

            {/* data fetching from array using maop function */}
            {/* fetching array from outside using map method in return() */}
            <h3>stored array value in "mapped"</h3>
            <p>{mapped}</p>
            {/* directly using map method in return() */}
            <h4>directly using map method in return()</h4>
            {/* table format */}
            <table>
                <thead>
                    <td>ID</td>
                    <td>Name</td>
                    <td>UserName</td>
                    <td>Email</td>
                </thead>
                <tbody>
                    {
                        dummyArr.map((ele) => (
                            <tr key={ele.id}>
                                <td>{ele.id} </td>
                                <td>{ele.name} </td>
                                <td>{ele.username} </td>
                                <td>{ele.email} </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div >
    )
}

export default Map
