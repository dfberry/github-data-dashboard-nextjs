export async function repos() {
  const base = process.env.REACT_APP_FN_BASE;
  const code = process.env.REACT_APP_FN_ORG_CODE;

  if(!base) throw Error("REACT_APP_FN_BASE is empty")
  if(!code) throw Error("REACT_APP_FN_ORG_CODE is empty")

  console.log(`base = ${base}`)
  console.log(`code = ${code}`)

  const url = `${base}/org?code=${code}`;
  console.log(`org url = ${url}`)

  const response = await fetch(url);

  if (response.ok) {
    const json: any = await response.json();
    console.log(`repos length=${json.length}`);
    return json;
  } else {
    const error: any = await response.text();
    console.log(`repos fetch error ${JSON.stringify(error)}`)
    return [];
  }

  // json.map((repo:any):any =>{
  //   return repo.repositoryName = repo.repositoryName.toLowerCase()
  // })
}
