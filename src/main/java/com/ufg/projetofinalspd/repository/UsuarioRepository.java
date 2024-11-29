package com.ufg.projetofinalspd.repository;

import com.ufg.projetofinalspd.entities.Usuario;
import com.ufg.projetofinalspd.enums.Sexo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    List<Usuario> findBySexo(Sexo sexo);

    List<Usuario> findByUf(String uf);
}
