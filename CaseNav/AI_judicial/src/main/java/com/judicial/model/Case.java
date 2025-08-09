package com.judicial.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "cases")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Case {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String caseId;
    private String caseType;

    @Temporal(TemporalType.DATE)
    private Date filingDate;

    private int pendingDays;
    private String urgencyLevel;
    private String status;
}
