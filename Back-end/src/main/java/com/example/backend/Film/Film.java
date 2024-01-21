package com.example.backend.Film;
import com.example.backend.Users;

import jakarta.persistence.*;

import java.util.Date;
@Entity

public class Film {
    @Id
    private int id ;
    private double voteaverage;
    private String title;
    private String backdrop_path;
    @Column(length = 500)
    private String overview;
    private String  release_date;
    private Date popularity;
    private double vote_average;
    private int vote_count;
    @ManyToOne

    @JoinColumn(name = "user_id")

    private Users user;

    public Users getUser() {
        return user;
    }

    public Film(int id, double voteaverage, String title, String backdrop_path, String overview, String release_date, Date popularity, double vote_average, int vote_count,Users user) {
        this.id = id;
        this.voteaverage = voteaverage;
        this.title = title;
        this.backdrop_path = backdrop_path;
        this.overview = overview;
        this.release_date = release_date;
        this.popularity = popularity;
        this.vote_average = vote_average;
        this.vote_count = vote_count;
        this.user=user;
    }

    public Film() {
    }

    public int getId() {
        return id;
    }

    public double getVoteaverage() {
        return voteaverage;
    }

    public String getTitle() {
        return title;
    }

    public String getBackdrop_path() {
        return backdrop_path;
    }

    public String getOverview() {
        return overview;
    }

    public String getRelease_date() {
        return release_date;
    }

    public Date getPopularity() {
        return popularity;
    }

    public double getVote_average() {
        return vote_average;
    }

    public int getVote_count() {
        return vote_count;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setVoteaverage(double voteaverage) {
        this.voteaverage = voteaverage;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setBackdrop_path(String backdrop_path) {
        this.backdrop_path = backdrop_path;
    }

    public void setOverview(String overview) {
        this.overview = overview;
    }

    public void setRelease_date(String release_date) {
        this.release_date = release_date;
    }

    public void setPopularity(Date popularity) {
        this.popularity = popularity;
    }

    public void setVote_average(double vote_average) {
        this.vote_average = vote_average;
    }

    public void setVote_count(int vote_count) {
        this.vote_count = vote_count;
    }

    @Override
    public String toString() {
        return "Film{" +
                "id=" + id +
                ", voteaverage=" + voteaverage +
                ", title='" + title + '\'' +
                ", backdrop_path='" + backdrop_path + '\'' +
                ", overview='" + overview + '\'' +
                ", release_date='" + release_date + '\'' +
                ", popularity=" + popularity +
                ", vote_average=" + vote_average +
                ", vote_count=" + vote_count +
                '}';
    }
}
