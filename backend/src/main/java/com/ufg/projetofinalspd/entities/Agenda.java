package com.ufg.projetofinalspd.entities;

import com.ufg.projetofinalspd.enums.Situacao;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity(name = "agenda")
@Table(name = "agenda")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Agenda {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private LocalDate data; // ANO-MES-DIA Ex: 2023-12-01

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Situacao situacao; // AGENDADO, REALIZADO, CANCELADO

    private LocalDate dataSituacao;

    @ManyToOne
    private Usuario usuario;

    @ManyToOne
    private Vacina vacina;


}
