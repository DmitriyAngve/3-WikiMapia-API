// CFD75068-CCDD74AC-68761093-F3BB57F4-D74C9DB2-0885C651-3253D9F9-CCC1ABAA
// CFD75068-DEECEB10-1FE9192F-3D88C492-3B24D358-4E3CA0C8-EB70AC9C-68208C11
const KEY =
  "CFD75068-DEECEB10-1FE9192F-3D88C492-3B24D358-4E3CA0C8-EB70AC9C-68208C11";

/*

const data = await AJAX(https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=${KEY})
export const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes';
*/
// ?key=${KEY}
const url =
  "http://api.wikimapia.org/?key=example&function=place.getnearest&lat=48.858252&lon=2.29451";
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
const inputVal = document.querySelector(".val");
const inputVal2 = document.createElement("input");
inputVal2.setAttribute("type", "text");
inputVal2.value = "2.29451"; //lon
document.body.prepend(inputVal2);
const h1 = document.querySelector("h1");
inputVal.value = "48.858252"; //lat
document.body.prepend(h1);

btn.textContent = "Search Map Lon Lat";
btn.addEventListener("click", (e) => {
  //   let lon = inputVal2.value;
  //   let lat = inputVal.value;

  //   let tempURL = `${url}?key=${KEY}&lat=${lat}&lon=${lon}`;
  //   console.log(tempURL);
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
