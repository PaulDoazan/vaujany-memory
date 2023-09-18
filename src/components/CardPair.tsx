import questionSvg from '../assets/images/question.svg'
import appleSvg from '../assets/images/apple.svg'
import bananaSvg from '../assets/images/banana.svg'
import brocoliSvg from '../assets/images/brocoli.svg'
import cherrySvg from '../assets/images/cherry.svg'
import pepperSvg from '../assets/images/pepper.svg'
import strawSvg from '../assets/images/banana.svg'

export default function CardPair({ value }: { value: Flower }) {
    const imgsObj = {
        question: questionSvg,
        banana: bananaSvg,
        apple: appleSvg,
        brocoli: brocoliSvg,
        cherry: cherrySvg,
        pepper: pepperSvg,
        straw: strawSvg,
    }

    type ObjectKey = keyof typeof imgsObj;
    const myKey = value.name.toLowerCase() as ObjectKey;
    const myImg = imgsObj[myKey]

    const handleDown = (e: any) => {
        if (e.target.children[0].classList.contains('active')) {
            e.target.children[0].classList.remove("active");
        } else {
            e.target.children[0].classList.add("active");
        }

    }

    return (
        <div className="card" onPointerDown={handleDown} data-attr={value.name}>
            <div className="double-face">
                <div className="face">
                    <img src={myImg} alt="" />
                </div>
                <div className="back">
                    <img src={imgsObj.question} />
                </div>
            </div>
        </div>
    )
}