import React, {useEffect, useState} from "react";
import {HeartFilled, HeartOutlined} from "@ant-design/icons";
import {Card} from "antd";
import {useNavigate} from "react-router-dom";
import {useFavoritesContext} from "../../context/favoritesContext";

const HEARTSTYLE = {fontSize: "2rem", color: "#fca311"};

const CardBook = ({book, title, image, description, isFavorite}) => {
    const [isClicked, setIsClicked] = useState(false);
    const {addToFavorites, removeFromFavorites, updateTotal} = useFavoritesContext();

    const heartIcon = isClicked || isFavorite? (<HeartFilled style={HEARTSTYLE}/>) : (<HeartOutlined style={HEARTSTYLE}/>);

    const onClickFavoriteHandle = () => {
        setIsClicked(prev => {
            const newState = !prev

            updateTotal( newState ? 1 : -1 )

            return newState
        });
    };
    useEffect(() => {
        isClicked ? addToFavorites(book) : removeFromFavorites(book.id);
    }, [isClicked]);

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
                avatar={<div onClick={onClickFavoriteHandle}>{heartIcon}</div>}
                title={title}
                description={description.slice(0, 150) + "..."}
            />
        </Card>
    );
};
export default CardBook;
