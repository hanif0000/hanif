"use client";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import React from "react";
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <main>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">SRS</ModalHeader>
                <ModalBody>
                  <p>
                    Derma lah sikit...
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    OK lah...
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">Menderma amalan mulia...</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-1" justify="center">
          <Link href="/rg">About us</Link>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button onPress={onOpen} color="primary" href="#" variant="flat">
              Taknak menderma?
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

<div >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', paddingTop: '25vh' }} className="text-3xl">
        <h1>Please donate... I want to buy GTA 5</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '5vh' }} className="font-light">
        <h6>Minimum RM 0.01</h6>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '10px' }}>

        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Donate Menu
              <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </MenuButton>
          </div>

          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <MenuItem>
                  {({ focus }) => (
                    <Link href="/users"

                      className={classNames(
                        focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      )}
                    >Hanif

                    </Link>
                  )}
                </MenuItem>
                
                

              </div>
            </MenuItems>
          </Transition>
        </Menu>
      </div>

      </div>
    </main>
  );
}
