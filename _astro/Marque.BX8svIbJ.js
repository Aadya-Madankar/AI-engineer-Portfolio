import {g as t} from "./all.xlujcirQ.js";
import {S as o} from "./ScrollTrigger.C4gmGO9R.js";
import "./CSSPlugin.pkypRvgD.js";
t.registerPlugin(o);
class l {
    constructor(i, e, s) {
        this.instance = i,
        this.app = e,
        this.main = s,
        this.scroll = this.app.scroll.lenis,
        this.observer = this.app.observer.instance,
        this.destroyed = !1,
        this.multiDirection = this.instance.dataset.direction === "1" ? 1 : -1,
        this.speed = this.instance.dataset.speed ? parseFloat(this.instance.dataset.speed) : 1,
        this.direction = 1 * this.multiDirection,
        this.prevDirection = this.direction,
        this.velocity = {
            value: 0
        },
        this.enter = {
            value: 1
        },
        this.move = 0,
        this.draggableMove = {
            value: 0
        },
        this.draggableVelocity = 0,
        this.proxy = document.createElement("div"),
        this.props = t.getProperty(this.proxy),
        this.wrappers = this.instance.querySelectorAll("[data-wrapper]"),
        this.quicks = [...this.wrappers].map(r => t.quickSetter(r, "x", "%")),
        this.draggbleQuick = t.quickTo(this.draggableMove, "value", {
            duration: .2,
            ease: "power2"
        }),
        this.changeVelocity = t.quickTo(this.velocity, "value", {
            duration: .2,
            ease: "power2"
        }),
        this.app.options.onceLoaded || this.init(),
        this.app.on("newLenis", () => this.init()),
        this.observer.observe(this.instance),
        this.app.on("tick", () => this.tick()),
        this.app.on("resize", () => this.resize()),
        this.app.on("destroy", () => this.destroy())
    }
    init() {
        this.destroyed || this.app.scroll.lenis.on("scroll", i => {
            this.destroyed || (this.changeVelocity(Math.abs(i.velocity)),
            this.prevDirection !== i.direction && (this.direction = i.direction * this.multiDirection,
            this.prevDirection = i.direction))
        }
        )
    }
    tick() {
        if (this.destroyed || this.instance.dataset.visible == "false")
            return;
        this.quicks.forEach(e => e(this.move));
        const i = t.utils.mapRange(0, 100, 0, 1, this.velocity.value);
        this.move += this.direction * (.01 + i) * this.speed * this.enter.value + this.draggableMove.value / 10,
        (this.move > 100 || this.move < -100) && (this.move = 0),
        this.changeVelocity(0)
    }
    resize() {
        this.destroyed
    }
    destroy() {
        this.destroyed || (this.destroyed = !0)
    }
}
export {l as default};
