const app = Vue.createApp({
    data : function(){
        return {
            courseGoalA : '뷰를 마스터 하자!',
            courseGoalB : '<h2>뷰를 마스터 하지 말자!</h2>',
            vueLink : 'https://www.naver.com/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if ( randomNumber < 0.5 ) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});
app.mount('#user-goal')