/*export class Film{
public id : number;
public voteaverage : number;
public title: string;
public posterPath: string;
public overview: string;
public releaseDate: string;


    constructor(id: number, voteAverage: number, title: string, posterPath: string, overview: string, releaseDate: string) {
        this.id = id;
        this.voteaverage = voteAverage;
        this.title = title;
        this.posterPath = posterPath;
        this.overview = overview;
        this.releaseDate = releaseDate;
    }}*/
// film.model.ts
import { Users } from "../Users";
export interface Film {
    id : number;
    voteaverage : number;
     title: string;
     backdrop_path: string;
    overview: string;
    release_date: string;
    popularity:Date;
    vote_average:number;
    vote_count:number;
    user:Users;
  }
  