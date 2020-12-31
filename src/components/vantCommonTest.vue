<template>
<div>
  <van-datetime-picker ref="ref1"
  v-model="currentDate"
  type="date"
  title="选择年月日"
  :min-date="minDate"
  :max-date="maxDate"
  :filter="filter"
/>
{{currentDate}}
</div>

</template>

<script>
let _this
  export default {
    name: 'vantCommonTest',
    data () {
      return {
        dateStr:['2020-11-25','2020-12-30','2020-12-31','2021-01-01','2021-01-03','2021-01-04'],
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        currentDate: new Date(),
      }
    },
    created () {
      _this = this
    },
    methods: {
      filter:(type,options,v3)=>{
        debugger
        let selectDate=_this.currentDate
        console.log(type,'----',options,'----',selectDate);
        console.log('-----------');
        if(type==='year'){
          return options.filter((o)=>_this.dateStr.join(',').includes(o))
        }
        if(type==='month' && selectDate){
          return options.filter((o)=>_this.dateStr.join(',').includes(selectDate[0]+'-'+o))
        }
        if(type==='day' && selectDate){
          return options.filter((o)=>_this.dateStr.join(',').includes(selectDate[0]+'-'+selectDate[1]+'-'+o))
        }
        return options;
      }
    }
  }
</script>
