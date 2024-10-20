require("dotenv").config()

function createSubmissionOptions(language, code, input) {
    const options = {
        method: 'POST',
        url: 'https://judge0-ce.p.rapidapi.com/submissions',
        params: {
            base64_encoded: 'true',
            wait: 'true',
            fields: '*'
        },
        headers: {
            'x-rapidapi-key': process.env.RAPIDAPI_KEY,
            'x-rapidapi-host': process.env.RAPIDAPI_HOST,
            'Content-Type': 'application/json'
        },
        data: {
            language_id: language,
            source_code: code,
            stdin: input
        }
    };
    return options
}

function getSubmissionOptions(token) {
    const options = {
        method: 'GET',
        url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
        params: {
            base64_encoded: 'true',
            fields: '*'
        },
        headers: {
            'x-rapidapi-key': process.env.RAPIDAPI_KEY,
            'x-rapidapi-host': process.env.RAPIDAPI_HOST
        }
    };

    return options
}

module.exports = {
    createSubmissionOptions,
    getSubmissionOptions
}