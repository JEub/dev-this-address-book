import {atom} from "recoil";

export const searchInputState = atom({
    key:"search",
    default:""
})
export const currentSearchTerm = atom({
    key:"now",
    default:""
})

export const currentUser = atom({
    key:"username",
    default: ""
})

export const currentPassword = atom({
    key:"password",
    default: ""
})