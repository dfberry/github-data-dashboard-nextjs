import {version, url} from '../package.json';


export function touch() {
    const event = new Date()
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', year: '2-digit', month: 'short', day: 'numeric' };
    
    const timestamp:string = event.toLocaleTimeString('en-US', options);

    return {
        timestamp,
        version,
        url
    };
  }