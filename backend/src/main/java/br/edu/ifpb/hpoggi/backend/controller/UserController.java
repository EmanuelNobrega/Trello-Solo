package br.edu.ifpb.hpoggi.backend.controller;

import br.edu.ifpb.hpoggi.backend.model.User;
import br.edu.ifpb.hpoggi.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> getUsers() {
        return this.userService.getUsers();
    }
    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable("id") Long idusr) {
        return this.userService.getUserById(idusr);
    }

    @PostMapping("/users")
    public User createUsr(@RequestBody User usr) {
        return this.userService.insertOrUpdate(usr);
    }

    @PutMapping("/users/{id}")
    public User updateUsr(@RequestBody User usr) {
        return this.userService.insertOrUpdate(usr);
    }

    public void deleteUsr(@PathVariable("id") Long idusr) {
        this.userService.delete(idusr);
    }
}
