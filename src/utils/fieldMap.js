// 基因
const geneMap = [
  { cname: '分子遗传学', ename: 'Molecular Genetics'},
  { cname: '动物模型', ename: 'Animal Model'},
  { cname: '克隆和表达', ename: 'Cloning and Expression'},
  { cname: '基因功能', ename: 'Gene Function'},
  { cname: '定位', ename: 'Mapping'},
  { cname: '基因结构', ename: 'Gene Structure'},
  { cname: '生物学特征', ename: 'Biochemical Features'},
  { cname: '研究历史', ename: 'History'},
  { cname: '参考文献', ename: ''},
]

// 疾病
const diseaseMap = [
  { cname: '发病机理', ename: 'Pathogenesis'},
  { cname: '临床表现', ename: 'Clinical_Features'},
  { cname: '临床表现', ename: 'Clinical_description_orp'},
  { cname: '诊断', ename: 'Diagnosis'},
  { cname: '诊断', ename: 'Diagnostic_methods_orp'},
  { cname: '治疗', ename: 'Clinical_Management'},
  { cname: '群体遗传学', ename: 'Population_Genetics'},
  { cname: '生化特征', ename: 'Cytogenetics'},
  { cname: '细胞遗传学', ename: 'Biochemical Features'},
  { cname: '分子遗传学', ename: 'Molecular_Genetics'},
  { cname: '动物模型', ename: 'Animal_Model'},
  { cname: '参考文献', ename: ''},
]


export function transGeneName(name, type) {
  let cnameArr = []
  let enameArr = []
  for (let i in geneMap) {
    let cname = geneMap[i].cname
    let ename = geneMap[i].ename
    if (name === cname) {
      enameArr.push(ename)
    }
    if (name === ename) {
      cnameArr.push(cname)
    }
  }
  if (type === 'cn') {
    if (cnameArr.length > 1) {
      return cnameArr
    } else if (cnameArr.length > 0) {
      return cnameArr[0]
    }
  }
  if (type === 'en') {
    if (enameArr.length > 1) {
      return enameArr
    } else if (enameArr.length > 0) {
      return enameArr[0]
    }
  }
}

export function transDiseaseName(name, type) {
  let cnameArr = []
  let enameArr = []
  for (let i in diseaseMap) {
    let cname = diseaseMap[i].cname
    let ename = diseaseMap[i].ename
    if (name === cname) {
      enameArr.push(ename)
    }
    if (name === ename) {
      cnameArr.push(cname)
    }
  }
  if (type === 'cn') {
    if (cnameArr.length > 1) {
      return cnameArr
    } else if (cnameArr.length > 0) {
      return cnameArr[0]
    }
  }
  if (type === 'en') {
    if (enameArr.length > 1) {
      return enameArr
    } else if (enameArr.length > 0) {
      return enameArr[0]
    }
  }
}