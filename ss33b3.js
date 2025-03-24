let dishes = [
    { name: 'Rau sạch', category: 'Đồ ăn' },
    { name: 'Thịt lợn', category: 'Đồ ăn' },
    { name: 'Pepsi không calo', category: 'Đồ uống' },
    { name: 'Cocacola', category: 'Đồ uống' },
    { name: 'Cờ lê', category: 'Dụng cụ' },
    { name: 'Tuy vít', category: 'Dụng cụ' },
  ];
function filter() {
    let selectedCategory = document.getElementById('dish').value;
    let category = '';
    if (selectedCategory === 'op2') {
      category = 'Đồ ăn';
    } else if (selectedCategory === 'op3') {
      category = 'Đồ uống';
    } else if (selectedCategory === 'op4') {
      category = 'Dụng cụ';
    } else {
      alert('Vui lòng chọn danh mục!');
      return;
    }
    let filteredDishes = dishes.filter(dish => dish.category === category);
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    if (filteredDishes.length > 0) {
      filteredDishes.forEach(dish => {
        let item = document.createElement('li');
        item.innerHTML = `<b>Tên đồ ăn:</b> ${dish.name} - <b>Danh mục:</b> ${dish.category}`;
        resultDiv.appendChild(item);
      });
    }
  }
  