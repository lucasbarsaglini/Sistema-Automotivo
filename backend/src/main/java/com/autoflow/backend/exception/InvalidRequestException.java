package com.autoflow.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

public class InvalidRequestException extends RuntimeException {

    public InvalidRequestException(String message) {
        super(message);
    }

    public InvalidRequestException(String message, Throwable cause) {
        super(message, cause);
    }

    public static InvalidRequestException campoObrigatorio(String campo) {
        return new InvalidRequestException(String.format("O campo '%s' é obrigatório", campo));
    }

    public static InvalidRequestException tamanhoMinimo(String campo, int tamanho) {
        return new InvalidRequestException(String.format("O campo '%s' deve ter pelo menos %d caracteres", campo, tamanho));
    }
}