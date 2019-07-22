<template>
    <div>
        <div class="table">
            <el-table
                :data="tableData"
                style="width: 100%"
                :row-class-name="tableRowClassName">
                <el-table-column
                    prop="goods_name"
                    label="商品名"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="main_name"
                    label="商品类型"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="child_name"
                    label="商品类"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="price"
                    label="价格"
                    width="70">
                </el-table-column>
                <el-table-column
                    prop="count"
                    label="库存"
                    width="70">
                </el-table-column>
                <el-table-column
                    prop="goods_describe"
                    label="商品描述">
                </el-table-column>
            </el-table>
            <div class="page">
                <el-pagination
                    :page-size="2"
                    layout="prev, pager, next"
                    :total="count">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<style>
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }
    .table{
        width: 70%;
        margin: 20px auto;
    }
    .page{
        width: 100%;
        margin: 50px auto;
    }
</style>

<script>
    export default {
        data() {
            return {
                SearchData: '',
                count: 10,
                tableData: [{             
                    goods_name: '王小虎',
                    main_name: '1',
                    child_name: '456',
                    price: '456',
                    count: '128',
                    goods_describe: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路',
                }, {
                    goods_name: '王小虎',
                    main_name: '2',
                    child_name: '789',
                    price: '456',
                    count: '753',
                    goods_describe: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路'
                }, {
                    goods_name: '王小虎',
                    main_name: '3',
                    child_name: '123',
                    price: '456',
                    count: '951',
                    goods_describe: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路',
                }, {
                    goods_name: '王小虎',
                    main_name: '4',
                    child_name: '159',
                    price: '456',
                    count: '453',
                    goods_describe: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路'
                }]
            }
        },
        methods: {
            tableRowClassName({row, rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            },
            getData() {
                let self = this;
                let SearchData = self.$route.params.data;
                this.$axios.get("/goods/getgoods?search="+SearchData).then(function (response) {
                    var data = response.data;
                    if (response.code == 0) {
                        self.count = response.count;
                        self.tableData = data;
                    } else {
                        self.$notify({
                            type: 'error',
                            message: response.msg,
                            duration: 2000,
                        });
                    }
                });
            }
        },
        mounted() {
            // this.getData();
        }
    }
</script>