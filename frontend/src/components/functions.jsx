import axios from "axios"
import "../App.css"

export const AllLanguages = new Map([
	["Java", ["Java", "java", 91]],
	["Python", ["Python", "python", 92]],
	["C", ["C", "c", 50]],
	["C++", ["C++", "cpp", 54]]
])

export const AllThemes = new Map([
	["Dark", ["Dark", "vs-dark"]],
	["Light", ["Light", "light"]]
])

export async function compile($loading, userCode, userLang, userInput, $userOutput) {
	$loading(true)
	
	if (userCode === ``) {
		return
	}

	

	try {
		const request = await axios.post("http://localhost:3000/compile", {
			language: userLang[2],
			code: userCode,
			input: userInput
		})
		$userOutput(request.data.stdout || request.data.stderr || request.data.compileOutput)

	} catch (error) {
		console.error(error);
		$userOutput("Error: " + (error.response ? error.response.data.error : error.message))
	}

	$loading(false)
}

export function clearOutput($userOutput) {
	$userOutput("")
}

