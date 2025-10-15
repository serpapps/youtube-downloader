# How to Download YouTube Videos for Free with yt-dlp


## 1. The Basic Command

For most public YouTube videos, this works fine:

```bash
yt-dlp -f "bv*+ba/best" \
  --merge-output-format mp4 \
  "https://www.youtube.com/watch?v=VIDEO_ID"
```

* `-f "bv*+ba/best"` → pick best video + best audio.
* `--merge-output-format mp4` → final file is MP4 even if YouTube offers WebM.

---

## 2. Why Downloads Sometimes Fail (403 Errors)

YouTube serves every video in **multiple delivery protocols**:

* **DASH (default)** → uses `videoplayback?...range=...` URLs.

  * Pros: more quality choices.
  * Cons: sometimes 403s if a range expires.

* **HLS (m3u8 playlists)** → chunked `.ts`/`.mp4` streams.

  * Pros: more resilient, rarely 403s.
  * Cons: fewer quality tiers in some cases.

👉 That’s why you sometimes see:

```
ERROR: unable to download video data: HTTP Error 403: Forbidden
```

The fix is to have **fallback commands** to switch protocols and adjust retry behavior.


## 3. Command Sequence You Should Try

### 🔹 Step 1: Normal DASH Download (default)

```bash
yt-dlp -f "bv*+ba/best" -N 16 \
  --merge-output-format mp4 \
  "https://www.youtube.com/watch?v=VIDEO_ID"
```

* `-N 16` → download 16 fragments at once (faster).
* ✅ Try this first — usually works.

---

### 🔹 Step 2: Force HLS if DASH 403s

```bash
yt-dlp -f "bv*[protocol=m3u8]+ba[protocol=m3u8]/best" \
  --hls-prefer-native -N 16 \
  --merge-output-format mp4 \
  "https://www.youtube.com/watch?v=VIDEO_ID"
```

* Switches to `.m3u8` streams.
* ✅ Best fallback when DASH fails.


### 🔹 Step 3: Add Stronger Retry Logic

```bash
yt-dlp -f "bv*[protocol=m3u8]+ba[protocol=m3u8]/best" \
  --hls-prefer-native -N 16 \
  --retries 20 --fragment-retries 100 \
  --merge-output-format mp4 \
  "https://www.youtube.com/watch?v=VIDEO_ID"
```

* Retries aggressively if any chunk fails.
* ✅ Good for long/high-bitrate videos.

---

### 🔹 Step 4: Use aria2c for Maximum Resilience

First install aria2:

```bash
brew install aria2
```

Then run:

```bash
yt-dlp -f "bv*+ba/best" \
  --downloader aria2c \
  --downloader-args "aria2c:-x 16 -s 16 -k 1M --max-tries=0 --retry-wait=5" \
  --merge-output-format mp4 \
  "https://www.youtube.com/watch?v=VIDEO_ID"
```

* `-x 16 -s 16` → 16 parallel connections.
* Retries indefinitely until the file completes.
* ✅ Almost bulletproof, even on unstable networks.

---

## 4. Extra Tips

* **Clear cache if signatures go stale:**

  ```bash
  yt-dlp --rm-cache-dir
  ```

* **Age-restricted or region-locked videos:**
  Use cookies from your browser:

  ```bash
  yt-dlp --cookies-from-browser "chrome:Default" "URL"
  ```

* **Specific resolution:**

  ```bash
  yt-dlp -f "bv*[height=1080]+ba/best" "URL"
  ```

---

## ✅ Summary

* **yt-dlp is the tool to use** for YouTube — there isn’t a better maintained alternative.
* Sometimes downloads 403 mid-way because YouTube’s CDN rejects DASH requests.
* Solution: keep a **4-step playbook**:

  1. Normal DASH with concurrency.
  2. HLS fallback.
  3. HLS + retries.
  4. aria2c external downloader.

With this sequence, you’ll succeed in almost every case.

Great question 👍

Unfortunately, yt-dlp itself doesn’t have a built-in *“try this, and if it fails, try that”* fallback sequence. It will either succeed or exit with an error. But you **can** string your four approaches together in one shell command using `||` (OR chaining).

That way, if the first command fails, the shell runs the next one automatically.

---

# One-liner “all in one” fallback command

```bash
yt-dlp -f "bv*+ba/best" -N 16 --merge-output-format mp4 "https://www.youtube.com/watch?v=VIDEO_ID" \
|| yt-dlp -f "bv*[protocol=m3u8]+ba[protocol=m3u8]/best" --hls-prefer-native -N 16 --merge-output-format mp4 "https://www.youtube.com/watch?v=VIDEO_ID" \
|| yt-dlp -f "bv*[protocol=m3u8]+ba[protocol=m3u8]/best" --hls-prefer-native -N 16 --retries 20 --fragment-retries 100 --merge-output-format mp4 "https://www.youtube.com/watch?v=VIDEO_ID" \
|| yt-dlp -f "bv*+ba/best" --downloader aria2c --downloader-args "aria2c:-x 16 -s 16 -k 1M --max-tries=0 --retry-wait=5" --merge-output-format mp4 "https://www.youtube.com/watch?v=VIDEO_ID"
```

---

## 🔍 How it works

* `cmd1 || cmd2 || cmd3 ...`
  Shell runs `cmd1`.

  * If it **succeeds** → stop.
  * If it **fails (non-zero exit code)** → run the next one.

So this tries:

1. **Normal DASH with concurrency**.
2. **HLS fallback**.
3. **HLS with retries**.
4. **aria2c external downloader**.

Whichever works first will complete the download.



Yep — you can chain them, but it’s cleaner to try **max-quality (MKV, AV1/VP9 OK)** first, then fall back to **MP4-only** variants, with HLS + retries, and finally aria2c. Here’s a single paste-and-go you can reuse.

### One-liner (Zsh/Bash)

```bash
VIDEO_URL="https://www.youtube.com/watch?v=S-mow-gu2XA"; \
yt-dlp -N 16 -f "bestvideo*+bestaudio/best" \
  --remux-video mkv "$VIDEO_URL" \
|| yt-dlp -N 16 -f "bv*+ba/best" \
  --http-chunk-size 10M --retries 20 --fragment-retries 100 --force-ipv4 \
  --remux-video mkv "$VIDEO_URL" \
|| yt-dlp -N 16 -f "bv*[protocol=m3u8]+ba[protocol=m3u8]/best" \
  --hls-prefer-native --retries 20 --fragment-retries 100 \
  --remux-video mkv "$VIDEO_URL" \
|| yt-dlp -N 16 -f "bv*[ext=mp4][vcodec*=avc1]+ba[ext=m4a]/best[ext=mp4]" \
  --merge-output-format mp4 "$VIDEO_URL" \
|| yt-dlp -f "bv*+ba/best" \
  --downloader aria2c \
  --downloader-args "aria2c:-x 16 -s 16 -k 1M --max-tries=0 --retry-wait=5" \
  --merge-output-format mp4 "$VIDEO_URL"
```

### What this does (in order)

1. **Max quality (DASH)** → grabs AV1/VP9 + best audio, remux to **MKV** (keeps 4K/HDR).
2. **DASH w/ tougher HTTP** → smaller chunks, retries, IPv4; still **MKV** so high tiers are allowed.
3. **Force HLS** → more resilient when DASH 403s; remux **MKV** (usually ≤1080p).
4. **MP4-only** → AVC + M4A for widest compatibility (often ≤1080p).
5. **Aria2c fallback** → segmented downloader with infinite retries; outputs **MP4**.

### Tips

* Change `VIDEO_URL` once; the chain reuses it.
* Want a specific res for MKV path? e.g., 2160p:
  `-f "bestvideo*[height=2160]+bestaudio/best"`.
* Add an output template if you want a specific filename/path:
  `-o "%(title)s.%(ext)s"`.
* If a password/exclamation ever appears in args, quote it with single quotes in zsh.
