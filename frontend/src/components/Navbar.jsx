import Select from "react-select"
import { useRecoilState } from "recoil";
import { fontSizeAtom, userLangAtom, userThemeAtom } from "../store/atom/atoms"
import "./Navbar.css"
import "../App.css"
import { AllLanguages, AllThemes } from "./functions";


export function Navbar() {
    const [userLang, $userLang] = useRecoilState(userLangAtom)
    const [userTheme, $userTheme] = useRecoilState(userThemeAtom)
    const [fontSize, $fontSize] = useRecoilState(fontSizeAtom)

    const languages = [
        { value: "Java", label: "Java" },
        { value: "Python", label: "Python" },
        { value: "C", label: "C" },
        { value: "C++", label: "C++" }
    ]
    

    const themes = [
        { value: "Dark", label: "Dark"},
        { value: "Light", label: "Light"}
    ]

    return (
        <div className="navbar">
            <h1>CodeTable</h1>
            <Select options={languages} value={userLang[0]}
                onChange={(e) => $userLang(AllLanguages.get(e.value))} placeholder={userLang[0]} />
            <Select options={themes} value={userTheme[0]} 
                onChange={(e) => $userTheme(AllThemes.get(e.value))} placeholder={userTheme[0]} />
            <label htmlFor="">Font Size</label>
            <input type="range" min="18" max="30" value={fontSize} step="1" 
                onChange={(e) => $fontSize(e.target.value)} />
        </div>
    )
}