<template>
  <div class="leave-message-box">
    <vLoginHeader/>
    <div class="main">
      <div class="box">
        <h4>留言列表</h4>
        <div class="container">
          <el-table
            :data="listData"
            border
            style="width: 100%">
            <el-table-column
              type="index"
              label="序号"
              width="70">
            </el-table-column>
            <el-table-column
              prop="title"
              label="标题">
            </el-table-column>
            <el-table-column
              prop="content"
              label="内容">
            </el-table-column>
            <el-table-column
              prop="mail"
              label="邮箱"
              width="160">
            </el-table-column>
            <el-table-column
              label="图片">
              <template slot-scope="scope">
                <div class="img-box">
                  <template v-if="scope.row.imgBase64List.length > 0">
                    <p v-for="(item, index) in scope.row.imgBase64List" :key="index">
                      <el-image :src="item" :preview-src-list="scope.row.imgBase64List">
                        <div slot="placeholder" class="image-slot">
                          <i class="el-icon-loading"></i>
                        </div>
                        <div slot="error" class="image-slot">
                          <i class="el-icon-loading"></i>
                        </div>
                      </el-image>
                    </p>
                  </template>
                  <template v-else>
                    <p>无</p>
                  </template>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              prop="reserved"
              label="状态"
              width="100">
              <template slot-scope="scope">
                <p>{{scope.row.reserved === '1' ? '未回复' : '已回复'}}</p>
              </template>
            </el-table-column>
            <el-table-column
              prop=""
              label="操作"
              width="100">
              <template slot-scope="scope">
                <el-button type="primary" size="medium" @click="showReply(scope)">回复</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- 分页 -->
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="total"
              :page-size="pageSize"
              :current-page.sync="pageNum"
              @current-change="getCurrentPage"
              class="el-pagination">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
    <!-- 回复弹窗 -->
    <el-dialog
      title="回复"
      :visible.sync="dialogReply"
      width="600px"
      append-to-body
      center
      :close-on-click-modal="false"
      :before-close="handleClose"
      class="eldialog reply-dialog">
      <el-form v-if="dialogReply2" class="message-form" ref="messageForm" :rules="messageRules" :model="messageForm" label-position="left" label-width="80px">
        <el-form-item label="标题" prop="title">
          <el-input class="elinput" v-model="messageForm.title" placeholder="请输入标题">
          </el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <el-input type="textarea" :autosize="{ minRows: 5, maxRows: 10}" class="elinput" v-model="messageForm.content" placeholder="请输入回复内容">
          </el-input>
        </el-form-item>
      </el-form>
      <div class="bottom">
        <div class="elbtn" @click="handleSubmit">提交</div>
      </div>
    </el-dialog>
    <vFooter/>
  </div>
</template>

<script>
import axios from 'axios'
import vLoginHeader from '@/components/common/vLoginHeader'
import vFooter from '@/components/common/vFooter'

export default {
  components: {
    vLoginHeader,
    vFooter,
  },
  data() {
    return {
      listData: [],
      total: 0,
      pageSize: 10,
      pageNum: 1,
      dialogReply: false,
      dialogReply2: false,
      messageForm: {
        leaveId: '',
        title: '',
        content: ''
      },
      messageRules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'change' },
        ],
        content: [
          { required: true, message: '请输入回复内容', trigger: 'change' },
        ],
      },
    }
  },
  methods: {
    getLeaveMessageList() {
      let formData = new FormData()
      formData.append('pageNum', Number(this.pageNum))
      let config = {
        headers: { 'Content-Type': 'multipart/form-data'}
      }
      this.$post(this.$Url.leaveMessage.list, formData, config).then(res => {
        if (res.status === 200) {
          let data = res.data || {}
          let list = data.list
          this.total = data.total
          list.forEach((v, i) => {
            let imgList = v.imgList.split(',')
            v.imgBase64List = Array(imgList.length)
            imgList.forEach((b, j) => {
              this.getImg(b, (rs) => {
                this.$set(list[i]['imgBase64List'], j, rs)
              })
            })
          })
          this.listData = list
        } else {
          this.$message({
            type: 'error',
            duration: 2000,
            message: res.msg
          })
        }
      }).catch(err => {})
    },
    getImg(path, func) {
      axios.get(`${this.$Url.leaveMessage.showImg}?fileName=${path}`, {
        responseType: 'arraybuffer'
      }).then(response => {
        return 'data:image/png;base64,' + btoa(
          new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
        )
      }).then(rs => {
        func && func(rs)
      }).catch(err => {})
    },
    // 分页
    getCurrentPage(val) {
      this.pageNum = val
      this.getLeaveMessageList()
    },
    // 回复
    showReply(scope) {
      this.dialogReply = this.dialogReply2 = true
      this.$set(this.messageForm, 'leaveId', scope.row.id)
    },
    handleSubmit() {
      this.$refs['messageForm'].validate(valid => {
        if (valid) {
          this.$post(this.$Url.leaveMessage.reply, {
            leaveId: String(this.messageForm.leaveId),
            title: this.messageForm.title,
            content: this.messageForm.content
          }).then(res => {
            if (res.status === 200) {
              this.$message({
                type: 'success',
                duration: 2000,
                message: res.msg
              })
              this.dialogReply = false
            } else {
              this.$message({
                type: 'error',
                duration: 2000,
                message: res.msg
              })
            }
          }).catch(err => {})
        }
      })
      
    },
    handleClose() {
      this.dialogReply = false
      setTimeout(() => {
        this.dialogReply2 = false
      }, 1000)
      this.messageForm = {
        leaveId: '',
        title: '',
        content: ''
      }
    }
  },
  mounted() {
    this.getLeaveMessageList()
  },

}
</script>

<style lang="scss" scoped>
@import '@/static/_common';
.main {
  position: relative;
  width: 100%;
  padding: 80px 0;
  background-color: $bgColor1;
  .box {
    position: relative;
    width: 1200px;
    padding: 0 30px 30px;
    margin: 0 auto;
    box-shadow: 0 0px 14px 4px rgba(2, 167, 240, 0.1);
    background-color: #fff;
    h4 {
      position: relative;
      width: 100%;
      padding-top: 20px;
      padding-bottom: 20px;
      text-align: left;
      font-weight: normal;
      font-size: 15px;
      color: #000;
    }
    .container {
    }
  }
}
.img-box {
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    margin: 0 10px;
    img {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
  }
}
.pagination {
  margin-top: 20px;
  text-align: center;
}
.bottom {
  position: relative;
  text-align: center;
  .elbtn {
    display: inline-block;
    width: 150px;
    height: 48px;
    line-height: 48px;
    border-radius: 36px;
    margin: 10px 10px 0; 
    text-align: center;
    font-size: 15px;
    color: #fff;
    background-image: $bgGradient2;
    cursor: pointer;
  }
}
</style>