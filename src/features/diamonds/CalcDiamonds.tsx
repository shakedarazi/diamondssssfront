
import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import Diamond from '../../models/Diamond';
import {
    selectdiamonds,
    selectAvgCut,
    selectAvgPrice,
    selectIdeal,
    selectMax,
    selectMean,
    selectPremium,
    selectUpdate,
    getDiamondsAsync,
    getAvgCutAsync,
    getIdealAsync,
    getMaxAsync,
    getMeanAsync,
    getPremiumAsync,
    getPriceAvgAsync
} from './diamondsSlice';

// חישובים מהBACK
// פונקציות אסינכוריניות של החישובים
// יוזסלקט של הסטייטים של כלל החישובים שהוגדרו באינישיאל 
export function CalcDiamonds() {
    const diamonds = useAppSelector(selectdiamonds);
    const updateFlag = useAppSelector(selectUpdate);
    const avgCut = useAppSelector(selectAvgCut);
    const ideal = useAppSelector(selectIdeal);
    const max = useAppSelector(selectMax);
    const mean = useAppSelector(selectMean);
    const premium = useAppSelector(selectPremium);
    const avg_price = useAppSelector(selectAvgPrice);
    // type MyThunk = ThunkAction<Promise<number>, {}, {}, AnyAction> | ThunkAction<Promise<string>, {}, {}, AnyAction>

    // const buttons = [
    //     { text: 'Show Max', value: max, action: getMaxAsync as unknown as MyThunk },
    //     { text: 'Show Mean', value: mean, action: getMeanAsync as unknown as MyThunk },
    //     { text: 'Show Average Cut', value: avgCut, action: getAvgCutAsync as unknown as MyThunk },
    //     { text: 'Show Ideal', value: ideal, action: getIdealAsync as unknown as MyThunk },
    //     { text: 'Show Premium', value: premium, action: getPremiumAsync as unknown as MyThunk },
    //     { text: 'Show Price Average', value: avg_price, action: getPriceAvgAsync as unknown as MyThunk },
    //   ];

    const dispatch = useAppDispatch();




    useEffect(() => {
        dispatch((getDiamondsAsync()))
    }, [updateFlag])

    return (
        <div>

            <h3>Diamonds calculating</h3> <br></br>

            <button onClick={() => dispatch(getMaxAsync())}>show max </button>
            { max.max_price !== 0 && <p>{max.max_price}</p>} 

            <button onClick={() => dispatch(getMeanAsync())}>show mean</button>
            { mean.mean_price !== 0 && <p>{mean.mean_price}</p>} 

            <button onClick={() => dispatch(getAvgCutAsync())}>show averege cut</button>
            { avgCut.cut_carat_avg !== 0 && <p>{avgCut.cut_carat_avg}</p>} 

            <button onClick={() => dispatch(getIdealAsync())}>show ideal</button>
            { ideal.ideal_count !== '' && <p>{ideal.ideal_count}</p>} 


            <button onClick={() => dispatch(getPremiumAsync())}>show premium</button>
            { premium.median_carat !== '' && <p>{premium.median_carat}</p>}

            <button onClick={() => dispatch(getPriceAvgAsync())}>show price avg</button>
            { avg_price.color_price_avg !== 0 && <p>{avg_price.color_price_avg}</p>} 

            <hr></hr>


        </div>
    );
}

// grades :{stu.grades && stu.grades.map((gr, i) => <div key={i}>{gr.grade > 0 && gr.name}  {gr.grade > 0 && gr.grade}</div>)}
