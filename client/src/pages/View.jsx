import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function View(props) {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    async function show() {
        try {
            const res = await axios.get('http://localhost:2000/api/book/');
            setUser(res.data.user);
            // console.table(res.data.user);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    }

    function trash(id) {
        if (confirm("Are You Sure Want to DELETE this Item")) {
            axios.delete(`http://localhost:2000/api/book/${id}`)
                .then(() => {
                    show();

                })

        }
    }



    useEffect(() => {
        show();
    }, []);

    return (
        <div className="container">
            {
                loading ? (
                    <div className="text-center d-flex">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                ) : user.length > 0 ? (
                    <table className='table table-hover table-bordered text-center mt-5 shadow table-dark table-striped'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>CODE.NO.</th>
                                <th>AUTHER</th>
                                <th>RETING</th>
                                <th>PRISE</th>
                                <th>BUTTON</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map((items, index) => (
                                    <tr key={items._id}>
                                        <td>{items._id}</td>
                                        <td>{items.book_name}</td>
                                        <td>{items.book_codeNumber}</td>
                                        <td>{items.book_auther}</td>
                                        <td><b>{items.book_reting}</b><i class="fa-solid fa-star"></i></td>
                                        <td>{items.book_prise}</td>
                                        <td>
                                            <button onClick={() => trash(items._id)} className='mx-3'><i class="fa-solid fa-trash-can"></i></button>
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 10 10"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" /></svg> */}

                                            <button><Link to={`/update/${items._id}`} ><i class="fa-solid fa-pen-to-square"></i></Link></button>
                                            <button className='mx-3'><Link to={`/Des/${items._id}`} ><i class="fa-solid fa-panorama"></i></Link></button>

        
                                        </td>


                                    </tr>
                                ))
                            }
                        </tbody >
                    </table >
                ) : (
                    <div className="text-center bg-primary p-3 mt-5">
                        No data available
                    </div>
                )
            }
        </div >
    );
}

export default View;
