import axios from "axios";
import Diamond from "../../models/Diamond";
import {
    MY_SERVER,
    MY_SERVER_ADD_DIAMOND,
    MY_SERVER_DEL_DIAMOND,
    MY_SERVER_UPD_DIAMOND,
    MY_SERVER_AVG_CUT,
    MY_SERVER_IDEAL,
    MY_SERVER_MAX,
    MY_SERVER_MEAN,
    MY_SERVER_PREMIUM,
    MY_SERVER_PRICE_AVG,
    
} from "../../env"
import { Dictionary } from "@reduxjs/toolkit";

export function getDiamonds() {
    return new Promise<{ data: Diamond[] }>((resolve) =>
        axios.get(MY_SERVER).then(res => resolve({ data: res.data }))
    );
}

export function getAvgCut() {
    return new Promise<{ data: number}>((resolve) =>
        axios.get(MY_SERVER_AVG_CUT).then(res => resolve({ data: res.data }))
    );
}

export function getIdeal() {
    return new Promise<{ data: string }>((resolve) =>
        axios.get(MY_SERVER_IDEAL).then(res => resolve({ data: res.data }))
    );
}

export function getMean() {
    return new Promise<{ data: number }>((resolve) =>
        axios.get(MY_SERVER_MEAN).then(res => resolve({ data: res.data }))
    );
}

export function getMax() {
    return new Promise<{ data: number }>((resolve) =>
        axios.get(MY_SERVER_MAX).then(res => resolve({ data: res.data }))
    );
}

export function getPremium() {
    return new Promise<{ data: string }>((resolve) =>
        axios.get(MY_SERVER_PREMIUM).then(res => resolve({ data: res.data }))
    );
}

export function getPriceAvg() {
    return new Promise<{ data: number }>((resolve) =>
        axios.get(MY_SERVER_PRICE_AVG).then(res => resolve({ data: res.data }))
    );
}


// export function addDiamond(new_student: Student) {
//     return new Promise<{ data: Student }>((resolve) =>
//         axios.post(MY_SERVER + "add", new_student).then(res => resolve({ data: res.data }))
//     );
// }


// export function updDiamond(new_student: Student) {
//     return new Promise<{ data: Student }>((resolve) =>
//         axios.post(MY_SERVER + "upd", new_student).then(res => resolve({ data: res.data }))
//     );
// }
