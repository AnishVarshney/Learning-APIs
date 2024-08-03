const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");


const getFacts = async () => {
    console.log("Getting data ....");
    let responce = await fetch(URL);
    console.log(responce); // JSON Format
    let data = await responce.json();
    console.log(data[0]); // JSON Format
    factPara.innerText = data[0].text;
};

/**************Using Promise Chaining*************** */
// function getFacts() {
//     fetch(URL).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//         factPara.innerText = data[2].text;
//     });
// }

btn.addEventListener("click", getFacts);