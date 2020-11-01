const state = () => ({
    status:false
})
const mutations = {
    changeState(state:any){
        state.status = !state.status
    }
}
export default {
    namespaced:true,
    state,
    mutations
}