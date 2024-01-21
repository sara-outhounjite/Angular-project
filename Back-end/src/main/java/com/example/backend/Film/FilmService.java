package com.example.backend.Film;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FilmService {
    @Autowired
    private FilmRepo Repo;

    public Film AddFilm(Film film,int userId) {

            return Repo.save(film);

}}

