const URL ="http://localhost:8080/api/jobs";


const getPost = async() => {
    try{
      const res = await fetch(URL);
      const jobs = await res.json();
      jobs.forEach(job => {
        displayUser(job);
        });
      }catch (error){
      console.log(error);
    }
  }
  getPost();




const divItem = document.querySelector(".item-call");
function displayUser(job) {


// div hijo con logo de la empresa
const divimgJob = document.createElement("div");
divimgJob.className ="logo-company";


// div hijo con la info del empleo
const divinfo = document.createElement("div");
divinfo.className="info-company-call";


// div hijos de info
const divtitle = document.createElement("div");
divtitle.className="info-call";
const divdata = document.createElement("div");
divdata.className="data-call";
const divlocation = document.createElement("div");
divlocation.className="location";
const divtime = document.createElement("div");
divtime.className="timeline";


const h4 = document.createElement("h4");
const h2 = document.createElement("h2");
const a = document.createElement("a");
const img = document.createElement("img");

const parrafouno = document.createElement("p");
parrafouno.className="p-data-call";
const parrafodos = document.createElement("p");
parrafodos.className="p-timeline";



const companyJob = job.company;
const titleJob = job.title;
const typeJob = job.type;
const locationJob = job.location;
const timeJob = job.created_at;
const imagen = job.company_logo;

imagen.setAttribute("height", "130");
imagen.setAttribute("width", "130");


h4.appendChild(document.createTextNode(companyJob));
h2.appendChild(document.createTextNode(titleJob));
a.appendChild(document.createTextNode( typeJob));
parrafouno.appendChild(document.createTextNode(locationJob));
parrafodos.appendChild(document.createTextNode(created_at));
img.appendChild(document.createTextNode(imagen));



divlocation.appendChild(parrafouno)
divtime.appendChild(parrafodos)
divdata.append(divlocation, divtime)

divtitle.append(h4, h2, a)
divinfo.append(divtitle, divdata)

divimgJob.appendChild(img)
divItem.append(divimgJob, divinfo)

}



