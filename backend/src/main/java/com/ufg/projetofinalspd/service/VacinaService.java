package com.ufg.projetofinalspd.service;

import com.ufg.projetofinalspd.entities.Vacina;
import com.ufg.projetofinalspd.repository.VacinaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VacinaService {

    @Autowired
    private VacinaRepository vacinaRepository;

    public Vacina criarVacina(Vacina vacina) {
        return vacinaRepository.save(vacina);
    }

    public List<Vacina> listarTodas() {
        return vacinaRepository.findAll();
    }

    public List<Vacina> filtrarPorNome(String nome){
        return vacinaRepository.findByNome(nome);
    }

    public void excluirVacina(Long id) {
        if (!vacinaRepository.existsById(id)) {
            throw new RuntimeException("Vacina não encontrada");
        }
        vacinaRepository.deleteById(id);
    }
}
