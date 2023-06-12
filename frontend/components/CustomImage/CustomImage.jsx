import NextImage from 'next/image';
import { getStrapiMedia } from '../../lib/media';

function CustomImage(props) {
  const { alternativeText, width, height } = props.image.data.attributes;

  let imageWidth;
  if (Number.isNaN(props.width)) {
    imageWidth = 100;
  } else {
    imageWidth = props.width;
  }

  let imageHeight;
  if (Number.isNaN(props.height)) {
    imageHeight = 100;
  } else {
    imageHeight = props.height;
  }

  return (
    <NextImage
      style={props.style}
      width={props.width !== undefined ? imageWidth : width}
      height={props.height !== undefined ? imageHeight : height}
      src={getStrapiMedia(props.image)}
      alt={alternativeText || ''}
    />
  );
}

export default CustomImage;
