import {g as e} from "./index.xlujcirQ.js";
import {S as o} from "./ScrollTrigger.C4gmGO9R.js";
import {S as l} from "./SplitText.Cpc1cBKW.js";
import "./CSSPlugin.pkypRvgD.js";
e.registerPlugin(o, l);
const d = {
    duration: .8,
    ease: "power3"
};
e.defaults(d);
e.config({
    nullTargetWarn: !1
});
class y {
    constructor(t, s) {
        this.instance = t,
        this.app = s,
        this.scroll = this.app.scroll.lenis,
        this.destroyed = !1,
        this.items = this.instance.querySelectorAll(".accordion"),
        this.init(),
        this.app.on("resize", () => this.resize()),
        this.app.on("destroy", () => this.destroy())
    }
    init() {
        this.items.forEach( (t, s) => {
            t.querySelector(".accordion_top").addEventListener("click", () => {
                const a = t.classList.contains("active");
                this.items.forEach(r => r.classList.remove("active")),
                a ? t.classList.remove("active") : t.classList.add("active");
                const c = performance.now()
                  , n = 600
                  , i = () => {
                    performance.now() - c < n && (o.refresh(),
                    requestAnimationFrame(i))
                }
                ;
                requestAnimationFrame(i)
            }
            )
        }
        )
    }
    resize() {
        this.destroyed
    }
    destroy() {
        this.destroyed || (this.destroyed = !0)
    }
}
export {y as default};
