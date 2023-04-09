import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieDto } from 'src/entities/movie.dto';
import { Movie } from 'src/entities/movie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {


  constructor(@InjectRepository(Movie) private moviesRepository:Repository<Movie>){

  }

/*     list:Movie[] =  [{
        id: 1,
        title: "The Shawshank Redemption",
        opis: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates – including an older prisoner named Red – for his integrity and unquenchable sense of hope.",
        godina: 1994,
        ocena: 4.5,
        poster: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
        link: "https://www.youtube.com/embed/6hB3S9bIaco"
      },
      {
        id: 2,
        title: "The Godfather",
        opis: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates – including an older prisoner named Red – for his integrity and unquenchable sense of hope.",
        godina: 1972,
        ocena: 4.5,
        poster: "https://images.fandango.com/ImageRenderer/400/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/1463/The_Godfather-2.jpg",
        link: "https://www.youtube.com/embed/sY1S34973zA"
      },
      {
        id: 3,
        title: "The Dark Knight",
        opis: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates – including an older prisoner named Red – for his integrity and unquenchable sense of hope.",
        godina: 2008,
        ocena: 4.5,
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        link: "https://www.youtube.com/embed/EXeTwQWrcwY"
      },
      {
        id: 4,
        title: "The Lord of the Rings: The Return of the King",
        opis: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates – including an older prisoner named Red – for his integrity and unquenchable sense of hope.",
        godina: 2003,
        ocena: 4.5,
        poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        link: "https://www.youtube.com/embed/r5X-hFf6Bwo"
      },
      {
        id: 5,
        title: "Schindler's List",
        opis: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates – including an older prisoner named Red – for his integrity and unquenchable sense of hope.",
        godina: 1993,
        ocena: 4.5,
        poster: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        link: "https://www.youtube.com/embed/gG22XNhtnoY"
      },
      {
        id: 5,
        title: "Pulp Fiction",
        opis: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates – including an older prisoner named Red – for his integrity and unquenchable sense of hope.",
        godina: 1995,
        ocena: 4.5,
        poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        link: "https://www.youtube.com/embed/s7EdQ4FqbhY"
      },
      {
        id: 6,
        title: "Pulp Fiction",
        opis: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates – including an older prisoner named Red – for his integrity and unquenchable sense of hope.",
        godina: 1995,
        ocena: 4.5,
        poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        link: "https://www.youtube.com/embed/s7EdQ4FqbhY"
      },
      {
        id: 7,
        title: "Om Shanti Om",
        opis: "Om Shanti Om (Hindi: ओम शान्ति ओम) is a 2007 Bollywood musical film directed and choreographed by Farah Khan. It stars Shahrukh Khanand Deepika Padukone in the lead roles as the protagonists while Shreyas Talpade, Arjun Rampal, and Kirron Kher feature in supporting roles. Arjun Rampal is the antagonist in the movie. More than forty two well-known Bollywood stars appear in the course of the film, including thirty of them (not including the stars of the film) in one song alone.",
        godina: 2007,
        ocena: 3.7,
        poster: "https://upload.wikimedia.org/wikipedia/en/4/41/Om_Shanti_Om.jpg",
        link: "https://www.youtube.com/embed/9oeGoQGt7Ao"
      },
      {
        id: 8,
        title: "Inception",
        opis: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
        godina: 2010,
        ocena: 4.4,
        poster: "https://cdn.shopify.com/s/files/1/0526/4352/8887/products/FISINC0009-Inception_poster_za_film_1200x1200.jpg?v=1616768190",
        link: "https://www.youtube.com/embed/YoHD9XEInc0"
      },
      {
        id: 9,
        title: "Blade",
        opis: "A half-mortal, half-immortal is out to avenge his mother's death and rid the world of vampires. The modern-day technologically advanced vampires he is going after are in search of his special blood type needed to summon an evil god who plays a key role in their plan to execute the human race.",
        godina: 2004,
        ocena: 4,
        poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/hx0sdduAsr4rq03RZKZzglR25z7.jpg",
        link: "https://www.youtube.com/embed/kaU2A7KyOu4"
      },
      {
        id: 10,
        title: "The shining",
        opis: "Jack Torrance (Jack Nicholson) becomes winter caretaker at the isolated Overlook Hotel in Colorado, hoping to cure his writer's block. He settles in along with his wife, Wendy (Shelley Duvall), and his son, Danny (Danny Lloyd), who is plagued by psychic premonitions. As Jack's writing goes nowhere and Danny's visions become more disturbing, Jack discovers the hotel's dark secrets and begins to unravel into a homicidal maniac hell-bent on terrorizing his family.",
        godina: 1980,
        ocena: 4.3,
        poster: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        link: "https://www.youtube.com/embed/5Cb3ik6zP2I"
      },
      {
        id: 11,
        title: "Seven Samurai",
        opis: "A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food. A giant battle occurs when 40 bandits attack the village.",
        godina: 1956,
        ocena: 4.5,
        poster: "https://flxt.tmsimg.com/assets/p5588_p_v8_au.jpg",
        link: "https://www.youtube.com/embed/wJ1TOratCTo"
      },
      {
        id: 12,
        title: "Spirited away",
        opis: "10-year-old Chihiro (Daveigh Chase) moves with her parents to a new home in the Japanese countryside. After taking a wrong turn down a wooded path, Chihiro and her parents discover an amusement park with a stall containing an assortment of food. To her surprise, Chihiro's parents begin eating and then transform into pigs. In this supernatural realm, Chihiro encounters a host of characters and endures labor in a bathhouse for spirits, awaiting a reunion with her parents.",
        godina: 2001,
        ocena: 4.5,
        poster: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        link: "https://www.youtube.com/embed/ByXuk9QqQkk"
      },
      {
        id: 13,
        title: "Harakiri",
        opis: "Down-on-his-luck veteran Tsugumo Hanshirō enters the courtyard of the prosperous House of Iyi. Unemployed, and with no family, he hopes to find a place to commit seppuku—and a worthy second to deliver the coup de grâce in his suicide ritual. The senior counselor for the Iyi clan questions the ronin’s resolve and integrity, suspecting Hanshirō of seeking charity rather than an honorable end. What follows is a pair of interlocking stories which lay bare the difference between honor and respect, and promises to examine the legendary foundations of the Samurai code.",
        godina: 1962,
        ocena: 4.6,
        poster: "https://m.media-amazon.com/images/M/MV5BNzBkNGE4YTItNTA3ZC00NmUwLWFkMmItN2I5ZTJhYjcyNjUwXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_.jpg",
        link: "https://www.youtube.com/embed/gfABwM-Ppng"
      },
      {
        id: 14,
        title: "Psycho",
        opis: "When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother. The place seems quirky, but fine… until Marion decides to take a shower.",
        godina: 1960,
        ocena: 4.3,
        poster: "https://images.squarespace-cdn.com/content/v1/5e7a8f6d95bc3643e73bc2e8/1587336768394-CUT5CXQTZRMCW3ZCJFL5/psycho.png?format=2500w",
        link: "https://www.youtube.com/embed/NG3-GlvKPcg"
      },
      {
        id: 15,
        title: "The Silence of the Lambs",
        opis: "Clarice Starling is a top student at the FBI’s training academy. Jack Crawford wants Clarice to interview Dr. Hannibal Lecter, a brilliant psychiatrist who is also a violent psychopath, serving life behind bars for various acts of murder and cannibalism. Crawford believes that Lecter may have insight into a case and that Starling, as an attractive young woman, may be just the bait to draw him out.",
        godina: 1991,
        ocena: 4.3,
        poster: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        link: "https://www.youtube.com/embed/W6Mm8Sbe__o"
      },
      {
        id: 16,
        title: "Vertigo",
        opis: "Hitchcock's romantic story of obsession, manipulation and fear. A detective is forced to retire after his fear of heights causes the death of a fellow officer and the girl he was hired to follow. He sees a double of the girl, causing him to transform her image onto the dead girl's body. This leads into a cycle of madness and lies.",
        godina: 1958,
        ocena: 4.2,
        poster: "https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
        link: "https://www.youtube.com/embed/Z5jvQwwHQNY"
      },
      {
        id: 17,
        title: "Taxi Driver",
        opis: "Suffering from insomnia, disturbed loner Travis Bickle (Robert De Niro) takes a job as a New York City cabbie, haunting the streets nightly, growing increasingly detached from reality as he dreams of cleaning up the filthy city. When Travis meets pretty campaign worker Betsy (Cybill Shepherd), he becomes obsessed with the idea of saving the world, first plotting to assassinate a presidential candidate, then directing his attentions toward rescuing 12-year-old prostitute Iris (Jodie Foster).",
        godina: 1976,
        ocena: 4.2,
        poster: "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        link: "https://www.youtube.com/embed/UUxD4-dEzn0"
      },
      {
        id: 18,
        title: "The Pianist",
        opis: "In this adaptation of the autobiography The Pianist: The Extraordinary True Story of One Man's Survival in Warsaw, 1939-1945, Wladyslaw Szpilman (Adrien Brody), a Polish Jewish radio station pianist, sees Warsaw change gradually as World War II begins. Szpilman is forced into the Warsaw Ghetto, but is later separated from his family during Operation Reinhard. From this time until the concentration camp prisoners are released, Szpilman hides in various locations among the ruins of Warsaw.",
        godina: 2000,
        ocena: 4.3,
        poster: "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        link: "https://www.youtube.com/embed/BFwGqLa_oAo"
      },
      {
        id: 19,
        title: "Wall-E",
        opis: "WALL-E, short for Waste Allocation Load Lifter Earth-class, is the last robot left on Earth. He spends his days tidying up the planet, one piece of garbage at a time. But during 700 years, WALL-E has developed a personality, and he's more than a little lonely. Then he spots EVE (Elissa Knight), a sleek and shapely probe sent back to Earth on a scanning mission. Smitten WALL-E embarks on his greatest adventure yet when he follows EVE across the galaxy.",
        godina: 2008,
        ocena: 4.1,
        poster: "https://i.ebayimg.com/images/g/W3EAAOSwi2ZZ3n4w/s-l1600.jpg",
        link: "https://www.youtube.com/embed/CZ1CATNbXg0"
      },
      {
        id: 20,
        title: "Back to Future",
        opis: "In this 1980s sci-fi classic, small-town California teen Marty McFly (Michael J. Fox) is thrown back into the '50s when an experiment by his eccentric scientist friend Doc Brown (Christopher Lloyd) goes awry. Traveling through time in a modified DeLorean car, Marty encounters young versions of his parents (Crispin Glover, Lea Thompson), and must make sure that they fall in love or he'll cease to exist. Even more dauntingly, Marty has to return to his own time and save the life of Doc Brown.",
        godina: 1985,
        ocena: 4.2,
        poster: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        link: "https://www.youtube.com/embed/qvsgGtivCgs"
      }
    
    ] ;
 */
    public getAllMovies(){
        //return this.list;
        return this.moviesRepository.find()
    }

    public getById(id:number){
        //return this.list.find(movie=>movie.id===id);
        return this.moviesRepository.findOne({where:{id:id}});
    }

    public async postMany(Dtos:MovieDto[]){
      
      return await Dtos.forEach(i=>{
        const movie=this.moviesRepository.create(i);
        this.moviesRepository.save(i);
      })
    }


    public async create(movieDto:MovieDto){
      const movie=this.moviesRepository.create(movieDto);
      return await this.moviesRepository.save(movie);
    }

    public async delete(id:number){
      return await this.moviesRepository.delete(id)
    }

    public async update(id:number,dto:MovieDto){
      return await this.moviesRepository.update(id,dto);
    }

}
