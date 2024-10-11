import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Star, StarHalf, X } from "lucide-react";

const ProductDetail = ({ item, open, onClose }) => {
  if (!item) return null;
  return (
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerContent>
        <DrawerHeader className='flex justify-between items-center'>
          <DrawerTitle>Product Detail</DrawerTitle>
          <DrawerClose>
            <Button variant='ghost'>
              <X />
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <div className='m-4 flex flex-col md:flex-row'>
          <Card className='md:w-1/2'>
            <CardHeader>
              <img
                src={item.image}
                alt={item.name}
                className='h-40 w-full object-cover rounded-t-md'
              />
              <CardTitle className='text-xl font-bold'>{item.name}</CardTitle>
              <CardDescription className='text-sm'>
                {item.merchant}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-lg font-semibold'>Merchant: {item.merchant}</p>
              <p className='text-lg font-semibold'>Price: ${item.price}</p>
              <div className='flex items-center'>
                <Star className='text-yellow-500' />
                <span className='ml-1'>{item.rating} / 5</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant='outline'
                onClick={() => alert(`Added ${item.name} to cart`)}
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
          <Card className='md:w-1/2 md:ml-4 mt-4 md:mt-0'>
            <CardDescription className='text-gray-600 p-4'>
              <div className='mb-2'>
                <strong>Description:</strong>
                <p>{item.description}</p>
              </div>
              <div className='mb-2'>
                <strong>Location:</strong>
                <p>{item.location}</p> {/* Menambahkan lokasi */}
              </div>
              <div className='mb-2'>
                <strong>Food Type:</strong>
                <p>{item.foodType}</p> {/* Menambahkan jenis makanan */}
              </div>
              <div className='mb-2'>
                <h3 className='text-lg font-bold mb-2'>Reviews:</h3>
                {item.reviews.map((review, index) => (
                  <div
                    key={index}
                    className='border-b border-gray-300 pb-2 mb-2'
                  >
                    <p className='font-semibold'>{review.reviewer}</p>
                    <p className='text-sm text-gray-500'>{`Rating: ${review.rating} ⭐`}</p>
                    <p className='text-gray-600'>{review.comment}</p>
                  </div>
                ))}
              </div>
            </CardDescription>
          </Card>
        </div>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ProductDetail;
