package com.autoflow.backend.exception;

import com.autoflow.backend.exception.AutoFlowException;

public class EmailAlreadyExistsException extends AutoFlowException {
    
    public EmailAlreadyExistsException(String email) {
        super(String.format("O email '%s' já está cadastrado no sistema", email));
    }

    public EmailAlreadyExistsException(String email, Throwable cause) {
        super(String.format("O email '%s' já está cadastrado no sistema", email), cause);
    }
} 