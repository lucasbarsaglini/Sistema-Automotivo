package com.autoflow.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.autoflow.backend.model.User;
import com.autoflow.backend.repository.UserRepository;
import com.autoflow.backend.dto.RegisterRequest;
import com.autoflow.backend.exception.EmailAlreadyExistsException;
import com.autoflow.backend.exception.InvalidRequestException;

@Service
public class RegisterService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void register(RegisterRequest request) {
        validateRequest(request);

        if (userRepository.existsByEmail(request.email())) {
            throw new EmailAlreadyExistsException("E-mail já cadastrado");
        }

        User user = new User(
            request.name(),
            request.email(),
            passwordEncoder.encode(request.password())
        );

        userRepository.save(user);
    }

    private void validateRequest(RegisterRequest request) {
        if (request == null) {
            throw new InvalidRequestException("Dados de registro não podem ser nulos");
        }

        if (!StringUtils.hasText(request.email())) {
            throw InvalidRequestException.campoObrigatorio("email");
        }

        if (!StringUtils.hasText(request.password())) {
            throw InvalidRequestException.campoObrigatorio("senha");
        }

        if (!StringUtils.hasText(request.name())) {
            throw InvalidRequestException.campoObrigatorio("nome");
        }

        if (request.password().length() < 6) {
            throw InvalidRequestException.tamanhoMinimo("senha", 6);
        }
    }
}
