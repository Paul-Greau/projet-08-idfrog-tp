import {atom} from "recoil";

export const profileConnexionstate = atom({
    key: "profileConnexion",
    default: {
        isLogged: false,
        id: null,
        pseudo: null,
        token: null
    }
})