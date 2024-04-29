import CardWithTitleAndDescription from "./components/cards/CardWithTitleAndDescription";
import Carousel from "./components/carousels/Carousel";
import HomePageImages from "./components/carousels/HomePageImages";

export default function Home() {
  return (
    <>
      <div className="home-nav-container">
        <div className="bigText bold3DText mt-150">
          Where Every Bubble Tells a Story!
        </div>
      </div>
      <div className="mt-300"></div>

      <div className="text-container">
        <h1 className="welcome-text animate__animated animate__bounceInDown">
          Welcome to Bubble Tea Magic
        </h1>
      </div>

      <div className="home-container m-8">
        <div className="m-8">
          <Carousel images={HomePageImages} />
        </div>

        <CardWithTitleAndDescription
          title={"Indulge in the Magic of Bubble Tea"}
          description={
            "At Bubble Tea Magic, we're passionate about creating the most delightful and imaginative bubble tea experiences. We use only the finest ingredients, from premium loose-leaf teas to bursting boba pearls, to craft beverages that tantalize your taste buds and transport you to a world of pure refreshment."
          }
        />

        <CardWithTitleAndDescription
          title={"A Celebration of Flavors"}
          description={
            "Our menu boasts a vibrant selection of classic and innovative bubble tea flavors. From fruity and floral to creamy and decadent, we have something to satisfy every craving. We also offer a variety of customization options, allowing you to tailor your bubble tea to your unique preferences. So, whether you're a seasoned bubble tea aficionado or a curious newcomer, Bubble Tea Magic is your destination for an unforgettable journey of taste."
          }
        />
      </div>
    </>
  );
}
