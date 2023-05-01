---
title: "Jenga game using augmented reality"
date: 2020-02-11
youtube: "https://www.youtube.com/embed/fTGVCOInLuY"
github: "https://github.com/joantolo/jenga-augmented-reality"
tags:
  - Unity
  - Vuforia
---

<!-- <div class="content_title"> Description </div> -->
This is one of the first games I made using Unity. It was developed while I was studying in college.

I learned a lot about how the Unity editor and C# scripts work. I managed the flow of the events of the game using a state machine which I didn't know much about at that time. To make it more fun I used different blocks using their colour so you have to take a specific block depending on its colour.

Once the Jenga game was implemented to play using a mouse I decided to implement  a different model of Jenga using augmented reality techniques. In that moment I used Vuforia due to what offers with its AR markers. The way of taking blocks is firing a ball to the block and then pull it like a fishing rod.

If I had to implement this again, the main thing I would change would be to use a SDK as ARCore or ARKit in Unity, that way it would be an augmented reality game without the need of markers which I think that is how most of AR applications nowadays work.
