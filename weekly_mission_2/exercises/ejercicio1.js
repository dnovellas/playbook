const repo = {
 name: "LaunchX",
 author: "carlogilmar",
 language: "JavaScript",
 numberOfCommits: 100,
 stars: 199,
 forks: 299,
 issues_open: 10,
 issues_close: 10,
 getTotalIssues: function(){
   return this.issues_open + this.issues_close
 },
 getGeneralInfo: function(){
   return `This repository ${this.name} was created by ${this.author}`
 }
}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

// issue
const issue = {
  Tittle: 'Titulo del issue',
  Content: 'Contenido',
  Author: 'Autor del issue'
}

// pull_request
const pull_request={
  Comment:'comentarios'
}

// Twitter
    //user
     const user = {user: "carlo", username: "carlogilmar", bio: "...", age: 23}

    //     trending_topic
     const trending_topic = {
      search: '#DiaDeLaTierra',
      since:'20220422'
     }

    //     hashtag
    const hashtag = {
      HashTag:'#DiaDeLaTierra'
    }

// Facebook
    // user
    const FacebookUser = {
      UserID:007,
      Username: "TheTester",
      Password: "********"
    }

    // post
    const post = {
      Post_id: 007,
      Message: "justTesting",
      Post_audience: 'Public',
      Tags: null,
      Album: null,
      Check_in: null,
      Feeling: null,
      Photho:"~/helloWorld.jpg",
      Background_color: 'white',
      Gif:null,
      HostAndQA:null
    }

    // Biography
    const biography = {
      Name: 'David Novella S',
      Work: null,
      Education:['Primaria', 'Secundaria', 'Preparatoria'],
      PlacesLived:null,
      ContactInfo:'mail@mailer.com',
      BasicInfo:{
        Gender:'Male', Birthday: '19990101', Languages:['spanish', 'english']
      }
    }

// Uber
    // profile
    const profile = {
      nombre: 'David Novella',
      rating: 4.88,
      payment_method: 'cash'
    }

    // travel
    const travel = {
      from: 'casa',
      to: 'trabajo',
      distance: 15,
      ride: 'uber-x',
      payment_method:cash,
      driver:007
    }