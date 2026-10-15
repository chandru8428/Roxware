/**
 * ROCKS / ROXWARE — THREE.JS 3D MOTION ENGINE
 * Features:
 * 1. Hero 3D Scene: Floating 3D Tech Logos (React 3D Atom, HTML5, Python, JS, Node, Next.js, CSS3, TS)
 *    orbiting around a glowing concentric gyroscopic core with cybernetic tech nodes.
 *    - Silky smooth, calm planetary orbiting speeds (reduced by 3.8x).
 *    - Gentle astronomical gimbal ring rotation.
 * 2. Scroll-Driven 3D Story Scene: STUNNING REAL TECH HARDWARE & WEB DEV WORKBENCH:
 *    - Open Laptop: MacBook style ultrabook with illuminated code screen, terminal, and backlit keyboard.
 *    - Desktop Studio Display Monitor: On metallic stand with live web platform telemetry dashboard.
 *    - Ergonomic Wireless Tech Mouse: With metallic scroll wheel & glowing RGB perimeter stripe.
 *    - Dedicated Dual-Fan GPU: With smoothly spinning turbine blades, polished copper heatpipes, and side RGB logo.
 *    - High-Tech Silicon CPU Microprocessor: With etched PCB bus tracks, 32 golden pins, raised die, and HUD ring.
 *    - 3D Web Development Code Brackets (< / >): Deep extruded bevels in radiant copper and amber.
 *    - Database Storage Platters: With emerald green & amber active read/write LED activity rings.
 *    - Modular Server Blade: With cooling gills and network indicator LEDs.
 * 3. Speeds: Tuned to silky smooth, tranquil, weighted cinematic motion (no frantic spinning).
 * 4. Generous Right-Column Desktop Framing: Positioned at x = 4.3 so it NEVER overlaps the left story cards!
 * 5. Dynamic Theme Adaptation: Calibrated lighting for crisp Light Mode & glowing Dark Mode.
 */

(function () {
  'use strict';

  function isWebGLAvailable() {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }

  const supportsReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.__roxwareReducedMotion = supportsReducedMotion;

  function showStaticFallback(reason) {
    document.body.classList.add('no-webgl');
    const storyCanvas = document.getElementById('story-canvas');
    if (storyCanvas) storyCanvas.style.display = 'none';
    if (reason) console.warn('3D disabled:', reason);
  }

  function createRenderer(canvas, opts) {
    try {
      const renderer = new THREE.WebGLRenderer({ canvas, ...(opts || {}) });
      return renderer;
    } catch (e) {
      console.warn('WebGLRenderer creation failed:', e);
      return null;
    }
  }

  function getOptimizedPixelRatio() {
    const deviceRatio = window.devicePixelRatio || 1;
    return window.innerWidth < 768
      ? Math.min(deviceRatio, 1.25)
      : Math.min(deviceRatio, 1.75);
  }

  if (!isWebGLAvailable() || typeof THREE === 'undefined') {
    console.warn('WebGL not supported or Three.js missing. Falling back to static visual.');
    document.body.classList.add('no-webgl');
    return;
  }

  // --- High-Resolution 2D Canvas Generators for Tech Logos ---
  function createTechCanvasTexture(type) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Smooth background disc with metallic vignette
    const bgGrad = ctx.createRadialGradient(256, 256, 40, 256, 256, 250);
    bgGrad.addColorStop(0, '#1E2636');
    bgGrad.addColorStop(0.75, '#121824');
    bgGrad.addColorStop(1, '#0B0F18');
    ctx.fillStyle = bgGrad;
    ctx.beginPath();
    ctx.arc(256, 256, 240, 0, Math.PI * 2);
    ctx.fill();

    // Metallic rim border
    ctx.strokeStyle = '#C87431';
    ctx.lineWidth = 12;
    ctx.stroke();

    // Subtle inner glowing guide ring
    ctx.strokeStyle = 'rgba(224, 135, 63, 0.35)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(256, 256, 222, 0, Math.PI * 2);
    ctx.stroke();

    ctx.save();
    ctx.translate(256, 256);

    switch (type) {
      case 'html': {
        // HTML5 Shield
        ctx.fillStyle = '#E44D26';
        ctx.beginPath();
        ctx.moveTo(-110, -130);
        ctx.lineTo(110, -130);
        ctx.lineTo(90, 115);
        ctx.lineTo(0, 145);
        ctx.lineTo(-90, 115);
        ctx.closePath();
        ctx.fill();

        // Right half lighter orange
        ctx.fillStyle = '#F16529';
        ctx.beginPath();
        ctx.moveTo(0, -130);
        ctx.lineTo(110, -130);
        ctx.lineTo(90, 115);
        ctx.lineTo(0, 145);
        ctx.closePath();
        ctx.fill();

        // White "5" Emblem
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.moveTo(-75, -95);
        ctx.lineTo(75, -95);
        ctx.lineTo(70, -60);
        ctx.lineTo(0, -60);
        ctx.lineTo(0, -30);
        ctx.lineTo(65, -30);
        ctx.lineTo(55, 75);
        ctx.lineTo(0, 95);
        ctx.lineTo(-55, 75);
        ctx.lineTo(-60, 25);
        ctx.lineTo(-25, 25);
        ctx.lineTo(-22, 50);
        ctx.lineTo(0, 60);
        ctx.lineTo(25, 50);
        ctx.lineTo(30, 5);
        ctx.lineTo(0, 5);
        ctx.lineTo(0, -25);
        ctx.lineTo(-70, -25);
        ctx.closePath();
        ctx.fill();
        break;
      }

      case 'python': {
        // Python Official Dual Serpents
        const blue = '#3776AB';
        const yellow = '#FFD43B';

        // Top blue serpent
        ctx.fillStyle = blue;
        ctx.beginPath();
        ctx.arc(-25, -55, 50, Math.PI, 0, false);
        ctx.lineTo(35, -55);
        ctx.arc(35, -25, 30, -Math.PI / 2, Math.PI / 2, false);
        ctx.lineTo(-10, 5);
        ctx.arc(-10, 35, 30, -Math.PI / 2, Math.PI / 2, true);
        ctx.lineTo(-50, 65);
        ctx.arc(-50, -5, 50, Math.PI / 2, (3 * Math.PI) / 2, false);
        ctx.closePath();
        ctx.fill();

        // Top serpent eye
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(-30, -70, 9, 0, Math.PI * 2);
        ctx.fill();

        // Bottom yellow serpent (rotated 180)
        ctx.save();
        ctx.rotate(Math.PI);
        ctx.fillStyle = yellow;
        ctx.beginPath();
        ctx.arc(-25, -55, 50, Math.PI, 0, false);
        ctx.lineTo(35, -55);
        ctx.arc(35, -25, 30, -Math.PI / 2, Math.PI / 2, false);
        ctx.lineTo(-10, 5);
        ctx.arc(-10, 35, 30, -Math.PI / 2, Math.PI / 2, true);
        ctx.lineTo(-50, 65);
        ctx.arc(-50, -5, 50, Math.PI / 2, (3 * Math.PI) / 2, false);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(-30, -70, 9, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        break;
      }

      case 'js': {
        // Modern JavaScript Badge
        ctx.fillStyle = '#F7DF1E';
        ctx.beginPath();
        ctx.roundRect(-120, -120, 240, 240, 32);
        ctx.fill();

        ctx.fillStyle = '#1A202C';
        ctx.font = '900 130px "Space Grotesk", sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText('JS', 95, 75);
        break;
      }

      case 'node': {
        // Node.js Hexagon Badge
        ctx.fillStyle = '#339933';
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3;
          const x = Math.cos(angle) * 125;
          const y = Math.sin(angle) * 125;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = '900 120px "Space Grotesk", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('⬢', 0, -10);
        ctx.font = '700 48px "Space Grotesk", sans-serif';
        ctx.fillText('NODE', 0, 48);
        break;
      }

      case 'next': {
        // Next.js Badge
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(0, 0, 130, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 6;
        ctx.stroke();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = '800 140px "Outfit", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('N', -10, 0);

        // Diagonal gradient slash
        const slashGrad = ctx.createLinearGradient(0, -60, 70, 70);
        slashGrad.addColorStop(0, '#C87431');
        slashGrad.addColorStop(1, '#FFFFFF');
        ctx.fillStyle = slashGrad;
        ctx.beginPath();
        ctx.moveTo(10, -55);
        ctx.lineTo(65, 55);
        ctx.lineTo(82, 55);
        ctx.lineTo(27, -55);
        ctx.closePath();
        ctx.fill();
        break;
      }

      case 'css': {
        // CSS3 Shield
        ctx.fillStyle = '#1572B6';
        ctx.beginPath();
        ctx.moveTo(-110, -130);
        ctx.lineTo(110, -130);
        ctx.lineTo(90, 115);
        ctx.lineTo(0, 145);
        ctx.lineTo(-90, 115);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#33A9DC';
        ctx.beginPath();
        ctx.moveTo(0, -130);
        ctx.lineTo(110, -130);
        ctx.lineTo(90, 115);
        ctx.lineTo(0, 145);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = '900 135px "Space Grotesk", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('3', 0, 0);
        break;
      }

      case 'ts': {
        // TypeScript Badge
        ctx.fillStyle = '#3178C6';
        ctx.beginPath();
        ctx.roundRect(-120, -120, 240, 240, 32);
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = '900 120px "Space Grotesk", sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText('TS', 95, 70);
        break;
      }
    }

    ctx.restore();

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    return texture;
  }

  // --- Real 3D Procedural React Atom Model ---
  function create3DReactAtom() {
    const group = new THREE.Group();

    // Central nucleus
    const nucleusGeom = new THREE.SphereGeometry(0.38, 32, 32);
    const nucleusMat = new THREE.MeshStandardMaterial({
      color: 0x61DAFB,
      emissive: 0x61DAFB,
      emissiveIntensity: 1.4,
      roughness: 0.1,
      metalness: 0.3
    });
    const nucleus = new THREE.Mesh(nucleusGeom, nucleusMat);
    group.add(nucleus);

    // 3 interlocking elliptical torus rings
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x61DAFB,
      emissive: 0x61DAFB,
      emissiveIntensity: 0.85,
      roughness: 0.2,
      metalness: 0.9
    });

    const angles = [0, Math.PI / 3, (2 * Math.PI) / 3];
    const rings = [];

    angles.forEach(angle => {
      const torusGeom = new THREE.TorusGeometry(1.0, 0.04, 16, 64);
      const torus = new THREE.Mesh(torusGeom, ringMat);
      torus.scale.set(1.5, 0.55, 1);
      torus.rotation.z = angle;
      group.add(torus);
      rings.push(torus);
    });

    group.userData = { rings };
    return group;
  }

  // --- 3D Beveled Tech Token with Emblem Texture ---
  function create3DTechToken(texture, rimColor) {
    const group = new THREE.Group();

    const tokenGeom = new THREE.CylinderGeometry(0.85, 0.85, 0.16, 48);

    const frontMat = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.2,
      metalness: 0.35,
      emissive: 0x111111
    });

    const rimMat = new THREE.MeshStandardMaterial({
      color: rimColor || 0xC87431,
      roughness: 0.22,
      metalness: 0.94
    });

    const cylinder = new THREE.Mesh(tokenGeom, [rimMat, frontMat, frontMat]);
    cylinder.rotation.x = Math.PI / 2;
    group.add(cylinder);

    // Outer subtle glowing ring
    const glowRingGeom = new THREE.RingGeometry(0.88, 0.94, 36);
    const glowRingMat = new THREE.MeshBasicMaterial({
      color: rimColor || 0xC87431,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35
    });
    const glowRing = new THREE.Mesh(glowRingGeom, glowRingMat);
    group.add(glowRing);

    return group;
  }

  // --- Cyber Data Node (Tech Cube with Edge Wireframe & Luminous Core) ---
  function createCyberDataNode(size, rimColor, coreColor) {
    const group = new THREE.Group();
    const boxGeom = new THREE.BoxGeometry(size, size, size);
    const boxMat = new THREE.MeshStandardMaterial({
      color: 0x141B26,
      roughness: 0.25,
      metalness: 0.9
    });
    const box = new THREE.Mesh(boxGeom, boxMat);
    group.add(box);

    const wireMat = new THREE.LineBasicMaterial({
      color: rimColor || 0xC87431,
      transparent: true,
      opacity: 0.8
    });
    const wireGeom = new THREE.EdgesGeometry(boxGeom);
    const wire = new THREE.LineSegments(wireGeom, wireMat);
    group.add(wire);

    const coreGeom = new THREE.SphereGeometry(size * 0.32, 12, 12);
    const coreMat = new THREE.MeshBasicMaterial({
      color: coreColor || 0xE0873F
    });
    const core = new THREE.Mesh(coreGeom, coreMat);
    group.add(core);

    return group;
  }

  /* ==========================================================================
     HARDWARE & WEB DEVELOPMENT 3D MODELS (LAPTOP, DESKTOP, MOUSE, GPU, CPU, CODE)
     ========================================================================== */

  // 1. OPEN LAPTOP (MacBook Style Ultrabook with Code Screen & Terminal)
  function create3DLaptopMesh() {
    const laptop = new THREE.Group();

    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x1B2332,
      roughness: 0.22,
      metalness: 0.92
    });

    // Base Chassis
    const baseGeom = new THREE.BoxGeometry(2.6, 0.12, 1.8);
    const base = new THREE.Mesh(baseGeom, metalMat);
    laptop.add(base);

    // Front Lip Power Indicator Micro-LED
    const pwrLedGeom = new THREE.SphereGeometry(0.025, 8, 8);
    const pwrLedMat = new THREE.MeshBasicMaterial({ color: 0xE0873F });
    const pwrLed = new THREE.Mesh(pwrLedGeom, pwrLedMat);
    pwrLed.position.set(0, 0, 0.905);
    laptop.add(pwrLed);

    // Keyboard & Trackpad Canvas Texture
    const kbCanvas = document.createElement('canvas');
    kbCanvas.width = 512;
    kbCanvas.height = 360;
    const kctx = kbCanvas.getContext('2d');
    kctx.fillStyle = '#141A26';
    kctx.fillRect(0, 0, 512, 360);

    // Keyboard Recess with subtle backlight glow
    kctx.fillStyle = '#0B1017';
    kctx.fillRect(28, 20, 456, 195);
    kctx.strokeStyle = 'rgba(200, 116, 49, 0.25)';
    kctx.lineWidth = 2;
    kctx.strokeRect(28, 20, 456, 195);

    // Individual Backlit Keycaps
    kctx.fillStyle = '#1E2838';
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 14; c++) {
        kctx.fillRect(34 + c * 32, 26 + r * 37, 26, 31);
      }
    }
    // Spacebar
    kctx.fillStyle = '#1E2838';
    kctx.fillRect(160, 175, 190, 31);

    // Trackpad with border
    kctx.strokeStyle = '#334155';
    kctx.lineWidth = 3;
    kctx.strokeRect(170, 235, 172, 105);

    const kbTex = new THREE.CanvasTexture(kbCanvas);
    const kbPlateGeom = new THREE.PlaneGeometry(2.44, 1.64);
    const kbPlateMat = new THREE.MeshStandardMaterial({ map: kbTex, roughness: 0.3, metalness: 0.45 });
    const kbPlate = new THREE.Mesh(kbPlateGeom, kbPlateMat);
    kbPlate.rotation.x = -Math.PI / 2;
    kbPlate.position.y = 0.065;
    laptop.add(kbPlate);

    // Display Lid (Opened at ~115 degrees)
    const lidGroup = new THREE.Group();
    lidGroup.position.set(0, 0.06, -0.9);
    lidGroup.rotation.x = -0.32; // Naturally opened laptop lid (~108 deg angle)

    const lidGeom = new THREE.BoxGeometry(2.6, 1.8, 0.08);
    const lid = new THREE.Mesh(lidGeom, metalMat);
    lid.position.set(0, 0.9, 0);
    lidGroup.add(lid);

    // Screen Canvas (VS Code Web App Editor + Terminal)
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 512;
    screenCanvas.height = 360;
    const sctx = screenCanvas.getContext('2d');
    sctx.fillStyle = '#080D15';
    sctx.fillRect(0, 0, 512, 360);

    // Header bar with window controls
    sctx.fillStyle = '#121926';
    sctx.fillRect(0, 0, 512, 44);
    sctx.fillStyle = '#EF4444'; sctx.beginPath(); sctx.arc(24, 22, 6, 0, Math.PI * 2); sctx.fill();
    sctx.fillStyle = '#F59E0B'; sctx.beginPath(); sctx.arc(42, 22, 6, 0, Math.PI * 2); sctx.fill();
    sctx.fillStyle = '#10B981'; sctx.beginPath(); sctx.arc(60, 22, 6, 0, Math.PI * 2); sctx.fill();
    sctx.fillStyle = '#94A3B8'; sctx.font = 'bold 15px monospace'; sctx.fillText('roxware-studio / App.tsx', 82, 27);

    // Code lines
    sctx.font = '15px monospace';
    sctx.fillStyle = '#C87431'; sctx.fillText('import', 24, 76);
    sctx.fillStyle = '#38BDF8'; sctx.fillText(' { WebApp, Cloud } ', 80, 76);
    sctx.fillStyle = '#C87431'; sctx.fillText('from', 255, 76);
    sctx.fillStyle = '#FBBF24'; sctx.fillText(' "roxware";', 295, 76);

    sctx.fillStyle = '#9333EA'; sctx.fillText('const', 24, 108);
    sctx.fillStyle = '#38BDF8'; sctx.fillText(' digitalProduct', 70, 108);
    sctx.fillStyle = '#FFFFFF'; sctx.fillText(' = await createSolution({', 195, 108);

    sctx.fillStyle = '#E0873F'; sctx.fillText('  stack:', 48, 140);
    sctx.fillStyle = '#10B981'; sctx.fillText(' "Next.js + WebGL 3D",', 115, 140);

    sctx.fillStyle = '#E0873F'; sctx.fillText('  performance:', 48, 172);
    sctx.fillStyle = '#FBBF24'; sctx.fillText(' "sub-second",', 160, 172);

    sctx.fillStyle = '#E0873F'; sctx.fillText('  reach:', 48, 204);
    sctx.fillStyle = '#38BDF8'; sctx.fillText(' "worldwide",', 110, 204);

    sctx.fillStyle = '#FFFFFF'; sctx.fillText('});', 24, 236);

    // Terminal container at bottom of screen
    sctx.fillStyle = '#05080E';
    sctx.fillRect(16, 255, 480, 90);
    sctx.fillStyle = '#10B981';
    sctx.font = 'bold 13px monospace';
    sctx.fillText('$ roxware build --prod [COMPLETE in 84ms]', 28, 285);
    sctx.fillText('● Ready on https://roxware.consultancy', 28, 310);
    sctx.fillStyle = '#38BDF8';
    sctx.fillText('● WebGL Hardware Acceleration: ACTIVE (60 FPS)', 28, 332);

    const screenTex = new THREE.CanvasTexture(screenCanvas);
    const screenGeom = new THREE.PlaneGeometry(2.46, 1.66);
    const screenMat = new THREE.MeshStandardMaterial({
      map: screenTex,
      emissive: 0x1A2433,
      emissiveIntensity: 0.55,
      roughness: 0.12,
      metalness: 0.15
    });
    const screen = new THREE.Mesh(screenGeom, screenMat);
    screen.position.set(0, 0.9, 0.042);
    lidGroup.add(screen);

    laptop.add(lidGroup);

    // Copper Edge Accent
    const wireMat = new THREE.LineBasicMaterial({ color: 0xC87431, transparent: true, opacity: 0.7 });
    const wire = new THREE.LineSegments(new THREE.EdgesGeometry(baseGeom), wireMat);
    laptop.add(wire);

    laptop.userData = { lidGroup };
    return laptop;
  }

  // 2. STUDIO DESKTOP DISPLAY (Widescreen Monitor with Stand)
  function create3DDesktopMonitorMesh() {
    const desktop = new THREE.Group();

    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x171F2C,
      roughness: 0.22,
      metalness: 0.94
    });

    // Base Foot Stand
    const baseGeom = new THREE.CylinderGeometry(0.85, 0.9, 0.08, 32);
    const base = new THREE.Mesh(baseGeom, metalMat);
    base.position.y = -1.45;
    desktop.add(base);

    // Stand Neck
    const neckGeom = new THREE.BoxGeometry(0.25, 1.5, 0.18);
    const neck = new THREE.Mesh(neckGeom, metalMat);
    neck.position.set(0, -0.65, -0.18);
    neck.rotation.x = 0.08;
    desktop.add(neck);

    // Display Chassis
    const chassisGeom = new THREE.BoxGeometry(3.6, 2.2, 0.14);
    const chassis = new THREE.Mesh(chassisGeom, metalMat);
    desktop.add(chassis);

    // Power LED at bottom center bezel
    const pwr = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 8), new THREE.MeshBasicMaterial({ color: 0x10B981 }));
    pwr.position.set(0, -1.02, 0.08);
    desktop.add(pwr);

    // Dashboard Screen Texture
    const dashCanvas = document.createElement('canvas');
    dashCanvas.width = 512;
    dashCanvas.height = 320;
    const dctx = dashCanvas.getContext('2d');
    dctx.fillStyle = '#070C14';
    dctx.fillRect(0, 0, 512, 320);

    // Header
    dctx.fillStyle = '#101724';
    dctx.fillRect(0, 0, 512, 42);
    dctx.fillStyle = '#C87431';
    dctx.fillRect(20, 12, 18, 18);
    dctx.fillStyle = '#FFFFFF';
    dctx.font = 'bold 15px "Space Grotesk", sans-serif';
    dctx.fillText('ROXWARE WEB PLATFORM TELEMETRY', 48, 27);

    // Metric Cards
    const metrics = [
      { l: 'LCP Score', v: '0.4s', c: '#10B981' },
      { l: 'Network Latency', v: '9ms', c: '#38BDF8' },
      { l: 'Global Uptime', v: '99.99%', c: '#F59E0B' }
    ];
    metrics.forEach((m, idx) => {
      dctx.fillStyle = '#0F1520';
      dctx.fillRect(20 + idx * 160, 55, 145, 65);
      dctx.strokeStyle = '#1E2B3E';
      dctx.strokeRect(20 + idx * 160, 55, 145, 65);

      dctx.fillStyle = '#94A3B8';
      dctx.font = '11px sans-serif';
      dctx.fillText(m.l, 30 + idx * 160, 75);

      dctx.fillStyle = m.c;
      dctx.font = 'bold 20px "Space Grotesk", sans-serif';
      dctx.fillText(m.v, 30 + idx * 160, 105);
    });

    // Chart Area
    dctx.fillStyle = '#0F1520';
    dctx.fillRect(20, 135, 472, 165);
    dctx.strokeStyle = '#1E2B3E';
    dctx.strokeRect(20, 135, 472, 165);

    // Glowing Analytics Trendline
    dctx.strokeStyle = '#C87431';
    dctx.lineWidth = 4;
    dctx.beginPath();
    const pts = [230, 245, 215, 190, 175, 160, 145, 140, 155, 135];
    pts.forEach((y, i) => {
      const x = 38 + i * 48;
      if (i === 0) dctx.moveTo(x, y);
      else dctx.lineTo(x, y);
    });
    dctx.stroke();

    pts.forEach((y, i) => {
      const x = 38 + i * 48;
      dctx.fillStyle = '#E0873F';
      dctx.beginPath();
      dctx.arc(x, y, 4, 0, Math.PI * 2);
      dctx.fill();
    });

    const dashTex = new THREE.CanvasTexture(dashCanvas);
    const screenGeom = new THREE.PlaneGeometry(3.48, 2.08);
    const screenMat = new THREE.MeshStandardMaterial({
      map: dashTex,
      emissive: 0x162230,
      emissiveIntensity: 0.55,
      roughness: 0.18,
      metalness: 0.15
    });
    const screen = new THREE.Mesh(screenGeom, screenMat);
    screen.position.z = 0.075;
    desktop.add(screen);

    // Copper Edge Accent
    const wireMat = new THREE.LineBasicMaterial({ color: 0xC87431, transparent: true, opacity: 0.65 });
    const wire = new THREE.LineSegments(new THREE.EdgesGeometry(chassisGeom), wireMat);
    desktop.add(wire);

    return desktop;
  }

  // 3. ERGONOMIC WIRELESS TECH MOUSE
  function create3DTechMouseMesh() {
    const mouse = new THREE.Group();

    // Ergonomic body
    const bodyGeom = new THREE.SphereGeometry(0.72, 32, 24);
    bodyGeom.scale(0.85, 0.44, 1.3);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x161E2B,
      roughness: 0.20,
      metalness: 0.90
    });
    const body = new THREE.Mesh(bodyGeom, bodyMat);
    body.position.y = 0.15;
    mouse.add(body);

    // Split button seam
    const seamGeom = new THREE.BoxGeometry(0.02, 0.14, 0.85);
    const seamMat = new THREE.MeshBasicMaterial({ color: 0x080C14 });
    const seam = new THREE.Mesh(seamGeom, seamMat);
    seam.position.set(0, 0.31, -0.4);
    mouse.add(seam);

    // Metallic Copper Scroll Wheel
    const wheelGeom = new THREE.CylinderGeometry(0.14, 0.14, 0.09, 24);
    const wheelMat = new THREE.MeshStandardMaterial({
      color: 0xC87431,
      roughness: 0.18,
      metalness: 0.96
    });
    const wheel = new THREE.Mesh(wheelGeom, wheelMat);
    wheel.rotation.z = Math.PI / 2;
    wheel.position.set(0, 0.31, -0.42);
    mouse.add(wheel);

    // Glowing RGB perimeter stripe
    const stripeGeom = new THREE.TorusGeometry(0.66, 0.018, 8, 32);
    const stripeMat = new THREE.MeshBasicMaterial({ color: 0xE0873F });
    const stripe = new THREE.Mesh(stripeGeom, stripeMat);
    stripe.rotation.x = Math.PI / 2;
    stripe.scale.set(0.8, 1.25, 1);
    stripe.position.set(0, 0.08, 0.05);
    mouse.add(stripe);

    mouse.userData = { wheel };
    return mouse;
  }

  // 4. DEDICATED DUAL-FAN GPU (Graphics Card with Spinning Fans)
  function create3DGpuMesh() {
    const gpu = new THREE.Group();

    const shroudMat = new THREE.MeshStandardMaterial({
      color: 0x121824,
      roughness: 0.22,
      metalness: 0.94
    });

    // Shroud Body
    const shroudGeom = new THREE.BoxGeometry(2.8, 1.35, 0.65);
    const shroud = new THREE.Mesh(shroudGeom, shroudMat);
    gpu.add(shroud);

    // 4 Polished Copper Heatpipes on top
    const pipeGeom = new THREE.CylinderGeometry(0.045, 0.045, 2.5, 16);
    const pipeMat = new THREE.MeshStandardMaterial({ color: 0xC87431, roughness: 0.12, metalness: 0.98 });
    const pipe1 = new THREE.Mesh(pipeGeom, pipeMat);
    pipe1.rotation.z = Math.PI / 2;
    pipe1.position.set(0, 0.64, 0.12);
    gpu.add(pipe1);

    const pipe2 = new THREE.Mesh(pipeGeom, pipeMat);
    pipe2.rotation.z = Math.PI / 2;
    pipe2.position.set(0, 0.64, -0.12);
    gpu.add(pipe2);

    // Dual Cooling Fans
    const fans = [];
    const fanCenters = [-0.7, 0.7];

    fanCenters.forEach(cx => {
      // Fan rim ring
      const rimGeom = new THREE.TorusGeometry(0.48, 0.04, 12, 32);
      const rimMat = new THREE.MeshStandardMaterial({ color: 0xC87431, roughness: 0.18, metalness: 0.96 });
      const rim = new THREE.Mesh(rimGeom, rimMat);
      rim.position.set(cx, 0, 0.33);
      gpu.add(rim);

      // Rotating fan blade group
      const fanGroup = new THREE.Group();
      fanGroup.position.set(cx, 0, 0.31);

      // Center hub
      const hubGeom = new THREE.CylinderGeometry(0.16, 0.16, 0.06, 16);
      const hubMat = new THREE.MeshStandardMaterial({ color: 0x0B1018, roughness: 0.25, metalness: 0.92 });
      const hub = new THREE.Mesh(hubGeom, hubMat);
      hub.rotation.x = Math.PI / 2;
      fanGroup.add(hub);

      // 9 Angled Blades
      const bladeGeom = new THREE.BoxGeometry(0.10, 0.30, 0.02);
      const bladeMat = new THREE.MeshStandardMaterial({ color: 0x1A2332, roughness: 0.18, metalness: 0.85 });
      for (let b = 0; b < 9; b++) {
        const angle = (b * Math.PI * 2) / 9;
        const blade = new THREE.Mesh(bladeGeom, bladeMat);
        blade.position.set(Math.cos(angle) * 0.28, Math.sin(angle) * 0.28, 0);
        blade.rotation.z = angle + 0.35;
        fanGroup.add(blade);
      }

      gpu.add(fanGroup);
      fans.push(fanGroup);
    });

    // Glowing RGB Side Brand Strip
    const stripGeom = new THREE.PlaneGeometry(1.8, 0.2);
    const stripMat = new THREE.MeshBasicMaterial({ color: 0x38BDF8 });
    const strip = new THREE.Mesh(stripGeom, stripMat);
    strip.position.set(0, -0.66, 0.33);
    strip.rotation.x = Math.PI / 2;
    gpu.add(strip);

    gpu.userData = { fans };
    return gpu;
  }

  // 5. HIGH-TECH CPU MICROPROCESSOR (Silicon Package with Pins)
  function create3DCpuMesh() {
    const group = new THREE.Group();

    // Base silicon package
    const baseGeom = new THREE.BoxGeometry(2.2, 0.2, 2.2);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x121926,
      roughness: 0.22,
      metalness: 0.92
    });
    const baseMesh = new THREE.Mesh(baseGeom, baseMat);
    group.add(baseMesh);

    // Top circuit plate
    const cpuCanvas = document.createElement('canvas');
    cpuCanvas.width = 512;
    cpuCanvas.height = 512;
    const cctx = cpuCanvas.getContext('2d');
    cctx.fillStyle = '#0D141F';
    cctx.fillRect(0, 0, 512, 512);

    // PCB Bus Tracks
    cctx.strokeStyle = '#C87431';
    cctx.lineWidth = 3;
    for (let i = 0; i < 4; i++) {
      cctx.save();
      cctx.translate(256, 256);
      cctx.rotate((i * Math.PI) / 2);
      cctx.beginPath();
      cctx.moveTo(110, -110); cctx.lineTo(195, -110); cctx.lineTo(195, -170);
      cctx.moveTo(85, -135); cctx.lineTo(145, -135); cctx.lineTo(145, -200);
      cctx.stroke();
      cctx.fillStyle = '#E0873F';
      cctx.fillRect(190, -115, 10, 10);
      cctx.fillRect(140, -140, 10, 10);
      cctx.restore();
    }

    // Central Metallic Heat Spreader
    cctx.fillStyle = '#1A2434';
    cctx.fillRect(150, 150, 212, 212);
    cctx.strokeStyle = '#C87431';
    cctx.lineWidth = 5;
    cctx.strokeRect(150, 150, 212, 212);

    cctx.fillStyle = '#FFFFFF';
    cctx.font = 'bold 22px "Space Grotesk", monospace';
    cctx.textAlign = 'center';
    cctx.fillText('ROXWARE', 256, 230);
    cctx.fillStyle = '#E0873F';
    cctx.font = 'bold 15px monospace';
    cctx.fillText('CORE · V8-64', 256, 260);

    const cpuTex = new THREE.CanvasTexture(cpuCanvas);
    const topPlateGeom = new THREE.PlaneGeometry(2.1, 2.1);
    const topPlateMat = new THREE.MeshStandardMaterial({ map: cpuTex, roughness: 0.18, metalness: 0.55 });
    const topPlate = new THREE.Mesh(topPlateGeom, topPlateMat);
    topPlate.rotation.x = -Math.PI / 2;
    topPlate.position.y = 0.105;
    group.add(topPlate);

    // Glowing Central Die & Bead
    const coreBeadGeom = new THREE.SphereGeometry(0.22, 16, 16);
    const coreBeadMat = new THREE.MeshBasicMaterial({ color: 0xFFB366 });
    const coreBead = new THREE.Mesh(coreBeadGeom, coreBeadMat);
    coreBead.position.y = 0.2;
    group.add(coreBead);

    // Copper Pins (32 pins)
    const pinGeom = new THREE.BoxGeometry(0.08, 0.08, 0.24);
    const pinMat = new THREE.MeshStandardMaterial({ color: 0xC87431, roughness: 0.18, metalness: 0.96 });
    for (let side = 0; side < 4; side++) {
      const angle = (side * Math.PI) / 2;
      for (let p = 0; p < 8; p++) {
        const offset = -0.85 + p * (1.7 / 7);
        const pin = new THREE.Mesh(pinGeom, pinMat);
        pin.position.set(
          Math.cos(angle) * 1.18 - Math.sin(angle) * offset,
          -0.02,
          Math.sin(angle) * 1.18 + Math.cos(angle) * offset
        );
        pin.rotation.y = angle;
        group.add(pin);
      }
    }

    // Concentric HUD Ring
    const ringMat = new THREE.LineBasicMaterial({ color: 0xC87431, transparent: true, opacity: 0.75 });
    const ring = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(new THREE.EllipseCurve(0, 0, 1.5, 1.5, 0, Math.PI * 2).getPoints(48)), ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.25;
    group.add(ring);

    group.userData = { ring, coreBead };
    return group;
  }

  // 6. 3D WEB DEVELOPMENT CODE BRACKETS (< / >)
  function create3DCodeTagMesh() {
    const group = new THREE.Group();

    const tagMat = new THREE.MeshStandardMaterial({
      color: 0xC87431,
      roughness: 0.18,
      metalness: 0.96,
      emissive: 0xC87431,
      emissiveIntensity: 0.45
    });

    const extrudeSettings = { depth: 0.16, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: 0.04, bevelThickness: 0.04 };

    // Left Bracket "<"
    const leftShape = new THREE.Shape();
    leftShape.moveTo(0.24, 0.65);
    leftShape.lineTo(-0.32, 0.0);
    leftShape.lineTo(0.24, -0.65);
    leftShape.lineTo(0.40, -0.52);
    leftShape.lineTo(-0.10, 0.0);
    leftShape.lineTo(0.40, 0.52);
    leftShape.closePath();
    const leftMesh = new THREE.Mesh(new THREE.ExtrudeGeometry(leftShape, extrudeSettings), tagMat);
    leftMesh.position.x = -0.95;
    group.add(leftMesh);

    // Slash "/"
    const slashShape = new THREE.Shape();
    slashShape.moveTo(0.20, 0.80);
    slashShape.lineTo(0.35, 0.80);
    slashShape.lineTo(-0.20, -0.80);
    slashShape.lineTo(-0.35, -0.80);
    slashShape.closePath();
    const slashMat = new THREE.MeshStandardMaterial({ color: 0xE0873F, roughness: 0.15, metalness: 0.96, emissive: 0xE0873F, emissiveIntensity: 0.45 });
    const slashMesh = new THREE.Mesh(new THREE.ExtrudeGeometry(slashShape, extrudeSettings), slashMat);
    slashMesh.position.x = 0;
    group.add(slashMesh);

    // Right Bracket ">"
    const rightShape = new THREE.Shape();
    rightShape.moveTo(-0.24, 0.65);
    rightShape.lineTo(0.32, 0.0);
    rightShape.lineTo(-0.24, -0.65);
    rightShape.lineTo(-0.40, -0.52);
    rightShape.lineTo(0.10, 0.0);
    rightShape.lineTo(-0.40, 0.52);
    rightShape.closePath();
    const rightMesh = new THREE.Mesh(new THREE.ExtrudeGeometry(rightShape, extrudeSettings), tagMat);
    rightMesh.position.x = 0.95;
    group.add(rightMesh);

    return group;
  }

  // 7. DATABASE SERVER PLATTERS
  function create3DDatabaseMesh() {
    const group = new THREE.Group();

    const platterGeom = new THREE.CylinderGeometry(0.68, 0.68, 0.22, 32);
    const platterMat = new THREE.MeshStandardMaterial({ color: 0x141D2B, roughness: 0.22, metalness: 0.94 });
    const rimMat = new THREE.MeshStandardMaterial({ color: 0xC87431, roughness: 0.18, metalness: 0.96 });
    const ledMat = new THREE.MeshBasicMaterial({ color: 0x10B981 });

    for (let d = 0; d < 3; d++) {
      const y = (d - 1) * 0.32;
      const disc = new THREE.Mesh(platterGeom, [rimMat, platterMat, platterMat]);
      disc.position.y = y;
      group.add(disc);

      const ringGeom = new THREE.TorusGeometry(0.70, 0.015, 8, 32);
      const ring = new THREE.Mesh(ringGeom, ledMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = y;
      group.add(ring);
    }
    return group;
  }

  // 8. MODULAR SERVER BLADE
  function create3DServerBladeMesh() {
    const group = new THREE.Group();

    const chassisGeom = new THREE.BoxGeometry(0.55, 1.45, 0.85);
    const chassisMat = new THREE.MeshStandardMaterial({ color: 0x121824, roughness: 0.22, metalness: 0.92 });
    const chassis = new THREE.Mesh(chassisGeom, chassisMat);
    group.add(chassis);

    // Front cooling gills
    const gillMat = new THREE.MeshBasicMaterial({ color: 0x1F2B3E });
    for (let g = 0; g < 5; g++) {
      const gill = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.045, 0.02), gillMat);
      gill.position.set(0, -0.4 + g * 0.2, 0.435);
      group.add(gill);
    }

    // Status LEDs
    const ledColors = [0x10B981, 0xE0873F, 0x38BDF8, 0x10B981];
    ledColors.forEach((col, idx) => {
      const led = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), new THREE.MeshBasicMaterial({ color: col }));
      led.position.set(-0.16 + idx * 0.11, 0.52, 0.435);
      group.add(led);
    });

    const wireMat = new THREE.LineBasicMaterial({ color: 0xC87431, transparent: true, opacity: 0.75 });
    group.add(new THREE.LineSegments(new THREE.EdgesGeometry(chassisGeom), wireMat));

    return group;
  }

  /* ==========================================================================
     1. HERO 3D SCENE (3D TECH LOGOS & CONCENTRIC GYROSCOPE CORE)
     ========================================================================== */
  function initHeroScene() {
    const container = document.getElementById('hero-3d-wrapper');
    const canvas = document.getElementById('hero-canvas');
    if (!container || !canvas) return;

    const width = Math.max(1, container.clientWidth || 0);
    const height = Math.max(1, container.clientHeight || 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, window.innerWidth < 768 ? 19 : 15);

    const renderer = createRenderer(canvas, {
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    if (!renderer) { showStaticFallback('hero webgl context failed'); return; }
    canvas.addEventListener('webglcontextlost', function (ev) {
      ev.preventDefault();
      showStaticFallback('hero webgl context lost');
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(getOptimizedPixelRatio());
    renderer.toneMapping = THREE.ACESFilmicToneMapping;

    const isInitiallyLight = document.documentElement.getAttribute('data-theme') === 'light';
    renderer.toneMappingExposure = isInitiallyLight ? 1.25 : 1.15;

    // Global Ambient & Rim Lights
    const ambientLight = new THREE.AmbientLight(isInitiallyLight ? 0x4A5568 : 0x1E2530, isInitiallyLight ? 2.8 : 1.9);
    scene.add(ambientLight);

    const rimLight = new THREE.DirectionalLight(0x94A3B8, 1.4);
    rimLight.position.set(-9, -7, 6);
    scene.add(rimLight);

    // Hero Unboxed Stage Master Group (spans full viewport directly on page without box)
    const heroMasterGroup = new THREE.Group();
    scene.add(heroMasterGroup);

    function updateHeroStagePosition() {
      const isDesktop = window.innerWidth >= 980;
      const aspect = camera.aspect;
      if (isDesktop) {
        const visibleHalfWidth = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z * aspect;
        const targetX = Math.max(4.4, Math.min(6.8, visibleHalfWidth * 0.48));
        heroMasterGroup.position.set(targetX, 0.0, 0);
        // Compact, refined scale (~32% smaller for sleek, non-crowded aesthetic)
        heroMasterGroup.scale.setScalar(window.innerWidth < 1280 ? 0.48 : 0.54);
      } else {
        heroMasterGroup.position.set(0, window.innerWidth < 600 ? -1.5 : -1.1, 0);
        heroMasterGroup.scale.setScalar(window.innerWidth < 600 ? 0.38 : 0.45);
      }
    }
    updateHeroStagePosition();

    const coreLight = new THREE.PointLight(0xC87431, 4.2, 30);
    coreLight.position.set(0, 0, 0);
    heroMasterGroup.add(coreLight);

    const amberLight = new THREE.PointLight(0xE0873F, 2.8, 35);
    amberLight.position.set(9, 7, 9);
    heroMasterGroup.add(amberLight);

    // Central Concentric Gyroscope Core
    const coreMasterGroup = new THREE.Group();
    heroMasterGroup.add(coreMasterGroup);

    const coreSphereGeom = new THREE.SphereGeometry(1.25, 36, 36);
    const coreSphereMat = new THREE.MeshStandardMaterial({
      color: 0xC87431,
      emissive: 0xC87431,
      emissiveIntensity: 1.5,
      roughness: 0.1,
      metalness: 0.3
    });
    const coreSphere = new THREE.Mesh(coreSphereGeom, coreSphereMat);
    coreMasterGroup.add(coreSphere);

    // Inner Glow Orb (soft ambient luminance around the core)
    const innerGlowGeom = new THREE.SphereGeometry(1.8, 24, 24);
    const innerGlowMat = new THREE.MeshBasicMaterial({
      color: 0xE0873F,
      transparent: true,
      opacity: 0.06
    });
    const innerGlow = new THREE.Mesh(innerGlowGeom, innerGlowMat);
    coreMasterGroup.add(innerGlow);

    // Secondary Cyan Accent Light for visual depth
    const cyanAccentLight = new THREE.PointLight(0x38BDF8, 1.6, 25);
    cyanAccentLight.position.set(-6, -4, 8);
    heroMasterGroup.add(cyanAccentLight);

    const gyroGroup = new THREE.Group();
    coreMasterGroup.add(gyroGroup);

    const gyroMatCopper = new THREE.MeshStandardMaterial({ color: 0xC87431, roughness: 0.2, metalness: 0.95 });
    const gyroMatAmber = new THREE.MeshStandardMaterial({ color: 0xE0873F, roughness: 0.25, metalness: 0.9 });
    const gyroMatSlate = new THREE.MeshStandardMaterial({ color: 0x1E2530, roughness: 0.3, metalness: 0.85 });

    const gyroRing1 = new THREE.Mesh(new THREE.TorusGeometry(1.65, 0.035, 16, 64), gyroMatCopper);
    const gyroRing2 = new THREE.Mesh(new THREE.TorusGeometry(1.95, 0.03, 16, 64), gyroMatAmber);
    const gyroRing3 = new THREE.Mesh(new THREE.TorusGeometry(2.3, 0.025, 16, 64), gyroMatSlate);

    gyroRing1.rotation.x = Math.PI / 4;
    gyroRing2.rotation.y = Math.PI / 3;
    gyroRing3.rotation.z = Math.PI / 6;

    gyroGroup.add(gyroRing1);
    gyroGroup.add(gyroRing2);
    gyroGroup.add(gyroRing3);

    // Large Orbit Guides
    const orbitalPathGroup = new THREE.Group();
    heroMasterGroup.add(orbitalPathGroup);

    function createOrbitalPath(radius, tiltX, tiltY, color) {
      const curve = new THREE.EllipseCurve(0, 0, radius, radius * 0.94, 0, 2 * Math.PI, false, 0);
      const points = curve.getPoints(80);
      const geom = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.45 });
      const line = new THREE.LineLoop(geom, mat);
      line.rotation.x = tiltX;
      line.rotation.y = tiltY;
      orbitalPathGroup.add(line);
      return line;
    }

    const orbit1 = createOrbitalPath(4.3, Math.PI / 3.2, 0.22, 0xC87431);
    const orbit2 = createOrbitalPath(6.0, -Math.PI / 3.8, 0.38, 0xE0873F);
    const orbit3 = createOrbitalPath(7.6, Math.PI / 5.2, -0.28, 0x94A3B8);

    // Orbiting Tech Elements & Cyber Data Nodes
    const orbitersGroup = new THREE.Group();
    heroMasterGroup.add(orbitersGroup);

    const texHtml = createTechCanvasTexture('html');
    const texPython = createTechCanvasTexture('python');
    const texJs = createTechCanvasTexture('js');
    const texNode = createTechCanvasTexture('node');
    const texNext = createTechCanvasTexture('next');
    const texCss = createTechCanvasTexture('css');
    const texTs = createTechCanvasTexture('ts');

    // Calm, Serene, Weighted Orbiting Speeds (Fluid planetary majesty)
    const techObjects = [
      { mesh: create3DReactAtom(), name: 'react', orbitRadius: 4.3, speed: 0.0018, elevation: 0.2 },
      { mesh: create3DTechToken(texJs, 0xF7DF1E), name: 'js', orbitRadius: 4.3, speed: 0.0018, elevation: -0.3 },
      { mesh: create3DTechToken(texHtml, 0xE44D26), name: 'html', orbitRadius: 6.0, speed: -0.0014, elevation: 0.4 },
      { mesh: create3DTechToken(texPython, 0x3776AB), name: 'python', orbitRadius: 6.0, speed: -0.0014, elevation: -0.5 },
      { mesh: create3DTechToken(texNode, 0x339933), name: 'node', orbitRadius: 6.0, speed: -0.0014, elevation: 0.2 },
      { mesh: create3DTechToken(texNext, 0xC87431), name: 'next', orbitRadius: 7.6, speed: 0.0011, elevation: -0.3 },
      { mesh: create3DTechToken(texCss, 0x1572B6), name: 'css', orbitRadius: 7.6, speed: 0.0011, elevation: 0.5 },
      { mesh: create3DTechToken(texTs, 0x3178C6), name: 'ts', orbitRadius: 7.6, speed: 0.0011, elevation: -0.2 }
    ];

    const orbitGroups = { 4.3: [], 6.0: [], 7.6: [] };
    techObjects.forEach(t => orbitGroups[t.orbitRadius].push(t));

    Object.keys(orbitGroups).forEach(rad => {
      const arr = orbitGroups[rad];
      arr.forEach((item, idx) => {
        item.angle = (idx / arr.length) * Math.PI * 2 + (Math.random() * 0.2);
      });
    });

    // 9 Glowing Cyber Data Cubes
    const cyberNodes = [];
    const nodeRadii = [4.3, 6.0, 7.6];
    const nodeRimColors = [0xC87431, 0xE0873F, 0x38BDF8];

    for (let i = 0; i < 9; i++) {
      const mesh = createCyberDataNode(0.38 + (i % 3) * 0.08, nodeRimColors[i % nodeRimColors.length]);
      const orbitRad = nodeRadii[i % nodeRadii.length];
      const speed = (orbitRad === 6.0 ? -0.0014 : (orbitRad === 4.3 ? 0.0018 : 0.0011));
      const angle = (i / 9) * Math.PI * 2 + Math.PI / 4;
      const elevation = (Math.random() - 0.5) * 1.5;

      cyberNodes.push({
        mesh,
        orbitRadius: orbitRad,
        speed,
        angle,
        elevation,
        targetY: elevation,
        rotSpeedX: (Math.random() - 0.5) * 0.006,
        rotSpeedY: (Math.random() - 0.5) * 0.006
      });

      orbitersGroup.add(mesh);
    }

    const allOrbitItems = [];

    techObjects.forEach(t => {
      t.targetY = t.elevation;
      t.baseScale = 1.0;
      t.currentScale = 1.0;
      t.isHovered = false;
      t.proximity = 0;
      t.currentSpeed = t.speed;
      t.spinBonus = 0;
      t.mesh.position.set(
        Math.cos(t.angle) * t.orbitRadius,
        t.elevation - 8,
        Math.sin(t.angle) * t.orbitRadius
      );
      t.mesh.traverse(child => {
        if (child.isMesh || child.isLine) {
          child.userData.parentItem = t;
          if (child.material) {
            const mats = Array.isArray(child.material) ? child.material : [child.material];
            mats.forEach(m => {
              if (m.emissiveIntensity !== undefined) {
                m.userData.origEmissive = m.emissiveIntensity;
              }
            });
          }
        }
      });
      orbitersGroup.add(t.mesh);
      allOrbitItems.push(t);
    });

    cyberNodes.forEach(g => {
      g.targetY = g.elevation;
      g.baseScale = 1.0;
      g.currentScale = 1.0;
      g.isHovered = false;
      g.proximity = 0;
      g.currentSpeed = g.speed;
      g.spinBonus = 0;
      g.mesh.position.set(
        Math.cos(g.angle) * g.orbitRadius,
        g.elevation - 8,
        Math.sin(g.angle) * g.orbitRadius
      );
      g.mesh.traverse(child => {
        if (child.isMesh || child.isLine) {
          child.userData.parentItem = g;
          if (child.material) {
            const mats = Array.isArray(child.material) ? child.material : [child.material];
            mats.forEach(m => {
              if (m.emissiveIntensity !== undefined) {
                m.userData.origEmissive = m.emissiveIntensity;
              }
            });
          }
        }
      });
      orbitersGroup.add(g.mesh);
      allOrbitItems.push(g);
    });

    const coreItem = {
      name: 'core',
      isCore: true,
      mesh: coreSphere,
      baseScale: 1.0,
      currentScale: 1.0,
      isHovered: false,
      proximity: 0,
      spinBonus: 0
    };
    coreSphere.userData.parentItem = coreItem;

    [gyroRing1, gyroRing2, gyroRing3].forEach((ring, idx) => {
      ring.userData.parentItem = {
        name: 'gyro' + (idx + 1),
        isGyro: true,
        ringMesh: ring
      };
    });

    const raycastableMeshes = [];
    orbitersGroup.traverse(child => {
      if (child.isMesh) raycastableMeshes.push(child);
    });
    raycastableMeshes.push(coreSphere, gyroRing1, gyroRing2, gyroRing3);

    // Ambient Stardust Particles
    const starCount = 120;
    const starGeom = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const rad = 3.5 + Math.random() * 6.0;
      const ang = Math.random() * Math.PI * 2;
      const elev = (Math.random() - 0.5) * 4.0;
      starPos[i * 3] = Math.cos(ang) * rad;
      starPos[i * 3 + 1] = elev;
      starPos[i * 3 + 2] = Math.sin(ang) * rad;

      // Warm color palette: copper, amber, gold, soft cyan
      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        starColors[i * 3] = 0.88; starColors[i * 3 + 1] = 0.53; starColors[i * 3 + 2] = 0.25;
      } else if (colorChoice < 0.7) {
        starColors[i * 3] = 0.98; starColors[i * 3 + 1] = 0.75; starColors[i * 3 + 2] = 0.15;
      } else if (colorChoice < 0.85) {
        starColors[i * 3] = 0.22; starColors[i * 3 + 1] = 0.74; starColors[i * 3 + 2] = 0.97;
      } else {
        starColors[i * 3] = 0.88; starColors[i * 3 + 1] = 0.45; starColors[i * 3 + 2] = 0.18;
      }
    }

    starGeom.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeom.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
    const starMat = new THREE.PointsMaterial({
      size: 0.12,
      transparent: true,
      opacity: 0.7,
      vertexColors: true
    });
    const starPoints = new THREE.Points(starGeom, starMat);
    heroMasterGroup.add(starPoints);

    // Energy Pulse Wave Rings (expanding from core)
    const pulseRings = [];
    for (let pr = 0; pr < 3; pr++) {
      const pulseRingGeom = new THREE.RingGeometry(0.6, 0.7, 48);
      const pulseRingMat = new THREE.MeshBasicMaterial({
        color: 0xC87431,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.0
      });
      const pulseRingMesh = new THREE.Mesh(pulseRingGeom, pulseRingMat);
      pulseRingMesh.rotation.x = Math.PI / 2;
      heroMasterGroup.add(pulseRingMesh);
      pulseRings.push({
        mesh: pulseRingMesh,
        phase: pr * (Math.PI * 2 / 3),
        scale: 1.0
      });
    }

    // Nebula Cloud Particles (volumetric depth)
    const nebulaCount = 40;
    const nebulaGeom = new THREE.BufferGeometry();
    const nebulaPos = new Float32Array(nebulaCount * 3);
    for (let n = 0; n < nebulaCount; n++) {
      const r = 2.0 + Math.random() * 4.5;
      const a = Math.random() * Math.PI * 2;
      nebulaPos[n * 3] = Math.cos(a) * r;
      nebulaPos[n * 3 + 1] = (Math.random() - 0.5) * 2.5;
      nebulaPos[n * 3 + 2] = Math.sin(a) * r;
    }
    nebulaGeom.setAttribute('position', new THREE.BufferAttribute(nebulaPos, 3));
    const nebulaMat = new THREE.PointsMaterial({
      color: 0xE0873F,
      size: 0.55,
      transparent: true,
      opacity: 0.12
    });
    const nebulaPoints = new THREE.Points(nebulaGeom, nebulaMat);
    heroMasterGroup.add(nebulaPoints);

    // --- CURSOR REACTIVE ENGINE (Raycasting, Proximity, Magnetic Pull, Parallax) ---
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2(-999, -999);
    let isPointerOverCanvas = false;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseVelocity = 0;
    let lastClientX = 0;
    let lastClientY = 0;
    let currentHoveredItem = null;

    function handlePointer(clientX, clientY) {
      const rect = canvas.getBoundingClientRect();
      const dx = clientX - lastClientX;
      const dy = clientY - lastClientY;
      mouseVelocity = Math.min(2.0, Math.hypot(dx, dy) * 0.05);
      lastClientX = clientX;
      lastClientY = clientY;

      // Local canvas coordinates for Raycasting [-1, 1]
      pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;

      // Global window coordinates for 3D Camera Parallax [-1, 1]
      targetMouseX = (clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(clientY / window.innerHeight) * 2 + 1;
    }

    window.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const inside = (
        e.clientX >= rect.left && e.clientX <= rect.right &&
        e.clientY >= rect.top && e.clientY <= rect.bottom
      );
      handlePointer(e.clientX, e.clientY);
      isPointerOverCanvas = inside;
      if (!inside) {
        pointer.set(-999, -999);
        canvas.style.cursor = 'default';
      }
    }, { passive: true });

    canvas.addEventListener('pointerenter', (e) => {
      isPointerOverCanvas = true;
      handlePointer(e.clientX, e.clientY);
    });

    canvas.addEventListener('pointermove', (e) => {
      isPointerOverCanvas = true;
      handlePointer(e.clientX, e.clientY);
    });

    canvas.addEventListener('pointerleave', () => {
      isPointerOverCanvas = false;
      pointer.set(-999, -999);
      canvas.style.cursor = 'default';
    });

    // Touch support for mobile devices
    canvas.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) {
        isPointerOverCanvas = true;
        handlePointer(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    canvas.addEventListener('touchend', () => {
      isPointerOverCanvas = false;
      pointer.set(-999, -999);
      canvas.style.cursor = 'default';
    });

    // Click / Tap impulse: spawns expanding shockwave ring and spin celebration
    canvas.addEventListener('click', (e) => {
      handlePointer(e.clientX, e.clientY);

      // Trigger shockwave ring
      if (pulseRings.length > 0) {
        const ring = pulseRings[0];
        ring.scale = 1.0;
        ring.mesh.material.opacity = 0.85;
      }

      // Flash central core
      coreSphereMat.emissiveIntensity = 4.2;
      coreLight.intensity = 7.5;

      // If clicked an orbiting item, impart high-speed spin burst
      if (currentHoveredItem) {
        currentHoveredItem.spinBonus = 0.45;
      }
    });

    let introProgress = 0;
    let isVisible = true;
    let heroRafId = 0;

    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    }, { threshold: 0.05 });
    observer.observe(container);

    window.addEventListener('themechange', (e) => {
      const isLight = e.detail.theme === 'light';
      ambientLight.color.setHex(isLight ? 0x4A5568 : 0x1E2530);
      ambientLight.intensity = isLight ? 2.8 : 1.9;
      renderer.toneMappingExposure = isLight ? 1.25 : 1.15;
    });

    const clock = new THREE.Clock();

    function animate() {
      heroRafId = requestAnimationFrame(animate);
      if (!isVisible || document.hidden) return;

      const elapsed = clock.getElapsedTime();

      if (introProgress < 1) {
        introProgress += 0.010;
      }

      // Smooth mouse damping
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;
      mouseVelocity *= 0.92;

      // Raycasting for direct cursor intersection
      let hoveredItem = null;
      if (isPointerOverCanvas && !supportsReducedMotion) {
        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObjects(raycastableMeshes, false);
        if (intersects.length > 0) {
          hoveredItem = intersects[0].object.userData.parentItem || null;
        }
      }
      currentHoveredItem = hoveredItem;
      canvas.style.cursor = hoveredItem ? 'pointer' : 'default';

      // --- 1. Central Core & Inner Glow Reactions to Cursor ---
      const pulse = 1 + Math.sin(elapsed * 1.0) * 0.035;
      const glowPulse = 1 + Math.sin(elapsed * 0.8 + 0.5) * 0.06;
      const coreWorldPos = new THREE.Vector3();
      coreSphere.getWorldPosition(coreWorldPos);
      const coreScreenPos = coreWorldPos.project(camera);
      const coreScreenDist = Math.hypot(pointer.x - coreScreenPos.x, pointer.y - coreScreenPos.y);
      const isCoreHovered = hoveredItem && hoveredItem.isCore;
      const coreProximity = isPointerOverCanvas ? Math.max(0, 1 - coreScreenDist / 0.65) : 0;

      const targetCoreScale = isCoreHovered
        ? 1.45
        : (pulse * (1.0 + coreProximity * 0.28));
      coreItem.currentScale += (targetCoreScale - coreItem.currentScale) * 0.12;
      coreSphere.scale.set(coreItem.currentScale, coreItem.currentScale, coreItem.currentScale);

      const targetEmissive = isCoreHovered
        ? 4.0
        : (1.5 + coreProximity * 1.8 + Math.sin(elapsed * 2.0) * 0.25);
      coreSphereMat.emissiveIntensity += (targetEmissive - coreSphereMat.emissiveIntensity) * 0.1;
      coreLight.intensity += ((isCoreHovered ? 7.2 : (4.2 + coreProximity * 3.0)) - coreLight.intensity) * 0.1;

      const targetGlowScale = glowPulse * (1.0 + coreProximity * 0.35);
      innerGlow.scale.set(targetGlowScale, targetGlowScale, targetGlowScale);
      innerGlowMat.opacity = isCoreHovered ? 0.22 : (0.04 + coreProximity * 0.10);

      // --- 2. Concentric Gyroscope Rings Reactions to Cursor ---
      gyroGroup.rotation.y += ((mouseX * 0.75) - gyroGroup.rotation.y) * 0.08;
      gyroGroup.rotation.x += ((-mouseY * 0.55) - gyroGroup.rotation.x) * 0.08;

      const dynamicRingSpd = 0.0025 + mouseVelocity * 0.012 + (Math.hypot(mouseX, mouseY) * 0.005);
      gyroRing1.rotation.x += dynamicRingSpd;
      gyroRing1.rotation.y += dynamicRingSpd * 0.8 + mouseX * 0.008;
      gyroRing2.rotation.y -= dynamicRingSpd * 0.9;
      gyroRing2.rotation.z += dynamicRingSpd * 0.7 + (-mouseY * 0.008);
      gyroRing3.rotation.z += dynamicRingSpd * 0.75;
      gyroRing3.rotation.x -= dynamicRingSpd * 0.6 + mouseX * 0.006;

      // --- 3. Large Orbit Guides Reactions to Cursor ---
      orbitalPathGroup.rotation.y += ((mouseX * 0.35) - orbitalPathGroup.rotation.y) * 0.05;
      orbitalPathGroup.rotation.x += ((-mouseY * 0.28) - orbitalPathGroup.rotation.x) * 0.05;
      orbit1.rotation.z += 0.0006 + (mouseX * 0.001);
      orbit2.rotation.z -= 0.0007 + (mouseY * 0.001);
      orbit3.rotation.z += 0.0005 + (mouseX * 0.001);

      // --- 4. Stardust & Nebula Particle Reactions to Cursor ---
      starPoints.rotation.y += 0.0004 + (mouseX * 0.002);
      starPoints.rotation.x += ((-mouseY * 0.14) - starPoints.rotation.x) * 0.04;
      nebulaPoints.rotation.y -= 0.0003 + (mouseY * 0.002);
      nebulaPoints.rotation.x += ((mouseX * 0.12) - nebulaPoints.rotation.x) * 0.04;

      // --- 5. Animate Energy Pulse Rings ---
      pulseRings.forEach(pr => {
        pr.scale += 0.012;
        const lifecycle = (pr.scale - 1.0) / 8.0;
        if (lifecycle < 1.0) {
          pr.mesh.scale.set(pr.scale, pr.scale, 1);
          pr.mesh.material.opacity = Math.sin(lifecycle * Math.PI) * 0.35;
        } else {
          pr.scale = 1.0;
          pr.mesh.scale.set(1, 1, 1);
          pr.mesh.material.opacity = 0;
        }
      });
      if (Math.floor(elapsed * 0.35) % 3 === 0 && pulseRings[0].scale > 7) pulseRings[0].scale = 1.0;
      if (Math.floor(elapsed * 0.35) % 3 === 1 && pulseRings[1].scale > 7) pulseRings[1].scale = 1.0;
      if (Math.floor(elapsed * 0.35) % 3 === 2 && pulseRings[2].scale > 7) pulseRings[2].scale = 1.0;

      // --- 6. All Orbiting Tech Tokens & Cyber Cubes Reactions ---
      allOrbitItems.forEach(item => {
        const isHovered = (hoveredItem === item);
        item.isHovered = isHovered;

        // Calculate 2D screen proximity to cursor
        const itemWorldPos = new THREE.Vector3();
        item.mesh.getWorldPosition(itemWorldPos);
        const screenPos = itemWorldPos.project(camera);
        const screenDist = Math.hypot(pointer.x - screenPos.x, pointer.y - screenPos.y);
        const proximity = isPointerOverCanvas ? Math.max(0, 1 - screenDist / 0.55) : 0;
        item.proximity = proximity;

        // Slow down orbit when hovered so the user can easily observe the emblem
        const targetSpeed = isHovered
          ? (item.speed * 0.1)
          : (item.speed * (1.0 + proximity * 0.5));
        item.currentSpeed += (targetSpeed - item.currentSpeed) * 0.1;
        item.angle += item.currentSpeed;

        // Scale: increases significantly on hover, gently on proximity
        const targetScale = isHovered
          ? (item.baseScale * 1.48)
          : (item.baseScale * (1.0 + proximity * 0.32));
        item.currentScale += (targetScale - item.currentScale) * 0.12;
        item.mesh.scale.set(item.currentScale, item.currentScale, item.currentScale);

        // Position along orbit with dynamic z-lift when hovered or near cursor
        const currentY = THREE.MathUtils.lerp(item.elevation - 8, item.targetY, Math.min(introProgress, 1));
        const liftZ = isHovered ? 1.8 : (proximity * 0.9);
        item.mesh.position.x = Math.cos(item.angle) * item.orbitRadius;
        item.mesh.position.z = Math.sin(item.angle) * item.orbitRadius + liftZ;
        item.mesh.position.y = currentY + Math.sin(elapsed * 0.8 + item.angle) * 0.2 + (proximity * 0.3);

        // Rotation & Orientation Behavior
        if (isHovered) {
          // BILLBOARD: Turn to face camera so user can inspect the 3D logo crystal-clear
          const targetQuat = camera.quaternion;
          item.mesh.quaternion.slerp(targetQuat, 0.14);
        } else {
          // Normal rotation with dynamic cursor leaning
          if (item.name === 'react') {
            const rotBoost = 1.0 + proximity * 2.5;
            item.mesh.rotation.y += 0.004 * rotBoost;
            item.mesh.rotation.x = Math.sin(elapsed * 0.4) * 0.2;
            if (item.mesh.userData.rings) {
              item.mesh.userData.rings[0].rotation.z += 0.004 * rotBoost;
              item.mesh.userData.rings[1].rotation.z += 0.004 * rotBoost;
              item.mesh.userData.rings[2].rotation.z += 0.004 * rotBoost;
            }
          } else if (item.name) {
            item.mesh.rotation.y = item.angle + Math.PI / 2 + Math.sin(elapsed * 0.5) * 0.12;
            item.mesh.rotation.x = Math.sin(elapsed * 0.4 + item.angle) * 0.1;
          } else {
            // Cyber cube
            item.mesh.rotation.x += item.rotSpeedX * (1.0 + proximity * 3.0);
            item.mesh.rotation.y += item.rotSpeedY * (1.0 + proximity * 3.0);
          }

          // Magnetic tilt towards cursor
          if (proximity > 0.05) {
            const tiltDirX = (pointer.y - screenPos.y) * proximity * 0.6;
            const tiltDirY = (pointer.x - screenPos.x) * proximity * 0.6;
            item.mesh.rotation.x += tiltDirX * 0.08;
            item.mesh.rotation.y += tiltDirY * 0.08;
          }
        }

        // Apply interactive spin bonus from click
        if (item.spinBonus > 0.001) {
          item.mesh.rotation.y += item.spinBonus;
          item.mesh.rotation.x += item.spinBonus * 0.5;
          item.spinBonus *= 0.91;
        }

        // Dynamic emissive boost on hover & proximity
        item.mesh.traverse(child => {
          if (child.isMesh && child.material) {
            const mats = Array.isArray(child.material) ? child.material : [child.material];
            mats.forEach(m => {
              if (m.emissive) {
                const baseEmissive = m.userData.origEmissive !== undefined ? m.userData.origEmissive : 0.2;
                const boost = isHovered ? 2.5 : (baseEmissive + proximity * 1.2);
                m.emissiveIntensity = boost;
              }
            });
          }
        });
      });

      // --- 7. Camera Parallax & Group Perspective ---
      if (!supportsReducedMotion) {
        const targetCameraX = mouseX * 2.8;
        const targetCameraY = mouseY * 2.2;
        camera.position.x += (targetCameraX - camera.position.x) * 0.04;
        camera.position.y += (targetCameraY - camera.position.y) * 0.04;
        camera.lookAt(0, 0, 0);

        coreMasterGroup.rotation.y += ((mouseX * 0.45) - coreMasterGroup.rotation.y) * 0.05;
        coreMasterGroup.rotation.x += ((mouseY * 0.32) - coreMasterGroup.rotation.x) * 0.05;
        orbitersGroup.rotation.y += ((mouseX * 0.25) - orbitersGroup.rotation.y) * 0.04;
        orbitersGroup.rotation.x += ((-mouseY * 0.18) - orbitersGroup.rotation.x) * 0.04;
      }

      renderer.render(scene, camera);
    }

    if (supportsReducedMotion) {
      try { renderer.render(scene, camera); } catch (e) { /* still frame best-effort */ }
    } else {
      animate();
    }

    window.addEventListener('resize', () => {
      const w = Math.max(1, container.clientWidth || 1);
      const h = Math.max(1, container.clientHeight || 1);
      camera.aspect = w / h;
      camera.position.z = window.innerWidth < 768 ? 19 : 15;
      camera.updateProjectionMatrix();
      updateHeroStagePosition();
      renderer.setSize(w, h);
      renderer.setPixelRatio(getOptimizedPixelRatio());
    });

    window.addEventListener('pagehide', () => {
      if (heroRafId) cancelAnimationFrame(heroRafId);
    });
  }

  /* ==========================================================================
     2. SCROLL-DRIVEN 3D STORY SCENE (TECH HARDWARE & WEB DEV WORKSTATION)
     ========================================================================== */
  function initStoryScene() {
    const container = document.getElementById('story-3d-section');
    const scrollContainer = document.getElementById('story') || container;
    const canvas = document.getElementById('story-canvas');
    if (!container || !canvas) return;

    const width = canvas.parentElement.clientWidth;
    const height = canvas.parentElement.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 16);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    const isInitiallyLight = document.documentElement.getAttribute('data-theme') === 'light';

    // Premium Crisp Lighting
    const ambientLight = new THREE.AmbientLight(isInitiallyLight ? 0x4A5568 : 0x1E2530, isInitiallyLight ? 3.2 : 2.0);
    scene.add(ambientLight);

    const keyDirLight = new THREE.DirectionalLight(0xFFFFFF, isInitiallyLight ? 2.8 : 1.8);
    keyDirLight.position.set(10, 14, 12);
    scene.add(keyDirLight);

    const rimDirLight = new THREE.DirectionalLight(0xC87431, isInitiallyLight ? 2.2 : 2.6);
    rimDirLight.position.set(-10, -6, 8);
    scene.add(rimDirLight);

    const cyanRimLight = new THREE.DirectionalLight(0x38BDF8, 1.4);
    cyanRimLight.position.set(6, -8, -6);
    scene.add(cyanRimLight);

    const accentPointLight = new THREE.PointLight(0xC87431, 3.8, 30);
    accentPointLight.position.set(0, 2, 8);
    scene.add(accentPointLight);

    // Master Tech Workbench Group
    const techWorkbenchGroup = new THREE.Group();
    scene.add(techWorkbenchGroup);

    // Generous right-column framing on desktop so it NEVER overlaps the left card!
    function updateWorkbenchPosition() {
      const isDesktop = window.innerWidth >= 900;
      techWorkbenchGroup.position.x = isDesktop ? 4.3 : 0;
      techWorkbenchGroup.position.y = isDesktop ? 0 : 1.5;
    }
    updateWorkbenchPosition();

    // Dedicated Stage 3D Element Groups (Directly synchronized with the 4 cards on the left)
    const stage0Group = new THREE.Group(); // Stage 01 • Discovery: Discover
    const stage1Group = new THREE.Group(); // Stage 02 • Architecture: Design
    const stage2Group = new THREE.Group(); // Stage 03 • Engineering: Develop & test
    const stage3Group = new THREE.Group(); // Stage 04 • Scale: Launch & grow

    techWorkbenchGroup.add(stage0Group);
    techWorkbenchGroup.add(stage1Group);
    techWorkbenchGroup.add(stage2Group);
    techWorkbenchGroup.add(stage3Group);

    // =========================================================================
    // STAGE 0: DISCOVER (Laptop + Wireless Mouse + Holographic Ideation Discovery Radar)
    // =========================================================================
    const laptop = create3DLaptopMesh();
    laptop.position.set(0, -0.35, 0);
    laptop.rotation.set(0.38, -0.28, 0.05);
    laptop.scale.set(1.22, 1.22, 1.22);
    stage0Group.add(laptop);

    const mouse = create3DTechMouseMesh();
    mouse.position.set(2.0, -0.75, 0.45);
    mouse.rotation.set(0.12, -0.22, 0);
    mouse.scale.set(1.05, 1.05, 1.05);
    stage0Group.add(mouse);

    // Holographic Discovery & Ideation Radar Ring
    const discoveryHoloGroup = new THREE.Group();
    discoveryHoloGroup.position.set(0, 1.35, -0.2);
    discoveryHoloGroup.rotation.set(1.05, 0.12, 0);

    const outerRadarGeom = new THREE.TorusGeometry(1.65, 0.016, 12, 64);
    const outerRadarMat = new THREE.MeshBasicMaterial({ color: 0xC87431, transparent: true, opacity: 0.65 });
    const outerRadar = new THREE.Mesh(outerRadarGeom, outerRadarMat);
    discoveryHoloGroup.add(outerRadar);

    const innerRadarGeom = new THREE.TorusGeometry(1.15, 0.012, 12, 48);
    const innerRadarMat = new THREE.MeshBasicMaterial({ color: 0xFBBF24, transparent: true, opacity: 0.5 });
    const innerRadar = new THREE.Mesh(innerRadarGeom, innerRadarMat);
    discoveryHoloGroup.add(innerRadar);

    // Radar Scanning Needle
    const needleGeom = new THREE.CylinderGeometry(0.015, 0.015, 1.6, 8);
    const needleMat = new THREE.MeshBasicMaterial({ color: 0xE0873F, transparent: true, opacity: 0.8 });
    const needle = new THREE.Mesh(needleGeom, needleMat);
    needle.position.y = 0.8;
    const sweepArm = new THREE.Group();
    sweepArm.add(needle);
    discoveryHoloGroup.add(sweepArm);

    // 4 Floating Discovery Insight Beads (Research, Scope, Architecture, Strategy)
    const discoveryNodes = [];
    const nodeColors = [0xE0873F, 0x38BDF8, 0x10B981, 0xFBBF24];
    for (let i = 0; i < 4; i++) {
      const nodeGeom = new THREE.SphereGeometry(0.075, 12, 12);
      const nodeMat = new THREE.MeshBasicMaterial({ color: nodeColors[i] });
      const nodeMesh = new THREE.Mesh(nodeGeom, nodeMat);
      discoveryHoloGroup.add(nodeMesh);
      discoveryNodes.push({
        mesh: nodeMesh,
        angle: (i * Math.PI) / 2,
        radius: 1.15 + (i % 2) * 0.5,
        speed: 0.008 + i * 0.003
      });
    }
    stage0Group.add(discoveryHoloGroup);

    // =========================================================================
    // STAGE 1: DESIGN (Studio Desktop Monitor + Blueprint Floor Grid + Spatial UI Tokens)
    // =========================================================================
    const desktop = create3DDesktopMonitorMesh();
    desktop.position.set(0, 0.12, 0);
    desktop.rotation.set(0.05, -0.06, 0);
    desktop.scale.set(1.05, 1.05, 1.05);
    stage1Group.add(desktop);

    // Architectural 3D Blueprint Floor Grid
    const gridGeom = new THREE.BufferGeometry();
    const gridPoints = [];
    const gridSize = 10;
    const gridStep = 1.0;
    for (let x = -gridSize / 2; x <= gridSize / 2; x += gridStep) {
      gridPoints.push(new THREE.Vector3(x, 0, -gridSize / 2), new THREE.Vector3(x, 0, gridSize / 2));
    }
    for (let z = -gridSize / 2; z <= gridSize / 2; z += gridStep) {
      gridPoints.push(new THREE.Vector3(-gridSize / 2, 0, z), new THREE.Vector3(gridSize / 2, 0, z));
    }
    gridGeom.setFromPoints(gridPoints);
    const gridMat = new THREE.LineBasicMaterial({ color: 0xC87431, transparent: true, opacity: 0.45 });
    const blueprintGrid = new THREE.LineSegments(gridGeom, gridMat);
    blueprintGrid.position.y = -1.65;
    stage1Group.add(blueprintGrid);

    // Floating 3D Spatial UI Token Cards & Wireframe Hierarchy Blocks
    const spatialCardsGroup = new THREE.Group();

    // Canvas 1: UI Component Spec
    const card1Canvas = document.createElement('canvas');
    card1Canvas.width = 280;
    card1Canvas.height = 180;
    const c1 = card1Canvas.getContext('2d');
    c1.fillStyle = '#090E17';
    c1.fillRect(0, 0, 280, 180);
    c1.fillStyle = '#C87431';
    c1.fillRect(16, 14, 8, 8);
    c1.fillStyle = '#FFFFFF';
    c1.font = 'bold 12px monospace';
    c1.fillText('UI Component Spec', 32, 23);
    c1.fillStyle = '#141E2C';
    c1.fillRect(16, 38, 248, 52);
    c1.strokeStyle = '#C87431';
    c1.lineWidth = 1.5;
    c1.strokeRect(16, 38, 248, 52);
    c1.fillStyle = '#E0873F';
    c1.font = '11px monospace';
    c1.fillText('<Button variant="primary" />', 26, 68);
    c1.fillStyle = '#38BDF8';
    c1.fillRect(16, 102, 118, 30);
    c1.fillStyle = '#090E17';
    c1.font = 'bold 10px monospace';
    c1.fillText('Border: 1px copper', 22, 121);
    c1.fillStyle = '#10B981';
    c1.fillRect(146, 102, 118, 30);
    c1.fillStyle = '#090E17';
    c1.fillText('Radius: 16px', 154, 121);

    // Canvas 2: Color Tokens Swatch Palette
    const card2Canvas = document.createElement('canvas');
    card2Canvas.width = 180;
    card2Canvas.height = 180;
    const c2 = card2Canvas.getContext('2d');
    c2.fillStyle = '#090E17';
    c2.fillRect(0, 0, 180, 180);
    c2.fillStyle = '#38BDF8';
    c2.font = 'bold 11px monospace';
    c2.fillText('Color Tokens', 16, 22);
    const swatches = [
      { c: '#C87431', n: 'Copper' },
      { c: '#10B981', n: 'Emerald' },
      { c: '#38BDF8', n: 'Cyan' },
      { c: '#FBBF24', n: 'Amber' }
    ];
    swatches.forEach((sw, i) => {
      const sx = 16 + (i % 2) * 80;
      const sy = 36 + Math.floor(i / 2) * 64;
      c2.fillStyle = sw.c;
      c2.fillRect(sx, sy, 68, 38);
      c2.fillStyle = '#94A3B8';
      c2.font = '9px monospace';
      c2.fillText(sw.n, sx, sy + 52);
    });

    // Canvas 3: Spatial 12-Col Responsive Grid Hierarchy
    const card3Canvas = document.createElement('canvas');
    card3Canvas.width = 290;
    card3Canvas.height = 130;
    const c3 = card3Canvas.getContext('2d');
    c3.fillStyle = '#090E17';
    c3.fillRect(0, 0, 290, 130);
    c3.fillStyle = '#E0873F';
    c3.font = 'bold 11px monospace';
    c3.fillText('Spatial 12-Col Grid Hierarchy', 16, 22);
    for (let col = 0; col < 6; col++) {
      c3.fillStyle = '#141E2D';
      c3.fillRect(16 + col * 44, 36, 36, 76);
      c3.strokeStyle = 'rgba(200, 116, 49, 0.45)';
      c3.lineWidth = 1;
      c3.strokeRect(16 + col * 44, 36, 36, 76);
    }

    const tokenWireMat = new THREE.LineBasicMaterial({ color: 0xC87431, transparent: true, opacity: 0.85 });
    const cyanWireMat = new THREE.LineBasicMaterial({ color: 0x38BDF8, transparent: true, opacity: 0.75 });

    function createTexturedUiCard(canvas, w, h, wireMat) {
      const card = new THREE.Group();
      const geom = new THREE.BoxGeometry(w, h, 0.05);
      const tex = new THREE.CanvasTexture(canvas);
      const faceMat = new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.25,
        metalness: 0.85,
        emissive: 0x111927,
        emissiveIntensity: 0.4
      });
      const mesh = new THREE.Mesh(geom, faceMat);
      card.add(mesh);
      const wire = new THREE.LineSegments(new THREE.EdgesGeometry(geom), wireMat || tokenWireMat);
      card.add(wire);
      return card;
    }

    const token1 = createTexturedUiCard(card1Canvas, 1.4, 0.9, tokenWireMat);
    token1.position.set(2.25, 1.35, 0.45);
    token1.rotation.set(0.08, -0.22, 0.05);
    spatialCardsGroup.add(token1);

    const token2 = createTexturedUiCard(card2Canvas, 0.9, 0.9, cyanWireMat);
    token2.position.set(-2.2, 0.85, 0.55);
    token2.rotation.set(0.12, 0.25, -0.05);
    spatialCardsGroup.add(token2);

    const token3 = createTexturedUiCard(card3Canvas, 1.45, 0.65, tokenWireMat);
    token3.position.set(-2.0, -0.95, 0.65);
    token3.rotation.set(0.05, 0.18, 0.02);
    spatialCardsGroup.add(token3);

    const guideGeom = new THREE.BufferGeometry();
    const guidePoints = [
      new THREE.Vector3(2.25, 1.35, 0.45), new THREE.Vector3(1.4, 0.8, 0.1),
      new THREE.Vector3(-2.2, 0.85, 0.55), new THREE.Vector3(-1.4, 0.4, 0.1),
      new THREE.Vector3(-2.0, -0.95, 0.65), new THREE.Vector3(-1.4, -0.6, 0.1)
    ];
    guideGeom.setFromPoints(guidePoints);
    const guideLines = new THREE.LineSegments(guideGeom, new THREE.LineBasicMaterial({ color: 0xE0873F, transparent: true, opacity: 0.35 }));
    spatialCardsGroup.add(guideLines);

    stage1Group.add(spatialCardsGroup);
    // =========================================================================
    // STAGE 2: DEVELOP & TEST (< / > Code Brackets + CPU + GPU + React Atom)
    // =========================================================================
    const codeTag = create3DCodeTagMesh();
    codeTag.position.set(0, 0.95, 0.45);
    codeTag.scale.set(1.45, 1.45, 1.45);
    stage2Group.add(codeTag);

    const cpu = create3DCpuMesh();
    cpu.position.set(-1.48, -0.85, 0.25);
    cpu.rotation.set(0.35, -0.22, 0);
    cpu.scale.set(0.95, 0.95, 0.95);
    stage2Group.add(cpu);

    const gpu = create3DGpuMesh();
    gpu.position.set(1.48, -0.85, 0.25);
    gpu.rotation.set(0.22, 0.25, 0);
    gpu.scale.set(0.9, 0.9, 0.9);
    stage2Group.add(gpu);

    const reactAtom = create3DReactAtom();
    reactAtom.position.set(0, -0.95, -0.4);
    reactAtom.scale.set(1.15, 1.15, 1.15);
    stage2Group.add(reactAtom);

    // Glowing energy bus lines connecting CPU and GPU up to the Code Tag < / >
    const busLineGeom = new THREE.BufferGeometry();
    const busPoints = [
      new THREE.Vector3(-1.48, -0.4, 0.25), new THREE.Vector3(-0.6, 0.5, 0.4),
      new THREE.Vector3(1.48, -0.4, 0.25), new THREE.Vector3(0.6, 0.5, 0.4),
      new THREE.Vector3(0, -0.5, -0.4), new THREE.Vector3(0, 0.3, 0.4)
    ];
    busLineGeom.setFromPoints(busPoints);
    const busLineMat = new THREE.LineBasicMaterial({ color: 0xFBBF24, transparent: true, opacity: 0.65 });
    const busLineMesh = new THREE.LineSegments(busLineGeom, busLineMat);
    stage2Group.add(busLineMesh);

    // =========================================================================
    // STAGE 3: LAUNCH & GROW (Server Blade + Database + Orbit Ring + Launch Rays)
    // =========================================================================
    const serverBlade = create3DServerBladeMesh();
    serverBlade.position.set(-0.95, 0.05, 0.25);
    serverBlade.rotation.set(0.12, 0.22, 0);
    serverBlade.scale.set(1.45, 1.45, 1.45);
    stage3Group.add(serverBlade);

    const database = create3DDatabaseMesh();
    database.position.set(1.05, -0.05, 0.25);
    database.rotation.set(0.18, -0.22, 0);
    database.scale.set(1.4, 1.4, 1.4);
    stage3Group.add(database);

    // Global Orbital Constellation Ring encircling the cloud infrastructure
    const orbitGroup = new THREE.Group();
    const orbitRingGeom = new THREE.TorusGeometry(2.45, 0.022, 16, 64);
    const orbitRingMat = new THREE.MeshBasicMaterial({ color: 0xC87431, transparent: true, opacity: 0.65 });
    const orbitRing = new THREE.Mesh(orbitRingGeom, orbitRingMat);
    orbitGroup.add(orbitRing);
    orbitGroup.rotation.set(1.15, 0.35, 0);

    // 3 Orbiting Global Satellite Beacons
    const satellites = [];
    const satColors = [0x38BDF8, 0xFBBF24, 0x10B981];
    for (let s = 0; s < 3; s++) {
      const satMesh = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), new THREE.MeshBasicMaterial({ color: satColors[s] }));
      orbitGroup.add(satMesh);
      satellites.push({
        mesh: satMesh,
        angle: (s * Math.PI * 2) / 3,
        speed: 0.009 + s * 0.003
      });
    }
    stage3Group.add(orbitGroup);

    // Ascending Photon Launch Beams (Continuous upward streaming launch pulses)
    const launchRaysCount = 14;
    const launchRays = [];
    const rayGeom = new THREE.CylinderGeometry(0.015, 0.015, 0.7, 8);
    const rayMat = new THREE.MeshBasicMaterial({ color: 0x38BDF8, transparent: true, opacity: 0.85 });
    for (let r = 0; r < launchRaysCount; r++) {
      const rayMesh = new THREE.Mesh(rayGeom, rayMat);
      const rx = (Math.random() - 0.5) * 2.8;
      const rz = (Math.random() - 0.5) * 1.6;
      rayMesh.position.set(rx, -2.0 + Math.random() * 4.5, rz);
      stage3Group.add(rayMesh);
      launchRays.push({
        mesh: rayMesh,
        speed: 0.035 + Math.random() * 0.035
      });
    }

    // =========================================================================
    // SHARED AMBIENT PARTICLES & ARRAY SETUP
    // =========================================================================
    const starCount = 45;
    const starGeom = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    for (let s = 0; s < starCount; s++) {
      const r = 2.8 + Math.random() * 4.8;
      const theta = Math.random() * Math.PI * 2;
      starPos[s * 3] = Math.cos(theta) * r;
      starPos[s * 3 + 1] = (Math.random() - 0.5) * 5.5;
      starPos[s * 3 + 2] = Math.sin(theta) * r;
    }
    starGeom.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xE0873F,
      size: 0.08,
      transparent: true,
      opacity: 0.65
    });
    const stardust = new THREE.Points(starGeom, starMat);
    techWorkbenchGroup.add(stardust);

    const stageGroups = [stage0Group, stage1Group, stage2Group, stage3Group];

    // Initial state: hide inactive stages
    stageGroups.forEach((grp, idx) => {
      if (idx !== 0) {
        grp.visible = false;
        grp.scale.set(0.001, 0.001, 0.001);
      }
    });

    // Mouse Parallax with Soft Dampening
    let mouseX = 0;
    let mouseY = 0;
    window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    }, { passive: true });

    let scrollProgress = 0;
    let targetProgress = 0;
    let isStoryVisible = true;

    const storyObserver = new IntersectionObserver((entries) => {
      isStoryVisible = entries[0].isIntersecting;
    }, { threshold: 0.01 });
    storyObserver.observe(scrollContainer);

    window.addEventListener('themechange', (e) => {
      const isLight = e.detail.theme === 'light';
      ambientLight.color.setHex(isLight ? 0x4A5568 : 0x1E2530);
      ambientLight.intensity = isLight ? 3.2 : 2.0;
      keyDirLight.intensity = isLight ? 2.8 : 1.8;
      rimDirLight.intensity = isLight ? 2.2 : 2.6;
    });

    function updateScrollProgress() {
      const rect = scrollContainer.getBoundingClientRect();
      const totalScrollable = scrollContainer.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollable));
      targetProgress = progress;

      const stageIndex = Math.min(3, Math.floor(progress * 4));
      const cards = document.querySelectorAll('.story-card');
      cards.forEach((card, idx) => {
        if (idx === stageIndex) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

    const storyClock = new THREE.Clock();

    function animateStory() {
      requestAnimationFrame(animateStory);
      if (!isStoryVisible) return;

      const elapsed = storyClock.getElapsedTime();

      // Silky smooth scroll lerp
      scrollProgress += (targetProgress - scrollProgress) * 0.15;

      // Calculate seamless stage weights matching the 4 left cards exactly:
      // Card 0: Discover (0.00 - 0.25)
      // Card 1: Design (0.25 - 0.50)
      // Card 2: Develop & test (0.50 - 0.75)
      // Card 3: Launch & grow (0.75 - 1.00)
      const weights = [0, 0, 0, 0];
      const hw = 0.06;
      const t01 = 0.25;
      const t12 = 0.50;
      const t23 = 0.75;

      if (scrollProgress < t01 - hw) {
        weights[0] = 1;
      } else if (scrollProgress <= t01 + hw) {
        const u = (scrollProgress - (t01 - hw)) / (2 * hw);
        const s = u * u * (3 - 2 * u);
        weights[0] = 1 - s;
        weights[1] = s;
      } else if (scrollProgress < t12 - hw) {
        weights[1] = 1;
      } else if (scrollProgress <= t12 + hw) {
        const u = (scrollProgress - (t12 - hw)) / (2 * hw);
        const s = u * u * (3 - 2 * u);
        weights[1] = 1 - s;
        weights[2] = s;
      } else if (scrollProgress < t23 - hw) {
        weights[2] = 1;
      } else if (scrollProgress <= t23 + hw) {
        const u = (scrollProgress - (t23 - hw)) / (2 * hw);
        const s = u * u * (3 - 2 * u);
        weights[2] = 1 - s;
        weights[3] = s;
      } else {
        weights[3] = 1;
      }

      // Apply smooth transform to each stage group
      for (let i = 0; i < 4; i++) {
        const w = weights[i];
        const grp = stageGroups[i];
        if (w <= 0.005) {
          grp.visible = false;
          grp.scale.set(0.001, 0.001, 0.001);
        } else {
          grp.visible = true;
          const scaleVal = 0.35 + 0.65 * w;
          grp.scale.set(scaleVal, scaleVal, scaleVal);
          grp.position.z = -2.5 * (1 - w);
          grp.position.y = (1 - w) * (i > 0 ? -0.4 : 0.4);
        }
      }

      // Master cursor reaction with soft dampening
      techWorkbenchGroup.rotation.y = mouseX * 0.16;
      techWorkbenchGroup.rotation.x = mouseY * 0.10;

      // --- Internal Interactive Animations ---

      // Stage 0: Discover
      if (weights[0] > 0.01) {
        if (mouse.userData.wheel) {
          mouse.userData.wheel.rotation.x += 0.004;
        }
        sweepArm.rotation.z += 0.018;
        discoveryNodes.forEach(node => {
          node.angle += node.speed;
          node.mesh.position.set(Math.cos(node.angle) * node.radius, Math.sin(node.angle) * node.radius, 0);
        });
        laptop.position.y = -0.45 + Math.sin(elapsed * 0.8) * 0.025;
      }

      // Stage 1: Design
      if (weights[1] > 0.01) {
        token1.position.y = 1.35 + Math.sin(elapsed * 1.0 + 0) * 0.04;
        token2.position.y = 0.85 + Math.sin(elapsed * 1.0 + 1.8) * 0.04;
        token3.position.y = -0.95 + Math.sin(elapsed * 1.0 + 3.2) * 0.04;
        token1.rotation.y = -0.22 + Math.sin(elapsed * 0.6) * 0.05;
        token2.rotation.y = 0.25 + Math.sin(elapsed * 0.5) * 0.05;
        desktop.position.y = 0.12 + Math.sin(elapsed * 0.75) * 0.02;
      }

      // Stage 2: Develop & test
      if (weights[2] > 0.01) {
        codeTag.rotation.y = Math.sin(elapsed * 0.7) * 0.12 + mouseX * 0.08;
        codeTag.rotation.z = Math.sin(elapsed * 0.5) * 0.04;
        codeTag.position.y = 0.95 + Math.sin(elapsed * 1.1) * 0.04;

        if (gpu.userData.fans) {
          gpu.userData.fans.forEach(f => {
            f.rotation.z += 0.038;
          });
        }
        if (cpu.userData.coreBead) {
          const pulse = 1 + Math.sin(elapsed * 2.2) * 0.06;
          cpu.userData.coreBead.scale.set(pulse, pulse, pulse);
        }
        if (cpu.userData.ring) {
          cpu.userData.ring.rotation.z += 0.003;
        }
        if (reactAtom.userData.rings) {
          reactAtom.userData.rings.forEach(r => {
            r.rotation.z += 0.006;
          });
          reactAtom.rotation.y += 0.003;
        }
      }

      // Stage 3: Launch & grow
      if (weights[3] > 0.01) {
        database.rotation.y += 0.004;
        satellites.forEach(sat => {
          sat.angle += sat.speed;
          sat.mesh.position.set(Math.cos(sat.angle) * 2.45, Math.sin(sat.angle) * 2.45, 0);
        });
        launchRays.forEach(ray => {
          ray.mesh.position.y += ray.speed;
          if (ray.mesh.position.y > 3.6) {
            ray.mesh.position.y = -2.2;
          }
        });
        serverBlade.position.y = 0.05 + Math.sin(elapsed * 0.9) * 0.025;
      }

      // Stardust gentle rotation
      stardust.rotation.y += 0.0003;

      renderer.render(scene, camera);
    }

    if (supportsReducedMotion) {
      try { renderer.render(scene, camera); } catch (e) { /* still frame */ }
    } else {
      animateStory();
    }

    window.addEventListener('resize', () => {
      const w = canvas.parentElement.clientWidth;
      const h = canvas.parentElement.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      updateWorkbenchPosition();
    });
  }

  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initHeroScene();
      initStoryScene();
    });
  } else {
    initHeroScene();
    initStoryScene();
  }
})();