import Image from 'next/image';
interface imageTypes {
    src: string,
    width: string,
    height: string,
    styles: string,
}

const Img = (props: imageTypes) => {
    const myLoader = () => {
        return `${props.src}`
      }
    
    return (
        <Image 
            loader={myLoader}
            src="DSC_4718.JPG"
            alt="Picture of the author"
            width={props.width}
            height={props.height}
            className={props.styles}
        />
    )
}
export default Img;
