package com.autoflow.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.autoflow.backend.dto.RegisterRequest;
import com.autoflow.backend.service.RegisterService;

import jakarta.validation.Valid;

@RestController
public class RegisterController {

    @Autowired
    private RegisterService registerService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@Valid @RequestBody RegisterRequest request) {
        registerService.register(request);
        return ResponseEntity.ok("Usuário registrado com sucesso!");
    }
}