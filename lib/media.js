import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}

export function downloadStrapiMedia(media) {
  const { url,name} = media.data.attributes;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  let link = document.createElement("a");
  link.setAttribute('href', imageUrl);
  link.setAttribute('download','download');
  link.setAttribute('target',"_blank");
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
}
