package com.elearning.service.impl;

import com.elearning.exception.RegistrationNotFoundException;
import com.elearning.model.Registration;
import com.elearning.repository.RegistrationRepository;
import com.elearning.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class RegistrationServiceImpl implements RegistrationService {

    @Autowired
    private RegistrationRepository registrationRepository;

    @Override
    public Registration createRegistration(Registration registration) {
        return registrationRepository.save(registration);
    }

    @Override
    public Registration getRegistrationById(Long id) {
        return registrationRepository.findById(id)
            .orElseThrow(() -> new RegistrationNotFoundException("Registration not found with ID: " + id));
    }

    @Override
    public List<Registration> getAllRegistrations() {
        return registrationRepository.findAll();
    }

    @Override
    public void deleteRegistration(Long id) {
        registrationRepository.deleteById(id);
    }

    @Override
    public Registration updateRegistration(Long id, Registration registration) {
        Registration existingRegistration = getRegistrationById(id);
        existingRegistration.setDate(registration.getDate());
        existingRegistration.setDescription(registration.getDescription());
        existingRegistration.setArchive(registration.isArchive());
        existingRegistration.setStudent(registration.getStudent());
        existingRegistration.setClasses(registration.getClasses());
        return registrationRepository.save(existingRegistration);
    }

    @Override
    public List<Registration> getRegistrationsByStudentId(Long studentId) {
        return registrationRepository.findByStudentId(studentId);
    }
}
