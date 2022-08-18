import Image from 'next/image';

const Img = ({ src, width, height, styles }) => {
    const myLoader = () => {
        return `${src}`
      }
    
    return (
        <Image 
            loader={myLoader}
            src="DSC_4718.JPG"
            alt="Picture of the author"
            width={width}
            height={height}
            className={styles}
        />
    )
}
export default Img;