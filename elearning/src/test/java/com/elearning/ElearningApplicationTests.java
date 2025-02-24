package com.elearning;

import com.elearning.service.RegistrationService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.hibernate.validator.internal.util.Contracts.assertNotNull;


@SpringBootTest
public class ElearningApplicationTests {
    @Autowired
    private RegistrationService registrationService;

    @Test
    void contextLoads() {
        assertNotNull(registrationService);
    }
}
