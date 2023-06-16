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

export const currentModalState = atom ({
    key:"modalState",
    default: false
})

export const currentModalData = atom ({
    key:"modalData",
    default: {
        firstName: "",
        lastName: "",
        street1: "",
        street2: "",
        city: "",
        state: ""
    }
})

export const currentModalEditState = atom ({
    key: "iseditable",
    default: true
})