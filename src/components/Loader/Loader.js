import { Loading } from 'notiflix/build/notiflix-loading-aio';

export function startLoader() {
  Loading.dots({
    svgColor: '#88F2F2',
    backgroundColor: 'transparent',
    svgSize: '200px',
  });
}

export function stopLoader() {
  Loading.remove(300);
}

export function Loader() {
  startLoader();
  stopLoader();
}
