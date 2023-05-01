---
title: "Face morphing using Delaunay triangulation"
date: 2019-10-17
youtube: "https://www.youtube.com/embed/e4S04azDNdw"
github: "https://github.com/joantolo/face-morphing-delaunay-triangulation"
tags:
  - Matlab
  - Delaunay triangulation
  - Image warping
---

<!-- <div class="content_title"> Description </div> -->
We can morph a source image to a target image smoothly as a linear interpolation between the pixel colours of both images, obtaining intermediate images. However, if we are trying to morph faces, the result will not be very suitable. That is why we use Delaunay triangulation in both images to establish the main parts we want to morph such as the eyes, mouth or jaw with points and Delaunay creates triangles. Then we interpolate these triangles (points) instead of directly interpolate pixels.

Once we have interpolated these points (intermediate points), we have to calculate what pixels from the intermediate image correspond to the pixels of the source image and do the same with the target image. This method is called backward warping.

<span>The steps are the following:</span>
<ul>
  <li><span data-preserver-spaces="true">Knowing the position of the points of the source image, the points position of the intermediate image and the colour of the pixels of the source image.</span></li>
   <li><span data-preserver-spaces="true">For each triangle, we calculate the affine transformation matrix that transforms the source points into the intermediate points.</span></li>
   <li><span data-preserver-spaces="true">Then, for each pixel of the intermediate image, we obtain what triangle it belongs to.</span></li>
   <li><span data-preserver-spaces="true">We apply the inverse affine transformation of its triangle to know the position of the source image pixel.</span></li>
   <li><span data-preserver-spaces="true">And the colour of that pixel will be the colour of the intermediate pixel.</span></li>
</ul>

We do the same with the target image.

This way we have two intermediate images, one having the source pixels and the other one having the target pixels. The last thing to do now is to linearly interpolate or blend these intermediate images to obtain a smooth morphing effect of these two images.

If I had to implement this again I would try to obtain these control points using a face recognition algorithm instead of setting them manually. Also, I would use the GPU to obtain these intermediate pixels due to the parallel nature of this problem getting a faster result. Finally, applying these techniques I would try to implement a simple program that creates deepfakes from an image and a video.
