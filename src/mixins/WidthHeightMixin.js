export const WidthHeightMixin = {
    data() {
        return {
            window: {
                width: window.screen.width,
                height: window.screen.height,
            },
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.onResize);
    },
    methods: {
        onResize() {
            this.window.width = window.screen.width
            this.window.height = window.screen.height
        },
        isWidth990() {
            return this.window.width >= 990;
        },
        isWidth760() {
            return this.window.width >= 760;
        },
        isWidth580() {
            return this.window.width >= 580;
        }
    }
}
