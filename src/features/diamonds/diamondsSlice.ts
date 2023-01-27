import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import Diamond from '../../models/Diamond';
import { getDiamonds,
        getAvgCut,
        getIdeal,
        getMax,
        getMean,
        getPremium,
        getPriceAvg } from './diamondsAPI';

export interface diamondState {
    diamonds: Diamond[]
    updateFlag : boolean
    avg_cut : any
    ideal : any
    max : any
    mean : any
    premium : any
    price_avg : any
}

const initialState: diamondState = {
    diamonds: [],
    updateFlag: false,
    avg_cut :0,
    ideal :0 ,
    max :0 ,
    mean :0 ,
    premium : 0,
    price_avg : 0

    
};

export const getDiamondsAsync = createAsyncThunk(
    'diamond/getDiamonds',
    async () => {
        const response = await getDiamonds();
        return response.data;
    }
);

export const getAvgCutAsync = createAsyncThunk(
    'diamond/getAvgCut',
    async () => {
        const response = await getAvgCut();
        return response.data;
    }
);

export const getIdealAsync = createAsyncThunk(
    'diamond/getIdeal',
    async () => {
        const response = await getIdeal();
        return response.data;
    }
);

export const getMaxAsync = createAsyncThunk(
    'diamond/getMax',
    async () => {
        const response = await getMax();
        return response.data;
    }
);

export const getMeanAsync = createAsyncThunk(
    'diamond/getMean',
    async () => {
        const response = await getMean();
        return response.data;
    }
);

export const getPremiumAsync = createAsyncThunk(
    'diamond/getPremium',
    async () => {
        const response = await getPremium();
        return response.data;
    }
);

export const getPriceAvgAsync = createAsyncThunk(
    'diamond/getPriceAvg',
    async () => {
        const response = await getPriceAvg();
        return response.data;
    }
);

// export const upddiamondAsync = createAsyncThunk(
//     'diamond/upddiamond',
//     async (new_diamond: diamond) => {
//         const response = await upddiamond(new_diamond);
//         return response.data;
//     }
// );
// export const adddiamondAsync = createAsyncThunk(
//     'diamond/adddiamond',
//     async (new_diamond: diamond) => {
//         const response = await adddiamond(new_diamond);
//         return response.data;
//     }
// );



export const diamondSlice = createSlice({
    name: 'diamond',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getDiamondsAsync.fulfilled, (state, action) => {
                state.diamonds = action.payload;
            }) 
            .addCase(getAvgCutAsync.fulfilled, (state, action) => {
                state.avg_cut = action.payload;
            })
            .addCase(getIdealAsync.fulfilled, (state, action) => {
                state.ideal = action.payload;
            })
            .addCase(getMaxAsync.fulfilled, (state, action) => {
                state.max = action.payload;
            })
            .addCase(getMeanAsync.fulfilled, (state, action) => {
                state.mean = action.payload;
            })
            .addCase(getPremiumAsync.fulfilled, (state, action) => {
                state.premium = action.payload;
            })
            .addCase(getPriceAvgAsync.fulfilled, (state, action) => {
                state.price_avg = action.payload;
            })

            // .addCase(adddiamondAsync.fulfilled, (state, action) => {
            //     console.log(action.payload)
            //     //   state.status = 'idle';
            //       state.diamonds.push( action.payload);
            // }) .addCase(upddiamondAsync.fulfilled, (state, action) => {
            //     // console.log(action.payload)
            //     //   state.status = 'idle';
            //       state.updateFlag =! state.updateFlag;
            // });

    },
});

export const { } = diamondSlice.actions;
export const selectdiamonds = (state: RootState) => state.diamond.diamonds;
export const selectUpdate = (state: RootState) => state.diamond.updateFlag;
export const selectAvgCut = (state: RootState) => state.diamond.avg_cut;
export const selectIdeal = (state: RootState) => state.diamond.ideal;
export const selectMax = (state: RootState) => state.diamond.max;
export const selectMean = (state: RootState) => state.diamond.mean;
export const selectPremium = (state: RootState) => state.diamond.premium;
export const selectAvgPrice = (state: RootState) => state.diamond.price_avg;
export default diamondSlice.reducer;
