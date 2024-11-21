import Image from 'next/image';
interface imageTypes {
    src: string,
    width: string,
    height: string,
    styles: string,
}
export const imageLoader = (src: string) => {
    return `${src}`
  }

const Img = (props: imageTypes) => {
    
    return (
        <Image 
            loader={() => imageLoader(props.src)}
            src={props.src}
            alt="Picture of the author"
            width={props.width}
            height={props.height}
            className={props.styles}
        />
    )
}
export default Img;
