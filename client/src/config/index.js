export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "nakshi_kantha", label: "Nakshi Kantha" },
      { id: "terracotta", label: "Terracotta" },
      { id: "wooden_items", label: "Wooden Items" },
      { id: "bamboo_items", label: "Bamboo Items" },
      { id: "jewelry", label: "Jewelry" },
      { id: "textiles", label: "Textiles" },
      { id: "heritage", label: "Heritage" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "artisan_ayesha", label: "Artisan Ayesha" },
      { id: "heritage_crafts", label: "Heritage Crafts" },
      { id: "bengal_artistry", label: "Bengal Artistry" },
      { id: "village_crafts", label: "Village Crafts" },
      { id: "tradition_touch", label: "Tradition Touch" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const filterOptions = {
  category: [
    { id: "nakshi_kantha", label: "Nakshi Kantha" },
    { id: "terracotta", label: "Terracotta" },
    { id: "wooden_items", label: "Wooden Items" },
    { id: "bamboo_items", label: "Bamboo Items" },
    { id: "jewelry", label: "Jewelry" },
    { id: "textiles", label: "Textiles" },
    { id: "heritage", label: "Heritage" },
  ],
  brand: [
    { id: "artisan_ayesha", label: "Artisan Ayesha" },
    { id: "heritage_crafts", label: "Heritage Crafts" },
    { id: "bengal_artistry", label: "Bengal Artistry" },
    { id: "village_crafts", label: "Village Crafts" },
    { id: "tradition_touch", label: "Tradition Touch" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const categoryOptionsMap = {
  nakshi_kantha: "Nakshi Kantha",
  terracotta: "Terracotta",
  wooden_items: "Wooden Items",
  bamboo_items: "Bamboo Items",
  jewelry: "Jewelry",
  textiles: "Textiles",
  heritage: "Heritage"
};

export const brandOptionsMap = {
  artisan_ayesha: "Artisan Ayesha",
  heritage_crafts: "Heritage Crafts",
  bengal_artistry: "Bengal Artistry",
  village_crafts: "Village Crafts",
  tradition_touch: "Tradition Touch"
};

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
