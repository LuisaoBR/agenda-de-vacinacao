package com.ufg.projetofinalspd.service;

import com.ufg.projetofinalspd.entities.Agenda;
import com.ufg.projetofinalspd.entities.Usuario;
import com.ufg.projetofinalspd.entities.Vacina;
import com.ufg.projetofinalspd.enums.Situacao;
import com.ufg.projetofinalspd.repository.AgendaRepository;
import com.ufg.projetofinalspd.repository.VacinaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class AgendaService {
    @Autowired
    private AgendaRepository agendaRepository;

    @Autowired
    private VacinaRepository vacinaRepository;


    // Regras de negócio para as agendas com os intervalos e periodicidade
    public List<Agenda> criarAgendas(Usuario usuario, Vacina vacina, LocalDate dataInicial) {
        List<Agenda> agendas = new ArrayList<>();
        int doses = vacina.getDoses();
        int intervalo = vacina.getIntervalo();

        for (int i = 0; i < doses; i++) {
            LocalDate dataAgendada = dataInicial.plusMonths((long) i * intervalo);
            Agenda agenda = new Agenda();
            agenda.setUsuario(usuario);
            agenda.setVacina(vacina);
            agenda.setData(dataAgendada);
            agenda.setSituacao(Situacao.AGENDADO);
            agendas.add(agenda);
        }

        return agendaRepository.saveAll(agendas);
    }

    public List<Agenda> listarTodas() {
        return agendaRepository.findAll();
    }

    public List<Agenda> listarPorSituacao(Situacao situacao) {
        return agendaRepository.findBySituacao(situacao);
    }

    public List<Agenda> listarAgendasDoDia() {
        LocalDate hoje = LocalDate.now();
        return agendaRepository.findByData(hoje);
    }

    public void darBaixa(Long idAgenda, Situacao novaSituacao) {
        Agenda agenda = agendaRepository.findById(idAgenda).orElseThrow(() -> new RuntimeException("Agenda não encontrada"));
        agenda.setSituacao(novaSituacao);
        agenda.setDataSituacao(LocalDate.now());
        agendaRepository.save(agenda);
    }
}
