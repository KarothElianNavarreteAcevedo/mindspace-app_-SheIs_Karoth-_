---
name: MindSpace Retrowave
description: >-
  Sistema de diseño retrowave para prevención y salud mental juvenil. Diseñado
  para un agente AI generativo que construye y mantiene la interfaz.
version: alpha
$schema: https://raw.githubusercontent.com/google-labs-code/design.md/main/design.schema.json

colors:
  background: "#131318"
  surface: "#1f1f25"
  surface-container: "#1f1f25"
  surface-container-low: "#1b1b20"
  surface-container-lowest: "#0e0e13"
  surface-container-high: "#2a292f"
  surface-container-highest: "#35343a"
  primary: "#e3fdff"
  primary-container: "#00f3ff"
  secondary: "#ffabf3"
  secondary-container: "#fe00fe"
  tertiary: "#e8ffda"
  tertiary-container: "#36fd0f"
  tertiary-fixed-dim: "#2ae500"
  on-background: "#e4e1e9"
  on-surface: "#e4e1e9"
  on-surface-variant: "#b9cacb"
  outline: "#849495"
  error: "#ffb4ab"
  error-container: "#93000a"

typography:
  display-lg:
    fontFamily: Syne
    fontSize: 72px
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Syne
    fontSize: 40px
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.2
  headline-md:
    fontFamily: Syne
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.03em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.01em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.02em
  label-lg:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.1em
  label-md:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0.15em
  label-caps:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.2em
  button-text:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.05em
    textTransform: uppercase

spacing:
  unit: 8px
  margin-mobile: 16px
  margin-desktop: 64px
  gutter: 24px
  section-mobile: 48px
  section-desktop: 96px
  container-max: 1280px

rounded:
  sm: 2px
  md: 4px
  lg: 8px
  xl: 12px
  full: 12px

breakpoints:
  mobile: 480px
  tablet: 1024px
  desktop: 1280px

animation:
  duration-fast: 150ms
  duration-normal: 300ms
  duration-slow: 500ms
  easing-default: cubic-bezier(0.4, 0, 0.2, 1)
  easing-emphasis: cubic-bezier(0.4, 0, 0, 1)
  scanline-speed: 6s

components:
  glass-card:
    background: "rgba(14, 14, 19, 0.75)"
    border: "1px solid rgba(0, 243, 255, 0.2)"
    backdropFilter: "blur(20px)"
    borderRadius: 12px
    padding: 24px
  glass-card-high:
    background: "rgba(14, 14, 19, 0.85)"
    border: "1px solid rgba(0, 243, 255, 0.4)"
    backdropFilter: "blur(24px)"
    borderRadius: 12px
    boxShadow: "0 0 30px rgba(0, 243, 255, 0.15)"
  neon-glow-primary:
    boxShadow: >-
      0 0 20px rgba(0, 243, 255, 0.7), inset 0 0 10px rgba(0, 243, 255, 0.4)
  neon-glow-secondary:
    boxShadow: >-
      0 0 20px rgba(254, 0, 254, 0.7), inset 0 0 10px rgba(254, 0, 254, 0.4)
  neon-glow-tertiary:
    boxShadow: >-
      0 0 20px rgba(54, 253, 15, 0.7), inset 0 0 10px rgba(54, 253, 15, 0.4)
  bottom-nav:
    background: "rgba(14, 14, 19, 0.95)"
    borderTop: "4px solid #00f3ff"
    backdropFilter: "blur(24px)"
    height: 72px
  primary-button:
    background: "#00f3ff"
    color: "#0e0e13"
    fontFamily: Space Mono
    fontWeight: 700
    fontSize: 14px
    letterSpacing: 0.05em
    textTransform: uppercase
    border: "2px solid #00f3ff"
    borderRadius: 8px
    padding: "14px 28px"
    hover:
      boxShadow: "0 0 20px rgba(0, 243, 255, 0.7)"
  secondary-button:
    background: transparent
    color: "#00f3ff"
    fontFamily: Space Mono
    fontWeight: 700
    fontSize: 14px
    letterSpacing: 0.05em
    textTransform: uppercase
    border: "2px solid #00f3ff"
    borderRadius: 8px
    padding: "14px 28px"
    hover:
      background: "rgba(0, 243, 255, 0.1)"
  scanline:
    width: 100%
    height: 6px
    background: "linear-gradient(to bottom, transparent, rgba(0, 243, 255, 0.4), transparent)"
  grid-bg:
    backgroundImage: >-
      linear-gradient(to right, rgba(0, 243, 255, 0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0, 243, 255, 0.1) 1px, transparent 1px)
    backgroundSize: "40px 40px"
  progress-bar:
    height: 8px
    background: "rgba(255, 255, 255, 0.1)"
    borderRadius: 4px
    fill:
      background: "linear-gradient(90deg, #00f3ff, #fe00fe)"
      borderRadius: 4px
---

# MindSpace Retrowave — Design System

## Overview

MindSpace es una PWA de prevención y salud mental para jóvenes de 12 a 25
años. El diseño combina la estética **retrowave** (cyberpunk / neon / 80s
nostalgia) con la calidez y seguridad que necesita una app de salud mental. El
resultado es un espacio que los jóvenes perciben como cool, inmersivo y
seguro, no como una herramienta clínica fría.

Cada decisión de diseño está pensada para reducir el estigma y fomentar la
conexión emocional a través de una identidad visual audaz pero contenida.

## Brand Values

- **Futuro esperanzador** — El retrowave mira al pasado para imaginar un
  futuro mejor. MindSpace mira la salud mental con la misma promesa.
- **Seguridad** — El cyan (#00f3ff) y el magenta (#fe00fe) son vibrantes pero
  están contenidos en fondos oscuros, creando un espacio seguro y controlado.
- **Inmersión** — Animaciones sutiles (scanline, grid, glows) crean una
  experiencia envolvente sin distraer.
- **Juventud** — Tipografía display Syne, monospace Space Mono, botones con
  tracking amplio, bordes brillantes. Lenguaje visual que resuena con la
  cultura digital juvenil.

## Colors

### System Colors

| Token                 | Hex       | Usage                                            |
| --------------------- | --------- | ------------------------------------------------ |
| `primary`             | `#e3fdff` | Texto y contenido sobre primary-container        |
| `primary-container`   | `#00f3ff` | Acciones principales, enlaces, elementos activos |
| `secondary-container` | `#fe00fe` | Acentos secundarios, badges, highlights          |
| `tertiary-container`  | `#36fd0f` | Logros, completado, refuerzo positivo            |
| `background`          | `#131318` | Fondo general de la app                          |
| `surface`             | `#1f1f25` | Tarjetas, contenedores elevados                  |
| `on-background`       | `#e4e1e9` | Texto principal                                  |
| `on-surface-variant`  | `#b9cacb` | Texto secundario, metadatos                      |
| `outline`             | `#849495` | Bordes, divisores                                |

### Semantic Assignments

- **#00f3ff (cyan)** = Acción, navegación, "lo que puedes tocar" / confianza
- **#fe00fe (magenta)** = Creatividad, expresión, emociones
- **#36fd0f (verde neón)** = Progreso, logros, completado, éxito

## Typography

### Font Stack

- **Syne** — Display. Usar para headlines, títulos grandes, hero text. Sin
  serifa, geométrica, peso bold-extrabold. Transmite modernidad y presencia.
- **Inter** — Cuerpo de texto. Usar párrafos, descripciones, contenido largo.
  Excelente legibilidad en pantalla.
- **Space Mono** — Labels, botones, código, stats. Monospace para dar ritmo
  visual y énfasis técnico/retro.

### Type Scale

| Token       | Font       | Size            | Weight | Letter-spacing     |
| ----------- | ---------- | --------------- | ------ | ------------------ |
| display-lg  | Syne       | 72px / 40px mob | 800    | -0.02em            |
| headline-lg | Syne       | 48px / 32px mob | 700    | 0.05em             |
| headline-md | Syne       | 28px            | 700    | 0.03em             |
| body-lg     | Inter      | 18px            | 400    | 0.01em             |
| body-md     | Inter      | 16px            | 400    | 0.01em             |
| body-sm     | Inter      | 14px            | 400    | 0.02em             |
| label-lg    | Space Mono | 14px            | 700    | 0.1em              |
| label-md    | Space Mono | 12px            | 400    | 0.15em             |
| label-caps  | Space Mono | 12px            | 700    | 0.2em              |
| button-text | Space Mono | 14px            | 700    | 0.05em + uppercase |

## Layout

### Grid

- Sistema de 4 columnas en mobile, 8 en tablet, 12 en desktop.
- Margen lateral: 16px mobile, 64px desktop.
- Gutter: 24px.
- Container max-width: 1280px.

### Section Spacing

- Separación entre secciones: 48px mobile, 96px desktop.
- Padding interno de tarjetas: 24px.

## Shapes

### Border Radius

| Token | Value                                      |
| ----- | ------------------------------------------ |
| sm    | 2px                                        |
| md    | 4px                                        |
| lg    | 8px                                        |
| xl    | 12px                                       |
| full  | 12px (no hay elementos circulares grandes) |

### Borders

Todos los componentes elevados (tarjetas, modales) usan bordes translúcidos:

- `1px solid rgba(0, 243, 255, 0.2)` para glass-card normal
- `1px solid rgba(0, 243, 255, 0.4)` para glass-card-high

## Components

### Glass Card

```
<element class="glass-card">
  backdrop-filter: blur(20px)
  background: rgba(14, 14, 19, 0.75)
  border: 1px solid rgba(0, 243, 255, 0.2)
  border-radius: 12px
  padding: 24px
</element>
```

### Bottom Navigation

Altura: 72px. Borde superior de 4px sólido cyan. Fondo casi opaco con blur.

### Buttons

Primary: Fondo cyan sólido, texto oscuro, uppercase, Space Mono.
Secondary: Outline cyan, fondo transparente, uppercase.

### Progress Bar

Fondo translúcido, fill con gradiente horizontal cyan → magenta.

### Atmospheric Effects

- **Scanline**: Banda horizontal animada que baja lentamente (6s loop).
- **Grid background**: Patrón de rejilla sutíl para secciones hero.
- **Neon glow**: Sombras exteriores e interiores en colores primarios.

## Do's

- Usar glass cards con backdrop-filter para profundidad.
- Mantener el contraste alto (fondo oscuro + texto claro + neones).
- Usar animaciones sutiles (scanline, glows, gradientes animados).
- Priorizar Space Mono para botones y labels (da identidad).
- Mantener la cuadrícula de 40px en fondos decorativos.

## Don'ts

- No usar blanco puro (#FFF) — usar siempre on-background (#e4e1e9) o
  variantes.
- No saturar de neón cada elemento — el contraste necesita reposo visual.
- No usar sombras negras — siempre usar sombras del color neón
  correspondiente.
- No mezclar estilos no-retrowave (flat design, material you,
  neumorphism).
- No agrandar el scanline más de 6px — debe ser sutil, no dominante.
