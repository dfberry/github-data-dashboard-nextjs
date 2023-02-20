export async function repos() {
  try {
    const base = process.env.REACT_APP_FN_BASE;
    const code = process.env.REACT_APP_FN_ORG_CODE;

    if (!base) throw Error("REACT_APP_FN_BASE is empty");
    if (!code) throw Error("REACT_APP_FN_ORG_CODE is empty");

    console.log(`base length = ${base.length}`);
    console.log(`code = ${code.length}`);

    const url = `${base}/org?code=${code}`;
    console.log(`org url = ${url.length}`);

    const response = await fetch(url);

    if (response.ok) {
      const json: any = await response.json();
      console.log(`repos length=${json.length}`);
      return json;
    } else {
      throw Error(`${response.status}: ${response.statusText}`);
    }
  } catch (err) {
    console.log(`repos function error = ${err}`);
    return [];
  }
}
