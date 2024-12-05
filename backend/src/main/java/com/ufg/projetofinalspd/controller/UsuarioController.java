package com.ufg.projetofinalspd.controller;

import com.ufg.projetofinalspd.dto.UsuarioDTO;
import com.ufg.projetofinalspd.entities.Usuario;
import com.ufg.projetofinalspd.enums.Sexo;
import com.ufg.projetofinalspd.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    public ResponseEntity<Usuario> criarUsuario(@RequestBody UsuarioDTO usuarioDTO) {

        Usuario usuario = usuarioService.criarUsuario(usuarioDTO);
        return ResponseEntity.ok(usuario);
    }

    @GetMapping
    public ResponseEntity<List<Usuario>> listarUsuarios() {
        return ResponseEntity.ok(usuarioService.listarTodos());
    }

    @PutMapping("/{id}/add-alergias")
    public ResponseEntity<Usuario> adicionarAlergias(
            @PathVariable Long id,
            @RequestBody List<Long> alergiaIds) {
        return ResponseEntity.ok(usuarioService.adicionarAlergias(id, alergiaIds));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirUsuario(@PathVariable Long id) {
        usuarioService.excluirUsuario(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/sexo")
    public ResponseEntity<List<Usuario>> filtrarPorSexo(@RequestParam Sexo sexo){
        return ResponseEntity.ok(usuarioService.filtrarPorSexo(sexo));
    }

    @GetMapping("/uf")
    public ResponseEntity<List<Usuario>> filtrarPorUf(@RequestParam String uf){
        return ResponseEntity.ok(usuarioService.filtrarPorUf(uf));
    }
}
