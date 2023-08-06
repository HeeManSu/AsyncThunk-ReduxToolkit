import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";


import React from 'react'

const NavbarComponent = () => {
  return (
    <Navbar className="mx-auto max-w-full px-10 py-5">
      <div className="flex flex-wrap items-center justify-around gap-y-4 text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          RTK
        </Typography>
        <div className="flex gap-10 items-center">
          <Button>Create Post</Button>
          <Button>All post</Button>
        </div>
        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            label="Type here..."
            className="pr-20"
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          <Button size="sm" className="!absolute right-1 top-1 rounded">
            Search
          </Button>
        </div>
      </div>
    </Navbar>
  );
}

export default NavbarComponent