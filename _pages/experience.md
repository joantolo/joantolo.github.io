---
permalink: /experience/
title: "EXPERIENCE"
---

{% assign date_format = site.data.experience.date_format | default: "%B %Y" %}

<div class="custom-experience">
  <a href="/assets/CV_JoanTorres.pdf" class="menu-cv">Download CV</a>

  <div class="experience__second__title">Laboral and educational background</div>

  {% for experience in site.data.experience.main %}
  <div class="experience__element">
    <div class="experience__left">
      <div class="experience_img">
        <img src="{{ experience.img }}">
      </div>
    </div>
    <div class="experience__right">
      <div class="experience__title">
      {{ experience.title }}, {{ experience.date-start | date: date_format }} - {{ experience.date-end | date: date_format }}
      </div>
      <div class="experience__subtitle">{{ experience.subtitle}}</div>
      <div class="experience__excerpt">{{ experience.excerpt }}</div>
    </div>
  </div>
  {% endfor %}
</div>

<div class="custom-experience">
  <div class="experience__element">
    <div class="experience__left"></div>
    <div class="experience__right">
      <div class="experience__cv">
        <a href="/assets/CV_JoanTorres.pdf">Download CV</a>
      </div>
    </div>
  </div>
</div>
