---
title: "Interactive simulation of virtual clay"
date: 2021-02-12
youtube: "https://www.youtube.com/embed/ZkQRpBD2f68"
github: "https://github.com/joantolo/clay-simulation"
tags:
  - Unity
  - Leap Motion
  - GPU programming
---

<!-- <div class="content_title"> Description </div> -->
I was developing this project working as an external researcher at Multimodal Simulation Lab (<a href="http://mslab.es/" rel="noopener"><span style="text-decoration: underline;">MSLab</span></a>) with Miguel Ángel Otady and Héctor Barreiro.

The objective of this project was to create a natural interactive simulation of clay material. To design a material with a complex behaviour such as clay it was decided to use a particled-based model following the Position Based Dynamics (PBD) and Position Based Fluids (PBF) methods. The bidirectional interaction is achieved using the hand's simulation from the <span style="text-decoration: underline;"><a href="https://clapxr.com/" rel="noopener">CLAP</a></span> project and sending the resulting interaction forces to an ultrasound-based tactile rendering algorithm.

The viscoplastic clay behaviour was designed using novel constraint formulations. First, the viscosity was expressed using a strain rate constraint. After that, the elastoplasticity behaviour was modelled with semi-permanent distance constraints that are (de)activated by a hysteresis threshold. Finally, the contact and friction of the model are achieved with an impenetrability contact constraint and a sliding anchor model.

Due to the nature of this particle-based method, it was decided to compute all constraints of the same type fully parallel, in Jacobi fashion getting the max efficiency of the GPU.

You can see in the above picture how the material deforms when it collides with an incline. From left to right: the material with all the constraints (green), without the viscosity constraint (red), without the elastoplasticity constraints (blue) and without the friction constraints (magenta):

<img src="/assets/images/figure-materials.png">

The hands are meshed in tetrahedra and filled with ghost particles using the barycentric coordinates of these tetrahedra. With this method, the particles will transform their positions using these barycentric coordinates.

Lastly, the ultrasound rendering algorithm computes a pressure field using the contact forces of the ghost particles. Then, using a clustering algorithm with a perceptual weight map it obtains the focal points and pressures that are commanded to the ultrasound device.

All the content of this project was very interesting to me and I really enjoyed learning and working with the MSLab team.  This project was also presented at the IEEE World Haptics Conference of 2021. I am very grateful!
