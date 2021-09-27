package br.edu.ifpb.hpoggi.backend.repository;

import br.edu.ifpb.hpoggi.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
