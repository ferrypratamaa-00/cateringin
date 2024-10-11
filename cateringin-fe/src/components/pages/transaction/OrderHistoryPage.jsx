import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const OrderHistoryPage = () => {
  const navigate = useNavigate();

  const orders = [
    {
      id: 1,
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
      status: "Completed",
      orderDate: "2024-10-01",
      pickupDate: "2024-10-03",
    },
    {
      id: 2,
      items: [
        {
          name: "Burger",
          merchant: "Burger Joint",
          quantity: 1,
          price: 30000,
        },
      ],
      total: 30000,
      status: "Pending",
      orderDate: "2024-10-05",
      pickupDate: "2024-10-07",
    },
  ];

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
            Order History
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          {orders.map((order) => (
            <div
              key={order.id}
              className='border border-gray-300 rounded-lg p-4 shadow-sm'
            >
              <div className='flex justify-between items-center'>
                <h3 className='font-semibold'>Order ID: #{order.id}</h3>
                <span
                  className={`text-sm font-semibold ${
                    order.status === "Completed"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {order.status}
                </span>
              </div>
              <p className='text-gray-500'>Order Date: {order.orderDate}</p>
              <p className='text-gray-500'>Pickup Date: {order.pickupDate}</p>

              <div className='mt-2'>
                <h4 className='font-semibold'>Items:</h4>
                <ul className='list-disc list-inside'>
                  {order.items.map((item, index) => (
                    <li key={index}>
                      {item.name} from {item.merchant} x {item.quantity} - $
                      {item.price * item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-2 border-t border-gray-300 pt-2'>
                <p className='font-semibold'>Total: ${order.total}</p>
                <Button
                  className='mt-2'
                  onClick={() => navigate(`/invoice/${order.id}`)}
                >
                  View Invoice
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderHistoryPage;
