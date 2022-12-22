import { Icon } from '@iconify/react';
interface cardProps {
    title: string;
    description: string;
}

const Card = (props: cardProps) => {
    return (
      <div className="relative w-full lg:w-96 flex-col px-2 my-5 cursor-pointer">
          <div className="bg-secondary w-32 lg:w-52 absolute -top-5 sm:-top-3 left-20 hidden sm:block lg:block sm:left-80 lg:left-24 right-0 rounded-xl shadow-sm">
              <h1 className="text-primary text-center py-4 text-sm lg:text-xl font-bold">{props.title}</h1>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl bg-secondary hover:bg-transparent hover:border border-primary">
              <Icon icon="bi:box-fill" className="text-primary mt-16" height="24" />
              <p className="text-black mx-5 my-5 text-base font-lato  lg:text-2xl">{props.description}</p>
          </div>
      </div>
    )
  }
  
  export default Card
