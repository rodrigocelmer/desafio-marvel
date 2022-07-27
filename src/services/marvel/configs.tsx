import md5 from 'md5'

export default function createAuth() {
    const ts = new Date().getTime()
    const privateKey = 'c2fee6a89fcb6579ca2f62c697e32f1f06aaa053'   //'976d1e267e52f00bc98d37424363d56328be609d'
    const publicKey = 'c196bc828c4f1d7e999cd99121b27809'    //'48462bd0c57003ff9c883f2ce138866d'
    const hash = md5(ts.toString() + privateKey + publicKey)
    return {
        ts,
        apikey: publicKey,
        hash
    }
}