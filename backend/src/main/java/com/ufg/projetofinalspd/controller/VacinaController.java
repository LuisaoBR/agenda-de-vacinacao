package com.ufg.projetofinalspd.controller;

import com.ufg.projetofinalspd.entities.Vacina;
import com.ufg.projetofinalspd.service.VacinaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/vacinas")
public class VacinaController {

    @Autowired
    private VacinaService vacinaService;

    @PostMapping
    public ResponseEntity<Vacina> criarVacina(@RequestBody Vacina vacina) {
        return ResponseEntity.ok(vacinaService.criarVacina(vacina));
    }

    @GetMapping
    public ResponseEntity<List<Vacina>> listarVacinas() {
        return ResponseEntity.ok(vacinaService.listarTodas());
    }

    @GetMapping("/nome")
    public ResponseEntity<List<Vacina>> filtrarPorNome(@RequestParam String nome){
        return ResponseEntity.ok(vacinaService.filtrarPorNome(nome));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirVacina(@PathVariable Long id) {
        vacinaService.excluirVacina(id);
        return ResponseEntity.noContent().build();
    }
}
