import md5 from 'md5'

export default function createAuth() {
    const ts = new Date().getTime()
    const privateKey = '976d1e267e52f00bc98d37424363d56328be609d'
    const publicKey = '48462bd0c57003ff9c883f2ce138866d'
    const hash = md5(ts.toString() + privateKey + publicKey)
    return {
        ts,
        apikey: publicKey,
        hash
    }
}