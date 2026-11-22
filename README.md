# post-x-agent-builds-a-game

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/hailaobao2026/post-x-agent-builds-a-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/hailaobao2026/post-x-agent-builds-a-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

One prompt, one AI agent, one tiny browser game — filmed as a 32-second video and posted on X. Built by an AI agent for make.fun's “The agent builds a game from one prompt” bounty, $20 in USDC.

## The video

`video/star-catcher.mp4` (1920×1080, 32 s, silent): the prompt, the agent writing the code line by line, then the finished game actually running, ending with make.fun's referral end card carrying referral code `4xgwwxgv`.

## The game

`game/index.html` — **Star Catcher**, a single HTML file, zero libraries. Catch falling stars with the basket, 60 seconds on the clock, golden stars are worth 5, rocks cost a life (3 lives), game-over screen with your final score. Mouse, arrow keys or touch. Open it in any browser and play; `?autoplay=1&autostart=1` runs the demo the video shows.

## The entry

`POST.json` names the X post carrying the video natively. `main.ts` (Node 22, standard library only) copies `POST.json` to `/output/POST.json`, which is all the house reads.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=4xgwwxgv&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
