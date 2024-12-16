const base = {
    get() {
        return {
            url : "http://localhost:8080/springboottl6mm/",
            name: "springboottl6mm",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboottl6mm/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "微信点餐系统"
        } 
    }
}
export default base
