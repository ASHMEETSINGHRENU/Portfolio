// client/src/components/FolioBookHero.js
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ArrowUpRight, Eye, Sparkles } from 'lucide-react';

// Signature spine colors for each real portfolio project
const PROJECT_SPINE_COLORS = {
  "ind-1": "#B46A1B", // Pohewala - saffron gold
  "ind-2": "#1E4B27", // Shutter and Stripes - deep reserve green
  "ind-3": "#781A36", // Sumam's Boutique - royal silk maroon
  "ind-4": "#135C6B", // La Jhinga - coastal azure cyan
  "ind-5": "#43187F", // 9PM Bar & Cafe - electric nightlife purple
  1: "#1B3A9B",       // SlideNova - executive sapphire
  2: "#0D665E",       // InterviewReady - deep technical teal
  3: "#C46505",       // WorkWagon - marketplace warm amber
  4: "#A61450",       // Glam Cosmetics - luxury cosmetic rose
  5: "#A81818",       // AAOKHAAO - food delivery ruby
  6: "#243242",       // Bank Management - enterprise steel slate
};

// Generate high-resolution front cover canvas texture for a project
function createProjectCoverTexture(project) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 768;
  const ctx = canvas.getContext('2d');

  const spineColor = PROJECT_SPINE_COLORS[project.id] || '#243242';
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;

  const renderCover = (loadedImg = null) => {
    // 1. Warm cream paper base
    ctx.fillStyle = '#F8F6F0';
    ctx.fillRect(0, 0, 512, 768);

    // Subtle paper grain shading
    const grad = ctx.createLinearGradient(0, 0, 512, 768);
    grad.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
    grad.addColorStop(1, 'rgba(235, 230, 220, 0.4)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 768);

    // 2. Outer and Inner hairline border frames
    ctx.strokeStyle = 'rgba(13, 13, 12, 0.12)';
    ctx.lineWidth = 2;
    ctx.strokeRect(16, 16, 480, 736);

    ctx.strokeStyle = 'rgba(13, 13, 12, 0.06)';
    ctx.lineWidth = 1;
    ctx.strokeRect(22, 22, 468, 724);

    // 3. Top Header Bar
    // Category pill
    ctx.fillStyle = spineColor;
    ctx.beginPath();
    ctx.roundRect(32, 34, 220, 32, 16);
    ctx.fill();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 12px "Inter Tight", sans-serif';
    ctx.textAlign = 'left';
    const catText = project.isCommercial ? 'LIVE COMMERCIAL' : (project.category?.toUpperCase() || 'PROJECT');
    ctx.fillText(catText, 48, 54);

    // Year
    ctx.fillStyle = 'rgba(13, 13, 12, 0.55)';
    ctx.font = '500 13px "Inter Tight", monospace';
    ctx.textAlign = 'right';
    ctx.fillText(project.year || '2025', 476, 55);

    // 4. Middle Project Image Viewport
    const imgX = 32;
    const imgY = 82;
    const imgW = 448;
    const imgH = 340;

    // Viewport background & shadow
    ctx.fillStyle = '#EBE7DE';
    ctx.fillRect(imgX, imgY, imgW, imgH);

    if (loadedImg) {
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(imgX, imgY, imgW, imgH, 8);
      ctx.clip();
      ctx.drawImage(loadedImg, 0, 0, loadedImg.width, loadedImg.height, imgX, imgY, imgW, imgH);
      ctx.restore();

      ctx.strokeStyle = 'rgba(13, 13, 12, 0.1)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(imgX, imgY, imgW, imgH);
    } else {
      // Placeholder illustration
      ctx.fillStyle = spineColor;
      ctx.globalAlpha = 0.15;
      ctx.fillRect(imgX, imgY, imgW, imgH);
      ctx.globalAlpha = 1.0;

      ctx.fillStyle = spineColor;
      ctx.font = 'bold 20px "Inter Tight", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(project.title, 256, imgY + 175);
    }

    // 5. Editorial Content Area (Bottom)
    ctx.textAlign = 'left';

    // Industry / Sub-category
    if (project.industry) {
      ctx.fillStyle = spineColor;
      ctx.font = 'bold 11px "Inter Tight", sans-serif';
      ctx.fillText(project.industry.toUpperCase(), 36, 455);
    }

    // Project Title
    ctx.fillStyle = '#0D0D0C';
    ctx.font = 'bold 24px "Inter Tight", sans-serif';
    
    // Split title if long
    const words = project.title.split(' ');
    let line1 = '';
    let line2 = '';
    words.forEach((w) => {
      if ((line1 + w).length < 24) {
        line1 += (line1 ? ' ' : '') + w;
      } else {
        line2 += (line2 ? ' ' : '') + w;
      }
    });

    ctx.fillText(line1, 36, 488);
    if (line2) {
      ctx.fillText(line2, 36, 518);
    }

    // Tagline / Summary
    ctx.fillStyle = 'rgba(13, 13, 12, 0.65)';
    ctx.font = '400 13px "Inter Tight", sans-serif';
    const tagText = project.tagline || project.summary || '';
    const truncatedTag = tagText.length > 80 ? tagText.substring(0, 78) + '...' : tagText;
    ctx.fillText(truncatedTag, 36, line2 ? 546 : 520);

    // Tech Tags row
    if (project.tech && project.tech.length > 0) {
      const startY = line2 ? 582 : 556;
      let curX = 36;
      project.tech.slice(0, 3).forEach((tech) => {
        ctx.font = '500 11px "Inter Tight", monospace';
        const tWidth = ctx.measureText(tech).width + 16;
        
        ctx.fillStyle = 'rgba(13, 13, 12, 0.06)';
        ctx.beginPath();
        ctx.roundRect(curX, startY, tWidth, 24, 6);
        ctx.fill();

        ctx.fillStyle = '#0D0D0C';
        ctx.fillText(tech, curX + 8, startY + 16);
        curX += tWidth + 8;
      });
    }

    // Bottom author credit & imprint
    ctx.strokeStyle = 'rgba(13, 13, 12, 0.1)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(36, 710);
    ctx.lineTo(476, 710);
    ctx.stroke();

    ctx.fillStyle = 'rgba(13, 13, 12, 0.45)';
    ctx.font = '600 11px "Inter Tight", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('ENGINEERED BY ASHMEET SINGH', 36, 730);

    ctx.textAlign = 'right';
    ctx.fillText('EDITION FOLIO', 476, 730);

    texture.needsUpdate = true;
  };

  renderCover(null);

  // Load project's actual screenshot
  if (project.image) {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      renderCover(img);
    };
    img.src = project.image;
  }

  return texture;
}

// Generate vertical spine texture with embossed gold/cream typography
function createProjectSpineTexture(project) {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 768;
  const ctx = canvas.getContext('2d');

  const spineColor = PROJECT_SPINE_COLORS[project.id] || '#243242';
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;

  // 1. Base spine color
  ctx.fillStyle = spineColor;
  ctx.fillRect(0, 0, 128, 768);

  // 2. Cylindrical spine highlights & shadow gradient
  const grad = ctx.createLinearGradient(0, 0, 128, 0);
  grad.addColorStop(0, 'rgba(0, 0, 0, 0.45)');
  grad.addColorStop(0.2, 'rgba(255, 255, 255, 0.2)');
  grad.addColorStop(0.5, 'rgba(255, 255, 255, 0.05)');
  grad.addColorStop(0.8, 'rgba(0, 0, 0, 0.15)');
  grad.addColorStop(1, 'rgba(0, 0, 0, 0.55)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 128, 768);

  // 3. Gold/embossed foil horizontal rules at top and bottom
  ctx.fillStyle = '#F4EBC6';
  ctx.fillRect(16, 32, 96, 3);
  ctx.fillRect(16, 40, 96, 1.5);
  ctx.fillRect(16, 725, 96, 1.5);
  ctx.fillRect(16, 733, 96, 3);

  // 4. Vertical embossed project title
  ctx.save();
  ctx.translate(68, 120);
  ctx.rotate(Math.PI / 2);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 22px "Inter Tight", sans-serif';
  ctx.textAlign = 'left';
  
  // Clean title for spine
  const cleanTitle = project.title.split('—')[0].trim();
  const spineText = cleanTitle.length > 28 ? cleanTitle.substring(0, 26) + '...' : cleanTitle;
  ctx.fillText(spineText.toUpperCase(), 0, 0);

  ctx.fillStyle = '#F4EBC6';
  ctx.font = '500 13px "Inter Tight", monospace';
  ctx.fillText(` •  ${project.year || '2025'}`, ctx.measureText(spineText.toUpperCase()).width + 10, 0);

  ctx.restore();

  // 5. Author imprint at base of spine
  ctx.save();
  ctx.translate(68, 620);
  ctx.rotate(Math.PI / 2);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.font = 'bold 12px "Inter Tight", sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('A. SINGH', 0, 0);
  ctx.restore();

  texture.needsUpdate = true;
  return texture;
}

// Procedural paper edge texture
function createPageTexture(horizontal = true) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#efe7d6';
  ctx.fillRect(0, 0, 256, 256);

  ctx.strokeStyle = '#6f573e';
  for (let i = 0; i < 256; i += 2) {
    const alpha = 0.05 + Math.random() * 0.12;
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    if (horizontal) {
      ctx.moveTo(0, i);
      ctx.lineTo(256, i);
    } else {
      ctx.moveTo(i, 0);
      ctx.lineTo(i, 256);
    }
    ctx.stroke();
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const FolioBookHero = ({ 
  filteredProjects = [], 
  activeFilter, 
  setActiveFilter, 
  filterOptions = [], 
  onSelectProject 
}) => {
  const containerRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || filteredProjects.length === 0) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // Three.js Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const fov = width < height ? 40 : 19.5;
    const camera = new THREE.PerspectiveCamera(fov, width / height, 0.1, 100);
    camera.position.set(3.6, 2.15, 7.4);
    camera.lookAt(-1.4, 0.05, -0.6);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // Lighting setup
    const keyLight = new THREE.DirectionalLight(0xfff3e4, 2.4);
    keyLight.position.set(-4, 6, 6);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xbfd2ff, 1.1);
    rimLight.position.set(6, 3, -4);
    scene.add(rimLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const frontLight = new THREE.DirectionalLight(0xfffaed, 1.2);
    frontLight.position.set(2, 4, 8);
    scene.add(frontLight);

    // Shared Page Textures
    const pageTexH = createPageTexture(true);
    const pageTexV = createPageTexture(false);

    // Book geometry: BoxGeometry(1, 1.5, 0.2)
    const bookGeometry = new THREE.BoxGeometry(1, 1.5, 0.2);

    // Map projects into the diagonal row (target ~18-22 books for deep overlapping row)
    const bookTargetCount = Math.max(16, Math.min(24, filteredProjects.length * 2));
    const books = [];

    for (let i = 0; i < bookTargetCount; i++) {
      const proj = filteredProjects[i % filteredProjects.length];
      const spineColor = new THREE.Color(PROJECT_SPINE_COLORS[proj.id] || '#243242').multiplyScalar(0.75);

      const coverTex = createProjectCoverTexture(proj);
      const spineTex = createProjectSpineTexture(proj);

      // Face materials in order +x, -x, +y, -y, +z, -z:
      const materials = [
        new THREE.MeshStandardMaterial({ map: pageTexH, roughness: 0.9 }), // +x Fore-edge
        new THREE.MeshPhysicalMaterial({ map: spineTex, roughness: 0.55, clearcoat: 0.35 }), // -x Spine
        new THREE.MeshStandardMaterial({ map: pageTexV, roughness: 0.9 }), // +y Top
        new THREE.MeshStandardMaterial({ map: pageTexV, roughness: 0.9 }), // -y Bottom
        new THREE.MeshPhysicalMaterial({ map: coverTex, roughness: 0.38, clearcoat: 0.55, clearcoatRoughness: 0.3 }), // +z Cover
        new THREE.MeshPhysicalMaterial({ color: spineColor, roughness: 0.6 }), // -z Back
      ];

      const group = new THREE.Group();
      // Group position: (1.55 + i * (-0.5), -1.12, 0.9 + i * (-0.2))
      group.position.set(1.55 + i * -0.5, -1.12, 0.9 + i * -0.2);
      group.rotation.y = 0.32;

      const mesh = new THREE.Mesh(bookGeometry, materials);
      mesh.position.y = -3; // Starts underground for intro rise
      mesh.position.z = 0;
      mesh.userData = { project: proj, bookIndex: i };

      group.add(mesh);
      scene.add(group);

      books.push({
        index: i,
        project: proj,
        group,
        mesh,
        currentY: -3,
        currentZ: 0,
        vY: 0,
        vZ: 0,
        coverTex,
        spineTex,
      });
    }

    // Raycaster & Mouse coordinates for click detection
    const raycaster = new THREE.Raycaster();
    const mouseVector = new THREE.Vector2();

    // Pointer state tracking
    const pointer = { x: -9999, y: -9999, active: false };
    let lastPointerMoveTime = performance.now();

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
      lastPointerMoveTime = performance.now();
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    const handleClick = (e) => {
      const rect = container.getBoundingClientRect();
      mouseVector.x = ((e.clientX - rect.left) / width) * 2 - 1;
      mouseVector.y = -((e.clientY - rect.top) / height) * 2 + 1;

      raycaster.setFromCamera(mouseVector, camera);
      const meshes = books.map((b) => b.mesh);
      const intersects = raycaster.intersectObjects(meshes, false);

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        if (hit.userData && hit.userData.project) {
          onSelectProject(hit.userData.project);
        }
      }
    };

    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerleave', handlePointerLeave);
    container.addEventListener('click', handleClick);

    // Spring constants: K = 70, C = 12.5
    const K = 70;
    const C = 12.5;

    let startTime = performance.now();
    let lastFrameTime = performance.now();
    let animationFrameId;

    const screenPos = new THREE.Vector3();
    const testPoint = new THREE.Vector3(0, 0.1, 0);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const now = performance.now();
      const dt = Math.min((now - lastFrameTime) / 1000, 0.05);
      lastFrameTime = now;
      const elapsedTime = (now - startTime) / 1000;

      // Virtual cursor sweep when idle for 3.5s
      const isIdle = (now - lastPointerMoveTime) > 3500;
      let effectivePointerX = pointer.x;
      let effectivePointerY = pointer.y;
      let isEffectivelyActive = pointer.active;

      if (isIdle && books.length > 1) {
        isEffectivelyActive = true;
        const u = (Math.sin(elapsedTime * 0.45) + 1) / 2;
        const bLast = books[books.length - 2] || books[books.length - 1];
        const bFirst = books[1] || books[0];

        if (bLast && bFirst) {
          testPoint.set(0, 0.1, 0);
          bLast.mesh.localToWorld(testPoint);
          testPoint.project(camera);
          const xLast = (testPoint.x * 0.5 + 0.5) * width;
          const yLast = (-(testPoint.y * 0.5) + 0.5) * height;

          testPoint.set(0, 0.1, 0);
          bFirst.mesh.localToWorld(testPoint);
          testPoint.project(camera);
          const xFirst = (testPoint.x * 0.5 + 0.5) * width;
          const yFirst = (-(testPoint.y * 0.5) + 0.5) * height;

          effectivePointerX = THREE.MathUtils.lerp(xLast, xFirst, u);
          effectivePointerY = THREE.MathUtils.lerp(yLast, yFirst, u);
        }
      }

      // Pointer influence radius
      const s = Math.max(width, height) * 0.085;
      const sSq = s * s;

      // 4 sub-steps per frame for spring integration
      const subSteps = 4;
      const h = dt / subSteps;

      let highestLiftBook = null;
      let maxLiftFound = 0;

      for (let i = 0; i < books.length; i++) {
        const book = books[i];

        // Intro wave: rises sequentially from back to front
        const introTriggerTime = 0.25 + (books.length - i) * 0.035;
        const hasStarted = elapsedTime > introTriggerTime;

        let targetLift = 0;

        if (hasStarted) {
          testPoint.set(0, 0.1, 0);
          book.mesh.localToWorld(testPoint);
          screenPos.copy(testPoint).project(camera);

          const sx = (screenPos.x * 0.5 + 0.5) * width;
          const sy = (-(screenPos.y * 0.5) + 0.5) * height;

          if (isEffectivelyActive) {
            const dx = sx - effectivePointerX;
            const dy = (sy - effectivePointerY) * 0.55;
            const distSq = dx * dx + dy * dy;
            const influence = Math.exp(-distSq / sSq);
            targetLift = 0.78 * influence;

            if (targetLift > maxLiftFound) {
              maxLiftFound = targetLift;
              highestLiftBook = book;
            }
          }
        } else {
          targetLift = -3;
        }

        // Sub-step physics integration
        for (let step = 0; step < subSteps; step++) {
          // Vertical spring
          const forceY = (targetLift - book.currentY) * K - book.vY * C;
          book.vY += forceY * h;
          book.currentY += book.vY * h;

          // Forward spring (targetLift * 0.35 in local z)
          const targetZ = targetLift * 0.35;
          const forceZ = (targetZ - book.currentZ) * K - book.vZ * C;
          book.vZ += forceZ * h;
          book.currentZ += book.vZ * h;
        }

        book.mesh.position.y = book.currentY;
        book.mesh.position.z = book.currentZ;
        // Leans slightly while moving
        book.mesh.rotation.x = -book.vY * 0.012;
      }

      if (maxLiftFound > 0.35 && highestLiftBook) {
        setActiveProject(highestLiftBook.project);
      } else if (maxLiftFound <= 0.1) {
        setActiveProject(null);
      }

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.fov = width < height ? 40 : 19.5;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerleave', handlePointerLeave);
      container.removeEventListener('click', handleClick);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      bookGeometry.dispose();
      pageTexH.dispose();
      pageTexV.dispose();
      books.forEach((b) => {
        if (b.coverTex) b.coverTex.dispose();
        if (b.spineTex) b.spineTex.dispose();
        b.mesh.material.forEach((m) => m.dispose());
      });
    };
  }, [filteredProjects, onSelectProject]);

  return (
    <div className="relative w-full h-[80vh] sm:h-[88vh] lg:h-[92vh] overflow-hidden bg-[#FBF6EF] select-none">
      {/* Background grain & warm radial illumination */}
      <div className="absolute inset-0 bg-paper-grain opacity-40 mix-blend-multiply pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#F8DCC7]/40 via-[#F4EBC6]/30 to-[#DFE9D4]/30 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Layer 1: Giant Serif Wordmark (z 1) */}
      <div className="absolute inset-x-0 top-[20%] sm:top-[18%] text-center pointer-events-none z-[1]">
        <h1 className="font-['Libre_Caslon_Display',serif] text-[clamp(4rem,13vw,11rem)] font-normal tracking-[-0.03em] text-[#0D0D0C]/[0.10] leading-none uppercase selection:bg-transparent">
          Selected Works
        </h1>
        <p className="font-interTight text-xs sm:text-sm font-semibold tracking-[0.28em] uppercase text-[#F2772F] -mt-2 sm:-mt-4">
          Interactive 3D Hardcover Project Editions
        </p>
      </div>

      {/* Layer 2: Three.js Interactive Canvas (z 2) */}
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full cursor-pointer z-[2]"
      />

      {/* Layer 3: Dynamic Raised Project Preview Card (z 3) */}
      {activeProject && (
        <div className="absolute left-6 sm:left-12 bottom-24 sm:bottom-28 z-[3] pointer-events-auto transition-all duration-300">
          <div className="p-5 rounded-3xl bg-white/95 backdrop-blur-xl border border-[#0D0D0C]/12 shadow-2xl max-w-xs sm:max-w-md space-y-3">
            <div className="flex items-center justify-between gap-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-[#F8DCC7]/60 text-[#F2772F] border border-[#F2772F]/20 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                {activeProject.isCommercial ? "Live Commercial Client" : activeProject.category}
              </span>
              <span className="text-[11px] font-mono text-[#0D0D0C]/50">
                {activeProject.year}
              </span>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg text-[#0D0D0C] leading-snug">
                {activeProject.title}
              </h3>
              <p className="text-xs text-[#0D0D0C]/65 mt-1 line-clamp-2 leading-relaxed">
                {activeProject.tagline || activeProject.summary}
              </p>
            </div>

            {/* Tech chips */}
            {activeProject.tech && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {activeProject.tech.slice(0, 3).map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-[#F4F2ED] text-[#0D0D0C]/75 border border-[#0D0D0C]/08 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* Action buttons */}
            <div className="flex items-center gap-2 pt-1 border-t border-[#0D0D0C]/08">
              <button
                onClick={() => onSelectProject(activeProject)}
                className="flex-1 py-2 px-3.5 rounded-xl bg-[#0D0D0C] hover:bg-[#0D0D0C]/90 text-[#FBF6EF] text-xs font-medium flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <Eye className="w-3.5 h-3.5 text-[#F2772F]" />
                <span>Case Study</span>
              </button>

              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3.5 rounded-xl bg-white hover:bg-[#0D0D0C]/05 text-[#0D0D0C] border border-[#0D0D0C]/15 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Visit Site</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Layer 4: Interactive Category Filter Navigation (z 4) */}
      <div className="absolute inset-x-0 bottom-5 sm:bottom-7 z-[4] px-4 pointer-events-auto">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-2.5">
          <p className="text-[11px] uppercase tracking-widest text-[#0D0D0C]/50 font-medium text-center">
            Glide cursor across the 3D editions • Click any edition to inspect case study
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveFilter(opt.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-2 shadow-sm ${
                  activeFilter === opt.id
                    ? 'bg-[#0D0D0C] text-[#FBF6EF] scale-105 shadow-md'
                    : 'bg-white/95 backdrop-blur-sm text-[#0D0D0C]/75 hover:bg-[#F4F2ED] hover:text-[#0D0D0C] border border-[#0D0D0C]/10'
                }`}
              >
                <span>{opt.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full ${
                    activeFilter === opt.id
                      ? 'bg-white/20 text-[#FBF6EF]'
                      : 'bg-[#0D0D0C]/08 text-[#0D0D0C]/60'
                  }`}
                >
                  {opt.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FolioBookHero;