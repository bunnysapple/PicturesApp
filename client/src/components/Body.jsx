import ImageContainer from "./ImageContainer";
import MoreButton from "./MoreButton";

export default function Body({
  pages,
  images,
  pageNum,
  search,
  oneClicked,
  setPageNum,
  setData,
  setOneClicked,
}) {
  return (
    <div>
      <ImageContainer
        images={images}
        oneClicked={oneClicked}
        setOneClicked={setOneClicked}
      />
      <MoreButton
        pages={pages}
        pageNum={pageNum}
        search={search}
        images={images}
        setPageNum={setPageNum}
        setData={setData}
      />
    </div>
  );
}
