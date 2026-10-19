# Findings, evidence and limits

[Back to the README](../README.md)

## Question

Can a short visual challenge remain readable to a person while causing an AI reading error—and does that result survive hints, new inputs, different models, and access to the complete media?

The current contribution is a working educational/research playground and a documented series of preliminary cases. It is not a representative evaluation of all models or bots.

## Selected creator-reported trials

These screenshots were supplied by the creator for trials on October 17, 2026. The intended text comes from the creator’s account; the screenshots show the replies. They do not independently establish model identity, effort settings, exact original-file bytes, or all earlier turns. Intended settings were GPT-6.1 Sol / light.

| Case | Original | Reply | Interpretation |
| --- | --- | --- | --- |
| 1: stripes, general pattern clue | I love AI | I break AI | Wrong reading. Already had a general clue—not a completely unhinted test. |
| 2: same example, stripe-specific hint | I love AI | I love AI | Correct after assistance. This is a follow-up, not an independent trial. |
| 3: fresh striped code | 3O23EH | 38AG58EH | Wrong reading. The second original character is letter O. |
| 4: striped short name | dr bent | dr toast | Wrong reading. |
| 5: striped short word | hi | hi | Correct. |
| 6: still from moving-dot method | hi | Could not reliably read | Single-frame limitation; not a full-motion resistance result. |
| 7: colored dots | hi | hi | Correct. |
| 8: word-to-code | Five connections | Five returned matches, confirmed correct by creator | No blocking success reported. |

Open the eight expandable screenshots on the website, or see [`evidence/trials.json`](../evidence/trials.json) for file paths and SHA-256 hashes. Images are in `dist/lab-assets/`. A hash identifies the supplied screenshot, not the unavailable original challenge bytes.

**Do not turn this selection into a “percent blocked.”** Inputs, prompts and assistance differ, cases 1/2 share context, and the selection is neither random nor exhaustive. No independent human solve-time/accuracy study was completed. “Readable to a person” has only informal creator feedback, not a general-population measurement.

## Earlier attempts and challenges

1. **Document/text-layer tricks:** reading a rendered PDF page could bypass obstacles in its original structure. In an early test the AI converted a PDF to PNG and recovered the text. Hiding machine-readable text is not enough when the page is visible.
2. **Stronger colors:** some variants made reading difficult for the creator. Reducing model readability at the cost of human usability missed the intended goal.
3. **Stripes:** wrong readings were encouraging, but simple words and useful hints exposed weaknesses. Earlier project records also reported recovering all ten facts across two larger striped pages under different settings.
4. **Motion:** an unreadable frame is easy to demonstrate, but it omits the signal people use. Earlier tool-assisted tests in the project recovered three other moving examples. Combining frames is a known attack on motion CAPTCHA.
5. **Connections:** earlier experiments reported 15 correct name/code assignments; the latest creator-supplied screenshot was also confirmed correct. No success is claimed here.
6. **Model-specific optimization:** a Florence-focused branch was retired because its results did not transfer reliably to the user’s target workflow. It is not part of this browser app or evidence selection.

The historical totals above provide context from prior project records. This repository does not bundle the entire retired Python pipeline or claim to reproduce those historical model runs. The eight indexed screenshots are the primary directly inspectable trial evidence here. Reproduction of the current app means recreating fresh browser challenges, not recreating closed-model behavior on a particular date.

## Current browser port

The online version keeps the four mechanisms but uses canvas rendering, bundled Vera Bold, browser randomness, gifenc, and jsPDF. It is not byte-identical to the original Python-rendered files. A successful app-generation test does not establish any AI-blocking effect for the new files. They need new experiments.

Software checks include deterministic build/static checks, evidence hashes, and browser smoke checks. These establish that the app and files function—not that a CAPTCHA is secure. The publishing check verified 48 GIF frames at 640×160 with 40 ms duration, and a single-page raster PDF with no extractable text layer. All four generators and connection answer reveal worked in the standalone browser preview. Stripe generation also worked on the live host. Phone-width layout was inspected at 390×844; no cross-device matrix or exhaustive assistive-technology audit was performed.

## Responsible AI and security limits

- **Accessibility:** movement, pattern density, color vision, low vision, and cognitive differences can exclude people. An actual gate would require a usable alternative and broader studies.
- **Adaptive adversaries:** hints, retries, filters, zooming, line-direction separation, frame analysis, or training on examples may recover answers. No undefeatability is claimed.
- **Public generator:** answers and rendering logic are inspectable in client memory. There is no server-side secret, token, expiration, replay prevention or rate limit. Never use this app as a real security gate.
- **Deployment:** detecting a person is not the same as preventing automation. Modern anti-bot systems use more than visual puzzles.
- **Misuse:** do not apply these techniques to hide harmful content, bypass safeguards, or interfere with accessibility. Use fictional messages in controlled experiments.
- **Uncertainty:** model versions, settings and preprocessing change. Do not extrapolate one model’s failure to others—or even to the next attempt with the same model.

## Next useful evaluation

Use new random codes and varied words; retain every result, not just failures. Measure human accuracy, completion time and comfort at normal size. For models, log the exact model/settings, prompt, input hash, format, dimensions, first answer, and assisted answers separately. Compare clean text versus patterned text. For motion, evaluate still frames separately from full video/frames and recovery tools. Include more models and repeated runs; report counts and uncertainty only for genuinely comparable conditions.

The meaningful outcome is understanding when and why the methods fail—not simply accumulating wrong replies.
