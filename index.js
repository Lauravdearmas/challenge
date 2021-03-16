const URL ="http://localhost:8080/api/jobs";
const mainUl = document.querySelector(".mainUl");


const getPost = async() => {
    try {
        const res = await fetch(URL);
        const jobs = await res.json(); // mirar status y code
        jobs.forEach(job => {
            displayUser(job);
        });
    } catch (error) {
        console.log(error);
    }
}
getPost();


function displayUser(user){
    console.log(user);
    const li = document.createElement("li");
    li.className="li";
    const divItemCall = document.createElement("div");
    divItemCall.className="item-call";
    const divLogoCompany = document.createElement("div");
    divLogoCompany.className="logo-company";
    const divinfoCompanyCall = document.createElement("div");
    divinfoCompanyCall.className="info-company-call";


    const img = document.createElement("img");
    const divinfoCall = document.createElement("div");
    divinfoCall.className="info-call";
    const divdataCall = document.createElement("div");
    divdataCall.className="data-call";


    const divlocation = document.createElement("div");
    divlocation.className="location";
    const divtimeline = document.createElement("div");
    divtimeline.className="timeline";

    // const span = document.createElement("span");
    // const hr = document.createElement("hr");


    img.src=user.company_logo;
    img.className="job-logo"; //set attribute
    const userName = document.createElement("h4");
    const userRole = document.createElement("h2");
    const userWorkDay = document.createElement("a"); //por ingresar al div
    const plocation = document.createElement("p"); //por ingresar al div
    plocation.className="data-call";
    const ptime = document.createElement("p"); //por ingresar al div
    ptime.className="timeline";


    let adStatus=document.createTextNode(user.type);
    const adUserName = document.createTextNode(`${user.company}`);
    const adUserRole = document.createTextNode(user.title);
    const adJobLocation = document.createTextNode(user.location);
    const adUserTime = document.createTextNode(user.created_at);


    img.heigth = "130";
    img.width = "130";


    userWorkDay.appendChild(adStatus);
    userName.appendChild(adUserName);
    userRole.appendChild(adUserRole);
    plocation.appendChild(adJobLocation);
    ptime.appendChild(adUserTime);


    divlocation.appendChild(plocation);
    divtimeline.appendChild(ptime);
    divdataCall.append(divlocation,divtimeline);


    divinfoCall.append(userName,userRole,userWorkDay);


    divinfoCompanyCall.append(divinfoCall,divdataCall);
    divLogoCompany.appendChild(img);
    divItemCall.append(divLogoCompany,divinfoCompanyCall);
    li.append(divItemCall);
    mainUl.appendChild(li);
    userName.appendChild(adUserName);



}







// const getData= async()=>{
//     try{
//       const response = await fetch("http://localhost:8080/api/jobs");
//       const data = await response.json();
//     //   jobs.forEach(user =>{
//         displayUser(job);
//         // pintarJobs(data)
//       }
//     catch(error){
//       console.log(error)
//     }
//   }
//   getData();




//   const getData = async () => {
//         try {
//             const resp = await fetch("http://localhost:8080/api/jobs");
//             const data = await resp.json();
//             //console.log(data);
            // pintarJobs(data)
//         }catch (error) {
//             console.log(error)
//         }
//     }


// const mainSection = document.querySelector(".mainSection");

// function displayUser(job){
//   const company_logo = job.company_logo;
//   const company_name = job.company;
//   const title = job.title;
//   const time = job.type;

//   const logo = document.createElement("img");
// const name = document.createElement("h1");
// const position = document.createElement("p")
// const contract = document.createElement("p")
// const div = document.createElement("div")

// logo.heigth = "150"
// logo.width = "150"
// div.style.display = "flex"

// logo.src = company_logo;
// name.appendChild(document.createTextNode(company_name));
// position.appendChild(document.createTextNode(title));
// contract.appendChild(document.createTextNode(time));
// }