export default{
    //共享的组件状态数据
    state:{
        num:0
    },
    //mutations唯一可以修改state的状态
    mutations:{
        //INC事件接受多个参数,第一个【必要】参数为固定参数state，第二个【不必要】参数为接受的形参
        INC:(state,payload)=>{
            //修改state.num+1
            state.num++
        }
    },
    //用来监听外部组件的动作请求
    //可以执行异步(async)操作
    actions:{
        ADD:(store,args)=>{
            //commit方法包含两个参数,第一个参数是调用mutations的事件名，第二个参数为传过去的值【不是必要】
            store.commit("INC",args)
        }
    },
    //通过getters来访问最新状态
    getters:{
        GETNUM:(state)=>{
            return state.num
        }
    }
}