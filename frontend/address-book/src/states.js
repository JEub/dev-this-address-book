import {atom} from "recoil";

export const searchInputState = atom({
    key:"search",
    default:""
})
export const currentSearchTerm = atom({
    key:"now",
    default:""
})
export const modalState = atom ({
    key: "modalState",
    default: false
})
export const modalData = atom ({
    key: "modalData",
    default: {
        firstName: "",
        lastName: "",
        street1: "",
        street2: "",
        city: "",
        state: ""
    }
})