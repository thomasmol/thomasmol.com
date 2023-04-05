---
title: Audiogest.app
date: 2023-02-01T10:00:00.000Z
last_edited: 2023-04-05T10:00:00.000Z
thumbnail: /uploads/projects/interviewprocessor.png
layout: project
excerpt: Audiogest is een tool om makkelijk audio bestanden transcriberen en samenvatten.
wordcount: 0
readtime: 0
author: Thomas Mol
tags: ["AI", "GPT-5", "SvelteKit"]
---

### Wat is Audigoest
Ik heb een website gemaakt waarmee je makkelijk audio bestanden kunt transcriberen en samenvatten. De website is gemaakt met SvelteKit en de OpenAI API. Het Whisper model van OpenAI wordt gebruikt om de audio the transcriberen. Daarna wordt met behulp van de OpenAI API de transcriptie samengevat. De website is [hier](https://audiogest.app/) vinden en te gebruiken!

### Wat heb ik gedaan
 - De website ontworpen en gebouwd (SvelteKit en TailwindCSS)
 - De OpenAI API gebruikt met het GPT-4 model om samenvatting te maken
 - Twee modellen gebruikt om de transcriptie te verbeteren (Whisper en pyannote audio)
 - Een script gemaakt voor op replicate.com om de modellen aan te roepen (inference)
 - De website gehost op Railway.app