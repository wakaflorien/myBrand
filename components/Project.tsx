import { useState, useEffect } from 'react'
import Card from './Card'
import Json from '../utils/projects.json'
interface myJson {
    id: number;
    title: string;
    description: string;
}

const Project = () => {
    const [cardData, setCardData] = useState<myJson[]>([]);
    useEffect(() => {
        setCardData(Json);
    }, []);
    return (
        <div className="flex flex-wrap justify-center lg:mt-80 lg:mb-12 lg:px-8 ">
            {
                cardData.map((card, index) =>
                   {
                        return (
                            <Card key={index} title={card.title} description={card.description} />
                        )
                   })                
            }
        </div>
    )
}
export default Project;
