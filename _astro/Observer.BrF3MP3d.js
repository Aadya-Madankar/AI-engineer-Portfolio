class s {
    constructor() {
        this.instance = new IntersectionObserver(t => {
            t.forEach(e => {
                e.target.dataset.visible = e.isIntersecting ? "true" : "false"
            }
            )
        }
        ,{
            root: null,
            rootMargin: "15% 0px 15% 0px"
        })
    }
}
export {s as default};
