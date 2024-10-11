import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  Coffee,
  Pizza,
  Salad,
  Cookie,
  Dessert,
  ChevronsUpDown,
  FilterIcon,
  Check,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import ProductDetail from "@/components/components/ProductDetail";

const products = [
  {
    id: 1,
    name: "Nasi Goreng",
    type: "Makanan",
    city: "Jakarta City",
    district: "Jakarta",
    price: 20000,
    rating: 4.5,
    merchant: "Catering One",
    image: "https://picsum.photos/200/300",
    description: "Delicious fried rice.",
    reviews: [
      { reviewer: "John Doe", rating: 5, comment: "Delicious and flavorful!" },
      {
        reviewer: "Jane Smith",
        rating: 4,
        comment: "Really good, will order again.",
      },
      {
        reviewer: "Ali Ahmad",
        rating: 4.5,
        comment: "Satisfying meal, loved it!",
      },
    ],
  },
  {
    id: 2,
    name: "Sushi",
    type: "Makanan",
    city: "Surabaya City",
    district: "Surabaya",
    price: 50000,
    rating: 4.8,
    merchant: "Sushi House",
    image: "https://picsum.photos/200/300",
    description: "Fresh sushi with wasabi.",
    reviews: [
      { reviewer: "Maria Garcia", rating: 5, comment: "Best sushi in town!" },
      {
        reviewer: "Tommy Lee",
        rating: 4.5,
        comment: "Very fresh and delicious!",
      },
      { reviewer: "Lisa Wong", rating: 4, comment: "Good, but a bit pricey." },
    ],
  },
  {
    id: 3,
    name: "Burger",
    type: "Makanan",
    city: "Bandung City",
    district: "Bandung",
    price: 30000,
    rating: 4.2,
    merchant: "Burger Palace",
    image: "https://picsum.photos/200/300",
    description: "Juicy beef burger.",
    reviews: [
      { reviewer: "Robert Brown", rating: 4.5, comment: "Juicy and filling!" },
      {
        reviewer: "Emma Wilson",
        rating: 4,
        comment: "Nice flavor, will come back!",
      },
      {
        reviewer: "David Johnson",
        rating: 3.5,
        comment: "Good, but could be better.",
      },
    ],
  },
  {
    id: 4,
    name: "Coca Cola",
    type: "Minuman",
    city: "Jakarta City",
    district: "Jakarta",
    price: 10000,
    rating: 4.5,
    merchant: "Beverage World",
    image: "https://picsum.photos/200/300",
    description: "Refreshing soda drink.",
    reviews: [
      { reviewer: "Sarah Connor", rating: 5, comment: "Always a classic!" },
      { reviewer: "Kyle Reese", rating: 4, comment: "Perfect with my meal." },
      {
        reviewer: "Hannah Baker",
        rating: 4.5,
        comment: "Refreshing and tasty!",
      },
    ],
  },
  {
    id: 5,
    name: "Pasta Carbonara",
    type: "Makanan",
    city: "Bali",
    district: "Kuta",
    price: 45000,
    rating: 4.7,
    merchant: "Italian Bistro",
    image: "https://picsum.photos/200/300",
    description: "Creamy pasta with bacon and cheese.",
    reviews: [
      {
        reviewer: "Chris Hemsworth",
        rating: 5,
        comment: "Best pasta I've ever had!",
      },
      {
        reviewer: "Natalie Portman",
        rating: 4.5,
        comment: "Creamy and rich in flavor.",
      },
      {
        reviewer: "Leonardo DiCaprio",
        rating: 4,
        comment: "Really good, but a bit heavy.",
      },
    ],
  },
  {
    id: 6,
    name: "Taco",
    type: "Makanan",
    city: "Yogyakarta",
    district: "Yogyakarta",
    price: 25000,
    rating: 4.3,
    merchant: "Mexican Fiesta",
    image: "https://picsum.photos/200/300",
    description: "Spicy taco with fresh ingredients.",
    reviews: [
      { reviewer: "Bruce Wayne", rating: 4.5, comment: "Love the spicy kick!" },
      {
        reviewer: "Clark Kent",
        rating: 4,
        comment: "Good, but could use more toppings.",
      },
      {
        reviewer: "Peter Parker",
        rating: 4.2,
        comment: "Very tasty, will return!",
      },
    ],
  },
];

const HomePage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setDrawerOpen(true); // Buka drawer saat kartu diklik
  };

  return (
    <div className='p-2 md:p-6'>
      <div className='flex flex-col md:justify-between md:space-x-4 mb-8'>
        <div className='mb-6 md:ms-4'>
          <Filter />
        </div>
        <div className='m-0 grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 lg:space-x-4'>
          <ProductDetail />
          {products.map((product) => {
            return (
              <Card
                key={product.id}
                className='shadow-sm hover:shadow transition-shadow duration-300 mb-4 md:mx-2 lg:mx-0'
                onClick={() => handleCardClick(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className='w-full h-40 object-cover rounded-t-md'
                />
                <CardContent className='p-4'>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                  <CardDescription className='mt-2 text-yellow-600 font-semibold'>
                    Rp {product.price.toLocaleString()}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      {selectedProduct && (
        <ProductDetail
          item={selectedProduct}
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)} // Fungsi untuk menutup drawer
        />
      )}
    </div>
  );
};

function Filter() {
  return (
    <div className='flex flex-col md:items-center space-y-2 md:space-x-4 md:flex-row '>
      <FilterButtonAction />
      <div className='max-w-full overflow-auto scrollbar-hide'>
        <div className='w-80 md:w-[calc(100vw-200px)] lg:w-full flex space-x-4'>
          <FilterItem
            to={"?menu=junk-food"}
            label={"Junk Food"}
            icon={<Pizza />}
          />
          <FilterItem
            to={"?menu=fast-food"}
            label={"Fast Food"}
            icon={<Dessert />}
          />
          <FilterItem to={"?menu=healthy"} label={"Healthy"} icon={<Salad />} />
          <FilterItem
            to={"?menu=cemilan"}
            label={"Cemilan"}
            icon={<Cookie />}
          />
          <FilterItem to={"?menu=coffee"} label={"Coffee"} icon={<Coffee />} />
          <FilterItem to={"?menu=tea"} label={"Tea"} icon={<Coffee />} />
          <FilterItem to={"?menu=juice"} label={"Juice"} icon={<Coffee />} />
          <FilterItem to={"?menu=soda"} label={"Soda"} icon={<Coffee />} />
        </div>
      </div>
    </div>
  );
}
function FilterButtonAction() {
  const languages = [
    { label: "English", value: "en" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" },
    { label: "Spanish", value: "es" },
    { label: "Portuguese", value: "pt" },
    { label: "Russian", value: "ru" },
    { label: "Japanese", value: "ja" },
    { label: "Korean", value: "ko" },
    { label: "Chinese", value: "zh" },
  ];

  const [filterValues, setFilterValues] = useState({
    priceStart: "",
    priceEnd: "",
    province: "",
    city: "",
    district: "",
    village: "",
  });

  const updateFilterValues = (name, value) => {
    setFilterValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = () => {
    console.log(filterValues);
  };

  const onReset = () => {
    setFilterValues({
      priceStart: "",
      priceEnd: "",
      province: "",
      city: "",
      district: "",
      village: "",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' className='w-20 space-x-2'>
          <FilterIcon />
          Filter
        </Button>
      </DialogTrigger>
      <DialogContent className=''>
        <DialogTitle>Filter</DialogTitle>
        <div className='flex flex-col space-y-4'>
          <div id='location'>
            <DialogTitle className='mb-2 text-sm'>Location</DialogTitle>
            <div className='grid grid-cols-2 gap-2'>
              <div className='grid space-y-2' id='province'>
                <Label>Province</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant='outline'
                      role='combobox'
                      className={`justify-between w-full ${
                        !filterValues.province && "text-muted-foreground"
                      }`}
                    >
                      {filterValues.province
                        ? languages.find(
                            (language) =>
                              language.value === filterValues.province
                          )?.label
                        : "Select province"}
                      <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className='w-[200px] p-0'>
                    <Command>
                      <CommandInput placeholder='Search language...' />
                      <CommandList>
                        <CommandEmpty>No language found.</CommandEmpty>
                        <CommandGroup>
                          {languages.map((language) => (
                            <CommandItem
                              value={language.label}
                              key={language.value}
                              onSelect={() =>
                                updateFilterValues("province", language.value)
                              }
                            >
                              <Check
                                className={`mr-2 h-4 w-4 ${
                                  language.value === filterValues.province
                                    ? "opacity-100"
                                    : "opacity-0"
                                }`}
                              />
                              {language.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              <div className='grid space-y-2' id='city'>
                <Label>City</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant='outline'
                      role='combobox'
                      className={`justify-between w-full ${
                        !filterValues.city && "text-muted-foreground"
                      }`}
                    >
                      {filterValues.city
                        ? languages.find(
                            (language) => language.value === filterValues.city
                          )?.label
                        : "Select city"}
                      <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className='w-[200px] p-0'>
                    <Command>
                      <CommandInput placeholder='Search language...' />
                      <CommandList>
                        <CommandEmpty>No language found.</CommandEmpty>
                        <CommandGroup>
                          {languages.map((language) => (
                            <CommandItem
                              value={language.label}
                              key={language.value}
                              onSelect={() =>
                                updateFilterValues("city", language.value)
                              }
                            >
                              <Check
                                className={`mr-2 h-4 w-4 ${
                                  language.value === filterValues.city
                                    ? "opacity-100"
                                    : "opacity-0"
                                }`}
                              />
                              {language.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              <div className='grid space-y-2' id='district'>
                <Label>District</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant='outline'
                      role='combobox'
                      className={`justify-between w-full ${
                        !filterValues.district && "text-muted-foreground"
                      }`}
                    >
                      {filterValues.district
                        ? languages.find(
                            (language) =>
                              language.value === filterValues.district
                          )?.label
                        : "Select district"}
                      <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className='w-[200px] p-0'>
                    <Command>
                      <CommandInput placeholder='Search language...' />
                      <CommandList>
                        <CommandEmpty>No language found.</CommandEmpty>
                        <CommandGroup>
                          {languages.map((language) => (
                            <CommandItem
                              value={language.label}
                              key={language.value}
                              onSelect={() =>
                                updateFilterValues("district", language.value)
                              }
                            >
                              <Check
                                className={`mr-2 h-4 w-4 ${
                                  language.value === filterValues.district
                                    ? "opacity-100"
                                    : "opacity-0"
                                }`}
                              />
                              {language.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              <div className='grid space-y-2' id='village'>
                <Label>Village</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant='outline'
                      role='combobox'
                      className={`justify-between w-full ${
                        !filterValues.village && "text-muted-foreground"
                      }`}
                    >
                      {filterValues.village
                        ? languages.find(
                            (language) =>
                              language.value === filterValues.village
                          )?.label
                        : "Select village"}
                      <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className='w-[200px] p-0'>
                    <Command>
                      <CommandInput placeholder='Search language...' />
                      <CommandList>
                        <CommandEmpty>No language found.</CommandEmpty>
                        <CommandGroup>
                          {languages.map((language) => (
                            <CommandItem
                              value={language.label}
                              key={language.value}
                              onSelect={() =>
                                updateFilterValues("village", language.value)
                              }
                            >
                              <Check
                                className={`mr-2 h-4 w-4 ${
                                  language.value === filterValues.village
                                    ? "opacity-100"
                                    : "opacity-0"
                                }`}
                              />
                              {language.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          <div className='price'>
            <DialogTitle className='mb-2 text-sm'>Price</DialogTitle>
            <div className='space-y-2'>
              <div className='flex justify-evenly items-center'>
                <div>
                  <Label>Start</Label>
                  <Input
                    placeholder='1000'
                    type='number'
                    step='1'
                    min={0}
                    value={filterValues.priceStart}
                    onChange={(e) =>
                      updateFilterValues("priceStart", e.target.value)
                    }
                  />
                </div>
                <span className='text-base font-bold mx-1 mt-4'>-</span>
                <div>
                  <Label>End</Label>
                  <Input
                    placeholder='100000'
                    type='number'
                    step='1'
                    min={0}
                    value={filterValues.priceEnd}
                    onChange={(e) =>
                      updateFilterValues("priceEnd", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-between'>
            <Button type='button' variant='outline' onClick={onReset}>
              Reset
            </Button>
            <Button type='button' onClick={onSubmit}>
              Apply
            </Button>
          </div>
        </div>
        <DialogDescription />
      </DialogContent>
    </Dialog>
  );
}

function FilterItem({ to, label, icon }) {
  return (
    <Link
      to={to}
      className={`border flex flex-row space-x-2 items-center py-2 px-4 text-gray-500 hover:text-yellow-600 transition-colors duration-300 rounded-full min-w-[140px]`}
    >
      {icon}
      <p className='text-sm'>{label}</p>
    </Link>
  );
}

export default HomePage;
