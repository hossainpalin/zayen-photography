import LightboxComponent, {
  LightboxExternalProps
} from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Share from "yet-another-react-lightbox/plugins/share";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function Lightbox(
  props: Omit<LightboxExternalProps, "plugins">
) {
  return (
    <LightboxComponent
      {...props}
      plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Share]}
    />
  );
}
