package br.edu.ifpb.hpoggi.backend.service;

import br.edu.ifpb.hpoggi.backend.model.Task;
import br.edu.ifpb.hpoggi.backend.model.User;
import br.edu.ifpb.hpoggi.backend.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    @Autowired
    private TaskRepository tasksRepository;

    public List<Task> getAllTasks() {
        return this.tasksRepository.findAll();
    }

    public List<Task> getUserTasks(User usr) {
        return this.tasksRepository.findByUser(usr);
    }

    public Task insertOrUpdate(Task task) {
        return this.tasksRepository.save(task);
    }

    public void  delete(Long id) {
        this.tasksRepository.deleteById(id);
    }
}
