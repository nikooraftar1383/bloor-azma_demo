import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProductSkeleton() {
  return (
    <div className="border-2 border-[#f2f3f5] rounded-2xl flex p-2 w-[80%] mx-auto mt-2 gap-3"dir="rtl">

      {/* عکس */}
      <Skeleton
        width={120}
        height={120}
        borderRadius={12}
      />

      {/* متن */}
      <div className="flex-1 flex flex-col justify-center">

        {/* عنوان */}
        <Skeleton width="70%" height={20} />

        {/* توضیحات */}
        <Skeleton className="mt-4" />
        <Skeleton width="85%" className="mt-2" />

        {/* دکمه */}
        <div className="flex justify-end mt-4">
          <Skeleton
            width={80}
            height={32}
            borderRadius={999}
          />
        </div>

      </div>
    </div>
  );
}

export default ProductSkeleton;