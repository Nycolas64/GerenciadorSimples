package com.GerenciadorSimples.GerenciadorSimples.dto;

import jakarta.validation.constraints.NotBlank;

public record TaskDTO(
        @NotBlank String title,
        String description,
        boolean completed
) {
}