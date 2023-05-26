import {atom} from "recoil";

export const searchInputState = atom({
    key:"search",
    default:""
})
export const currentSearchTerm= atom({
    key:"now",
    default:""
})