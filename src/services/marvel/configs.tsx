import md5 from 'md5'

export default function createAuth() {
    const ts = new Date().getTime()
    const privateKey = 'b5ab5c534ff15fe696fe8cdf38d882dd9921bdc5'
    const publicKey = '842e6638e9318ab241673f2476499cbd'
    const hash = md5(ts.toString() + privateKey + publicKey)
    return {
        ts,
        apikey: publicKey,
        hash
    }
}