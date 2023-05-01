---
title: "Forward kinematics and interpolation methods"
date: 2019-09-03
youtube: "https://www.youtube.com/embed/v8_c35hoDj8"
github: "https://github.com/joantolo/forward-kinematics-and-interpolations"
tags:
  - Python
---

<!-- <div class="content_title"> Description </div> -->
I did these works while I was studying the MSc in Computer Graphics, Virtual Reality and Games in the Advanced Animation subject. It made me understand the functionality of forward kinematics and different methods to interpolate that are very useful in many areas of computer graphics such as animation.

<span style="text-decoration: underline;">Forward kinematics</span><br />
This technique is used in robotics to move the end-effector of an articulated arm to a specific position. It is also used in games and animations. These "arms" are defined as a series of linked joints knowing their related position and rotation. These joints will have different degrees of freedom (DoF) depending on the nature of their movement.<br />
In this work, I have used the forward kinematics definition of Denavit-Hartenberg using matrices. Knowing the distance from the end-effector to the goal I compute its Jacobian matrix and solve a system to determine the rotation displacement of each joint.

<span style="text-decoration: underline;">Interpolation methods</span><br />
On the other hand, I have implemented some of the most popular interpolation methods that can be used to solve a great variety of problems in computer graphics. I implemented cubic Hermite interpolation, Lagrange interpolation, Spline interpolation, quadratic and cubic Bézier curves and Bézier surface.
