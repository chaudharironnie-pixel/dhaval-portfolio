import React, { useEffect, useRef } from 'react';

const SpidermanAnimation = () => {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let W = window.innerWidth;
    let H = window.innerHeight;

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    resize();
    window.addEventListener('resize', resize);

    const sp = {
      anchorX: -100,
      anchorY: 0,
      ropeLen: 220,
      angle: -0.6,
      angleVel: 0.026,
      gravity: 0.0009,
      damping: 0.999,
      speed: 2.2,
      trail: [],
      time: 0,
    };

    // ── Gradient helpers ─────────────────────────────────────────
    function radialGrad(x, y, r1, r2, c1, c2) {
      const g = ctx.createRadialGradient(x, y, r1, x, y, r2);
      g.addColorStop(0, c1);
      g.addColorStop(1, c2);
      return g;
    }

    function linearGrad(x1, y1, x2, y2, stops) {
      const g = ctx.createLinearGradient(x1, y1, x2, y2);
      stops.forEach(([t, c]) => g.addColorStop(t, c));
      return g;
    }

    // ── Draw web pattern on a clipped region ─────────────────────
    function drawWebPattern(cx, cy, rx, ry, rot = 0) {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);
      ctx.beginPath();
      ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
      ctx.clip();
      ctx.strokeStyle = 'rgba(60,0,0,0.45)';
      ctx.lineWidth = 0.6;
      // radial lines from center
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 6) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(a) * rx * 2, Math.sin(a) * ry * 2);
        ctx.stroke();
      }
      // concentric ellipses
      for (let r = 0.25; r <= 1.2; r += 0.25) {
        ctx.beginPath();
        ctx.ellipse(0, 0, rx * r, ry * r, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();
    }

    // ── Spider logo ──────────────────────────────────────────────
    function drawSpiderLogo(x, y, s) {
      ctx.save();
      ctx.translate(x, y);
      // body
      ctx.fillStyle = '#000';
      ctx.beginPath(); ctx.ellipse(0, -s*0.12, s*0.13, s*0.09, 0, 0, Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(0, s*0.08, s*0.1, s*0.14, 0, 0, Math.PI*2); ctx.fill();
      // legs
      ctx.strokeStyle = '#000'; ctx.lineWidth = s * 0.045;
      ctx.lineCap = 'round';
      const legs = [
        [-1.1,-0.5,-1.8,-1.1], [-0.9,0.0,-1.7,-0.1], [-1.0,0.5,-1.7,0.9],
        [1.1,-0.5,1.8,-1.1],  [0.9,0.0,1.7,-0.1],  [1.0,0.5,1.7,0.9],
      ];
      legs.forEach(([x1,y1,x2,y2]) => {
        ctx.beginPath();
        ctx.moveTo(x1*s*0.18, y1*s*0.18);
        ctx.lineTo(x2*s*0.18, y2*s*0.18);
        ctx.stroke();
      });
      ctx.restore();
    }

    // ── Main Spider-Man draw ─────────────────────────────────────
    function drawSpiderman(cx, cy, swingAngle, t, goingRight) {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(swingAngle * 0.5);
      if (!goingRight) ctx.scale(-1, 1);

      const s = 28; // scale unit
      const legSwing = Math.sin(t * 0.006) * 0.22;
      const armSwing = Math.cos(t * 0.006) * 0.12;

      // ── LEGS ──────────────────────────────────────────────────

      // left thigh
      ctx.save();
      ctx.translate(-s*0.24, s*0.88);
      ctx.rotate(-0.28 + legSwing);
      // thigh gradient
      ctx.beginPath();
      ctx.roundRect(-s*0.17, 0, s*0.33, s*0.52, 8);
      ctx.fillStyle = linearGrad(-s*0.17,0,s*0.17,0,[
        [0,'#1a237e'],[0.4,'#283593'],[1,'#1a237e']
      ]);
      ctx.fill();
      // shin
      ctx.save();
      ctx.translate(0, s*0.52);
      ctx.rotate(0.18 - legSwing*0.5);
      ctx.beginPath();
      ctx.roundRect(-s*0.15, 0, s*0.29, s*0.48, 7);
      ctx.fillStyle = linearGrad(-s*0.15,0,s*0.15,0,[
        [0,'#1a237e'],[0.4,'#283593'],[1,'#1a237e']
      ]);
      ctx.fill();
      // boot
      ctx.save();
      ctx.translate(0, s*0.48);
      ctx.beginPath();
      ctx.ellipse(s*0.04, s*0.1, s*0.2, s*0.13, 0.2, 0, Math.PI*2);
      ctx.fillStyle = linearGrad(0,0,s*0.2,s*0.2,[
        [0,'#e53935'],[0.5,'#cc0000'],[1,'#b71c1c']
      ]);
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();

      // right thigh
      ctx.save();
      ctx.translate(s*0.24, s*0.88);
      ctx.rotate(0.28 - legSwing);
      ctx.beginPath();
      ctx.roundRect(-s*0.17, 0, s*0.33, s*0.52, 8);
      ctx.fillStyle = linearGrad(-s*0.17,0,s*0.17,0,[
        [0,'#1a237e'],[0.4,'#283593'],[1,'#1a237e']
      ]);
      ctx.fill();
      ctx.save();
      ctx.translate(0, s*0.52);
      ctx.rotate(-0.18 + legSwing*0.5);
      ctx.beginPath();
      ctx.roundRect(-s*0.15, 0, s*0.29, s*0.48, 7);
      ctx.fillStyle = linearGrad(-s*0.15,0,s*0.15,0,[
        [0,'#1a237e'],[0.4,'#283593'],[1,'#1a237e']
      ]);
      ctx.fill();
      ctx.save();
      ctx.translate(0, s*0.48);
      ctx.beginPath();
      ctx.ellipse(s*0.04, s*0.1, s*0.2, s*0.13, 0.2, 0, Math.PI*2);
      ctx.fillStyle = linearGrad(0,0,s*0.2,s*0.2,[
        [0,'#e53935'],[0.5,'#cc0000'],[1,'#b71c1c']
      ]);
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();

      // ── TORSO ─────────────────────────────────────────────────
      // main body gradient
      ctx.beginPath();
      ctx.ellipse(0, s*0.22, s*0.54, s*0.76, 0, 0, Math.PI*2);
      ctx.fillStyle = linearGrad(-s*0.54, s*0.22, s*0.54, s*0.22, [
        [0,'#b71c1c'],[0.3,'#e53935'],[0.5,'#cc0000'],[0.7,'#e53935'],[1,'#b71c1c']
      ]);
      ctx.fill();

      // muscle highlight on chest
      ctx.beginPath();
      ctx.ellipse(-s*0.15, s*0.05, s*0.2, s*0.28, -0.2, 0, Math.PI*2);
      ctx.fillStyle = 'rgba(255,100,100,0.12)';
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(s*0.15, s*0.05, s*0.2, s*0.28, 0.2, 0, Math.PI*2);
      ctx.fillStyle = 'rgba(255,100,100,0.12)';
      ctx.fill();

      // web pattern on torso
      drawWebPattern(0, s*0.22, s*0.54, s*0.76);

      // blue waist band
      ctx.beginPath();
      ctx.ellipse(0, s*0.88, s*0.5, s*0.28, 0, 0, Math.PI*2);
      ctx.fillStyle = linearGrad(-s*0.5, s*0.88, s*0.5, s*0.88, [
        [0,'#1a237e'],[0.5,'#283593'],[1,'#1a237e']
      ]);
      ctx.fill();

      // belt line
      ctx.beginPath();
      ctx.ellipse(0, s*0.72, s*0.5, s*0.06, 0, 0, Math.PI*2);
      ctx.fillStyle = 'rgba(0,0,80,0.4)';
      ctx.fill();

      // spider logo
      drawSpiderLogo(0, s*0.18, s*0.55);

      // ── ARMS ──────────────────────────────────────────────────

      // left arm (raised holding web)
      ctx.save();
      ctx.translate(-s*0.5, s*0.02);
      ctx.rotate(-1.25 + armSwing);
      // upper arm
      ctx.beginPath();
      ctx.roundRect(-s*0.13, 0, s*0.25, s*0.42, 7);
      ctx.fillStyle = linearGrad(-s*0.13,0,s*0.13,0,[
        [0,'#b71c1c'],[0.4,'#e53935'],[1,'#b71c1c']
      ]);
      ctx.fill();
      // forearm
      ctx.save();
      ctx.translate(0, s*0.42);
      ctx.rotate(-0.3);
      ctx.beginPath();
      ctx.roundRect(-s*0.11, 0, s*0.22, s*0.38, 6);
      ctx.fillStyle = linearGrad(-s*0.11,0,s*0.11,0,[
        [0,'#b71c1c'],[0.4,'#e53935'],[1,'#b71c1c']
      ]);
      ctx.fill();
      // glove / hand (web-shooting pose)
      ctx.save();
      ctx.translate(0, s*0.38);
      ctx.beginPath();
      ctx.ellipse(0, s*0.1, s*0.13, s*0.1, 0, 0, Math.PI*2);
      ctx.fillStyle = '#cc0000'; ctx.fill();
      // web shooter dot
      ctx.beginPath();
      ctx.arc(s*0.04, s*0.06, s*0.04, 0, Math.PI*2);
      ctx.fillStyle = '#silver';
      ctx.fillStyle = '#aaa'; ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();

      // right arm (raised)
      ctx.save();
      ctx.translate(s*0.5, s*0.02);
      ctx.rotate(1.25 - armSwing);
      ctx.beginPath();
      ctx.roundRect(-s*0.13, 0, s*0.25, s*0.42, 7);
      ctx.fillStyle = linearGrad(-s*0.13,0,s*0.13,0,[
        [0,'#b71c1c'],[0.4,'#e53935'],[1,'#b71c1c']
      ]);
      ctx.fill();
      ctx.save();
      ctx.translate(0, s*0.42);
      ctx.rotate(0.3);
      ctx.beginPath();
      ctx.roundRect(-s*0.11, 0, s*0.22, s*0.38, 6);
      ctx.fillStyle = linearGrad(-s*0.11,0,s*0.11,0,[
        [0,'#b71c1c'],[0.4,'#e53935'],[1,'#b71c1c']
      ]);
      ctx.fill();
      ctx.save();
      ctx.translate(0, s*0.38);
      ctx.beginPath();
      ctx.ellipse(0, s*0.1, s*0.13, s*0.1, 0, 0, Math.PI*2);
      ctx.fillStyle = '#cc0000'; ctx.fill();
      ctx.beginPath();
      ctx.arc(s*0.04, s*0.06, s*0.04, 0, Math.PI*2);
      ctx.fillStyle = '#aaa'; ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();

      // ── HEAD ──────────────────────────────────────────────────

      // neck
      ctx.beginPath();
      ctx.ellipse(0, -s*0.12, s*0.18, s*0.14, 0, 0, Math.PI*2);
      ctx.fillStyle = '#cc0000'; ctx.fill();

      // head shape
      ctx.beginPath();
      ctx.ellipse(0, -s*0.56, s*0.42, s*0.5, 0, 0, Math.PI*2);
      ctx.fillStyle = linearGrad(-s*0.42,-s*0.56,s*0.42,-s*0.56,[
        [0,'#b71c1c'],[0.3,'#e53935'],[0.5,'#cc0000'],[0.7,'#e53935'],[1,'#b71c1c']
      ]);
      ctx.fill();

      // web pattern on head
      drawWebPattern(0, -s*0.56, s*0.42, s*0.5);

      // face mask blue section (lower face)
      ctx.beginPath();
      ctx.ellipse(0, -s*0.3, s*0.3, s*0.18, 0, 0, Math.PI*2);
      ctx.fillStyle = 'rgba(26,35,126,0.0)'; ctx.fill();

      // left eye — large white angular
      ctx.save();
      ctx.translate(-s*0.16, -s*0.62);
      ctx.rotate(-0.22);
      // outer eye shape
      ctx.beginPath();
      ctx.moveTo(-s*0.18, 0);
      ctx.bezierCurveTo(-s*0.18,-s*0.14, s*0.18,-s*0.14, s*0.18, 0);
      ctx.bezierCurveTo(s*0.18, s*0.1, -s*0.18, s*0.1, -s*0.18, 0);
      ctx.fillStyle = '#fff';
      ctx.fill();
      // inner eye shine
      ctx.beginPath();
      ctx.ellipse(-s*0.04, -s*0.03, s*0.06, s*0.04, -0.3, 0, Math.PI*2);
      ctx.fillStyle = 'rgba(200,230,255,0.6)'; ctx.fill();
      // eye outline
      ctx.beginPath();
      ctx.moveTo(-s*0.18, 0);
      ctx.bezierCurveTo(-s*0.18,-s*0.14, s*0.18,-s*0.14, s*0.18, 0);
      ctx.bezierCurveTo(s*0.18, s*0.1, -s*0.18, s*0.1, -s*0.18, 0);
      ctx.strokeStyle = '#111'; ctx.lineWidth = 1; ctx.stroke();
      ctx.restore();

      // right eye
      ctx.save();
      ctx.translate(s*0.16, -s*0.62);
      ctx.rotate(0.22);
      ctx.beginPath();
      ctx.moveTo(-s*0.18, 0);
      ctx.bezierCurveTo(-s*0.18,-s*0.14, s*0.18,-s*0.14, s*0.18, 0);
      ctx.bezierCurveTo(s*0.18, s*0.1, -s*0.18, s*0.1, -s*0.18, 0);
      ctx.fillStyle = '#fff'; ctx.fill();
      ctx.beginPath();
      ctx.ellipse(s*0.04, -s*0.03, s*0.06, s*0.04, 0.3, 0, Math.PI*2);
      ctx.fillStyle = 'rgba(200,230,255,0.6)'; ctx.fill();
      ctx.beginPath();
      ctx.moveTo(-s*0.18, 0);
      ctx.bezierCurveTo(-s*0.18,-s*0.14, s*0.18,-s*0.14, s*0.18, 0);
      ctx.bezierCurveTo(s*0.18, s*0.1, -s*0.18, s*0.1, -s*0.18, 0);
      ctx.strokeStyle = '#111'; ctx.lineWidth = 1; ctx.stroke();
      ctx.restore();

      // overall body outline glow
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(0, s*0.22, s*0.56, s*0.78, 0, 0, Math.PI*2);
      ctx.strokeStyle = 'rgba(255,80,80,0.18)';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.restore();

      ctx.restore(); // main
    }

    // ── Rope draw ────────────────────────────────────────────────
    function drawRope(ax, ay, bx, by) {
      const mx = (ax + bx) / 2 + (bx - ax) * 0.03;
      const my = (ay + by) / 2 + Math.abs(bx - ax) * 0.09 + 6;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(ax, ay);
      ctx.quadraticCurveTo(mx, my, bx, by);
      // rope gradient
      const rg = ctx.createLinearGradient(ax, ay, bx, by);
      rg.addColorStop(0, 'rgba(200,200,200,0.6)');
      rg.addColorStop(0.5, 'rgba(240,240,240,0.95)');
      rg.addColorStop(1, 'rgba(200,200,200,0.6)');
      ctx.strokeStyle = rg;
      ctx.lineWidth = 2;
      ctx.shadowColor = 'rgba(255,255,255,0.6)';
      ctx.shadowBlur = 6;
      ctx.stroke();
      ctx.restore();
    }

    // ── Animation loop ───────────────────────────────────────────
    const animate = () => {
      ctx.clearRect(0, 0, W, H);

      sp.time++;
      sp.anchorX += sp.speed;

      if (sp.anchorX > W + 160) {
        sp.anchorX = -100;
        sp.angle = -0.6;
        sp.angleVel = 0.026;
        sp.trail = [];
      }

      // pendulum physics
      sp.angleVel += -sp.gravity * Math.sin(sp.angle);
      sp.angleVel *= sp.damping;
      sp.angle += sp.angleVel;

      const MAX = Math.PI / 1.85;
      if (sp.angle > MAX) { sp.angle = MAX; sp.angleVel *= -0.75; }
      if (sp.angle < -MAX) { sp.angle = -MAX; sp.angleVel *= -0.75; }
      if (Math.abs(sp.angleVel) < 0.013) {
        sp.angleVel = sp.angle > 0 ? -0.03 : 0.03;
      }

      const spX = sp.anchorX + Math.sin(sp.angle) * sp.ropeLen;
      const spY = sp.anchorY + Math.cos(sp.angle) * sp.ropeLen;
      const goingRight = sp.angleVel > 0;

      // trail
      sp.trail.push({ x: spX, y: spY, a: Math.abs(sp.angleVel) });
      if (sp.trail.length > 32) sp.trail.shift();

      // draw motion trail
      ctx.save();
      for (let i = 1; i < sp.trail.length; i++) {
        const alpha = (i / sp.trail.length) * 0.22;
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = '#e53935';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(sp.trail[i-1].x, sp.trail[i-1].y);
        ctx.lineTo(sp.trail[i].x, sp.trail[i].y);
        ctx.stroke();
      }
      ctx.restore();

      // rope
      drawRope(sp.anchorX, sp.anchorY, spX, spY);

      // anchor
      ctx.save();
      ctx.beginPath();
      ctx.arc(sp.anchorX, sp.anchorY, 5, 0, Math.PI*2);
      const ag = radialGrad(sp.anchorX, sp.anchorY, 0, 5, '#fff', 'rgba(200,200,200,0.3)');
      ctx.fillStyle = ag;
      ctx.shadowColor = '#fff';
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.restore();

      // Spider-Man
      ctx.save();
      ctx.shadowColor = 'rgba(200,0,0,0.35)';
      ctx.shadowBlur = 22;
      drawSpiderman(spX, spY, sp.angle, sp.time, goingRight);
      ctx.restore();

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default SpidermanAnimation;
