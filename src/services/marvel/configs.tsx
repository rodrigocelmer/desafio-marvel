import md5 from "md5";

export default function createAuth() {
  const ts = new Date().getTime();
  const privateKey = "d491db83c7981d43c2fc49f6368c3524f826f312";
  const publicKey = "9882eab599a4b23c5e25e21f5dc3b9a5";
  const hash = md5(ts.toString() + privateKey + publicKey);
  return {
    ts,
    apikey: publicKey,
    hash,
  };
}
