
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';

const Images = [
  'https://i.postimg.cc/6548zdrQ/profile.jpg',
  'https://i.postimg.cc/qR7RKnB4/Whats-App-Image-2024-08-12-at-12-19-15-d7727ee2.jpg',
];
function Hero() {
  return (
    <div>
      <Carousel className=" max-w-xl mx-auto">
        <CarouselContent>
          {Images.map((img, index) => (
            <CarouselItem key={index}>
              <div className="p-1 h-[400px] object-contain w-full">
                <img src={img} alt="" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Hero;
