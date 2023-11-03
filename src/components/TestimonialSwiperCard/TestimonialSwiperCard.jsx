

const TestimonialSwiperCard = ({name, userFeedback}) => {

    return (
        <div className={`grid grid-cols-2 ${Card.carouselCard}`}>

                    <div className={`${Card.avatarIcon} flex items-center justify-center`}>
                        {name}
                    </div>

            <div className={"flex items-center"}>
                <p className={`${Card.userFeedback}`}>
                    {userFeedback}
                </p>
            </div>
        </div>
    )
}

export default TestimonialSwiperCard;
