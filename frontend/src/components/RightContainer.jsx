import { useRecoilValue, useSetRecoilState } from "recoil"
import { loadingAtom, userInputAtom, userOutputAtom } from "../store/atom/atoms"
import spinner from "./spinner.svg"
import { clearOutput } from "./functions"
import "../App.css"



export default function RightContainer() {
    const $userInput = useSetRecoilState(userInputAtom)
    const loading = useRecoilValue(loadingAtom)
    const userOutput = useRecoilValue(userOutputAtom)
    const $userOutput = useSetRecoilState(userOutputAtom)

    return (
        <div className="right-container">
            <h4>Input:</h4>
            <div className="input-box">
                <textarea id="code-inp" onChange={(e) => $userInput(e.target.value)}></textarea>
            </div>
            <h4>Output:</h4>
            {loading ? (
                <div className="spinner-box">
                    <img src={spinner} alt="Loading..." />
                </div>
            ) : (
                <div className="output-box">
                    <pre>{userOutput}</pre>
                    <button className="clear-btn" onClick={() => clearOutput($userOutput)}>
                        Clear
                    </button>
                </div>
            )}
        </div>
    )
}