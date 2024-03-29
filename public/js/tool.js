; (function (w, u) {
  let Tool = {
    /**
     * 
     * @param {Object} options url
     */
    connGet: function (options, callback) {
      options = options || {};
      let url = options.url || '';

      //创建xhr对象 
      var xhr = new XMLHttpRequest();
      //设置xhr请求的超时时间
      xhr.timeout = 3000;
      //设置响应返回的数据格式
      xhr.responseType = "text";
      //创建一个 post 请求，采用异步
      xhr.open('GET', url, true);
      //注册相关事件回调处理函数
      xhr.onload = function (e) {
        if (this.status == 200 || this.status == 304) {
          // alert(this.responseText);
          // console.log(this.responseText);
          callback(this.responseText);
        }
      };
      xhr.onerror = function (err) {
        // console.log(err);
        throw err;
      };

      //发送数据
      xhr.send();
    },

    /**
     * data:
     * 构造表单数据
     * var formData = new FormData();
     * formData.append('username', 'johndoe');
     * formData.append('id', 123456);
     * @param {Object} options url和data
     */
    connPost: function (options, callback) {
      //创建xhr对象 
      var xhr = new XMLHttpRequest();
      //设置xhr请求的超时时间
      xhr.timeout = 3000;
      //设置响应返回的数据格式
      xhr.responseType = "text";
      //创建一个 post 请求，采用异步
      xhr.open('POST', options.url, true);
      //注册相关事件回调处理函数
      xhr.onload = function (e) {
        if (this.status == 200 || this.status == 304) {
          // alert(this.responseText);
          // return this.responseText;
          callback(this.responseText);
        }
      };
      xhr.ontimeout = function (e) {
        throw e;
      };
      xhr.onerror = function (e) {
        throw e;
      };

      //发送数据
      xhr.send(options.data);
    }
  };

  w.Tool = Tool;
  // console.log("hahaahahhaha");
})(window, undefined)