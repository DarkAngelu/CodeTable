import { atom } from "recoil"

export const userCodeAtom = atom({
    key: "userCode",
    default: ``
})

export const userLangAtom = atom({
    key: "userLang",
    default: ["Java", "java", 91]
})

export const userThemeAtom = atom({
    key: "userTheme",
    default: ["Dark", "vs-dark"]
})

export const fontSizeAtom = atom({
    key: "fontSize",
    default: 20
})

export const userInputAtom = atom({
    key: "userInput",
    default: ""
})

export const userOutputAtom = atom({
    key: "userOutput",
    default: ""
})

export const loadingAtom = atom({
    key: "loading",
    default: false
})

export const userIdAtom = atom({
    key: "userId",
    default: ""
})