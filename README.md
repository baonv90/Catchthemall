# Welcome to MerciApp Catch Them All

  

The goal here is to highlight each occurrence of a specific pattern.

  

**Estimated time: 1-2 hrs**

**Difficulty: Medium**

  

![](https://d3dehtdmp2rwcw.cloudfront.net/ms_331188/9oddEZU3M0msJ4kSyUzINauuvYegPE/Catch%2BThem%2BAll%2B2021-01-07%2B12%2BPM-11-42.jpg?Expires=1610026200&Signature=QNSywkjMPG17b4Wxt9un-RTQ3ttG8pBzqWIes9QxO1QqYHHFOoyqoKrk3TipfIr1V~pAnNfTq4lE4d4dm5JgA2SL79EBC7mPlU0qR6wuE5DEBurvhDi-q-TbQgbL9mdA3w73eWxfv2nqs0pzzkGMujUkb1Ug4IKfrYM65Tr0wlY5oGstvAme3XW2UC1hGNsN2p3ioWX4UO1o2hk0TrAR~u4SVjKjei0zejm-kKaYWa1t9j1NEkQW5I95oMt2nf-tYjb~dvTArqCGOVvPodxzpsIZjY6IWQiltx5T7NhZA9~fpq3kk0ZUctA7X5u8QSTb7sybZNWNuEpmU-ECgmYW7A__&Key-Pair-Id=APKAJBCGYQYURKHBGCOA)

  

## Getting started

  

This project is a basic React scaffold created via [create-react-app](https://github.com/facebook/create-react-app), with a single `App.js` component to handle the display. There is no Typescript, no SASS, no styled-components, no ESLint.

  

Please install [Prettier](https://prettier.io/); a basic `.prettier.json` file is included at the root.

  

Then run the local web server with:

  

```

yarn install && yarn start

```

  

## Goal

  

We want the highlight all occurrences of a specific pattern in an editable area, _as-the-user-types_.

  

- Optimization is appreciated but not key, first focus on getting something that works.

- If an occurrence is split between 2 lines due to a line break, we do not require to handle it properly.

  

Here's a basic video of the expected result: https://monosnap.com/file/IpfaSRzteH7Yo1PUz7IMqD88lfevYI

  

Your only starting point is `src/catcher.js`, there's no reason to update any other file. Though, you can create as many files as you need (class files, etc.), at the root folder or in a separate folder (better).

### Go further

Once you wrote your first line with at least an occurrence, hit enter multiple times so that the area becomes scrollable. Attempt to make your marker scroll as shown in this video: https://monosnap.com/file/1r7pgjEjF9nctVXDvqrkrgQYTmv8in.

If you need any help handling this case, install [MerciApp web extension](https://bit.ly/3k7mdKp), and inspect the area.

![Demo](https://d3dehtdmp2rwcw.cloudfront.net/ms_331188/nCwSYZoIK1Jd6NgKpUr9W9rKuTjZI2/Catch%2BThem%2BAll%2B2021-01-14%2B2%2BPM-55-10.jpg?Expires=1610634600&Signature=OoXgb1yrHMXCjlf3yVnbSFji5Ll3g2Mrea0gzIgwx7WVnc5otXRo-zqoswOvnsKz~UIXLHjo4i6tfBENEuCks5IuzRLcWJH~z2EoDKWF~VKAjDda3byrODY7cDrD0xCIj6OZbaN3eAWVZrXrfKlG0o7fjO8~XhEW05nwPLIvW90muQAXQQYbu-T9MFwj8hCTDKtbQWYUWBt0l3DHsWSLDTpJ1V-Me0lL-zpsR~4J2L4SE8sSFpq-VPEbaEbLuAuDgYNwYTSolrM1xuZ6NiLky2VxvTB6TbsSsDxdMLS5DQQjvdyA7s6kUc1Zf1l~4yRQvbocyvZz7bRplsnMsQuSlg__&Key-Pair-Id=APKAJBCGYQYURKHBGCOA)

![Hint](https://d3dehtdmp2rwcw.cloudfront.net/ms_331188/afGIMtEt9wtSpc3vRgDO7WvDXHWZA5/Excalidraw%2B2021-01-14%2B3%2BPM-13-02.jpg?Expires=1610634600&Signature=bgNkBSQx-NkoBqXAfiklpp1uM0rTtuxXcudcif9JOLvlZuTjuYE9TegJPQvqkqZUsCKfQzKuyiVJWZbFGqUKXD3Du~Z5zq-h9OEaoIq98ZfJ3N0By6WJsrIGr3ttg5pO2k8dnIPfCQP9FTHobw~uDl6w-61QGHHMHJju4Hn6d4E7pWN39L2ycTdxkSzUQFX7kWQvmW0yR4Mzlwt4PHKDeEnOy4BQWJYVf461ul~XyLWQCNLnDu0vxJPAxrhhn2x2iOFHXauLsB2C-eZtz2ijhukqcTsJsYHxh68Zop~MqFzju9eNh8tRNlFW~TNzcRGkVUoSmegnGbTOMdD7kmLDWg__&Key-Pair-Id=APKAJBCGYQYURKHBGCOA)

### Out of scope

- If you hit _Enter_, the div will get populated with some other div. Do not handle this case, just focus on a single-line text as shown in demo.
  

## Recommended steps

  

Here are a few steps that will help you achieve the goal. For each step, you'll get a basic description and some links that could be helpful.

  

### Disable native spellchecking

  

Browsers provide a native spellchecking system that will often conflict with our own markers, so let's prevent it from being triggered.

  

- https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck

  

### Monitor inputs

  

As we provide the user with an _as-you-type_ mechanism, any input in the area must be caught so that we can detect the target pattern. An input is a keystroke, a paste command, or any valid modification of the field content.

  

**In this project, we'll only handle basic content (raw content), with no children.** The div only contains raw text, and never children nodes/elements.

  

- https://www.w3schools.com/js/js_htmldom_eventlistener.asp

  

### Create ranges

  

Found at least an occurrence? Let's create ranges so that we can process their positions.

  

- https://developer.mozilla.org/en-US/docs/Web/API/Range

- https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

- https://developer.mozilla.org/en-US/docs/Web/API/Element/getClientRects

  

### Add an overlay

  

Now you've got your positions, you need to display your markers. Create a special div on top of the original area, and start adding markers on it. Be careful to disable interactions, so that the original area below remains fully operational.

  

## I'm stuck, what should I do?

  

Don't lose time. Open an issue on the project and assign it to Hervé or Éric; briefly describe the issue/situation, and what you already tried to overcome it.

  

## You're done?

  

Push your final commit on `master/` branch and tell one of our engineers (drop us a line at `tech@merci-app.com`) about it.
