import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Description() {

    const [user, setUser] = useState([]);
    const { id } = useParams();

    async function show() {
        await axios.get(`http://localhost:2000/api/book/${id}`).then((res) => {
            setUser(res.data.user)
        })
    }
    useEffect(() => {
        show();
        console.log(id);

    }, [])
    return (
        <>
        <div className='col-md-3 shadow mx-5 mt-5 p-5 bg-light'>
            <div className="card" >
                {/* <img src={user.image} className="card-img-top img-fluid mx-auto" alt="..." style={{ width: "200px" }} /> */}
                <div className="card-body">
                    <h5 className="card-title"><b>Title :</b> {user.book_name}</h5>
                    <h5 className="card-title"><b>Code no. :</b>{user.book_codeNumber}</h5>
                    <h5 className="card-title"><b>author :</b>{user.book_auther}</h5>
                    <h5 className="card-title"><b>rating :</b>{user.book_reting}</h5>
                    <h5 className="card-title"><b>price :</b>{user.book_prise}</h5>

                </div>
            </div>
        </div>
        </>
    );
}

export default Description;