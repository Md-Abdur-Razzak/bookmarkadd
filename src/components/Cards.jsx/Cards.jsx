
import { useState } from 'react';
import Card from '../Card/Card';
import { useEffect } from 'react';

const Cards = ({hadladalingChange}) => {
    const [datas , setData]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
   
    return (
        <div className='md:order-first -order-last'>
           <div>
                {
                    datas.map(data=><Card 
                        key={data.id}
                        data={data}
                        hadladalingChange={hadladalingChange}
                    ></Card>)
                }
           </div>
        </div>
    );
};

export default Cards;