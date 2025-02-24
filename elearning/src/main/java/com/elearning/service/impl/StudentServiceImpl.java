package com.elearning.service.impl;

import com.elearning.exception.StudentNotFoundException;
import com.elearning.model.Student;
import com.elearning.repository.StudentRepository;
import com.elearning.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student createStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public Student getStudentById(Long id) {
        return studentRepository.findById(id)
            .orElseThrow(() -> new StudentNotFoundException("Student not found with ID: " + id));
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }

    @Override
    public Student updateStudent(Long id, Student student) {
        Student existingStudent = getStudentById(id);
        existingStudent.setFirstName(student.getFirstName());
        existingStudent.setLastName(student.getLastName());
        existingStudent.setEmailPro(student.getEmailPro());
        existingStudent.setEmailPerso(student.getEmailPerso());
        existingStudent.setPhoneNumber(student.getPhoneNumber());
        existingStudent.setAddress(student.getAddress());
        existingStudent.setArchive(student.isArchive());
        existingStudent.setRegistrationNu(student.getRegistrationNu());
        return studentRepository.save(existingStudent);
    }
}
