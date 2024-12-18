import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><b>I<i class="fa-solid fa-heart"></i>BOOK</b></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to={"/"}><b><em>Home</em></b></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to={"/view"}><b><em>View</em></b></Link>
                            </li>
                           
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
