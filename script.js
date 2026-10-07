
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

const keepers = {
  "Аудио": "Ильина Д.",
  "Гаджеты": "Романов М.",
  "Периферия": "Борисов А.",
  "Аксессуары": "Ильина Д.",
  "Мониторы": "Борисов А.",
  "Память": "Романов М.",
  "Мебель": "Борисов А.",
  "Освещение": "Ильина Д."
};

function formatCurrency(amount) {
  return amount.toLocaleString("ru-RU") + " ₽";
}

function formatDateDisplay(isoString) {
  const d = new Date(isoString);
  return d.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });
}

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

function getPriority(order) {
  if (order.status === "Отменен") return { text: "Низкий", cls: "priority priority--low" };
  if (order.note.toLowerCase().indexOf("сроч") !== -1 || order.total >= 20000) {
    return { text: "Высокий", cls: "priority priority--high" };
  }
  if (order.status === "Новый" || order.status === "Обработка") {
    return { text: "Средний", cls: "priority priority--mid" };
  }
  return { text: "Низкий", cls: "priority priority--low" };
}

function makeBadge(status) {
  const badge = document.createElement("span");
  badge.className = getStatusBadgeClass(status);
  badge.textContent = status;
  return badge;
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

let orderSort = { key: "createdAt", dir: "desc" };
let lastFocus = null;

function filteredOrders() {
  const q = document.getElementById("order-search").value.trim().toLowerCase();
  const status = document.getElementById("order-status").value;
  const pays = Array.from(document.querySelectorAll('input[name="pay"]:checked')).map(function (box) {
    return box.value;
  });

  const list = ecomDatabase.orders.filter(function (order) {
    const hay = (order.orderNumber + " " + order.clientName + " " + order.items.join(" ")).toLowerCase();
    if (q && hay.indexOf(q) === -1) return false;
    if (status && order.status !== status) return false;
    if (pays.indexOf(order.paymentMethod) === -1) return false;
    return true;
  });

  list.sort(function (a, b) {
    let av = a[orderSort.key];
    let bv = b[orderSort.key];
    if (orderSort.key === "createdAt") {
      av = new Date(av).getTime();
      bv = new Date(bv).getTime();
    }
    if (typeof av === "string") {
      av = av.toLowerCase();
      bv = String(bv).toLowerCase();
    }
    if (av < bv) return orderSort.dir === "asc" ? -1 : 1;
    if (av > bv) return orderSort.dir === "asc" ? 1 : -1;
    return 0;
  });

  return list;
}

function fillCell(td, label, node) {
  td.setAttribute("data-label", label);
  td.append(node);
  return td;
}

function createOrderRow(order) {
  const tr = document.createElement("tr");
  tr.tabIndex = 0;
  const priority = getPriority(order);

  const tdId = document.createElement("td");
  const idWrap = el("div");
  idWrap.append(el("strong", "", order.orderNumber));
  idWrap.append(el("span", "cell-sub", order.id));
  fillCell(tdId, "Номер", idWrap);

  const tdDate = document.createElement("td");
  const timeEl = document.createElement("time");
  timeEl.setAttribute("datetime", order.createdAt);
  timeEl.textContent = formatDateDisplay(order.createdAt);
  fillCell(tdDate, "Дата", timeEl);

  const tdClient = document.createElement("td");
  const clientWrap = el("div");
  clientWrap.append(document.createTextNode(order.clientName));
  const pr = el("span", priority.cls, priority.text);
  const sub = el("span", "cell-sub");
  sub.append(pr);
  clientWrap.append(sub);
  fillCell(tdClient, "Покупатель", clientWrap);

  const tdItems = document.createElement("td");
  tdItems.textContent = order.items.join(", ");
  tdItems.setAttribute("data-label", "Состав заказа");

  const tdTotal = document.createElement("td");
  const sumWrap = el("div");
  sumWrap.append(document.createTextNode(formatCurrency(order.total)));
  sumWrap.append(el("span", "cell-sub", order.paymentMethod));
  fillCell(tdTotal, "Сумма", sumWrap);

  const tdStatus = document.createElement("td");
  fillCell(tdStatus, "Статус", makeBadge(order.status));

  tr.append(tdId, tdDate, tdClient, tdItems, tdTotal, tdStatus);
  tr.addEventListener("click", function () { openOrderModal(order); });
  tr.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openOrderModal(order);
    }
  });
  return tr;
}

function createOrderCard(order) {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "order-card";
  const priority = getPriority(order);

  const head = el("div", "card-head");
  head.append(el("span", "card-id", order.id + " · " + order.orderNumber));
  head.append(makeBadge(order.status));

  const title = el("h3", "order-card-title", order.clientName);
  const desc = el("p", "product-card-desc", order.items.join(", "));
  const meta = el("p", "card-meta");
  const timeEl = document.createElement("time");
  timeEl.setAttribute("datetime", order.createdAt);
  timeEl.textContent = formatDateDisplay(order.createdAt);
  meta.append(timeEl, document.createTextNode(" · " + order.paymentMethod));

  const tags = el("div", "tag-row");
  tags.append(el("span", "tag", "Ответственный: склад"));
  const pr = el("span", priority.cls, "Приоритет: " + priority.text);
  const price = el("p", "product-card-price", formatCurrency(order.total));

  btn.append(head, title, desc, meta, tags, pr, price);
  btn.addEventListener("click", function () { openOrderModal(order); });
  li.append(btn);
  return li;
}

function createProductCard(product) {
  const li = document.createElement("li");
  const article = document.createElement("button");
  article.type = "button";
  article.className = "product-card";

  const head = el("div", "card-head");
  head.append(el("span", "card-id", product.id));
  head.append(makeBadge(product.status));

  const h3 = el("h3", "product-card-title", product.title);
  const pDesc = el("p", "product-card-desc", product.description);

  const pMeta = el("p", "product-card-meta", "Склад: " + (keepers[product.category] || "смена") + " · ");
  const timeEl = document.createElement("time");
  timeEl.setAttribute("datetime", product.createdAt);
  timeEl.textContent = formatDateDisplay(product.createdAt);
  pMeta.append(timeEl);

  const tags = el("div", "tag-row");
  tags.append(el("span", "tag", product.category));
  tags.append(el("span", "tag", product.specs.color));
  tags.append(el("span", "tag", product.sku));

  const stockLine = el("p", "card-meta", "Остаток: " + product.stock + " шт.");
  const pPrice = el("p", "product-card-price", formatCurrency(product.price));

  article.append(head, h3, pDesc, pMeta, tags, stockLine, pPrice);
  article.addEventListener("click", function () { openProductModal(product); });
  li.append(article);
  return li;
}

function createReturnItem(item) {
  const li = document.createElement("li");
  const article = document.createElement("button");
  article.type = "button";
  article.className = "return-item";

  const head = el("div", "card-head");
  head.append(el("span", "card-id", item.id));
  head.append(makeBadge(item.status));

  const h3 = el("h3", "return-item-title", item.claimNumber + ": " + item.productName);
  const pReason = el("p", "return-item-desc", item.reason);

  const pDate = el("p", "card-meta", "Дата: ");
  const timeEl = document.createElement("time");
  timeEl.setAttribute("datetime", item.createdAt);
  timeEl.textContent = formatDateDisplay(item.createdAt);
  pDate.append(timeEl);

  const tags = el("div", "tag-row");
  tags.append(el("span", "tag", item.condition));
  tags.append(el("span", "tag", item.details.inspector));

  const pAmount = el("p", "product-card-price", formatCurrency(item.refundAmount));

  article.append(head, h3, pReason, pDate, tags, pAmount);
  article.addEventListener("click", function () { openReturnModal(item); });
  li.append(article);
  return li;
}

function renderOrders() {
  const list = filteredOrders();
  const body = document.getElementById("orders-table-body");
  const cards = document.getElementById("orders-cards");
  const empty = document.getElementById("orders-empty");
  const view = document.querySelector('input[name="view"]:checked').value;
  const tableWrap = document.getElementById("orders-table-wrap");

  body.replaceChildren();
  cards.replaceChildren();

  list.forEach(function (order) {
    body.append(createOrderRow(order));
    cards.append(createOrderCard(order));
  });

  const isCards = view === "cards";
  tableWrap.hidden = isCards;
  cards.hidden = !isCards;
  empty.hidden = list.length !== 0;

  document.getElementById("order-count").textContent = "Показано: " + list.length + " из " + ecomDatabase.orders.length;

  document.querySelectorAll(".sort-btn").forEach(function (btn) {
    const th = btn.closest("th");
    if (btn.dataset.sort === orderSort.key) {
      th.setAttribute("aria-sort", orderSort.dir === "asc" ? "ascending" : "descending");
    } else {
      th.setAttribute("aria-sort", "none");
    }
  });
}

function renderProducts() {
  const list = document.getElementById("products-list");
  list.replaceChildren();
  ecomDatabase.products.forEach(function (product) {
    list.append(createProductCard(product));
  });
}

function renderReturns() {
  const list = document.getElementById("returns-list");
  list.replaceChildren();
  ecomDatabase.returns.forEach(function (item) {
    list.append(createReturnItem(item));
  });
}

function renderStats() {
  const revenue = ecomDatabase.orders.reduce(function (sum, order) {
    return order.status === "Отменен" ? sum : sum + order.total;
  }, 0);
  const openReturns = ecomDatabase.returns.filter(function (item) {
    return item.status === "На проверке" || item.status === "Одобрен";
  }).length;

  document.getElementById("stat-orders").textContent = String(ecomDatabase.orders.length);
  document.getElementById("stat-revenue").textContent = formatCurrency(revenue);
  document.getElementById("stat-products").textContent = String(ecomDatabase.products.length);
  document.getElementById("stat-returns").textContent = String(openReturns);
}

function modalRows(pairs) {
  const dl = document.createElement("dl");
  pairs.forEach(function (pair) {
    const row = el("div", "modal-row");
    row.append(el("dt", "", pair[0]));
    const dd = document.createElement("dd");
    if (pair[1] instanceof Node) dd.append(pair[1]);
    else dd.textContent = pair[1];
    row.append(dd);
    dl.append(row);
  });
  return dl;
}

function openModal(title, bodyNode) {
  const modal = document.getElementById("detail-modal");
  document.getElementById("modal-title").textContent = title;
  const body = document.getElementById("modal-body");
  body.replaceChildren(bodyNode);
  lastFocus = document.activeElement;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-dialog").focus();
}

function closeModal() {
  const modal = document.getElementById("detail-modal");
  if (modal.hidden) return;
  modal.hidden = true;
  document.body.classList.remove("modal-open");
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}

function focusables(root) {
  return Array.from(root.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))
    .filter(function (node) { return !node.disabled && node.offsetParent !== null; });
}

function openOrderModal(order) {
  const priority = getPriority(order);
  const note = el("p", "product-card-desc", order.note);
  const box = document.createElement("div");
  box.append(
    note,
    modalRows([
      ["Номер", order.orderNumber + " (" + order.id + ")"],
      ["Покупатель", order.clientName],
      ["Дата", formatDateDisplay(order.createdAt)],
      ["Оплата", order.paymentMethod],
      ["Сумма", formatCurrency(order.total)],
      ["Состав", order.items.join(", ")],
      ["Приоритет", priority.text],
      ["Статус", makeBadge(order.status)]
    ])
  );
  openModal("Заказ " + order.orderNumber, box);
}

function openProductModal(product) {
  const box = document.createElement("div");
  box.append(
    el("p", "product-card-desc", product.description),
    modalRows([
      ["Код", product.id + " / " + product.sku],
      ["Категория", product.category],
      ["Цена", formatCurrency(product.price)],
      ["Остаток", product.stock + " шт."],
      ["Цвет", product.specs.color],
      ["Вес", product.specs.weightGrams + " г"],
      ["Поступление", formatDateDisplay(product.createdAt)],
      ["Ответственный", keepers[product.category] || "склад"],
      ["Статус", makeBadge(product.status)]
    ])
  );
  openModal(product.title, box);
}

function openReturnModal(item) {
  const box = document.createElement("div");
  box.append(
    el("p", "product-card-desc", item.reason),
    modalRows([
      ["Заявка", item.claimNumber + " (" + item.id + ")"],
      ["Товар", item.productName],
      ["Состояние", item.condition],
      ["Сумма", formatCurrency(item.refundAmount)],
      ["Дата", formatDateDisplay(item.createdAt)],
      ["Проверил", item.details.inspector],
      ["На склад", item.details.restock ? "вернуть" : "не возвращать"],
      ["Статус", makeBadge(item.status)]
    ])
  );
  openModal("Возврат " + item.claimNumber, box);
}

function initDashboard() {
  renderStats();
  renderOrders();
  renderProducts();
  renderReturns();

  const form = document.getElementById("order-filters");
  form.addEventListener("input", renderOrders);
  form.addEventListener("change", renderOrders);
  form.addEventListener("reset", function () {
    setTimeout(renderOrders, 0);
  });

  document.querySelectorAll(".sort-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const key = btn.dataset.sort;
      if (orderSort.key === key) {
        orderSort.dir = orderSort.dir === "asc" ? "desc" : "asc";
      } else {
        orderSort.key = key;
        orderSort.dir = "asc";
      }
      renderOrders();
    });
  });

  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("detail-modal").addEventListener("click", function (event) {
    if (event.target.dataset.close === "true") closeModal();
  });

  document.addEventListener("keydown", function (event) {
    const modal = document.getElementById("detail-modal");
    if (modal.hidden) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeModal();
      return;
    }
    if (event.key !== "Tab") return;
    const dialog = modal.querySelector(".modal-dialog");
    const nodes = focusables(dialog);
    if (!nodes.length) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

document.addEventListener("DOMContentLoaded", initDashboard);
