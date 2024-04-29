import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-regular-svg-icons"; */
import { FaRegUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Container } from 'react-bootstrap';


export const Navbar = ({ authenticate, setAuthenticate }) => {
    const menuList = [
        'Shop All',
        'Peach & Lily',
        'Peach Slices',
        'Bestsellers',
        'Brands',
        'Glass Skin Serum',
        'Peach Perks'
    ]

    console.log('auth', authenticate)
    const navigate = useNavigate();

    return (    
    <Container>
        <div className="login_section">
            {
                authenticate ? (
                    <div onClick={()=>setAuthenticate(false)} >
                        <FaRegUser /><span>로그아웃</span>
                    </div>
                ) : (
                    <div onClick={()=>navigate("/login")} >
                        <FaRegUser /><span>로그인</span>
                    </div>
                )
            }
            {/* <FontAwesomeIcon icon={faUser} /> */}
            
        </div>

        <div className="logo_section">
            <h1 className='logo'>
                <Link to="/">
                <img src="https://www.peachandlily.com/images/PeachLily_logo_416x60.png" alt="로고" />
                </Link>
            </h1>
        </div>       

        <div className="gnb_section">
            <ul className='gnb'>
                {menuList.map((menu, index)=>(
                    <li key={ index }>{ menu }</li>
                ))}
            </ul>
            <div className="search_area">
                <label htmlFor="search" className='search_box'>
                    <FiSearch size="20" />
                    <input type="text" id="search" placeholder='제품검색'/>
                </label>
            </div>
        </div> 
    </Container>
  )
}
