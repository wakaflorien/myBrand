import Image from 'next/image';
import { FC } from 'react';
interface imageTypes {
    src: string,
    width: string,
    height: string,
    styles: string,
}
export const imageLoader = (src: string) => {
    return `${src}`
}

const Img: FC<imageTypes> = ({ src, width, height, styles }) => {

    return (
        <Image
            loader={() => imageLoader(src)}
            src={src}
            alt="Picture of the author"
            width={width}
            height={height}
            className={styles}
            unoptimized
            priority={false}
        />
    )
}
export default Img;
