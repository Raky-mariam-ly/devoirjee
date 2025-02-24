package com.elearning.controller;

import com.elearning.model.Classes;
import com.elearning.service.ClassesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/classes")
public class ClassesController {

    @Autowired
    private ClassesService classesService;

    @PostMapping
    public ResponseEntity<Classes> createClasses(@RequestBody Classes classes) {
        return new ResponseEntity<>(classesService.createClasses(classes), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Classes> getClassesById(@PathVariable Long id) {
        return ResponseEntity.ok(classesService.getClassesById(id));
    }

    @GetMapping
    public ResponseEntity<List<Classes>> getAllClasses() {
        return ResponseEntity.ok(classesService.getAllClasses());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteClasses(@PathVariable Long id) {
        classesService.deleteClasses(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Classes> updateClasses(@PathVariable Long id, @RequestBody Classes classes) {
        return ResponseEntity.ok(classesService.updateClasses(id, classes));
    }
}
