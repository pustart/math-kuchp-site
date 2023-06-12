import { getStrapiURL } from './api';

export function getStrapiMedia(media) {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url;
  return imageUrl;
}

export function downloadStrapiMedia(media) {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith('/') ? getURL(url) : url;
  const link = document.createElement('a');
  link.setAttribute('href', imageUrl);
  link.setAttribute('download', 'download');
  link.setAttribute('target', '_blank');
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
}

function getURL(path = '') {
  return `${process.env.NEXT_PUBLIC_STRAPI_DOWNLOAD_URL}${path}`;
}
