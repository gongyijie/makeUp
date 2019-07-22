<template>
      <header class="header-section section position-static">
        <div class="container-fluid p-0">
            <div class="row no-gutters align-items-center">
                <div class="col-4 col-lg-2 col-xl-3">
                    <!-- Logo Start -->
                    <div class="header-logo header-logo-one mt-0">
                        <a href="index.html">
                            <img src="../assets/images/logo.png" alt="Olson">
                        </a>
                    </div><!-- Logo End -->
                </div>

                <div class="col col-lg-7 col-xl-6 d-none d-lg-block">
                    <div class="main-menu mr-lg-100">
                        <nav>
                            <ul>
                                <li class="menu-item-has-children"><a href="index.html">彩妆</a>
                                    <ul class="sub-menu">
                                        <li><a href="index.html">唇部</a></li>
                                        <li><a href="index-2.html">Home Two</a></li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children"><a href="shop-left-sidebar.html">护肤</a>
                                    <ul class="sub-menu">
                                        <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                                        <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                        <li><a href="shop-full-width.html">Shop Full Width</a></li>
                                        <li><a href="single-product.html">Single Product</a></li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children"><a href="#">香水</a>
                                    <ul class="sub-menu">
                                        <li><a href="cart.html">Cart</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                        <li><a href="login-register.html">Login Register</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children"><a href="blog-left-sidebar.html">最新资讯</a>
                                    <ul class="sub-menu">
                                        <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                        <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                        <li><a href="blog-full-width.html">Blog Full Width</a></li>
                                        <li><a href="single-blog-left-sidebar.html">Single Blog Left Sidebar</a></li>
                                        <li><a href="single-blog-right-sidebar.html">Single Blog Right Sidebar</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">明星产品</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div class="col-8 col-lg-3 col-xl-3">
                    <div class="header-shop-links">
                        <div class="shop-links-item header-search">
                            <a href="javascript:void(0)" class="btn-src"><el-button type="text" @click="open3"><img src="../assets/images/icons/search.png" alt="Search"></el-button></a>
                            <a href="javascript:void(0)" class="btn-close"><img src="../assets/images/icons/close.png" alt="Close"></a>
                            <div class="search-content-wrap">
                                <form action="#" method="post">
                                    <label for="search" class="sr-only">Search</label>
                                    <input type="text" id="search" placeholder="Search here..." />
                                </form>
                            </div>
                        </div>
                        <div class="shop-links-item header-mini-cart" v-if='userName'>
                            <a @click='$router.push({path:"/cart",query:{userName:userName}})'><img src="../assets/images/icons/cart.png" alt="Cart"></a>
                        </div>

                        <div class="shop-links-item header-account mr-lg-0"  v-if='userName'>
                            <a href="login-register.html"><img src="../assets/images/icons/user.png" alt="Account"></a>
                        </div>
                         <div class="shop-links-item header-account mr-lg-0"  v-else style='width:100px'>
                            <a  @click='$router.push({path:"/userLogin"})'> 登录  </a>
                        </div>

                        <div class="shop-links-item header-menu-icon d-lg-none">
                            <a href="javascript:void(0)" class="menu-toggle"><span class="bar"></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
  export default {
      data() {
          return {
              userName:localStorage.getItem("userName"),

          }
      },
    methods: {
        sentData(data) {
            this.$router.push({
                path: `/search/${data}`,
            })
        },
        open3() {
            let self = this;
            this.$prompt('请输入检索内容', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
            }).then(({ value }) => {
                self.sentData(value);
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消输入'
                });       
            });
      }
    }
  }
</script>

<style>
    .header-section {
            width: 84%;
            margin: 0 8%;
        }
</style>