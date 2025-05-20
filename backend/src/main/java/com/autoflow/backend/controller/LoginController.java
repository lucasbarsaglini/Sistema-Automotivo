package com.autoflow.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.autoflow.backend.dto.LoginRequest;
import com.autoflow.backend.dto.LoginResponse;
import com.autoflow.backend.service.LoginService;
import jakarta.validation.Valid;

@RestController
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest request) {
        LoginResponse response = loginService.authenticate(request);
        return ResponseEntity.ok(response);
    }
}