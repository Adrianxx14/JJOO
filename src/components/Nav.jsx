import React from 'react'
import Button from './Button'
import icono from '../assets/img/icono.jpg'

const Nav = () => {
  return (
    <>
    <nav className='navbar navbar-expand-lg border mb-3'>
        <div className='d-flex flex-row justify-content-around w-100'>
            <div>
                <img src={icono} alt="" style={{width:"100px", height:"70px"}} />
            </div>
            <Button title="Juegos Olimpicos" className="btn btn-md  m-1"/>
            <Button title="Atletas" className="btn btn-md  m-1"/>
            <Button title="Deportes" className="btn btn-md  m-1"/>
            <Button title="Noticias" className="btn btn-md  m-1"/>
            <Button title="Olympic Channel" className="btn btn-md  m-1"/>
            <Button title="Let's Move" className="btn btn-md  m-1"/>
            <Button title={<i class="bi bi-search"></i>} className="btn btn-md m-1"/>
            <div className=''>
                <Button title={<i class="bi bi-list"></i>} className="btn btn-lg m-1"/>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Nav