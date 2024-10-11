import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";

const InvoicePage = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const order = {
    id: orderId,
    items: [
      {
        name: "Nasi Goreng",
        merchant: "Catering One",
        quantity: 2,
        price: 20000,
      },
      {
        name: "Sushi",
        merchant: "Sushi House",
        quantity: 1,
        price: 50000,
      },
    ],
    total: 90000,
    buyerInfo: {
      name: "John Doe",
      email: "john@example.com",
      address: "123 Main St, Jakarta",
    },
    orderDate: "2024-10-01",
    pickupDate: "2024-10-03",
  };

  return (
    <div className='container mx-auto p-4'>
      <div className='mb-4'>
        <Button variant='outline' onClick={() => navigate(-1)}>
          Kembali
        </Button>
      </div>
      <Card className='mx-auto shadow-lg'>
        <CardHeader>
          <CardTitle className='text-2xl text-center font-bold'>
            Invoice #{order.id}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='mb-4'>
            <h4 className='font-semibold'>Buyer Information</h4>
            <p>Name: {order.buyerInfo.name}</p>
            <p>Email: {order.buyerInfo.email}</p>
            <p>Address: {order.buyerInfo.address}</p>
          </div>
          <div className='mb-4'>
            <h4 className='font-semibold'>Order Details</h4>
            <p>Order Date: {order.orderDate}</p>
            <p>Pickup Date: {order.pickupDate}</p>
          </div>
          <div className='mb-4'>
            <h4 className='font-semibold'>Items</h4>
            <ul className='list-disc list-inside'>
              {order.items.map((item, index) => (
                <li key={index}>
                  {item.name} from {item.merchant} x {item.quantity} - $
                  {item.price * item.quantity}
                </li>
              ))}
            </ul>
          </div>
          <div className='border-t border-gray-300 pt-2'>
            <p className='font-semibold'>Total: ${order.total}</p>
          </div>
          <div className='mt-4 flex justify-end'>
            <Button variant='outline' onClick={() => alert("Print Invoice")}>
              Print Invoice
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvoicePage;
