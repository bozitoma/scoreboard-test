import { useRive, decodeImage } from "@rive-app/react-canvas";
import RiveSetImage from "../../assets/vgbc.riv";

const SetImeageComponent = () => {
  const { RiveComponent } = useRive({
    src: RiveSetImage,
    autoplay: true,
    assetLoader: (asset, bytes) => {
      console.log(
        "Tell our asset importer if we are going to load the asset contents",
        {
          name: asset.name,
          fileExtension: asset.fileExtension,
          cdnUuid: asset.cdnUuid,
          isFont: asset.isFont,
          isImage: asset.isImage,
          bytes,
        }
      );

      if (asset.isImage && asset.name === "SF6") {
        setImageAsset(asset);
        return true;
      } else {
        return false;
      }
    },
  });

  const setImageAsset = (asset: any) => {
    fetch("../../assets/SSBU.png").then(async (res) => {
      //任意の画像パスを取得
      console.log("doing this");
      const image = await decodeImage(new Uint8Array(await res.arrayBuffer()));
      console.log("aa");

      asset.setRenderImage(image);
      image.unref();
    });
  };

  return (
    <>
      <RiveComponent style={{ width: "1920px", height: "1080px" }} />
    </>
  );
};

export default SetImeageComponent;
