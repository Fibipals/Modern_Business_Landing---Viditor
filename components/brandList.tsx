import Image from "next/image";

interface BrandCardProps{
  path: string;
}

const BrandCard = ({path}:BrandCardProps) => (
  <div className='flex items-center justify-center flex-1 m-4'>
    <Image src={path} alt="Brand Logo" width={150} height={20}/>
  </div>
)

const Brand = () => (
  <div className="flex flex-col md:flex-row items-center justify-between px-16 mt-12 gap-4">
    <BrandCard path="/brands/google.png"/>
    <BrandCard path="/brands/adobe.png"/>
    <BrandCard path="/brands/openai.png"/>
    <BrandCard path="/brands/youtube.png"/>
  </div>
);

export default Brand;