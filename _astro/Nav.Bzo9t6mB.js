import {L as o} from "./LinkAnimation.BShULeRV.js";
import "./all.xlujcirQ.js";
import "./CSSPlugin.pkypRvgD.js";
import "./SplitText.Cpc1cBKW.js";
class c {
    constructor(e) {
        this.app = e,
        this.nav = document.querySelector("nav"),
        this.navBody = this.nav.querySelector(".nav_body"),
        this.sidebarBg = document.querySelector(".sidebar_bg"),
        this.temperatureElement = this.nav.querySelector("[data-temperature]"),
        this.timeElement = this.nav.querySelector("[data-time]"),
        this.weatherIcons = {
            sunny: this.nav.querySelector(".sunny"),
            cloudy: this.nav.querySelector(".cloudy"),
            rainy: this.nav.querySelector(".rainy"),
            moon: this.nav.querySelector(".moon")
        },
        this.mailParent = this.nav.querySelector(".nav_mail-parent"),
        this.mailElement = this.nav.querySelectorAll(".nav-mail"),
        this.copiedMessage = this.nav.querySelector(".mail-copied"),
        this.links = this.nav.querySelectorAll(".nav_link"),
        this.cta = this.nav.querySelector(".nav_cta"),
        this.mobClose = this.nav.querySelector(".mob-close"),
        this.links.forEach(t => new o(t,t.querySelectorAll("._20"),this.app,!0)),
        this.mailHover = new o(this.mailParent,this.mailElement,this.app,!0),
        this.init()
    }
    init() {
        this.fetchNewYorkTemperature(),
        this.updateNewYorkTime(),
        this.setupEmailCopy(),
        this.showChat(),
        setInterval( () => this.fetchNewYorkTemperature(), 6e5),
        setInterval( () => this.updateNewYorkTime(), 1e3)
    }
    showChat() {
        this.links[1].addEventListener("click", () => {
            this.cta.classList.add("active")
        }
        ),
        this.nav.addEventListener("mouseleave", () => {
            this.cta.classList.contains("active") && this.cta.classList.remove("active")
        }
        ),
        this.mobClose.addEventListener("click", () => {
            this.cta.classList.contains("active") && this.cta.classList.remove("active")
        }
        )
    }
    setupEmailCopy() {
        !this.mailParent || !this.mailElement || !this.copiedMessage || (this.copiedMessage.style.opacity = "0",
        this.copiedMessage.style.transform = "translateY(10px)",
        this.copiedMessage.style.transition = "opacity 0.3s ease, transform 0.3s ease",
        this.mailParent.addEventListener("click", async e => {
            e.preventDefault();
            const t = this.mailParent.dataset.mail;
            let i = !1;
            if (navigator.clipboard && window.isSecureContext)
                try {
                    await navigator.clipboard.writeText(t),
                    i = !0
                } catch (r) {
                    console.warn("Clipboard API failed, trying fallback:", r)
                }
            if (!i)
                try {
                    const r = document.createElement("textarea");
                    r.value = t,
                    r.style.position = "fixed",
                    r.style.left = "-999999px",
                    r.style.top = "-999999px",
                    document.body.appendChild(r),
                    r.focus(),
                    r.select();
                    try {
                        document.execCommand("copy"),
                        i = !0
                    } catch (a) {
                        console.error("Fallback copy failed:", a)
                    } finally {
                        r.remove()
                    }
                } catch (r) {
                    console.error("Failed to create fallback textarea:", r)
                }
            i ? (this.copiedMessage.style.opacity = "1",
            this.copiedMessage.style.transform = "translateY(0)",
            this.copiedTimeout && clearTimeout(this.copiedTimeout),
            this.copiedTimeout = setTimeout( () => {
                this.copiedMessage.style.opacity = "0",
                this.copiedMessage.style.transform = "translateY(10px)"
            }
            , 1e3)) : console.error("All copy methods failed")
        }
        ))
    }
    updateNewYorkTime() {
        const e = {
            timeZone: "America/New_York",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: !1
        }
          , t = new Date().toLocaleTimeString("en-US", e);
        this.timeElement && (this.timeElement.textContent = t)
    }
    async fetchNewYorkTemperature() {
        try {
            const a = await (await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${40.7128}&longitude=${-74.006}&current_weather=true&temperature_unit=fahrenheit`)).json();
            if (a.current_weather && a.current_weather.temperature !== void 0) {
                const s = Math.round(a.current_weather.temperature)
                  , n = a.current_weather.weathercode
                  , l = this.getWeatherDescription(n);
                this.updateTemperatureDisplay(s, l),
                this.updateWeatherIcon(n)
            }
        } catch (e) {
            console.error("Error fetching temperature:", e),
            this.updateTemperatureDisplay("--", "")
        }
    }
    getWeatherDescription(e) {
        return {
            0: "Sunny",
            1: "Mostly Sunny",
            2: "Partly Cloudy",
            3: "Overcast",
            45: "Foggy",
            48: "Foggy",
            51: "Drizzle",
            53: "Drizzle",
            55: "Drizzle",
            56: "Freezing Drizzle",
            57: "Freezing Drizzle",
            61: "Light Rain",
            63: "Rainy",
            65: "Heavy Rain",
            66: "Freezing Rain",
            67: "Freezing Rain",
            71: "Light Snow",
            73: "Snowy",
            75: "Heavy Snow",
            77: "Snow Grains",
            80: "Light Showers",
            81: "Showers",
            82: "Heavy Showers",
            85: "Light Snow",
            86: "Heavy Snow",
            95: "Thunderstorm",
            96: "Thunderstorm",
            99: "Thunderstorm"
        }[e] || "Unknown"
    }
    updateTemperatureDisplay(e, t="") {
        this.temperatureElement.textContent = `${e}° ${t}`
    }
    updateWeatherIcon(e) {
        if (!this.weatherIcons.sunny || !this.weatherIcons.cloudy || !this.weatherIcons.rainy || !this.weatherIcons.moon)
            return;
        Object.values(this.weatherIcons).forEach(i => {
            i && i.classList.add("hidden")
        }
        );
        const t = this.getWeatherIconType(e);
        this.weatherIcons[t] && this.weatherIcons[t].classList.remove("hidden")
    }
    getWeatherIconType(e) {
        const t = {
            timeZone: "America/New_York",
            hour12: !1,
            hour: "numeric"
        }
          , i = parseInt(new Date().toLocaleTimeString("en-US", t))
          , r = i < 6 || i >= 20;
        return e >= 0 && e <= 1 ? r ? "moon" : "sunny" : e >= 2 && e <= 48 ? "cloudy" : e >= 51 && e <= 99 ? "rainy" : r ? "moon" : "sunny"
    }
    addDebugControls() {
        !this.app.debug || !this.app.debug.active || (this.navBody && this.addNavBlurControls(),
        this.sidebarBg && this.addSidebarBlurControls())
    }
    addNavBlurControls() {
        const e = this.app.debug.gui.addFolder("Nav Blur Effect").close();
        this.blurConfig = {
            enabled: !0,
            showOutline: !1,
            enableMask: !0,
            blurAmount: 10,
            rotation: 13,
            topOffset: -150,
            leftOffset: -390,
            rightOffset: -80,
            heightExtra: 200,
            maskAngle: 270,
            maskCone: 90,
            gradientStop: 75,
            backgroundColor: "#dedede",
            backgroundTransparency: 10
        },
        e.add(this.blurConfig, "enabled").name("Enable Blur").onChange( () => this.updateBlurEffect()),
        e.add(this.blurConfig, "showOutline").name("Show Outline").onChange( () => this.updateBlurEffect()),
        e.add(this.blurConfig, "enableMask").name("Enable Mask").onChange( () => this.updateBlurEffect()),
        e.add(this.blurConfig, "blurAmount", 0, 50, 1).name("Blur Amount (px)").onChange( () => this.updateBlurEffect()),
        e.addColor(this.blurConfig, "backgroundColor").name("BG Color").onChange( () => this.updateBlurEffect()),
        e.add(this.blurConfig, "backgroundTransparency", 0, 100, 1).name("BG Transparency (%)").onChange( () => this.updateBlurEffect()),
        e.add(this.blurConfig, "rotation", -45, 45, .1).name("Rotation (deg)").onChange( () => this.updateBlurEffect());
        const t = e.addFolder("Position");
        t.add(this.blurConfig, "topOffset", -500, 100, 1).name("Top Offset").onChange( () => this.updateBlurEffect()),
        t.add(this.blurConfig, "leftOffset", -600, 0, 1).name("Left Offset").onChange( () => this.updateBlurEffect()),
        t.add(this.blurConfig, "rightOffset", -300, 100, 1).name("Right Offset").onChange( () => this.updateBlurEffect()),
        t.add(this.blurConfig, "heightExtra", 0, 500, 1).name("Height Extra").onChange( () => this.updateBlurEffect());
        const i = e.addFolder("Mask");
        i.add(this.blurConfig, "maskAngle", 0, 360, 1).name("Conic Start Angle").onChange( () => this.updateBlurEffect()),
        i.add(this.blurConfig, "maskCone", 0, 360, 1).name("Conic Span (deg)").onChange( () => this.updateBlurEffect()),
        i.add(this.blurConfig, "gradientStop", 0, 100, 1).name("Gradient Stop (%)").onChange( () => this.updateBlurEffect());
        const r = {
            export: () => {
                const s = `
/* CSS Variables for nav blur effect */
--nav-blur-amount: ${this.blurConfig.blurAmount}px;
--nav-blur-rotation: ${this.blurConfig.rotation}deg;
--nav-blur-top: ${this.blurConfig.topOffset};
--nav-blur-left: ${this.blurConfig.leftOffset};
--nav-blur-right: ${this.blurConfig.rightOffset};
--nav-blur-height: ${this.blurConfig.heightExtra};
--nav-blur-mask-angle: ${this.blurConfig.maskAngle}deg;
--nav-blur-mask-cone: ${this.blurConfig.maskCone}deg;
--nav-blur-gradient: ${this.blurConfig.gradientStop}%;
--nav-blur-bg-color: ${this.blurConfig.backgroundColor};
--nav-blur-bg-transparency: ${this.blurConfig.backgroundTransparency}%;
`;
                console.log("CSS Variables:", s),
                navigator.clipboard.writeText(s),
                console.log("✅ CSS variables copied to clipboard!")
            }
        };
        e.add(r, "export").name("Export CSS Variables");
        const a = {
            reset: () => {
                this.blurConfig.backgroundColor = "#dedede",
                this.blurConfig.backgroundTransparency = 10,
                this.blurConfig.blurAmount = 10,
                this.blurConfig.rotation = 13,
                this.blurConfig.topOffset = -150,
                this.blurConfig.leftOffset = -390,
                this.blurConfig.rightOffset = -80,
                this.blurConfig.heightExtra = 200,
                this.blurConfig.maskAngle = 270,
                this.blurConfig.maskCone = 90,
                this.blurConfig.gradientStop = 75,
                this.blurConfig.enabled = !0,
                this.blurConfig.showOutline = !1,
                this.blurConfig.enableMask = !0,
                this.updateBlurEffect(),
                e.updateDisplay()
            }
        };
        e.add(a, "reset").name("Reset to Defaults"),
        this.updateBlurEffect()
    }
    updateBlurEffect() {
        this.navBody && (this.blurConfig.enabled ? (this.navBody.style.setProperty("--nav-blur-display", "block"),
        this.navBody.style.setProperty("--nav-blur-amount", `${this.blurConfig.blurAmount}px`),
        this.navBody.style.setProperty("--nav-blur-rotation", `${this.blurConfig.rotation}deg`),
        this.navBody.style.setProperty("--nav-blur-top", this.blurConfig.topOffset),
        this.navBody.style.setProperty("--nav-blur-left", this.blurConfig.leftOffset),
        this.navBody.style.setProperty("--nav-blur-right", this.blurConfig.rightOffset),
        this.navBody.style.setProperty("--nav-blur-height", this.blurConfig.heightExtra),
        this.navBody.style.setProperty("--nav-blur-mask-angle", `${this.blurConfig.maskAngle}deg`),
        this.navBody.style.setProperty("--nav-blur-mask-cone", `${this.blurConfig.maskCone}deg`),
        this.navBody.style.setProperty("--nav-blur-gradient", `${this.blurConfig.gradientStop}%`),
        this.navBody.style.setProperty("--nav-blur-bg", `color-mix(in srgb, ${this.blurConfig.backgroundColor}, transparent ${this.blurConfig.backgroundTransparency}%)`)) : this.navBody.style.setProperty("--nav-blur-display", "none"),
        this.navBody.style.setProperty("--nav-blur-outline", this.blurConfig.showOutline ? "2px solid red" : "none"),
        this.blurConfig.enableMask ? this.navBody.style.setProperty("--nav-blur-mask", `conic-gradient(from ${this.blurConfig.maskAngle}deg at 0% 50%, transparent 0deg, black ${this.blurConfig.maskCone}deg, transparent ${this.blurConfig.maskCone}deg), linear-gradient(to bottom, #000 ${this.blurConfig.gradientStop}%, transparent 100%)`) : this.navBody.style.setProperty("--nav-blur-mask", "none"))
    }
    addSidebarBlurControls() {
        const e = this.app.debug.gui.addFolder("Sidebar Blur Effect").close();
        this.sidebarBlurConfig = {
            enabled: !0,
            showOutline: !1,
            enableMask: !0,
            blurAmount: 30,
            maskAngle: 270,
            maskCone: 90,
            gradientDirection: "right",
            gradientStop: 40
        },
        e.add(this.sidebarBlurConfig, "enabled").name("Enable Blur").onChange( () => this.updateSidebarBlurEffect()),
        e.add(this.sidebarBlurConfig, "showOutline").name("Show Outline").onChange( () => this.updateSidebarBlurEffect()),
        e.add(this.sidebarBlurConfig, "enableMask").name("Enable Mask").onChange( () => this.updateSidebarBlurEffect()),
        e.add(this.sidebarBlurConfig, "blurAmount", 0, 50, 1).name("Blur Amount (px)").onChange( () => this.updateSidebarBlurEffect());
        const t = e.addFolder("Mask");
        t.add(this.sidebarBlurConfig, "maskAngle", 0, 360, 1).name("Conic Start Angle").onChange( () => this.updateSidebarBlurEffect()),
        t.add(this.sidebarBlurConfig, "maskCone", 0, 360, 1).name("Conic Span (deg)").onChange( () => this.updateSidebarBlurEffect()),
        t.add(this.sidebarBlurConfig, "gradientDirection", ["right", "left", "top", "bottom"]).name("Gradient Direction").onChange( () => this.updateSidebarBlurEffect()),
        t.add(this.sidebarBlurConfig, "gradientStop", 0, 100, 1).name("Gradient Stop (%)").onChange( () => this.updateSidebarBlurEffect());
        const i = {
            export: () => {
                const r = `
/* CSS Variables for sidebar blur effect */
--sidebar-blur-amount: ${this.sidebarBlurConfig.blurAmount}px;
--sidebar-blur-mask-angle: ${this.sidebarBlurConfig.maskAngle}deg;
--sidebar-blur-mask-cone: ${this.sidebarBlurConfig.maskCone}deg;
--sidebar-blur-gradient-dir: ${this.sidebarBlurConfig.gradientDirection};
--sidebar-blur-gradient: ${this.sidebarBlurConfig.gradientStop}%;
`;
                console.log("CSS Variables:", r),
                navigator.clipboard.writeText(r),
                console.log("✅ CSS variables copied to clipboard!")
            }
        };
        e.add(i, "export").name("Export CSS Variables"),
        this.updateSidebarBlurEffect()
    }
    updateSidebarBlurEffect() {
        this.sidebarBg && (this.sidebarBlurConfig.enabled ? (this.sidebarBg.style.setProperty("--sidebar-blur-display", "block"),
        this.sidebarBg.style.setProperty("--sidebar-blur-amount", `${this.sidebarBlurConfig.blurAmount}px`),
        this.sidebarBg.style.setProperty("--sidebar-blur-mask-angle", `${this.sidebarBlurConfig.maskAngle}deg`),
        this.sidebarBg.style.setProperty("--sidebar-blur-mask-cone", `${this.sidebarBlurConfig.maskCone}deg`),
        this.sidebarBg.style.setProperty("--sidebar-blur-gradient-dir", this.sidebarBlurConfig.gradientDirection),
        this.sidebarBg.style.setProperty("--sidebar-blur-gradient", `${this.sidebarBlurConfig.gradientStop}%`)) : this.sidebarBg.style.setProperty("--sidebar-blur-display", "none"),
        this.sidebarBg.style.setProperty("--sidebar-blur-outline", this.sidebarBlurConfig.showOutline ? "2px solid red" : "none"),
        this.sidebarBlurConfig.enableMask ? this.sidebarBg.style.setProperty("--sidebar-blur-mask", `conic-gradient(from ${this.sidebarBlurConfig.maskAngle}deg at 0% 50%, transparent 0deg, black ${this.sidebarBlurConfig.maskCone}deg, transparent ${this.sidebarBlurConfig.maskCone}deg), linear-gradient(to ${this.sidebarBlurConfig.gradientDirection}, #000 ${this.sidebarBlurConfig.gradientStop}%, transparent 100%)`) : this.sidebarBg.style.setProperty("--sidebar-blur-mask", "none"))
    }
}
export {c as default};
