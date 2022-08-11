import axios from 'axios';

// export const BASE_PATH = 'http://bestopdeals.in/Daji/api';

export const BASE_PATH = 'http://localhost/daji/api';

const axiosClient = axios.create({
    baseURL: BASE_PATH,
});

axiosClient.interceptors.request.use((config: any) => {
    return config;
});

export default axiosClient;
