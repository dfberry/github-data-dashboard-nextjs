import { clean50 } from "../utilities/compare";

export async function summary():Promise<any>{
    try {
      const url = process.env.REACT_APP_REPO_SUMMARY_URL;
      if (!url) throw Error("REACT_APP_REPO_SUMMARY_URL is empty");
      console.log(`url length = ${url.length}`);
  
      const response = await fetch(url);
  
      if (response.ok) {
        const json: any = await response.json();
        console.log(`summary length=${json.length}`);

        json.map((item: any) => {
            const newDate = item.date.slice(0, 10);
            item.date = newDate;
            return item;
          });
          const arrangedData = {
            summaryText: `Last scrape on ${json[0]?.date} with ${json[0]?.count} repos.`,
            raw: clean50(json),
          };

        return arrangedData;
      } else {
        throw Error(`${response.status}: ${response.statusText}`);
      }
    } catch (err) {
      console.log(`summary function error = ${err}`);
      return {}
    }
  }