/*
 * @Author: z_ly
 * @Description:
 * @FilePath: \mobile-office\src\api\api-config\report.js
 *
 */
export default {
  report: {
    path: {
      getHospitalInfo: 'api/mor/adapter/login/gethospitalinfo', // 获取医疗机构列表
      getSystemInfo: 'api/mor/adapter/login/getsysteminfo', // 获取系统列表
      login: 'api/mor/adapter/login/syslogin', // 登录
      getDicInfo: 'api/mor/adapter/biz/getdicinfo', // 初始化字典信息
      getReportListInfo: 'api/mor/adapter/biz/getreportlistinfo', // 报告列表查询
      getReportInfo: 'api/mor/adapter/biz/getreportinfo', // 获取报告信息
      getReportResultInfo: 'api/mor/adapter/biz/getreportresultinfo', // 获取报告内容信息
      verifyReportInfo: 'api/mor/adapter/biz/verifyreportinfo', // 报告审核操作
      recverifyReportInfo: 'api/mor/adapter/biz/recverifyreportinfo', // 报告撤销审核操作
      getApplysheetInfo: 'api/mor/adapter/biz/getapplysheetinfo', // 获取申请单信息
      getRelateReportInfo: 'api/mor/adapter/biz/getrelatereportinfo', // 获取相关报告信息
      getReportTemplate: 'api/mor/adapter/biz/getreporttemplate', // 查询报告模板信息
      unlockReportInfo: 'api/mor/adapter/biz/unlockreportinfo' // 解锁报告
    }
  }
}