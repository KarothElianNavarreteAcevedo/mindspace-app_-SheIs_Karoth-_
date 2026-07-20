# 🌌 MindSpace

**Espacio seguro de prevención, ciencia y salud mental para jóvenes.**  
*Safe space for prevention, science and youth mental health.*

---

## 🇪🇸 Español

### 📋 Descripción

MindSpace es una aplicación web progresiva (PWA) diseñada para jóvenes de 13 a 18 años. Su objetivo es ofrecer información científica sobre neurobiología y prevención de sustancias, herramientas de regulación emocional, y acceso inmediato a líneas de ayuda profesional — todo en un entorno visual retro-wave que conecta con la cultura juvenil.

### 🧭 Mapa del sitio

| Archivo | Pantalla | Descripción |
|---------|----------|-------------|
| `index.html` | Cerebro STEAM | Mapa interactivo del cerebro con hotspots que explican el impacto de sustancias en cada región neural |
| `ciencia.html` | Feed de Ciencia | Carrusel de videos inmersivos + infografías estilo bento grid sobre neurociencia y carreras STEAM |
| `calma.html` | Frecuencias de Calma | Reproductor de terapia sonora con frecuencias binaurales, meditaciones guiadas, afirmaciones y mezclador de sonido |
| `sos.html` | Línea SOS | Acceso directo a Línea 106 (llamada) y Línea Psicoactiva (WhatsApp) con datos de privacidad |
| `feedback.html` | Comunidad | Formulario de feedback con rating, selección estética y campo de texto libre — conectado a Netlify Forms |
| `progreso.html` | Mi Progreso | Contador de días, salud recuperada %, ahorro acumulado, medallas de logro y gráfico SVG de vitalidad |
| `descompresion.html` | Zona de Descompresión | Avatar de evolución, barra de vitalidad, minijuegos (burbujas, caza pensamientos, jardín virtual) y misiones diarias |
| `misiones.html` | Misiones y Recompensas | Avatar con stats (Dopamina Sana, Serenidad, Resiliencia), reto del día, logros y tienda de recompensas |
| `segura.html` | Mi Zona Segura | Galería de motivación, diario "Escribe y Quema" con animación de partículas, y playlists anti-ansiedad |

### 🚀 Cómo desplegar (para principiantes)

**Requisitos:** Solo necesitas un navegador web y una cuenta gratuita en GitHub y Netlify.

#### Paso 1: Descargar los archivos
1. En este repositorio, haz clic en el botón verde **"Code"** > **"Download ZIP"**
2. Descomprime el archivo en tu computadora

#### Paso 2: Subir a GitHub
1. Ve a [github.com](https://github.com) e inicia sesión (o crea una cuenta gratis)
2. Haz clic en el botón **"+"** (esquina superior derecha) > **"New repository"**
3. Nombra el repositorio `mindspace` (puede ser cualquier nombre)
4. Deja todo por defecto y haz clic en **"Create repository"**
5. En la nueva página, verás instrucciones. Elige la opción **"uploading an existing file"**
6. Arrastra TODA la carpeta `mindspace-app` (los archivos que descomprimiste) a la ventana del navegador
7. Escribe un mensaje como "Primera subida de MindSpace" y haz clic en **"Commit changes"**

#### Paso 3: Desplegar en Netlify
1. Ve a [netlify.com](https://netlify.com) e inicia sesión (puedes usar tu cuenta de GitHub)
2. Haz clic en **"Add new site"** > **"Import an existing project"**
3. Selecciona **"Deploy with GitHub"**
4. Autoriza a Netlify para acceder a tus repositorios (solo lectura)
5. Busca y selecciona el repositorio `mindspace`
6. Netlify detectará los archivos automáticamente — **no cambies nada en la configuración**
7. Haz clic en **"Deploy site"**
8. ¡Listo! En menos de 2 minutos tu sitio estará vivo en una URL como `https://mindspace-xxxxx.netlify.app`

#### Paso 4: Recibir feedbacks por correo
1. En tu dashboard de Netlify, ve a la pestaña **"Forms"**
2. Haz clic en **"Add notification"** > **"Email notification"**
3. Ingresa tu correo electrónico y selecciona el formulario "MindSpace Feedback"
4. Cada vez que alguien envíe feedback desde la app, te llegará un correo

### 🧩 Estructura del proyecto

```
mindspace-app/
├── index.html           # Pantalla principal - Cerebro STEAM
├── ciencia.html         # Feed de Ciencia
├── calma.html           # Frecuencias de Calma
├── sos.html             # Línea SOS
├── feedback.html        # Comunidad y Feedback
├── progreso.html        # Mi Progreso
├── descompresion.html   # Zona de Descompresión
├── misiones.html        # Misiones y Recompensas
├── segura.html          # Mi Zona Segura
├── manifest.json        # Configuración PWA (instalable en celular)
├── sw.js                # Service Worker (funciona sin internet)
├── icon.svg             # Icono vectorizado
├── icon-192.png         # Icono 192px para PWA
├── icon-512.png         # Icono 512px para PWA
└── README.md            # Este archivo
```

### 🛠️ Stack técnico

| Tecnología | Uso |
|------------|-----|
| HTML5 | Estructura de las páginas |
| Tailwind CSS v3 (CDN) | Estilos y diseño responsive |
| Google Fonts (Syne, Space Mono, Inter) | Tipografía personalizada |
| Material Symbols | Iconografía |
| Vanilla JavaScript | Interactividad y micro-animaciones |
| Netlify Forms | Captura de feedback |
| PWA (manifest + SW) | Instalación en dispositivo y modo offline |

### ⚡ Funcionalidades PWA

- **Instalable** en Android, iOS, Windows y macOS desde el navegador
- **Offline**: funciona sin conexión a internet después de la primera carga
- **Pantalla completa**: se abre como una app nativa, sin barra de navegador
- **Actualización automática**: el Service Worker se actualiza en segundo plano

### 🔒 Privacidad y seguridad

- Servicio confidencial y gratuito
- Información oficial proporcionada por la **Secretaría Distrital de Salud de Bogotá**
- Datos protegidos bajo la **Ley 1581 de 2012** (Colombia)
- Sin registro de usuarios ni almacenamiento de datos personales

---

## 🇬🇧 English

### 📋 Description

MindSpace is a Progressive Web App (PWA) designed for teens aged 13–18. It provides science-based information on neurobiology and substance prevention, emotional regulation tools, and immediate access to professional crisis helplines — all wrapped in a retro-wave aesthetic that resonates with youth culture.

### 🧭 Site Map

| File | Screen | Description |
|------|--------|-------------|
| `index.html` | STEAM Brain | Interactive brain map with hotspots explaining substance impact on neural regions |
| `ciencia.html` | Science Feed | Immersive video carousel + bento grid infographics on neuroscience and STEAM careers |
| `calma.html` | Calm Frequencies | Sound therapy player with binaural beats, guided meditations, affirmations and sound mixer |
| `sos.html` | SOS Line | Direct access to Helpline 106 (call) and Psicoactiva Line (WhatsApp) with privacy info |
| `feedback.html` | Community | Feedback form with rating, aesthetic selector and free text — connected to Netlify Forms |
| `progreso.html` | My Progress | Day counter, health recovered %, savings, achievement badges and SVG vitality chart |
| `descompresion.html` | Decompression Zone | Evolution avatar, vitality bar, mini-games (bubbles, thought hunter, virtual garden) and daily missions |
| `misiones.html` | Missions & Rewards | Avatar stats (Healthy Dopamine, Serenity, Resilience), daily challenge, achievements and rewards shop |
| `segura.html` | My Safe Zone | Motivation gallery, "Write & Burn" journal with particle animation, and anti-anxiety playlists |

### 🚀 How to Deploy (for beginners)

**Requirements:** Just a web browser and free accounts on GitHub and Netlify.

#### Step 1: Download the files
1. On this repository, click the green **"Code"** button > **"Download ZIP"**
2. Unzip the file on your computer

#### Step 2: Upload to GitHub
1. Go to [github.com](https://github.com) and sign in (or create a free account)
2. Click the **"+"** button (top right) > **"New repository"**
3. Name the repository `mindspace` (any name works)
4. Leave everything as default and click **"Create repository"**
5. On the new page, choose **"uploading an existing file"**
6. Drag the entire `mindspace-app` folder into the browser window
7. Write a message like "First upload of MindSpace" and click **"Commit changes"**

#### Step 3: Deploy on Netlify
1. Go to [netlify.com](https://netlify.com) and sign in (you can use your GitHub account)
2. Click **"Add new site"** > **"Import an existing project"**
3. Select **"Deploy with GitHub"**
4. Authorize Netlify to access your repositories (read-only)
5. Find and select the `mindspace` repository
6. Netlify will detect the files automatically — **don't change any settings**
7. Click **"Deploy site"**
8. Done! In under 2 minutes your site will be live at a URL like `https://mindspace-xxxxx.netlify.app`

#### Step 4: Receive feedback by email
1. In your Netlify dashboard, go to the **"Forms"** tab
2. Click **"Add notification"** > **"Email notification"**
3. Enter your email address and select the "MindSpace Feedback" form
4. Every time someone sends feedback from the app, you'll get an email

### 🧩 Project structure

```
mindspace-app/
├── index.html           # Home - STEAM Brain
├── ciencia.html         # Science Feed
├── calma.html           # Calm Frequencies
├── sos.html             # SOS Line
├── feedback.html        # Community & Feedback
├── progreso.html        # My Progress
├── descompresion.html   # Decompression Zone
├── misiones.html        # Missions & Rewards
├── segura.html          # My Safe Zone
├── manifest.json        # PWA config (installable on phone)
├── sw.js                # Service Worker (works offline)
├── icon.svg             # Vector icon
├── icon-192.png         # 192px icon for PWA
├── icon-512.png         # 512px icon for PWA
└── README.md            # This file
```

### 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Page structure |
| Tailwind CSS v3 (CDN) | Styles and responsive design |
| Google Fonts (Syne, Space Mono, Inter) | Custom typography |
| Material Symbols | Icons |
| Vanilla JavaScript | Interactivity and micro-animations |
| Netlify Forms | Feedback capture |
| PWA (manifest + SW) | Device installation and offline mode |

### ⚡ PWA Features

- **Installable** on Android, iOS, Windows and macOS from the browser
- **Offline**: works without internet connection after first load
- **Full-screen**: opens as a native app, no browser UI
- **Auto-update**: Service Worker updates in background

### 🔒 Privacy & Security

- Confidential and free service
- Official information provided by the **Secretaría Distrital de Salud de Bogotá**
- Data protected under **Law 1581 of 2012** (Colombia)
- No user registration or personal data storage

---

## 📄 Licencia / License

Proyecto educativo sin fines de lucro.  
*Non-profit educational project.*

---

*MindSpace — Un proyecto de Karol The Liz / 2026*
