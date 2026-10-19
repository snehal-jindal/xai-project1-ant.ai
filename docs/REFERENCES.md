# Research & credits

[Back to the README](../README.md)

These resources informed the project. Their published results are not ant.ai’s results, and linked research is not a claim that the public app implements each full system.

| Resource | How it relates |
| --- | --- |
| [ArmorOCR, Appendix A](https://arxiv.org/html/2608.20122v1) | Prior art for pattern-based lettering, including changes in line direction. Striped text as a category is not claimed novel. |
| [Ghost Font — Eric Lu / Mixfont](https://www.mixfont.com/ghost-font) | Inspiration for motion/noise text and a CAPTCHA application. Its generator and misleading decoy-message mechanism were not copied. |
| [Time Blindness / SpookyBench](https://arxiv.org/abs/2505.24867) | Motion-defined forms and words; informs the opposing-motion noise experiment. |
| [BlindTest](https://arxiv.org/abs/2407.06581) | Motivation for testing visual connections rather than only text recognition. |
| [MapTrace](https://arxiv.org/abs/2512.19609) | Context on improving line-tracing ability; a reason not to assume models cannot follow connections. |
| [Breaking reCAPTCHAv2](https://arxiv.org/abs/2409.08831) | AI solving of the studied challenge setup; does not establish that all contemporary CAPTCHAs are obsolete. |
| [Emerging image/motion CAPTCHAs: vulnerabilities and countermeasures](https://spies.engr.tamu.edu/emerging-image-motion-captchas-vulnerabilities-of-existing-designs-and-countermeasures/) | Prior attacks on motion-based challenges, including combining visual information over time. |
| [Cloudflare Turnstile documentation](https://developers.cloudflare.com/cloudflare-challenges/challenge-types/turnstile/) | Anti-bot systems involve browser signals and server checks, not only a visual puzzle. |
| [W3C: Inaccessibility of CAPTCHA](https://www.w3.org/TR/turingtest/) | Accessibility trade-offs and the need for alternatives. |

## Software and assets

- [gifenc](https://github.com/mattdesl/gifenc): GIF encoding, MIT.
- [jsPDF](https://github.com/parallax/jsPDF): PDF export, MIT; bundled dependencies retain their own licenses.
- [esbuild](https://github.com/evanw/esbuild): JavaScript bundling, MIT.
- Bitstream Vera Bold: bundled font; [license](../dist/fonts/LICENSE.txt).
- Full dependency notices: [`dist/software-licenses.txt`](../dist/software-licenses.txt), with additional bundled legal comments in `dist/lab.js`.
- Trial screenshots: supplied by Snehal Jindal, with intended answers confirmed in the project conversation. No participant dataset or independent annotation study is claimed.
- Implementation, research assistance and drafting used AI assistance. The project narrative includes failures and limitations rather than treating generated claims as experimental proof.

## Attribution boundary

The project does not claim ownership of the underlying research, third-party software, model outputs, or platform branding. A custom implementation or a different application does not by itself establish a novel security invention.
