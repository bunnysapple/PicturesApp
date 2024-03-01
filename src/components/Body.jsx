import ImageContainer from "./ImageContainer";
import MoreButton from "./MoreButton";

export default function Body({
  pages,
  images,
  pageNum,
  search,
  setPageNum,
  setData,
}) {
  return (
    <div>
      <ImageContainer images={images} />
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
