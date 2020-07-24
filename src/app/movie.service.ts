import { Injectable } from '@angular/core';
import {Movie} from './movie';
//import {MOVIES} from './my-movies';




@Injectable({
  providedIn: 'root'
})

export class MovieService {
 MOVIES: Movie[]= [
    {id: 1, thumbnail:'https://i.pinimg.com/originals/8d/5e/b3/8d5eb3ae7a0e1feea05bed530d897322.jpg' , name: 'Titanic', description:'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.', length: 210, director: 'James Cameron',actors:['Leonardo DiCaprio','Kate Winslet','Billy Zane', 'Kate Bates', 'Frances Fisher', 'Gloria Stuart']},
    {id: 2, thumbnail:'https://i.pinimg.com/originals/9f/76/d2/9f76d27077b39f3a1af5692bab09d67d.jpg', name: 'The Notebook', description:'A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.', length: 124, director:'Nick Cassavetes', actors:['Ryan Gosling', 'Rachel McAdams', 'Kevin Connolly', 'Heather Wahlgnist']},

    {id:3 ,thumbnail:'https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/a-star-is-born-et00049107-11-11-2016-08-58-20.jpg', name: 'A star is born', description:'A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.', length: 134, director: 'Bradley Cooper', actors:['Bradley Cooper', 'Lady Gaga', 'Sam Eliot','Rafi Gavron', 'Antony Ramos', 'Alec']},
    {id:4 ,thumbnail:'https://pics.filmaffinity.com/A_Walk_to_Remember-584314978-large.jpg', name:'A Walk to Remember', description:'The story of two North Carolina teens, Landon Carter and Jamie Sullivan, who are thrown together after Landon gets into trouble and is made to do community service.', length:101 , director:'Adam Shankman',actors:['Shane West','Mandy Moore','Peter Coyote','Daryl Hannah','Lauren German','Clayne Crawford','Al Thompson']},
    {id:5 ,thumbnail:'https://d3ui957tjb5bqd.cloudfront.net/uploads/2014/11/interstellar-poster-21.jpg', name:'Interstellar ', description:'A team of explorers travel through a wormhole in space in an attempt to ensure humanitys survival.', length:169 , director:'Christopher Nolan',actors:['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain','Ellen Burstyn','Mackenzie Foy','John Lithgow']},
    {id:6 ,thumbnail:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4oXhoPIKVpBIBIADOZnSfQ4iLid3TL_CoRTdtCG1JW6TSxHD1&s', name:'Inception', description:':A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.', length:148 , director:'Christopher Nolan',actors:['Leonardo DiCaprio','Joseph Gordon-Levitt',' Ellen Page', 'Tom Hardy','Ken Watanabe','Dileep Rao','Cillian Murphy']},
    {id:7 ,thumbnail:'https://i.pinimg.com/originals/b3/f2/28/b3f228e9d227ea52afed8952f9e3b823.jpg', name:'Gone Girl', description:'With his wifes disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it is suspected that he may not be innocent', length:149 , director:'David Fincher',actors:['Ben Affleck', 'Rosamund Pike', 'Neil Patrick Harris', 'Tyler Perry', 'Carrie Coon', 'Kim Dickens', 'Patrick Fugit,David Clennon','Lisa Banes,Missi Pyle','Emily Ratajkowski']},
    {id:8 ,thumbnail:'https://glhsreflection.org/wp-content/uploads/2019/11/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR006741000_AL_-600x800.jpg', name:'Joker ', description:'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.', length:122 , director:'Todd Phillips',actors:['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz','Frances Conroy','Brett Cullen','Shea Whigham','Bill Camp','Glenn Fleshler']},
    {id:9 ,thumbnail:'https://i.pinimg.com/originals/31/e7/41/31e74170766d922cbe5292aee746bf20.jpg', name:'The Tourist', description:'Revolves around Frank, an American tourist visiting Italy to mend a broken heart. Elise is an extraordinary woman who deliberately crosses his path.', length:103 , director:'Florian Henckel von Donnersmarck',actors:['Johnny Depp', 'Angelina Jolie', 'Paul Bettany','Timothy Dalton','Steven Berkoff','Rufus Sewell,Christian De Sica']},
    {id:10 ,thumbnail:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQecyhadWNnGtCcDxjW9zaRantITADv5tseiQf6CbJce51dvyj7&s', name:'Dunkirk', description:'Allied soldiers from Belgium, the British Empire, and France are surrounded by the German Army and evacuated during a fierce battle in World War II', length:106 , director:'Christopher Nolan',actors:['Fionn Whitehead', 'Barry Keoghan', 'Mark Rylance','Damien Bonnard', 'Tom Hardy', 'James Bloor']}

];



  getMovies() : Movie[]{
    return this.MOVIES;
  }
  
}
