import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import Diamond from '../../models/Diamond';
import { selectdiamonds, selectUpdate } from './diamondsSlice';

// הוספה עדכון מחיר של אחד מהם ומחיקה 
// שדות אינפוטים של כל הקיז 
// יוזסטייטים שיועדכנו מכל אחד מהם לפי ה הוספה 
// מתודת הוספה , את מערך הדיאמונדס עצמו, מתודת עדכון ומתודת מחיקה 
const CrudDiamonds = () => {
    const diamonds = useAppSelector(selectdiamonds);
    const updateFlag = useAppSelector(selectUpdate);
    
    const [carat, setCarat] = useState(0)
    const [clarity, setClarity] = useState('')
    const [color, setColor] = useState('')
    const [cut, setCut] = useState('')
    const [depth, setDepth] = useState(0)
    const [price, setPrice] = useState(0)
    const [table, setTable] = useState(0)
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [z, setZ] = useState(0)

    // const build_student = () => {
    //     console.log("test")
    //     const temp_student: StudentModel = { email, name, grades: [
    //        {  name: "computers", grade: comp },
    //         { name: "math", grade: math },
    //         { name: "english", grade: eng }] }
    //     dispatch(addStudentAsync(temp_student))

    // }
    // const upd_diamond_price = (uName:string,old_email:string) => {
    //     console.log("test")
    //     const temp_student: StudentModel = { email:old_email,name: uName, grades: [
    //        {  name: "computers", grade: comp },
    //         { name: "math", grade: math },
    //         { name: "english", grade: eng }] }
    //     dispatch(updStudentAsync(temp_student))

    // }
  return (
    <div><hr></hr> <h3>Diamonds - add, delete, change price</h3>

         {/* <button onClick={() => build_student()}>Add</button> */}

            carat:    <input onChange={(e) => setCarat(+e.target.value)} />
            clarity:  <input onChange={(e) => setClarity(e.target.value)} />
            color:  <input onChange={(e) => setColor(e.target.value)} />
            cut:  <input onChange={(e) => setCut(e.target.value)} />
            depth:  <input onChange={(e) => setDepth(+e.target.value)} />
            price:  <input onChange={(e) => setPrice(+e.target.value)} />
            table:  <input onChange={(e) => setTable(+e.target.value)} />
            x:  <input onChange={(e) => setX(+e.target.value)} />
            y:  <input onChange={(e) => setY(+e.target.value)} />
            z:  <input onChange={(e) => setZ(+e.target.value)} />
            <br></br><hr></hr>
    </div>
  )
}

export default CrudDiamonds