import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useNavigate } from "react-router-dom";

export const CartPage = ({ open, setOpen, products, buyerInfo }) => {
  const navigate = useNavigate();

  const [invoiceProducts, setInvoiceProducts] = useState(
    products.map((product) => ({
      ...product,
      qty: 1,
      totalPrice: product.price,
    }))
  );

  const orderTime = new Date().toLocaleString();
  const pickupTime = new Date(Date.now() + 60 * 60 * 1000).toLocaleString();

  const increaseQty = (id) => {
    setInvoiceProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? {
              ...product,
              qty: product.qty + 1,
              totalPrice: (product.qty + 1) * product.price,
            }
          : product
      )
    );
  };

  const decreaseQty = (id) => {
    setInvoiceProducts((prev) =>
      prev.map((product) =>
        product.id === id && product.qty > 1
          ? {
              ...product,
              qty: product.qty - 1,
              totalPrice: (product.qty - 1) * product.price,
            }
          : product
      )
    );
  };

  const removeProduct = (id) => {
    setInvoiceProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const groupedProducts = invoiceProducts.reduce((acc, product) => {
    const merchant = product.merchant;
    if (!acc[merchant]) acc[merchant] = [];
    acc[merchant].push(product);
    return acc;
  }, {});

  const calculateTotal = () => {
    return invoiceProducts.reduce(
      (sum, product) => sum + product.totalPrice,
      0
    );
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant='outline'>Show Invoice</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Invoice</DrawerTitle>
          <Button
            variant='ghost'
            className='absolute top-4 right-4'
            onClick={() => setOpen(false)}
          >
            <X />
          </Button>
        </DrawerHeader>

        <div className='mb-4 px-4'>
          <p className='font-semibold text-lg'>Buyer Info</p>
          <p>Name: {buyerInfo.name}</p>
          <p>Email: {buyerInfo.email}</p>
          <p>Address: {buyerInfo.address}</p>
        </div>

        <div className='mb-4 px-4'>
          <p className='font-semibold text-lg'>Order Information</p>
          <p>Order Time: {orderTime}</p>
          <p>Estimated Pickup Time: {pickupTime}</p>
        </div>

        {Object.keys(groupedProducts).map((merchant) => (
          <div key={merchant} className='mb-6 px-4'>
            <h3 className='font-bold text-xl mb-2'>Merchant: {merchant}</h3>
            <div className='space-y-4'>
              {groupedProducts[merchant].map((product) => (
                <div
                  key={product.id}
                  className='flex items-center justify-between border-b pb-2'
                >
                  <div className='flex items-center space-x-4'>
                    <img
                      src={product.image}
                      alt={product.name}
                      className='w-16 h-16 object-cover rounded-md'
                    />
                    <div>
                      <p className='font-semibold'>{product.name}</p>
                      <p className='text-sm text-gray-600'>
                        {product.description}
                      </p>
                      <p className='font-semibold text-gray-700'>
                        Price: Rp {product.price.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className='flex items-center space-x-2'>
                    <Button
                      variant='outline'
                      onClick={() => decreaseQty(product.id)}
                    >
                      -
                    </Button>
                    <span>{product.qty}</span>
                    <Button
                      variant='outline'
                      onClick={() => increaseQty(product.id)}
                    >
                      +
                    </Button>
                  </div>

                  <p className='font-semibold'>
                    Rp {product.totalPrice.toLocaleString()}
                  </p>

                  <Button
                    variant='ghost'
                    className='text-red-500'
                    onClick={() => removeProduct(product.id)}
                  >
                    <X />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className='text-right mt-4 px-4'>
          <p className='text-lg font-bold'>
            Total Payment: Rp {calculateTotal().toLocaleString()}
          </p>
        </div>

        <DrawerFooter className='flex justify-between mt-4 px-4'>
          <Button variant='outline' onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button className='mt-4 w-full' onClick={() => navigate("/payment")}>
            Proceed to Payment
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
