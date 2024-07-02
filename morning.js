let url = 'https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json';
let con = document.getElementById('container');
async function fetchUrl(url){
    try{
        let promise = await fetch(url);
        let data = await promise.json();
        let morning = data["أذكار الصباح"].flat();
        morning.splice(15,1);
        for(let i = 0 ; i < morning.length ; i++){
            let div = document.createElement('div');
            div.textContent = morning[i].content;
            div.className = 'zekr';
            con.append(div);
            let num = morning[i].count;
            let btn = document.createElement('button');
            btn.className = 'btn';
            let count = document.createElement('p');
            count.className = 'count';
            count.textContent = '0';
            btn.append(count);
            let p = document.createElement('p');            
            p.className = 'p';
            p.textContent = `العدد ${num}`;
            btn.append(p);
            con.append(btn);
            btn.addEventListener('click',()=>{
                count.textContent = +count.textContent + 1;
                if(count.textContent==num){
                    btn.textContent = 'تم';
                    btn.style.backgroundColor = 'green';
                }
            })
        }
    }
    catch(e){
        console.error('Something went wrong',e);
    }

}
fetchUrl(url);