package com.autoflow.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.autoflow.backend.model.User;
import com.autoflow.backend.repository.UserRepository;
import com.autoflow.backend.dto.LoginRequest;
import com.autoflow.backend.dto.LoginResponse;
import com.autoflow.backend.util.JwtUtil;
import com.autoflow.backend.exception.InvalidCredentialsException;
import com.autoflow.backend.exception.UserNotFoundException;

@Service
public class LoginService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    public LoginResponse authenticate(LoginRequest request) {
        // Busca o usuário pelo email
        User user = userRepository.findByEmail(request.email())
                .orElseThrow(() -> new UserNotFoundException("Usuário não encontrado"));

        // Verifica se o usuário está ativo
        if (!user.isActive()) {
            throw new InvalidCredentialsException("Usuário inativo");
        }

        // Verifica se a senha está correta
        if (!passwordEncoder.matches(request.password(), user.getPassword())) {
            throw new InvalidCredentialsException("Senha incorreta");
        }

        // Gera o token JWT
        String token = jwtUtil.generateToken(user.getEmail());
        
        // Retorna o token e o email
        return new LoginResponse(token, user.getEmail());
    }
}