---
layout: default
title: Projects
permalink: /eddy/
---

## **Spatiotemporal Tracking of Dynamic Structures from Satellite Data**

**Type of Project:** Academic Research, Algorithm Design, Data Processing

**Summary:**  
Built a full-stack Python pipeline to detect, filter, and track dynamic spatiotemporal structures (oceanic eddies) from large-scale, noisy satellite data.

### **Technical Stack**
- **Languages & Tools:** Python, NumPy, SciPy, Matplotlib, NetCDF4, custom plotting functions
- **Algorithms:** Finite-difference derivatives, time-series filtering, object matching, parameter sweeps
- **General Skills:** Numerical methods, spatiotemporal data processing, tracking/filtering pipelines, structured code design


<figure style="text-align: center;">

  <!-- Subfigure (a) -->
  <div style="display: inline-block; width: 48%; margin: 1%;">
    <img src="/assets/Partial_SLA_map.png" alt="Sea level anomaly map of an eddy" style="max-width: 100%; height: auto;">
    <figcaption><strong>(a)</strong> Sea level anomaly map of an eddy</figcaption>
  </div>

  <!-- Subfigure (b) -->
  <div style="display: inline-block; width: 48%; margin: 1%;">
    <img src="/assets/SLA_over_U-V.png" alt="Geostrophic velocities over SLA map" style="max-width: 100%; height: auto;">
    <figcaption><strong>(b)</strong> Geostrophic velocities overlaid on SLA map</figcaption>
  </div>

  <!-- Subfigure (c) -->
  <div style="display: inline-block; width: 48%; margin: 1%;">
    <img src="/assets/Okubo-Weiss_Parameter.png" alt="Okubo-Weiss parameter W" style="max-width: 100%; height: auto;">
    <figcaption><strong>(c)</strong> Okubo–Weiss parameter \(W\)</figcaption>
  </div>

  <!-- Subfigure (d) -->
  <div style="display: inline-block; width: 48%; margin: 1%;">
    <img src="/assets/Eddy_Points.png" alt="Eddy point locations" style="max-width: 100%; height: auto;">
    <figcaption><strong>(d)</strong> Detected eddy points (after correction & filtering)</figcaption>
  </div>

  <!-- Main Caption -->
  <figcaption style="margin-top: 1em;">
    <strong>Figure:</strong> Main steps of eddy detection. Sea-level anomaly map (a). Geostrophic velocities used to compute \(W\) (b). The Okubo–Weiss parameter (c). Detected eddy points (d).
  </figcaption>

</figure>


### **Key Contributions**
- **Custom Tracking Algorithm:** Designed and implemented a robust object-tracking system across noisy time-series data using spatial proximity, feature similarity, and continuity constraints.
- **Gradient-Based Feature Extraction:** Computed velocity, vorticity, and strain tensors from scalar fields using finite-difference approximations and derivatives on an adaptive grid.
- **Dynamic Thresholding:** Designed flexible filtering pipelines with tunable cutoffs based on region statistics (standard deviation, radius, lifetime, depth), balancing precision and noise rejection.
- **Correlation Analysis:** Matched detected structures with independent scalar fields (e.g. temperature) and quantified relationships through statistical averaging and classification.
- **Data Visualization:** Automated generation of dynamic maps, heatmaps, and time-series plots to support analysis and debugging of the full pipeline.

### **Outcomes**
- **SLA and SST strongly correlated** – positive SLA ≈ warm-core; negative SLA ≈ cold-core  
- **Okubo–Weiss method effective** but sensitive; used 𝜉 = 1.2 for optimal filtering  
- **Tracking algorithm validated** Gulf Stream structure and eddy dynamics  
- **Cyclonic vs. anticyclonic** less correlated with SST than SLA-based classification  
- **Future work:** optimize 𝜉 cutoff, refine classification logic, integrate SST into tracking pipeline


