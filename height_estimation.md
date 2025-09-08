---
layout: default
title: Projects
permalink: /height_estimation/
---



## **Front-Facing LiDAR Altitude Estimation**

**Type of Project:** Commercial Internship at [Perciv AI](https://www.perciv.ai/), Real-Time Robotics

**Status:** Commercially implemented in [ABZ Innovation](https://abzinnovation.com/) agricultural drones

**Summary:**  
Developed, tested, and deployed a robust algorithm enabling agricultural drones to estimate their altitude using only a front-facing LiDAR sensor—supporting reliable low-altitude flight without GPS or downward sensors.

- Fewer sensors reduce cost and risk of hardware failure
- Can be used as a primary or backup height estimator for greater robustness
- More accurate than GPS in complex and irregular environments

### **Technical Stack**
- **Languages & Tools:** C++, Python, ROS, Docker, GitHub, Linux
- **Embedded Platforms:** Raspberry Pi 5, medium-sized UAVs
- **Sensor & Robotics Skills:** Point cloud processing, sensor calibration, coordinate frame transformations (TF), real-time filtering, hardware-software integration, hardware-in-the-loop (HIL) testing, system latency optimization
- **Software Engineering:** OOP, modular architecture, unit testing (C++ & Python), Git-based workflows, robust documentation, scalable codebase design
- **Simulation & Visualization:** Foxglove Studio, RViz
- **Soft Skills & Collaboration:** Technical writing, team-wide safety training, live demonstrations, documentation for handover and future development

*These images are the propery of PERCIV AI, do not use or share them without consent*

![Altitude estimation algorithm in an Orchard](/assets/Process.png)

*Figure 1: Live field testing in an agricultural environment to validate altitude estimation accuracy*


![Altitude estimation algorithm in an field](/assets/Process_2.png)

*Figure 2: Live field testing in an unstructured environment to validate altitude estimation accuracy*

### **Key Contributions**
- **Algorithm Development:** Designed real-time height estimation algorithms in **Python and C++** using **ROS**, with seamless integration in **Linux** and **Docker** environments.
- **Embedded Systems Integration:** Deployed code on **Raspberry Pi 5** modules and physically integrated into drone hardware for field use.
- **Real-World Testing:** Performed live drone tests in agricultural settings, gathering sensor data and iterating on code for improved performance.
- **Hardware-in-the-Loop (HIL):** Built HIL setups to simulate sensor input for optimizing latency and compute load in constrained environments.
- **System Design & Knowledge Transfer:** Implemented modular ROS node architecture, led a functional safety lecture for the engineering team, and documented the full system for future scaling and maintenance.

