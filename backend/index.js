const express = require("express")
const cors = require("cors")
const axios = require("axios")
const { createSubmissionOptions, getSubmissionOptions } = require("./utils/judge0")

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.post("/compile", async (req, res) => {
    let language = req.body.language
    let code = req.body.code
    let input = req.body.input

    console.log(language)
    console.log(code)
    console.log(input)

    try {
        code = btoa(code)
    } catch (error) {
        console.error("Error encoding code: " + e)
    }

    try {
        input = btoa(input)
    } catch (error) {
        console.error("Error encoding input: " + e)
    }

    console.log(language)
    console.log(code)
    console.log(input)

    const sendOption = createSubmissionOptions(language, code, input)
    const inputResponse = await axios.request(sendOption)

    console.log(inputResponse.data.token)

    const getOption = getSubmissionOptions(inputResponse.data.token)
    const outputResponse = await axios.request(getOption)

    console.log(outputResponse.data)
    
    let stdout = outputResponse.data.stdout
    let stderr = outputResponse.data.stderr
    let compileOutput = outputResponse.data.compile_output

    console.log(stdout)
    console.log(atob(stdout))

    console.log(stderr)
    console.log(atob(stderr))

    console.log(compileOutput)
    console.log(atob(compileOutput))

    try {
        stdout = stdout == null ? null : atob(stdout)
    } catch (e) {
        console.error("Error decoding stdout: " + e)
    }

    try {
        stderr = stderr == null ? null : atob(stderr)
    } catch (e) {
        console.error("Error decoding stderr: " + e)
    }

    try {
        compileOutput = compileOutput == null ? null : atob(compileOutput)
    } catch (e) {
        console.error("Error decoding compile output: " + e)
    }

    res.send({ stdout, stderr, compileOutput })
})

app.listen(port, () => console.log("Server has started on port " + port))