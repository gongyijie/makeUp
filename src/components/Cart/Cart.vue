<template>
    <div>
        <!-- <HeaderGuide></HeaderGuide>   -->
        <div class="page-section section mt-100 mb-60 mt-xs-70 mb-xs-30">
            <div class="container">
                <form action="#">				
                    <div class="row">
                        <div class="col-12">
                            <div class="cart-table table-responsive mb-40">
                                <table>
                                    <thead>
                                        <tr>
                                            <th class="pro-thumbnail"  @click="selectProduct(isSelectAll)" v-bind:checked="isSelectAll">全选</th>
                                            <th class="pro-title">商品</th>
                                            <th class="pro-price">数量</th>
                                            <th class="pro-quantity">单价(元)</th>
                                            <th class="pro-subtotal">金额(元)</th>
                                            <th class="pro-remove">操作</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item,index) in productList" :key='index'>
                                            <td class="pro-thumbnail"><input type='checkBox'  v-bind:checked="item.isSelect" @click="item.isSelect=!item.isSelect"></td>
                                            <td class="pro-title">{{item.proName}}</td>
                                            <td class="pro-quantity"><div class="product-quantity"><input v-model='item.proNum'/><span class="dec qtybtn"  @click="item.proNum>0?item.proNum--:''">-</span><span class="inc qtybtn" @click='item.proNum++'>+</span></div></td>
                                            <td class="pro-price"><span class="amount">{{item.proPrice}}</span></td>
                                            <td class="pro-subtotal">{{item.proPrice*item.proNum}}</td>
                                            <td class="pro-remove"><a href="#" @click="deletePro(index)">×</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="checkPro">
                                <div class="leftConent">
                                    <span><a href="#" @click="deleteProduct">删除所选产品</a></span>
                                </div>
                                <div class="rightConent">
                                    <span>{{getTotal.totalNum}}件商品总计：￥{{getTotal.totalPrice}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>	
            </div>
        </div>
        <!-- <FooterGuide></FooterGuide>  -->
    </div>
</template>
<script>
export default {
    // components: {  
    //     HeaderGuide: require('../HeaderGuide.vue').default , 
    //     FooterGuide: require('../FooterGuide.vue').default  
    // },  
     data() {
         return {
             	productList:[
				{
					'proName' :'剃须刀',
					'proNum' : 2,
					'proPrice' :1000,
				},
				{
					'proName' :'小米耳机',
					'proNum' : 10,
					'proPrice' :100,
				},
				{
					'proName' :'小米鼠标',
					'proNum' : 5,
					'proPrice' :100,
				}
			],
         }
     },
    mounted() {
        var _this=this;
        this.productList.map(function(item){
            _this.$set(item,'isSelect',false)
        })
        // axios.get('').then(function(res){
        //     _this.productList=res.data.data
        // })
    },
    methods: {
        selectProduct:function(_isSelect){   //全选操作，遍历所有然后取反
            for(var i=0,len=this.productList.length;i<len;i++){
                this.productList[i].isSelect=!_isSelect;
            }
        },
        deletePro:function(index){  
            alert('您正在删除'+this.productList[index].proName);
            axios.get('/delete'+index).then(function(){
                location.reload();
            })
        },
         deleteProduct:function () {
            //  axios.get('/delete'+index).then(function(){
            //     location.reload();
            // })
               // this.productList=this.productList.filter(function (item) {return !item.isSelect})
        },

    },
    computed: {
         isSelectAll:function(){
                //如果productList中每一条数据的isSelect都为true，返回true，否则返回false;
                return this.productList.every(function (val) { return val.isSelect});
        },
        getTotal:function(){
				var prolist = this.productList.filter(function (val) { return val.isSelect}),
				totalPri = 0;
				for (var i = 0,len = prolist.length; i < len; i++) {
					totalPri+=prolist[i].proPrice*prolist[i].proNum;
				}
				return {totalNum:prolist.length,totalPrice:totalPri}
			},
    },
}
</script>
<style lang="">
    
</style>