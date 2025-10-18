import {g as S} from "./all.xlujcirQ.js";
import {S as c} from "./ScrollTrigger.C4gmGO9R.js";
const y = n => n * n
  , x = n => n * (2 - n)
  , z = n => n < .5 ? 2 * n * n : 1 - Math.pow(-2 * n + 2, 2) / 2
  , C = n => n === 0 ? 0 : Math.pow(2, 10 * n - 10)
  , b = n => n === 1 ? 1 : 1 - Math.pow(2, -10 * n)
  , k = n => n === 0 ? 0 : n === 1 ? 1 : n < .5 ? Math.pow(2, 20 * n - 10) / 2 : (2 - Math.pow(2, -20 * n + 10)) / 2
  , P = {
    in: y,
    out: x,
    inOut: z
}
  , p = {
    in: C,
    out: b,
    inOut: k
};
S.registerPlugin(c);
class B {
    constructor(r, t, e, i={}) {
        this.app = t,
        this.model = r,
        this.main = e,
        this.isMultiStage = i.multiStage || !1;
        const {sectionIndex: s=0, startPos: a={
            position: {
                x: 0,
                y: 0,
                z: 0
            },
            rotation: {
                x: 0,
                y: 0,
                z: 0
            },
            scale: 1
        }, endPos: l=null, stages: m=null, segments: h=null, transform: o={
            start: "top center",
            end: "top top",
            trigger: s,
            endTrigger: s
        }, materialFadeIn: g={
            enabled: !0,
            start: o.start || "top center",
            end: o.end || "top top",
            trigger: o.trigger || s,
            endTrigger: o.endTrigger || s,
            progress: {
                start: 0,
                end: 1
            }
        }, materialFadeOut: d={
            enabled: !0,
            start: o.end || "top top",
            end: "bottom bottom",
            trigger: o.trigger || s,
            endTrigger: o.endTrigger || s
        }, visibilityTrigger: u=null, showMarkers: f=!1, destroyed: T=!1} = i;
        this.sectionIndex = s,
        this.startPos = a,
        this.endPos = l,
        this.destroyed = T,
        this.progress = 0,
        u ? (this.visibilityPos = {
            start: u.start || "top bottom",
            end: u.end || "bottom top"
        },
        this.visibilityTrigger = {
            trigger: u.trigger || s,
            endTrigger: u.endTrigger || u.trigger || s
        }) : (this.visibilityPos = null,
        this.visibilityTrigger = null),
        this.start = o.start,
        this.end = o.end,
        this.transformTriggerIndex = o.trigger,
        this.transformEndTriggerIndex = o.endTrigger,
        this.enableMaterialFadeIn = g.enabled,
        this.materialStart = g.start,
        this.materialEnd = g.end,
        this.materialTriggerIndex = g.trigger,
        this.materialEndTriggerIndex = g.endTrigger,
        this.materialProgress = g.progress,
        this.enableMaterialFadeOut = d.enabled,
        this.materialFadeOutStart = d.start,
        this.materialFadeOutEnd = d.end,
        this.materialFadeOutTriggerIndex = d.trigger,
        this.materialFadeOutEndTriggerIndex = d.endTrigger,
        this.showMarkers = f,
        this.main.getAttribute("data-transition-page") == "home" ? this.sections = [this.main.querySelector("header"), ...this.main.querySelectorAll("section"), this.main.querySelector("footer")] : this.sections = [this.main.querySelector("footer")],
        this.trigger = this.sections[this.transformTriggerIndex],
        this.endTrigger = this.sections[this.transformEndTriggerIndex],
        this.isMultiStage && m && h && (this.stages = m,
        this.segments = h,
        this.segmentAB = {
            scrollTrigger: null,
            progress: 0
        },
        this.segmentBC = {
            scrollTrigger: null,
            progress: 0
        },
        this.segmentCD = {
            scrollTrigger: null,
            progress: 0
        }),
        this.transformTimeline = null,
        this.materialTimeline = null,
        this.materialFadeOutTimeline = null,
        this.transformScrollTrigger = null,
        this.materialScrollTrigger = null,
        this.materialFadeOutScrollTrigger = null,
        this.animationStates = {
            start: {
                position: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                rotation: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                scale: 1,
                materialProgress: this.materialProgress && this.materialProgress.start || 0
            },
            end: {
                position: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                rotation: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                scale: 1,
                materialProgress: this.materialProgress && this.materialProgress.end || 1
            },
            current: {
                position: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                rotation: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                scale: 1,
                materialProgress: 0
            },
            other: {
                revealDirection: {
                    x: 1,
                    y: .5
                }
            }
        },
        this.timelineControls = {
            progress: 0
        },
        this.debugFolder = null,
        this.lastDeviceType = window.innerWidth <= 768 ? "mobile" : "desktop",
        this.isMobile = window.innerWidth <= 768,
        this.rafId = null,
        this.lastUpdateTime = 0,
        this.updateThrottle = this.isMobile ? 33 : 30,
        this.init(),
        this.app.on("resize", () => this.resize()),
        this.app.on("destroy", () => this.destroy()),
        document.addEventListener("visibilitychange", () => this.handleVisibilityChange())
    }
    init() {
        this.model && this.model.group && (this.model.animatedRotation || (this.model.animatedRotation = {
            x: this.model.group.rotation.x,
            y: this.model.group.rotation.y,
            z: this.model.group.rotation.z
        }),
        this.model.rotate || (this.model.rotate = {
            x: this.model.group.rotation.x,
            y: this.model.group.rotation.y,
            z: this.model.group.rotation.z
        }),
        this.startPos ? (this.animationStates.start.position = this.startPos.position || {
            x: this.model.group.position.x,
            y: this.model.group.position.y,
            z: this.model.group.position.z
        },
        this.animationStates.start.rotation = this.startPos.rotation || {
            x: this.model.group.rotation.x,
            y: this.model.group.rotation.y,
            z: this.model.group.rotation.z
        },
        this.animationStates.start.scale = this.startPos.scale || this.model.group.scale.x) : (this.animationStates.start.position = {
            x: this.model.group.position.x,
            y: this.model.group.position.y,
            z: this.model.group.position.z
        },
        this.animationStates.start.rotation = {
            x: this.model.group.rotation.x,
            y: this.model.group.rotation.y,
            z: this.model.group.rotation.z
        },
        this.animationStates.start.scale = this.model.group.scale.x),
        this.endPos ? (this.animationStates.end.position = this.endPos.position || {
            x: this.model.group.position.x,
            y: this.model.group.position.y,
            z: this.model.group.position.z
        },
        this.animationStates.end.rotation = this.endPos.rotation || {
            x: this.model.rotate.x,
            y: this.model.rotate.y,
            z: this.model.rotate.z
        },
        this.animationStates.end.scale = this.endPos.scale || this.model.group.scale.x) : (this.animationStates.end.position = {
            x: this.model.group.position.x,
            y: this.model.group.position.y,
            z: this.model.group.position.z
        },
        this.animationStates.end.rotation = {
            x: this.model.rotate.x,
            y: this.model.rotate.y,
            z: this.model.rotate.z
        },
        this.animationStates.end.scale = this.model.group.scale.x),
        this.animationStates.current = JSON.parse(JSON.stringify(this.animationStates.start))),
        this.setFooterModelPosition(),
        this.createTimeline()
    }
    setFooterModelPosition() {
        if (this.model.name === "footerModel" && window.innerWidth > 1024) {
            let r = this.animationStates.end.position.x;
            const t = window.innerWidth / window.innerHeight;
            if (t < 1.6) {
                const e = 1.7 - t;
                r = this.animationStates.end.position.x + e * 6
            } else if (t > 1.6) {
                const e = t - 1.55;
                r = this.animationStates.end.position.x - e * 6
            }
            this.model.group.position.set(r, this.animationStates.start.position.y, this.animationStates.end.position.z),
            this.model.animatedScrollRotation.x = this.animationStates.end.rotation.x,
            this.model.animatedScrollRotation.y = this.animationStates.end.rotation.y,
            this.model.animatedScrollRotation.z = this.animationStates.end.rotation.z
        }
    }
    createTimeline() {
        const r = this.model.name === "footerModel" ? window.innerHeight * 1.2 : window.innerHeight * 2;
        if (!(!this.model || !this.model.group)) {
            if (this.isMultiStage) {
                this.createMultiStageTimeline();
                return
            }
            this.transformTimeline && this.transformTimeline.kill(),
            this.transformScrollTrigger && this.transformScrollTrigger.kill(),
            this.materialTimeline && this.materialTimeline.kill(),
            this.materialScrollTrigger && this.materialScrollTrigger.kill(),
            this.materialFadeOutTimeline && this.materialFadeOutTimeline.kill(),
            this.materialFadeOutScrollTrigger && this.materialFadeOutScrollTrigger.kill(),
            this.timeline && this.timeline.kill(),
            this.scrollTrigger && this.scrollTrigger.kill(),
            this.transformScrollTrigger = c.create({
                trigger: this.trigger,
                start: this.start,
                end: this.end,
                endTrigger: this.endTrigger,
                markers: this.showMarkers || !1,
                id: "transform",
                onUpdate: t => {
                    this.timelineControls.progress = t.progress,
                    this.progress = t.progress,
                    this.updateModel(t.progress)
                }
            }),
            this.visibilityScrollTrigger && this.visibilityScrollTrigger.kill(),
            this.visibilityTrigger && this.visibilityPos && (this.visibilityScrollTrigger = c.create({
                trigger: this.sections[this.visibilityTrigger.trigger],
                endTrigger: this.sections[this.visibilityTrigger.endTrigger],
                start: this.visibilityPos.start || "top bottom",
                end: this.visibilityPos.end || "bottom top",
                markers: this.showMarkers ? {
                    startColor: "cyan",
                    endColor: "magenta",
                    fontSize: "12px",
                    indent: 80
                } : !1,
                id: `Visibility: ${this.model.name}`,
                onEnter: () => {
                    this.model && this.model.group && (this.model.group.visible = !0)
                }
                ,
                onLeave: () => {
                    this.model && this.model.group && (this.model.group.visible = !1)
                }
                ,
                onEnterBack: () => {
                    this.model && this.model.group && (this.model.group.visible = !0)
                }
                ,
                onLeaveBack: () => {
                    this.model && this.model.group && (this.model.group.visible = !1)
                }
            })),
            this.enableMaterialFadeIn && (this.materialScrollTrigger = c.create({
                trigger: this.trigger,
                start: this.start,
                end: `${this.start}-=${r}px`,
                endTrigger: this.endTrigger,
                markers: this.showMarkers ? {
                    startColor: "green",
                    endColor: "red"
                } : !1,
                id: "material",
                onUpdate: t => {
                    this.materialTimelineProgress = t.progress,
                    this.updateMaterialProgress(t.progress)
                }
            })),
            this.enableMaterialFadeOut && this.visibilityTrigger && this.visibilityPos && (this.materialFadeOutScrollTrigger = c.create({
                trigger: this.sections[this.visibilityTrigger.endTrigger],
                start: `${this.visibilityPos.end}+=${r}px`,
                end: this.visibilityPos.end,
                endTrigger: this.sections[this.visibilityTrigger.endTrigger],
                markers: this.showMarkers ? {
                    startColor: "orange",
                    endColor: "purple"
                } : !1,
                id: "material-fade-out",
                onUpdate: t => {
                    this.materialFadeOutTimelineProgress = t.progress,
                    this.updateMaterialFadeOut(t.progress)
                }
            }))
        }
    }
    createMultiStageTimeline() {
        if (!this.model || !this.model.group || !this.stages || !this.segments)
            return;
        if (this.segmentAB.scrollTrigger && this.segmentAB.scrollTrigger.kill(),
        this.segmentBC.scrollTrigger && this.segmentBC.scrollTrigger.kill(),
        this.segmentCD.scrollTrigger && this.segmentCD.scrollTrigger.kill(),
        this.currentSegment = "AB",
        this.segmentProgress = 0,
        this.segments.AB) {
            const t = this.segments.AB;
            this.segmentAB.scrollTrigger = c.create({
                trigger: this.sections[t.trigger],
                endTrigger: this.sections[t.endTrigger],
                start: t.start,
                end: t.end,
                markers: this.showMarkers ? {
                    startColor: "red",
                    endColor: "blue",
                    fontSize: "12px",
                    indent: 20
                } : !1,
                id: "A→B",
                onUpdate: e => {
                    this.updateSegmentAB(e.progress),
                    this.segmentProgress = e.progress
                }
                ,
                onEnter: () => {
                    this.model && this.model.group && (this.model.group.visible = !0),
                    this.currentSegment = "AB"
                }
            })
        }
        if (this.segments.BC) {
            const t = this.segments.BC;
            this.segmentBC.scrollTrigger = c.create({
                trigger: this.sections[t.trigger],
                endTrigger: this.sections[t.endTrigger],
                start: t.start,
                end: t.end,
                markers: this.showMarkers ? {
                    startColor: "green",
                    endColor: "yellow",
                    fontSize: "12px",
                    indent: 40
                } : !1,
                id: "B→C",
                onUpdate: e => {
                    this.segmentBC.progress = e.progress,
                    this.updateSegmentBC(e.progress),
                    this.segmentProgress = e.progress
                }
                ,
                onEnter: () => this.currentSegment = "BC",
                onEnterBack: () => this.currentSegment = "BC"
            })
        }
        if (this.segments.CD) {
            const t = this.segments.CD;
            this.segmentCD.scrollTrigger = c.create({
                trigger: this.sections[t.trigger],
                start: t.start,
                end: t.end,
                id: "C→D",
                onUpdate: e => {
                    this.segmentCD.progress = e.progress,
                    this.updateSegmentCD(e.progress),
                    this.segmentProgress = e.progress
                }
                ,
                onEnter: () => this.currentSegment = "CD",
                onLeave: () => {
                    this.model && this.model.group && (this.model.group.visible = !1)
                }
                ,
                onEnterBack: () => {
                    this.model && this.model.group && (this.model.group.visible = !0),
                    this.currentSegment = "CD"
                }
            })
        }
        this.materialFadeOutScrollTrigger && this.materialFadeOutScrollTrigger.kill();
        const r = window.innerHeight * 2;
        this.materialFadeOutScrollTrigger = c.create({
            trigger: this.sections[0],
            start: `${this.segments.CD.end}+=${r}px`,
            end: this.segments.CD.end,
            endTrigger: this.sections[0],
            markers: this.showMarkers ? {
                startColor: "orange",
                endColor: "purple"
            } : !1,
            id: "material-fade-out",
            onUpdate: t => {
                this.materialFadeOutTimelineProgress = t.progress,
                this.updateMaterialFadeOut(t.progress)
            }
        })
    }
    updateSegmentAB(r) {
        if (!this.model || !this.model.group || !this.stages)
            return;
        const t = this.stages.pointA
          , e = this.stages.pointB
          , i = p.inOut(r)
          , s = window.innerWidth / window.innerHeight
          , a = window.innerWidth <= 768;
        let l = e.position.x
          , m = e.rotation.y;
        if (!a & s < 1.8) {
            const d = Math.max(-.2, s - 1.8);
            l = e.position.x - d * 6,
            m = e.rotation.y + d * 1.2
        }
        const h = {
            x: t.position.x * (1 - i) + l * i,
            y: t.position.y * (1 - i) + e.position.y * i,
            z: t.position.z * (1 - i) + e.position.z * i
        }
          , o = {
            x: t.rotation.x * (1 - i) + e.rotation.x * i,
            y: t.rotation.y * (1 - i) + m * i,
            z: t.rotation.z * (1 - i) + e.rotation.z * i
        }
          , g = t.scale * (1 - i) + e.scale * i;
        this.model.group.position.set(h.x, h.y, h.z),
        window.innerWidth > 768 ? (this.model.animatedScrollRotation.x = o.x,
        this.model.animatedScrollRotation.y = o.y,
        this.model.animatedScrollRotation.z = o.z,
        this.model.quicks && (this.model.quicks.rotationX(0),
        this.model.quicks.rotationY(0),
        this.model.quicks.rotationZ(0))) : this.model.group.rotation.set(this.model.rotate.x + o.x, this.model.rotate.y + o.y, this.model.rotate.z + o.z),
        this.model.group.scale.set(g, g, g)
    }
    updateSegmentBC(r) {
        if (!this.model || !this.model.group || !this.stages)
            return;
        const t = this.stages.pointB
          , e = this.stages.pointC
          , i = p.inOut(r)
          , s = window.innerWidth / window.innerHeight
          , a = window.innerWidth <= 768;
        let l = t.position.x
          , m = t.rotation.y;
        if (!a & s < 1.8) {
            const d = Math.max(-.2, s - 1.8);
            l = t.position.x - d * 6,
            m = t.rotation.y + d * 1.2
        }
        const h = {
            x: l * (1 - i) + e.position.x * i,
            y: t.position.y * (1 - i) + e.position.y * i,
            z: t.position.z * (1 - i) + e.position.z * i
        }
          , o = {
            x: t.rotation.x * (1 - i) + e.rotation.x * i,
            y: m * (1 - i) + e.rotation.y * i,
            z: t.rotation.z * (1 - i) + e.rotation.z * i
        }
          , g = t.scale * (1 - i) + e.scale * i;
        this.model.group.position.set(h.x, h.y, h.z),
        window.innerWidth > 768 ? (this.model.animatedScrollRotation.x = o.x,
        this.model.animatedScrollRotation.y = o.y,
        this.model.animatedScrollRotation.z = o.z,
        this.model.quicks && (this.model.quicks.rotationX(0),
        this.model.quicks.rotationY(0),
        this.model.quicks.rotationZ(0))) : this.model.group.rotation.set(this.model.rotate.x + o.x, this.model.rotate.y + o.y, this.model.rotate.z + o.z),
        this.model.group.scale.set(g, g, g)
    }
    updateSegmentCD(r) {
        if (!this.model || !this.model.group || !this.stages)
            return;
        const t = this.stages.pointC
          , e = this.stages.pointD
          , i = p.inOut(r)
          , s = {
            x: t.position.x * (1 - i) + e.position.x * i,
            y: t.position.y * (1 - i) + e.position.y * i,
            z: t.position.z * (1 - i) + e.position.z * i
        }
          , a = {
            x: t.rotation.x * (1 - i) + e.rotation.x * i,
            y: t.rotation.y * (1 - i) + e.rotation.y * i,
            z: t.rotation.z * (1 - i) + e.rotation.z * i
        }
          , l = t.scale * (1 - i) + e.scale * i;
        this.model.group.position.set(s.x, s.y, s.z),
        window.innerWidth > 768 ? (this.model.animatedScrollRotation.x = a.x,
        this.model.animatedScrollRotation.y = a.y,
        this.model.animatedScrollRotation.z = a.z,
        this.model.quicks && (this.model.quicks.rotationX(0),
        this.model.quicks.rotationY(0),
        this.model.quicks.rotationZ(0))) : this.model.group.rotation.set(this.model.rotate.x + a.x, this.model.rotate.y + a.y, this.model.rotate.z + a.z),
        this.model.group.scale.set(l, l, l)
    }
    updateMaterialProgress(r) {
        if (!this.model || this.model.name === "footerModel" && window.innerWidth < 767 || this.isMobile && this.model.group && !this.model.group.visible || this.lastMaterialProgress !== void 0 && Math.abs(this.lastMaterialProgress - r) < .001)
            return;
        this.lastMaterialProgress = r;
        const t = r;
        this.model.inner && this.model.inner.material && this.model.inner.material.uniforms && this.model.inner.material.uniforms.uLoading && (this.model.inner.material.uniforms.uLoading.value = t),
        this.model.material && this.model.material.material && this.model.material.material.uniforms && this.model.material.material.uniforms.uLoading && (this.model.material.material.uniforms.uLoading.value = t)
    }
    throttledUpdate(r, t) {
        if (!this.isMobile) {
            r(t);
            return
        }
        const e = performance.now();
        e - this.lastUpdateTime < this.updateThrottle ? (this.rafId && cancelAnimationFrame(this.rafId),
        this.rafId = requestAnimationFrame( () => {
            r(t),
            this.lastUpdateTime = performance.now()
        }
        )) : (r(t),
        this.lastUpdateTime = e)
    }
    updateMaterialFadeOut(r) {
        if (!this.model)
            return;
        const t = 1 - r;
        this.model.inner && this.model.inner.material && this.model.inner.material.uniforms && this.model.inner.material.uniforms.uLoading && (this.model.inner.material.uniforms.uLoading.value = t),
        this.model.material && this.model.material.material && this.model.material.material.uniforms && this.model.material.material.uniforms.uLoading && (this.model.material.material.uniforms.uLoading.value = t)
    }
    updateModel(r) {
        if (!this.model || !this.model.group)
            return;
        const t = P.inOut(r)
          , e = this.animationStates.start.scale * (1 - t) + this.animationStates.end.scale * t
          , i = {
            x: this.animationStates.start.position.x * (1 - t) + this.animationStates.end.position.x * t,
            y: this.animationStates.start.position.y * (1 - t) + this.animationStates.end.position.y * t,
            z: this.animationStates.start.position.z * (1 - t) + this.animationStates.end.position.z * t
        }
          , s = {
            x: this.animationStates.start.rotation.x * (1 - t) + this.animationStates.end.rotation.x * t,
            y: this.animationStates.start.rotation.y * (1 - t) + this.animationStates.end.rotation.y * t,
            z: this.animationStates.start.rotation.z * (1 - t) + this.animationStates.end.rotation.z * t
        };
        let a = i.x;
        if (this.model.name === "footerModel") {
            const l = window.innerWidth / window.innerHeight
              , m = window.innerWidth <= 768;
            if (!m && l < 1.6) {
                const h = 1.7 - l;
                a = i.x + h * 6
            } else if (!m && l > 1.6) {
                const h = l - 1.55;
                a = i.x + h * 2.4
            }
        }
        this.model.group.position.set(a, i.y, i.z),
        window.innerWidth > 768 ? (this.model.animatedScrollRotation.x = s.x,
        this.model.animatedScrollRotation.y = s.y,
        this.model.animatedScrollRotation.z = s.z,
        this.model.quicks.rotationY(0),
        this.model.quicks.rotationX(0),
        this.model.quicks.rotationZ(0)) : this.model.group.rotation.set(this.model.rotate.x + s.x, this.model.rotate.y + s.y, this.model.rotate.z + s.z),
        this.model.group.scale.set(e, e, e)
    }
    applyTimeline() {
        this.createTimeline()
    }
    killTimeline() {
        this.transformTimeline && (this.transformTimeline.kill(),
        this.transformTimeline = null),
        this.transformScrollTrigger && (this.transformScrollTrigger.kill(),
        this.transformScrollTrigger = null),
        this.materialTimeline && (this.materialTimeline.kill(),
        this.materialTimeline = null),
        this.materialScrollTrigger && (this.materialScrollTrigger.kill(),
        this.materialScrollTrigger = null),
        this.materialFadeOutTimeline && (this.materialFadeOutTimeline.kill(),
        this.materialFadeOutTimeline = null),
        this.materialFadeOutScrollTrigger && (this.materialFadeOutScrollTrigger.kill(),
        this.materialFadeOutScrollTrigger = null)
    }
    handleVisibilityChange() {
        !document.hidden && this.model && this.model.group && (this.resize(),
        c.refresh())
    }
    resize() {
        if (this.destroyed)
            return;
        const r = window.innerWidth <= 768
          , t = this.lastDeviceType === "mobile"
          , e = r && !t || !r && t;
        this.isMobile = r,
        this.updateThrottle = r ? 33 : 16;
        let i = null;
        if (this.transformScrollTrigger ? i = this.transformScrollTrigger.progress : this.scrollTrigger ? i = this.scrollTrigger.progress : i = this.progress || 0,
        this.isMultiStage && (this.segmentAB && this.segmentAB.scrollTrigger && this.segmentAB.scrollTrigger.progress,
        this.segmentBC && this.segmentBC.scrollTrigger && this.segmentBC.scrollTrigger.progress,
        this.segmentCD && this.segmentCD.scrollTrigger && this.segmentCD.scrollTrigger.progress),
        this.killTimeline(),
        this.isMultiStage && (this.segmentAB && this.segmentAB.scrollTrigger && (this.segmentAB.scrollTrigger.kill(),
        this.segmentAB.scrollTrigger = null),
        this.segmentBC && this.segmentBC.scrollTrigger && (this.segmentBC.scrollTrigger.kill(),
        this.segmentBC.scrollTrigger = null),
        this.segmentCD && this.segmentCD.scrollTrigger && (this.segmentCD.scrollTrigger.kill(),
        this.segmentCD.scrollTrigger = null)),
        this.visibilityScrollTrigger && (this.visibilityScrollTrigger.kill(),
        this.visibilityScrollTrigger = null),
        this.materialFadeOutScrollTrigger && (this.materialFadeOutScrollTrigger.kill(),
        this.materialFadeOutScrollTrigger = null),
        this.scrollTrigger && (this.scrollTrigger.kill(),
        this.scrollTrigger = null),
        e && (this.lastDeviceType = r ? "mobile" : "desktop",
        this.model && this.model.mobileAnimationConfig && this.model.animationConfig)) {
            const s = r ? this.model.mobileAnimationConfig : this.model.animationConfig;
            s.startPos && (this.startPos = s.startPos,
            this.animationStates.start.position = s.startPos.position || this.animationStates.start.position,
            this.animationStates.start.rotation = s.startPos.rotation || this.animationStates.start.rotation,
            this.animationStates.start.scale = s.startPos.scale || this.animationStates.start.scale),
            s.endPos && (this.endPos = s.endPos,
            this.animationStates.end.position = s.endPos.position || this.animationStates.end.position,
            this.animationStates.end.rotation = s.endPos.rotation || this.animationStates.end.rotation,
            this.animationStates.end.scale = s.endPos.scale || this.animationStates.end.scale),
            s.materialFadeIn && (this.enableMaterialFadeIn = s.materialFadeIn.enabled !== void 0 ? s.materialFadeIn.enabled : !0,
            s.materialFadeIn.progress && (this.animationStates.start.materialProgress = s.materialFadeIn.progress.start || 0,
            this.animationStates.end.materialProgress = s.materialFadeIn.progress.end || 1))
        }
        this.createTimeline(),
        c.refresh(),
        requestAnimationFrame( () => {
            let s = 0;
            this.transformScrollTrigger ? s = this.transformScrollTrigger.progress : i !== null ? s = i : s = this.progress || 0,
            this.isMultiStage ? this.currentSegment == "AB" ? this.updateSegmentAB(this.segmentProgress) : this.currentSegment == "BC" ? this.updateSegmentBC(this.segmentProgress) : this.currentSegment == "CD" && this.updateSegmentCD(this.segmentProgress) : (this.updateModel(s),
            this.progress = s)
        }
        )
    }
    destroy() {
        this.destroyed = !0,
        document.removeEventListener("visibilitychange", this.handleVisibilityChange),
        this.visibilityScrollTrigger && this.visibilityScrollTrigger.kill(),
        this.isMultiStage && (this.segmentAB && this.segmentAB.scrollTrigger && this.segmentAB.scrollTrigger.kill(),
        this.segmentBC && this.segmentBC.scrollTrigger && this.segmentBC.scrollTrigger.kill(),
        this.segmentCD && this.segmentCD.scrollTrigger && this.segmentCD.scrollTrigger.kill(),
        this.materialFadeOutScrollTrigger && this.materialFadeOutScrollTrigger.kill()),
        this.killTimeline(),
        this.scrollTrigger && this.scrollTrigger.kill()
    }
}
export {B as A};
