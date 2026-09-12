import CardRaspy from "@/components/cards/CardRaspy";
import SeaEffect from "@/components/UI/SeaEffect";
import { color } from "motion";
import { useTranslations } from "next-intl";


function Blogs() {
    const BlogT = useTranslations('BlogPage');
    const ProductT = useTranslations('Product');
    const Data = [
        {
            title: BlogT("CannedMushroomsTitle"),
            caption: BlogT("CannedMushroomsCaption"),
            backPhoto: "/photo/food_1.png",
            cannedPhoto: "/products/canned_mushrooms.png",
            color: "#3a7023"
        },
        {
            title: BlogT("CannedLentilsTitle"),
            caption: BlogT("CannedLentilsCaption"),
            backPhoto: "/photo/food_3.png",
            cannedPhoto: "/products/canned_lentils.png",
            color: "#d06f2e"
        },
        {
            title: BlogT("CannedChickpeasTitle"),
            caption: BlogT("CannedChickpeasCaption"),
            backPhoto: "/photo/food_2.png",
            cannedPhoto: "/products/canned_chickpeas.png",
            color: "#f4b219"
        },
        {
            title: ProductT("Peas"),
            caption: BlogT("PreparationMethod"),
            backPhoto: "/photo/food_1.png",
            cannedPhoto: "/products/Peas.png",
            color: "#1c4f0c"
        },
        {
            title: ProductT("PintoBeans"),
            caption: BlogT("PreparationMethod"),
            backPhoto: "/photo/food_3.png",
            cannedPhoto: "/products/pinto-beans.png",
            color: "#981c1d"
        },
        {
            title: ProductT("SweetCorn"),
            caption: BlogT("PreparationMethod"),
            backPhoto: "/photo/food_1.png",
            cannedPhoto: "/products/sweet-corn.png",
            color: "#fbd81a"
        }
    ]
    return (
        <>
            <br /><br /><br /><br />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 overflow-hidden  justify-center py-16 lg:px-36 px-7  gap-20 w-full flex-wrap items-center" >
                {
                    Data.map((item, index) => {
                        return (
                            <div className="w-full flex items-center justify-center">
                                <CardRaspy
                                    title={item.title}
                                    caption={item.caption}
                                    backPhoto={item.backPhoto}
                                    cannedPhoto={item.cannedPhoto}
                                    link={"/"}
                                    color={item.color}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <br /><br /><br /><br /><br />
        </>
    );
}

export default Blogs;