import Editor from "@monaco-editor/react"
import { compile } from "./functions"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { loadingAtom, userCodeAtom, userInputAtom, userLangAtom, userOutputAtom, userThemeAtom } from "../store/atom/atoms"
import "../App.css"

export default function LeftContainer({ options }) {
    const $loading = useSetRecoilState(loadingAtom)
    const [userCode, $userCode] = useRecoilState(userCodeAtom)
    const userLang = useRecoilValue(userLangAtom)
    const userInput = useRecoilValue(userInputAtom)
    const $userOutput = useSetRecoilState(userOutputAtom)
    const userTheme = useRecoilValue(userThemeAtom)
    

    function callCompile() {
        compile($loading, userCode, userLang, userInput, $userOutput)
    }

    return (
        <div className="left-container">
            <Editor 
                options={options}
                height="100vh"
                width="100%"
                theme={userTheme[1]}
                language={userLang[1]}
                defaultLanguage="java"
                defaultValue="# Enter your code here"
                onChange={(val) => $userCode(val)}
            />
            <button className="run-btn" onClick={callCompile}>
                RUN
            </button>
        </div>
    )
}