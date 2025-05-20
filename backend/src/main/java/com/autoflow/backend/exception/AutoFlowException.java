package com.autoflow.backend.exception;

public class AutoFlowException extends RuntimeException {

    public AutoFlowException(String message) {
        super(message);
    }

    public AutoFlowException(String message, Throwable cause) {
        super(message, cause);
    }
}