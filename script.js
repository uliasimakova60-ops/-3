/**
 * ==========================================================================
 * 1. СТРУКТУРА ДАННЫХ (3 сущности по 15 записей, 8+ полей в каждой)
 * ==========================================================================
 */
const ecomDatabase = {
  // Сущность 1: Товары (15 записей)
  products: [
    {
      id: "PRD-001",
      sku: "SKU-SOUND-1",
      title: "Наушники SoundPro Max",
      description: "Беспроводные наушники с активным шумоподавлением.",
      category: "Аудио",
      price: 12990,
      stock: 35,
      status: "В наличии",
      createdAt: "2026-01-10T09:00:00Z",
      specs: { color: "Черный", weightGrams: 240 }
    },
    {
      id: "PRD-002",
      sku: "SKU-WATCH-2",
      title: "Смарт-часы Chrono 5",
      description: "Часы с датчиком пульса и защитой от воды 5ATM.",
      category: "Гаджеты",
      price: 17490,
      stock: 4,
      status: "Мало",
      createdAt: "2026-01-12T11:20:00Z",
      specs: { color: "Серебристый", weightGrams: 52 }
    },
    {
      id: "PRD-003",
      sku: "SKU-KB-3",
      title: "Клавиатура KeyMaster Pro",
      description: "Механическая клавиатура с переключателями Red Switch.",
      category: "Периферия",
      price: 7990,
      stock: 0,
      status: "Нет на складе",
      createdAt: "2026-01-15T14:30:00Z",
      specs: { color: "Белый", weightGrams: 850 }
    },
    {
      id: "PRD-004",
      sku: "SKU-MOUSE-4",
      title: "Мышь AeroTrack Ultra",
      description: "Легкая игровая мышь с сенсором PixArt 3395.",
      category: "Периферия",
      price: 5490,
      stock: 18,
      status: "В наличии",
      createdAt: "2026-01-18T16:00:00Z",
      specs: { color: "Черный", weightGrams: 60 }
    },
    {
      id: "PRD-005",
      sku: "SKU-BAG-5",
      title: "Рюкзак Urban Tech 20L",
      description: "Водоотталкивающий рюкзак для ноутбука 15.6 дюймов.",
      category: "Аксессуары",
      price: 4290,
      stock: 22,
      status: "В наличии",
      createdAt: "2026-01-20T10:15:00Z",
      specs: { color: "Серый", weightGrams: 700 }
    },
    {
      id: "PRD-006",
      sku: "SKU-MON-6",
      title: "Монитор Horizon 27 IPS",
      description: "Монитор 2K 165Hz для дизайнеров и геймеров.",
      category: "Мониторы",
      price: 26990,
      stock: 3,
      status: "Мало",
      createdAt: "2026-01-25T13:40:00Z",
      specs: { color: "Черный", weightGrams: 4200 }
    },
    {
      id: "PRD-007",
      sku: "SKU-SSD-7",
      title: "Накопитель SSD FastDrive 1TB",
      description: "Внешний скоростной диск со скоростью до 1000 МБ/с.",
      category: "Память",
      price: 8990,
      stock: 40,
      status: "В наличии",
      createdAt: "2026-02-01T08:50:00Z",
      specs: { color: "Синий", weightGrams: 80 }
    },
    {
      id: "PRD-008",
      sku: "SKU-POWER-8",
      title: "Пауэрбанк VoltMax 20000",
      description: "Аккумулятор с быстрой зарядкой 65W Power Delivery.",
      category: "Гаджеты",
      price: 3990,
      stock: 15,
      status: "В наличии",
      createdAt: "2026-02-05T12:00:00Z",
      specs: { color: "Черный", weightGrams: 410 }
    },
    {
      id: "PRD-009",
      sku: "SKU-CHAIR-9",
      title: "Кресло ErgoComfort X",
      description: "Офисное кресло с ортопедической спинкой из сетки.",
      category: "Мебель",
      price: 21990,
      stock: 0,
      status: "Нет на складе",
      createdAt: "2026-02-10T15:10:00Z",
      specs: { color: "Черный", weightGrams: 15000 }
    },
    {
      id: "PRD-010",
      sku: "SKU-MIC-10",
      title: "Микрофон StudioVoice USB",
      description: "Конденсаторный микрофон для стримов и подкастов.",
      category: "Аудио",
      price: 6790,
      stock: 12,
      status: "В наличии",
      createdAt: "2026-02-14T09:30:00Z",
      specs: { color: "Черный", weightGrams: 450 }
    },
    {
      id: "PRD-011",
      sku: "SKU-LAMP-11",
      title: "Лампа DeskLight LED",
      description: "Настольная лампа с регулировкой теплоты света.",
      category: "Освещение",
      price: 2890,
      stock: 25,
      status: "В наличии",
      createdAt: "2026-02-18T17:45:00Z",
      specs: { color: "Белый", weightGrams: 550 }
    },
    {
      id: "PRD-012",
      sku: "SKU-TAB-12",
      title: "Планшет Grafix 10",
      description: "Графический планшет для начинающих иллюстраторов.",
      category: "Гаджеты",
      price: 9490,
      stock: 5,
      status: "Мало",
      createdAt: "2026-02-22T11:00:00Z",
      specs: { color: "Темно-серый", weightGrams: 490 }
    },
    {
      id: "PRD-013",
      sku: "SKU-CAB-13",
      title: "Кабель Type-C Pro 2м",
      description: "Усиленный плетеный кабель с поддержкой передачи 100W.",
      category: "Аксессуары",
      price: 990,
      stock: 80,
      status: "В наличии",
      createdAt: "2026-02-25T14:20:00Z",
      specs: { color: "Красный", weightGrams: 65 }
    },
    {
      id: "PRD-014",
      sku: "SKU-HUB-14",
      title: "Хаб MultiPort 7-in-1",
      description: "Переходник Type-C с портами HDMI 4K и кардридером.",
      category: "Периферия",
      price: 3490,
      stock: 19,
      status: "В наличии",
      createdAt: "2026-03-01T10:00:00Z",
      specs: { color: "Серый", weightGrams: 95 }
    },
    {
      id: "PRD-015",
      sku: "SKU-STAND-15",
      title: "Подставка под ноутбук AluStand",
      description: "Алюминиевая подставка с регулировкой по высоте.",
      category: "Аксессуары",
      price: 2190,
      stock: 2,
      status: "Мало",
      createdAt: "2026-03-05T16:30:00Z",
      specs: { color: "Серебристый", weightGrams: 310 }
    }
  ],

  // Сущность 2: Заказы (15 записей)
  orders: [
    {
      id: "ORD-101",
      orderNumber: "№ 501",
      clientName: "Алексей Смирнов",
      note: "Доставка в первой половине дня",
      total: 20980,
      paymentMethod: "Карта",
      status: "Доставлен",
      createdAt: "2026-03-01T09:15:00Z",
      items: ["Наушники SoundPro Max", "Клавиатура KeyMaster Pro"]
    },
    {
      id: "ORD-102",
      orderNumber: "№ 502",
      clientName: "Елена Васильева",
      note: "Оставить у двери",
      total: 17490,
      paymentMethod: "СБП",
      status: "В пути",
      createdAt: "2026-03-02T11:40:00Z",
      items: ["Смарт-часы Chrono 5"]
    },
    {
      id: "ORD-103",
      orderNumber: "№ 503",
      clientName: "Дмитрий Кузнецов",
      note: "Позвонить за 30 минут",
      total: 26990,
      paymentMethod: "Карта",
      status: "Обработка",
      createdAt: "2026-03-03T14:10:00Z",
      items: ["Монитор Horizon 27 IPS"]
    },
    {
      id: "ORD-104",
      orderNumber: "№ 504",
      clientName: "Ольга Морозова",
      note: "Подарочная упаковка",
      total: 9780,
      paymentMethod: "СБП",
      status: "Новый",
      createdAt: "2026-03-04T10:05:00Z",
      items: ["Рюкзак Urban Tech 20L", "Мышь AeroTrack Ultra"]
    },
    {
      id: "ORD-105",
      orderNumber: "№ 505",
      clientName: "Иван Попов",
      note: "Отказ от заказа",
      total: 3990,
      paymentMethod: "Наличные",
      status: "Отменен",
      createdAt: "2026-03-05T12:00:00Z",
      items: ["Пауэрбанк VoltMax 20000"]
    },
    {
      id: "ORD-106",
      orderNumber: "№ 506",
      clientName: "Анна Новикова",
      note: "Доставка курьером",
      total: 8990,
      paymentMethod: "Карта",
      status: "Доставлен",
      createdAt: "2026-03-06T15:20:00Z",
      items: ["Накопитель SSD FastDrive 1TB"]
    },
    {
      id: "ORD-107",
      orderNumber: "№ 507",
      clientName: "Сергей Федоров",
      note: "Подъем на этаж",
      total: 21990,
      paymentMethod: "Карта",
      status: "В пути",
      createdAt: "2026-03-07T08:45:00Z",
      items: ["Кресло ErgoComfort X"]
    },
    {
      id: "ORD-108",
      orderNumber: "№ 508",
      clientName: "Мария Соколова",
      note: "Код домофона 45",
      total: 6790,
      paymentMethod: "СБП",
      status: "Обработка",
      createdAt: "2026-03-08T13:30:00Z",
      items: ["Микрофон StudioVoice USB"]
    },
    {
      id: "ORD-109",
      orderNumber: "№ 509",
      clientName: "Павел Орлов",
      note: "Срочный заказ",
      total: 3880,
      paymentMethod: "Карта",
      status: "Доставлен",
      createdAt: "2026-03-09T16:15:00Z",
      items: ["Лампа DeskLight LED", "Кабель Type-C Pro 2м"]
    },
    {
      id: "ORD-110",
      orderNumber: "№ 510",
      clientName: "Татьяна Козлова",
      note: "Доставка в пункт выдачи",
      total: 9490,
      paymentMethod: "СБП",
      status: "Новый",
      createdAt: "2026-03-10T11:00:00Z",
      items: ["Планшет Grafix 10"]
    },
    {
      id: "ORD-111",
      orderNumber: "№ 511",
      clientName: "Артем Лебедев",
      note: "Без звонка курьера",
      total: 3490,
      paymentMethod: "Карта",
      status: "В пути",
      createdAt: "2026-03-11T14:50:00Z",
      items: ["Хаб MultiPort 7-in-1"]
    },
    {
      id: "ORD-112",
      orderNumber: "№ 512",
      clientName: "Наталья Егорова",
      note: "Оплата онлайн",
      total: 2190,
      paymentMethod: "Карта",
      status: "Доставлен",
      createdAt: "2026-03-12T10:20:00Z",
      items: ["Подставка AluStand"]
    },
    {
      id: "ORD-113",
      orderNumber: "№ 513",
      clientName: "Виктор Ильин",
      note: "Проверить комплектацию",
      total: 13480,
      paymentMethod: "СБП",
      status: "Обработка",
      createdAt: "2026-03-13T12:35:00Z",
      items: ["Клавиатура KeyMaster Pro", "Мышь AeroTrack Ultra"]
    },
    {
      id: "ORD-114",
      orderNumber: "№ 514",
      clientName: "Светлана Белова",
      note: "Вручить лично",
      total: 12990,
      paymentMethod: "Карта",
      status: "В пути",
      createdAt: "2026-03-14T15:10:00Z",
      items: ["Наушники SoundPro Max"]
    },
    {
      id: "ORD-115",
      orderNumber: "№ 515",
      clientName: "Григорий Макаров",
      note: "Заказ оформлен по акции",
      total: 19680,
      paymentMethod: "Карта",
      status: "Новый",
      createdAt: "2026-03-15T09:40:00Z",
      items: ["Смарт-часы Chrono 5", "Подставка AluStand"]
    }
  ],

  // Сущность 3: Возвраты (15 записей)
  returns: [
    {
      id: "RET-201",
      claimNumber: "RMA-01",
      productName: "Наушники SoundPro Max",
      reason: "Не подошел размер амбушюр",
      refundAmount: 12990,
      condition: "Новый",
      status: "Одобрен",
      createdAt: "2026-03-05T10:00:00Z",
      details: { inspector: "Романов М.", restock: true }
    },
    {
      id: "RET-202",
      claimNumber: "RMA-02",
      productName: "Клавиатура KeyMaster Pro",
      reason: "Залипает клавиша пробела",
      refundAmount: 7990,
      condition: "Брак",
      status: "На проверке",
      createdAt: "2026-03-06T11:20:00Z",
      details: { inspector: "Ильина Д.", restock: false }
    },
    {
      id: "RET-203",
      claimNumber: "RMA-03",
      productName: "Смарт-часы Chrono 5",
      reason: "Ошибочный заказ цвета",
      refundAmount: 17490,
      condition: "Новый",
      status: "Выплачен",
      createdAt: "2026-03-07T14:40:00Z",
      details: { inspector: "Романов М.", restock: true }
    },
    {
      id: "RET-204",
      claimNumber: "RMA-04",
      productName: "Накопитель SSD FastDrive",
      reason: "Механический скол корпуса",
      refundAmount: 8990,
      condition: "Поврежден",
      status: "Отклонен",
      createdAt: "2026-03-08T09:10:00Z",
      details: { inspector: "Борисов А.", restock: false }
    },
    {
      id: "RET-205",
      claimNumber: "RMA-05",
      productName: "Пауэрбанк VoltMax 20000",
      reason: "Не выдает заявленную мощность",
      refundAmount: 3990,
      condition: "Брак",
      status: "Одобрен",
      createdAt: "2026-03-09T16:00:00Z",
      details: { inspector: "Ильина Д.", restock: false }
    },
    {
      id: "RET-206",
      claimNumber: "RMA-06",
      productName: "Мышь AeroTrack Ultra",
      reason: "Неудобный хват для руки",
      refundAmount: 5490,
      condition: "Новый",
      status: "Выплачен",
      createdAt: "2026-03-10T12:15:00Z",
      details: { inspector: "Романов М.", restock: true }
    },
    {
      id: "RET-207",
      claimNumber: "RMA-07",
      productName: "Монитор Horizon 27 IPS",
      reason: "Битые пиксели на матрице",
      refundAmount: 26990,
      condition: "Брак",
      status: "На проверке",
      createdAt: "2026-03-11T13:30:00Z",
      details: { inspector: "Борисов А.", restock: false }
    },
    {
      id: "RET-208",
      claimNumber: "RMA-08",
      productName: "Рюкзак Urban Tech 20L",
      reason: "Несоответствие оттенка цвета",
      refundAmount: 4290,
      condition: "Новый",
      status: "Выплачен",
      createdAt: "2026-03-12T15:00:00Z",
      details: { inspector: "Романов М.", restock: true }
    },
    {
      id: "RET-209",
      claimNumber: "RMA-09",
      productName: "Микрофон StudioVoice USB",
      reason: "Фоновый шум при записи",
      refundAmount: 6790,
      condition: "Брак",
      status: "Одобрен",
      createdAt: "2026-03-13T10:45:00Z",
      details: { inspector: "Ильина Д.", restock: false }
    },
    {
      id: "RET-210",
      claimNumber: "RMA-10",
      productName: "Лампа DeskLight LED",
      reason: "Мигает светодиодный модуль",
      refundAmount: 2890,
      condition: "Брак",
      status: "Выплачен",
      createdAt: "2026-03-14T11:20:00Z",
      details: { inspector: "Ильина Д.", restock: false }
    },
    {
      id: "RET-211",
      claimNumber: "RMA-11",
      productName: "Планшет Grafix 10",
      reason: "Перо не определяет нажим",
      refundAmount: 9490,
      condition: "Брак",
      status: "На проверке",
      createdAt: "2026-03-15T09:00:00Z",
      details: { inspector: "Борисов А.", restock: false }
    },
    {
      id: "RET-212",
      claimNumber: "RMA-12",
      productName: "Кресло ErgoComfort X",
      reason: "Повреждение сетки спинки",
      refundAmount: 21990,
      condition: "Поврежден",
      status: "Отклонен",
      createdAt: "2026-03-16T14:10:00Z",
      details: { inspector: "Борисов А.", restock: false }
    },
    {
      id: "RET-213",
      claimNumber: "RMA-13",
      productName: "Кабель Type-C Pro 2м",
      reason: "Ошибочный тип разъема",
      refundAmount: 990,
      condition: "Новый",
      status: "Выплачен",
      createdAt: "2026-03-17T16:25:00Z",
      details: { inspector: "Романов М.", restock: true }
    },
    {
      id: "RET-214",
      claimNumber: "RMA-14",
      productName: "Хаб MultiPort 7-in-1",
      reason: "Не работает порт HDMI",
      refundAmount: 3490,
      condition: "Брак",
      status: "Одобрен",
      createdAt: "2026-03-18T10:05:00Z",
      details: { inspector: "Ильина Д.", restock: false }
    },
    {
      id: "RET-215",
      claimNumber: "RMA-15",
      productName: "Подставка AluStand",
      reason: "Не подошел угол наклона",
      refundAmount: 2190,
      condition: "Новый",
      status: "На проверке",
      createdAt: "2026-03-19T13:40:00Z",
      details: { inspector: "Романов М.", restock: true }
    }
  ]
};



// Форматирование числа в денежный вид
function formatCurrency(amount) {
  return `${amount.toLocaleString("ru-RU")} ₽`;
}

// Форматирование даты
function formatDateDisplay(isoString) {
  const d = new Date(isoString);
  return d.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });
}

// Получение CSS-класса для статуса
function getStatusBadgeClass(status) {
  switch (status) {
    case "Доставлен":
    case "В наличии":
    case "Выплачен":
    case "Одобрен":
      return "status-badge status-badge--success";
    case "В пути":
    case "Мало":
    case "На проверке":
    case "Обработка":
      return "status-badge status-badge--warning";
    case "Отменен":
    case "Нет на складе":
    case "Отклонен":
      return "status-badge status-badge--danger";
    default:
      return "status-badge status-badge--info";
  }
}



// 3.1. Рендер строки таблицы заказов
function createOrderRow(order) {
  const tr = document.createElement("tr");

  // Ячейка: Номер заказа
  const tdId = document.createElement("td");
  const strongId = document.createElement("strong");
  strongId.textContent = order.orderNumber;
  tdId.append(strongId);

  // Ячейка: Дата
  const tdDate = document.createElement("td");
  const timeEl = document.createElement("time");
  timeEl.setAttribute("datetime", order.createdAt);
  timeEl.textContent = formatDateDisplay(order.createdAt);
  tdDate.append(timeEl);

  // Ячейка: Покупатель
  const tdClient = document.createElement("td");
  tdClient.textContent = order.clientName;

  // Ячейка: Состав заказа
  const tdItems = document.createElement("td");
  tdItems.textContent = order.items.join(", ");

  // Ячейка: Сумма
  const tdTotal = document.createElement("td");
  tdTotal.textContent = formatCurrency(order.total);

  // Ячейка: Статус
  const tdStatus = document.createElement("td");
  const badge = document.createElement("span");
  badge.className = getStatusBadgeClass(order.status);
  badge.textContent = order.status;
  tdStatus.append(badge);

  tr.append(tdId, tdDate, tdClient, tdItems, tdTotal, tdStatus);
  return tr;
}

// 3.2. Рендер карточки товара
function createProductCard(product) {
  const li = document.createElement("li");
  const article = document.createElement("article");
  article.className = "product-card";

  // Заголовок товара
  const h3 = document.createElement("h3");
  h3.className = "product-card-title";
  h3.textContent = product.title;

  // Описание
  const pDesc = document.createElement("p");
  pDesc.className = "product-card-desc";
  pDesc.textContent = product.description;

  // Метаданные (категория, цвет, дата поступления)
  const pMeta = document.createElement("p");
  pMeta.className = "product-card-meta";
  pMeta.textContent = `${product.category} • Цвет: ${product.specs.color} • `;

  const timeEl = document.createElement("time");
  timeEl.setAttribute("datetime", product.createdAt);
  timeEl.textContent = formatDateDisplay(product.createdAt);
  pMeta.append(timeEl);

  // Статус наличия
  const pStatus = document.createElement("p");
  const badge = document.createElement("span");
  badge.className = getStatusBadgeClass(product.status);
  badge.textContent = `${product.status} (${product.stock} шт.)`;
  pStatus.append(badge);

  // Цена
  const pPrice = document.createElement("p");
  pPrice.className = "product-card-price";
  pPrice.textContent = formatCurrency(product.price);

  article.append(h3, pDesc, pMeta, pStatus, pPrice);
  li.append(article);
  return li;
}

// 3.3. Рендер карточки возврата
function createReturnItem(item) {
  const li = document.createElement("li");
  const article = document.createElement("article");
  article.className = "return-item";

  // Номер заявки и название товара
  const h3 = document.createElement("h3");
  h3.className = "return-item-title";
  h3.textContent = `${item.claimNumber}: ${item.productName}`;

  // Причина возврата
  const pReason = document.createElement("p");
  pReason.className = "return-item-desc";
  pReason.textContent = `Причина: ${item.reason}`;

  // Дата создания
  const pDate = document.createElement("p");
  pDate.className = "product-card-meta";
  pDate.textContent = "Дата заявки: ";
  const timeEl = document.createElement("time");
  timeEl.setAttribute("datetime", item.createdAt);
  timeEl.textContent = formatDateDisplay(item.createdAt);
  pDate.append(timeEl);

  // Сумма к возврату
  const pAmount = document.createElement("p");
  pAmount.className = "product-card-meta";
  pAmount.textContent = `Сумма: ${formatCurrency(item.refundAmount)}`;

  // Статус
  const pStatus = document.createElement("p");
  const badge = document.createElement("span");
  badge.className = getStatusBadgeClass(item.status);
  badge.textContent = item.status;
  pStatus.append(badge);

  article.append(h3, pReason, pDate, pAmount, pStatus);
  li.append(article);
  return li;
}


function initDashboard() {
  // Рендер таблицы заказов
  const ordersTableBody = document.getElementById("orders-table-body");
  if (ordersTableBody) {
    ecomDatabase.orders.forEach((order) => {
      const orderRow = createOrderRow(order);
      ordersTableBody.append(orderRow);
    });
  }

  // Рендер каталога товаров
  const productsList = document.getElementById("products-list");
  if (productsList) {
    ecomDatabase.products.forEach((product) => {
      const productCard = createProductCard(product);
      productsList.append(productCard);
    });
  }

  // Рендер списка возвратов
  const returnsList = document.getElementById("returns-list");
  if (returnsList) {
    ecomDatabase.returns.forEach((returnItem) => {
      const returnElement = createReturnItem(returnItem);
      returnsList.append(returnElement);
    });
  }
}

// Запуск после загрузки документа
document.addEventListener("DOMContentLoaded", initDashboard);