import { useState } from "react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Check, ChevronsUpDown, ChevronsUpDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Form, useForm } from "react-hook-form";

const products = [
  {
    id: 1,
    name: "Nasi Goreng",
    type: "Makanan",
    location: "Jakarta",
    price: 20000,
    image: "https://picsum.photos/200/300",
    description: "Delicious fried rice.",
  },
  {
    id: 2,
    name: "Sushi",
    type: "Makanan",
    location: "Surabaya",
    price: 50000,
    image: "https://picsum.photos/200/300",
    description: "Fresh sushi with wasabi.",
  },
  {
    id: 3,
    name: "Burger",
    type: "Makanan",
    location: "Bandung",
    price: 30000,
    image: "https://picsum.photos/200/300",
    description: "Juicy beef burger.",
  },
  {
    id: 4,
    name: "Coca Cola",
    type: "Minuman",
    location: "Jakarta",
    price: 10000,
    image: "https://picsum.photos/200/300",
    description: "Refreshing soda drink.",
  },
];

const locations = ["Jakarta", "Surabaya", "Bandung"];
const types = ["Makanan", "Minuman"];

const HomePage = () => {
  const [selectedType, setSelectedType] = useState("");
  const [filteredLocation, setFilteredLocation] = useState({
    province: "",
    city: "",
    district: "",
    village: "",
  });
  const [selectedPrice, setSelectedPrice] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const applyFilters = (values) => {
    setFilteredLocation(values);
  };

  const filteredProducts = products.filter(
    (product) =>
      (selectedType === "" || product.type === selectedType) &&
      (filteredLocation.province === "" ||
        product.location === filteredLocation.province) &&
      product.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div className='p-6'>
      <div className='flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0 md:space-x-4 mb-8'>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              className={cn("w-64", !selectedType && "text-muted-foreground")}
            >
              {selectedType ? selectedType : "Select Type"}
              <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-[150px] p-0'>
            <Command>
              <CommandInput placeholder='Search type...' />
              <CommandList>
                <CommandEmpty>No type found.</CommandEmpty>
                <CommandGroup>
                  {types.map((type) => (
                    <CommandItem
                      key={type}
                      onSelect={() => setSelectedType(type)}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          type === selectedType ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {type}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <DialogDemo onApply={applyFilters} />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Card
              key={product.id}
              className='shadow-lg hover:shadow-xl transition-shadow duration-300'
            >
              <img
                src={product.image}
                alt={product.name}
                className='w-full h-40 object-cover rounded-t-md'
              />
              <CardContent className='p-4'>
                <h3 className='text-lg font-bold'>{product.name}</h3>
                <p className='text-gray-500'>{product.description}</p>
                <CardDescription className='mt-2'>
                  <span className='text-yellow-600 font-semibold'>
                    Rp {product.price.toLocaleString()}
                  </span>
                </CardDescription>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className='text-center text-gray-500 col-span-full'>
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

function DialogDemo({ onApply }) {
  const form = useForm({
    defaultValues: {
      priceStart: 0,
      priceEnd: 0,
      province: "",
      city: "",
      district: "",
      village: "",
    },
  });

  const [values, setValues] = useState({
    province: "",
    city: "",
    district: "",
    village: "",
    price: "",
  });

  const handleInputChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleApply = () => {
    onApply(values);
  };

  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Filter</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
            <DialogHeader>
              <DialogTitle>Filter Produk</DialogTitle>
            </DialogHeader>
            <div className='grid gap-4 py-4'>
              <div className='grid gap-4'>
                <Label>Lokasi</Label>
                {["province", "city", "district", "village"].map((name) => (
                  <FormField
                    key={name}
                    control={form.control}
                    name={name}
                    render={({ field }) => (
                      <FormItem className='grid'>
                        <FormLabel>
                          {name.charAt(0).toUpperCase() + name.slice(1)}
                        </FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant='outline'
                                role='combobox'
                                className={cn(
                                  "justify-between",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? field.value : "Select"}
                                <ChevronsUpDownIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className='w-[200px] p-0'>
                            <Command>
                              <CommandInput placeholder={`Search ${name}...`} />
                              <CommandList>
                                <CommandEmpty>No {name} found.</CommandEmpty>
                                <CommandGroup>
                                  {locations.map((location) => (
                                    <CommandItem
                                      key={location}
                                      value={location}
                                      onSelect={() =>
                                        form.setValue(name, location)
                                      }
                                    >
                                      <Check
                                        className={cn(
                                          "mr-2 h-4 w-4",
                                          location === field.value
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                      />
                                      {location}
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
              </div>

              <div className='grid gap-4'>
                <FormField
                  control={form.control}
                  name='priceStart'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price Start</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='1000'
                          {...field}
                          type='number'
                          step='1'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='priceEnd'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price End</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='500000'
                          {...field}
                          type='number'
                          step='1'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant='outline' onClick={handleApply}>
                Apply Filters
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default HomePage;
