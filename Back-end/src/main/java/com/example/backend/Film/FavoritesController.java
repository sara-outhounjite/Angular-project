package com.example.backend.Film;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController

public class FavoritesController {
    @Autowired
    private FilmService service;

    @PostMapping("/AddFilm/{userId}")
    @CrossOrigin(origins = "http://localhost:80")
    public Film addFilm(@RequestBody Film film,@PathVariable ("userId") int  userId) {
        System.out.println("Received Film: " + film);
        return service.AddFilm(film,userId);
    }
}
