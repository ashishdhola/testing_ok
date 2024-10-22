function First() {
    return (
        <>
            {/* <!-- slider-pagination --> */}
            <div class="main-section-wrap">
                <div class="pagination">
                    <div class="prev-btn">
                        <i class="fa-solid fa-arrow-up"></i>
                    </div>
                    <div class="pagination-num">
                        <span class="pagination-bullet pagination-bullet-active">01</span>
                        <span class="pagination-bullet">02</span>
                        <span class="pagination-bullet">03</span>
                    </div>
                    <div class="next-btn">
                        <i class="fa-solid fa-arrow-down"></i>
                    </div>
                </div>

                {/* <!-----first section------> */}
                <div class="main-slide">
                    {/* <!-- main slide 1 --> */}
                    <div class="main-slide-inner-1">
                        <div class="banner-inner">
                            <div class="container">
                                <div class="row">
                                    <div class="col-7 padding">
                                        <div class="banner-content-wrap">
                                            <span class="test-station">High Quality Test Station </span>
                                            <h1>Choosing The Best Quality Food</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua.</p>
                                            <div class="banner-btn">
                                                <a href="#" class="primary-btn"><span>Book a Table</span></a>
                                                <a href="#" class="outline-btn"><span>View More</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-5 padding">
                                        <div>
                                            <img src="./images/noodle.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src="./images/uneven-bg-lines.png" class="curved-lines" />
                            <img src="./images/coriander.png" class="coriander" />
                            <img src="./images/curved-arrow.png" class="curved-arrow" />
                        </div>
                    </div>
                    {/* <!-- main slide 2 --> */}
                    <div class="main-slide-inner-2"></div>
                    {/* <!-- main slide 3 --> */}
                    <div class="main-slide-inner-3"></div>
                </div>
                {/* <!-- lunch dinner breakfast carousel --> */}
                <div class="container">
                    <div class="meal-swiper">
                        <div class="swiper-content-wrap">
                            <div class="swiper-content-inner">
                                {/* <!-- breakfast--> */}
                                <div class="breakfast">
                                    <div class="food-card">
                                        <div class="food-card-img">
                                            <img src="./images/breakfast.jpg" alt="" />
                                        </div>
                                        <div class="food-card-content">
                                            <h5>Breakfast</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- lunch --> */}
                                <div class="lunch">
                                    <div class="food-card">
                                        <div class="food-card-img">
                                            <img src="./images/lunch.jpg" alt="" />
                                        </div>
                                        <div class="food-card-content">
                                            <h5>Lunch</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                        </div>
                                    </div>
                                </div>
                                {/* dinner */}
                                <div class="dinner">
                                    <div class="food-card">
                                        <div class="food-card-img">
                                            <img src="./images/dinner.jpg" alt="" />
                                        </div>
                                        <div class="food-card-content">
                                            <h5>Dinner</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipinpmscing elit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- swiper buttons --> */}
                        <div class="swiper-previous-btn">
                            <i class="fa-solid fa-angle-left"></i>
                        </div>
                        <div class="swiper-next-btn">
                            <i class="fa-solid fa-angle-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default First;