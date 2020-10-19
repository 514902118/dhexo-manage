"use strict";
const debug = process.env.NODE_ENV !== 'production'
let base = debug ? '/api/' : '/'


// companyes/aggs/patent/analysis
const URL = {
  base: base,
  leaveMessage: {
    list: base + 'mtApi/list/leaveMessage', // 留言列表
    showImg: base + 'mtApi/file/show', // 图片展示
    detailed: base + 'mtApi/detailed/leaveMessage', // 留言详情
    reply: base + 'mtApi/reply/leaveMessage', // 回复
  }
}

module.exports = URL;
