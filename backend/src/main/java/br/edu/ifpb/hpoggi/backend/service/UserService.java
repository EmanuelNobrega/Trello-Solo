package br.edu.ifpb.hpoggi.backend.service;

import br.edu.ifpb.hpoggi.backend.model.User;
import br.edu.ifpb.hpoggi.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository usersRepository;

    public List<User> getUsers() {
        return this.usersRepository.findAll();
    }

    public User getUserById(Long id) {
        return this.usersRepository.findById(id).orElse(null);
    }

    public User insertOrUpdate(User usr) {
        return this.usersRepository.save(usr);
    }

    public void delete(Long id) {
        this.usersRepository.deleteById(id);
    }
}
