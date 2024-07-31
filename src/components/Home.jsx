import React from 'react'
import Card from './Card'
import Button from './Button'
import card1 from '../assets/img/card1.png'


const Home = () => {
  return (
    <>
        <div className=''>
            <div className="row">
               <div className='col-6 text-center'>
                    <p className=''>
                        <h1 style={{fontSize:"70px"}}>JUEGOS OLÍMPICOS
                        </h1>
                    </p>
               </div>
                <div className='col-6'>
                <p className=''>
                    <h4>Los Juegos Olímpicos son la única 
                        competición verdaderamente global, 
                        multideportiva y que celebra el 
                        deporte en el mundo. Con más de 
                        200 países que participan en más de 
                        400 eventos entre los Juegos de 
                        Verano y de Invierno, los Juegos 
                        son donde todo el mundo acude a competir
                        , a inspirarse y a estar juntos.
                    </h4>
                </p>
                </div>
            </div>
            <div className='bg-info mb-3' style={{height:"550px",width:"100%", backgroundImage:`url('https://img.olympics.com/images/image/private/t_s_pog_overview_hero_xl/f_auto/primary/mk0vuxgrzgr7e8itpj5i')`}}>
                <div className="row" style={{height:"550px"}}>
                    <div className="col-8 d-flex align-items-center justify-content-center">
                            <p className='m-5' style={{fontSize:"20px", color:"white"}}>6 de febrero - 22 de febrero <br />
                                <p style={{fontSize:"70px", color:"white"}}>MILÁN CORTINA 2026</p>
                            </p>
                    </div>
                    <div className="col-4 d-flex align-items-center justify-content-center">
                            <Card img={card1} ancho={"210px"} npage={<Button title="Explora" className="btn btn-sm btn-secondary w-100 text-start"/>}/>
                    </div>
                </div>
            </div>
            {/* Div de cards */}
            <div>
                <div className="d-flex flex-row justify-content-around ">
                <Card img={card1} npage={<Button title="Explora" className="btn btn-sm btn-secondary w-100 text-start"/>}/>
                <Card img={card1} npage={<Button title="Explora" className="btn btn-sm btn-secondary w-100 text-start"/>}/>
                <Card img={card1} npage={<Button title="Explora" className="btn btn-sm btn-secondary w-100 text-start"/>}/>
                <Card img={card1} npage={<Button title="Explora" className="btn btn-sm btn-secondary w-100 text-start"/>}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home