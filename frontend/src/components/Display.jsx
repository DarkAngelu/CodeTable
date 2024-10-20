import { useRecoilValue } from "recoil"
import LeftContainer from "./LeftContainer"
import { Navbar } from "./Navbar"
import RightContainer from "./RightContainer"
import { fontSizeAtom } from "../store/atom/atoms"
import "../App.css"





export function Display() {
    const fontSize = useRecoilValue(fontSizeAtom)

	const options = {
		fontSize: fontSize
	}

    return (
        <div className="App">
            <Navbar />
            <div className="main">
                <LeftContainer options={options} />
                <RightContainer />
            </div>
        </div>
    )
}