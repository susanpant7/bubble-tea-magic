"use client";
import { useSession } from "next-auth/react";
import CardWithTitleAndDescription from "./components/cards/CardWithTitleAndDescription";
import Carousel from "./components/carousels/Carousel";
import HomePageImages from "./components/carousels/HomePageImages";
import "./homePage.css";
export default function Home() {
  const { data: session, status } = useSession();

  return (
    <>
      <div class="home-img1">
        <div class="home-image-text">
          {status == "authenticated" && (
            <span class="home-image-text-bg">
              {" "}
              Welcome : {session.user.name} <br />
            </span>
          )}
        </div>
        <div class="home-image-text" style={{ top: "55%" }}>
          <span class="home-image-text-bg"> Order Your Bubble </span>
        </div>
      </div>

      <section class="section section-light">
        <CardWithTitleAndDescription
          title={"Indulge in the Magic of Bubble Tea"}
          description={
            "At Bubble Tea Magic, we're passionate about creating the most delightful and imaginative bubble tea experiences. We use only the finest ingredients, from premium loose-leaf teas to bursting boba pearls, to craft beverages that tantalize your taste buds and transport you to a world of pure refreshment."
          }
        />
      </section>

      <div class="home-img2">
        <div class="home-image-text">
          <span class="home-image-text-bg"> Sip Smile and enjoy </span>
        </div>
      </div>

      <section class="section section-dark">
        <CardWithTitleAndDescription
          title={"A Celebration of Flavors"}
          description={
            "Our menu boasts a vibrant selection of classic and innovative bubble tea flavors. From fruity and floral to creamy and decadent, we have something to satisfy every craving. We also offer a variety of customization options, allowing you to tailor your bubble tea to your unique preferences. So, whether you're a seasoned bubble tea aficionado or a curious newcomer, Bubble Tea Magic is your destination for an unforgettable journey of taste."
          }
        />
      </section>

      <div class="home-img3">
        <div class="home-image-text">
          <span class="home-image-text-bg"> Build Your Dream Bubble Tea </span>
        </div>
      </div>

      <section class="section section-dark">
        <CardWithTitleAndDescription
          title={"Shake Up Your Day"}
          description={
            "Bubble Tea Magic is your gateway to bubble tea bliss! Discover a vibrant assortment of flavors, from refreshing fruit blends to creamy delights. With endless customization options, you can create your perfect cup every time. Download the app today and embark on a delicious bubble tea adventure!"
          }
        />
      </section>

      <div className="home-container m-8">
        <div className="m-2">
          <Carousel images={HomePageImages} />
        </div>
      </div>
    </>
  );
}
