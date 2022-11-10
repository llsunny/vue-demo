<template>
  <div class="page">
    <el-table
      ref="normalTable"
      :data="tbData"
      highlight-current-row
      @current-change="(row, oldrow) =>handleCurrentChange(row, oldrow)"
    >
      <!-- <el-table-column
        label="名称"
        prop="peItemNodeName"
      >
      </el-table-column>
      <el-table-column
        label="项目结果"
        prop="resultText"
      >
        <template slot-scope="scope">
          <template v-if="isShowInput(scope.row, scope.$index)">
            <el-input-number
              :ref="scope.$index"
              v-model="scope.row.resultText"
              :index="scope.$index"
              :controls="false"
              @focus="handleFocus(scope.row, scope.$index)"
              @blur="handleBlur(scope.row, scope.$index)"
              @keyup.enter.native=" e => saveAndNext(e)"
            ></el-input-number>
          </template>
          <template v-else>
            {{ scope.row.resultText }}
          </template>
        </template>
      </el-table-column>
      <el-table-column
        label="单位"
        prop="resultUnit"
      >
      </el-table-column>
      <el-table-column
        label="参考值"
        prop="refRange"
      >
      </el-table-column>
      <el-table-column
        label="提示"
        prop="resultPrompt"
      >
      </el-table-column> -->
      <template v-for="item in tbTitle">
        <el-table-column
          v-if="item.name === 'resultText'"
          :key="item.name"
          :label="item.label"
          :prop="item.name"
        >
          <template slot-scope="scope">
            <template v-if="isShowInput(scope.row, scope.$index)">
              <el-input-number
                :ref="scope.$index"
                v-model="scope.row.resultText"
                :index="scope.$index"
                @focus="handleFocus(scope.row, scope.$index)"
                @blur="handleBlur(scope.row, scope.$index)"
                @keyup.enter.native=" e => saveAndNext(e)"
              ></el-input-number>
            </template>
            <template>
              {{ scope.row.resultText }}
            </template>
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :key="item.name"
          :label="item.label"
          :prop="item.name"
        >
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
// import Table from './components/Table.vue'//
// import ElInputNumber from 'element-ui/packages/input-number/src/input-number.vue'
// import ElInput from 'element-ui/packages/input/src/input.vue'
// import BaseInput from './components/BaseInput.vue'
export default {
  components: {
    // Table
    // ElInputNumber,
    // ElInput
    // BaseInput
  },
  data() {
    return {
      tbData: [
        {
          'isDel': null,
          'createdAt': null,
          'createdBy': null,
          'modifiedAt': null,
          'modifiedBy': null,
          'hospitalSOID': null,
          'soid': null,
          'peItemNodeId': '201873536666083054',
          'peItemNodeNo': 'WN010001',
          'peItemNodeName': '身高',
          'peItemNodeTypeCode': '399557553',
          'peItemNodeTypeName': null,
          'pinyin': 'sg',
          'wubi': 'ty',
          'resultDataTypeCode': '399557559',
          'resultDataTypeName': null,
          'resultEditTypeCode': '399557565',
          'resultEditTypeName': null,
          'resultPrecision': 1,
          'defaultValue': null,
          'genderLimitCode': '869447',
          'seqNo': 0,
          'memo': '',
          'customCategory': '',
          'showDetailFlag': '98175',
          'nullAllowedFlag': '98175',
          'enabledFlag': '98175',
          'minLimitValue': 20,
          'maxLimitValue': 250,
          'peItemCategoryId': '201878645529680718',
          'peItemNo': null,
          'peItemName': null,
          'peItemCategoryName': null,
          'peItemTypeCode': null,
          'peItemNodeLabtestIndexOutputDTOList': [],
          'peItemNodeLisrelativeOutputDTOList': [],
          'peItemNodeNumRangeOutputDTOList': [
            {
              'isDel': 0,
              'createdAt': '2022-05-29 10:58:48',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-18 10:19:48',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peItemNodeNumRangeId': '230807090702559233',
              'peCommentId': null,
              'peCommentName': null,
              'peItemNodeId': '201873536666083054',
              'beginChar': '[',
              'endChar': ']',
              'minValue': 140,
              'maxValue': 190,
              'displayName': '140.00≤X≤190.00',
              'promptMessage': '',
              'normalFlag': '98175',
              'ageSegmentSettingsId': '256813',
              'genderLimitCode': '869447'
            },
            {
              'isDel': 0,
              'createdAt': '2022-05-29 10:58:48',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-18 10:19:48',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peItemNodeNumRangeId': '230807092850042881',
              'peCommentId': '201873424996932524',
              'peCommentName': '偏低1',
              'peItemNodeId': '201873536666083054',
              'beginChar': '[',
              'endChar': ')',
              'minValue': null,
              'maxValue': 140,
              'displayName': 'X<140.00',
              'promptMessage': '偏低',
              'normalFlag': '98176',
              'ageSegmentSettingsId': '256813',
              'genderLimitCode': '869447'
            },
            {
              'isDel': 0,
              'createdAt': '2022-05-29 10:58:48',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-18 10:19:48',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peItemNodeNumRangeId': '230807092850042883',
              'peCommentId': '201873424996932522',
              'peCommentName': '偏高1',
              'peItemNodeId': '201873536666083054',
              'beginChar': '(',
              'endChar': ']',
              'minValue': 190,
              'maxValue': null,
              'displayName': '190.00<X',
              'promptMessage': '偏高',
              'normalFlag': '98176',
              'ageSegmentSettingsId': '256813',
              'genderLimitCode': '869447'
            }
          ],
          'peItemNodeRuleOutputDTOList': [],
          'peItemNodeTextdictOutputDTOList': [],
          'peCommentOutputDTOList': [
            {
              'isDel': 0,
              'createdAt': '2021-12-24 15:00:32',
              'createdBy': '218650971780104192',
              'modifiedAt': '2022-08-18 10:19:48',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peCommentId': '201873424996932522',
              'peCommentName': '偏高1',
              'peItemCategoryId': '201878645529680718',
              'peItemCategoryName': '',
              'pinyin': null,
              'wubi': null,
              'normalFlag': '98176',
              'peCommentLevelTypeCode': '15921',
              'seqNo': 35,
              'peDiseaseId': null,
              'peDiseaseNo': null,
              'peDiseaseName': null
            },
            {
              'isDel': 0,
              'createdAt': '2021-12-24 15:00:32',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-18 10:19:48',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peCommentId': '201873424996932524',
              'peCommentName': '偏低1',
              'peItemCategoryId': '201878645529680718',
              'peItemCategoryName': '',
              'pinyin': null,
              'wubi': null,
              'normalFlag': '98176',
              'peCommentLevelTypeCode': '15921',
              'seqNo': 36,
              'peDiseaseId': null,
              'peDiseaseNo': null,
              'peDiseaseName': null
            }
          ],
          'peResultId': null,
          'peOrderItemId': null,
          'encounterId': null,
          'peItemParentNodeId': null,
          'resultText': undefined,
          'resultNum': null,
          'resultPrompt': null,
          'resultUnit': 'cm',
          'refRange': null,
          'refRangeMax': null,
          'refRangeMin': null,
          'resultStatus': null,
          'labtestIndexId': null,
          'labtestIndexNo': null,
          'labtestIndexName': null,
          'labtestResultStatus': null,
          'itemCommentDTOList': null
        },
        {
          'isDel': null,
          'createdAt': null,
          'createdBy': null,
          'modifiedAt': null,
          'modifiedBy': null,
          'hospitalSOID': null,
          'soid': null,
          'peItemNodeId': '201873536666083056',
          'peItemNodeNo': 'WN010002',
          'peItemNodeName': '体重',
          'peItemNodeTypeCode': '399557553',
          'peItemNodeTypeName': null,
          'pinyin': 'tz',
          'wubi': 'wt',
          'resultDataTypeCode': '399557559',
          'resultDataTypeName': null,
          'resultEditTypeCode': '399557565',
          'resultEditTypeName': null,
          'resultPrecision': 1,
          'defaultValue': null,
          'genderLimitCode': '869447',
          'seqNo': 1,
          'memo': ' ',
          'customCategory': '',
          'showDetailFlag': '98176',
          'nullAllowedFlag': '98176',
          'enabledFlag': '98175',
          'minLimitValue': 20,
          'maxLimitValue': 350,
          'peItemCategoryId': '201878645529680718',
          'peItemNo': null,
          'peItemName': null,
          'peItemCategoryName': null,
          'peItemTypeCode': null,
          'peItemNodeLabtestIndexOutputDTOList': [],
          'peItemNodeLisrelativeOutputDTOList': [],
          'peItemNodeNumRangeOutputDTOList': [],
          'peItemNodeRuleOutputDTOList': [],
          'peItemNodeTextdictOutputDTOList': [],
          'peCommentOutputDTOList': [],
          'peResultId': null,
          'peOrderItemId': null,
          'encounterId': null,
          'peItemParentNodeId': null,
          'resultText': undefined,
          'resultNum': null,
          'resultPrompt': null,
          'resultUnit': 'Kg',
          'refRange': null,
          'refRangeMax': null,
          'refRangeMin': null,
          'resultStatus': null,
          'labtestIndexId': null,
          'labtestIndexNo': null,
          'labtestIndexName': null,
          'labtestResultStatus': null,
          'itemCommentDTOList': null
        },
        {
          'isDel': null,
          'createdAt': null,
          'createdBy': null,
          'modifiedAt': null,
          'modifiedBy': null,
          'hospitalSOID': null,
          'soid': null,
          'peItemNodeId': '201878548892916216',
          'peItemNodeNo': 'WN460013',
          'peItemNodeName': '体重指数BMI',
          'peItemNodeTypeCode': '399557553',
          'peItemNodeTypeName': null,
          'pinyin': 'tzzsbmi',
          'wubi': 'wtrobmi',
          'resultDataTypeCode': '399557559',
          'resultDataTypeName': null,
          'resultEditTypeCode': '399557565',
          'resultEditTypeName': null,
          'resultPrecision': 2,
          'defaultValue': null,
          'genderLimitCode': '869447',
          'seqNo': 2,
          'memo': '',
          'customCategory': '',
          'showDetailFlag': '98176',
          'nullAllowedFlag': '98176',
          'enabledFlag': '98175',
          'minLimitValue': 1,
          'maxLimitValue': 100,
          'peItemCategoryId': '201878645529680718',
          'peItemNo': null,
          'peItemName': null,
          'peItemCategoryName': null,
          'peItemTypeCode': null,
          'peItemNodeLabtestIndexOutputDTOList': [],
          'peItemNodeLisrelativeOutputDTOList': [],
          'peItemNodeNumRangeOutputDTOList': [
            {
              'isDel': 0,
              'createdAt': '2022-07-05 20:45:05',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-18 10:27:11',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peItemNodeNumRangeId': '237747710586529792',
              'peCommentId': null,
              'peCommentName': null,
              'peItemNodeId': '201878548892916216',
              'beginChar': '[',
              'endChar': ']',
              'minValue': 18.5,
              'maxValue': 24,
              'displayName': '18.50≤X≤24.00',
              'promptMessage': '正常',
              'normalFlag': '98175',
              'ageSegmentSettingsId': null,
              'genderLimitCode': '869447'
            },
            {
              'isDel': 0,
              'createdAt': '2022-07-05 20:45:05',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-18 10:27:11',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peItemNodeNumRangeId': '237747710586529794',
              'peCommentId': '237747098537375744',
              'peCommentName': '消瘦',
              'peItemNodeId': '201878548892916216',
              'beginChar': '[',
              'endChar': ')',
              'minValue': 1,
              'maxValue': 18.5,
              'displayName': '1.00≤X<18.50',
              'promptMessage': '偏低',
              'normalFlag': '98176',
              'ageSegmentSettingsId': null,
              'genderLimitCode': '869447'
            },
            {
              'isDel': 0,
              'createdAt': '2022-07-05 20:45:05',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-18 10:27:11',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peItemNodeNumRangeId': '237747710586529796',
              'peCommentId': '201873309032814934',
              'peCommentName': '超重',
              'peItemNodeId': '201878548892916216',
              'beginChar': '(',
              'endChar': ']',
              'minValue': 24,
              'maxValue': 28,
              'displayName': '24.00<X≤28.00',
              'promptMessage': '偏高',
              'normalFlag': '98176',
              'ageSegmentSettingsId': null,
              'genderLimitCode': '869447'
            },
            {
              'isDel': 0,
              'createdAt': '2022-07-05 20:45:05',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-18 10:27:11',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peItemNodeNumRangeId': '237747710586529799',
              'peCommentId': '201873536666081472',
              'peCommentName': '肥胖',
              'peItemNodeId': '201878548892916216',
              'beginChar': '(',
              'endChar': ')',
              'minValue': 28,
              'maxValue': 100,
              'displayName': '28.00<X<100.00',
              'promptMessage': '偏高',
              'normalFlag': '98176',
              'ageSegmentSettingsId': null,
              'genderLimitCode': '869447'
            }
          ],
          'peItemNodeRuleOutputDTOList': [
            {
              'isDel': 0,
              'createdAt': '2021-12-28 15:00:48',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-18 10:27:11',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peItemNodeRuleId': '202635801047801857',
              'peItemNodeId': '201878548892916216',
              'formula': '[{"inputType":"298071","value":"201873536666083056","name":"体重","no":"WN010002"},{"inputType":"298078","value":"/","name":""},{"inputType":"298078","value":"(","name":""},{"inputType":"298071","value":"201873536666083054","name":"身高","no":"WN010001"},{"inputType":"298078","value":"*","name":"身高","no":"WN010001"},{"inputType":"298071","value":"201873536666083054","name":"身高","no":"WN010001"},{"inputType":"298078","value":")","name":""},{"inputType":"298078","value":"*","name":""},{"inputType":"298088","value":10000,"name":""}]',
              'formulaText': '体重/(身高*身高)*10000',
              'defaultFlag': '98175'
            }
          ],
          'peItemNodeTextdictOutputDTOList': [],
          'peCommentOutputDTOList': [
            {
              'isDel': 0,
              'createdAt': '2021-12-24 15:00:32',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-18 10:27:11',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peCommentId': '201873309032814732',
              'peCommentName': '体重指数正常',
              'peItemCategoryId': '201878645529680718',
              'peItemCategoryName': '',
              'pinyin': null,
              'wubi': null,
              'normalFlag': '98176',
              'peCommentLevelTypeCode': '15920',
              'seqNo': 6,
              'peDiseaseId': null,
              'peDiseaseNo': null,
              'peDiseaseName': null
            },
            {
              'isDel': 0,
              'createdAt': '2021-12-24 15:00:32',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-18 10:27:11',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peCommentId': '201873309032814934',
              'peCommentName': '超重',
              'peItemCategoryId': '201878645529680718',
              'peItemCategoryName': '',
              'pinyin': null,
              'wubi': null,
              'normalFlag': '98176',
              'peCommentLevelTypeCode': '15921',
              'seqNo': 7,
              'peDiseaseId': '201878840950692902',
              'peDiseaseNo': 'WN00235',
              'peDiseaseName': '超重'
            },
            {
              'isDel': 0,
              'createdAt': '2021-12-24 15:00:32',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-18 10:27:11',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peCommentId': '201873424996932020',
              'peCommentName': '体重指数偏低',
              'peItemCategoryId': '201878645529680718',
              'peItemCategoryName': '',
              'pinyin': null,
              'wubi': null,
              'normalFlag': '98176',
              'peCommentLevelTypeCode': '15921',
              'seqNo': 26,
              'peDiseaseId': '201878855983079146',
              'peDiseaseNo': 'WN03701',
              'peDiseaseName': '体重指数偏低'
            },
            {
              'isDel': 0,
              'createdAt': '2021-12-24 15:00:32',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-18 10:27:11',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peCommentId': '201873424996932022',
              'peCommentName': '体重指数偏高',
              'peItemCategoryId': '201878645529680718',
              'peItemCategoryName': '',
              'pinyin': null,
              'wubi': null,
              'normalFlag': '98176',
              'peCommentLevelTypeCode': '15921',
              'seqNo': 27,
              'peDiseaseId': '201878855983079148',
              'peDiseaseNo': 'WN03702',
              'peDiseaseName': '体重指数偏高'
            },
            {
              'isDel': 0,
              'createdAt': '2021-12-24 15:00:32',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-18 10:27:11',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peCommentId': '201873536666081472',
              'peCommentName': '肥胖',
              'peItemCategoryId': '201878645529680718',
              'peItemCategoryName': '',
              'pinyin': null,
              'wubi': null,
              'normalFlag': '98176',
              'peCommentLevelTypeCode': '15921',
              'seqNo': 38,
              'peDiseaseId': '201878855983079152',
              'peDiseaseNo': 'WN03713',
              'peDiseaseName': '肥胖'
            },
            {
              'isDel': 0,
              'createdAt': '2022-07-05 20:40:20',
              'createdBy': '218650971780104192',
              'modifiedAt': '2022-08-18 10:27:11',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peCommentId': '237747098537375744',
              'peCommentName': '消瘦',
              'peItemCategoryId': '201878645529680718',
              'peItemCategoryName': '',
              'pinyin': null,
              'wubi': null,
              'normalFlag': '98176',
              'peCommentLevelTypeCode': '15921',
              'seqNo': 0,
              'peDiseaseId': '237747626902878209',
              'peDiseaseNo': 'JB01519',
              'peDiseaseName': '消瘦'
            }
          ],
          'peResultId': null,
          'peOrderItemId': null,
          'encounterId': null,
          'peItemParentNodeId': null,
          'resultText': undefined,
          'resultNum': null,
          'resultPrompt': null,
          'resultUnit': '',
          'refRange': null,
          'refRangeMax': null,
          'refRangeMin': null,
          'resultStatus': null,
          'labtestIndexId': null,
          'labtestIndexNo': null,
          'labtestIndexName': null,
          'labtestResultStatus': null,
          'itemCommentDTOList': null
        },
        {
          'isDel': null,
          'createdAt': null,
          'createdBy': null,
          'modifiedAt': null,
          'modifiedBy': null,
          'hospitalSOID': null,
          'soid': null,
          'peItemNodeId': '201873536666083062',
          'peItemNodeNo': 'WN010005',
          'peItemNodeName': '收缩压',
          'peItemNodeTypeCode': '399557553',
          'peItemNodeTypeName': null,
          'pinyin': 'ssy',
          'wubi': 'nxd',
          'resultDataTypeCode': '399557559',
          'resultDataTypeName': null,
          'resultEditTypeCode': '399557565',
          'resultEditTypeName': null,
          'resultPrecision': 0,
          'defaultValue': null,
          'genderLimitCode': '869447',
          'seqNo': 3,
          'memo': ' ',
          'customCategory': '',
          'showDetailFlag': '98176',
          'nullAllowedFlag': '98176',
          'enabledFlag': '98175',
          'minLimitValue': 60,
          'maxLimitValue': 180,
          'peItemCategoryId': '201878645529680718',
          'peItemNo': null,
          'peItemName': null,
          'peItemCategoryName': null,
          'peItemTypeCode': null,
          'peItemNodeLabtestIndexOutputDTOList': [],
          'peItemNodeLisrelativeOutputDTOList': [],
          'peItemNodeNumRangeOutputDTOList': [
            {
              'isDel': 0,
              'createdAt': '2022-05-29 11:06:22',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-18 10:15:38',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peItemNodeNumRangeId': '230808067807619072',
              'peCommentId': null,
              'peCommentName': null,
              'peItemNodeId': '201873536666083062',
              'beginChar': '[',
              'endChar': ']',
              'minValue': 90,
              'maxValue': 140,
              'displayName': '90≤X≤140',
              'promptMessage': '',
              'normalFlag': '98175',
              'ageSegmentSettingsId': '256813',
              'genderLimitCode': '869447'
            },
            {
              'isDel': 0,
              'createdAt': '2022-05-29 11:06:22',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-18 10:15:38',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peItemNodeNumRangeId': '230808067807619074',
              'peCommentId': '201873276820561662',
              'peCommentName': '收缩压偏低',
              'peItemNodeId': '201873536666083062',
              'beginChar': '(',
              'endChar': ')',
              'minValue': null,
              'maxValue': 90,
              'displayName': 'X<90',
              'promptMessage': '偏低',
              'normalFlag': '98176',
              'ageSegmentSettingsId': '256813',
              'genderLimitCode': '869447'
            },
            {
              'isDel': 0,
              'createdAt': '2022-05-29 11:06:22',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-18 10:15:38',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peItemNodeNumRangeId': '230808067807619076',
              'peCommentId': '201873276820561664',
              'peCommentName': '收缩压偏高',
              'peItemNodeId': '201873536666083062',
              'beginChar': '(',
              'endChar': ']',
              'minValue': 140,
              'maxValue': null,
              'displayName': '140<X',
              'promptMessage': '偏高',
              'normalFlag': '98176',
              'ageSegmentSettingsId': '256813',
              'genderLimitCode': '869447'
            },
            {
              'isDel': 0,
              'createdAt': '2022-08-11 19:59:55',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-18 10:15:38',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peItemNodeNumRangeId': '244606964483438593',
              'peCommentId': null,
              'peCommentName': null,
              'peItemNodeId': '201873536666083062',
              'beginChar': '[',
              'endChar': ']',
              'minValue': 90,
              'maxValue': 140,
              'displayName': '90≤X≤140',
              'promptMessage': null,
              'normalFlag': '98175',
              'ageSegmentSettingsId': null,
              'genderLimitCode': '869447'
            },
            {
              'isDel': 0,
              'createdAt': '2022-08-11 19:59:55',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-18 10:15:38',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peItemNodeNumRangeId': '244606964483438595',
              'peCommentId': '201873276820561662',
              'peCommentName': '收缩压偏低',
              'peItemNodeId': '201873536666083062',
              'beginChar': '(',
              'endChar': ')',
              'minValue': null,
              'maxValue': 90,
              'displayName': 'X<90',
              'promptMessage': '偏低',
              'normalFlag': '98176',
              'ageSegmentSettingsId': null,
              'genderLimitCode': '869447'
            },
            {
              'isDel': 0,
              'createdAt': '2022-08-11 19:59:55',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-18 10:15:38',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peItemNodeNumRangeId': '244606964483438597',
              'peCommentId': '201873276820561664',
              'peCommentName': '收缩压偏高',
              'peItemNodeId': '201873536666083062',
              'beginChar': '(',
              'endChar': ')',
              'minValue': 140,
              'maxValue': null,
              'displayName': '140<X',
              'promptMessage': '偏高',
              'normalFlag': '98176',
              'ageSegmentSettingsId': null,
              'genderLimitCode': '869447'
            }
          ],
          'peItemNodeRuleOutputDTOList': [],
          'peItemNodeTextdictOutputDTOList': [],
          'peCommentOutputDTOList': [
            {
              'isDel': 0,
              'createdAt': '2021-12-24 15:00:32',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-18 10:15:38',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peCommentId': '201873276820561662',
              'peCommentName': '收缩压偏低',
              'peItemCategoryId': '201878645529680718',
              'peItemCategoryName': '',
              'pinyin': null,
              'wubi': null,
              'normalFlag': '98176',
              'peCommentLevelTypeCode': '15921',
              'seqNo': 1,
              'peDiseaseId': '201878875310431904',
              'peDiseaseNo': 'WN05496',
              'peDiseaseName': '收缩压偏低'
            },
            {
              'isDel': 0,
              'createdAt': '2021-12-24 15:00:32',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-18 10:15:38',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peCommentId': '201873276820561664',
              'peCommentName': '收缩压偏高',
              'peItemCategoryId': '201878645529680718',
              'peItemCategoryName': '',
              'pinyin': null,
              'wubi': null,
              'normalFlag': '98176',
              'peCommentLevelTypeCode': '15921',
              'seqNo': 2,
              'peDiseaseId': '201878855983079140',
              'peDiseaseNo': 'WN03698',
              'peDiseaseName': '收缩压偏高'
            },
            {
              'isDel': 0,
              'createdAt': '2021-12-24 15:00:32',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-18 10:15:38',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peCommentId': '201873309032814686',
              'peCommentName': '收缩压升高',
              'peItemCategoryId': '201878645529680718',
              'peItemCategoryName': '',
              'pinyin': null,
              'wubi': null,
              'normalFlag': '98176',
              'peCommentLevelTypeCode': '15921',
              'seqNo': 3,
              'peDiseaseId': '201878855983079140',
              'peDiseaseNo': 'WN03698',
              'peDiseaseName': '收缩压偏高'
            },
            {
              'isDel': 0,
              'createdAt': '2021-12-24 15:00:32',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-18 10:15:38',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peCommentId': '201873309032814944',
              'peCommentName': '收缩压正常',
              'peItemCategoryId': '201878645529680718',
              'peItemCategoryName': '',
              'pinyin': null,
              'wubi': null,
              'normalFlag': '98176',
              'peCommentLevelTypeCode': '15921',
              'seqNo': 8,
              'peDiseaseId': null,
              'peDiseaseNo': null,
              'peDiseaseName': null
            },
            {
              'isDel': 0,
              'createdAt': '2021-12-24 15:00:32',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-18 10:15:38',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peCommentId': '201873309032814948',
              'peCommentName': '血压增高，建议心内科门诊治疗',
              'peItemCategoryId': '201878645529680718',
              'peItemCategoryName': '',
              'pinyin': null,
              'wubi': null,
              'normalFlag': '98176',
              'peCommentLevelTypeCode': '15921',
              'seqNo': 10,
              'peDiseaseId': '201878840950693236',
              'peDiseaseNo': 'WN00553',
              'peDiseaseName': '高血压'
            }
          ],
          'peResultId': null,
          'peOrderItemId': null,
          'encounterId': null,
          'peItemParentNodeId': null,
          'resultText': undefined,
          'resultNum': null,
          'resultPrompt': null,
          'resultUnit': 'mmHg',
          'refRange': null,
          'refRangeMax': null,
          'refRangeMin': null,
          'resultStatus': null,
          'labtestIndexId': null,
          'labtestIndexNo': null,
          'labtestIndexName': null,
          'labtestResultStatus': null,
          'itemCommentDTOList': null
        },
        {
          'isDel': null,
          'createdAt': null,
          'createdBy': null,
          'modifiedAt': null,
          'modifiedBy': null,
          'hospitalSOID': null,
          'soid': null,
          'peItemNodeId': '201873536666083064',
          'peItemNodeNo': 'WN010006',
          'peItemNodeName': '舒张压',
          'peItemNodeTypeCode': '399557553',
          'peItemNodeTypeName': null,
          'pinyin': 'szy',
          'wubi': 'wxd',
          'resultDataTypeCode': '399557559',
          'resultDataTypeName': null,
          'resultEditTypeCode': '399557565',
          'resultEditTypeName': null,
          'resultPrecision': 0,
          'defaultValue': null,
          'genderLimitCode': '869447',
          'seqNo': 4,
          'memo': ' ',
          'customCategory': '',
          'showDetailFlag': '98176',
          'nullAllowedFlag': '98176',
          'enabledFlag': '98175',
          'minLimitValue': 20,
          'maxLimitValue': 100,
          'peItemCategoryId': '201878645529680718',
          'peItemNo': null,
          'peItemName': null,
          'peItemCategoryName': null,
          'peItemTypeCode': null,
          'peItemNodeLabtestIndexOutputDTOList': [],
          'peItemNodeLisrelativeOutputDTOList': [],
          'peItemNodeNumRangeOutputDTOList': [
            {
              'isDel': 0,
              'createdAt': '2022-05-29 11:08:14',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-20 19:54:30',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peItemNodeNumRangeId': '230808308325787648',
              'peCommentId': null,
              'peCommentName': null,
              'peItemNodeId': '201873536666083064',
              'beginChar': '[',
              'endChar': ']',
              'minValue': 60,
              'maxValue': 90,
              'displayName': '60≤X≤90',
              'promptMessage': '',
              'normalFlag': '98175',
              'ageSegmentSettingsId': '256813',
              'genderLimitCode': '869447'
            },
            {
              'isDel': 0,
              'createdAt': '2022-05-29 11:08:14',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-20 19:54:30',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peItemNodeNumRangeId': '230808308325787651',
              'peCommentId': '201873309032814694',
              'peCommentName': '舒张压偏低',
              'peItemNodeId': '201873536666083064',
              'beginChar': '(',
              'endChar': ')',
              'minValue': null,
              'maxValue': 60,
              'displayName': 'X<60',
              'promptMessage': '偏低',
              'normalFlag': '98176',
              'ageSegmentSettingsId': '256813',
              'genderLimitCode': '869447'
            },
            {
              'isDel': 0,
              'createdAt': '2022-05-29 11:08:14',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-20 19:54:30',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peItemNodeNumRangeId': '230808308325787653',
              'peCommentId': '201873309032814692',
              'peCommentName': '舒张压升高',
              'peItemNodeId': '201873536666083064',
              'beginChar': '(',
              'endChar': ')',
              'minValue': 90,
              'maxValue': null,
              'displayName': '90<X',
              'promptMessage': '偏高',
              'normalFlag': '98176',
              'ageSegmentSettingsId': '256813',
              'genderLimitCode': '869447'
            },
            {
              'isDel': 0,
              'createdAt': '2022-08-11 19:58:19',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-20 19:54:30',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peItemNodeNumRangeId': '244606760505458688',
              'peCommentId': null,
              'peCommentName': null,
              'peItemNodeId': '201873536666083064',
              'beginChar': '[',
              'endChar': ']',
              'minValue': 60,
              'maxValue': 89,
              'displayName': '60≤X≤89',
              'promptMessage': null,
              'normalFlag': '98175',
              'ageSegmentSettingsId': null,
              'genderLimitCode': '869447'
            },
            {
              'isDel': 0,
              'createdAt': '2022-08-11 19:58:19',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-20 19:54:30',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peItemNodeNumRangeId': '244606760505458690',
              'peCommentId': '201873309032814694',
              'peCommentName': '舒张压偏低',
              'peItemNodeId': '201873536666083064',
              'beginChar': '(',
              'endChar': ')',
              'minValue': 20,
              'maxValue': 60,
              'displayName': '20<X<60',
              'promptMessage': '偏低',
              'normalFlag': '98176',
              'ageSegmentSettingsId': null,
              'genderLimitCode': '869447'
            },
            {
              'isDel': 0,
              'createdAt': '2022-08-11 19:58:19',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-20 19:54:30',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peItemNodeNumRangeId': '244606760505458692',
              'peCommentId': '201873309032814692',
              'peCommentName': '舒张压升高',
              'peItemNodeId': '201873536666083064',
              'beginChar': '(',
              'endChar': ')',
              'minValue': 89,
              'maxValue': 100,
              'displayName': '89<X<100',
              'promptMessage': '偏高',
              'normalFlag': '98176',
              'ageSegmentSettingsId': null,
              'genderLimitCode': '869447'
            }
          ],
          'peItemNodeRuleOutputDTOList': [],
          'peItemNodeTextdictOutputDTOList': [],
          'peCommentOutputDTOList': [
            {
              'isDel': 0,
              'createdAt': '2021-12-24 15:00:32',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-20 19:54:30',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peCommentId': '201873309032814692',
              'peCommentName': '舒张压升高',
              'peItemCategoryId': '201878645529680718',
              'peItemCategoryName': '',
              'pinyin': null,
              'wubi': null,
              'normalFlag': '98176',
              'peCommentLevelTypeCode': '15921',
              'seqNo': 4,
              'peDiseaseId': '201878840950692602',
              'peDiseaseNo': 'WN00017',
              'peDiseaseName': '舒张压偏高'
            },
            {
              'isDel': 0,
              'createdAt': '2021-12-24 15:00:32',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-20 19:54:30',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peCommentId': '201873309032814694',
              'peCommentName': '舒张压偏低',
              'peItemCategoryId': '201878645529680718',
              'peItemCategoryName': '',
              'pinyin': null,
              'wubi': null,
              'normalFlag': '98176',
              'peCommentLevelTypeCode': '15921',
              'seqNo': 5,
              'peDiseaseId': '201878855983079144',
              'peDiseaseNo': 'WN03700',
              'peDiseaseName': '舒张压偏低'
            },
            {
              'isDel': 0,
              'createdAt': '2021-12-24 15:00:32',
              'createdBy': '57393746696202243',
              'modifiedAt': '2022-08-20 19:54:30',
              'modifiedBy': '218650971780104192',
              'hospitalSOID': '993718',
              'soid': [
                '993718'
              ],
              'peCommentId': '201873309032814950',
              'peCommentName': '血压增高，建议心内科门诊治疗',
              'peItemCategoryId': '201878645529680718',
              'peItemCategoryName': '',
              'pinyin': null,
              'wubi': null,
              'normalFlag': '98176',
              'peCommentLevelTypeCode': '15921',
              'seqNo': 11,
              'peDiseaseId': null,
              'peDiseaseNo': null,
              'peDiseaseName': null
            }
          ],
          'peResultId': null,
          'peOrderItemId': null,
          'encounterId': null,
          'peItemParentNodeId': null,
          'resultText': undefined,
          'resultNum': null,
          'resultPrompt': null,
          'resultUnit': 'mmHg',
          'refRange': null,
          'refRangeMax': null,
          'refRangeMin': null,
          'resultStatus': null,
          'labtestIndexId': null,
          'labtestIndexNo': null,
          'labtestIndexName': null,
          'labtestResultStatus': null,
          'itemCommentDTOList': null
        }
      ],
      tbTitle: [{name: 'peItemNodeName', label: '名称', width: '180', checked: true},
        {name: 'resultText', label: '项目结果', width: '', checked: true},
        {name: 'resultUnit', label: '单位', width: '100', checked: true},
        {name: 'refRange', label: '参考值', width: '160', checked: false},
        {name: 'resultPrompt', label: '提示', width: '100', checked: true} ],
      currentRowIndex: 0,
      currentRow: {},
      calcFormulaList:[
        {
          'isDel': 0,
          'createdAt': '2021-12-28 15:00:48',
          'createdBy': '57393746696202243',
          'modifiedAt': '2022-08-18 10:27:11',
          'modifiedBy': '218650971780104192',
          'hospitalSOID': '993718',
          'soid': [
            '993718'
          ],
          'peItemNodeRuleId': '202635801047801857',
          'peItemNodeId': '201878548892916216',
          'formula': '[{"inputType":"298071","value":"201873536666083056","name":"体重","no":"WN010002"},{"inputType":"298078","value":"/","name":""},{"inputType":"298078","value":"(","name":""},{"inputType":"298071","value":"201873536666083054","name":"身高","no":"WN010001"},{"inputType":"298078","value":"*","name":"身高","no":"WN010001"},{"inputType":"298071","value":"201873536666083054","name":"身高","no":"WN010001"},{"inputType":"298078","value":")","name":""},{"inputType":"298078","value":"*","name":""},{"inputType":"298088","value":10000,"name":""}]',
          'formulaText': '体重/(身高*身高)*10000',
          'defaultFlag': '98175'
        }
      ],
      formulavaluetypeMap: new Map([
        ['符号', '298078'],
        ['298078', '符号'],
        ['数值', '298088'],
        ['298088', '数值'],
        ['节点', '298071'],
        ['298071', '节点'],
        ['文本', '298092'],
        ['298092', '文本']
      ])
    }
  },
  mounted() {
    this.$nextTick(()=>{
      // 默认选中第一行
      this.setDefaultRow(this.tbData[0])
    })
  },
  methods: {
    isShowInput(row, rowIndex) {
      // if (rowIndex === 2) {
      //   return this.currentRowIndex === rowIndex && row.resultText
      // } else {
      return this.currentRowIndex === rowIndex
      // }
    },
    handleFocus(curRow, index) {
      console.log('%c 聚焦', 'background:red; color:#fff')
      // if (index === 2) {
      //   this.$set(this.tbData[2], 'resultText', 25)
      // }
    },
    handleBlur(curRow, index) {
      console.log('%c 失焦', 'background:gray; color:#fff')
      // this.$nextTick(() => {

      if (index === 1) {
        // this.tbData[2].resultText = 100
        this.$set(this.tbData[2], 'resultText', 25)
      }
      // })
      // this.handleFormula(curRow)
      console.log(this.tbData[2].resultText)
    },
    handleInputChange(curVal, oldVal) {
      console.log(curVal, oldVal)
    },
    handleFormula(curRow) {
      console.log(curRow, '公式逻辑处理')
      console.log('开始')
      if(this.calcFormulaList&&this.calcFormulaList.length)
      {
        const list = []
        this.tbData.forEach(i => {
          list.push([i['peItemNodeId'], i['resultText']])
        })
        //取出当前的键值对
        const noderesultMap = new Map(list)
        for (let index = 0; index < this.tbData.length; index++) {
          const row = this.tbData[index]
          const formulaList=this.calcFormulaList.filter(item=>item.peItemNodeId===row.peItemNodeId)
          console.log('开始', row, formulaList)
          if(formulaList&&formulaList.length) {
            //目前只考虑每个节点一个公式
            const formula=formulaList[0]
            let formulaTxt =''
            JSON.parse(formula.formula).forEach(item => {
              if(item.inputType === this.formulavaluetypeMap.get('节点')) {
                formulaTxt += noderesultMap.get(item.value)
              }else {
                formulaTxt += item.value
              }
            })
            if(isNaN(eval(formulaTxt))) {
              this.$set(row, 'resultText', undefined)
            } else {
              this.$set(row, 'resultText', eval(formulaTxt))
            }
          }
        }
      }
      console.log('结束')
    },
    // 设置默认第一行选中
    setDefaultRow(row) {
      this.$refs.normalTable.setCurrentRow(row, 0)
    },
    //保存当前行并切换下一行
    saveAndNext(e) {
      //因为失去焦点会自动保存，所以这里就直接切换下一行就可以了(最后一行除外)
      console.log('%c 回车', 'background:green; color:#fff')
      // e.target.blur()
      this.selectNextRow()
    },
    // 切换下一行
    selectNextRow() {
      if(this.tbData&&this.tbData.length) {
        if(this.currentRowIndex < this.tbData.length-1) {
          let index=this.currentRowIndex+1
          this.$refs.normalTable.setCurrentRow(this.tbData[index], index)
        }
        else{
          this.$refs.normalTable.setCurrentRow(this.tbData[0], 0)
          //如果已经到最后一个了，是否需要设置保存按钮选中
        }
      }
    },
    // 手动切换选中行
    handleCurrentChange(row, oldRow) {
      console.log('%c 换行', 'background:#2a5cdf; color:#fff')
      // console.log('当前选中行', row,row.peItemNodeId,rowIndex,this.$refs[rowIndex])
      this.currentRow = row
      this.currentRowIndex = this.tbData.findIndex(el => el.peItemNodeId === row.peItemNodeId)
      this.$nextTick(()=>{
        console.log(this.$refs[this.currentRowIndex])
        // this.$refs[this.currentRowIndex][0].$children[0].focus()
        this.$refs[this.currentRowIndex][0].focus()
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
