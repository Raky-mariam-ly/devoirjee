package com.elearning.service.impl;

import com.elearning.exception.ClassesNotFoundException;
import com.elearning.model.Classes;
import com.elearning.repository.ClassesRepository;
import com.elearning.service.ClassesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ClassesServiceImpl implements ClassesService {

    @Autowired
    private ClassesRepository classesRepository;

    @Override
    public Classes createClasses(Classes classes) {
        return classesRepository.save(classes);
    }

    @Override
    public Classes getClassesById(Long id) {
        return classesRepository.findById(id)
            .orElseThrow(() -> new ClassesNotFoundException("Classes not found with ID: " + id));
    }

    @Override
    public List<Classes> getAllClasses() {
        return classesRepository.findAll();
    }

    @Override
    public void deleteClasses(Long id) {
        classesRepository.deleteById(id);
    }

    @Override
    public Classes updateClasses(Long id, Classes classes) {
        Classes existingClasses = getClassesById(id);
        existingClasses.setName(classes.getName());
        existingClasses.setDescription(classes.getDescription());
        existingClasses.setArchive(classes.isArchive());
        return classesRepository.save(existingClasses);
    }
}
