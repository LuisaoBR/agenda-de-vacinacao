package com.ufg.projetofinalspd.controller;

import com.ufg.projetofinalspd.entities.Alergia;
import com.ufg.projetofinalspd.service.AlergiaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/alergias")
public class AlergiaController {

    @Autowired
    private AlergiaService alergiaService;

    @PostMapping
    public ResponseEntity<Alergia> criarAlergia(@RequestBody Alergia alergia) {
        return ResponseEntity.ok(alergiaService.criarAlergia(alergia));
    }

    @GetMapping
    public ResponseEntity<List<Alergia>> listarAlergias() {
        return ResponseEntity.ok(alergiaService.listarTodas());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirAlergia(@PathVariable Long id) {
        alergiaService.excluirAlergia(id);
        return ResponseEntity.noContent().build();
    }
}
