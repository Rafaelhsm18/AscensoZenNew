// =================================================================
// LANGUAGE SYSTEM
// =================================================================
const allStrings = {
    'es': {
        // MainMenuScene
        'gameTitle': 'Ascenso Zen',
        'playButton': 'JUGAR',
        'secretButton': 'VER SECRETO',
        'storeButton': 'TIENDA',
        'optionsButton': 'OPCIONES',
        'highScoreLabel': 'MÁXIMA PUNTUACIÓN: ',
        'totalShellsLabel': 'CONCHAS TOTALES: ',

        // OptionsScene
        'optionsTitle': 'Opciones',
        'musicLabel': 'Música:',
        'sfxLabel': 'Efectos:',
        'volumeOff': 'OFF',
        'volumeLow': 'BAJO',
        'volumeNormal': 'NORMAL',
        'backButton': 'VOLVER',
        'languageLabel': 'Idioma:', // Nuevo

        // StoreScene
        'storeTitle': 'Tienda',
        'shellsLabel': 'Conchas: ',
        'usingLabel': 'USANDO',
        'selectLabel': 'Elegir',

        // GameScene
        'extraLife': '¡VIDA EXTRA!',

        // SecretScene
        'secretTitle': 'El Secreto',
        'secretMessage': [
            "La corriente susurra...",
            "...un secreto.",
            "Sólo para aquellos...",
            "...que ascienden.",
            "En lo más profundo...",
            "...la luz duerme.",
            "Y en la superficie...",
            "...espera.",
            "El océano no tiene fin,",
            "ni tampoco principio.",
            "Sólo el eterno ascenso.",
            "Sigue nadando,",
            "sigue soñando.",
            "La paz se encuentra...",
            "...en el movimiento.",
            "ZEN"
        ],

        // GameOverScene
        'gameOverTitle': 'FIN DE LA PARTIDA',
        'scoreLabel': 'Puntos: ',
        'collectedLabel': 'Conchas Recolectadas: ',
        'newClues': (n) => `¡Has revelado ${n} pista(s) nueva(s)!`, // Función para plurales
        'continueCost': (c) => `1 VIDA EXTRA (${c} Conchas)`,
        'continueAd': '1 VIDA EXTRA (Ver Anuncio)',
        'endButton': 'TERMINAR',
        'maxScoreLabel': 'Máximo: ',
        'menuButton': 'MENÚ PRINCIPAL',
        'bonusButton': (c) => `JUGAR + Bonus x1.2 (${c})`, 
        'bonusActive': '¡Bonus Activado!',
        'bonusNeeds': (c) => `Jugar + Bonus (Req: ${c})`, 
        'loadingAd': 'Cargando anuncio...',
        'cancelButton': 'CANCELAR',
        'adError': 'Publicidad no disponible ahora.',

        'missionsButton': 'MISIONES',
        'missionsTitle': 'Misiones Diarias',
        'missionClaim': 'RECLAMAR',
        'missionComplete': '¡COMPLETADO!',
    },
    'en': {
        // MainMenuScene
        'gameTitle': 'Zen Ascent',
        'playButton': 'PLAY',
        'secretButton': 'VIEW SECRET',
        'storeButton': 'STORE',
        'optionsButton': 'OPTIONS',
        'highScoreLabel': 'HIGH SCORE: ',
        'totalShellsLabel': 'TOTAL SHELLS: ',

        // OptionsScene
        'optionsTitle': 'Options',
        'musicLabel': 'Music:',
        'sfxLabel': 'Effects:',
        'volumeOff': 'OFF',
        'volumeLow': 'LOW',
        'volumeNormal': 'NORMAL',
        'backButton': 'BACK',
        'languageLabel': 'Language:', // Nuevo

        // StoreScene
        'storeTitle': 'Store',
        'shellsLabel': 'Shells: ',
        'usingLabel': 'USING',
        'selectLabel': 'Select',

        // GameScene
        'extraLife': 'EXTRA LIFE!',

        // SecretScene
        'secretTitle': 'The Secret',
        'secretMessage': [
            "The current whispers...",
            "...a secret.",
            "Only for those...",
            "...who ascend.",
            "In the deepest depths...",
            "...the light sleeps.",
            "And on the surface...",
            "...it waits.",
            "The ocean has no end,",
            "nor a beginning.",
            "Only the eternal ascent.",
            "Keep swimming,",
            "keep dreaming.",
            "Peace is found...",
            "...in movement.",
            "ZEN"
        ],

        // GameOverScene
        'gameOverTitle': 'GAME OVER',
        'scoreLabel': 'Score: ',
        'collectedLabel': 'Shells Collected: ',
        'newClues': (n) => `You revealed ${n} new clue(s)!`,
        'continueCost': (c) => `1 EXTRA LIFE (${c} Shells)`,
        'continueAd': '1 EXTRA LIFE (Watch Ad)',
        'endButton': 'FINISH',
        'maxScoreLabel': 'Max Score: ',
        'menuButton': 'MAIN MENU',
        'bonusButton': (c) => `PLAY + x1.2 Bonus (${c})`, 
        'bonusActive': 'Bonus Activated!',
        'bonusNeeds': (c) => `Play + Bonus (Req: ${c})`,
        'loadingAd': 'Loading ad...',
        'cancelButton': 'CANCEL',
        'adError': 'Ads not available right now.',

        'missionsButton': 'MISSIONS',
        'missionsTitle': 'Daily Missions',
        'missionClaim': 'CLAIM',
        'missionComplete': 'COMPLETED!',
    }
};
// =================================================================
// MISSION SYSTEM DEFINITIONS
// =================================================================
const MISSION_POOL = {
    easy: [
        { id: 'e1', type: 'PLAY_GAMES', goal: 1, text_es: 'Juega 1 partida', text_en: 'Play 1 game' },
        { id: 'e2', type: 'COLLECT_SHELLS_TOTAL', goal: 25, text_es: 'Recoge 25 conchas en total', text_en: 'Collect 25 shells in total' },
        { id: 'e3', type: 'SCORE_POINTS_SINGLE', goal: 500, text_es: 'Consigue 500 puntos en una partida', text_en: 'Get 500 points in one game' }
    ],
    medium: [
        { id: 'm1', type: 'USE_SHIELD_TOTAL', goal: 3, text_es: 'Usa 3 escudos', text_en: 'Use 3 shields' },
        { id: 'm2', type: 'COLLECT_SHELLS_TOTAL', goal: 100, text_es: 'Recoge 100 conchas en total', text_en: 'Collect 100 shells in total' },
        { id: 'm3', type: 'SCORE_POINTS_TOTAL', goal: 5000, text_es: 'Consigue 5000 puntos en total', text_en: 'Get 5000 points in total' } // <-- TIPO CORREGIDO
    ],
    hard: [
        { id: 'h1', type: 'PLAY_GAMES', goal: 5, text_es: 'Juega 5 partidas', text_en: 'Play 5 games' },
        { id: 'h2', type: 'COLLECT_SHELLS_SINGLE', goal: 50, text_es: 'Recoge 50 conchas en una partida', text_en: 'Collect 50 shells in one game' },
        { id: 'h3', type: 'USE_MAGNET_TOTAL', goal: 10, text_es: 'Recoge 10 imanes', text_en: 'Collect 10 magnets' }
    ]
};

const MISSION_REWARDS = {
    easy: 10,
    medium: 50,
    hard: 100
};

// Variable global para el idioma
let currentLanguage = localStorage.getItem('ascensoZenLanguage') || (navigator.language.startsWith('es') ? 'es' : 'en');

/**
 * Obtiene una cadena de texto en el idioma actual.
 * @param {string} key - La clave de la cadena (ej. 'playButton').
 * @param {any} [arg] - Un argumento opcional para las funciones (ej. el coste).
 */
function getText(key, arg = null) {
    const langPack = allStrings[currentLanguage];
    if (!langPack || !langPack[key]) {
        // Fallback al inglés si no se encuentra la clave
        const fallbackPack = allStrings['en'];
        if (!fallbackPack[key]) return `[${key}]`; // Clave no encontrada
        
        return (typeof fallbackPack[key] === 'function') ? fallbackPack[key](arg) : fallbackPack[key];
    }
    
    const textOrFn = langPack[key];
    return (typeof textOrFn === 'function') ? textOrFn(arg) : textOrFn;
}

// --- ✅ NUEVO: Transición de escena ---
/**
 * Aplica un fundido de salida y luego cambia la escena.
 * @param {Phaser.Scene} scene - La escena actual (this).
 * @param {string} targetScene - El nombre de la escena a la que cambiar.
 * @param {object} [data={}] - Datos para pasar a la siguiente escena.
 */
function changeScene(scene, targetScene, data = {}) {
    // --- ✅ MODIFICADO: Transición a 250ms ---
    scene.cameras.main.fadeOut(250, 0, 0, 0); 
    scene.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
        scene.scene.start(targetScene, data);
    });
}

/**
 * Aplica los efectos de bamboleo y hover a un botón.
 * @param {Phaser.Scene} scene - La escena actual (this).
 * @param {Phaser.GameObjects.Text} button - El objeto de texto del botón.
 * @param {Function} [onClickCallback] - La función a ejecutar *después* de la animación de clic.
 */
function applyButtonTweens(scene, button, onClickCallback) {
    button.on('pointerover', () => button.setAlpha(0.8));
    button.on('pointerout', () => button.setAlpha(1.0));
    
    // Si no hay callback, solo reproduce sonido y anima
    if (!onClickCallback) {
        button.on('pointerdown', () => {
            playSfx(scene, 'click_sfx');
            scene.tweens.add({ targets: button, scale: 0.9, duration: 100, yoyo: true, ease: 'Quad.easeOut' });
        });
        return;
    }

    // Si hay callback, espera a que termine la animación
    button.on('pointerdown', () => {
        playSfx(scene, 'click_sfx');
        scene.tweens.add({ 
            targets: button, 
            scale: 0.9, 
            duration: 100, 
            yoyo: true, 
            ease: 'Quad.easeOut',
            onComplete: () => {
                // Restaura la escala por si acaso
                button.setScale(1.0);
                // Ejecuta la acción (como cambiar de escena)
                onClickCallback();
            }
        });
    });
}
/**
 * ✅ NUEVA FUNCIÓN GLOBAL DE BOTONES
 * Crea un botón estilizado profesional (rectángulo + texto).
 * @param {Phaser.Scene} scene - La escena actual (this).
 * @param {number} x - Posición X del centro.
 * @param {number} y - Posición Y del centro.
 * @param {string} text - El texto a mostrar.
 * @param {number} width - Ancho del botón.
 * @param {number} height - Alto del botón.
 * @param {number} color - Color de relleno (hex, ej. 0x3d006b).
 * @param {number} stroke - Color de borde (hex, ej. 0x9d4bff).
 * @param {Function} [onClick] - La función callback para el clic.
 */
function createStyledButton(scene, x, y, text, width, height, color, stroke, onClick) {
    
    // 1. El fondo del botón
    const bg = scene.add.rectangle(x, y, width, height, color, 0.8)
        .setStrokeStyle(4, stroke)
        .setAlpha(0.9);

    // 2. El texto del botón
    const label = scene.add.text(x, y, text, { 
        ...FONT_STYLE, 
        // Ajusta el tamaño de fuente al 45% de la altura del botón
        fontSize: `${Math.floor(height * 0.45)}px`, 
        shadow: { offsetX: 2, offsetY: 2, color: '#000000', blur: 3, fill: true }
    }).setOrigin(0.5);

    // 3. Interacción
    bg.setInteractive();

    // 4. Hover
    bg.on('pointerover', () => {
        scene.tweens.add({ targets: [bg, label], scale: 1.05, duration: 150, ease: 'Quad.easeOut' });
        bg.setAlpha(1.0);
    });
    bg.on('pointerout', () => {
        scene.tweens.add({ targets: [bg, label], scale: 1.0, duration: 150, ease: 'Quad.easeOut' });
        bg.setAlpha(0.9);
    });

    // 5. Click
    bg.on('pointerdown', () => {
        playSfx(scene, 'click_sfx');
        scene.tweens.add({ 
            targets: [bg, label], 
            scale: 0.95, 
            duration: 100, 
            yoyo: true, 
            ease: 'Quad.easeOut',
            onComplete: () => {
                // Resetea escala
                bg.setScale(1.0);
                label.setScale(1.0);
                // Llama al callback si existe
                if (onClick) onClick();
            }
        });
    });

    // Devuelve los objetos creados por si la escena necesita manipularlos
    return { bg, label };
}


// =================================================================
// GAME CONFIGURATION
// =================================================================
console.log("Juego Versión 1.2");
// --- ✅ MODIFICADO: Fuente cambiada a 'Gill Sans' ---
const FONT_STYLE = { fontFamily: '"Gill Sans", "Trebuchet MS", Arial, sans-serif', fontSize: '24px', fill: '#ffffff' };
const CONTINUE_COST = 30;
// --- ✅ MODIFICADO: De Colores a Skins (Imágenes) ---
const PLAYER_SKINS = ['player_medusa', 'medusaZoombie', 'medusaMorada']; 
// --- FIN MODIFICADO ---

let highscore = localStorage.getItem('ascensoZenHighscore') || 0;
let totalFichas = parseInt(localStorage.getItem('ascensoZenFichas') || '0');
let music;
let adMobInitialized = false; // Flag para controlar la inicialización de AdMob

// --- ✅ MODIFICADO: Configuración de Desbloqueables ---
const COLOR_COST = 1000; // Coste para desbloquear un nuevo skin
// Guarda los *índices* de PLAYER_SKINS que están desbloqueados. El 0 (medusa.png) viene por defecto.
let unlockedSkins = JSON.parse(localStorage.getItem('ascensoZenUnlockedSkins') || '[0]');
// Guarda el *índice* del skin seleccionado actualmente.
let selectedSkinIndex = parseInt(localStorage.getItem('ascensoZenSelectedSkin') || '0');
// --- FIN MODIFICADO ---


// --- ✅ MODIFICADO: Configuración de Volumen ---
const MUSIC_VOLUME_LEVELS = { OFF: 0.0, BAJO: 0.03, NORMAL: 0.06 };
const SFX_VOLUME_LEVELS = { OFF: 0.0, BAJO: 0.25, NORMAL: 0.5 };
let musicVolume = parseFloat(localStorage.getItem('ascensoZenMusicVolume') || MUSIC_VOLUME_LEVELS.NORMAL);
let sfxVolume = parseFloat(localStorage.getItem('ascensoZenSfxVolume') || SFX_VOLUME_LEVELS.NORMAL);
// --- FIN MODIFICADO ---

// --- ✅ NUEVO: Helper para SFX ---
/**
 * Reproduce un efecto de sonido respetando el volumen global de SFX.
 * @param {Phaser.Scene} scene - La escena que llama al sonido.
 * @param {string} key - El nombre del asset de audio.
 * @param {object} [config] - Configuración adicional de Phaser para el sonido (ej. { volume: 0.5 }).
 */
function playSfx(scene, key, config = {}) {
    if (sfxVolume > 0) {
        // Multiplica el volumen base del efecto (si se define) por el volumen global de SFX
        let effectiveVolume = (config.volume || 1.0) * sfxVolume;
        scene.sound.play(key, { ...config, volume: effectiveVolume });
    }
}

/**
 * ✅ NUEVA FUNCIÓN GLOBAL DE MISIONES
 * Comprueba la fecha y genera 3 nuevas misiones (una de cada dificultad) si es un nuevo día.
 * Guarda las misiones activas en localStorage.
 */
function updateDailyMissions() {
    const today = new Date().toDateString(); // "Sun Nov 09 2025"
    const lastDay = localStorage.getItem('ascensoZenMissionsLastDay');

    // Si ya se generaron hoy, no hacer nada
    if (today === lastDay) {
        // console.log("Misiones diarias ya generadas para hoy."); // Descomentar para debug
        return;
    }

    console.log("Generando nuevas misiones diarias...");

    // 1. Elegir una misión aleatoria de cada grupo
    const easyMission = MISSION_POOL.easy[Phaser.Math.Between(0, MISSION_POOL.easy.length - 1)];
    const mediumMission = MISSION_POOL.medium[Phaser.Math.Between(0, MISSION_POOL.medium.length - 1)];
    const hardMission = MISSION_POOL.hard[Phaser.Math.Between(0, MISSION_POOL.hard.length - 1)];

    // 2. Preparar el objeto de la misión para guardar
    // --- ¡CAMBIO IMPORTANTE! ---
    // Solo guardamos el 'id' y el estado. El texto se buscará en vivo.
    const setupMission = (mission, difficulty) => {
        return {
            id: mission.id, // Guardamos el ID
            type: mission.type, // Guardamos el tipo
            goal: mission.goal, // Guardamos el objetivo
            reward: MISSION_REWARDS[difficulty],
            progress: 0,
            claimed: false,
            difficulty: difficulty
        };
    };
    // --- FIN DEL CAMBIO ---

    const activeMissions = [
        setupMission(easyMission, 'easy'),
        setupMission(mediumMission, 'medium'),
        setupMission(hardMission, 'hard')
    ];

    // 3. Guardar en localStorage
    localStorage.setItem('ascensoZenActiveMissions', JSON.stringify(activeMissions));
    localStorage.setItem('ascensoZenMissionsLastDay', today);
}



// --- ✅ NUEVO: Handlers de Pausa/Reanudación de App ---
function onAppPause() {
    console.log("App pausada, pausando música.");
    if (music && music.isPlaying) {
        music.pause();
    }
}

function onAppResume() {
    console.log("App reanudada, reanudando música si el volumen está activo.");
    // Solo reanuda si la música existe, no está sonando ya, y el volumen no es CERO
    if (music && !music.isPlaying && musicVolume > 0) {
        music.resume();
    }
}
// --- FIN NUEVO ---


// =================================================================
// SECRET MESSAGE SYSTEM
// =================================================================
// --- MODIFICADO: Carga dinámica del idioma ---
// const SECRET_MESSAGE = [ ... ] 
// (El array original se ha movido a 'allStrings')
// --- FIN MODIFICADO ---
let maxFichasInRun = parseInt(localStorage.getItem('ascensoZenMaxFichas') || '0');

// =================================================================
// ADMOB INITIALIZATION & MASTER LISTENER (MODIFICADO)
// =================================================================
document.addEventListener('deviceready', async () => {
    const { AdMob } = Capacitor.Plugins;

    // --- ✅ INICIO DE LA MODIFICACIÓN: MASTER LISTENER ---

    // 1. Lista exhaustiva de todos los eventos posibles de AdMob.
    const ALL_ADMOB_EVENTS = [
        'admob:rewardedVideoAdLoaded', 'admob:rewardedVideoAdFailedToLoad',
        'admob:rewardedVideoAdShown', 'admob:rewardedVideoAdFailedToShow',
        'admob:rewardedVideoAdDismissed', 'admob:rewardedVideoAdCompleted',
        'admob:interstitialAdLoaded', 'admob:interstitialAdFailedToLoad',
        'admob:interstitialAdShown', 'admob:interstitialAdFailedToShow',
        'admob:interstitialAdDismissed',
        'admob:bannerAdLoaded', 'admob:bannerAdFailedToLoad',
        'admob:bannerAdSize', 'admob:bannerAdOpened', 'admob:bannerAdClosed'
    ];

    // 2. Función que crea un listener genérico.
    const createMasterListener = (eventName) => (data) => {
        console.log(
            `%c[MASTER LISTENER] 🕵️‍♂️ Evento recibido: ${eventName}`,
            'background: #9933ff; color: #ffffff; padding: 3px 6px; border-radius: 3px; font-weight: bold;',
            data || 'Sin datos adicionales.'
        );
    };

    // 3. Añadimos el listener a CADA evento posible.
    console.log("🔧 Instalando Master Listener para todos los eventos de AdMob...");
    ALL_ADMOB_EVENTS.forEach(eventName => {
        AdMob.addListener(eventName, createMasterListener(eventName));
    });
    console.log("✅ Master Listener de AdMob instalado.");
    
    // --- FIN DE LA MODIFICACIÓN ---

    try {
        await AdMob.initialize({
            requestTrackingAuthorization: true,
            testingDevices: [],
            initializeForTesting: false,
        });
        adMobInitialized = true;
        console.log("✅ AdMob inicializado correctamente a través del evento deviceready.");
    } catch (e) {
        console.error("❌ Error al inicializar AdMob:", e);
    }

    // --- ✅ NUEVO: Manejo de Pausa/Reanudación de la App ---
    console.log("🔧 Instalando listeners de ciclo de vida (pause, resume)...");
    document.addEventListener('pause', onAppPause, false);
    document.addEventListener('resume', onAppResume, false);
    console.log("✅ Listeners de ciclo de vida instalados.");
    // --- FIN NUEVO ---

}, false);


// =================================================================
// SCENE: PRELOADER (MODIFICADA)
// =================================================================
class PreloaderScene extends Phaser.Scene {
    constructor() { super('PreloaderScene'); }
    preload() {
        const progressBar = this.add.graphics(), progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8).fillRect(this.scale.width / 2 - 160, this.scale.height / 2 - 30, 320, 50);
        
        // --- ✅ MODIFICADO: Iniciar música al completar la carga ---
        this.load.on('progress', v => { progressBar.clear().fillStyle(0xffffff, 1).fillRect(this.scale.width / 2 - 150, this.scale.height / 2 - 20, 300 * v, 30); });
        this.load.on('complete', () => { 
            progressBar.destroy(); 
            progressBox.destroy(); 
            
            // Iniciar la música aquí, una vez cargada, con el volumen guardado
            if (!music) {
                music = this.sound.add('music', { loop: true, volume: musicVolume });
                if (musicVolume > 0) {
                    music.play();
                }
            }
            
            this.scene.start('MainMenuScene'); 
        });
        // --- FIN MODIFICADO ---

        this.load.image('background_vertical', 'assets/background_vertical.png');
        
        // --- ✅ MODIFICADO: Carga de todos los skins ---
        this.load.image('player_medusa', 'assets/medusa.png');
        this.load.image('medusaZoombie', 'assets/medusaZoombie.png');
        this.load.image('medusaMorada', 'assets/medusaMorada.png');
        // --- FIN MODIFICADO ---

        this.load.image('obstacle_cangrejo', 'assets/cangrejo.png');
        this.load.image('cangrejo_cerrado', 'assets/cangrejo_cerrado.png');
        this.load.image('collectible_almeja', 'assets/almeja.png');
        this.load.image('particle', 'assets/particle.png');
        this.load.audio('music', 'audio/music.mp3');
        this.load.audio('collect_sfx', 'audio/collect.wav');
        this.load.audio('gameover_sfx', 'audio/gameover.wav');
        this.load.audio('click_sfx', 'audio/click.wav');
        this.load.audio('impulse_sfx', 'audio/impulso.mp3');
        this.load.image('obstacle_pezglobo', 'assets/pezglobo.png');

        // --- NUEVO: Cargar el asset del power-up ---
        this.load.image('powerup_shield', 'assets/powerup_escudo.png');
        this.load.image('iman_powerUp', 'assets/iman_powerUp.png');
        // --- FIN NUEVO ---
    }
}

// =================================================================
// SCENE: MAIN MENU (MODIFICADA)
// =================================================================
class MainMenuScene extends Phaser.Scene {
    constructor() { super('MainMenuScene'); }
    create() {
        // --- ✅ MODIFICADO: FADE IN más rápido ---
        this.cameras.main.fadeIn(250, 0, 0, 0);
        updateDailyMissions();

        this.background = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'background_vertical').setOrigin(0,0);
        highscore = localStorage.getItem('ascensoZenHighscore') || 0;
        totalFichas = parseInt(localStorage.getItem('ascensoZenFichas') || '0');
        
        // --- ✅ MODIFICADO: Título (Fuente y Tamaño) ---
        const title = this.add.text(this.scale.width / 2, this.scale.height * 0.2, getText('gameTitle'), { fontFamily: '"Gill Sans", Impact, "Arial Black", sans-serif', fontSize: '72px', stroke: '#001a33', strokeThickness: 8, shadow: { offsetX: 5, offsetY: 5, color: '#000000', blur: 8, stroke: true, fill: true } }).setOrigin(0.5);
        const gradient = title.context.createLinearGradient(0, 0, 0, title.height);
        gradient.addColorStop(0, '#87CEEB'); gradient.addColorStop(1, '#00BFFF');
        title.setFill(gradient);

        const buttonYStart = this.scale.height * 0.38; // Un poco más arriba
        const buttonSpacing = 75; // Un poco más juntos
        const mainButtonWidth = this.scale.width * 0.65;
        const mainButtonHeight = 60; // Un poco más delgados
        const secondaryButtonWidth = this.scale.width * 0.55;
        const secondaryButtonHeight = 50;

        // Botón Jugar (Principal)
        createStyledButton(
            this, // <-- Pasamos la escena
            this.scale.width / 2, 
            buttonYStart, // Posición 1
            getText('playButton'), 
            mainButtonWidth, 
            mainButtonHeight, 
            0x3d006b, 0x9d4bff, 
            () => { changeScene(this, 'GameScene', { score: 0, fichas: 0, hasContinued: false }); }
        );
        // --- ✅ NUEVO: Botón Misiones ---
        createStyledButton(
            this,
            this.scale.width / 2, 
            buttonYStart + buttonSpacing, // Posición 2
            getText('missionsButton'), 
            secondaryButtonWidth, 
            secondaryButtonHeight, 
            0x004f27, 0x00b359, // Color verde
            () => { changeScene(this, 'MissionsScene'); }
        );

        // --- ✅ ¡ARREGLO AQUÍ! ---

        // Botón Secreto (Secundario)
        createStyledButton(
            this, // <-- Pasamos la escena
            this.scale.width / 2, 
            buttonYStart + buttonSpacing * 2, // <-- CAMBIO (Antes * 1)
            getText('secretButton'), 
            secondaryButtonWidth, 
            secondaryButtonHeight, 
            0xa88f00, 0xffe042, 
            () => { changeScene(this, 'SecretScene'); }
        );

        // Botón Tienda (Secundario)
        createStyledButton(
            this, // <-- Pasamos la escena
            this.scale.width / 2, 
            buttonYStart + buttonSpacing * 3, // <-- CAMBIO (Antes * 2)
            getText('storeButton'), 
            secondaryButtonWidth, 
            secondaryButtonHeight, 
            0x006b5e, 0x00f5d4, 
            () => { changeScene(this, 'StoreScene'); }
        );

        // Botón Opciones (Secundario)
        createStyledButton(
            this, // <-- Pasamos la escena
            this.scale.width / 2, 
            buttonYStart + buttonSpacing * 4, // <-- CAMBIO (Antes * 3)
            getText('optionsButton'), 
            secondaryButtonWidth, 
            secondaryButtonHeight, 
            0x4a4a4a, 0xb5b5b5, 
            () => { changeScene(this, 'OptionsScene'); }
        );
        // --- FIN DEL ARREGLO ---
        

        // Textos de puntuación (Reajustados) - MODIFICADO
        this.add.text(this.scale.width / 2, this.scale.height - 100, `${getText('highScoreLabel')}${highscore}`, FONT_STYLE).setOrigin(0.5);
        this.add.text(this.scale.width / 2, this.scale.height - 50, `${getText('totalShellsLabel')}${totalFichas}`, FONT_STYLE).setOrigin(0.5);
    }

    update() { this.background.tilePositionY -= 0.5; }
}

// =================================================================
// SCENE: OPTIONS (NUEVA Y MODIFICADA)
// =================================================================
class OptionsScene extends Phaser.Scene {
    constructor() { super('OptionsScene'); }
    
   create() {
        this.cameras.main.fadeIn(250, 0, 0, 0);

        this.background = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'background_vertical').setOrigin(0,0);
        this.add.text(this.scale.width / 2, this.scale.height * 0.15, getText('optionsTitle'), { ...FONT_STYLE, fontSize: '42px' }).setOrigin(0.5);

        // --- ✅ INICIO: MODIFICACIÓN DE ANCHO DE BOTONES ---
        
        // --- NUEVOS ANCHOS ---
        const volumeBtnWidth = 100; // Ancho para botones de Volumen (OFF, BAJO, NORMAL)
        const langBtnWidth = 130;   // Ancho para botones de Idioma (Español, English)
        
        const toggleBtnHeight = 50;
        const toggleBtnFontSize = '20px';
        const buttonSpacing = 120; // Espaciado para botones de volumen

        /**
         * Función de ayuda interna para crear los botones de palanca
         * --- AHORA ACEPTA 'width' ---
         */
        const createToggleBtn = (x, y, text, width, color, stroke) => {
            const bg = this.add.rectangle(x, y, width, toggleBtnHeight, color, 0.8) // Usa el 'width' pasado
                .setStrokeStyle(4, stroke)
                .setAlpha(0.6); // Empieza atenuado
            
            const label = this.add.text(x, y, text, { ...FONT_STYLE, fontSize: toggleBtnFontSize })
                .setOrigin(0.5)
                .setAlpha(0.6); // Texto también atenuado

            bg.setInteractive();
            return { bg, label };
        };

        // --- Controles de Música (con 'volumeBtnWidth') ---
        this.add.text(this.scale.width / 2, this.scale.height * 0.30, getText('musicLabel'), FONT_STYLE).setOrigin(0.5);
        const musicButtonY = this.scale.height * 0.37;
        
        let btn;
        btn = createToggleBtn(this.scale.width / 2 - buttonSpacing, musicButtonY, getText('volumeOff'), volumeBtnWidth, 0x8b0000, 0xff6b6b);
        this.musicButtonOff = { bg: btn.bg, label: btn.label };
        applyButtonTweens(this, btn.bg, () => this.updateMusicVolume(MUSIC_VOLUME_LEVELS.OFF));

        btn = createToggleBtn(this.scale.width / 2, musicButtonY, getText('volumeLow'), volumeBtnWidth, 0xa88f00, 0xffe042);
        this.musicButtonLow = { bg: btn.bg, label: btn.label };
        applyButtonTweens(this, btn.bg, () => this.updateMusicVolume(MUSIC_VOLUME_LEVELS.BAJO));

        btn = createToggleBtn(this.scale.width / 2 + buttonSpacing, musicButtonY, getText('volumeNormal'), volumeBtnWidth, 0x004f27, 0x00b359);
        this.musicButtonNormal = { bg: btn.bg, label: btn.label };
        applyButtonTweens(this, btn.bg, () => this.updateMusicVolume(MUSIC_VOLUME_LEVELS.NORMAL));

        // --- Controles de Efectos (SFX) (con 'volumeBtnWidth') ---
        this.add.text(this.scale.width / 2, this.scale.height * 0.50, getText('sfxLabel'), FONT_STYLE).setOrigin(0.5);
        const sfxButtonY = this.scale.height * 0.57;

        btn = createToggleBtn(this.scale.width / 2 - buttonSpacing, sfxButtonY, getText('volumeOff'), volumeBtnWidth, 0x8b0000, 0xff6b6b);
        this.sfxButtonOff = { bg: btn.bg, label: btn.label };
        applyButtonTweens(this, btn.bg, () => this.updateSfxVolume(SFX_VOLUME_LEVELS.OFF));

        btn = createToggleBtn(this.scale.width / 2, sfxButtonY, getText('volumeLow'), volumeBtnWidth, 0xa88f00, 0xffe042);
        this.sfxButtonLow = { bg: btn.bg, label: btn.label };
        applyButtonTweens(this, btn.bg, () => this.updateSfxVolume(SFX_VOLUME_LEVELS.BAJO));

        btn = createToggleBtn(this.scale.width / 2 + buttonSpacing, sfxButtonY, getText('volumeNormal'), volumeBtnWidth, 0x004f27, 0x00b359);
        this.sfxButtonNormal = { bg: btn.bg, label: btn.label };
        applyButtonTweens(this, btn.bg, () => this.updateSfxVolume(SFX_VOLUME_LEVELS.NORMAL));

        // --- Controles de Idioma (con 'langBtnWidth') ---
        this.add.text(this.scale.width / 2, this.scale.height * 0.70, getText('languageLabel'), FONT_STYLE).setOrigin(0.5);
        const langButtonY = this.scale.height * 0.77;

        btn = createToggleBtn(this.scale.width / 2 - 80, langButtonY, 'Español', langBtnWidth, 0x004f27, 0x00b359);
        this.langButtonES = { bg: btn.bg, label: btn.label };
        applyButtonTweens(this, btn.bg, () => this.updateLanguage('es'));

        btn = createToggleBtn(this.scale.width / 2 + 80, langButtonY, 'English', langBtnWidth, 0x004f27, 0x00b359);
        this.langButtonEN = { bg: btn.bg, label: btn.label };
        applyButtonTweens(this, btn.bg, () => this.updateLanguage('en'));
        
        // --- Botón Volver (usando la función global) ---
        createStyledButton(
            this,
            this.scale.width / 2, this.scale.height * 0.9, 
            getText('backButton'), 
            250, 60, // Ancho y alto
            0x3d006b, 0x9d4bff, // Colores
            () => { changeScene(this, 'MainMenuScene'); }
        );
        // --- ✅ FIN: MODIFICACIÓN DE ANCHO ---

        this.updateVolumeHighlights();
        this.updateLanguageHighlights();
    }

    updateMusicVolume(newVolume) {
        musicVolume = newVolume;
        localStorage.setItem('ascensoZenMusicVolume', musicVolume.toString());

        if (music) {
            music.setVolume(musicVolume);
            if (musicVolume > 0 && !music.isPlaying) music.play();
            else if (musicVolume === 0 && music.isPlaying) music.stop();
        }
        this.updateVolumeHighlights();
    }

    updateSfxVolume(newVolume) {
        sfxVolume = newVolume;
        localStorage.setItem('ascensoZenSfxVolume', sfxVolume.toString());
        this.updateVolumeHighlights();
        this.time.delayedCall(110, () => playSfx(this, 'click_sfx'));
    }

    updateLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem('ascensoZenLanguage', lang);
        changeScene(this, 'OptionsScene');
    }

    // --- ✅ MODIFICADO: updateHighlights para manejar {bg, label} ---
    updateLanguageHighlights() {
        [this.langButtonES, this.langButtonEN].forEach(btn => {
            btn.bg.setAlpha(0.6); btn.label.setAlpha(0.6);
        });
        
        if (currentLanguage === 'es') {
            this.langButtonES.bg.setAlpha(1.0); this.langButtonES.label.setAlpha(1.0);
        } else if (currentLanguage === 'en') {
            this.langButtonEN.bg.setAlpha(1.0); this.langButtonEN.label.setAlpha(1.0);
        }
    }

    updateVolumeHighlights() {
        [this.musicButtonOff, this.musicButtonLow, this.musicButtonNormal, this.sfxButtonOff, this.sfxButtonLow, this.sfxButtonNormal].forEach(btn => {
            btn.bg.setAlpha(0.6); btn.label.setAlpha(0.6);
        });

        if (musicVolume === MUSIC_VOLUME_LEVELS.OFF) { this.musicButtonOff.bg.setAlpha(1.0); this.musicButtonOff.label.setAlpha(1.0); }
        else if (musicVolume === MUSIC_VOLUME_LEVELS.BAJO) { this.musicButtonLow.bg.setAlpha(1.0); this.musicButtonLow.label.setAlpha(1.0); }
        else if (musicVolume === MUSIC_VOLUME_LEVELS.NORMAL) { this.musicButtonNormal.bg.setAlpha(1.0); this.musicButtonNormal.label.setAlpha(1.0); }

        if (sfxVolume === SFX_VOLUME_LEVELS.OFF) { this.sfxButtonOff.bg.setAlpha(1.0); this.sfxButtonOff.label.setAlpha(1.0); }
        else if (sfxVolume === SFX_VOLUME_LEVELS.BAJO) { this.sfxButtonLow.bg.setAlpha(1.0); this.sfxButtonLow.label.setAlpha(1.0); }
        else if (sfxVolume === SFX_VOLUME_LEVELS.NORMAL) { this.sfxButtonNormal.bg.setAlpha(1.0); this.sfxButtonNormal.label.setAlpha(1.0); }
    }
    
    update() { this.background.tilePositionY -= 0.5; }
}

// =================================================================
// SCENE: STORE (MODIFICADA)
// =================================================================
class StoreScene extends Phaser.Scene {
    constructor() { super('StoreScene'); }
    
    create() {
        // --- ✅ MODIFICADO: FADE IN más rápido ---
        this.cameras.main.fadeIn(250, 0, 0, 0);
        // --- FIN MODIFICADO ---

        this.background = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'background_vertical').setOrigin(0,0);
        this.add.text(this.scale.width / 2, this.scale.height * 0.1, getText('storeTitle'), { ...FONT_STYLE, fontSize: '42px' }).setOrigin(0.5);

        // Mostrar conchas actuales - MODIFICADO
        this.fichasText = this.add.text(this.scale.width / 2, this.scale.height * 0.18, `${getText('shellsLabel')}${totalFichas}`, FONT_STYLE).setOrigin(0.5);

      // --- ✅ INICIO: MODIFICACIÓN DE ESTILO DE BOTONES ---

        const startY = this.scale.height * 0.3;
        const yIncrement = 120;
        
        // --- Estilos para los botones internos ---
        const btnWidth = 140;
        const btnHeight = 45;
        const btnFontSize = '18px';
        
        // Colores para cada estado
        const colors = {
            buy: { fill: 0x004f27, stroke: 0x00b359 },
            select: { fill: 0x004a6b, stroke: 0x00a2f5 },
            using: { fill: 0x4a4a4a, stroke: 0xb5b5b5 }
        };

        // --- Grid de Skins ---
        const positions = [
            { x: this.scale.width / 2, y: startY },
            { x: this.scale.width / 2, y: startY + yIncrement },
            { x: this.scale.width / 2, y: startY + yIncrement * 2 },
        ];

        PLAYER_SKINS.forEach((skinKey, index) => {
            const x = positions[index].x;
            const y = positions[index].y;

            const isUnlocked = unlockedSkins.includes(index);
            const isSelected = (selectedSkinIndex === index);

            // Borde visual
            const border = this.add.rectangle(x, y, 80, 80, 0x000000, 0)
                                 .setStrokeStyle(4, 0xaaaaaa);
            
            // Muestra de skin (Imagen)
            const swatch = this.add.image(x, y, skinKey).setDisplaySize(70, 70);
            
            if (isUnlocked) {
                if (isSelected) {
                    // --- ESTADO USANDO ---
                    border.setStrokeStyle(6, 0xf3a800);
                    const usingBg = this.add.rectangle(x, y + 55, btnWidth, btnHeight, colors.using.fill, 0.8)
                        .setStrokeStyle(2, colors.using.stroke);
                    const usingLabel = this.add.text(x, y + 55, getText('usingLabel'), { ...FONT_STYLE, fontSize: btnFontSize })
                        .setOrigin(0.5);
                    // Hacemos que el fondo y borde destaquen
                    usingBg.setAlpha(1.0);
                    usingLabel.setAlpha(1.0);

                } else {
                    // --- ESTADO ELEGIR ---
                    const selectBg = this.add.rectangle(x, y + 55, btnWidth, btnHeight, colors.select.fill, 0.8)
                        .setStrokeStyle(2, colors.select.stroke)
                        .setAlpha(0.9)
                        .setInteractive();
                        
                    const selectLabel = this.add.text(x, y + 55, getText('selectLabel'), { ...FONT_STYLE, fontSize: btnFontSize })
                        .setOrigin(0.5)
                        .setAlpha(0.9);

                    // Hacemos el swatch (la imagen) también clickeable
                    swatch.setInteractive().on('pointerdown', () => this.selectSkin(index));
                    swatch.on('pointerover', () => swatch.setAlpha(0.8));
                    swatch.on('pointerout', () => swatch.setAlpha(1.0));
                    
                    // Aplicamos el tween al fondo del botón
                    applyButtonTweens(this, selectBg, () => this.selectSkin(index));
                }
            } else {
                // --- ESTADO COMPRAR ---
                swatch.setAlpha(0.3);
                border.setAlpha(0.3);
                
                const canAfford = totalFichas >= COLOR_COST;
                const currentColors = canAfford ? colors.buy : colors.using; // Reusamos gris si no puede

                const buyBg = this.add.rectangle(x, y + 55, btnWidth, btnHeight, currentColors.fill, 0.8)
                    .setStrokeStyle(2, currentColors.stroke)
                    .setAlpha(canAfford ? 0.9 : 0.5); // Atenuado si no puede comprar

                const buyLabel = this.add.text(x, y + 55, `(${COLOR_COST})`, { ...FONT_STYLE, fontSize: btnFontSize })
                    .setOrigin(0.5)
                    .setAlpha(canAfford ? 0.9 : 0.5);

                if (canAfford) {
                    buyBg.setInteractive();
                    applyButtonTweens(this, buyBg, () => this.buySkin(index));
                }
            }
        });
        // --- FIN MODIFICADO ---


        // --- Botón Volver (con nuevo estilo global) ---
        createStyledButton(
            this,
            this.scale.width / 2, this.scale.height * 0.9, 
            getText('backButton'), 
            250, 60, // Ancho y alto
            0x3d006b, 0x9d4bff, // Colores
            () => { changeScene(this, 'MainMenuScene'); }
        );
    }

    // --- ✅ MODIFICADO: Renombrado de 'Color' a 'Skin' ---
    buySkin(index) {
        if (totalFichas >= COLOR_COST) {
            totalFichas -= COLOR_COST;
            localStorage.setItem('ascensoZenFichas', totalFichas);
            
            unlockedSkins.push(index);
            localStorage.setItem('ascensoZenUnlockedSkins', JSON.stringify(unlockedSkins));
            
            playSfx(this, 'collect_sfx'); // Sonido de compra
            
            // Selecciona automáticamente el skin que acabas de comprar
            this.selectSkin(index); 
        }
    }

    selectSkin(index) {
        selectedSkinIndex = index;
        localStorage.setItem('ascensoZenSelectedSkin', selectedSkinIndex.toString());
        
        playSfx(this, 'click_sfx');
        
        // Reiniciar la escena para actualizar visualmente la selección
        // this.scene.restart(); // <-- Reemplazado por changeScene para suavidad
        changeScene(this, 'StoreScene');
    }
    // --- FIN MODIFICADO ---
    
    update() { this.background.tilePositionY -= 0.5; }
}
// --- FIN NUEVA ESCENA ---


// =================================================================
// SCENE: MISSIONS (NUEVA)
// =================================================================
class MissionsScene extends Phaser.Scene {
    constructor() { super('MissionsScene'); }

    create() {
        this.cameras.main.fadeIn(250, 0, 0, 0);
        this.background = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'background_vertical').setOrigin(0,0);
        this.add.text(this.scale.width / 2, this.scale.height * 0.1, getText('missionsTitle'), { ...FONT_STYLE, fontSize: '42px' }).setOrigin(0.5);

        // Cargar misiones activas (contienen id, progress, claimed)
        this.activeMissions = JSON.parse(localStorage.getItem('ascensoZenActiveMissions') || '[]');
        
        // Colores para las barras de progreso
        const difficultyColors = {
            easy: { fill: 0x00b359, stroke: 0x00f5d4 },
            medium: { fill: 0x004a6b, stroke: 0x00a2f5 },
            hard: { fill: 0x8b0000, stroke: 0xff6b6b }
        };

        const startY = this.scale.height * 0.25;
        const yIncrement = 150;

        // --- ¡CAMBIO IMPORTANTE DE LÓGICA DE IDIOMA! ---
        
        // Unir todos los pools de misiones en un solo lugar para buscar fácil
        const allMissionsPool = [
            ...MISSION_POOL.easy,
            ...MISSION_POOL.medium,
            ...MISSION_POOL.hard
        ];

        // Mostrar las 3 misiones
        this.activeMissions.forEach((mission, index) => {
            const y = startY + (index * yIncrement);
            const colors = difficultyColors[mission.difficulty];

            // 1. Buscar la definición estática de la misión usando el 'id'
            const missionDef = allMissionsPool.find(m => m.id === mission.id);
            if (!missionDef) {
                console.error("No se encontró la misión con ID:", mission.id);
                return;
            }

            // 2. Elegir el texto del idioma actual
            const missionText = (currentLanguage === 'es') ? missionDef.text_es : missionDef.text_en;

            // 3. Mostrar el texto de la misión
            this.add.text(this.scale.width / 2, y, missionText, { ...FONT_STYLE, fontSize: '22px' }).setOrigin(0.5);

            // 4. Barra de Progreso (usa 'mission.progress' y 'mission.goal' del localStorage)
            const progress = Math.min(mission.progress / mission.goal, 1.0);
            const barWidth = this.scale.width * 0.7;
            const barHeight = 30;

            this.add.rectangle(this.scale.width / 2, y + 40, barWidth, barHeight)
                .setStrokeStyle(2, colors.stroke)
                .setFillStyle(0x000000, 0.5);
            
            if (progress > 0) {
                this.add.rectangle(this.scale.width / 2 - (barWidth/2) + (barWidth * progress / 2), y + 40, barWidth * progress, barHeight)
                    .setFillStyle(colors.fill, 1.0);
            }
            
            this.add.text(this.scale.width / 2, y + 40, `${mission.progress} / ${mission.goal}`, { ...FONT_STYLE, fontSize: '18px' }).setOrigin(0.5);

            // 5. Botón de Reclamar / Estado (sin cambios)
            const buttonY = y + 95;
            if (mission.claimed) {
                this.add.text(this.scale.width / 2, buttonY, getText('missionComplete'), { ...FONT_STYLE, fontSize: '24px', fill: '#f3a800' }).setOrigin(0.5);
            } else if (progress >= 1.0) {
                createStyledButton(
                    this,
                    this.scale.width / 2, buttonY,
                    `${getText('missionClaim')} (+${mission.reward})`,
                    220, 50,
                    0x004f27, 0x00b359,
                    () => this.claimMission(mission, index)
                );
            } else {
                this.add.text(this.scale.width / 2, buttonY, `+${mission.reward} Conchas`, { ...FONT_STYLE, fontSize: '20px', fill: '#aaaaaa' }).setOrigin(0.5);
            }
        });

        // Botón Volver
        createStyledButton(
            this,
            this.scale.width / 2, this.scale.height * 0.9, 
            getText('backButton'), 
            250, 60,
            0x3d006b, 0x9d4bff,
            () => { changeScene(this, 'MainMenuScene'); }
        );
    }

    claimMission(mission, index) {
        if (mission.claimed) return;

        // 1. Marcar como reclamada
        mission.claimed = true;
        this.activeMissions[index] = mission;
        localStorage.setItem('ascensoZenActiveMissions', JSON.stringify(this.activeMissions));

        // 2. Añadir conchas
        totalFichas += mission.reward;
        localStorage.setItem('ascensoZenFichas', totalFichas);

        playSfx(this, 'collect_sfx', { volume: 1.0 });

        // 3. Reiniciar la escena para actualizar la UI
        changeScene(this, 'MissionsScene');
    }

    update() { this.background.tilePositionY -= 0.5; }
}


// =================================================================
// SCENE: GAME (MODIFICADA CON PROGRESIÓN)
// =================================================================
class GameScene extends Phaser.Scene {
    constructor() { super('GameScene'); }
    
    // --- ✅ MODIFICADO: init() ---
    init(data) {
        this.score = data.score || 0;
        this.fichas = data.fichas || 0;
        this.hasContinued = data.hasContinued || false;
        this.scoreMultiplier = 1;

        // --- Variables de Dificultad ---
        this.obstacleSpeed = 250; // Velocidad inicial de cangrejos
        this.fichaSpeed = 300;    // Velocidad inicial de conchas
        this.safeGap = 220;       // Tamaño inicial del hueco
        this.pufferFishHorizSpeed = 70; // Velocidad horizontal inicial del pez


        this.isShieldActive = false;
        this.isMagnetActive = false;
        this.magnetTimer = null;     // Para controlar la duración del imán
        this.shieldSprite = null;    // Para almacenar el sprite visual del escudo
        this.obstacleCollider = null; // Para guardar la referencia del collider de obstáculos
        this.pufferCollider = null;   // Para guardar la referencia del collider del pez globo

        // --- ✅ NUEVO: Cargar misiones ---
        this.activeMissions = JSON.parse(localStorage.getItem('ascensoZenActiveMissions') || '[]');
       
    }
    // --- FIN MODIFICADO ---

    create() {
        // --- ✅ MODIFICADO: FADE IN más rápido ---
        // Fundido más rápido si es una continuación
        const fadeInDuration = this.hasContinued ? 50 : 250;
        this.cameras.main.fadeIn(fadeInDuration, 0, 0, 0);
        // --- FIN MODIFICADO ---

        // --- ✅ MODIFICADO: Referencias de Colliders ---
        this.obstacles = this.physics.add.group({ immovable: true, allowGravity: false });
        this.pufferFishGroup = this.physics.add.group({ immovable: true, allowGravity: false });
        this.fichasGroup = this.physics.add.group({ allowGravity: false });

        // --- NUEVO: Grupo de Power-Ups ---
        this.powerUpsGroup = this.physics.add.group({ allowGravity: false });
        // --- FIN NUEVO ---


        this.background = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'background_vertical').setOrigin(0,0);
        // this.obstacles = this.physics.add.group({ immovable: true, allowGravity: false }); // <-- Movido arriba
        // this.fichasGroup = this.physics.add.group({ allowGravity: false }); // <-- Movido arriba

        // --- ✅ MODIFICADO: Carga el skin seleccionado ---
        const selectedSkinKey = PLAYER_SKINS[selectedSkinIndex];
        this.player = this.physics.add.sprite(this.scale.width / 2, this.scale.height * 0.8, selectedSkinKey);

        this.playerHomeY = this.player.y; // <-- arreglo bug eempujar medusa

        // --- ✅ SOLUCIÓN: Establece el tamaño base ---
        this.player.setDisplaySize(70, 70);

        // Guarda la escala base que setDisplaySize() ha calculado (ej. 0.1 si la img es de 700px)
        const baseScaleX = this.player.scaleX;
        const baseScaleY = this.player.scaleY;
        // --- FIN SOLUCIÓN ---

        this.player.body.setSize(50, 40).setAllowGravity(false);
        // --- FIN MODIFICADO ---
        this.player.setCollideWorldBounds(true).setDepth(10);

        // --- NUEVO: Añadir sprite de escudo al jugador (oculto) ---
        // Lo creamos aquí para reusarlo. Se adjuntará al jugador en el update.
        this.shieldSprite = this.add.image(this.player.x, this.player.y, 'powerup_shield')
            .setDepth(11)     // Encima del jugador (depth 10)
            .setDisplaySize(30, 30) // <-- CAMBIO AQUÍ (antes setScale(1.5))
            .setVisible(false);
        // --- FIN NUEVO ---

        // --- ✅ MODIFICADO: La animación ahora usa la escala base ---
        this.tweens.add({
            targets: this.player,
            scaleX: baseScaleX * 1.10, // Aumenta un 5% el ancho
            scaleY: baseScaleY * 1.10, // Aumenta un 5% el alto
            duration: 1200,            // Más lento, para que sea relajante
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });

        // Modificación del listener de 'pointerdown'
        this.input.on('pointerdown', () => {
            playSfx(this, 'impulse_sfx', { volume: 0.05 });

            // Añadimos una animación de reacción rápida
            this.tweens.add({
                targets: this.player,
                scaleX: baseScaleX * 1.2, // Se ensancha al "empujar"
                scaleY: baseScaleY * 0.8, // Se achata al "empujar"
                duration: 80,             // Muy rápido
                yoyo: true,                 // Vuelve solo
                ease: 'Quad.easeOut'
            });
        });

        // --- FIN MODIFICADO ---

        if (this.hasContinued) {
            // MODIFICADO
            const reviveText = this.add.text(this.scale.width / 2, this.scale.height / 2, getText('extraLife'), { ...FONT_STYLE, fontSize: '36px', fill: '#93f300', stroke: '#000', strokeThickness: 6 }).setOrigin(0.5).setDepth(100);
            this.tweens.add({ targets: reviveText, alpha: 0, duration: 2000, delay: 500 });
        }
        
        // --- ✅ MODIFICADO: Lógica de Bonus (ya no aplica tint) ---
        const isBonusActive = localStorage.getItem('ascensoZenBonusActive') === 'true';
        if (isBonusActive) {
            this.scoreMultiplier = 1.2;
            localStorage.removeItem('ascensoZenBonusActive');
        } else {
            this.scoreMultiplier = 1;
        }
        // Ya no hay .setTint()
        // --- FIN MODIFICADO ---

     
        if (!this.anims.exists('crab_pinch')) {
            this.anims.create({ key: 'crab_pinch', frames: [ { key: 'obstacle_cangrejo' }, { key: 'cangrejo_cerrado' } ], frameRate: 2, repeat: -1 });
        }
        // this.input.on('pointerdown', () => {  // <-- Movido arriba
        //     playSfx(this, 'impulse_sfx', { volume: 0.05 }); 
        // });

        if (this.hasContinued) {
            this.player.setAlpha(0.5);
            this.time.delayedCall(2000, () => { this.player.setAlpha(1.0); 
                // --- MODIFICADO: Usar el nuevo manejador de colisión ---
                this.obstacleCollider = this.physics.add.collider(this.player, this.obstacles, this.handleObstacleCollision, null, this);
                this.pufferCollider = this.physics.add.collider(this.player, this.pufferFishGroup, this.handleObstacleCollision, null, this);
                // --- FIN MODIFICADO ---
            });
        } else {
            // --- MODIFICADO: Usar el nuevo manejador de colisión ---
            this.obstacleCollider = this.physics.add.collider(this.player, this.obstacles, this.handleObstacleCollision, null, this);
            this.pufferCollider = this.physics.add.collider(this.player, this.pufferFishGroup, this.handleObstacleCollision, null, this);
            // --- FIN MODIFICADO ---
        }
        this.physics.add.overlap(this.player, this.fichasGroup, this.collectFicha, null, this);
        
        // --- NUEVO: Collider para Power-Ups ---
        this.physics.add.overlap(this.player, this.powerUpsGroup, this.collectPowerUp, null, this);
        // --- FIN NUEVO ---
        
        // --- ✅ MODIFICADO: UI REPOSICIONADA ---
        const uiY = 55; // Antes 35
        const uiStyle = { ...FONT_STYLE, fontSize: '28px', stroke: '#000', strokeThickness: 5 };
        this.add.image(35, uiY, 'collectible_almeja').setScale(0.8).setDepth(100);
        this.fichasText = this.add.text(70, uiY, `${this.fichas}`, uiStyle).setOrigin(0, 0.5).setDepth(100);
        this.scoreText = this.add.text(this.scale.width / 2, uiY, `0`, { ...uiStyle, fontSize: '36px' }).setOrigin(0.5).setDepth(100);
        if (this.scoreMultiplier > 1) {
            const bonusText = this.add.text(this.scoreText.x + this.scoreText.width / 2 + 10, uiY + 5, `x${this.scoreMultiplier}`, { ...FONT_STYLE, fontSize: '20px', fill: '#93f300' }).setOrigin(0, 0.5).setDepth(100);
            this.scoreText.on('updateText', () => { bonusText.x = this.scoreText.x + this.scoreText.width / 2 + 10; });
        }
        const trophyIcon = this.add.text(this.scale.width - 50, uiY, `🏆`, { fontSize: '28px' }).setOrigin(1, 0.5).setDepth(100);
        this.highscoreText = this.add.text(trophyIcon.x - trophyIcon.width - 5, uiY, `${highscore}`, uiStyle).setOrigin(1, 0.5).setDepth(100);
        // --- FIN MODIFICADO ---

        
        // --- ✅ MODIFICADO: scoreTimer con lógica de progresión ---
        this.scoreTimer = this.time.addEvent({ delay: 100, callback: () => {
            this.score++;
            const displayScore = Math.floor(this.score * this.scoreMultiplier);
            this.scoreText.setText(displayScore);
            this.scoreText.emit('updateText');
            if (displayScore > highscore) {
                this.highscoreText.setText(displayScore);
                this.highscoreText.setFill('#f3a800');
            }

            // --- ✅ NUEVO: Lógica de Progresión de Dificultad (VERSIÓN DE PRUEBA RÁPIDA) ---
            // Cada 150 puntos (Inicio suave, pero se nota)
            if (this.score > 0 && this.score % 150 === 0) { 
                this.obstacleSpeed = Math.min(1000, this.obstacleSpeed + 10); 
                this.fichaSpeed = Math.min(1000, this.fichaSpeed + 12); 
                this.pufferFishHorizSpeed = Math.min(300, this.pufferFishHorizSpeed + 8);
                console.log("DIFICULTAD: Velocidad aumentada:", this.obstacleSpeed);
            }

            // Cada 300 puntos (El siguiente escalón)
            if (this.score > 0 && this.score % 300 === 0) { 
                const newDelay = Math.max(800, this.obstacleTimer.delay - 50); 
                this.obstacleTimer.delay = newDelay;

                // 🔹 Actualizar también el delay del pez globo para mantener la proporción
                const newPufferDelay = newDelay * 1.5;
                this.pufferFishTimer.delay = newPufferDelay;

                console.log("DIFICULTAD: Frecuencia aumentada, nuevo delay:", newDelay);
                console.log("DIFICULTAD: PufferFish sincronizado, nuevo delay:", newPufferDelay);
            }


            // Cada 500 puntos (El primer gran hito)
            if (this.score > 0 && this.score % 500 === 0) { 
                this.safeGap = Math.max(150, this.safeGap - 10); 
                console.log("DIFICULTAD: Hueco reducido:", this.safeGap);
            }
            // --- FIN NUEVO ---

        }, loop: true });
        // --- FIN MODIFICADO ---

        // --- ✅ MODIFICADO: Guardado en this.obstacleTimer ---
        this.obstacleTimer = this.time.addEvent({ delay: 1500, callback: this.addObstacleRow, callbackScope: this, loop: true });
        // --- FIN MODIFICADO ---

        this.time.addEvent({ delay: 3100, callback: this.addFicha, callbackScope: this, loop: true });
    
        // Aparece cada 2250ms (1.5 veces el delay de los cangrejos)
        this.pufferFishTimer = this.time.addEvent({ 
            delay: 7500, 
            startAt: 3750,
            callback: this.spawnPatrollerPufferFish, // Usamos una nueva función
            callbackScope: this, 
            loop: true 
        });
        // --- FIN DEL NUEVO TIMER ---

        // --- NUEVO: Timer para Power-Ups ---
        // Aparece cada 15 segundos (empezando a los 7.5s)
        this.powerUpTimer = this.time.addEvent({ 
            delay: 15000, 
            startAt: 7500,
            callback: this.spawnPowerUp,
            callbackScope: this, 
            loop: true 
        });
        // --- FIN NUEVO ---
    }
    update() {
        this.background.tilePositionY -= 1.0;

        // --- NUEVO: Lógica de Power-Ups en Update ---
        // 1. El escudo sigue al jugador
        if (this.isShieldActive && this.shieldSprite) {
            this.shieldSprite.setPosition(this.player.x, this.player.y);
        }

        // 2. El imán atrae conchas
        if (this.isMagnetActive) {
            this.attractFichas();
        }
        // --- FIN NUEVO ---


        if (this.input.activePointer.isDown) { this.player.body.velocity.x = 280; } else { this.player.body.velocity.x = -280; }
    }

   addObstacleRow() {
        // Usa this.safeGap en lugar del valor fijo 220
        const gap = this.safeGap; 
        const position = Phaser.Math.Between(50 + gap / 2, this.scale.width - 50 - gap / 2);
        for (let x = 48 / 2; x < position - gap / 2; x += 48) { this.createCrab(x, -50); }
        for (let x = position + gap / 2 + 48 / 2; x < this.scale.width; x += 48) { this.createCrab(x, -50); }
    }

    createCrab(x, y) {
        const crab = this.obstacles.create(x, y, 'obstacle_cangrejo');
        // --- ✅ MODIFICADO: Hitbox del cangrejo ajustada ---
        crab.body.setSize(48, 25); 
        crab.body.velocity.y = this.obstacleSpeed;
        crab.setDepth(10);
        this.time.delayedCall(Phaser.Math.Between(0, 500), () => { if (crab.active) { crab.play('crab_pinch'); } });
        this.time.delayedCall(5000, () => { if (crab.active) crab.destroy(); });
    }

/// --- ✅ PASO 4: AÑADE ESTA NUEVA FUNCIÓN ---
    spawnPatrollerPufferFish() {
        
        // 1. DÓNDE APARECE (Y)
        const y_spawn = -50; // Arriba de la pantalla

        // 2. DÓNDE APARECE (X) Y VELOCIDAD HORIZONTAL
        const side = Phaser.Math.Between(0, 1);
        const x_spawn = (side === 0) ? -50 : this.scale.width + 50; // Izquierda o Derecha
        
        // Velocidad horizontal constante
        const velocityX = (side === 0) ? this.pufferFishHorizSpeed : -this.pufferFishHorizSpeed;
        // 3. VELOCIDAD VERTICAL (Como los cangrejos)
        const velocityY = this.obstacleSpeed; // ¡Exactamente la misma que los cangrejos!

        // 4. CREAR EL PEZ
        const pufferFish = this.pufferFishGroup.create(x_spawn, y_spawn, 'obstacle_pezglobo');
        
       pufferFish.setDisplaySize(60, 60); // <-- CAMBIO AQUÍ (Antes 100, 100)
        pufferFish.refreshBody();
        pufferFish.setDepth(5); 

        // 5. LANZAR EL PEZ
        pufferFish.body.velocity.x = velocityX;
        pufferFish.body.velocity.y = velocityY;

        // 6. LIMPIEZA
        this.time.delayedCall(8000, () => { 
            if (pufferFish.active) pufferFish.destroy(); 
        });
    }
    // --- FIN DE LA NUEVA FUNCIÓN ---
 

    // --- ✅ MODIFICADO: addFicha() ---
    addFicha() {
        const ficha = this.fichasGroup.create(Phaser.Math.Between(50, this.scale.width - 50), -50, 'collectible_almeja');
        // Usa this.fichaSpeed en lugar del valor fijo 300
        ficha.body.velocity.y = this.fichaSpeed;
        ficha.setScale(0.8);
        this.tweens.add({ targets: ficha, angle: 360, duration: 4000, repeat: -1 });
        this.time.delayedCall(5000, () => { if (ficha.active) ficha.destroy(); });
    }
    // --- FIN MODIFICADO ---

    collectFicha(player, ficha) {
        playSfx(this, 'collect_sfx', { volume: 0.7 });
        const emitter = this.add.particles(ficha.x, ficha.y, 'particle', { speed: { min: -100, max: 100 }, angle: { min: 0, max: 360 }, scale: { start: 0.1, end: 0 }, blendMode: 'ADD', lifespan: 500, tint: 0xf3a800 });
        emitter.explode(16);
        ficha.destroy();
        this.fichas++;
        this.fichasText.setText(this.fichas);


// --- ✅ NUEVO: Progreso de misión ---
        this.activeMissions.forEach(mission => {
            if (mission.type === 'COLLECT_SHELLS_SINGLE' && !mission.claimed) {
                // El progreso de _SINGLE se actualiza en gameOver
            } else if (mission.type === 'COLLECT_SHELLS_TOTAL' && !mission.claimed) {
                mission.progress++; // Rastrea el total
            }
        });

    }

    // =================================================================
    // --- INICIO: NUEVAS FUNCIONES DE POWER-UP ---
    // =================================================================

    /**
     * Hace que las fichas (conchas) cercanas sean atraídas por el jugador.
     * Se llama desde update() cuando this.isMagnetActive es true.
     */
    attractFichas() {
        const magnetRadius = 300;    // Radio de atracción
        const attractionSpeed = 1000; // Velocidad de atracción
        
        this.fichasGroup.getChildren().forEach(ficha => {
            if (!ficha.active) return;
            
            const distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, ficha.x, ficha.y);
            
            // Si la ficha está dentro del radio
            if (distance < magnetRadius) {
                // Usamos accelerateToObject para "tirar" de la concha hacia el jugador
                // Esto se suma a su velocidad de caída normal.
                this.physics.accelerateToObject(ficha, this.player, attractionSpeed, 300, 400);
            }
        });
    }

    /**
     * Crea un power-up (escudo o imán) en la parte superior.
     * Se llama desde this.powerUpTimer.
     */
    spawnPowerUp() {
        const x = Phaser.Math.Between(50, this.scale.width - 50);
        const y = -50;
        
        // 50% de probabilidad de escudo, 50% de imán
        const type = Phaser.Math.Between(0, 1) === 0 ? 'shield' : 'magnet';
        
        let powerUp;
        
       if (type === 'shield') {
            powerUp = this.powerUpsGroup.create(x, y, 'powerup_shield');
            powerUp.setDisplaySize(50, 50);
            powerUp.refreshBody(); // <-- ¡CAMBIO AQUÍ!
            powerUp.setData('type', 'shield');
            powerUp.setVisible(true);
        } else {
            powerUp = this.powerUpsGroup.create(x, y, 'iman_powerUp');
            powerUp.setData('type', 'magnet');
            powerUp.setDisplaySize(50, 50); 
            powerUp.refreshBody(); // <-- ¡CAMBIO AQUÍ!
            powerUp.setVisible(true);
        }
        
        // Cae un poco más lento que las conchas para dar tiempo a verlo
        powerUp.body.velocity.y = this.fichaSpeed * 0.8;
        powerUp.setDepth(11); // Encima de los obstáculos

        // Animación de rotación suave
        this.tweens.add({ targets: powerUp, angle: Phaser.Math.Between(0, 1) ? 360 : -360, duration: 4000, repeat: -1 });

        // Autodestrucción si sale de la pantalla
        this.time.delayedCall(5000, () => { 
            if (powerUp.active) powerUp.destroy(); 
        });
    }

    /**
     * Se llama cuando el jugador toca un power-up.
     */
    collectPowerUp(player, powerUp) {
        const type = powerUp.getData('type');
        
        // Sonido de recolección (puedes cambiarlo por uno nuevo)
        playSfx(this, 'collect_sfx', { volume: 1.0 });

        // Efecto visual de partículas
        const particleTint = (type === 'shield') ? 0x00bfff : 0xffff00; // Azules o Amarillas
        const emitter = this.add.particles(powerUp.x, powerUp.y, 'particle', { 
            speed: { min: -150, max: 150 }, 
            angle: { min: 0, max: 360 }, 
            scale: { start: 0.2, end: 0 }, 
            blendMode: 'ADD', 
            lifespan: 600, 
            tint: particleTint
        });
        emitter.explode(20);

        powerUp.destroy();

        // Activa la función correspondiente
        if (type === 'shield') {
            this.activateShield();
            // --- ✅ NUEVO: Progreso de misión ---
            this.activeMissions.forEach(m => {
                if (m.type === 'USE_SHIELD_TOTAL' && !m.claimed) m.progress++;
            });
        } else if (type === 'magnet') {
            this.activateMagnet();
            // --- ✅ NUEVO: Progreso de misión ---
            this.activeMissions.forEach(m => {
                if (m.type === 'USE_MAGNET_TOTAL' && !m.claimed) m.progress++;
            });
        }
    }

    /**
     * Activa el power-up de escudo.
     */
    activateShield() {
        if (this.isShieldActive) return; // No acumular

        this.isShieldActive = true;

        this.tweens.killTweensOf(this.shieldSprite);
        // Posiciona el sprite del escudo (creado en create()) y lo hace visible
        this.shieldSprite.setPosition(this.player.x, this.player.y).setVisible(true).setAlpha(0).setDisplaySize(30, 30);;

        // Animación de aparición
        this.tweens.add({
            targets: this.shieldSprite,
            alpha: 1.0,
            //scale: 1.5,
            duration: 300,
            ease: 'Quad.easeOut'
        });
    }

    /**
     * Activa el power-up de imán durante 20 segundos.
     */
    activateMagnet() {
        // Si ya hay un imán activo, simplemente reinicia el timer
        if (this.magnetTimer) {
            this.magnetTimer.remove();
        }

        this.isMagnetActive = true;
        // Tinte visual en el jugador para saber que está activo
        this.player.setTint(0x00bfff); 

        // Timer de 20 segundos
        this.magnetTimer = this.time.delayedCall(20000, () => {
            this.isMagnetActive = false;
            this.player.clearTint();
            this.magnetTimer = null;
        }, [], this);
    }


    /**
     * NUEVO MANEJADOR DE COLISIÓN.
     * Se llama cuando el jugador choca con un obstáculo o pez globo.
     * Decide si el escudo se activa o si es game over.
     */
    handleObstacleCollision(player, obstacle) {
        // Si el jugador no está activo (ya muriendo), no hacer nada
        if (!player.active) return;

        if (this.isShieldActive) {

            player.setY(this.playerHomeY);
            player.body.setVelocityY(0); // <-- AÑADE ESTA LÍNEA
            // --- 1. EL ESCUDO ABSORBE EL GOLPE ---
            this.isShieldActive = false; // El escudo se gasta
            
            // --- NUEVO: Detener animaciones anteriores ---
            this.tweens.killTweensOf(this.shieldSprite);

            // --- CAMBIO: Animar con displayWidth/Height ---
            // Animación de rotura de escudo
            this.tweens.add({
                targets: this.shieldSprite,
                alpha: 0,
                displayWidth: 150,  // Crecer a 150px
                displayHeight: 150, // Crecer a 150px
                angle: Phaser.Math.Between(-90, 90),
                duration: 200,
                ease: 'Quad.easeIn',
                onComplete: () => {
                    // Resetea el sprite para la próxima vez
                    this.shieldSprite.setVisible(false)
                                 .setDisplaySize(100, 100) // Resetear tamaño
                                 .setAngle(0)
                                 .setAlpha(1.0); // Resetear alpha (no importa, está invisible)
                }
            });

            // Sonido de rotura (reusamos 'gameover' pero más suave)
            playSfx(this, 'gameover_sfx', { volume: 0.4 });

            // Destruye el obstáculo
            obstacle.destroy();

            // --- 2. INMUNIDAD TEMPORAL (0.5 segundos) ---
            // Desactiva temporalmente los colliders para evitar golpes seguidos
            if (this.obstacleCollider) this.physics.world.removeCollider(this.obstacleCollider);
            if (this.pufferCollider) this.physics.world.removeCollider(this.pufferCollider);

            // Haz al jugador semitransparente para feedback visual
            player.setAlpha(0.5);

            // Reactiva los colliders y la opacidad después de 0.5s
            this.time.delayedCall(500, () => {
                if (!player.active) return; // Comprueba si el jugador sigue vivo
                player.setAlpha(1.0);
                player.setY(this.playerHomeY); 
                player.body.setVelocityY(0);
                // Reactiva los colliders
                this.obstacleCollider = this.physics.add.collider(this.player, this.obstacles, this.handleObstacleCollision, null, this);
                this.pufferCollider = this.physics.add.collider(this.player, this.pufferFishGroup, this.handleObstacleCollision, null, this);
            });

        } else {
            // --- 3. NO HAY ESCUDO: GAME OVER ---
            
            // Desactiva colliders para evitar llamadas múltiples a gameOver
            if (this.obstacleCollider) this.physics.world.removeCollider(this.obstacleCollider);
            if (this.pufferCollider) this.physics.world.removeCollider(this.pufferCollider);
            
            // Llama a la lógica original de fin de partida
            this.gameOver();
        }
    }

    // =================================================================
    // --- FIN: NUEVAS FUNCIONES DE POWER-UP ---
    // =================================================================


    gameOver() {


        const finalScore = Math.floor(this.score * this.scoreMultiplier);
        
      this.activeMissions.forEach(mission => {
            if (mission.claimed) return; // No actualizar si ya se reclamó

            switch (mission.type) {
                case 'PLAY_GAMES':
                    mission.progress++;
                    break;
                case 'COLLECT_SHELLS_TOTAL':
                    // El progreso ya se actualizó en collectFicha
                    break;
                case 'USE_SHIELD_TOTAL':
                    // El progreso ya se actualizó en collectPowerUp
                    break;
                case 'USE_MAGNET_TOTAL':
                    // El progreso ya se actualizó en collectPowerUp
                    break;
                case 'SCORE_POINTS_SINGLE':
                    if (finalScore > mission.progress) {
                        mission.progress = finalScore; // Guarda la mejor puntuación
                    }
                    break;
                
                // --- ¡NUEVA LÓGICA AQUÍ! ---
                case 'SCORE_POINTS_TOTAL':
                    mission.progress += finalScore; // Acumula el total
                    break;
                // --- FIN NUEVA LÓGICA ---

                case 'COLLECT_SHELLS_SINGLE':
                    if (this.fichas > mission.progress) {
                        mission.progress = this.fichas; // Guarda la mejor recolecta
                    }
                    break;
            }
        });
        
        // Guardar todo el progreso actualizado en localStorage
        localStorage.setItem('ascensoZenActiveMissions', JSON.stringify(this.activeMissions));
        // --- FIN NUEVO ---

        
        if (this.scoreTimer) this.scoreTimer.destroy();
        playSfx(this, 'gameover_sfx');
        this.physics.pause();
        this.player.setTint(0xff0000);
        this.cameras.main.shake(300, 0.01);

        if (finalScore > highscore) { 
            highscore = finalScore; 
            localStorage.setItem('ascensoZenHighscore', highscore); 
        }
        totalFichas += this.fichas;
        localStorage.setItem('ascensoZenFichas', totalFichas);
        if (this.fichas > maxFichasInRun) {
            const oldCluesCount = Math.floor(maxFichasInRun / 100);
            const newCluesCount = Math.floor(this.fichas / 100);
            const newCluesUnlocked = newCluesCount - oldCluesCount;
            maxFichasInRun = this.fichas;
            localStorage.setItem('ascensoZenMaxFichas', maxFichasInRun);
            
            // --- MODIFICADO: USA changeScene ---
            this.time.delayedCall(1000, () => {
                // No podemos usar changeScene aquí porque no hay fadeOut, es un corte
                this.scene.start('GameOverScene', { score: finalScore, fichas: this.fichas, hasContinued: this.hasContinued, newClues: newCluesUnlocked });
            });

        } else {
            // --- MODIFICADO: USA changeScene ---
            this.time.delayedCall(1000, () => {
                this.scene.start('GameOverScene', { score: finalScore, fichas: this.fichas, hasContinued: this.hasContinued, newClues: 0 });
            });
        }
    }
}

// =================================================================
// SCENE: SECRET MESSAGE (MODIFICADA)
// =================================================================
class SecretScene extends Phaser.Scene {
    constructor() { super('SecretScene'); }
    create() {
        // ---FADE IN más rápido ---
        this.cameras.main.fadeIn(250, 0, 0, 0);
       

        this.background = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'background_vertical').setOrigin(0,0);
        this.add.text(this.scale.width / 2, this.scale.height * 0.1, getText('secretTitle'), { ...FONT_STYLE, fontSize: '42px' }).setOrigin(0.5);
        
        // --- MODIFICADO: Carga dinámica del idioma ---
        const SECRET_MESSAGE = getText('secretMessage');
        const unlockedCount = Math.floor(maxFichasInRun / 100);
        let revealedMessage = '';
        for (let i = 0; i < SECRET_MESSAGE.length; i++) {
            revealedMessage += (i < unlockedCount) ? (SECRET_MESSAGE[i] + ' ') : '??? ';
        }
        

        this.add.text(this.scale.width / 2, this.scale.height / 2, revealedMessage, { ...FONT_STYLE, fontSize: '28px', align: 'center', wordWrap: { width: this.scale.width * 0.9 } }).setOrigin(0.5);
      createStyledButton(
            this,
            this.scale.width / 2, this.scale.height * 0.9, 
            getText('backButton'), 
            250, 60, // Ancho y alto
            0x3d006b, 0x9d4bff, // Colores
            () => { changeScene(this, 'MainMenuScene'); }
        );
    }
    update() { this.background.tilePositionY -= 0.5; }
}

// =================================================================
// SCENE: GAME OVER & CONTINUE (MODIFICADA)
// =================================================================
class GameOverScene extends Phaser.Scene {
    constructor() { super('GameOverScene'); }
    init(data) { 
        this.score = data.score; 
        this.fichas = data.fichas;
        this.hasContinued = data.hasContinued; 
        this.newClues = data.newClues || 0; 
        this.isAdShowing = false;
        this.adListeners = []; 
        this.adLoadingUI = null; // Grupo para los elementos de la UI de carga
// --- ✅ NUEVO: Para guardar referencias a los botones ---
        this.continueButtons = [];
    }
    
    create() {
        this.cameras.main.fadeIn(250, 0, 0, 0);

        this.background = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'background_vertical').setOrigin(0,0);
        this.add.text(this.scale.width / 2, this.scale.height * 0.2, getText('gameOverTitle'), { ...FONT_STYLE, fontSize: '42px' }).setOrigin(0.5);
        this.add.text(this.scale.width / 2, this.scale.height * 0.28, `${getText('scoreLabel')}${this.score}`, FONT_STYLE).setOrigin(0.5);
        this.add.text(this.scale.width / 2, this.scale.height * 0.35, `${getText('collectedLabel')}${this.fichas}`, FONT_STYLE).setOrigin(0.5);
        this.add.text(this.scale.width / 2, this.scale.height * 0.42, `${getText('totalShellsLabel')}${totalFichas}`, FONT_STYLE).setOrigin(0.5);

        if (this.newClues > 0) {
            this.add.text(this.scale.width / 2, this.scale.height * 0.5, getText('newClues', this.newClues), { ...FONT_STYLE, fill: '#93f300' }).setOrigin(0.5);
        }

        if (!this.hasContinued) this.createContinueOptions();
        else this.createEndGameButtons();
    }

    update() { if (!this.isAdShowing) this.background.tilePositionY -= 0.5; }
    
    // --- ✅ MODIFICADO: createContinueOptions ---
    createContinueOptions() {
        this.continueButtons = []; // Resetea el array
        let btnObjects;

        const btnWidth = this.scale.width * 0.7;
        const btnHeight = 55;

        // Botón Continuar con Monedas
        if (totalFichas >= CONTINUE_COST) {
            btnObjects = createStyledButton(
                this,
                this.scale.width / 2, this.scale.height * 0.6, 
                getText('continueCost', CONTINUE_COST),
                btnWidth, btnHeight,
                0x004f27, 0x00b359,
                () => {
                    totalFichas -= CONTINUE_COST; 
                    localStorage.setItem('ascensoZenFichas', totalFichas); 
                    changeScene(this, 'GameScene', { score: this.score, fichas: 0, hasContinued: true });
                }
            );
            this.continueButtons.push(btnObjects.bg, btnObjects.label);
        }
        
        // Botón Continuar con Anuncio
        btnObjects = createStyledButton(
            this,
            this.scale.width / 2, this.scale.height * 0.72, // Ajuste de Y
            getText('continueAd'),
            btnWidth, btnHeight,
            0xa88f00, 0xffe042,
            () => { this.showAdAndContinue(); }
        );
        this.continueButtons.push(btnObjects.bg, btnObjects.label);

        // Botón Terminar
        btnObjects = createStyledButton(
            this,
            this.scale.width / 2, this.scale.height * 0.84, // Ajuste de Y
            getText('endButton'),
            btnWidth * 0.8, btnHeight * 0.9, // Más pequeño
            0x4a4a4a, 0xb5b5b5,
            () => {
                // Destruye los botones de continuar
                this.continueButtons.forEach(obj => obj.destroy());
                this.createEndGameButtons(); // Muestra los botones finales
            }
        );
        // Añade también el botón "Terminar" para que se autodestruya
        this.continueButtons.push(btnObjects.bg, btnObjects.label);
    }

  createEndGameButtons() {
        this.add.text(this.scale.width / 2, this.scale.height * 0.55, `${getText('maxScoreLabel')}${highscore}`, { ...FONT_STYLE, fill: '#f3a800' }).setOrigin(0.5);

        const rewardCost = 100;
        const canAfford = totalFichas >= rewardCost;

        // --- 1. Botón JUGAR CON BONUS (AHORA ES EL PRINCIPAL) ---
        
        const btnText = canAfford ? getText('bonusButton', rewardCost) : getText('bonusNeeds', rewardCost);
        const btnColor = canAfford ? 0x004f27 : 0x4a4a4a; // Verde si puede, gris si no
        const btnStroke = canAfford ? 0x00b359 : 0xb5b5b5;

        // Posición Principal (arriba y grande)
        const { bg, label } = createStyledButton(
            this,
            this.scale.width / 2, this.scale.height * 0.68, // Posición principal
            btnText,
            this.scale.width * 0.7, 60, // Botón grande
            btnColor, btnStroke,
            () => {
                // Esta función de clic SOLO se ejecuta si se puede pagar
                if (canAfford) {
                    totalFichas -= rewardCost; 
                    localStorage.setItem('ascensoZenFichas', totalFichas);
                    localStorage.setItem('ascensoZenBonusActive', 'true');
                    
                    // --- ¡LA NUEVA ACCIÓN! ---
                    // Inicia una nueva partida con score 0
                    changeScene(this, 'GameScene', { score: 0, fichas: 0, hasContinued: false });
                }
            }
        );

        // Si no puede pagar, deshabilitar
        if (!canAfford) {
            bg.disableInteractive().setAlpha(0.5);
            label.setAlpha(0.5);
        }

        // --- 2. Botón Menú Principal (AHORA ES EL SECUNDARIO) ---
        createStyledButton(
            this,
            this.scale.width / 2, this.scale.height * 0.82, // Posición secundaria
            getText('menuButton'),
            this.scale.width * 0.7, 50, // Botón más pequeño
            0x3d006b, 0x9d4bff, // Color de menú
            () => { changeScene(this, 'MainMenuScene'); }
        );
    }

    // --- Interfaz de Carga de Anuncio (Con botones nuevos) ---
    showAdLoadingUI(onCancel) {
        this.adLoadingUI = this.add.group();
        
        const overlay = this.add.rectangle(0, 0, this.scale.width, this.scale.height, 0x000000, 0.7).setOrigin(0,0);
        overlay.setInteractive();
        
        const loadingText = this.add.text(this.scale.width / 2, this.scale.height / 2 - 50, getText('loadingAd'), FONT_STYLE).setOrigin(0.5);
        
        // Botón Cancelar con nuevo estilo
        const { bg, label } = createStyledButton(
            this,
            this.scale.width / 2, this.scale.height / 2 + 50,
            getText('cancelButton'),
            200, 50,
            0x8b0000, 0xff6b6b,
            () => { onCancel(); }
        );

        this.adLoadingUI.addMultiple([overlay, loadingText, bg, label]);
        this.adLoadingUI.setDepth(200);
    }

    hideAdLoadingUI() {
        if (this.adLoadingUI) {
            this.adLoadingUI.destroy(true); // El 'true' destruye también a los hijos del grupo
            this.adLoadingUI = null;
        }
    }

    // --- LÓGICA DE ADMOB MEJORADA Y A PRUEBA DE FALLOS ---
    async showAdAndContinue() {
        if (this.isAdShowing) { return; }
        
        if (!adMobInitialized) {
            console.error("AdMob no está listo.");
            // MODIFICADO
            const errorText = this.add.text(this.scale.width / 2, this.adButton.y + 60, getText('adError'), { ...FONT_STYLE, fontSize: '16px', fill: '#ff6961' }).setOrigin(0.5);
            this.time.delayedCall(3000, () => errorText.destroy());
            return;
        }

        this.isAdShowing = true;
        
        const { AdMob } = Capacitor.Plugins;
        const adId = 'ca-app-pub-2165332859919251/3961845289'; // ID de prueba oficial de Google
        let isHandled = false;

        const cleanupAndResume = (reason = "Razón desconocida") => {
            if (isHandled) return;
            isHandled = true;
            
            console.log(`[AdManager] Limpiando y reanudando escena. Razón: ${reason}`);
            
            // --- MODIFICACIÓN: TIMEOUT ELIMINADO ---
            // if (adTimeout && adTimeout.remove) adTimeout.remove();
            // --- FIN MODIFICACIÓN ---

            this.cleanupListeners();
            this.hideAdLoadingUI();
            this.isAdShowing = false;
        };

        // --- MODIFICACIÓN: TIMEOUT ELIMINADO ---
        // const adTimeout = this.time.delayedCall(15000, () => cleanupAndResume("Timeout de 15s alcanzado"));
        // --- FIN MODIFICACIÓN ---
        
        // --- Mostrar UI de carga con botón de cancelar ---
        this.showAdLoadingUI(() => cleanupAndResume("Usuario canceló manualmente"));

        // --- Listeners de AdMob (como fallback) ---
        const dismissHandler = AdMob.addListener('admob:rewardedVideoAdDismissed', () => cleanupAndResume("Anuncio cerrado por el usuario"));
        const failShowHandler = AdMob.addListener('admob:rewardedVideoAdFailedToShow', (error) => cleanupAndResume(`Fallo al mostrar anuncio: ${JSON.stringify(error)}`));
        this.adListeners.push(dismissHandler, failShowHandler);

        try {
            console.log("Intentando preparar el anuncio recompensado...");
            await AdMob.prepareRewardVideoAd({ adId, isTesting: false });
            
            console.log("Anuncio preparado, intentando mostrar...");
            const rewardResult = await AdMob.showRewardVideoAd();
            
            if (isHandled) return; // Si ya se manejó (ej: por timeout), no hacer nada
            
            if (rewardResult && rewardResult.amount > 0) {
                console.log('RECOMPENSA OBTENIDA', rewardResult);
                isHandled = true;
                
                // --- MODIFICACIÓN: TIMEOUT ELIMINADO ---
                // adTimeout.remove();
                // --- FIN MODIFICACIÓN ---

                this.cleanupListeners();
                this.hideAdLoadingUI();
                
                // --- MODIFICADO: USA changeScene ---
                //this.scene.start('GameScene', { score: this.score, fichas: 0, hasContinued: true });
                changeScene(this, 'GameScene', { score: this.score, fichas: 0, hasContinued: true });

            } else {
                cleanupAndResume("Anuncio visto pero sin recompensa");
            }
        } catch (e) {
            console.error("ERROR CATASTRÓFICO en el flujo del anuncio:", e);
            cleanupAndResume(`Excepción en try/catch: ${e.message}`);
        }
    }
    
    cleanupListeners() {
        console.log("Limpiando listeners de AdMob específicos de la escena...");
        this.adListeners.forEach(listener => listener.remove());
        this.adListeners = [];
    }
}

// =================================================================
// GAME INITIALIZATION
// =================================================================
const config = {
    type: Phaser.AUTO,
    // --- ✅ MODIFICADO: pixelArt activado ---
    pixelArt: false,
    // --- ✅ MODIFICADO: Escalado FIT ---
    scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH, width: 450, height: 800 },
    // --- ✅ MODIFICADO: debug activado ---
    physics: { default: 'arcade', arcade: { debug: false } },
    // --- ✅ MODIFICADO: Añadidas OptionsScene y StoreScene ---
    scene: [PreloaderScene, MainMenuScene, OptionsScene, StoreScene,MissionsScene, GameScene, SecretScene, GameOverScene],
    backgroundColor: '#0d0014'
};

const game = new Phaser.Game(config);