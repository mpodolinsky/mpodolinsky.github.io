---
layout: default
title: Home
---

<style>
  .page-section { margin: 28px 0; }
  .card-grid { display: flex; flex-direction: column; gap: 18px; }
  .card { border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px 16px; background: #fff; box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05); }
  .card h4 { margin: 0 0 6px 0; font-size: 1.05em; }
  .card .meta { color: #4b5563; font-size: 0.95em; margin: 4px 0 8px 0; }
  .card .tags { display: flex; gap: 6px; flex-wrap: wrap; margin: 8px 0 0 0; }
  .card .tag { background: #eef2ff; color: #27303f; padding: 2px 9px; border-radius: 12px; font-size: 0.82em; }
  .thumb-row { display: flex; gap: 10px; margin-top: 12px; flex-wrap: wrap; }
  .thumb-row img { width: 31%; max-width: 220px; min-width: 150px; height: 150px; object-fit: cover; border-radius: 8px; }
  .hero { display: flex; gap: 18px; align-items: center; flex-wrap: wrap; margin-bottom: 18px; background: #f8fafc; border: 1px solid #e5e7eb; border-radius: 14px; padding: 16px 18px; box-shadow: 0 4px 14px rgba(0,0,0,0.04); }
  .hero img { width: 190px; height: 190px; object-fit: contain; border-radius: 14px; background: #fff; }
  .hero-text { flex: 1 1 260px; }
  .links { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 8px; }
  .links a { color: #0366d6; text-decoration: none; font-weight: 500; }
  .links a:hover { text-decoration: underline; }
</style>

<div class="hero">
  <img src="/assets/WhatsApp Image 2026-01-24 at 22.14.24.jpeg" alt="Michal Podolinsky" style="width:190px; height:210px; object-fit:cover; border-radius:14px; background:#fff;">
  <div class="hero-text" markdown="1">
  Hi, I'm Michal!

  I am a graduate student (MSc) in Aerospace Engineering — Controls, Autonomy, and Robotics at UT Austin. 
  
  I work as a graduate research assistant in robotics and autonomy at the [Autonomous Systems Group](https://autonomy.oden.utexas.edu/Groups/autonomous-systems-group).

  Learn more [about me](/about/) or see my [outreach](/outreach/).
  </div>
</div>

<div class="page-section">
<h3>Projects</h3>
<div class="card-grid">

  <div class="card" markdown="1">
  <h4><a href="/multi_view_perception/">Multi-View Perception and Uncertainty Fusion for Autonomous Robots</a></h4>
  <div class="meta">
    <div>Status: Ongoing</div>
    <div>Focus: multi-view perception, uncertainty quantification</div>
  </div>
  Ongoing research on multi-view perception fusion with rigorous uncertainty guarantees for safe autonomous operation, involving NVIDIA Isaac Sim.

  <div class="tags">
    <span class="tag">TensorFlow</span>
    <span class="tag">RGB-D</span>
    <span class="tag">NVIDIA Isaac Sim</span>
    <span class="tag">Uncertainty Guarantees</span>
    <span class="tag">Live Deployment</span>
  </div>

  <div class="thumb-row">
    <img src="/assets/frontview_yolov8m.png" alt="Multi-view perception front view">
    <img src="/assets/drone_wip.jpeg" alt="Multi-view perception drone">
    <img src="/assets/sideview_yolov8m.png" alt="Multi-view perception side view">
  </div>
  </div>

  <div class="card" markdown="1">
  <h4><a href="/spot/">Boston Dynamics Spot Robot</a></h4>
  <div class="meta">
    <div>Status: Ongoing</div>
    <div>Focus: payload design, RL gait deployment</div>
  </div>
  Custom payload development and reinforcement learning-based gait policy deployment on real hardware.

  <div class="tags">
    <span class="tag">ROS2</span>
    <span class="tag">Reinforcement Learning</span>
    <span class="tag">Perception</span>
  </div>

  <div class="thumb-row">
    <img src="/assets/NVIDIA_Isaac_Lab.png" alt="NVIDIA Isaac Lab policy training">
    <img src="/assets/IMG_0371.JPEG" alt="Spot Robot payload">
    <img src="/assets/IMG_0376.JPEG" alt="Spot Robot rear view">
  </div>
  </div>

  <div class="card" markdown="1">
  <h4><a href="/altitude_estimation/">Front-Facing LiDAR Altitude Estimation</a></h4>
  <div class="meta">
    <div>Status: Deployed at <a href="https://abzinnovation.com/">ABZ Innovation</a></div>
    <div>Focus: real-time perception on UAVs</div>
  </div>
  LiDAR-only Robust altitude estimation for UAVs in unstructured environments.

  <div class="tags">
    <span class="tag">LiDAR</span>
    <span class="tag">C++/Python</span>
    <span class="tag">ROS</span>
    <span class="tag">Embedded</span>
  </div>

  <div class="thumb-row">
    <img src="/assets/Process_2.png" alt="Altitude estimation field test">
    <img src="/assets/1.png" alt="Drone running altitude estimator">
    <img src="/assets/2.png" alt="Altitude estimator hardware module">
  </div>
  </div>

  <div class="card" markdown="1">
  <h4><a href="/eddy/">Spatiotemporal Tracking from Satellite Data</a></h4>
  <div class="meta">
    <div>Status: Completed at TU Delft</div>
    <div>Focus: ocean eddy detection</div>
  </div>
  Python pipeline for detecting and tracking dynamic oceanic eddies from satellite data.

  <div class="tags">
    <span class="tag">Python</span>
    <span class="tag">Remote Sensing</span>
    <span class="tag">Tracking</span>
  </div>

  <div class="thumb-row">
    <img src="/assets/SLA_over_U-V.png" alt="Eddy tracking visualization">
    <img src="/assets/Partial_SLA_map.png" alt="Sea level anomaly map">
    <img src="/assets/Eddy_Points.png" alt="Eddy point detection">
  </div>
  </div>

</div>
</div>

<div class="page-section">
<h3>Outreach</h3>
<div class="card" markdown="1">
<h4><a href="/outreach/">Del Valle High School Autonomous Car Project - Army Educational Outreach Program</a></h4>
<div class="meta">
  <div>Status: Active</div>
  <div>Focus: teaching robotics fundamentals to high school students</div>
</div>
Hands-on sessions covering servos, sensors, Python programming, and hardware control to build an autonomous RC car.

<div class="tags">
  <span class="tag">Teaching</span>
  <span class="tag">Python</span>
  <span class="tag">Robotics</span>
  <span class="tag">Circuits</span>
</div>

<div class="thumb-row">
  <img src="/assets/PXL_20251111_172415113.MP.jpeg" alt="Students presenting autonomous car">
  <img src="/assets/PXL_20251118_163631017.MP.JPEG" alt="Workshop session">
  <img src="/assets/del_valle_3.png" alt="Autonomous RC car project">
</div>
</div>
</div>

<div class="page-section" markdown="1">
<h3>Tutorials</h3>
- [coming soon] Synthetic data generation with NVIDIA Isaac Sim Replicator

<h3>Blog</h3>
- [non-technical aerospace books recommendations](/blog/aerospace-book-recommendations/)
</div>

<div class="page-section" markdown="1">
<h3>Quick links</h3>
<div class="links">
  <a href="https://www.linkedin.com/in/michal-p-podolinsky/">LinkedIn</a>
  <a href="https://drive.google.com/file/d/1S0G6_bTJ2stPSoupfMrBNKc9shdzBuCu/view?usp=sharing">CV</a>
  <a href="mailto:michal.podolinsky@utexas.edu">Email</a>
  <a href="https://github.com/mpodolinsky">GitHub</a>
</div>
</div>
