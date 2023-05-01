---
title: "Maya and Blender interpolation tool"
date: 2020-09-01
youtube: "https://www.youtube.com/embed/7rXaIUY2ok0"
github: "https://github.com/joantolo/interpolation-maya-blender-tool"
tags:
  - Python
  - Maya
  - Blender
---

<!-- <div class="content_title"> Description </div> -->
During the advanced animation subject in my degree, I implemented a Blender tool applying what we were learning. First of all, knowing what keyframes were, to know more about how keyframes work in Blender I decided to apply different interpolation methods. These methods were linear interpolation, Hermite interpolation and Catmull-Rom interpolation.

Once these interpolations were implemented, it was also added the option to control the velocity of the object in the animation curve. First, it is needed to set constant this animation so you obtain the length of the curve. Then, knowing this length, you can use the reparametrization attribute with keyframes to control this velocity.

In that subject, we were learning a lot about rotations and quaternions so I decided to also implement interpolation of quaternions in this tool applying to quaternion keyframes a spherical linear interpolation.

Due to the nature of how this implementation was done, it was also possible to compute the tangent of the animation curve. Having this tangent, it was decided to compute a quaternion that orients the animated object to this tangent of the curve. This orientation was later improved allowing to have more control of the orientation by choosing an up direction.

Having all this implemented, now I can have great control of how keyframes work and different orientations considering the position animation.

After a few years since this was made, I have started to apply for job offers as a TD (Tool Developer). It was great that I had experience developing tools with Blender, but the truth is that nowadays, most animation studios use Maya. So I decided to port this tool I implemented for Blender to Maya.

I found out that although Maya and Blender are very similar, they have many differences too, so I had to learn a lot and change many things to be able to have this tool working in Maya.

So now I have experience developing tools for Blender and Maya. During these years I have learnt many other interpolation methods such as Splines or Bezier. Maybe in the future, I will add these interpolations, but for now, I think I have achieved the goal of this little project.
