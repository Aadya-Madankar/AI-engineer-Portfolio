import {E as h} from "./Layout.astro_astro_type_script_index_0_lang.DqdvXA6r.js";
import {g as r} from "./index.xlujcirQ.js";
import "./CSSPlugin.pkypRvgD.js";
class n extends h {
    constructor(t, i={}) {
        super(),
        this.video = t,
        this.options = {
            timeout: i.timeout || 15e3
        },
        this.isLoaded = !1,
        this.loadingIndicator = null,
        this.setupVideoSource(),
        this.init()
    }
    setupVideoSource() {
        const t = this.video.getAttribute("data-src-desktop")
          , i = this.video.getAttribute("data-src-mobile");
        let s;
        if (t && i)
            s = window.innerWidth < 768 ? i : t;
        else {
            const e = this.video.querySelector("source");
            e && (s = e.getAttribute("data-src") || e.getAttribute("src"))
        }
        if (s) {
            this.video.querySelectorAll("source").forEach(o => o.remove());
            const e = document.createElement("source");
            e.src = s,
            e.type = "video/mp4",
            this.video.appendChild(e)
        }
    }
    init() {
        if (this.video.readyState >= 3) {
            this.isLoaded = !0,
            this.trigger("loaded");
            return
        }
        this.video.preload = "auto",
        this.video.load(),
        this.addEventListeners(),
        this.startTimeout()
    }
    addEventListeners() {
        this.video.addEventListener("canplaythrough", () => {
            this.onVideoLoaded()
        }
        , {
            once: !0
        }),
        this.video.addEventListener("error", t => {
            this.onVideoError(t)
        }
        , {
            once: !0
        })
    }
    startTimeout() {
        this.timeout = setTimeout( () => {
            this.isLoaded || (console.warn("Video load timeout - proceeding anyway"),
            this.onVideoLoaded(!0))
        }
        , this.options.timeout)
    }
    onVideoLoaded(t=!1) {
        this.isLoaded || (this.isLoaded = !0,
        clearTimeout(this.timeout),
        this.width = this.video.videoWidth,
        this.height = this.video.videoHeight,
        this.trigger("loaded"))
    }
    onVideoError(t) {
        clearTimeout(this.timeout),
        console.error("Error loading video:", t),
        this.trigger("error")
    }
    waitForLoad() {
        return new Promise( (t, i) => {
            if (this.isLoaded) {
                t(this.video);
                return
            }
            this.on("loaded", () => t(this.video)),
            this.on("error", s => i(s.error))
        }
        )
    }
    destroy() {
        this.timeout && clearTimeout(this.timeout),
        this.off()
    }
}
class v {
    constructor(t, i, s) {
        this.instance = t,
        this.app = i,
        this.main = s,
        this.destroyed = !1,
        this.trigger = this.main.querySelector("[data-real-trigger]"),
        this.video = this.instance.querySelector(".video"),
        this.videoContainer = this.instance.querySelector(".video-container"),
        this.closeTrigger = this.instance.querySelector(".real_close"),
        this.input = this.instance.querySelector("input"),
        this.bottom = this.instance.querySelector(".real_bottom"),
        this.progressBar = this.instance.querySelector(".real_progress-bar"),
        this.durationEl = this.instance.querySelector(".real_duration"),
        this.currentTimeEl = this.instance.querySelector(".real_current-time"),
        this.controlParent = this.instance.querySelector(".real_controls"),
        this.control = this.instance.querySelector(".real_controls-icon"),
        this.quicks = {
            x: r.quickTo(this.control, "x", {
                duration: .3,
                ease: "power2"
            }),
            y: r.quickTo(this.control, "y", {
                duration: .3,
                ease: "power2"
            }),
            bottomX: r.quickTo(this.progressBar, "--x", {
                duration: .1,
                ease: "power2"
            })
        },
        this.instance.addEventListener("mousemove", e => {
            if (window.innerWidth < 1024)
                return;
            const o = (e.clientX / window.innerWidth - .5) * window.innerWidth
              , d = (e.clientY / window.innerHeight - .5) * window.innerHeight;
            this.quicks.x(o),
            this.quicks.y(d)
        }
        ),
        this.videoDuration = this.video.duration || 0,
        this.loaded = !1,
        this.mouseEnterOnce = !1,
        this.isPlaying = !1,
        this.shouldAutoplay = !1,
        this.currentBreakpoint = window.innerWidth < 768 ? "mobile" : "desktop",
        this.trigger.addEventListener("click", () => this.open()),
        this.trigger.addEventListener("mouseenter", () => this.load()),
        this.closeTrigger.addEventListener("click", () => this.close()),
        window.innerWidth < 1024 && setTimeout( () => this.load(), 1e3),
        document.addEventListener("keydown", e => {
            (e.key === "Escape" || e.key === "Esc") && this.close()
        }
        ),
        this.checkMobile(),
        this.app.on("resize", () => this.resize()),
        this.app.on("destroy", () => this.destroy())
    }
    load() {
        this.mouseEnterOnce || (this.videoLoader = new n(this.video),
        this.videoLoader.on("loaded", () => this.init()),
        this.mouseEnterOnce = !0)
    }
    init() {
        this.loaded = !0,
        this.video.muted = !0,
        this.input.max = this.video.duration,
        this.input.step = .01,
        this.input.value = 0,
        this.currentTimeEl.textContent = this.formatTime(0),
        this.durationEl.textContent = this.formatTime(this.video.duration),
        this.update(0),
        this.input.addEventListener("input", () => this.update()),
        this.video.addEventListener("timeupdate", () => this.updateOnVideo()),
        this.controlParent.addEventListener("click", () => this.togglePlayPause()),
        this.shouldAutoplay && this.instance.classList.contains("active") && (this.video.muted = !1,
        this.video.play(),
        this.isPlaying = !0,
        this.control.classList.add("active"),
        this.bottom.classList.remove("active"),
        this.app.scroll.lenis.stop(),
        this.shouldAutoplay = !1)
    }
    updateOnVideo() {
        const t = this.video.currentTime / this.video.duration;
        this.progressBar.style.setProperty("--progress", t),
        this.input.value = this.video.currentTime;
        const i = this.progressBar.offsetWidth
          , s = this.currentTimeEl.offsetWidth
          , e = t * i - s / 2
          , o = Math.max(0, Math.min(e, i - s));
        this.quicks.bottomX(o),
        this.progressBar.style.setProperty("--textWidth", `${s}px`),
        this.currentTimeEl.textContent = this.formatTime(this.input.value)
    }
    update() {
        const t = this.input.value / this.video.duration;
        this.progressBar.style.setProperty("--progress", t);
        const i = this.progressBar.offsetWidth
          , s = this.currentTimeEl.offsetWidth
          , e = t * i - s / 2
          , o = Math.max(0, Math.min(e, i - s));
        this.quicks.bottomX(o),
        this.progressBar.style.setProperty("--textWidth", `${s}px`),
        this.currentTimeEl.textContent = this.formatTime(this.input.value),
        this.video.currentTime = this.input.value
    }
    togglePlayPause() {
        this.loaded && (this.isPlaying ? (this.video.pause(),
        this.isPlaying = !1,
        this.control.classList.remove("active"),
        this.bottom.classList.add("active")) : (this.video.muted = !1,
        this.video.play(),
        this.isPlaying = !0,
        this.control.classList.add("active"),
        this.bottom.classList.remove("active")))
    }
    formatTime(t) {
        const i = Math.floor(t / 60)
          , s = Math.floor(t % 60);
        return `${i > 9 ? i : `0${i}`}:${s.toString().padStart(2, "0")}`
    }
    open() {
        this.instance.classList.add("active"),
        this.shouldAutoplay = !0,
        this.loaded ? (this.video.muted = !1,
        this.video.play(),
        this.isPlaying = !0,
        this.control.classList.add("active"),
        this.bottom.classList.remove("active"),
        this.app.scroll.lenis.stop()) : this.load()
    }
    close() {
        this.loaded && (this.video.pause(),
        this.video.muted = !0,
        this.isPlaying = !1,
        this.control.classList.remove("active"),
        this.app.scroll.lenis.start()),
        this.instance.classList.remove("active")
    }
    checkMobile() {
        window.innerWidth < 1024 ? this.instance.classList.add("mobile") : this.instance.classList.remove("mobile")
    }
    resize() {
        if (this.destroyed)
            return;
        this.checkMobile();
        const t = window.innerWidth < 768 ? "mobile" : "desktop";
        t !== this.currentBreakpoint && this.loaded && (this.currentBreakpoint = t,
        this.reloadVideoForBreakpoint())
    }
    reloadVideoForBreakpoint() {
        const t = this.isPlaying
          , i = this.video.currentTime;
        t && this.video.pause(),
        this.videoLoader && this.videoLoader.destroy && this.videoLoader.destroy(),
        this.loaded = !1,
        this.videoLoader = new n(this.video),
        this.videoLoader.on("loaded", () => {
            this.init(),
            i && (this.video.currentTime = i),
            t && (this.video.play(),
            this.isPlaying = !0,
            this.control.classList.add("active"),
            this.bottom.classList.remove("active"))
        }
        )
    }
    destroy() {
        this.destroyed || (this.destroyed = !0,
        this.videoLoader && this.videoLoader.destroy && this.videoLoader.destroy())
    }
}
export {v as default};
