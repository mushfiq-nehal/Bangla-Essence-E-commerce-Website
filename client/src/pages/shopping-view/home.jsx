import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/components/ui/use-toast";
import ProductDetailsDialog from "@/components/shopping-view/product-details";
import { getFeatureImages } from "@/store/common-slice";

const categories = [
  { id: "nakshi_kantha", label: "Nakshi Kantha" },
  { id: "terracotta", label: "Terracotta" },
  { id: "wooden_items", label: "Wooden Items" },
  { id: "bamboo_items", label: "Bamboo Items" },
  { id: "jewelry", label: "Jewelry" },
  { id: "textiles", label: "Textiles" },
  { id: "heritage", label: "Heritage" },
];

const brands = [
  { id: "artisan_ayesha", label: "Artisan Ayesha" },
  { id: "heritage_crafts", label: "Heritage Crafts" },
  { id: "bengal_artistry", label: "Bengal Artistry" },
  { id: "village_crafts", label: "Village Crafts" },
  { id: "tradition_touch", label: "Tradition Touch" },
];

function ShoppingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );
  const { featureImageList } = useSelector((state) => state.commonFeature);

  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };
    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }

  function handleGetProductDetails(productId) {
    dispatch(fetchProductDetails(productId));
  }

  function handleAddtoCart(productId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product added to cart",
        });
      }
    });
  }

  useEffect(() => {
    if (productDetails !== null) {
      setOpenDetailsDialog(true);
    }
  }, [productDetails]);

  // Auto-rotate banner slides every 15 seconds
  useEffect(() => {
    if (featureImageList && featureImageList.length > 0) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featureImageList.length);
      }, 15000);
      return () => clearInterval(timer);
    }
  }, [featureImageList]);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner / Slideshow */}
      <div className="relative w-full h-[600px] overflow-hidden">
        {featureImageList &&
          featureImageList.map((slide, index) => (
            <img
              key={index}
              src={slide?.image}
              className={`${
                index === currentSlide ? "opacity-100" : "opacity-0"
              } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
            />
          ))}

        {featureImageList && featureImageList.length > 0 && (
          <>
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                setCurrentSlide(
                  (prev) =>
                    (prev - 1 + featureImageList.length) %
                    featureImageList.length
                )
              }
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % featureImageList.length)
              }
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </Button>
          </>
        )}
      </div>

      {/* Shop by Category */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((item) => (
              <Card
                key={item.id}
                onClick={() => handleNavigateToListingPage(item, "category")}
                className="bg-orange-700 cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6 text-white">
                  <span className="font-bold">{item.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Brand */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Brand</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brands.map((brand) => (
              <Card
                key={brand.id}
                onClick={() => handleNavigateToListingPage(brand, "brand")}
                className="bg-orange-700 cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6 text-white">
                  <span className="font-bold">{brand.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Feature Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList?.length > 0 &&
              productList.map((productItem) => (
                <ShoppingProductTile
                  key={productItem.id}
                  handleGetProductDetails={handleGetProductDetails}
                  product={productItem}
                  handleAddtoCart={handleAddtoCart}
                />
              ))}
          </div>
        </div>
      </section>

      {/* Product Details Dialog */}
      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />

      {/* FOOTER - placed at the end, but still inside main container */}
<footer className="bg-orange-700 text-white mt-auto">
  <div className="container mx-auto px-8 py-8 text-sm md:flex md:justify-between md:items-center">
    {/* Left side: brand statement */}
    <div className="mb-4 md:mb-0">
      <h3 className="font-bold text-lg">Bangla Essence</h3>
      <p className="mt-1 text-gray-100 max-w-sm">
        A celebration of Bangladesh’s heritage and craftsmanship. Support
        local artisans and bring home a piece of our rich cultural history.
      </p>
    </div>

    {/* Right side: additional links */}
    <div className="flex flex-col gap-2 md:gap-4 md:flex-row md:items-center">
      <a href="/about" className="hover:text-gray-300">
        About Us
      </a>
      <a href="/faq" className="hover:text-gray-300">
        FAQ
      </a>
      <a href="/terms" className="hover:text-gray-300">
        Terms &amp; Conditions
      </a>
      <a href="/privacy" className="hover:text-gray-300">
        Privacy Policy
      </a>
    </div>
  </div>

  <div className="container mx-auto px-8 pb-6 text-center text-xs text-gray-100">
    &copy; {new Date().getFullYear()} Bangla Essence. All rights reserved.
  </div>
</footer>

    </div>
  );
}

export default ShoppingHome;
