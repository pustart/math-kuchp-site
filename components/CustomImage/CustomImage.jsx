import NextImage from "next/image";
import { getStrapiMedia } from "../../lib/media";

function CustomImage(props) {

  const { alternativeText, width, height } = props.image.data.attributes;


  return (
    <NextImage
      style={props.style}
      width={props.width !== undefined ? props.width : width}
      height={props.height !== undefined ? props.height : height}
      src={getStrapiMedia(props.image)}
      alt={alternativeText || ""}
    />
  );
}

export default CustomImage;
