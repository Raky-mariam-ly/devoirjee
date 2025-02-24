package com.elearning.exception;

public class ClassesNotFoundException extends RuntimeException {
    public ClassesNotFoundException(String message) {
        super(message);
    }
}
