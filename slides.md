---
theme: ./slidev-theme-baum
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Medieval Strategies for Cyber Security.
drawings:
  persist: false
#transition: slide-left

layout: intro
---

# <Emoji label="Unicorn">🦄</Emoji> The first Prompticorn

by Hendrik Wallbaum

---
layout: simple-intro
---

# <Emoji label="Unicorn">🦄</Emoji> The first Prompticorn

by Hendrik Wallbaum


---
layout: speaker
speakerImage: /assets/speaker.png
---

# Hendrik Wallbaum

Developer for fun

GenAi Enthusiast

---
layout: iframe
url: http://prompticorn.edgez.live/
---

<!-- 
Display Gallery of Prompticorn.
-->

---
layout: iframe-left
url: http://prompticorn.edgez.live/
---

# Prompticorn

<v-clicks>

1. Suggest an image prompt
2. Get feedback
3. Iterate
4. Get approved by Prompticorn
5. Create your image <Emoji>🎉</Emoji>

</v-clicks>

---
layout: image-right
image: /assets/p-chat.png
---

# Prompticorn

1. Suggest an image prompt

---
layout: image-right
image: /assets/p-chat.png
---

# Prompticorn

1. Suggest an image prompt
2. Get feedback

---
layout: image-right
image: /assets/p-chat.png
---

# Prompticorn

1. Suggest an image prompt
2. Get feedback
3. Iterate

---
layout: image-right
image: /assets/p-chat.png
---

# Prompticorn

1. Suggest an image prompt
2. Get feedback
3. Iterate
4. Get approved by Prompticorn

---
layout: image-right
image: /assets/p-chat.png
---

# Prompticorn

1. Suggest an image prompt
2. Get feedback
3. Iterate
4. Get approved by Prompticorn
5. Create your image <Emoji>🎉</Emoji>

---

# System overview

<ContainerDiagram />

---

# Flows

<FlowDiagram />

<!-- 
- Verify prompt first
- Then create corresponding response
- Mention that AI decides what happens next, not yet how
 -->

---
layout: image-right
image: /assets/placeholder.jpg
---

# Handing over UI

<v-click>

## 1. Markers

Special text in response that you parse to display UI.

</v-click>
<v-click>

## 2. Function Calling

Specify functions ChatGPT can call to update your UI.

</v-click>
<v-click>

## 3. Generating UI

GenAI return actual DOM strings to use.

</v-click>


<!--
- We used markers
- Function calling way to cumbersome and imprecise

Whimsical, watercolors illustration of a human handing over control sticks to a robot which takes them with pride --ar 8:9 --p
-->

---

# Example interaction

<v-click>

> a purple unicorn
</v-click>

<v-click>

```txt {0|1|3-5|7|9|all}
Your prompt is **acceptable** but could definitely use a bit of magic dust to make it truly enchanting! 🦄✨

1. **Add Visual Descriptors**: …
2. **Set the Scene**: …
3. **Include Mood and Style**: …

Try adding these elements to your prompt and watch the magic unfold! 🪄

{{NEEDS_IMPROVEMENT}}
```
</v-click>

<v-clicks>
<img class="max-h-12" alt="Refine Prompt button" src="/assets/keep-refining.png" />
</v-clicks>

<!-- 
Raw response:
Your prompt is **acceptable** but could definitely use a bit of magic dust to make it truly enchanting! 🦄✨\n\n1. **Add Visual Descriptors**: Describe the unicorn's appearance in more detail, like the color of its mane, tail, and any special features such as a glittery horn or sparkling eyes.\n2. **Set the Scene**: Where is this purple unicorn? In a mystical forest, atop a rainbow, or under a starry sky? Setting adds context and depth.\n3. **Include Mood and Style**: Indicate the atmosphere (whimsical, mysterious, serene) and any artistic style you prefer (cartoon, realistic, fantasy art).\n\nTry adding these elements to your prompt and watch the magic unfold! 🪄\n\n{{NEEDS_IMPROVEMENT}
 -->

---

# Technologies

- React
- Next
- Vercels ai package
- DALL-E 3
- ChatGPT 4o-mini

---

# Code for using ai package

- Showcase frontend and backend

---

# Ideas

- C4 of the entire system with database

---
layout: image-left
image: /assets/qr.png
---

# The End <Emoji>🏁</Emoji>

<a href="https://hendrikwallbaum.de">hendrikwallbaum.de</a>

<Emoji>⬅️</Emoji> Scan for LinkedIn
