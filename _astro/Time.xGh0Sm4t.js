class n {
    constructor(t, e) {
        this.instance = t;
        this.app = e;
        this.formatter = new Intl.DateTimeFormat('en-IN', {
            timeZone: 'Asia/Kolkata',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        setInterval(() => this.updateIndianTime(), 1000);
    }
    
    updateIndianTime() {
        const timeString = this.formatter.format(new Date());
        if (this.instance) {
            this.instance.textContent = timeString;
        }
    }
}
export { n as default };
