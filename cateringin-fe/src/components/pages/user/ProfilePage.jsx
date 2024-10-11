import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const profileSchema = z.object({
  company: z.string().min(1, "Company name is required"),
  province: z.string().min(1, "Province is required"),
  city: z.string().min(1, "City is required"),
  district: z.string().min(1, "District is required"),
  village: z.string().min(1, "Village is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

const passwordSchema = z.object({
  oldPassword: z.string().min(6, "Old password is required"),
  newPassword: z.string().min(6, "New password is required"),
  confirmPassword: z
    .string()
    .min(6, "Confirm password is required")
    .refine((val, ctx) => {
      if (val !== ctx.parent.newPassword) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Passwords must match",
        });
        return false;
      }
      return true;
    }),
});

const ProfilePage = () => {
  const navigate = useNavigate();

  const [accountData] = useState({
    username: "john_doe",
    accountType: "merchant",
    createdDate: "2024-01-01",
  });

  const {
    register: registerProfile,
    handleSubmit: handleSubmitProfile,
    formState: { errors: profileErrors },
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      company: "Your Company Name",
      province: "Jawa Timur",
      city: "Probolinggo",
      district: "Bantaran",
      village: "Karanganyar",
      email: "john@example.com",
      phone: "08123456789",
    },
  });

  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: passwordErrors },
  } = useForm({
    resolver: zodResolver(passwordSchema),
  });

  const onSubmitProfile = (data) => {
    console.log("Updated Profile Data: ", data);
  };

  const onSubmitPassword = (data) => {
    console.log("Password changed: ", data);
  };

  return (
    <div className='container mx-auto p-4 w-full md:w-1/2'>
      <div className='mb-4'>
        <Button variant='outline' onClick={() => navigate(-1)}>
          Kembali
        </Button>
      </div>
      <Card className='shadow-lg mb-6'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold'>
            Profile Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmitProfile(onSubmitProfile)}
            className='grid grid-cols-1 md:grid-cols-2 gap-4'
          >
            {Object.keys(profileSchema.shape).map((key) => (
              <div key={key} className='flex flex-col'>
                <Label htmlFor={key} className='font-semibold'>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Label>
                <Input id={key} {...registerProfile(key)} className='mt-1' />
                {profileErrors[key] && (
                  <span className='text-red-500 text-sm'>
                    {profileErrors[key]?.message}
                  </span>
                )}
              </div>
            ))}
            <div className='flex flex-col mt-4 md:col-span-2'>
              <Button type='submit'>Update</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card className='shadow-lg'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold'>
            Account Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='flex flex-col'>
              <Label htmlFor='username' className='font-semibold'>
                Username
              </Label>
              <Input
                id='username'
                value={accountData.username}
                readOnly
                className='mt-1'
              />
            </div>
            <div className='flex flex-col'>
              <Label htmlFor='accountType' className='font-semibold'>
                Account Type
              </Label>
              <Input
                id='accountType'
                value={accountData.accountType}
                readOnly
                className='mt-1'
              />
            </div>
            <div className='flex flex-col'>
              <Label htmlFor='createdDate' className='font-semibold'>
                Created Date
              </Label>
              <Input
                id='createdDate'
                value={accountData.createdDate}
                readOnly
                className='mt-1'
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className='shadow-lg mt-6'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold'>Change Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmitPassword(onSubmitPassword)}
            className='grid grid-cols-1 gap-4'
          >
            <div className='flex flex-col'>
              <Label htmlFor='oldPassword' className='font-semibold'>
                Old Password
              </Label>
              <Input
                id='oldPassword'
                type='password'
                {...registerPassword("oldPassword")}
                className='mt-1'
              />
              {passwordErrors.oldPassword && (
                <span className='text-red-500 text-sm'>
                  {passwordErrors.oldPassword?.message}
                </span>
              )}
            </div>
            <div className='flex flex-col'>
              <Label htmlFor='newPassword' className='font-semibold'>
                New Password
              </Label>
              <Input
                id='newPassword'
                type='password'
                {...registerPassword("newPassword")}
                className='mt-1'
              />
              {passwordErrors.newPassword && (
                <span className='text-red-500 text-sm'>
                  {passwordErrors.newPassword?.message}
                </span>
              )}
            </div>
            <div className='flex flex-col'>
              <Label htmlFor='confirmPassword' className='font-semibold'>
                Confirm Password
              </Label>
              <Input
                id='confirmPassword'
                type='password'
                {...registerPassword("confirmPassword")}
                className='mt-1'
              />
              {passwordErrors.confirmPassword && (
                <span className='text-red-500 text-sm'>
                  {passwordErrors.confirmPassword?.message}
                </span>
              )}
            </div>
            <div className='flex flex-col mt-4'>
              <Button type='submit'>Change Password</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
