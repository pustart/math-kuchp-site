import NextImage from "next/image";
import { getStrapiMedia } from "../../lib/media";

function CustomImage(props) {

  const { alternativeText, width, height } = props.image.data.attributes;

  return (
    <NextImage
      width={props.width ? props.width : width}
      height={props.height ? props.height : height}
      src={getStrapiMedia(props.image)}
      alt={alternativeText || ""}
    />
  );
}

export default CustomImage;
