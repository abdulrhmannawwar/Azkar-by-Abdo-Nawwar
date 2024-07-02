let url = 'https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json';
async function fetchUrl(url){
    try{
        let promise = await fetch(url);
        let data = await promise.json();
        let morning = data["أذكار الصباح"].flat();
        morning.splice(15,1);
        let night = data["أذكار المساء"];
        console.log(morning);   
        console.log(night);
    }
    catch(e){
        console.error('Something went wrong',e);
    }

}
fetchUrl(url);