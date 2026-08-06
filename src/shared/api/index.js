import LocalApi from "./localApi"
import ServerApi from "./serverApi"


const USE_LOCAL = import.meta.env.VITE_STATIC_BACKEND === 'true'


const api = USE_LOCAL ? LocalApi() : ServerApi()





export default api