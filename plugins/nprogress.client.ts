import NProgress from 'nprogress';
import { defineNuxtPlugin } from '#app';
import 'nprogress/nprogress.css';

export default defineNuxtPlugin(() => {
  const router = useRouter();

  router.beforeEach(() => {
    NProgress.start();
  });

  router.afterEach(() => {
    NProgress.done();
  });
});
