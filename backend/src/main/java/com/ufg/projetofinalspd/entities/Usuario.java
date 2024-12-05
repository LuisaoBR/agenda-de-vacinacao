package com.ufg.projetofinalspd.entities;


import com.ufg.projetofinalspd.enums.Sexo;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity(name = "usuario")
@Table(name = "usuario")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Enumerated(EnumType.STRING)
    private Sexo sexo; // MASCULINO ou FEMININO

    @Column(length = 2)
    private String uf; // Somente a sigla

    @ManyToMany
    @JoinTable(
            name = "usuario_alergia",
            joinColumns = @JoinColumn(name = "usuario_id"),
            inverseJoinColumns = @JoinColumn(name = "alergia_id")
    )
    private List<Alergia> alergias; // No DTO é uma lista de Long para armazenar os IDs das alergias


}
