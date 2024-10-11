import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { searchSchema } from "@/utils/schemas/searchSchema";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Search, User, UserCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const form = useForm({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      keyword: "",
    },
  });

  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <header className='h-20 p-4 fixed top-0 w-full bg-white flex items-center justify-between border-b shadow-sm z-50'>
      <div className='flex items-center space-x-4'>
        <div className='font-bold text-xl text-yellow-600 hidden md:block'>
          CATERINGIN
        </div>
        <Searching form={form} onSubmit={onSubmit} />
      </div>
      <Menu />
    </header>
  );
};

function Searching({ form, onSubmit }) {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex items-center space-x-2 border border-gray-200 p-1 rounded-full'
      >
        <FormField
          control={form.control}
          name='keyword'
          render={({ field }) => (
            <FormItem className='w-60 md:w-80'>
              <FormControl className='ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0 shadow-none pb-0'>
                <Input
                  placeholder='Search for something...'
                  {...field}
                  className='bg-transparent focus:outline-none border-none ring-0'
                />
              </FormControl>
              <FormMessage className='text-xs italic font-normal text-gray-500 mt-1' />
            </FormItem>
          )}
        />
        <button
          type='submit'
          className='p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors'
        >
          <Search className='w-5 h-5' />
        </button>
      </form>
    </Form>
  );
}

function Menu() {
  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='flex items-center space-x-2 cursor-pointer'>
          <p className='font-medium hidden md:block'>Ferry Agus</p>
          <UserCircle2 className='rounded-full text-yellow-500' size={30} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56 mt-2 shadow-md'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className='mr-2 h-4 w-4' />
            <span onClick={() => navigate("/profile")}>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className='mr-2 h-4 w-4' />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Header;
