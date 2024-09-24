const ImageContainer = ({ imgNum, position }) => {
    return (
        <div className={`image-container w-[420px] overflow-hidden image-${imgNum} ${position}`}>
            <div className={`img-${imgNum} image piece1`}></div>
            <div className={`img-${imgNum} image piece2`}></div>
            <div className={`img-${imgNum} image piece3`}></div>
            <div className={`img-${imgNum} image piece4`}></div>
            <div className={`img-${imgNum} image piece5`}></div>
            <div className={`img-${imgNum} image piece6`}></div>
        </div>
    );
};

export default ImageContainer;