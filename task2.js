// Задание 2: Управление заказами в ресторане
const chefSpecialties = new Map([
    ['Виктор', 'Пицца'],
    ['Ольга', 'Суши'],
    ['Дмитрий', 'Десерты']
  ]);
  
  const dishes = new Map([
    ['Пицца "Маргарита"', 'Виктор'],
    ['Пицца "Пепперони"', 'Виктор'],
    ['Суши "Филадельфия"', 'Ольга'],
    ['Суши "Калифорния"', 'Ольга'],
    ['Тирамису', 'Дмитрий'],
    ['Чизкейк', 'Дмитрий']
  ]);
  
  const orders = new Map();
  
  // Заказы клиентов
  const alexeyOrder = new Map([
    ['Пицца "Пепперони"', 1],
    ['Тирамису', 1]
  ]);
  orders.set({ name: 'Алексей' }, alexeyOrder);
  
  const mariaOrder = new Map([
    ['Суши "Калифорния"', 1],
    ['Пицца "Маргарита"', 1]
  ]);
  orders.set({ name: 'Мария' }, mariaOrder);
  
  const irinaOrder = new Map([
    ['Чизкейк', 1]
  ]);
  orders.set({ name: 'Ирина' }, irinaOrder);
  
  // Вывод информации о заказах
  for (const [client, order] of orders) {
    console.log(`Заказ клиента ${client.name}:`);
    for (const [dish, quantity] of order) {
      console.log(`${dish} - ${quantity} порция`);
    }
  }
  