<template>
  <div class="home">
    <h1>Movie List</h1>
    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div v-if="data" class="content">
      <h2>{{ data[2].title }}</h2>

      <ul id="example-1" style="list-style-type: none;">
  <li v-for="item in data" :key="item.title" >
   <router-link :to="{ name: 'Player', params: { url: item.video } }">
    <img :src=item.poster id="imageStyle"/>
    <div> {{ item.title }}</div>
   </router-link>
  </li>
</ul>
      
    </div>
   
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {  
      msg: 'ok',
      data:null,
      error:null,
      loading:false
    }
  },
  beforeMount(){
    this.getData();
  },
  
  methods:{
async getData () {
     const res = await fetch('http://hybridtv.ss7.tv/techtest/movies.json');
      const data = await res.json();
      console.log(data.data[0].title);
      this.data = data.data; 
}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#imageStyle{
  height: 400px;
  width: 600px;
  border-radius: 30px;
}
</style>



//  <li>
//         <a
//           href="https://vuejs.org"
//           target="_blank"
//         >
//           Core Docs
//         </a>
//       </li>