import {useState} from "react";
import cls from './Accordion.module.css'
import AccordionLayout from "../AccordionLayout/AccordionLayout.tsx";

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    //accordion
    return (
        <div className={cls.accordion}>
            <AccordionLayout
                title="Описание"
                index={1}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                This is Accordion 1 Content
            </AccordionLayout>
            <AccordionLayout
                title="Способ применение"
                index={2}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                This is Accordion 2 Content
            </AccordionLayout>
            <AccordionLayout
                title="Состав"
                index={3}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                This is Accordion 3 Content
            </AccordionLayout>
        </div>
    );
};

export default Accordion;