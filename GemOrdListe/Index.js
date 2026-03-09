Vue.createApp({
    data() {
        return {
            word: '',
            savedWords: [],
            message: '',
            showList: false
        }
    },
    methods: {
        saveWord() {
            const trimmed = (this.word || '').trim()
            if (trimmed) {
                this.savedWords.push(trimmed)
            }
            this.word = ''
            this.message = ''
            this.showList = false
        },
        showWord() {
            if (this.savedWords.length === 0) {
                this.message = 'empty'
                this.showList = false
            } else {
                this.message = ''
                this.showList = true
            }
        },
        clearAll() {
            this.word = ''
            this.savedWords = []
            this.message = ''
            this.showList = false
        }
    }
}).mount('#app')