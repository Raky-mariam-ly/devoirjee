package com.elearning.service;

import com.elearning.model.Classes;
import java.util.List;

public interface ClassesService {
    Classes createClasses(Classes classes);
    Classes getClassesById(Long id);
    List<Classes> getAllClasses();
    void deleteClasses(Long id);
    Classes updateClasses(Long id, Classes classes);
}
