package com.ufg.projetofinalspd.dto;

import lombok.Data;

import java.util.List;

@Data
public class UsuarioDTO {

    private String nome;
    private String sexo; // "MASCULINO" ou "FEMININO"
    private String uf;   // Exemplo: "GO"
    private List<Long> alergias; // Lista de IDs de alergias
}
