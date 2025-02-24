package com.elearning.repository;

import com.elearning.model.Classes;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface ClassesRepository extends JpaRepository<Classes, Long> {
    Optional<Classes> findByName(String name);
}
