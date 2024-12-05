package com.ufg.projetofinalspd.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "vacina")
@Table(name = "vacina")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Vacina {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private int doses;

    private int periodicidade;

    private int intervalo;

    @Column(nullable = false)
    private String nome;

}
