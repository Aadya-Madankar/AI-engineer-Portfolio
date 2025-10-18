import {g as i} from "./all.xlujcirQ.js";
import {S as r} from "./SplitText.Cpc1cBKW.js";
import {S as s} from "./ScrollTrigger.C4gmGO9R.js";
import "./AnimateModel.B38_Ktv8.js";
import "./CSSPlugin.pkypRvgD.js";
i.registerPlugin(s, r);
class l {
    constructor(t, e) {
        this.main = t,
        this.app = e,
        this.hero = this.main.querySelector("header"),
        this.title = this.hero.querySelector(".h1"),
        this.btn = this.hero.querySelector(".btn"),
        this.destroyed = !1,
        this.init(),
        this.app.on("resize", () => this.resize()),
        this.app.on("destroy", () => this.destroy())
    }
    init() {
        this.split = new r(this.title,{
            type: "words, chars, lines",
            wordsClass: "hero_word",
            charsClass: "hero_char",
            linesClass: "hero_line"
        }),
        i.set(this.split.lines, {
            overflow: "clip",
            paddingBottom: "0.1em",
            marginBottom: "-0.1em"
        }),
        this.split.chars.forEach( (t, e) => {
            e !== 0 && i.set(t, {
                marginLeft: "-0.02em"
            })
        }
        ),
        this.tl = i.timeline({
            defaults: {
                ease: "power2"
            },
            paused: !0,
            delay: .5,
            onStart: () => {
                !this.app.options.noLoader && !this.app.options.onceLoaded && this.loadModel()
            }
            ,
            onComplete: () => this.app.options.noLoader && this.loadModel()
        }),
        this.tl.fromTo(this.split.chars, {
            yPercent: 110
        }, {
            yPercent: 0,
            duration: .8,
            ease: "expo.out",
            stagger: .04
        }, .8).fromTo(this.title, {
            "--progress": 0
        }, {
            "--progress": 1,
            duration: .8
        }, ">").fromTo(this.btn, {
            yPercent: 10,
            autoAlpha: 0
        }, {
            yPercent: 0,
            autoAlpha: 1,
            duration: .6
        }, "<0.2"),
        this.app.trigger("homeLoaderReady")
    }
    async loadModel(t=.5) {
        const e = this.app.gl.world.models[0];
        i.to(e.inner.material.uniforms.uLoading, {
            value: 1,
            duration: 3,
            delay: t,
            onStart: () => {
                e.group.children.forEach( (o, n) => n === 0 && (o.visible = !0))
            }
        }),
        i.to(e.material.material.uniforms.uLoading, {
            value: 1,
            duration: 3,
            delay: t
        }),
        setTimeout( () => {
            e.material.material.uniforms.uLoading.value !== 1 && (i.set(e.inner.material.uniforms.uLoading, {
                value: 1
            }),
            i.set(e.material.material.uniforms.uLoading, {
                value: 1
            }))
        }
        , 3200 + t * 1e3)
    }
    resize() {
        this.destroyed || (this.split?.revert(),
        this.split = new r(this.title,{
            type: "words, chars, lines",
            wordsClass: "hero_word",
            charsClass: "hero_char",
            linesClass: "hero_line"
        }),
        i.set(this.split.lines, {
            overflow: "clip",
            paddingBottom: "0.1em",
            marginBottom: "-0.1em"
        }),
        this.split.chars.forEach( (t, e) => {
            e !== 0 && i.set(t, {
                marginLeft: "-0.02em"
            })
        }
        ))
    }
    destroy() {
        this.destroyed || (this.destroyed = !0)
    }
}
i.registerPlugin(s);
i.registerPlugin(s);
i.registerPlugin(s);
i.registerPlugin(s);
class h {
    constructor(t, e) {
        this.main = t,
        this.app = e,
        this.destroyed = !1,
        this.section = this.main.querySelector(".footer"),
        this.anchors = this.section.querySelectorAll(".footer_anchor"),
        this.init()
    }
    init() {
        this.anchors.forEach(t => {
            t.addEventListener("click", () => {
                const e = t.querySelector("._32").textContent
                  , o = this.main.querySelector(`[data-section="${e}"]`);
                o && this.app.scroll.lenis.scrollTo(o, {
                    duration: 1.2,
                    offset: -100
                })
            }
            )
        }
        ),
        setTimeout( () => {
            if (this.app.options.anchor) {
                const t = this.main.querySelector(`[data-section="${this.app.options.anchor}"]`);
                t && this.app.scroll.lenis.scrollTo(t, {
                    duration: 1.2,
                    offset: -100
                }),
                this.app.options.anchor = null
            }
        }
        , 2e3)
    }
}
class f {
    constructor(t, e) {
        this.main = t,
        this.app = e,
        this.gl = this.app.gl,
        this.loaded = !1,
        this.triggerLoad = async () => this.load()
    }
    async load() {
        this.loader = new l(this.main,this.app),
        this.footer = new h(this.main,this.app)
    }
}
export {f as default};
