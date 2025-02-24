package com.elearning.service;

import com.elearning.model.Registration;
import java.util.List;

public interface RegistrationService {
    Registration createRegistration(Registration registration);
    Registration getRegistrationById(Long id);
    List<Registration> getAllRegistrations();
    void deleteRegistration(Long id);
    Registration updateRegistration(Long id, Registration registration);
    List<Registration> getRegistrationsByStudentId(Long studentId);
}
