export async function repos() {
  try {
    const url = process.env.REACT_APP_REPO_LIST_URL;
    if (!url) throw Error("REACT_APP_REPO_LIST_URL is empty");
    console.log(`url length = ${url.length}`);

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
