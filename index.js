const URL ="http://localhost:8080/api/jobs";
const mainUl = document.querySelector(".mainUl");
const bottonForm = document.querySelector("form");
const searchInput = document.querySelector("#userSearch");
const fullTime = document.querySelector("#btn-location");




const searchData = (evt) => {

    evt.preventDefault()
    getPostFilter(searchInput.value)
}


const searchLocation = (evt) => {

    evt.preventDefault()
    getPostFilter(searchInput.value)
}



bottonForm.addEventListener("submit", searchData)



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
// getPost();



const getPostFilter = async(param) => {
    try {
        const res = await fetch(`${URL}/filter/${param}`);
        const jobs = await res.json();
        console.log(typeof jobs);
        if (jobs.length) {
            jobs.forEach(job => {
                displayUser(job);
            });
        }else{
            alert("No se encontraron objetos con tu consulta");
        } 
    } catch (error) {
        console.log(error);
    }
}



const getPostFilterWorking = async(param) => {
    try {
        const res = await fetch(`${URL}/working/${param}`);
        const jobs = await res.json();
        console.log(typeof jobs);
        if (jobs.length) {
            jobs.forEach(job => {
                displayUser(job);
            });
        }else{
            alert("No se encontraron objetos con tu consulta");
        } 
    } catch (error) {
        console.log(error);
    }
}




function displayUser(user){
    // console.log(user);
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

