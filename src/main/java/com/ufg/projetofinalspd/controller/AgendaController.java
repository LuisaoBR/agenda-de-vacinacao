package com.ufg.projetofinalspd.controller;

import com.ufg.projetofinalspd.entities.Agenda;
import com.ufg.projetofinalspd.entities.Usuario;
import com.ufg.projetofinalspd.entities.Vacina;
import com.ufg.projetofinalspd.enums.Situacao;
import com.ufg.projetofinalspd.repository.UsuarioRepository;
import com.ufg.projetofinalspd.repository.VacinaRepository;
import com.ufg.projetofinalspd.service.AgendaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/agendas")
public class AgendaController {
    @Autowired
    private AgendaService agendaService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private VacinaRepository vacinaRepository;

    @PostMapping("/criar")
    public ResponseEntity<List<Agenda>> criarAgendas(
            @RequestParam Long usuarioId,
            @RequestParam Long vacinaId,
            @RequestParam String dataInicial
    ) {
        // Buscar o usuário pelo ID fornecido
        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        // Buscar a vacina pelo ID fornecido
        Vacina vacina = vacinaRepository.findById(vacinaId)
                .orElseThrow(() -> new RuntimeException("Vacina não encontrada"));

        // Criar as agendas com os dados encontrados
        List<Agenda> agendas = agendaService.criarAgendas(usuario, vacina, LocalDate.parse(dataInicial));

        return ResponseEntity.ok(agendas);
    }

    @GetMapping
    public ResponseEntity<List<Agenda>> listarAgendas() {
        return ResponseEntity.ok(agendaService.listarTodas());
    }

    @GetMapping("/situacao")
    public ResponseEntity<List<Agenda>> listarPorSituacao(@RequestParam Situacao situacao) {
        return ResponseEntity.ok(agendaService.listarPorSituacao(situacao));
    }

    @GetMapping("/do-dia")
    public ResponseEntity<List<Agenda>> listarAgendasDoDia() {
        return ResponseEntity.ok(agendaService.listarAgendasDoDia());
    }

    @PutMapping("/{id}/baixa")
    public ResponseEntity<Void> darBaixa(@PathVariable Long id, @RequestParam Situacao situacao) {
        agendaService.darBaixa(id, situacao);
        return ResponseEntity.ok().build();
    }
}
