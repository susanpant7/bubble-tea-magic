"use client";
import { useSession } from "next-auth/react";
import CardWithTitleAndDescription from "./components/cards/CardWithTitleAndDescription";
import Carousel from "./components/carousels/Carousel";
import HomePageImages from "./components/carousels/HomePageImages";
import "./homePage.css";
import { ParallaxBanner, Parallax, useParallax } from "react-scroll-parallax";
import Image from "next/image";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div className="">
      <ParallaxBanner
        layers={[
          { image: "items/image1.jpg", className: "", speed: 20 },
          {
            speed: -15,
            children: (
              <div className="absolute inset-0 flex items-center justify-center">
                <div class="home-image-text">
                  <span class="home-image-text-bg">
                    {status == "authenticated"
                      ? "Order Your Bubble"
                      : "Welcome To Bubble Tea Magic"}{" "}
                  </span>
                </div>
              </div>
            ),
          },
        ]}
        className="aspect-[2/1]"
      ></ParallaxBanner>

      <Parallax scale={[0.9, 1]}>
        <CardWithTitleAndDescription
          title={"Indulge in the Magic of Bubble Tea"}
          description={
            "At Bubble Tea Magic, we're passionate about creating the most delightful and imaginative bubble tea experiences. We use only the finest ingredients, from premium loose-leaf teas to bursting boba pearls, to craft beverages that tantalize your taste buds and transport you to a world of pure refreshment."
          }
        />
      </Parallax>

      <ParallaxBanner
        layers={[
          { image: "items/image2.jpg", className: "", speed: 20 },
          {
            speed: -15,
            children: (
              <div className="absolute inset-0 flex items-center justify-center">
                <div class="home-image-text">
                  <span class="home-image-text-bg">Sip Smile and enjoy</span>
                </div>
              </div>
            ),
          },
        ]}
        className="aspect-[2/1]"
      ></ParallaxBanner>

      <CardWithTitleAndDescription
        title={"A Celebration of Flavors"}
        description={
          "Our menu boasts a vibrant selection of classic and innovative bubble tea flavors. From fruity and floral to creamy and decadent, we have something to satisfy every craving. We also offer a variety of customization options, allowing you to tailor your bubble tea to your unique preferences. So, whether you're a seasoned bubble tea aficionado or a curious newcomer, Bubble Tea Magic is your destination for an unforgettable journey of taste."
        }
      />

      <ParallaxBanner
        layers={[
          { image: "items/image3.jpg", className: "", speed: 20 },
          {
            speed: -15,
            children: (
              <div className="absolute inset-0 flex items-center justify-center">
                <div class="home-image-text">
                  <span class="home-image-text-bg">
                    Build Your Dream Bubble Tea
                  </span>
                </div>
              </div>
            ),
          },
        ]}
        className="aspect-[2/1]"
      ></ParallaxBanner>

      <CardWithTitleAndDescription
        title={"Shake Up Your Day"}
        description={
          "Bubble Tea Magic is your gateway to bubble tea bliss! Discover a vibrant assortment of flavors, from refreshing fruit blends to creamy delights. With endless customization options, you can create your perfect cup every time. Download the app today and embark on a delicious bubble tea adventure!"
        }
      />

      <div className="home-container m-8 content">
        <div className="m-2">
          <Carousel images={HomePageImages} />
        </div>
      </div>
      {/* <Parallax rotateY={[0, 360]}>
        <div className="home-container m-8 content flex spinner">
          <Image
            src="/items/bt-1.jpeg"
            width={300}
            height={100}
            className="m-4"
            alt="B_T-image"
          />
          <Image
            src="/items/bt-2.jpeg"
            width={300}
            height={100}
            className="m-4"
            alt="B_T-image"
          />
          <Image
            src="/items/bt-3.jpeg"
            width={300}
            height={100}
            className="m-4"
            alt="B_T-image"
          />
          <Image
            src="/items/bt-4.jpeg"
            width={300}
            height={100}
            className="m-4"
            alt="B_T-image"
          />
        </div>
      </Parallax> */}

      {/* 
      




      <div className="home-container m-8 content">
        <div className="m-2">
          <Carousel images={HomePageImages} />
        </div>
      </div> */}
    </div>
  );
}
