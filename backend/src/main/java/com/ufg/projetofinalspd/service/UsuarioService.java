package com.ufg.projetofinalspd.service;

import com.ufg.projetofinalspd.dto.UsuarioDTO;
import com.ufg.projetofinalspd.entities.Alergia;
import com.ufg.projetofinalspd.entities.Usuario;
import com.ufg.projetofinalspd.enums.Sexo;
import com.ufg.projetofinalspd.repository.AlergiaRepository;
import com.ufg.projetofinalspd.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private AlergiaRepository alergiaRepository;

    public Usuario criarUsuario(UsuarioDTO usuarioDTO) {

        // Cria um usuario usando o DTO para criar uma lista de IDs das alergias
        Usuario usuario = new Usuario();
        usuario.setNome(usuarioDTO.getNome());
        usuario.setSexo(Sexo.valueOf(usuarioDTO.getSexo().toUpperCase()));
        usuario.setUf(usuarioDTO.getUf());

        // Buscar as alergias pelo ID e associa ao usuario
        List<Alergia> alergias = alergiaRepository.findAllById(usuarioDTO.getAlergias());
        usuario.setAlergias(alergias);

        return usuarioRepository.save(usuario);
    }

    public List<Usuario> listarTodos() {
        return usuarioRepository.findAll();
    }

    public List<Usuario> filtrarPorSexo(Sexo sexo){
        return usuarioRepository.findBySexo(sexo);
    }

    public List<Usuario> filtrarPorUf(String uf){
        return usuarioRepository.findByUf(uf);
    }

    public Usuario adicionarAlergias(Long usuarioId, List<Long> alergiaIds) {
        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        List<Alergia> alergias = alergiaRepository.findAllById(alergiaIds);
        usuario.getAlergias().addAll(alergias);

        return usuarioRepository.save(usuario);
    }

    public void excluirUsuario(Long id) {
        if (!usuarioRepository.existsById(id)) {
            throw new RuntimeException("Usuário não encontrado");
        }
        usuarioRepository.deleteById(id);
    }
}
