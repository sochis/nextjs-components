"use client";

import { MdMenu } from "react-icons/md";
import { Button } from "@nextui-org/react";
import { ReactElement, useState } from "react";
import { NavigationRailParams } from "@/types/common/navigation-rail/navigation-rail";

export function NavigationRail(props: NavigationRailParams): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigationRail = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* NavigationRail toggle button */}
      <Button
        isIconOnly
        className="bg-transparent rounded-full hover:bg-gray-200 hover:dark:bg-opacity-20"
        onClick={toggleNavigationRail}
      >
        <MdMenu className="text-2xl" />
      </Button>

      {/* NavigationRail */}
      <div className={`fixed ${isOpen ? "overflow-auto" : ""}`}>
        <div
          className={`fixed top-12 bottom-0 left-0 z-50 transform transition-transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* NavigationRail contents*/}
          <div className="flex flex-col">{props.children}</div>
        </div>
      </div>
    </>
  );
}
