package com.elearning.service;

import com.elearning.model.Student;
import java.util.List;

public interface StudentService {
    Student createStudent(Student student);
    Student getStudentById(Long id);
    List<Student> getAllStudents();
    void deleteStudent(Long id);
    Student updateStudent(Long id, Student student);
}
