// interface HeroProps {
// }

const Hero = () => {
  return (
    <main className="w-screen h-screen scroll-smooth pt-10 md:pt-20 px-4 lg:px-24">
      <div className="bg-accent-var rounded-lg p-14">
        <div className="flex justify-center pb-10">
          <img src="/assets/images/team/hero_icon.png" alt="hero icon/image" />
        </div>
        <h1 className="text-3xl md:text-5xl  font-semibold text-center">
          Our Team of Experts
        </h1>
        <p className="text-center py-14 px-4 ">
          Our team at Nutritionist is composed of highly skilled professionals
          who are passionate about helping you achieve your health and wellness
          goals. With a diverse range of <br />
          expertise in nutrition, coaching, and support, our team is dedicated
          to providing you with the guidance and personalized care you need. Get
          to know the experts behind <br />
          our success and discover how they can make a positive impact on your
          journey to better health.
        </p>
      </div>
    </main>
  );
};

export default Hero;
