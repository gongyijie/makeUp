<template>
    <div>
        <!-- <HeaderGuide></HeaderGuide>   -->
        <div class="side-menu-wrap">
            <button class="side-menu-close"><span></span></button>
            <div class="side-menu-inner">

                <div class="side-logo"><a href="index.html"><img src="/static/images/logo.png" alt=""></a></div>

                <div class="side-menu nice-scroll">
                    <nav>
                        <ul>
                            <li class="menu-item-has-children"><a href="index.html">Home</a>
                                <ul class="sub-menu">
                                    <li><a href="index.html">Home One</a></li>
                                    <li><a href="index-2.html">Home Two</a></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children"><a href="shop-left-sidebar.html">Shop</a>
                                <ul class="sub-menu">
                                    <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                                    <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                    <li><a href="shop-full-width.html">Shop Full Width</a></li>
                                    <li><a href="single-product.html">Single Product</a></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children"><a href="#">Pages</a>
                                <ul class="sub-menu">
                                    <li><a href="cart.html">Cart</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="login-register.html">Login Register</a></li>
                                    <li><a href="wishlist.html">Wishlist</a></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children"><a href="blog-left-sidebar.html">Blog</a>
                                <ul class="sub-menu">
                                    <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                    <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                    <li><a href="blog-full-width.html">Blog Full Width</a></li>
                                    <li><a href="single-blog-left-sidebar.html">Single Blog Left Sidebar</a></li>
                                    <li><a href="single-blog-right-sidebar.html">Single Blog Right Sidebar</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>

                <div class="side-social">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-pinterest"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                    <a href="#"><i class="fa fa-google-plus"></i></a>
                </div>

            </div>
        </div>

        <div class="side-menu-overlay"></div>

        <!-- Slider Section Start -->
        <div class="slider-section section">
            
            <div id="demo" class="carousel slide" data-ride="carousel">
                <!-- 指示符 -->
                <ul class="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>
                <!-- 轮播图片 -->
                <div class="carousel-inner lunboimg">
                    <div class="carousel-item img active">
                    <img src="/static/images/hero/hero-1.jpg">
                    </div>
                    <div class="carousel-item img">
                    <img src="/static/images/hero/hero-2.jpg">
                    </div>
                    <div class="carousel-item img">
                    <img src="/static/images/hero/hero-3.jpg">
                    </div>
                </div>
                <!-- 左右切换按钮 -->
                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>

        </div>
        <!-- Slider Section End -->

        <!-- Banner Section Start -->
        <div class="banner-section section mt-100 mb-80 mt-xs-70 mb-xs-50">
            <div class="container-fluid p-0">
                <div class="row">
                    <div class="col-md-4 col-12 mb-20">
                        <div class="banner"><a href="#"><img src="/static/images/banner/banner-1.jpg" alt="Banner"></a></div>
                    </div>

                    <div class="col-md-4 col-12 mb-20">
                        <div class="banner"><a href="#"><img src="/static/images/banner/banner-2.jpg" alt="Banner"></a></div>
                    </div>

                    <div class="col-md-4 col-12 mb-20">
                        <div class="banner"><a href="#"><img src="/static/images/banner/banner-3.jpg" alt="Banner"></a></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Banner Section End -->

        <!-- Product Section Start -->
        <div class="product-section section bg-gray pt-100 pb-70 pt-xs-70 pb-xs-40">
            <div class="container">
                <div class="row">
                    <div class="section-title text-center col mb-80 mb-xs-50">
                        <h1>New Products</h1>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-3 col-md-6 col-12 mb-30">

                        <div class="product-item bg-white">
                            <div class="product-inner">

                                <div class="image-wrap">
                                    <a href="single-product.html" class="image"><img
                                            src="/static/images/product/product-1.png" alt=""></a>
                                    <a href="#" class="wishlist"><img src="/static/images/icons/heart.png"
                                                                    alt="Wishlist"></a>
                                    <div class="actions">
                                        <a href="#"><i class="fa fa-shopping-cart"></i></a>
                                        <a href="#"><i class="fa fa-eye"></i></a>
                                        <a href="#"><i class="fa fa-refresh"></i></a>
                                    </div>
                                </div>

                                <div class="content text-center">
                                    <h4 class="title"><a href="single-product.html">Injected humour</a></h4>
                                    <div class="price">
                                        <del class="price-old">$799.99</del>
                                        <span class="price-sale">$566.77</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="col-lg-3 col-md-6 col-12 mb-30">

                        <div class="product-item bg-white">
                            <div class="product-inner">

                                <div class="image-wrap">
                                    <a href="single-product.html" class="image"><img
                                            src="/static/images/product/product-2.png" alt=""></a>
                                    <a href="#" class="wishlist"><img src="/static/images/icons/heart.png"
                                                                    alt="Wishlist"></a>
                                    <div class="actions">
                                        <a href="#"><i class="fa fa-shopping-cart"></i></a>
                                        <a href="#"><i class="fa fa-eye"></i></a>
                                        <a href="#"><i class="fa fa-refresh"></i></a>
                                    </div>
                                </div>

                                <div class="content text-center">
                                    <h4 class="title"><a href="single-product.html">Humour Injected</a></h4>
                                    <div class="price">
                                        <del class="price-old">$899.22</del>
                                        <span class="price-sale">$666.77</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="col-lg-3 col-md-6 col-12 mb-30">

                        <div class="product-item bg-white">
                            <div class="product-inner">

                                <div class="image-wrap">
                                    <a href="single-product.html" class="image"><img
                                            src="/static/images/product/product-3.png" alt=""></a>
                                    <a href="#" class="wishlist"><img src="/static/images/icons/heart.png"
                                                                    alt="Wishlist"></a>
                                    <div class="actions">
                                        <a href="#"><i class="fa fa-shopping-cart"></i></a>
                                        <a href="#"><i class="fa fa-eye"></i></a>
                                        <a href="#"><i class="fa fa-refresh"></i></a>
                                    </div>
                                </div>

                                <div class="content text-center">
                                    <h4 class="title"><a href="single-product.html">Literature Classical</a></h4>
                                    <div class="price">
                                        <del class="price-old">$299.33</del>
                                        <span class="price-sale">$166.20</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="col-lg-3 col-md-6 col-12 mb-30">

                        <div class="product-item bg-white">
                            <div class="product-inner">

                                <div class="image-wrap">
                                    <a href="single-product.html" class="image"><img
                                            src="/static/images/product/product-4.png" alt=""></a>
                                    <a href="#" class="wishlist"><img src="/static/images/icons/heart.png"
                                                                    alt="Wishlist"></a>
                                    <div class="actions">
                                        <a href="#"><i class="fa fa-shopping-cart"></i></a>
                                        <a href="#"><i class="fa fa-eye"></i></a>
                                        <a href="#"><i class="fa fa-refresh"></i></a>
                                    </div>
                                </div>

                                <div class="content text-center">
                                    <h4 class="title"><a href="single-product.html">Literature Classical</a></h4>
                                    <div class="price">
                                        <del class="price-old">$799.99</del>
                                        <span class="price-sale">$566.77</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="col-lg-3 col-md-6 col-12 mb-30">

                        <div class="product-item bg-white">
                            <div class="product-inner">

                                <div class="image-wrap">
                                    <a href="single-product.html" class="image"><img
                                            src="/static/images/product/product-5.png" alt=""></a>
                                    <a href="#" class="wishlist"><img src="/static/images/icons/heart.png"
                                                                    alt="Wishlist"></a>
                                    <div class="actions">
                                        <a href="#"><i class="fa fa-shopping-cart"></i></a>
                                        <a href="#"><i class="fa fa-eye"></i></a>
                                        <a href="#"><i class="fa fa-refresh"></i></a>
                                    </div>
                                </div>

                                <div class="content text-center">
                                    <h4 class="title"><a href="single-product.html">Humour Injected</a></h4>
                                    <div class="price">
                                        <del class="price-old">$799.99</del>
                                        <span class="price-sale">$566.77</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="col-lg-3 col-md-6 col-12 mb-30">

                        <div class="product-item bg-white">
                            <div class="product-inner">

                                <div class="image-wrap">
                                    <a href="single-product.html" class="image"><img
                                            src="/static/images/product/product-6.png" alt=""></a>
                                    <a href="#" class="wishlist"><img src="/static/images/icons/heart.png"
                                                                    alt="Wishlist"></a>
                                    <div class="actions">
                                        <a href="#"><i class="fa fa-shopping-cart"></i></a>
                                        <a href="#"><i class="fa fa-eye"></i></a>
                                        <a href="#"><i class="fa fa-refresh"></i></a>
                                    </div>
                                </div>

                                <div class="content text-center">
                                    <h4 class="title"><a href="single-product.html">Classical literature</a></h4>
                                    <div class="price">
                                        <del class="price-old">$799.99</del>
                                        <span class="price-sale">$566.77</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="col-lg-3 col-md-6 col-12 mb-30">

                        <div class="product-item bg-white">
                            <div class="product-inner">

                                <div class="image-wrap">
                                    <a href="single-product.html" class="image"><img
                                            src="/static/images/product/product-7.png" alt=""></a>
                                    <a href="#" class="wishlist"><img src="/static/images/icons/heart.png"
                                                                    alt="Wishlist"></a>
                                    <div class="actions">
                                        <a href="#"><i class="fa fa-shopping-cart"></i></a>
                                        <a href="#"><i class="fa fa-eye"></i></a>
                                        <a href="#"><i class="fa fa-refresh"></i></a>
                                    </div>
                                </div>

                                <div class="content text-center">
                                    <h4 class="title"><a href="single-product.html">Humour Injected</a></h4>
                                    <div class="price">
                                        <del class="price-old">$799.99</del>
                                        <span class="price-sale">$566.77</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="col-lg-3 col-md-6 col-12 mb-30">

                        <div class="product-item bg-white">
                            <div class="product-inner">

                                <div class="image-wrap">
                                    <a href="single-product.html" class="image"><img
                                            src="/static/images/product/product-8.png" alt=""></a>
                                    <a href="#" class="wishlist"><img src="/static/images/icons/heart.png"
                                                                    alt="Wishlist"></a>
                                    <div class="actions">
                                        <a href="#"><i class="fa fa-shopping-cart"></i></a>
                                        <a href="#"><i class="fa fa-eye"></i></a>
                                        <a href="#"><i class="fa fa-refresh"></i></a>
                                    </div>
                                </div>

                                <div class="content text-center">
                                    <h4 class="title"><a href="single-product.html">Classical literature</a></h4>
                                    <div class="price">
                                        <del class="price-old">$799.99</del>
                                        <span class="price-sale">$566.77</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- Product Section End -->

        <!-- Banner Section Start -->
        <div class="banner-section section mt-100 mb-80 mt-xs-70 mb-xs-50">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-12 mb-20">
                        <div class="banner"><a href="#"><img src="/static/images/banner/banner-4.jpg" alt="Banner"></a></div>
                    </div>

                    <div class="col-md-4 col-12 mb-20">
                        <div class="banner"><a href="#"><img src="/static/images/banner/banner-5.jpg" alt="Banner"></a></div>
                    </div>

                    <div class="col-md-4 col-12 mb-20">
                        <div class="banner"><a href="#"><img src="/static/images/banner/banner-6.jpg" alt="Banner"></a></div>
                    </div>

                    <div class="col-md-8 col-12 mb-20">
                        <div class="banner"><a href="#"><img src="/static/images/banner/banner-7.jpg" alt="Banner"></a></div>
                    </div>

                    <div class="col-md-4 col-12 mb-20">
                        <div class="banner"><a href="#"><img src="/static/images/banner/banner-8.jpg" alt="Banner"></a></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Banner Section End -->

        <!-- Popular Product Section Start -->
        <!-- <div class="product-section section mb-100 mb-xs-70">
            <div class="container">

                <div class="row">
                    <div class="section-title text-center col mb-50">
                        <h1>Populer In this Week</h1>
                    </div>
                </div>

                <div class="row">
                    <div class="product-slider">
                        <div class="slide-item col">

                            <div class="product-item bg-gray">
                                <div class="product-inner">

                                    <div class="image-wrap">
                                        <a href="single-product.html" class="image"><img
                                                src="/static/images/product/product-1.png" alt=""></a>
                                        <a href="#" class="wishlist"><img src="/static/images/icons/heart.png"
                                                                        alt="Wishlist"></a>
                                        <div class="actions">
                                            <a href="#"><i class="fa fa-shopping-cart"></i></a>
                                            <a href="#"><i class="fa fa-eye"></i></a>
                                            <a href="#"><i class="fa fa-refresh"></i></a>
                                        </div>
                                    </div>

                                    <div class="content text-center">

                                        <h4 class="title"><a href="single-product.html">Injected humour</a></h4>
                                        <span class="price">$799.99</span>

                                    </div>

                                </div>
                            </div>

                        </div>

                        <div class="slide-item col">

                            <div class="product-item bg-gray">
                                <div class="product-inner">

                                    <div class="image-wrap">
                                        <a href="single-product.html" class="image"><img
                                                src="/static/images/product/product-2.png" alt=""></a>
                                        <a href="#" class="wishlist"><img src="/static/images/icons/heart.png"
                                                                        alt="Wishlist"></a>
                                        <div class="actions">
                                            <a href="#"><i class="fa fa-shopping-cart"></i></a>
                                            <a href="#"><i class="fa fa-eye"></i></a>
                                            <a href="#"><i class="fa fa-refresh"></i></a>
                                        </div>
                                    </div>

                                    <div class="content text-center">

                                        <h4 class="title"><a href="single-product.html">Injected humour</a></h4>
                                        <span class="price">$799.99</span>

                                    </div>

                                </div>
                            </div>

                        </div>

                        <div class="slide-item col">

                            <div class="product-item bg-gray">
                                <div class="product-inner">

                                    <div class="image-wrap">
                                        <a href="single-product.html" class="image"><img
                                                src="/static/images/product/product-3.png" alt=""></a>
                                        <a href="#" class="wishlist"><img src="/static/images/icons/heart.png"
                                                                        alt="Wishlist"></a>
                                        <div class="actions">
                                            <a href="#"><i class="fa fa-shopping-cart"></i></a>
                                            <a href="#"><i class="fa fa-eye"></i></a>
                                            <a href="#"><i class="fa fa-refresh"></i></a>
                                        </div>
                                    </div>

                                    <div class="content text-center">

                                        <h4 class="title"><a href="single-product.html">Injected humour</a></h4>
                                        <span class="price">$799.99</span>

                                    </div>

                                </div>
                            </div>

                        </div>

                        <div class="slide-item col">

                            <div class="product-item bg-gray">
                                <div class="product-inner">

                                    <div class="image-wrap">
                                        <a href="single-product.html" class="image"><img
                                                src="/static/images/product/product-4.png" alt=""></a>
                                        <a href="#" class="wishlist"><img src="/static/images/icons/heart.png"
                                                                        alt="Wishlist"></a>
                                        <div class="actions">
                                            <a href="#"><i class="fa fa-shopping-cart"></i></a>
                                            <a href="#"><i class="fa fa-eye"></i></a>
                                            <a href="#"><i class="fa fa-refresh"></i></a>
                                        </div>
                                    </div>

                                    <div class="content text-center">

                                        <h4 class="title"><a href="single-product.html">Injected humour</a></h4>
                                        <span class="price">$799.99</span>

                                    </div>

                                </div>
                            </div>

                        </div>

                        <div class="slide-item col">

                            <div class="product-item bg-gray">
                                <div class="product-inner">

                                    <div class="image-wrap">
                                        <a href="single-product.html" class="image"><img
                                                src="/static/images/product/product-5.png" alt=""></a>
                                        <a href="#" class="wishlist"><img src="/static/images/icons/heart.png"
                                                                        alt="Wishlist"></a>
                                        <div class="actions">
                                            <a href="#"><i class="fa fa-shopping-cart"></i></a>
                                            <a href="#"><i class="fa fa-eye"></i></a>
                                            <a href="#"><i class="fa fa-refresh"></i></a>
                                        </div>
                                    </div>

                                    <div class="content text-center">

                                        <h4 class="title"><a href="single-product.html">Injected humour</a></h4>
                                        <span class="price">$799.99</span>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div> -->
        <!-- Popular Product Section End -->

        <!-- Call to action Section Start -->
        <div class="call-to-action section mb-100 mb-xs-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="call-to-action-item mt-0">
                            <div class="call-to-action-item__icon">
                                <img src="/static/images/icons/fast-delivery.png" alt="fast delivery">
                            </div>
                            <div class="call-to-action-item__info">
                                <h3>Free Home Delivery</h3>
                                <p>Provide free home delivery
                                    for all product over $100</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="call-to-action-item">
                            <div class="call-to-action-item__icon">
                                <img src="/static/images/icons/quality.png" alt="quality">
                            </div>
                            <div class="call-to-action-item__info">
                                <h3>Quality Products</h3>
                                <p>We ensure our product
                                    quality all times</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="call-to-action-item">
                            <div class="call-to-action-item__icon">
                                <img src="/static/images/icons/return.png" alt="return">
                            </div>
                            <div class="call-to-action-item__info">
                                <h3>3 Day Return</h3>
                                <p>Our product return policy
                                    is very easy & simple</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Call to action Section End -->

        <!-- Subscribe Section Start -->
        <div class="subscribe-section section bg-light-blue pt-55 pb-55">
            <div class="container">
                <div class="row">
                    <div class="col-xl-10 ml-auto mr-auto col-12">
                        <div class="row align-items-center">

                            <!-- Mailchimp Subscribe Content Start -->
                            <div class="col-lg-6 col-12 mb-15 mt-15">
                                <div class="subscribe-content">
                                    <h2>Subscribe to our Newsletter</h2>
                                    <h4>Subscribe today and get 15% <br>discount cupon code</h4>
                                </div>
                            </div><!-- Mailchimp Subscribe Content End -->


                            <!-- Mailchimp Subscribe Form Start -->
                            <div class="col-lg-6 col-12 mb-15 mt-15">

                                <form id="mc-form" class="mc-form subscribe-form">
                                    <input id="mc-email" type="email" autocomplete="off" placeholder="Enter your email"/>
                                    <button id="mc-submit">subscribe</button>
                                </form>
                                <!-- mailchimp-alerts Start -->
                                <div class="mailchimp-alerts text-centre">
                                    <div class="mailchimp-submitting"></div><!-- mailchimp-submitting end -->
                                    <div class="mailchimp-success"></div><!-- mailchimp-success end -->
                                    <div class="mailchimp-error"></div><!-- mailchimp-error end -->
                                </div><!-- mailchimp-alerts end -->

                            </div><!-- Mailchimp Subscribe Form End -->

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <FooterGuide></FooterGuide>   -->
    </div>
</template>

<style>
    body{
        width: 100%;
    }
    .img{
        width: 90%;
        margin: 0 5%;
        height: 780px;
        overflow: hidden;
    }
</style>

<script>
    export default {
        // components: {  
        //     HeaderGuide: require('./HeaderGuide.vue').default , 
        //     FooterGuide: require('./FooterGuide.vue').default  
        // },  
        // methods: {},  

    }
</script>

