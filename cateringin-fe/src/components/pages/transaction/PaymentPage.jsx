import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [paymentReceipt, setPaymentReceipt] = useState(null);
  const navigate = useNavigate();

  const handlePayment = () => {
    if (paymentMethod === "bank_transfer" && !paymentReceipt) {
      alert("Please upload your payment receipt.");
      return;
    }

    alert("Payment successful!");
    navigate("/history");
  };

  const handleReceiptUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPaymentReceipt(URL.createObjectURL(file));
    }
  };

  return (
    <div className='container mx-auto p-4'>
      <Card className='mx-auto max-w-lg shadow-lg'>
        <CardHeader>
          <CardTitle className='text-2xl text-center font-bold'>
            Payment Information
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div>
            <Label htmlFor='paymentMethod' className='text-lg font-semibold'>
              Select Payment Method
            </Label>
            <div className='mt-2 flex justify-around'>
              <Button
                variant={
                  paymentMethod === "credit_card" ? "default" : "outline"
                }
                onClick={() => setPaymentMethod("credit_card")}
              >
                Credit Card
              </Button>
              <Button
                variant={
                  paymentMethod === "bank_transfer" ? "default" : "outline"
                }
                onClick={() => setPaymentMethod("bank_transfer")}
              >
                Bank Transfer
              </Button>
              <Button
                variant={paymentMethod === "ewallet" ? "default" : "outline"}
                onClick={() => setPaymentMethod("ewallet")}
              >
                E-Wallet
              </Button>
            </div>
          </div>

          {paymentMethod === "credit_card" && (
            <div className='space-y-4'>
              <div>
                <Label htmlFor='cardNumber'>Card Number</Label>
                <Input
                  id='cardNumber'
                  type='text'
                  placeholder='1234 5678 9876 5432'
                  value={cardDetails.cardNumber}
                  onChange={(e) =>
                    setCardDetails({
                      ...cardDetails,
                      cardNumber: e.target.value,
                    })
                  }
                />
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <Label htmlFor='expiryDate'>Expiry Date</Label>
                  <Input
                    id='expiryDate'
                    type='text'
                    placeholder='MM/YY'
                    value={cardDetails.expiryDate}
                    onChange={(e) =>
                      setCardDetails({
                        ...cardDetails,
                        expiryDate: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor='cvv'>CVV</Label>
                  <Input
                    id='cvv'
                    type='text'
                    placeholder='123'
                    value={cardDetails.cvv}
                    onChange={(e) =>
                      setCardDetails({ ...cardDetails, cvv: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          )}

          {paymentMethod === "bank_transfer" && (
            <div>
              <p className='text-gray-600'>
                Please transfer to the following account:
              </p>
              <p className='font-semibold mt-2'>Bank ABC: 1234567890</p>
              <p className='text-sm text-gray-500 mt-1'>
                (Order will be processed after payment confirmation)
              </p>
              <div className='mt-2'>
                <Label htmlFor='receipt' className='mt-4'>
                  Upload Payment Receipt
                </Label>
                <Input
                  id='receipt'
                  type='file'
                  accept='image/*'
                  onChange={handleReceiptUpload}
                />
                {paymentReceipt && (
                  <img
                    src={paymentReceipt}
                    alt='Payment Receipt Preview'
                    className='mt-2 w-full h-auto'
                  />
                )}
              </div>
            </div>
          )}

          {paymentMethod === "ewallet" && (
            <div>
              <p className='text-gray-600'>
                Scan this QR code to pay via E-Wallet:
              </p>
              <img
                src='https://picsum.photos/200/200'
                alt='QR Code'
                className='mx-auto my-4'
              />
            </div>
          )}

          <Button className='w-full' onClick={handlePayment}>
            Confirm Payment
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentPage;
