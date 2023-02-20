export async function repos() {
  const base = process.env.REACT_APP_FN_BASE;
  const code = process.env.REACT_APP_FN_ORG_CODE;
  const url = `${base}/org?code=${code}`;

  const response = await fetch(url);

  if (response.ok) {
    const json: any = await response.json();
    console.log(`repos length=${json.length}`);
    return json;
  } else {
    const error: any = await response.text();
    console.log(error)
    return [];
  }

  // json.map((repo:any):any =>{
  //   return repo.repositoryName = repo.repositoryName.toLowerCase()
  // })
}
