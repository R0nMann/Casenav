package com.judicial.controller;

import com.judicial.model.Case;
import com.judicial.service.CaseService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cases")
public class CaseController {
    @Autowired
    private CaseService caseService;

    @GetMapping
    public ResponseEntity<List<Case>> getAllCases() {
        List<Case> cases = caseService.getAllCases();
        return ResponseEntity.ok(cases);
    }
    @GetMapping("/prioritized")
    public ResponseEntity<List<Case>> getPrioritizedCases() {
        List<Case> cases = caseService.getPrioritizedCases();
        return ResponseEntity.ok(cases);
    }

    @PostMapping
    public ResponseEntity<Case> addCase(@RequestBody Case newCase) {
        Case savedCase = caseService.addCase(newCase);
        return ResponseEntity.ok(savedCase);
    }
}
