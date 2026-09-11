import Mannager from "@/components/about/Mannager";
import PermissionsSlider from "@/components/about/PermissionsSlider";
import ProductCollection from "@/components/about/productCollection";
const permissions = [
    "/images/permissions/p1.jpg",
    "/images/permissions/p2.jpg",
    "/images/permissions/p3.jpg",
    "/images/permissions/p4.jpg",
    "/images/permissions/p5.jpg",
    "/images/permissions/p6.jpg",
    "/images/permissions/p7.jpg",
];

function AboutUs() {
    return (
        <>
            <ProductCollection />
            <div className="text-center w-full overflow-hidden pt-6  sm:mt-11">
                <Mannager />
            </div>
            <br />
            <div className="flex justify-center items-center mt-8 sm:mt-16">
                <PermissionsSlider images={permissions} />
            </div>
            <br />

            <br />
        </>
    );
}

export default AboutUs;