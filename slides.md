---
theme: ./slidev-theme-baum
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
author: Hendrik Wallbaum
info: |
  ## Medieval Strategies for Cyber Security.
drawings:
  persist: false
#transition: slide-left

layout: intro
---

# <Emoji label="Unicorn">🦄</Emoji> The first Prompticorn

---
layout: simple-intro
---

# <Emoji label="Unicorn">🦄</Emoji> The first Prompticorn

---
layout: speaker
speakerImage: /assets/speaker.png
---

# Hendrik Wallbaum

Developer for fun <Emoji>🧑‍💻</Emoji>

GenAi Enthusiast <Emoji>🤖</Emoji>

---
layout: iframe
url: https://prompticorn.edgez.live/
---

<!-- 
Display Gallery of Prompticorn.
-->

---
layout: iframe-left
url: https://prompticorn.edgez.live/
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

# Basic Flow

<FlowDiagram />

<!-- 
- Verify prompt first
- Then create corresponding response
- Mention that AI decides what happens next, not yet how
 -->

---
layout: image-right
image: /assets/handover-transparent.png
---

# Handing over UI

<v-click>

### 1. Markers

Special text in response that you parse to display UI.

</v-click>
<v-click>

### 2. Function Calling

Specify functions ChatGPT can call to update your UI.

</v-click>
<v-click>

### 3. Generating UI

GenAI returns actual DOM strings to use.

</v-click>


<!--
- We used markers
- Function calling way to cumbersome and imprecise

Whimsical, watercolors illustration of a human handing over control sticks to a robot which takes them with pride --ar 8:9 --p
-->

---

# Example interaction

<!-- 
  There is a bug with clicks that makes the code always be there on an initial load…
  Thus, opting to have code be there by design :/
-->

> a purple unicorn

```txt {0|1|3-5|7|9|all}
Your prompt is **acceptable** but could definitely use a bit of magic dust to make it truly enchanting! 🦄✨

1. **Add Visual Descriptors**: …
2. **Set the Scene**: …
3. **Include Mood and Style**: …

Try adding these elements to your prompt and watch the magic unfold! 🪄

{{NEEDS_IMPROVEMENT}}
```

<v-click>

<img class="max-h-12" alt="Refine Prompt button" src="/assets/keep-refining.png" />

</v-click>

<!-- 
Raw response:
Your prompt is **acceptable** but could definitely use a bit of magic dust to make it truly enchanting! 🦄✨\n\n1. **Add Visual Descriptors**: Describe the unicorn's appearance in more detail, like the color of its mane, tail, and any special features such as a glittery horn or sparkling eyes.\n2. **Set the Scene**: Where is this purple unicorn? In a mystical forest, atop a rainbow, or under a starry sky? Setting adds context and depth.\n3. **Include Mood and Style**: Indicate the atmosphere (whimsical, mysterious, serene) and any artistic style you prefer (cartoon, realistic, fantasy art).\n\nTry adding these elements to your prompt and watch the magic unfold! 🪄\n\n{{NEEDS_IMPROVEMENT}
 -->

---
layout: image-right
image: /assets/techstack-transparent.png
---

# TechStack

<v-click>

- React
- Next
- Vercels [ai-sdk](https://sdk.vercel.ai/)
- DALL-E 3
- ChatGPT 4o-mini
</v-click>

---

# useChat from ai/react

```typescript{0|5|5,8-13|5,15-18|all}
'use client';
import { useChat } from 'ai/react';

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({});
  return (
    <>
      {messages.map(message => (
        <div key={message.id}>
          {message.role === 'user' ? 'User: ' : 'AI: '}
          {message.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input name="prompt" value={input} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
```

<!-- 
This is somewhat legacy reasoned. When we started, the rsc parts of ai where not yet available.

Basic example at: https://sdk.vercel.ai/docs/ai-sdk-ui/chatbot
 -->

---

# Marker Parsing

```typescript{0|1,16|2-5|7-11,14-15|2-5,12-13|all}
export const BotChatMessage = ({message, userPrompt}: ChatMessageProps) => {
  const regexMarker = /{{.+?}}/gm.exec(message.content)
  const marker: MarkerType | null = regexMarker
    ? (regexMarker[0].replace('{{', '').replace('}}', '') as MarkerType)
    : null

  return (
    <GenericChatMessage
      message={message.content.replace(/^.*?{{.*$/gm, '')}
      username="Prompticorn"
    >
      {marker === 'NEEDS_IMPROVEMENT' && ( … )}
      {marker === 'IMAGE_GENERATION' && ( … )}
    </GenericChatMessage>
  )
}
```


---
layout: image-big
image: /assets/unicorn-transparent.png
---

<!-- Resting point for transition to backend code -->

---

# Backend

```typescript{0|1|3-7|9-15|17-21|all}
const { messages } = await req.json()

const allMessages: CoreMessage[] = [{
    role: 'system',
    content: promptHelperPrompt,
  }, ...messages,
]

if (!isImagePrompt) {
  allMessages.push({
    role: 'system',
    content:
      'The last user message was not an image prompt. Kindly remind the user that you only accept image prompts 😊 Note: remember that you never help to write image prompts!',
  })
}

const result = await streamText({
  model: gpt4oMini,
  messages: allMessages,
})
return result.toDataStreamResponse()
```

---

# Prompting

```typescript{0|1-3|4-10|11-18|all}
export const promptHelperPrompt = `You are the Prompt Helper "Prompticorn" 🦄.
Your job is to help users improve the prompts they might provide to an image generation GenAI tool.
This you do in a friendly and playful fashion.

# Input
…

# Process
…

# Feedback Format

- Quality indicator
- Up to three suggestions
- Encouragement
- Stop Marker

Note: …

Continued on next slide…`
```

---

# Prompting continued

```typescript{0|1-12|12-14|all}
`## Stop Markers

Lastly, if the users prompt is already excellent and only if it already is excellent: 
end your message with special line that contains ONLY "{{IMAGE_GENERATION}}" (without the ").

If the prompts still needs improving, end your message with a special line
that contains ONLY "{{NEEDS_IMPROVEMENT}}" (without the ").

Available stop markers:
- "{{IMAGE_GENERATION}}"
- "{{NEEDS_IMPROVEMENT}}"

${imagePromptGuidelines}`
```


---
layout: image-left
image: /assets/qr.png
---

# The End <Emoji>🏁</Emoji>

<a href="https://hendrikwallbaum.de">hendrikwallbaum.de</a>

<Emoji>⬅️</Emoji> Scan for LinkedIn
