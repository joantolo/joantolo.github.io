---
title: "Offline raytracing"
date: 2020-04-07
youtube: "https://www.youtube.com/embed/phUzB4fFy-E"
tags:
  - C++
  - Nori framework
---

<script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<!-- <div class="content_title"> Description </div> -->
This work was made in the advanced rendering subject in my MSc. We used <a href="https://wjakob.github.io/nori/"><span style="text-decoration: underline;">Nori framework</span></a> which is an educational framework that helps students understand how raytracing works and guides you to implement it.

To compute the radiance emitted from a surface we integrate over a hemisphere domain \\(H^2\\) the scattering equation expressed as:

<p align="center">\[
L_o(\mathrm{p}, w_o) = \int_{H^2} f(\mathrm{p}, w_o, w_i)\ L_i(\mathrm{p}, w_i)\ |\cos\theta_i|\ dw_i
\]</p>

From a point of the surface \\(\mathrm{p}\\), radiance is emitted in the direction \\(w_o\\) toward the viewer as a result of incident radiance along the direction \\(w_i\\), considering the direction \\(w_i\\) as a differential cone of directions. \\(f(\mathrm{p}, w_o, w_i)\\) is the BSDF value independent from directions, in the case of a diffuse surface it would be the albedo. \\(L_i(\mathrm{p}, w_i)\\) is the incident radiance from direction \\(w_i\\). And \\(\theta_i\\) is the angle between the normal surface and the direction \\(w_i\\).

Using Monte Carlo estimator we can express this integration as:

<p align="center">\[
L_o(\mathrm{p}, w_o) \approx \frac{1}{N} \sum_{j=1}^{N}{\frac{f(\mathrm{p}, w_o, w_j)\ L_i(\mathrm{p}, w_j)\ |\cos\theta_j|}{p(w_j)}}
\]</p>

Directions \\(w_j\\) are sampled from a distribution with respect to solid angle that has a probability density function (PDF) of \\(p(w_j)\\). This way we sample rays in directions \\(w_j\\) with respect to solid angle using uniformly distributed random variables which are mapped to discrete random variables, in this case, solid angle as you can see in the picture below.

<img src="/assets/images/bothsampling-1.png" alt="" width="600" height="272" />

Once we can sample rays, we start implementing a simple rendering integrator called Ambient Occlusion. This integrator considers that every point of a surface receives uniform light from all directions. Some points will be darker than others due to occlusions.

<img  src="/assets/images/show-ao.png" alt="" width="768" height="768" />

It is necessary also to implement how to sample different lights present in the scene. So we have to choose a point from surfaces of lights using a sampling distribution with respect to surface area.

Having these parts implemented we can now implement a simple rendering integrator called Direct Lighting. This integrator instead of sampling rays on the hemisphere from a point of the surface, it samples points from light sources and checks if they are visible from a point of the surface. Knowing if a point of the surface is visible from a point of the light, then we can compute its radiance that will finally be seen on screen.

<img  src="/assets/images/show-directs.png" alt="" width="800" height="600" />

But there are other materials that do not emit only a diffuse reflection. We also can consider mirrors that have a specular behaviour or glasses which we could say are a dielectric material. Using the definition of how reflection works for specular materials and Snell's law and Fresnel equations for dielectrics we can know the radiance emitted from these materials and show them. Considering this we have implemented a Whitted-style integrator.

<img  src="/assets/images/show-diel.png" alt="" width="800" height="600" />

With all this implemented, we can now implement a path-tracing integrator called Next Event Estimation. This integrator computes a brute force path-tracing algorithm that bounces randomly a ray and stops bouncing using a Russian Roulette heuristic or when it finds a light. Having this implemented we can see a high variance, to solve this, we combine this with the Direct Lighting algorithm.

<img  src="/assets/images/show-final.png" alt="" width="800" height="600" />

I won't upload this code because it is part of an educational framework with exercises and I would be revealing the answers and helping to cheat. If you are very interested in the implementation you can <span style="text-decoration: underline;"><a href="mailto:{{ site.email | encode_email }}">send me an email</a></span> or visit <a href="https://wjakob.github.io/nori/"><span style="text-decoration: underline;">Nori</span></a>.
