package com.judicial.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.judicial.model.Case;

public interface CaseRepository extends JpaRepository<Case, Long> {
}
