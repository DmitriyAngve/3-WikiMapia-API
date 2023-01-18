// CFD75068-CCDD74AC-68761093-F3BB57F4-D74C9DB2-0885C651-3253D9F9-CCC1ABAA
const url =
  "http://api.wikimapia.org/?key=example&function=place.getnearest&lat=48.858252&lon=2.29451&format=json";
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
const inputVal = document.querySelector(".val");
const inputVal2 = document.querySelector("input");
inputVal2.setAttribute("type", "text");
inputVal2.value = "2.29451"; //lon
document.body.append(inputVal2);
inputVal.value = "48.858252"; //lat

inputVal.value = "hello";
btn.textContent = "Load JSON Data";
btn.addEventListener("click", (e) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      output.innerHTML = JSON.stringify(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

/*

    const url = 'http://api.wikimapia.org/?key=example&function=place.getnearest&format=json';
    const btn = document.querySelector('.btn');
    const output = document.querySelector('.output');
    const inputVal = document.querySelector('.val');
    const inputVal2 = document.createElement('input');
    inputVal2.setAttribute('type','text');
    inputVal2.value = '2.29451'; //lon
    document.body.prepend(inputVal2);
    const h1 = document.querySelector('h1');
    document.body.prepend(h1);
    inputVal.value = '48.858252'; //lat
    btn.textContent = 'Search Map Lon Lat';
    btn.addEventListener('click',(e)=>{
        let lon = inputVal2.value;
        let lat = inputVal.value;
     
        let tempURL = `${url}&lat=${lat}&lon=${lon}`;
        console.log(tempURL);
        fetch(tempURL).then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            output.innerHTML = '';
            //JSON.stringify(data);
            maker(data.places);
        })
        .catch((err)=>{
            console.log(err);
        })
    })
     
    function maker(data){
        data.forEach(el => {
            console.log(el);
            const div = document.createElement('div');
            div.classList.add('box');
            div.innerHTML = `<div>Title ${el.title}<br>${el.urlhtml}</div>`;
            output.append(div);
        });
    }
     

   
*/
