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
        'bonusButton': (c) => `Bonus x1.2 Próxima Partida (${c} Conchas)`,
        'bonusActive': '¡Bonus Activado!',
        'bonusNeeds': (c) => `Bonus x1.2 (Necesitas ${c})`,
        'loadingAd': 'Cargando anuncio...',
        'cancelButton': 'CANCELAR',
        'adError': 'Publicidad no disponible ahora.'
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
        'bonusButton': (c) => `x1.2 Bonus Next Game (${c} Shells)`,
        'bonusActive': 'Bonus Activated!',
        'bonusNeeds': (c) => `x1.2 Bonus (Needs ${c})`,
        'loadingAd': 'Loading ad...',
        'cancelButton': 'CANCEL',
        'adError': 'Ads not available right now.'
    }
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
// --- FIN NUEVO ---


// =================================================================
// GAME CONFIGURATION
// =================================================================
console.log("Juego Versión 1.2");
// --- ✅ MODIFICADO: Fuente cambiada a 'Gill Sans' ---
const FONT_STYLE = { fontFamily: '"Gill Sans", "Trebuchet MS", Arial, sans-serif', fontSize: '24px', fill: '#ffffff' };
const CONTINUE_COST = 30;
// --- ✅ MODIFICADO: De Colores a Skins (Imágenes) ---
const PLAYER_SKINS = ['player_medusa', 'medusaVerde', 'medusaOro']; 
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
// --- FIN NUEVO ---

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
        this.load.image('medusaVerde', 'assets/medusaVerde.png');
        this.load.image('medusaOro', 'assets/medusaOro.png');
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
        // --- FIN MODIFICADO ---

        this.background = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'background_vertical').setOrigin(0,0);
        highscore = localStorage.getItem('ascensoZenHighscore') || 0;
        totalFichas = parseInt(localStorage.getItem('ascensoZenFichas') || '0');
        
        // --- ✅ MODIFICADO: Título (Fuente y Tamaño) ---
        const title = this.add.text(this.scale.width / 2, this.scale.height * 0.2, getText('gameTitle'), { fontFamily: '"Gill Sans", Impact, "Arial Black", sans-serif', fontSize: '72px', stroke: '#001a33', strokeThickness: 8, shadow: { offsetX: 5, offsetY: 5, color: '#000000', blur: 8, stroke: true, fill: true } }).setOrigin(0.5);
        const gradient = title.context.createLinearGradient(0, 0, 0, title.height);
        gradient.addColorStop(0, '#87CEEB'); gradient.addColorStop(1, '#00BFFF');
        title.setFill(gradient);
        // --- FIN MODIFICADO ---

        // --- ✅ MODIFICADO: Botones de Menú (Reajustados) ---
        const buttonYStart = this.scale.height * 0.38; // Subido (antes 0.40)
        const buttonSpacing = this.scale.height * 0.10; // Más junto (antes 0.11)

        // Botón Jugar - MODIFICADO
        const playButton = this.add.text(this.scale.width / 2, buttonYStart, getText('playButton'), { ...FONT_STYLE, fontSize: '32px', backgroundColor: '#3d006b', padding: { x: 20, y: 10 } }).setOrigin(0.5).setInteractive();
        applyButtonTweens(this, playButton, () => {
            changeScene(this, 'GameScene', { score: 0, fichas: 0, hasContinued: false });
        });

        // Botón Secreto - MODIFICADO
        const secretButton = this.add.text(this.scale.width / 2, buttonYStart + buttonSpacing, getText('secretButton'), { ...FONT_STYLE, fontSize: '26px', backgroundColor: '#a88f00', padding: { x: 15, y: 8 } }).setOrigin(0.5).setInteractive();
        applyButtonTweens(this, secretButton, () => {
            changeScene(this, 'SecretScene');
        });


        // Botón Tienda (NUEVO) - MODIFICADO
        const storeButton = this.add.text(this.scale.width / 2, buttonYStart + buttonSpacing * 2, getText('storeButton'), { ...FONT_STYLE, fontSize: '26px', backgroundColor: '#006b5e', padding: { x: 15, y: 8 } }).setOrigin(0.5).setInteractive();
        applyButtonTweens(this, storeButton, () => {
            changeScene(this, 'StoreScene');
        });

        // Botón Opciones - MODIFICADO
        const optionsButton = this.add.text(this.scale.width / 2, buttonYStart + buttonSpacing * 3, getText('optionsButton'), { ...FONT_STYLE, fontSize: '26px', backgroundColor: '#4a4a4a', padding: { x: 15, y: 8 } }).setOrigin(0.5).setInteractive();
        applyButtonTweens(this, optionsButton, () => {
            changeScene(this, 'OptionsScene');
        });
        // --- FIN MODIFICADO ---

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
        // --- ✅ MODIFICADO: FADE IN más rápido ---
        this.cameras.main.fadeIn(250, 0, 0, 0);
        // --- FIN MODIFICADO ---

        this.background = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'background_vertical').setOrigin(0,0);
        this.add.text(this.scale.width / 2, this.scale.height * 0.15, getText('optionsTitle'), { ...FONT_STYLE, fontSize: '42px' }).setOrigin(0.5);

        const buttonStyle = { ...FONT_STYLE, fontSize: '20px', padding: { x: 10, y: 5 } };
        const buttonSpacing = 120;

        // --- Controles de Música ---
        this.add.text(this.scale.width / 2, this.scale.height * 0.30, getText('musicLabel'), FONT_STYLE).setOrigin(0.5);
        const musicButtonY = this.scale.height * 0.37;
        
        this.musicButtonOff = this.add.text(this.scale.width / 2 - buttonSpacing, musicButtonY, getText('volumeOff'), { ...buttonStyle, backgroundColor: '#8b0000' }).setOrigin(0.5).setInteractive();
        this.musicButtonLow = this.add.text(this.scale.width / 2, musicButtonY, getText('volumeLow'), { ...buttonStyle, backgroundColor: '#a88f00' }).setOrigin(0.5).setInteractive();
        this.musicButtonNormal = this.add.text(this.scale.width / 2 + buttonSpacing, musicButtonY, getText('volumeNormal'), { ...buttonStyle, backgroundColor: '#004f27' }).setOrigin(0.5).setInteractive();

        applyButtonTweens(this, this.musicButtonOff, () => this.updateMusicVolume(MUSIC_VOLUME_LEVELS.OFF));
        applyButtonTweens(this, this.musicButtonLow, () => this.updateMusicVolume(MUSIC_VOLUME_LEVELS.BAJO));
        applyButtonTweens(this, this.musicButtonNormal, () => this.updateMusicVolume(MUSIC_VOLUME_LEVELS.NORMAL));

        // --- Controles de Efectos (SFX) ---
        this.add.text(this.scale.width / 2, this.scale.height * 0.50, getText('sfxLabel'), FONT_STYLE).setOrigin(0.5);
        const sfxButtonY = this.scale.height * 0.57;

        this.sfxButtonOff = this.add.text(this.scale.width / 2 - buttonSpacing, sfxButtonY, getText('volumeOff'), { ...buttonStyle, backgroundColor: '#8b0000' }).setOrigin(0.5).setInteractive();
        this.sfxButtonLow = this.add.text(this.scale.width / 2, sfxButtonY, getText('volumeLow'), { ...buttonStyle, backgroundColor: '#a88f00' }).setOrigin(0.5).setInteractive();
        this.sfxButtonNormal = this.add.text(this.scale.width / 2 + buttonSpacing, sfxButtonY, getText('volumeNormal'), { ...buttonStyle, backgroundColor: '#004f27' }).setOrigin(0.5).setInteractive();

        applyButtonTweens(this, this.sfxButtonOff, () => this.updateSfxVolume(SFX_VOLUME_LEVELS.OFF));
        applyButtonTweens(this, this.sfxButtonLow, () => this.updateSfxVolume(SFX_VOLUME_LEVELS.BAJO));
        applyButtonTweens(this, this.sfxButtonNormal, () => this.updateSfxVolume(SFX_VOLUME_LEVELS.NORMAL));

        // --- Controles de Idioma --- (NUEVO)
        this.add.text(this.scale.width / 2, this.scale.height * 0.70, getText('languageLabel'), FONT_STYLE).setOrigin(0.5);
        const langButtonY = this.scale.height * 0.77;

        this.langButtonES = this.add.text(this.scale.width / 2 - 80, langButtonY, 'Español', { ...buttonStyle, backgroundColor: '#004f27' }).setOrigin(0.5).setInteractive();
        this.langButtonEN = this.add.text(this.scale.width / 2 + 80, langButtonY, 'English', { ...buttonStyle, backgroundColor: '#004f27' }).setOrigin(0.5).setInteractive();

        applyButtonTweens(this, this.langButtonES, () => this.updateLanguage('es'));
        applyButtonTweens(this, this.langButtonEN, () => this.updateLanguage('en'));
        // --- Fin Idioma ---


        // --- Botón Volver ---
        const backButton = this.add.text(this.scale.width / 2, this.scale.height * 0.9, getText('backButton'), { ...FONT_STYLE, fontSize: '32px', backgroundColor: '#3d006b', padding: { x: 20, y: 10 } }).setOrigin(0.5).setInteractive();
        applyButtonTweens(this, backButton, () => {
            changeScene(this, 'MainMenuScene');
        });


        this.updateVolumeHighlights(); // Marcar botones activos al inicio
        this.updateLanguageHighlights(); // Marcar idioma
    }

    updateMusicVolume(newVolume) {
        // playSfx(this, 'click_sfx'); // Sonido ya se reproduce en el tween
        musicVolume = newVolume;
        localStorage.setItem('ascensoZenMusicVolume', musicVolume.toString());

        if (music) {
            music.setVolume(musicVolume);
            if (musicVolume > 0 && !music.isPlaying) {
                music.play();
            } else if (musicVolume === 0 && music.isPlaying) {
                music.stop();
            }
        }
        this.updateVolumeHighlights();
    }

    updateSfxVolume(newVolume) {
        sfxVolume = newVolume;
        localStorage.setItem('ascensoZenSfxVolume', sfxVolume.toString());
        // playSfx(this, 'click_sfx'); // Sonido ya se reproduce en el tween
        this.updateVolumeHighlights();
        // Reproduce un sonido de prueba con el *nuevo* volumen *después* de la animación
        this.time.delayedCall(110, () => playSfx(this, 'click_sfx'));
    }

    // --- NUEVA FUNCIÓN ---
    updateLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem('ascensoZenLanguage', lang);
        // playSfx(this, 'click_sfx'); // Sonido ya se reproduce en el tween
        
        // Importante: Reiniciar la escena para aplicar los cambios de texto
        // Usamos changeScene para que sea suave
        changeScene(this, 'OptionsScene');
    }

    // --- NUEVA FUNCIÓN ---
    updateLanguageHighlights() {
        // Resetea idioma
        this.langButtonES.setAlpha(0.6);
        this.langButtonEN.setAlpha(0.6);
        // Destaca idioma
        if (currentLanguage === 'es') this.langButtonES.setAlpha(1.0);
        else if (currentLanguage === 'en') this.langButtonEN.setAlpha(1.0);
    }

    updateVolumeHighlights() {
        // Resetea música
        this.musicButtonOff.setAlpha(0.6);
        this.musicButtonLow.setAlpha(0.6);
        this.musicButtonNormal.setAlpha(0.6);
        // Destaca música
        if (musicVolume === MUSIC_VOLUME_LEVELS.OFF) this.musicButtonOff.setAlpha(1.0);
        else if (musicVolume === MUSIC_VOLUME_LEVELS.BAJO) this.musicButtonLow.setAlpha(1.0);
        else if (musicVolume === MUSIC_VOLUME_LEVELS.NORMAL) this.musicButtonNormal.setAlpha(1.0);

        // Resetea SFX
        this.sfxButtonOff.setAlpha(0.6);
        this.sfxButtonLow.setAlpha(0.6);
        this.sfxButtonNormal.setAlpha(0.6);
        // Destaca SFX
        if (sfxVolume === SFX_VOLUME_LEVELS.OFF) this.sfxButtonOff.setAlpha(1.0);
        else if (sfxVolume === SFX_VOLUME_LEVELS.BAJO) this.sfxButtonLow.setAlpha(1.0);
        else if (sfxVolume === SFX_VOLUME_LEVELS.NORMAL) this.sfxButtonNormal.setAlpha(1.0);
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

        // --- ✅ MODIFICADO: Grid de Skins ---
        const startY = this.scale.height * 0.3;
        const yIncrement = 120;
        const buyButtonStyle = { ...FONT_STYLE, fontSize: '18px', backgroundColor: '#004f27', padding: { x: 10, y: 5 } };

        // Ajusta esta X si tienes más de 3 skins. 
        // Para 3 skins, los centramos.
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
                    border.setStrokeStyle(6, 0xf3a800); // Borde dorado si está seleccionado
                    this.add.text(x, y + 55, getText('usingLabel'), { ...FONT_STYLE, fontSize: '16px', fill: '#f3a800' }).setOrigin(0.5);
                } else {
                    // Si está desbloqueado pero no seleccionado, hacerlo clickeable
                    swatch.setInteractive().on('pointerdown', () => this.selectSkin(index));
                    // Aplicar tweens al swatch
                    swatch.on('pointerover', () => swatch.setAlpha(0.8));
                    swatch.on('pointerout', () => swatch.setAlpha(1.0));

                    this.add.text(x, y + 55, getText('selectLabel'), { ...FONT_STYLE, fontSize: '16px' }).setOrigin(0.5);
                }
            } else {
                // Bloqueado
                swatch.setAlpha(0.3);
                border.setAlpha(0.3);
                const buyButton = this.add.text(x, y + 55, `(${COLOR_COST})`, buyButtonStyle).setOrigin(0.5);
                
                if (totalFichas >= COLOR_COST) {
                    buyButton.setInteractive();
                    applyButtonTweens(this, buyButton, () => this.buySkin(index));
                } else {
                    buyButton.setAlpha(0.5); // Gris si no puede comprar
                }
            }
        });
        // --- FIN MODIFICADO ---


        // --- Botón Volver ---
        const backButton = this.add.text(this.scale.width / 2, this.scale.height * 0.9, getText('backButton'), { ...FONT_STYLE, fontSize: '32px', backgroundColor: '#3d006b', padding: { x: 20, y: 10 } }).setOrigin(0.5).setInteractive();
        applyButtonTweens(this, backButton, () => {
            changeScene(this, 'MainMenuScene');
        });
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

        // --- ✅ NUEVO: Variables de Dificultad ---
        this.obstacleSpeed = 250; // Velocidad inicial de cangrejos
        this.fichaSpeed = 300;    // Velocidad inicial de conchas
        this.safeGap = 220;       // Tamaño inicial del hueco
        // --- FIN NUEVO ---
    }
    // --- FIN MODIFICADO ---

    create() {
        // --- ✅ MODIFICADO: FADE IN más rápido ---
        // Fundido más rápido si es una continuación
        const fadeInDuration = this.hasContinued ? 50 : 250;
        this.cameras.main.fadeIn(fadeInDuration, 0, 0, 0);
        // --- FIN MODIFICADO ---


        this.background = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'background_vertical').setOrigin(0,0);
        this.obstacles = this.physics.add.group({ immovable: true, allowGravity: false });
        this.fichasGroup = this.physics.add.group({ allowGravity: false });

        // --- ✅ MODIFICADO: Carga el skin seleccionado ---
        const selectedSkinKey = PLAYER_SKINS[selectedSkinIndex];
        this.player = this.physics.add.sprite(this.scale.width / 2, this.scale.height * 0.8, selectedSkinKey);

        // --- ✅ SOLUCIÓN: Establece el tamaño base ---
        this.player.setDisplaySize(70, 70);

        // Guarda la escala base que setDisplaySize() ha calculado (ej. 0.1 si la img es de 700px)
        const baseScaleX = this.player.scaleX;
        const baseScaleY = this.player.scaleY;
        // --- FIN SOLUCIÓN ---

        // --- ✅ MODIFICADO: Hitbox del jugador ajustada ---
        this.player.body.setSize(50, 40).setAllowGravity(false); // Antes 48x48
        // --- FIN MODIFICADO ---
        this.player.setCollideWorldBounds(true).setDepth(10);

        // --- ✅ MODIFICADO: La animación ahora usa la escala base ---
        this.tweens.add({ 
            targets: this.player, 
            // Anima a 1.15 *veces* la escala base, no al valor absoluto 1.15
            scaleX: baseScaleX * 1.15, 
            scaleY: baseScaleY * 0.85, 
            duration: 700, 
            yoyo: true, 
            repeat: -1, 
            ease: 'Sine.easeInOut' 
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

     
        this.anims.create({ key: 'crab_pinch', frames: [ { key: 'obstacle_cangrejo' }, { key: 'cangrejo_cerrado' } ], frameRate: 2, repeat: -1 });
        
        this.input.on('pointerdown', () => { 
            playSfx(this, 'impulse_sfx', { volume: 0.05 }); 
        });

        if (this.hasContinued) {
            this.player.setAlpha(0.5);
            this.time.delayedCall(2000, () => { this.player.setAlpha(1.0); this.physics.add.collider(this.player, this.obstacles, this.gameOver, null, this); });
        } else {
            this.physics.add.collider(this.player, this.obstacles, this.gameOver, null, this);
        }
        this.physics.add.overlap(this.player, this.fichasGroup, this.collectFicha, null, this);
        
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
                console.log("DIFICULTAD: Velocidad aumentada:", this.obstacleSpeed);
            }

            // Cada 300 puntos (El siguiente escalón)
            if (this.score > 0 && this.score % 300 === 0) { 
                const newDelay = Math.max(800, this.obstacleTimer.delay - 50); 
                this.obstacleTimer.delay = newDelay;
                console.log("DIFICULTAD: Frecuencia aumentada, nuevo delay:", newDelay);
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
    }
    update() {
        this.background.tilePositionY -= 1.0;
        if (this.input.activePointer.isDown) { this.player.body.velocity.x = 280; } else { this.player.body.velocity.x = -280; }
    }

    // --- ✅ MODIFICADO: addObstacleRow() ---
    addObstacleRow() {
        // Usa this.safeGap en lugar del valor fijo 220
        const gap = this.safeGap; 
        const position = Phaser.Math.Between(50 + gap / 2, this.scale.width - 50 - gap / 2);
        for (let x = 48 / 2; x < position - gap / 2; x += 48) { this.createCrab(x, -50); }
        for (let x = position + gap / 2 + 48 / 2; x < this.scale.width; x += 48) { this.createCrab(x, -50); }
    }
    // --- FIN MODIFICADO ---

    // --- ✅ MODIFICADO: createCrab() ---
    createCrab(x, y) {
        const crab = this.obstacles.create(x, y, 'obstacle_cangrejo');
        // --- ✅ MODIFICADO: Hitbox del cangrejo ajustada ---
        crab.body.setSize(48, 25); // Antes 48x25
        // --- FIN MODIFICADO ---
        crab.body.velocity.y = this.obstacleSpeed;
        crab.setDepth(10);
        this.time.delayedCall(Phaser.Math.Between(0, 500), () => { if (crab.active) { crab.play('crab_pinch'); } });
        this.time.delayedCall(5000, () => { if (crab.active) crab.destroy(); });
    }
    // --- FIN MODIFICADO ---

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
    }
    gameOver() {
        if (this.scoreTimer) this.scoreTimer.destroy();
        playSfx(this, 'gameover_sfx');
        this.physics.pause();
        this.player.setTint(0xff0000);
        this.cameras.main.shake(300, 0.01);
        const finalScore = Math.floor(this.score * this.scoreMultiplier);
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
        // --- ✅ MODIFICADO: FADE IN más rápido ---
        this.cameras.main.fadeIn(250, 0, 0, 0);
        // --- FIN MODIFICADO ---

        this.background = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'background_vertical').setOrigin(0,0);
        this.add.text(this.scale.width / 2, this.scale.height * 0.1, getText('secretTitle'), { ...FONT_STYLE, fontSize: '42px' }).setOrigin(0.5);
        
        // --- MODIFICADO: Carga dinámica del idioma ---
        const SECRET_MESSAGE = getText('secretMessage');
        const unlockedCount = Math.floor(maxFichasInRun / 100);
        let revealedMessage = '';
        for (let i = 0; i < SECRET_MESSAGE.length; i++) {
            revealedMessage += (i < unlockedCount) ? (SECRET_MESSAGE[i] + ' ') : '??? ';
        }
        // --- FIN MODIFICADO ---

        this.add.text(this.scale.width / 2, this.scale.height / 2, revealedMessage, { ...FONT_STYLE, fontSize: '28px', align: 'center', wordWrap: { width: this.scale.width * 0.9 } }).setOrigin(0.5);
        const backButton = this.add.text(this.scale.width / 2, this.scale.height * 0.9, getText('backButton'), { ...FONT_STYLE, fontSize: '32px', backgroundColor: '#3d006b', padding: { x: 20, y: 10 } }).setOrigin(0.5).setInteractive();
        
        applyButtonTweens(this, backButton, () => {
            changeScene(this, 'MainMenuScene');
        });
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
    }
    
    create() {
        // --- ✅ MODIFICADO: FADE IN más rápido ---
        this.cameras.main.fadeIn(250, 0, 0, 0);
        // --- FIN MODIFICADO ---

        this.background = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'background_vertical').setOrigin(0,0);
        // MODIFICADO
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
    
    createContinueOptions() {
        this.continueWithCoinsButton = null;
        if (totalFichas >= CONTINUE_COST) {
            // MODIFICADO
            this.continueWithCoinsButton = this.add.text(this.scale.width / 2, this.scale.height * 0.6, getText('continueCost', CONTINUE_COST), { ...FONT_STYLE, fontSize: '22px', backgroundColor: '#004f27', padding: { x: 15, y: 10 } }).setOrigin(0.5).setInteractive();
            applyButtonTweens(this, this.continueWithCoinsButton, () => {
                totalFichas -= CONTINUE_COST; 
                localStorage.setItem('ascensoZenFichas', totalFichas); 
                changeScene(this, 'GameScene', { score: this.score, fichas: 0, hasContinued: true });
            });
        }
        
        // MODIFICADO
        this.adButton = this.add.text(this.scale.width / 2, this.scale.height * 0.75, getText('continueAd'), { ...FONT_STYLE, fontSize: '22px', backgroundColor: '#a88f00', padding: { x: 15, y: 10 } }).setOrigin(0.5).setInteractive();
        applyButtonTweens(this, this.adButton, () => {
             this.showAdAndContinue();
        });


        // MODIFICADO
        this.endButton = this.add.text(this.scale.width / 2, this.scale.height * 0.9, getText('endButton'), { ...FONT_STYLE, fontSize: '18px' }).setOrigin(0.5).setInteractive();
        applyButtonTweens(this, this.endButton, () => {
            if (this.continueWithCoinsButton) this.continueWithCoinsButton.destroy();
            this.adButton.destroy();
            this.endButton.destroy();
            this.createEndGameButtons();
        });
    }

    createEndGameButtons() {
        // MODIFICADO
        this.add.text(this.scale.width / 2, this.scale.height * 0.55, `${getText('maxScoreLabel')}${highscore}`, { ...FONT_STYLE, fill: '#f3a800' }).setOrigin(0.5);
        const menuButton = this.add.text(this.scale.width / 2, this.scale.height * 0.68, getText('menuButton'), { ...FONT_STYLE, fontSize: '28px', backgroundColor: '#3d006b', padding: { x: 15, y: 10 } }).setOrigin(0.5).setInteractive();
        applyButtonTweens(this, menuButton, () => {
            changeScene(this, 'MainMenuScene');
        });

        
        const rewardCost = 100;
        // MODIFICADO
        const rewardButton = this.add.text(this.scale.width / 2, this.scale.height * 0.82, getText('bonusButton', rewardCost), { ...FONT_STYLE, fontSize: '18px', align: 'center', backgroundColor: '#004f27', padding: { x: 10, y: 5 } }).setOrigin(0.5);
        if (totalFichas >= rewardCost) {
            rewardButton.setInteractive()
            applyButtonTweens(this, rewardButton, () => {
                totalFichas -= rewardCost; 
                localStorage.setItem('ascensoZenFichas', totalFichas);
                localStorage.setItem('ascensoZenBonusActive', 'true');
                rewardButton.setText(getText('bonusActive')).disableInteractive().setStyle({ backgroundColor: '#333' }); 
            });
        } else { 
            rewardButton.setText(getText('bonusNeeds', rewardCost)).setAlpha(0.5); 
        }
    }

    // --- Interfaz de Carga de Anuncio ---
    showAdLoadingUI(onCancel) {
        this.adLoadingUI = this.add.group();
        
        const overlay = this.add.rectangle(0, 0, this.scale.width, this.scale.height, 0x000000, 0.7).setOrigin(0,0);
        overlay.setInteractive(); // Bloquea los clics a lo que esté debajo
        
        // MODIFICADO
        const loadingText = this.add.text(this.scale.width / 2, this.scale.height / 2 - 50, getText('loadingAd'), FONT_STYLE).setOrigin(0.5);
        
        // MODIFICADO
        const cancelButton = this.add.text(this.scale.width / 2, this.scale.height / 2 + 50, getText('cancelButton'), { ...FONT_STYLE, fontSize: '22px', backgroundColor: '#8b0000', padding: { x: 15, y: 10 } }).setOrigin(0.5);
        cancelButton.setInteractive();
        applyButtonTweens(this, cancelButton, () => {
            onCancel();
        });


        this.adLoadingUI.addMultiple([overlay, loadingText, cancelButton]);
        this.adLoadingUI.setDepth(200); // Asegura que esté por encima de todo
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
    pixelArt: true,
    // --- ✅ MODIFICADO: Escalado FIT ---
    scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH, width: 450, height: 800 },
    // --- ✅ MODIFICADO: debug activado ---
    physics: { default: 'arcade', arcade: { debug: false } },
    // --- ✅ MODIFICADO: Añadidas OptionsScene y StoreScene ---
    scene: [PreloaderScene, MainMenuScene, OptionsScene, StoreScene, GameScene, SecretScene, GameOverScene],
    backgroundColor: '#0d0014'
};

const game = new Phaser.Game(config);