//GitHub

class Repo {
  constructor(name,author,language,numberOfCommits,stars,forks,issues_open,issues_close){
  this.name= name
   this.author= author
   this.language= language
   this.numberOfCommits= numberOfCommits
   this.stars= stars
   this.forks= forks
   this.issues_open= issues_open
   this.issues_close= issues_close
  }
  
 getTotalIssues(){
   return this.issues_open + this.issues_close
 }

 getGeneralInfo(){
   return `This repository ${this.name} was created by ${this.author}`
 }
}

class Issue{
  constructor(tittle, content, author){
    this.Content = content
    this.Tittle = tittle
    this.Author = author
  }  
}


class Pull_request{
  constructor(comment){
  this.Comment = comment
  } 
}

// Twitter
    //user
class User {
  constructor(user,username,bio,age){
    this.User = user
    this.Username = username
    this.Bio = bio
    this.Age = age
  }  
}

//     trending_topic
class trending_topic {
  constructor(search, since){
      this.Search = search
      this.Since = since
  }    
}

 //     hashtag
 class Hashtag{
   constructor (hashTag){
      this.HashTag = hashTag
   }
   
 }

 // Facebook
    // user
    class FacebookUser{
      constructor(userID,username,password){
        this.UserID = userID
        this.Username = username
        this.Password = password
      }
    }

    // post
    class post {
      constructor(Post_id,Message,Post_audience,Post_audience,Tags,Album,Check_in,Feeling,Photho,Background_color,Gif,HostAndQA){
      this.Post_id = Post_id
      this.Message = Message
      this.Post_audience = Post_audience
      this.Tags = Tags
      this.Album = Album
      this.Check_in = Check_in
      this.Feeling = Feeling
      this.Photho =Photho
      this.Background_color = Background_color
      this.Gif =Gif
      this.HostAndQA =HostAndQA
    }
    }

    // Biography
    class Biography{
      constructor(Name,Work,Education,PlacesLived,ContactInfo,BasicInfo){
        this.Name = Name
        this.Work =Work
        this.Education = Education
        this.PlacesLived = PlacesLived
        this.ContactInfo = ContactInfo
        this.BasicInfo = BasicInfo
      }
    }

  // Uber
    // profile
    class Profile {
      constructor(nombre,rating,payment_method){      
        this.nombre = nombre
        this.rating = rating
        this.payment_method = payment_method
      }
    }

    // travel
    class Travel {
      constructor(from,to,distance,ride,payment_method,driver){
        this.from = from
        this.to = to
        this.distance = distance
        this.ride = ride
        this.payment_method = payment_method
        this.driver = driver
      }      
    }