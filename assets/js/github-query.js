let repos=document.getElementById("my-github-projects")
const gitURL="https://gh-pinned-repos-5l2i19um3.vercel.app/?username=tchamalsha"

fetch(gitURL).then(function(response){
    return response.json();
}).then(function(object){
    data = object
    
    data.forEach(element => {
        repo = element.repo
        url = element.link
        description = element.description
        language = element.language
        stars =element.stars
        forks = element.forks

        pushRepositories(repo,url,description,language,stars,forks)

    })
}).catch(function(error){
    alert("Something went wrong!!")
    console.log(error)
})
function pushRepositories(repoName,repoURL,repoDescription,repoLanguage,repoStars,repoForks){
    let repoTemplate =`
        <div class="row">
            <div class="col-sm-12 justify-content-center d-flex">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${repoName}</h5>
                        <p class="card-text">${repoDescription} Click on Github icon to see the repo.
                        </p>
                        <div class="button-row">
                            <button type="button" class="btn btn-success">${repoLanguage}</button> 
                        </div><br>
                        <div class="button-row">
                            <p><i class="fa fa-star-o" aria-hidden="true"></i>  Stars: ${repoStars}</p>
                        </div>
                        <div class="button-row">
                            <p><i class="fa fa-code-fork" aria-hidden="true"></i> Forks: ${repoForks}</p>
                            <div class="git-icon">
                                <a href="${repoURL}">
                                    <i class="fa fa-github"> <p>URL</P> </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    repos.innerHTML += repoTemplate
    
}
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA36ijB-TruXN0ZzTjcZUMk3LKMNk7jVI8",
    authDomain: "myportfolio-97a3e.firebaseapp.com",
    databaseURL: "https://myportfolio-97a3e.firebaseio.com",
    projectId: "myportfolio-97a3e",
    storageBucket: "myportfolio-97a3e.appspot.com",
    messagingSenderId: "933318935496",
    appId: "1:933318935496:web:be3706e4d8fed87c1b76fd",
    measurementId: "G-91TH23F748"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

let msgRef=firebase.database().ref('User');
let form=document.getElementById("comment-form");
let modal=document.getElementById("modal");
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let name =form.name.value
    let massage=form.comment.value
    let today = new Date();
    console.log(name);
	let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    if(name&&massage)
    {
        saveData(name,massage,date);
        modal.click();
    }
    form.reset()
})

//save user data to firebase
function saveData(name,massage,date){
	var newMsgRef= msgRef.push();
	newMsgRef.set({
    
	Name:name,
    Massage:massage,
    Date:date

	});
}