import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../app/hooks'
import { getDiamondsAsync, selectdiamonds } from './diamondsSlice'

const Showdiamonds = () => {


    // את החיפוש ואת הדיאמונדס עצמם עם מתודת גט 
    const [search, setsearch] = useState("")
    const diamonds = useAppSelector(selectdiamonds);


  return (
    <div>

    <h3>search for spec diamonds by color:</h3> <input onChange={(e) => setsearch(e.target.value)} />


    
    {diamonds.filter(d => d.color.includes(search)).map((d, i) => <div key={i}>
        
                ID: {d.ID}
                carat: {d.carat},
                clarity:  {d.clarity},
                color : {d.color},
                cut :{d.cut},
                depth :{d.depth},
                price :{d.price},
                table :{d.table},
                x :{d.x},
                y :{d.y},
                z :{d.z}
                <hr></hr>
                {/* <button onClick={() => upd_grade(d.name, d.email)}>upd_grade</button> */}
            </div>)}
    </div>
  )
}

export default Showdiamonds