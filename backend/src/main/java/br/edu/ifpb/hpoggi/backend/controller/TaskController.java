package br.edu.ifpb.hpoggi.backend.controller;

import br.edu.ifpb.hpoggi.backend.model.Task;
import br.edu.ifpb.hpoggi.backend.model.User;
import br.edu.ifpb.hpoggi.backend.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping("/tasks")
    public List<Task> getTasks() {
        return this.taskService.getAllTasks();
    }

    @GetMapping("/usrtasks")
    public List<Task> getUserTask(@RequestBody User usr) {
        return this.taskService.getUserTasks(usr);
    }

    @PostMapping("/tasks")
    public Task createTask(@RequestBody Task task) {
        return this.taskService.insertOrUpdate(task);
    }

    @DeleteMapping("/tasks/{id}")
    public void deleteTask(@PathVariable("id") Long id) {
        this.taskService.delete(id);
    }
}