package com.ufg.projetofinalspd.service;

import com.ufg.projetofinalspd.entities.Alergia;
import com.ufg.projetofinalspd.repository.AlergiaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlergiaService {

    @Autowired
    private AlergiaRepository alergiaRepository;

    public Alergia criarAlergia(Alergia alergia) {
        return alergiaRepository.save(alergia);
    }

    public List<Alergia> listarTodas() {
        return alergiaRepository.findAll();
    }

    public void excluirAlergia(Long id) {
        if (!alergiaRepository.existsById(id)) {
            throw new RuntimeException("Alergia não encontrada");
        }
        alergiaRepository.deleteById(id);
    }
}
