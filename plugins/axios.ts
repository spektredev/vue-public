import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  const instance = axios.create({
    baseURL: nuxtApp.$config.public.apiBaseUrl,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return {
    provide: {
      axios: instance,
    },
  };
});
