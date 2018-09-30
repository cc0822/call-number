/**
 * Created by JetBrains WebStorm.
 * Author: yoon
 * Date: 18-9-11
 * Time: 下午8:22
 * Desc:
 */
const data = [];

while (data.length < 1000) {
  data.push({
    id: data.length,
    name: 'name' + data.length,
    age: 'age' + data.length,
    sex: 'sex' + data.length,
    checked: data.length % 2 === 1
  })
}

export default data;