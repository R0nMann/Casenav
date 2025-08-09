package com.judicial.service;

import com.judicial.model.Case;
import com.judicial.repository.CaseRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

@Service
public class CaseService {

    @Autowired
    private CaseRepository caseRepository;

    public Case addCase(Case newCase) {
        if (newCase.getPendingDays() > 365) {
            newCase.setUrgencyLevel("High");
        } else if (newCase.getPendingDays() > 180) {
            newCase.setUrgencyLevel("Medium");
        } else {
            newCase.setUrgencyLevel("Low");
        }
        return caseRepository.save(newCase);
    }

    public List<Case> getAllCases() {
        return caseRepository.findAll();
    }

    public List<Case> getPrioritizedCases() {
        return caseRepository.findAll()
                .stream()
                .sorted(Comparator.comparing(
                    c -> c.getUrgencyLevel() == null ? "" : c.getUrgencyLevel(),
                    Comparator.reverseOrder()
                ))
                .toList();
    }
}