package br.edu.ifpb.hpoggi.backend.repository;

import br.edu.ifpb.hpoggi.backend.model.Task;
import br.edu.ifpb.hpoggi.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByUser(User user);
}

