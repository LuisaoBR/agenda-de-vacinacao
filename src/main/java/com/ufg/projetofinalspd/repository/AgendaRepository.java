package com.ufg.projetofinalspd.repository;

import com.ufg.projetofinalspd.entities.Agenda;
import com.ufg.projetofinalspd.enums.Situacao;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface AgendaRepository extends JpaRepository<Agenda, Long> {

    // Método para listar agendas por situação
    List<Agenda> findBySituacao(Situacao situacao);

    // Método para listar agendas por data
    List<Agenda> findByData(LocalDate data);
}
