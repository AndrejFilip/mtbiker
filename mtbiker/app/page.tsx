"use client";
import { FrontImage } from "./ Components/MainPage/FrontImage";
import { MenuList } from "./ Components/MainPage/MenuList";
import { HorizontalAutomaticScrollBar } from "./ Components/MainPage/HorizontalAutomaticScrollBar";
import { Carousel } from "./ Components/MainPage/Carousel";

export default function index_page() {
  return (
    <div>
      <FrontImage />
      <MenuList />
      <HorizontalAutomaticScrollBar />
      <Carousel />
    </div>
  );
}
