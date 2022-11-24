import {useEffect, useState} from "react";
import {HeartFilled, HeartOutlined} from "@ant-design/icons";
import {Card} from "antd";
import {useNavigate} from "react-router-dom";
import {useFavoritesContext} from "../../context/favoritesContext";

const HEARTSTYLE = {fontSize: "2rem", color: "#fca311"};

const ICONHEART = {
    filled:  <HeartFilled style={HEARTSTYLE}/>,
    outlined: <HeartOutlined style={HEARTSTYLE}/>
}

const filledHeart = <HeartFilled style={HEARTSTYLE}/>
const outLinedHeart = <HeartOutlined style={HEARTSTYLE}/>

const CardBook = ({book, title, image, description, isFavorite}) => {
    const [isClicked, setIsClicked] = useState(false);
    const {addToFavorites, removeFromFavorites, updateTotal} = useFavoritesContext();
    const [heartIcon, setHeartIcon] = useState(isFavorite ? ICONHEART.filled : ICONHEART.outlined)
    const [heartIconHandler, setIconHeartHandler] = useState(ICONHEART.outlined)

    useEffect(() => {

        if (isFavorite) {
            setIconHeartHandler(ICONHEART.filled)
        }
    }, [])

    const onClickFavoriteHandle = () => {

        setIconHeartHandler(prev => {
            const newState = prev === ICONHEART.filled ? ICONHEART.outlined : ICONHEART.filled

            if (newState === ICONHEART.outlined) {
                removeFromFavorites(book.id)
            }else {
                addToFavorites(book)
            }

            updateTotal( newState === ICONHEART.filled ? 1 : -1 )

            return newState
        })

        // isClicked ? removeFromFavorites(book.id) : addToFavorites(book);
        // setHeartIcon(isClicked ? (<HeartFilled style={HEARTSTYLE}/>) : (<HeartOutlined style={HEARTSTYLE}/>))
        //
        // setIsClicked(prev => {
        //     const newState = !prev
        //     updateTotal( newState ? 1 : -1 )
        //     return newState
        // });
    };

    const navigate = useNavigate();
    const {Meta} = Card;
    return (
        <Card
            style={{
                width: 300,
                height: 700,
                overflow: "hidden",
                backgroundColor: "#e5e5e5",
            }}
            hoverable
            cover={
                <img
                    onClick={() => navigate(`/books/${book.id}`)}
                    alt="example"
                    src={image}
                />
            }
        >
            <Meta
                avatar={<div onClick={onClickFavoriteHandle}>{heartIconHandler}</div>}
                title={title}
                description={description.slice(0, 150) + "..."}
            />
        </Card>
    );
};
export default CardBook;
