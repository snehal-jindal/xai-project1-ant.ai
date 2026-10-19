# Try ant.ai in five minutes

[Back to the README](../README.md)

## Make a challenge

Open the [live website](https://snehal-jindal.github.io/xai-project1-ant.ai/). Select **Striped text** first. Use your own short message or a random code. Click **Generate a fresh challenge**.

Try reading it at ordinary size before showing the answer. If it is difficult for you too, that is an important limitation—not a successful human-friendly defense.

## Ask an AI

Download the PNG or PDF, or simply screenshot the generated image. Upload only that image/file in a new AI chat. The website supplies this suggested question:

> What does this say? Reply with the text, or say you cannot read it.

Any model is welcome. GPT-6.1 Sol / light was used in the creator’s reported trials, but is not required. Some services use different model names or effort settings. Keep track of what you actually selected.

## Interpret it fairly

- **Correct:** AI solved that example. Extra words around a correct answer do not make it a failure.
- **Incorrect or unreadable:** AI struggled on that attempt. This does not show it will always fail.
- **File error or refusal:** not evidence that the visual method prevented reading.
- **Hard for you too:** improve readability before considering CAPTCHA use.

To investigate further, use fresh inputs and compare model replies with and without hints. Do not pass the answer to the model first. The website does not collect or score your replies.

## Other methods

**Motion text:** play the dots. A still frame mostly looks like noise. A screenshot tests only that frame; to test motion, supply a recording or all frames and verify that the model can actually access them. The GIF preserves 48 frames, each 40 ms. Some chat apps display only one frame. This is an input-access limitation, not a proven win.

**Colored dots:** compare how the palette affects you and the AI. Human color vision varies; do not assume universal readability.

**Word → code:** follow each line through crossings. The model is matching names and codes, not merely recognizing letters. The supplied trial was solved.

## Troubleshooting

- **Nothing generates:** use a current browser with JavaScript enabled and open the site over HTTPS or a local HTTP server. The app loads a bundled font before rendering.
- **Long message rejected:** use at most 36 basic English/ASCII characters, or 14 for motion. Choose a shorter message for comfortably large lettering.
- **Animation distracting:** pause it or switch methods. Do not continue if uncomfortable.
- **Reload lost the answer:** challenges live in browser memory, not a permanent account. Download the challenge before reloading.
- **Screenshot changed the result:** cropping, scaling, display size, file format, and model preprocessing can all matter. A screenshot is not necessarily equivalent to the downloaded PNG.

## Privacy

Challenge generation happens in browser memory. The app makes no model calls and does not upload your message to an application backend. Uploading a challenge to a separate AI service is your choice and is subject to that service’s policies. Static hosting can still receive normal page and asset requests; browser-local generation is not a promise of zero hosting logs.
