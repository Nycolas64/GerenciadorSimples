package com.GerenciadorSimples.GerenciadorSimples.repository;

import com.GerenciadorSimples.GerenciadorSimples.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}