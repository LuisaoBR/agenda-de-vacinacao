package com.ufg.projetofinalspd.repository;

import com.ufg.projetofinalspd.entities.Vacina;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VacinaRepository extends JpaRepository<Vacina, Long> {

    List<Vacina> findByNome(String nome);
}
