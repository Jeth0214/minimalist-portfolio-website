//console.log('portfolio');

async function getProjectsData(){
    let projects;
    let newPromise = new Promise( (resolve) => {
        let req = new XMLHttpRequest();
        req.open('GET', "../assets/json/projects.json", true);
        req.onload = () => {
            if(req.readyState == 4 && req.status === 200){
                resolve(req.response);
;            } else {
                resolve("File Not Found");
            }
        };
        req.send();
    })

    const data = await newPromise;
    projects = JSON.parse(data);
   // console.log(projects);
    renderProject(projects);
}

getProjectsData();
const renderProject = (projects) => {
    const portfolio = document.querySelector("#projects");
    let output = '';
    for(let  project of projects){
        output += `
        <div class="project">
            <div class="project__image">
                <img src="${project.images.desktop}" alt="${project.name}">
            </div>
            <div class="project__body">
                <h1>${project.name}</h1>
                <p>${project.description}</p>
                <div class="buttons">
                    <a target="blank" href="${project.link}" class="btn btn-secondary">View Project</a>
                    <a target="blank" href="${project.code}" class="btn btn-secondary--fill">View Code</a>
                </div>
            </div>
        </div>
        `
    }
    portfolio.innerHTML = output;
}