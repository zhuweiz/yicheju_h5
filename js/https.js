
//  //设置一个类似base_url的请求路径
axios.defaults.baseURL='http://47.96.248.209:8087'; 

// global.axios=axios; 

// axios.interceptors.request.use(config => {
//     // 在发送请求之前做些什么
//     //判断是否存在token，如果存在将每个页面header都添加token
//     // axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  
//     if (window.localStorage.getItem('token')) {
//       config.headers.common['Authorization'] = window.localStorage.getItem('token')
//     }
//     return config;
//   }, error => {
//     // 对请求错误做些什么
//     return Promise.reject(error);
//   });
     
//   // http response 拦截器
//   axios.interceptors.response.use(
//     response => {
   
//       return response;
//     },
//     error => {
   
//       if (error.response) {
//         switch (error.response.status) {
//           case 401:
//           case 500:
//               // this.$toast.fail('登录失效,请重新登录！')
//             // localStorage.setItem('token', null);
           
//             // window.location.href = "index.html";
//         }
//       }
//       return Promise.reject(error.response.data)
  
//     });
  