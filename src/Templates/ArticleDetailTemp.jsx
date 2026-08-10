import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowRight, FaCalendarDays } from "react-icons/fa6";

let ArticleDetailTemp = () => {
  let { id } = useParams();

  const palette = [
    "#14b8a6",
    "#3b82f6",
    "#8b5cf6",
    "#EC4899",
    "#f59e0b",
    "#9f0ea1",
  ];
  let [article, setarticle] = useState([]);
  let getData = async () => {
    try {
      let res = await fetch("http://localhost:4000/article");
      if (res.status == 200) {
        let data = await res.json();
        let selected = data.find((itm) => itm.title.trim() == id);
        setarticle(selected);
      } else {
        console.log("status failed");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(article.tags);

  return (
    <>
      <div
        dir="rtl"
        className="min-h-screen p-32
bg-white
Pt-20
[background-image:radial-gradient(#d4d4d8_1px,transparent_1px)]
[background-size:22px_22px] font-fa"
      >
        <div className="w-[71%] mx-auto mb-3 ">
            <Link to="/Article" className="flex items-center justify-start gap-3 ">
            <div className="rounded-full p-2 border border-[#ecedf3]">
            <FaArrowRight size={15} />

            </div>
            <span className="text-[14px]">بازگشت به مقاله ها</span>
            </Link>
        </div>
        <div className="w-[71%] flex mx-auto justify-center items-center rounded-[26px] ">
          <img
            src="/public/images/category/spectorofotometr.jfif"
            alt={article.title}
            className="w-full h-100 rounded-[26px]"
          />
        </div>
        <div className="w-[71%] mx-auto flex flex-col rounded-[22px] p-11 border border-[#ecedf3] shadow-lg bg-white items-start justify-evenly mt-5">
          <div className="flex gap-1.5 items-center mb-4.5">
            <FaCalendarDays color="#6d5bf2" />
            <span className="text-[13.5px] font-bold mt-1 text-[#94879a]">
              {article.createdAt}
            </span>
          </div>
          <h1 className="text-[30px] font-bold mb-6">{article.title}</h1>
          <p className="text-[15px] text-[#94879a] mb-6">
            {article.short_desc}
          </p>
          <p className="text-[15px] text-[#94879a] mb-6">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <p className="text-[15px] text-[#94879a] mb-6">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>{" "}
          <p className="text-[15px] text-[#94879a] mb-8">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <div className="h-[0.25px] w-full bg-gray-300 mx-auto"></div>
          <div className="flex flex-col mt-5">
            <h1 className="text-[15px] font-extrabold">برچسب ها</h1>
            {article.tags && (
              <div className="flex gap-3 mt-2.5">
                {article.tags.map((elem, index) => {
                  const categoryColor = palette[index % palette.length];
                  return (
                    <div
                      className="py-2 px-3 rounded-full text-[12.5px] "
                      style={{
                        color: categoryColor,
                        backgroundColor: `color-mix(in srgb, ${categoryColor} 12%, white)`,
                      }}
                    >
                      {elem}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        
      </div>
    </>
  );
};
export default ArticleDetailTemp;
