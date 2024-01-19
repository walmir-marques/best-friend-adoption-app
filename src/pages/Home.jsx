/* eslint-disable react/jsx-no-comment-textnodes */
import "./Home.css";
import image1 from "../assets/images/image1.png";

const Home = () => {
  return (
    <section className="home-container">
      <div className="home-left">
        <img src={image1} alt="Adopt a new friend" />
      </div>
      <div className="home-right">
        <h1>Welcome</h1>
        <p>
          We are Best Friend Adoption, where the journey to finding your perfect
          canine companion begins! At Best Friend Adoption, we believe in the
          joy and fulfillment that comes with adopting a dog. Our platform
          provides a loving space for people to connect with furry friends in
          need of a forever home. Explore our diverse selection of adorable
          dogs, each with a unique story and personality. Join us in the
          rewarding experience of adoption, not only providing a loving home for
          a dog but also contributing to the overall well-being of these
          incredible animals. Discover the importance of adoption and the
          lasting impact it has on the lives of both humans and their newfound
          best friends. Start your journey with Best Friend Adoption today and
          make a difference in a dogs life!
        </p>
      </div>
    </section>
  );
};

export default Home;
