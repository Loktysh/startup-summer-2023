const myHeaders = new Headers();
myHeaders.append("x-secret-key", "GEU4nvd3rej*jeh.eqp");
myHeaders.append("Authorization", "Bearer v3.r.137440105.f6cef434853f594de645dcdd992103ccdce56db2.9f8b4c26f90e16d9ba990d3c74da267ceed9f687");

const options = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
const obj = [
  {
      "title_rus": "IT, Интернет, связь, телеком",
      "url_rus": "it-internet-svyaz-telekom",
      "title": "IT, Интернет, связь, телеком",
      "title_trimmed": "IT, Интернет, связь,...",
      "key": 33,
      "positions": [
          {
              "title_rus": "CRM-системы",
              "url_rus": "crm-sistemy",
              "title": "CRM-системы",
              "id_parent": 33,
              "key": 603
          },
          {
              "title_rus": "Data Science",
              "url_rus": "data-science",
              "title": "Data Science",
              "id_parent": 33,
              "key": 627
          },
          {
              "title_rus": "DevOps",
              "url_rus": "devops",
              "title": "DevOps",
              "id_parent": 33,
              "key": 628
          },
          {
              "title_rus": "SRE",
              "url_rus": "sre",
              "title": "SRE",
              "id_parent": 33,
              "key": 629
          },
          {
              "title_rus": "Web-верстка",
              "url_rus": "web-verstka",
              "title": "Web-верстка",
              "id_parent": 33,
              "key": 36
          },
          {
              "title_rus": "Администрирование баз данных",
              "url_rus": "administrirovanie-baz-dannyh",
              "title": "Администрирование баз данных",
              "id_parent": 33,
              "key": 37
          },
          {
              "title_rus": "Аналитика",
              "url_rus": "analitika",
              "title": "Аналитика",
              "id_parent": 33,
              "key": 38
          },
          {
              "title_rus": "Внедрение и сопровождение ПО",
              "url_rus": "vnedrenie-po",
              "title": "Внедрение и сопровождение ПО",
              "id_parent": 33,
              "key": 503
          },
          {
              "title_rus": "Игровое ПО / Геймдев",
              "url_rus": "igrovoe-po",
              "title": "Игровое ПО / Геймдев",
              "id_parent": 33,
              "key": 40
          },
          {
              "title_rus": "Инжиниринг",
              "url_rus": "inzhiniring",
              "title": "Инжиниринг",
              "id_parent": 33,
              "key": 41
          },
          {
              "title_rus": "Интернет, создание и поддержка сайтов",
              "url_rus": "internet-sozdanie-i-podderzhka-sajtov",
              "title": "Интернет, создание и поддержка сайтов",
              "id_parent": 33,
              "key": 42
          },
          {
              "title_rus": "Информационная безопасность",
              "url_rus": "informacionnaya-bezopasnost",
              "title": "Информационная безопасность",
              "id_parent": 33,
              "key": 546
          },
          {
              "title_rus": "Киберспорт",
              "url_rus": "cybersport",
              "title": "Киберспорт",
              "id_parent": 33,
              "key": 620
          },
          {
              "title_rus": "Компьютерная анимация и мультимедиа",
              "url_rus": "kompyuternaya-animaciya-i-multimedia",
              "title": "Компьютерная анимация и мультимедиа",
              "id_parent": 33,
              "key": 43
          },
          {
              "title_rus": "Контент",
              "url_rus": "kontent",
              "title": "Контент",
              "id_parent": 33,
              "key": 44
          },
          {
              "title_rus": "Мобильная разработка",
              "url_rus": "mobilnaya-razrabotka",
              "title": "Мобильная разработка",
              "id_parent": 33,
              "key": 604
          },
          {
              "title_rus": "Нейросети / Искусственный интеллект",
              "url_rus": "nejroseti-i-iskusstvennyj-intellekt",
              "title": "Нейросети / Искусственный интеллект",
              "id_parent": 33,
              "key": 650
          },
          {
              "title_rus": "Оптимизация, SEO",
              "url_rus": "optimizaciya-seo",
              "title": "Оптимизация, SEO",
              "id_parent": 33,
              "key": 45
          },
          {
              "title_rus": "Передача данных и доступ в интернет",
              "url_rus": "peredacha-dannyh-i-dostup-v-internet",
              "title": "Передача данных и доступ в интернет",
              "id_parent": 33,
              "key": 46
          },
          {
              "title_rus": "Разработка и сопровождение банковского ПО",
              "url_rus": "razrabotka-i-soprovozhdenie-bankovskogo-po",
              "title": "Разработка и сопровождение банковского ПО",
              "id_parent": 33,
              "key": 47
          },
          {
              "title_rus": "Разработка, программирование",
              "url_rus": "razrabotka-po",
              "title": "Разработка, программирование",
              "id_parent": 33,
              "key": 48
          },
          {
              "title_rus": "Сетевые технологии",
              "url_rus": "setevye-tehnologii",
              "title": "Сетевые технологии",
              "id_parent": 33,
              "key": 49
          },
          {
              "title_rus": "Системная интеграция",
              "url_rus": "sistemnaya-integraciya",
              "title": "Системная интеграция",
              "id_parent": 33,
              "key": 50
          },
          {
              "title_rus": "Системное администрирование",
              "url_rus": "sistemnoe-administrirovanie",
              "title": "Системное администрирование",
              "id_parent": 33,
              "key": 51
          },
          {
              "title_rus": "Системы автоматизированного проектирования (САПР)",
              "url_rus": "sistemy-avtomatizirovannogo-proektirovaniya-sapr",
              "title": "Системы автоматизированного проектирования (САПР)",
              "id_parent": 33,
              "key": 52
          },
          {
              "title_rus": "Системы управления предприятием (ERP)",
              "url_rus": "sistemy-upravleniya-predpriyatiem-erp",
              "title": "Системы управления предприятием (ERP)",
              "id_parent": 33,
              "key": 53
          },
          {
              "title_rus": "Сотовые, беспроводные технологии",
              "url_rus": "sotovye-besprovodnye-tehnologii",
              "title": "Сотовые, беспроводные технологии",
              "id_parent": 33,
              "key": 54
          },
          {
              "title_rus": "Телекоммуникации и связь",
              "url_rus": "telekommunikacii-i-svyaz",
              "title": "Телекоммуникации и связь",
              "id_parent": 33,
              "key": 55
          },
          {
              "title_rus": "Тестирование, QA",
              "url_rus": "testirovanie",
              "title": "Тестирование, QA",
              "id_parent": 33,
              "key": 56
          },
          {
              "title_rus": "Техническая документация",
              "url_rus": "tehnicheskaja-dokumentacija",
              "title": "Техническая документация",
              "id_parent": 33,
              "key": 614
          },
          {
              "title_rus": "Техническая поддержка",
              "url_rus": "tehnicheskaya-podderzhka",
              "title": "Техническая поддержка",
              "id_parent": 33,
              "key": 57
          },
          {
              "title_rus": "Управление продуктом",
              "url_rus": "upravlenie-produktom",
              "title": "Управление продуктом",
              "id_parent": 33,
              "key": 613
          },
          {
              "title_rus": "Управление проектами",
              "url_rus": "upravlenie-proektami",
              "title": "Управление проектами",
              "id_parent": 33,
              "key": 605
          },
          {
              "title_rus": "Управление разработкой",
              "url_rus": "upravlenie-razrabotkoj",
              "title": "Управление разработкой",
              "id_parent": 33,
              "key": 630
          },
          {
              "title_rus": "Юзабилити",
              "url_rus": "yuzabiliti",
              "title": "Юзабилити",
              "id_parent": 33,
              "key": 59
          },
          {
              "title_rus": "Другое",
              "url_rus": "drugoe",
              "title": "Другое",
              "id_parent": 33,
              "key": 60
          },
          {
              "title_rus": "Начало карьеры, мало опыта",
              "url_rus": "nachalo-karery-malo-opyta",
              "title": "Начало карьеры, мало опыта",
              "id_parent": 33,
              "key": 61
          }
      ]
  },
  {
      "title_rus": "Административная работа, секретариат, АХО",
      "url_rus": "administrativnaya-rabota-sekretariat-aho",
      "title": "Административная работа, секретариат, АХО",
      "title_trimmed": "Административная работа,...",
      "key": 1,
      "positions": [
          {
              "title_rus": "Архивное дело",
              "url_rus": "arhiv",
              "title": "Архивное дело",
              "id_parent": 1,
              "key": 3
          },
          {
              "title_rus": "АХО",
              "url_rus": "aho",
              "title": "АХО",
              "id_parent": 1,
              "key": 2
          },
          {
              "title_rus": "Ввод данных, систематизация",
              "url_rus": "vvod-dannyh",
              "title": "Ввод данных, систематизация",
              "id_parent": 1,
              "key": 631
          },
          {
              "title_rus": "Делопроизводство",
              "url_rus": "deloproizvodstvo",
              "title": "Делопроизводство",
              "id_parent": 1,
              "key": 4
          },
          {
              "title_rus": "Диспетчерская служба",
              "url_rus": "dispetcherskaya-sluzhba",
              "title": "Диспетчерская служба",
              "id_parent": 1,
              "key": 5
          },
          {
              "title_rus": "Переводы",
              "url_rus": "perevody",
              "title": "Переводы",
              "id_parent": 1,
              "key": 7
          },
          {
              "title_rus": "Секретариат, ресепшн, офис-менеджмент",
              "url_rus": "sekretariat-resepshn-ofis-menedzhment",
              "title": "Секретариат, ресепшн, офис-менеджмент",
              "id_parent": 1,
              "key": 8
          },
          {
              "title_rus": "Другое",
              "url_rus": "drugoe",
              "title": "Другое",
              "id_parent": 1,
              "key": 9
          },
          {
              "title_rus": "Начало карьеры, мало опыта",
              "url_rus": "nachalo-karery-malo-opyta",
              "title": "Начало карьеры, мало опыта",
              "id_parent": 1,
              "key": 10
          }
      ]
  },
  {
      "title_rus": "Банки, инвестиции, лизинг",
      "url_rus": "banki-investicii-lizing",
      "title": "Банки, инвестиции, лизинг",
      "title_trimmed": "Банки, инвестиции, лизинг",
      "key": 381,
      "positions": [
          {
              "title_rus": "Банковская бухгалтерия",
              "url_rus": "bankovskaya-buhgalteriya",
              "title": "Банковская бухгалтерия",
              "id_parent": 381,
              "key": 382
          },
          {
              "title_rus": "Бэк-Офис",
              "url_rus": "bek-ofis",
              "title": "Бэк-Офис",
              "id_parent": 381,
              "key": 383
          },
          {
              "title_rus": "Бюджетирование и планирование",
              "url_rus": "byudzhetirovanie-i-planirovanie",
              "title": "Бюджетирование и планирование",
              "id_parent": 381,
              "key": 384
          },
          {
              "title_rus": "Валютные операции",
              "url_rus": "valyutnye-operacii",
              "title": "Валютные операции",
              "id_parent": 381,
              "key": 385
          },
          {
              "title_rus": "Вклады",
              "url_rus": "vklady",
              "title": "Вклады",
              "id_parent": 381,
              "key": 386
          },
          {
              "title_rus": "Депозитарий",
              "url_rus": "depozitarij",
              "title": "Депозитарий",
              "id_parent": 381,
              "key": 387
          },
          {
              "title_rus": "Документарные операции",
              "url_rus": "dokumentarnye-operacii",
              "title": "Документарные операции",
              "id_parent": 381,
              "key": 388
          },
          {
              "title_rus": "Залоги и проблемная задолженность",
              "url_rus": "zalogi-i-problemnaya-zadolzhennost",
              "title": "Залоги и проблемная задолженность",
              "id_parent": 381,
              "key": 389
          },
          {
              "title_rus": "Ипотека",
              "url_rus": "ipoteka",
              "title": "Ипотека",
              "id_parent": 381,
              "key": 390
          },
          {
              "title_rus": "Кредитование физических лиц",
              "url_rus": "kreditovanie-fizicheskih-lic",
              "title": "Кредитование физических лиц",
              "id_parent": 381,
              "key": 391
          },
          {
              "title_rus": "Кредитование юридических лиц",
              "url_rus": "kreditovanie-yuridicheskih-lic",
              "title": "Кредитование юридических лиц",
              "id_parent": 381,
              "key": 392
          },
          {
              "title_rus": "Лизинг",
              "url_rus": "lizing",
              "title": "Лизинг",
              "id_parent": 381,
              "key": 393
          },
          {
              "title_rus": "Методология, разработка и продажа корпоративных продуктов",
              "url_rus": "metodologiya-razrabotka-i-prodazha-korporativnyh-produktov",
              "title": "Методология, разработка и продажа корпоративных продуктов",
              "id_parent": 381,
              "key": 412
          },
          {
              "title_rus": "Методология, разработка и продажа продуктов Private Banking",
              "url_rus": "metodologiya-razrabotka-i-prodazha-produktov-private-banking",
              "title": "Методология, разработка и продажа продуктов Private Banking",
              "id_parent": 381,
              "key": 413
          },
          {
              "title_rus": "Методология, разработка и продажа розничных продуктов",
              "url_rus": "metodologiya-razrabotka-i-prodazha-roznichnyh-produktov",
              "title": "Методология, разработка и продажа розничных продуктов",
              "id_parent": 381,
              "key": 411
          },
          {
              "title_rus": "Налоговый учёт",
              "url_rus": "nalogovyj-uchjot",
              "title": "Налоговый учёт",
              "id_parent": 381,
              "key": 394
          },
          {
              "title_rus": "Обслуживание банкоматов",
              "url_rus": "obsluzhivanie-bankomatov",
              "title": "Обслуживание банкоматов",
              "id_parent": 381,
              "key": 395
          },
          {
              "title_rus": "Операции с драгметаллами",
              "url_rus": "operacii-s-dragmetallami",
              "title": "Операции с драгметаллами",
              "id_parent": 381,
              "key": 396
          },
          {
              "title_rus": "Пластиковые карты (эквайринг)",
              "url_rus": "plastikovye-karty-ekvajring",
              "title": "Пластиковые карты (эквайринг)",
              "id_parent": 381,
              "key": 397
          },
          {
              "title_rus": "Продажа банковских продуктов",
              "url_rus": "prodazha-bankovskih-produktov",
              "title": "Продажа банковских продуктов",
              "id_parent": 381,
              "key": 398
          },
          {
              "title_rus": "Разработка банковских продуктов",
              "url_rus": "razrabotka-bankovskih-produktov",
              "title": "Разработка банковских продуктов",
              "id_parent": 381,
              "key": 399
          },
          {
              "title_rus": "Расчёты и обработка платежей, касса",
              "url_rus": "raschjoty-i-obrabotka-platezhej-kassa",
              "title": "Расчёты и обработка платежей, касса",
              "id_parent": 381,
              "key": 400
          },
          {
              "title_rus": "Риски",
              "url_rus": "riski",
              "title": "Риски",
              "id_parent": 381,
              "key": 401
          },
          {
              "title_rus": "Торговое финансирование",
              "url_rus": "torgovoe-finansirovanie",
              "title": "Торговое финансирование",
              "id_parent": 381,
              "key": 402
          },
          {
              "title_rus": "Управление активами",
              "url_rus": "upravlenie-aktivami",
              "title": "Управление активами",
              "id_parent": 381,
              "key": 403
          },
          {
              "title_rus": "Управление ликвидностью и балансовыми рисками",
              "url_rus": "upravlenie-likvidnostyu-i-balansovymi-riskami",
              "title": "Управление ликвидностью и балансовыми рисками",
              "id_parent": 381,
              "key": 404
          },
          {
              "title_rus": "Управленческая отчетность",
              "url_rus": "upravlencheskaya-otchetnost",
              "title": "Управленческая отчетность",
              "id_parent": 381,
              "key": 405
          },
          {
              "title_rus": "Финансовая отчётность",
              "url_rus": "finansovaya-otchjotnost",
              "title": "Финансовая отчётность",
              "id_parent": 381,
              "key": 407
          },
          {
              "title_rus": "Финансовый анализ и контроль",
              "url_rus": "finansovyj-analiz-i-kontrol",
              "title": "Финансовый анализ и контроль",
              "id_parent": 381,
              "key": 406
          },
          {
              "title_rus": "Ценные бумаги",
              "url_rus": "cennye-bumagi",
              "title": "Ценные бумаги",
              "id_parent": 381,
              "key": 408
          },
          {
              "title_rus": "Другое",
              "url_rus": "drugoe",
              "title": "Другое",
              "id_parent": 381,
              "key": 409
          },
          {
              "title_rus": "Начало карьеры, мало опыта",
              "url_rus": "nachalo-karery-malo-opyta",
              "title": "Начало карьеры, мало опыта",
              "id_parent": 381,
              "key": 410
          }
      ]
  },
  {
      "title_rus": "Безопасность, службы охраны",
      "url_rus": "bezopasnost-sluzhby-ohrany",
      "title": "Безопасность, службы охраны",
      "title_trimmed": "Безопасность, службы...",
      "key": 182,
      "positions": [
          {
              "title_rus": "Видеонаблюдение",
              "url_rus": "videonablyudenie",
              "title": "Видеонаблюдение",
              "id_parent": 182,
              "key": 183
          },
          {
              "title_rus": "Гражданская оборона и чрезвычайные ситуации",
              "url_rus": "grazhdanskaya-oborona-i-chrezvychajnye-situacii",
              "title": "Гражданская оборона и чрезвычайные ситуации",
              "id_parent": 182,
              "key": 632
          },
          {
              "title_rus": "Имущественная безопасность",
              "url_rus": "imuschestvennaya-bezopasnost",
              "title": "Имущественная безопасность",
              "id_parent": 182,
              "key": 184
          },
          {
              "title_rus": "Инкассация",
              "url_rus": "inkassaciya",
              "title": "Инкассация",
              "id_parent": 182,
              "key": 185
          },
          {
              "title_rus": "Информационная безопасность",
              "url_rus": "informacionnaya-bezopasnost",
              "title": "Информационная безопасность",
              "id_parent": 182,
              "key": 186
          },
          {
              "title_rus": "Кинология",
              "url_rus": "kinologiya",
              "title": "Кинология",
              "id_parent": 182,
              "key": 187
          },
          {
              "title_rus": "Личная безопасность",
              "url_rus": "lichnaya-bezopasnost",
              "title": "Личная безопасность",
              "id_parent": 182,
              "key": 188
          },
          {
              "title_rus": "Охранно-, детективная деятельность",
              "url_rus": "ohranno--detektivnaya-deyatelnost",
              "title": "Охранно-, детективная деятельность",
              "id_parent": 182,
              "key": 189
          },
          {
              "title_rus": "Охранные службы предприятий",
              "url_rus": "ohrannye-sluzhby-predpriyatij",
              "title": "Охранные службы предприятий",
              "id_parent": 182,
              "key": 190
          },
          {
              "title_rus": "Пожарная безопасность",
              "url_rus": "pozharnaya-bezopasnost",
              "title": "Пожарная безопасность",
              "id_parent": 182,
              "key": 191
          },
          {
              "title_rus": "Служба спасения",
              "url_rus": "sluzhba-spaseniya",
              "title": "Служба спасения",
              "id_parent": 182,
              "key": 192
          },
          {
              "title_rus": "ЧОП",
              "url_rus": "chop",
              "title": "ЧОП",
              "id_parent": 182,
              "key": 194
          },
          {
              "title_rus": "Экономическая безопасность",
              "url_rus": "ekonomicheskaya-bezopasnost",
              "title": "Экономическая безопасность",
              "id_parent": 182,
              "key": 193
          },
          {
              "title_rus": "Другое",
              "url_rus": "drugoe",
              "title": "Другое",
              "id_parent": 182,
              "key": 195
          },
          {
              "title_rus": "Начало карьеры, мало опыта",
              "url_rus": "nachalo-karery-malo-opyta",
              "title": "Начало карьеры, мало опыта",
              "id_parent": 182,
              "key": 196
          }
      ]
  },
  {
      "title_rus": "Бухгалтерия, финансы, аудит",
      "url_rus": "buhgalteriya-finansy-audit",
      "title": "Бухгалтерия, финансы, аудит",
      "title_trimmed": "Бухгалтерия, финансы,...",
      "key": 11,
      "positions": [
          {
              "title_rus": "GAAP",
              "url_rus": "gaap",
              "title": "GAAP",
              "id_parent": 11,
              "key": 12
          },
          {
              "title_rus": "Аудит, ревизия, инспектирование",
              "url_rus": "audit-reviziya-inspektirovanie",
              "title": "Аудит, ревизия, инспектирование",
              "id_parent": 11,
              "key": 13
          },
          {
              "title_rus": "Бухгалтерский учет",
              "url_rus": "buhgalterskij-uchet",
              "title": "Бухгалтерский учет",
              "id_parent": 11,
              "key": 14
          },
          {
              "title_rus": "Бюджетирование и планирование",
              "url_rus": "byudzhetirovanie-i-planirovanie",
              "title": "Бюджетирование и планирование",
              "id_parent": 11,
              "key": 15
          },
          {
              "title_rus": "Казначейство",
              "url_rus": "kaznachejstvo",
              "title": "Казначейство",
              "id_parent": 11,
              "key": 16
          },
          {
              "title_rus": "Кассовые операции",
              "url_rus": "kassovye-operacii",
              "title": "Кассовые операции",
              "id_parent": 11,
              "key": 17
          },
          {
              "title_rus": "Кредитный контроль",
              "url_rus": "kreditnyj-kontrol",
              "title": "Кредитный контроль",
              "id_parent": 11,
              "key": 18
          },
          {
              "title_rus": "МСФО, IFRS, РСБУ",
              "url_rus": "msfo-ifrs-rsbu",
              "title": "МСФО, IFRS, РСБУ",
              "id_parent": 11,
              "key": 19
          },
          {
              "title_rus": "Налоги",
              "url_rus": "nalogi",
              "title": "Налоги",
              "id_parent": 11,
              "key": 20
          },
          {
              "title_rus": "Основные средства",
              "url_rus": "osnovnye-sredstva",
              "title": "Основные средства",
              "id_parent": 11,
              "key": 612
          },
          {
              "title_rus": "Первичная документация",
              "url_rus": "pervichnaya-dokumentaciya",
              "title": "Первичная документация",
              "id_parent": 11,
              "key": 21
          },
          {
              "title_rus": "Планово-экономическое управление",
              "url_rus": "planovo-ekonomicheskoe-upravlenie",
              "title": "Планово-экономическое управление",
              "id_parent": 11,
              "key": 22
          },
          {
              "title_rus": "Расчет себестоимости",
              "url_rus": "raschet-sebestoimosti",
              "title": "Расчет себестоимости",
              "id_parent": 11,
              "key": 23
          },
          {
              "title_rus": "Учет заработной платы",
              "url_rus": "uchet-zarabotnoj-platy",
              "title": "Учет заработной платы",
              "id_parent": 11,
              "key": 24
          },
          {
              "title_rus": "Учет счетов и платежей",
              "url_rus": "uchet-schetov-i-platezhej",
              "title": "Учет счетов и платежей",
              "id_parent": 11,
              "key": 25
          },
          {
              "title_rus": "Учет ТМЦ",
              "url_rus": "uchet-tmc",
              "title": "Учет ТМЦ",
              "id_parent": 11,
              "key": 633
          },
          {
              "title_rus": "Учет труда и социальных выплат сотрудникам",
              "url_rus": "uchet-truda-i-socialnyh-vyplat-sotrudnikam",
              "title": "Учет труда и социальных выплат сотрудникам",
              "id_parent": 11,
              "key": 26
          },
          {
              "title_rus": "Учет фондов",
              "url_rus": "uchet-fondov",
              "title": "Учет фондов",
              "id_parent": 11,
              "key": 27
          },
          {
              "title_rus": "Финансовый анализ и контроль",
              "url_rus": "finansovyj-analiz-i-kontrol",
              "title": "Финансовый анализ и контроль",
              "id_parent": 11,
              "key": 28
          },
          {
              "title_rus": "Финансовый менеджмент",
              "url_rus": "finansovyj-menedzhment",
              "title": "Финансовый менеджмент",
              "id_parent": 11,
              "key": 29
          },
          {
              "title_rus": "Экономический анализ",
              "url_rus": "ekonomicheskij-analiz",
              "title": "Экономический анализ",
              "id_parent": 11,
              "key": 30
          },
          {
              "title_rus": "Электронный документооборот",
              "url_rus": "elektronnyj-dokumentooborot",
              "title": "Электронный документооборот",
              "id_parent": 11,
              "key": 39
          },
          {
              "title_rus": "Другое",
              "url_rus": "drugoe",
              "title": "Другое",
              "id_parent": 11,
              "key": 31
          },
          {
              "title_rus": "Начало карьеры, мало опыта",
              "url_rus": "nachalo-karery-malo-opyta",
              "title": "Начало карьеры, мало опыта",
              "id_parent": 11,
              "key": 32
          }
      ]
  },
  {
      "title_rus": "Государственная служба",
      "url_rus": "gosudarstvennaya-sluzhba",
      "title": "Государственная служба",
      "title_trimmed": "Государственная служба",
      "key": 151,
      "positions": [
          {
              "title_rus": "Военная служба, служба по контракту",
              "url_rus": "voennaya-sluzhba-sluzhba-po-kontraktu",
              "title": "Военная служба, служба по контракту",
              "id_parent": 151,
              "key": 152
          },
          {
              "title_rus": "ГИБДД, ДПС",
              "url_rus": "gibdd-dps",
              "title": "ГИБДД, ДПС",
              "id_parent": 151,
              "key": 153
          },
          {
              "title_rus": "Государственная гражданская служба",
              "url_rus": "gosudarstvennaya-grazhdanskaya-sluzhba",
              "title": "Государственная гражданская служба",
              "id_parent": 151,
              "key": 154
          },
          {
              "title_rus": "Государственные архивы, библиотеки",
              "url_rus": "gosudarstvennye-arhivy-biblioteki",
              "title": "Государственные архивы, библиотеки",
              "id_parent": 151,
              "key": 155
          },
          {
              "title_rus": "Государственные корпорации",
              "url_rus": "gosudarstvennye-korporacii",
              "title": "Государственные корпорации",
              "id_parent": 151,
              "key": 156
          },
          {
              "title_rus": "Государственные фонды",
              "url_rus": "gosudarstvennye-fondy",
              "title": "Государственные фонды",
              "id_parent": 151,
              "key": 157
          },
          {
              "title_rus": "Дипломатический корпус, посольство",
              "url_rus": "diplomaticheskij-korpus-posolstvo",
              "title": "Дипломатический корпус, посольство",
              "id_parent": 151,
              "key": 158
          },
          {
              "title_rus": "МВД",
              "url_rus": "mvd",
              "title": "МВД",
              "id_parent": 151,
              "key": 159
          },
          {
              "title_rus": "Муниципалитет",
              "url_rus": "municipalitet",
              "title": "Муниципалитет",
              "id_parent": 151,
              "key": 160
          },
          {
              "title_rus": "МФЦ",
              "url_rus": "mfc",
              "title": "МФЦ",
              "id_parent": 151,
              "key": 635
          },
          {
              "title_rus": "МЧС",
              "url_rus": "mchs",
              "title": "МЧС",
              "id_parent": 151,
              "key": 161
          },
          {
              "title_rus": "Почта России",
              "url_rus": "pochta-rossii",
              "title": "Почта России",
              "id_parent": 151,
              "key": 636
          },
          {
              "title_rus": "Правительство",
              "url_rus": "pravitelstvo",
              "title": "Правительство",
              "id_parent": 151,
              "key": 162
          },
          {
              "title_rus": "Прокуратура",
              "url_rus": "prokuratura",
              "title": "Прокуратура",
              "id_parent": 151,
              "key": 163
          },
          {
              "title_rus": "Социальная служба",
              "url_rus": "socialnaya-sluzhba",
              "title": "Социальная служба",
              "id_parent": 151,
              "key": 634
          },
          {
              "title_rus": "Суд",
              "url_rus": "sud",
              "title": "Суд",
              "id_parent": 151,
              "key": 164
          },
          {
              "title_rus": "ФАС (Федеральная антимонопольная служба)",
              "url_rus": "fas-federalnaya-antimonopolnaya-sluzhba",
              "title": "ФАС (Федеральная антимонопольная служба)",
              "id_parent": 151,
              "key": 165
          },
          {
              "title_rus": "ФМС (Федеральная миграционная служба)",
              "url_rus": "fms-federalnaya-migracionnaya-sluzhba",
              "title": "ФМС (Федеральная миграционная служба)",
              "id_parent": 151,
              "key": 166
          },
          {
              "title_rus": "ФНС (Федеральная налоговая служба)",
              "url_rus": "fns-federalnaya-nalogovaya-sluzhba",
              "title": "ФНС (Федеральная налоговая служба)",
              "id_parent": 151,
              "key": 167
          },
          {
              "title_rus": "ФРС (Федеральная регистрационная служба)",
              "url_rus": "frs-federalnaya-registracionnaya-sluzhba",
              "title": "ФРС (Федеральная регистрационная служба)",
              "id_parent": 151,
              "key": 168
          },
          {
              "title_rus": "ФСБ (Федеральная служба безопасности)",
              "url_rus": "fsb-federalnaya-sluzhba-bezopasnosti",
              "title": "ФСБ (Федеральная служба безопасности)",
              "id_parent": 151,
              "key": 169
          },
          {
              "title_rus": "ФСИН (Федеральная служба исполнения наказаний)",
              "url_rus": "fsin-federalnaya-sluzhba-ispolneniya-nakazanij",
              "title": "ФСИН (Федеральная служба исполнения наказаний)",
              "id_parent": 151,
              "key": 170
          },
          {
              "title_rus": "ФССП (Федеральная служба судебных приставов)",
              "url_rus": "fssp-federalnaya-sluzhba-sudebnyh-pristavov",
              "title": "ФССП (Федеральная служба судебных приставов)",
              "id_parent": 151,
              "key": 171
          },
          {
              "title_rus": "ФТС (Федеральная таможенная служба)",
              "url_rus": "fts-federalnaya-tamozhennaya-sluzhba",
              "title": "ФТС (Федеральная таможенная служба)",
              "id_parent": 151,
              "key": 172
          },
          {
              "title_rus": "Другое",
              "url_rus": "drugoe",
              "title": "Другое",
              "id_parent": 151,
              "key": 173
          },
          {
              "title_rus": "Начало карьеры, мало опыта",
              "url_rus": "nachalo-karery-malo-opyta",
              "title": "Начало карьеры, мало опыта",
              "id_parent": 151,
              "key": 174
          }
      ]
  },
  {
      "title_rus": "Дизайн",
      "url_rus": "dizajn",
      "title": "Дизайн",
      "title_trimmed": "Дизайн",
      "key": 62,
      "positions": [
          {
              "title_rus": "Web-дизайн (UI/UX)",
              "url_rus": "web-dizajn",
              "title": "Web-дизайн (UI/UX)",
              "id_parent": 62,
              "key": 35
          },
          {
              "title_rus": "Архитектура",
              "url_rus": "arhitektura",
              "title": "Архитектура",
              "id_parent": 62,
              "key": 63
          },
          {
              "title_rus": "Аудио / Саунд-дизайн",
              "url_rus": "audio",
              "title": "Аудио / Саунд-дизайн",
              "id_parent": 62,
              "key": 64
          },
          {
              "title_rus": "Верстка и полиграфия",
              "url_rus": "verstka-i-poligrafiya",
              "title": "Верстка и полиграфия",
              "id_parent": 62,
              "key": 65
          },
          {
              "title_rus": "Видео, CGI, анимация",
              "url_rus": "video",
              "title": "Видео, CGI, анимация",
              "id_parent": 62,
              "key": 68
          },
          {
              "title_rus": "Графический дизайн",
              "url_rus": "graficheskij-dizajn",
              "title": "Графический дизайн",
              "id_parent": 62,
              "key": 66
          },
          {
              "title_rus": "Дизайн интерьера",
              "url_rus": "dizajn-interera",
              "title": "Дизайн интерьера",
              "id_parent": 62,
              "key": 67
          },
          {
              "title_rus": "Иллюстрации",
              "url_rus": "illyustracii",
              "title": "Иллюстрации",
              "id_parent": 62,
              "key": 637
          },
          {
              "title_rus": "Ландшафтный дизайн",
              "url_rus": "landshaftnyj-dizajn",
              "title": "Ландшафтный дизайн",
              "id_parent": 62,
              "key": 69
          },
          {
              "title_rus": "Мода и Аксессуары",
              "url_rus": "moda-i-aksessuary",
              "title": "Мода и Аксессуары",
              "id_parent": 62,
              "key": 70
          },
          {
              "title_rus": "Промышленный дизайн",
              "url_rus": "promyshlennyj-dizajn",
              "title": "Промышленный дизайн",
              "id_parent": 62,
              "key": 71
          },
          {
              "title_rus": "Рекламный дизайн / Ивенты, инсталляции, стенды",
              "url_rus": "reklamnyj-dizajn",
              "title": "Рекламный дизайн / Ивенты, инсталляции, стенды",
              "id_parent": 62,
              "key": 72
          },
          {
              "title_rus": "Фотография",
              "url_rus": "fotografiya",
              "title": "Фотография",
              "id_parent": 62,
              "key": 73
          },
          {
              "title_rus": "Другое",
              "url_rus": "drugoe",
              "title": "Другое",
              "id_parent": 62,
              "key": 74
          },
          {
              "title_rus": "Начало карьеры, мало опыта",
              "url_rus": "nachalo-karery-malo-opyta",
              "title": "Начало карьеры, мало опыта",
              "id_parent": 62,
              "key": 75
          }
      ]
  },
  {
      "title_rus": "Домашний персонал",
      "url_rus": "domashnij-personal",
      "title": "Домашний персонал",
      "title_trimmed": "Домашний персонал",
      "key": 471,
      "positions": [
          {
              "title_rus": "Ведение хозяйства",
              "url_rus": "vedenie-hozyajstva",
              "title": "Ведение хозяйства",
              "id_parent": 471,
              "key": 472
          },
          {
              "title_rus": "Домашний уход за больными, престарелыми, инвалидами",
              "url_rus": "domashnij-uhod-za-bolnymi-prestarelymi-invalidami",
              "title": "Домашний уход за больными, престарелыми, инвалидами",
              "id_parent": 471,
              "key": 473
          },
          {
              "title_rus": "Домашний уход за детьми",
              "url_rus": "domashnij-uhod-za-detmi",
              "title": "Домашний уход за детьми",
              "id_parent": 471,
              "key": 474
          },
          {
              "title_rus": "Уборка и помощь по дому",
              "url_rus": "uborka-i-pomosch-po-domu",
              "title": "Уборка и помощь по дому",
              "id_parent": 471,
              "key": 475
          },
          {
              "title_rus": "Уход за животными",
              "url_rus": "uhod-za-zhivotnymi",
              "title": "Уход за животными",
              "id_parent": 471,
              "key": 638
          },
          {
              "title_rus": "Другое",
              "url_rus": "drugoe",
              "title": "Другое",
              "id_parent": 471,
              "key": 476
          },
          {
              "title_rus": "Начало карьеры, мало опыта",
              "url_rus": "nachalo-karery-malo-opyta",
              "title": "Начало карьеры, мало опыта",
              "id_parent": 471,
              "key": 477
          }
      ]
  },
  {
      "title_rus": "Закупки, снабжение",
      "url_rus": "zakupki-snabzhenie",
      "title": "Закупки, снабжение",
      "title_trimmed": "Закупки, снабжение",
      "key": 512,
      "positions": [
          {
              "title_rus": "Автомобили, запчасти",
              "url_rus": "avtomobili-zapchasti",
              "title": "Автомобили, запчасти",
              "id_parent": 512,
              "key": 514
          },
          {
              "title_rus": "Алкоголь, напитки",
              "url_rus": "alkogol-napitki",
              "title": "Алкоголь, напитки",
              "id_parent": 512,
              "key": 515
          },
          {
              "title_rus": "Бытовая техника, электроника, фото, видео",
              "url_rus": "bytovaya-tehnika-elektronika-foto-video",
              "title": "Бытовая техника, электроника, фото, видео",
              "id_parent": 512,
              "key": 516
          },
          {
              "title_rus": "Вендинг",
              "url_rus": "vending",
              "title": "Вендинг",
              "id_parent": 512,
              "key": 517
          },
          {
              "title_rus": "Госзакупки",
              "url_rus": "goszakupki",
              "title": "Госзакупки",
              "id_parent": 512,
              "key": 607
          },
          {
              "title_rus": "ГСМ, нефть",
              "url_rus": "gsm-neft",
              "title": "ГСМ, нефть",
              "id_parent": 512,
              "key": 518
          },
          {
              "title_rus": "Зоотовары, ветеринарные препараты",
              "url_rus": "zootovary-veterinarnye-preparaty",
              "title": "Зоотовары, ветеринарные препараты",
              "id_parent": 512,
              "key": 520
          },
          {
              "title_rus": "Канцелярские товары",
              "url_rus": "kancelyarskie-tovary",
              "title": "Канцелярские товары",
              "id_parent": 512,
              "key": 521
          },
          {
              "title_rus": "Книги, печатные издания",
              "url_rus": "knigi-pechatnye-izdaniya",
              "title": "Книги, печатные издания",
              "id_parent": 512,
              "key": 522
          },
          {
              "title_rus": "Компьютеры, оргтехника, ПО",
              "url_rus": "kompyutery-orgtehnika-po",
              "title": "Компьютеры, оргтехника, ПО",
              "id_parent": 512,
              "key": 523
          },
          {
              "title_rus": "Косметика, бытовая химия",
              "url_rus": "kosmetika-bytovaya-himiya",
              "title": "Косметика, бытовая химия",
              "id_parent": 512,
              "key": 524
          },
          {
              "title_rus": "Мебель",
              "url_rus": "mebel",
              "title": "Мебель",
              "id_parent": 512,
              "key": 525
          },
          {
              "title_rus": "Медицина, фармацевтика",
              "url_rus": "medicina-farmacevtika",
              "title": "Медицина, фармацевтика",
              "id_parent": 512,
              "key": 526
          },
          {
              "title_rus": "Металлопрокат",
              "url_rus": "metalloprokat",
              "title": "Металлопрокат",
              "id_parent": 512,
              "key": 527
          },
          {
              "title_rus": "Оборудование",
              "url_rus": "oborudovanie",
              "title": "Оборудование",
              "id_parent": 512,
              "key": 529
          },
          {
              "title_rus": "Продукты питания",
              "url_rus": "produkty-pitaniya",
              "title": "Продукты питания",
              "id_parent": 512,
              "key": 530
          },
          {
              "title_rus": "Продукция химического производства",
              "url_rus": "produkciya-himicheskogo-proizvodstva",
              "title": "Продукция химического производства",
              "id_parent": 512,
              "key": 531
          },
          {
              "title_rus": "Сантехника",
              "url_rus": "santehnika",
              "title": "Сантехника",
              "id_parent": 512,
              "key": 610
          },
          {
              "title_rus": "Сельское хозяйство",
              "url_rus": "selskoe-hozyajstvo",
              "title": "Сельское хозяйство",
              "id_parent": 512,
              "key": 532
          },
          {
              "title_rus": "Системы безопасности",
              "url_rus": "sistemy-bezopasnosti",
              "title": "Системы безопасности",
              "id_parent": 512,
              "key": 533
          },
          {
              "title_rus": "Спортивные товары и фитнес-услуги",
              "url_rus": "sportivnye-tovary-i-fitnes-uslugi",
              "title": "Спортивные товары и фитнес-услуги",
              "id_parent": 512,
              "key": 534
          },
          {
              "title_rus": "Строительно-отделочные материалы",
              "url_rus": "stroitelno-otdelochnye-materialy",
              "title": "Строительно-отделочные материалы",
              "id_parent": 512,
              "key": 535
          },
          {
              "title_rus": "Сырье",
              "url_rus": "syre",
              "title": "Сырье",
              "id_parent": 512,
              "key": 536
          },
          {
              "title_rus": "Табачная продукция",
              "url_rus": "tabachnaya-produkciya",
              "title": "Табачная продукция",
              "id_parent": 512,
              "key": 537
          },
          {
              "title_rus": "Текстиль, одежда, обувь",
              "url_rus": "tekstil-odezhda-obuv",
              "title": "Текстиль, одежда, обувь",
              "id_parent": 512,
              "key": 538
          },
          {
              "title_rus": "Телекоммуникации, сетевые решения, средства связи",
              "url_rus": "telekommunikacii-setevye-resheniya-sredstva-svyazi",
              "title": "Телекоммуникации, сетевые решения, средства связи",
              "id_parent": 512,
              "key": 539
          },
          {
              "title_rus": "Тендеры",
              "url_rus": "tendery",
              "title": "Тендеры",
              "id_parent": 512,
              "key": 540
          },
          {
              "title_rus": "Товары народного потребления",
              "url_rus": "tovary-narodnogo-potrebleniya",
              "title": "Товары народного потребления",
              "id_parent": 512,
              "key": 541
          },
          {
              "title_rus": "Услуги для бизнеса",
              "url_rus": "uslugi-dlya-biznesa",
              "title": "Услуги для бизнеса",
              "id_parent": 512,
              "key": 542
          },
          {
              "title_rus": "Флористика",
              "url_rus": "floristika",
              "title": "Флористика",
              "id_parent": 512,
              "key": 543
          },
          {
              "title_rus": "Электротехническое оборудование, светотехника",
              "url_rus": "elektrotehnicheskoe-oborudovanie-svetotehnika",
              "title": "Электротехническое оборудование, светотехника",
              "id_parent": 512,
              "key": 544
          },
          {
              "title_rus": "Ювелирные изделия",
              "url_rus": "yuvelirnye-izdeliya",
              "title": "Ювелирные изделия",
              "id_parent": 512,
              "key": 545
          },
          {
              "title_rus": "Другое",
              "url_rus": "drugoe",
              "title": "Другое",
              "id_parent": 512,
              "key": 519
          },
          {
              "title_rus": "Начало карьеры, мало опыта",
              "url_rus": "nachalo-karery-malo-opyta",
              "title": "Начало карьеры, мало опыта",
              "id_parent": 512,
              "key": 528
          }
      ]
  },
  {
      "title_rus": "Искусство, культура, развлечения",
      "url_rus": "iskusstvo-kultura-razvlecheniya",
      "title": "Искусство, культура, развлечения",
      "title_trimmed": "Искусство, культура,...",
      "key": 205,
      "positions": [
          {
              "title_rus": "Балет, хореография, танцы",
              "url_rus": "balet-horeografiya-tancy",
              "title": "Балет, хореография, танцы",
              "id_parent": 205,
              "key": 208
          },
          {
              "title_rus": "Библиотеки",
              "url_rus": "biblioteki",
              "title": "Библиотеки",
              "id_parent": 205,
              "key": 206
          },
          {
              "title_rus": "Декоративно-прикладное искусство, народные промыслы",
              "url_rus": "dekorativno-prikladnoe-iskusstvo-narodnye-promysly",
              "title": "Декоративно-прикладное искусство, народные промыслы",
              "id_parent": 205,
              "key": 209
          },
          {
              "title_rus": "Живопись, графика, скульптура",
              "url_rus": "zhivopis-grafika-skulptura",
              "title": "Живопись, графика, скульптура",
              "id_parent": 205,
              "key": 210
          },
          {
              "title_rus": "Искусствоведение",
              "url_rus": "iskusstvovedenie",
              "title": "Искусствоведение",
              "id_parent": 205,
              "key": 211
          },
          {
              "title_rus": "Кино, мультипликация",
              "url_rus": "kino-multiplikaciya",
              "title": "Кино, мультипликация",
              "id_parent": 205,
              "key": 207
          },
          {
              "title_rus": "Литература",
              "url_rus": "literatura",
              "title": "Литература",
              "id_parent": 205,
              "key": 212
          },
          {
              "title_rus": "Модельный бизнес",
              "url_rus": "modelnyj-biznes",
              "title": "Модельный бизнес",
              "id_parent": 205,
              "key": 213
          },
          {
              "title_rus": "Музей, выставочный зал",
              "url_rus": "muzej-vystavochnyj-zal",
              "title": "Музей, выставочный зал",
              "id_parent": 205,
              "key": 214
          },
          {
              "title_rus": "Музыка, пение",
              "url_rus": "muzyka-penie",
              "title": "Музыка, пение",
              "id_parent": 205,
              "key": 215
          },
          {
              "title_rus": "Развлечения, игры, отдых, анимация",
              "url_rus": "razvlecheniya-igry-otdyh-animaciya",
              "title": "Развлечения, игры, отдых, анимация",
              "id_parent": 205,
              "key": 216
          },
          {
              "title_rus": "Реставрация, антиквариат",
              "url_rus": "restavraciya-antikvariat",
              "title": "Реставрация, антиквариат",
              "id_parent": 205,
              "key": 217
          },
          {
              "title_rus": "Театр",
              "url_rus": "teatr",
              "title": "Театр",
              "id_parent": 205,
              "key": 218
          },
          {
              "title_rus": "Шоу-бизнес",
              "url_rus": "shou-biznes",
              "title": "Шоу-бизнес",
              "id_parent": 205,
              "key": 219
          },
          {
              "title_rus": "Другое",
              "url_rus": "drugoe",
              "title": "Другое",
              "id_parent": 205,
              "key": 220
          },
          {
              "title_rus": "Начало карьеры, мало опыта",
              "url_rus": "nachalo-karery-malo-opyta",
              "title": "Начало карьеры, мало опыта",
              "id_parent": 205,
              "key": 221
          }
      ]
  },
  {
      "title_rus": "Кадры, управление персоналом",
      "url_rus": "kadry-upravlenie-personalom",
      "title": "Кадры, управление персоналом",
      "title_trimmed": "Кадры, управление...",
      "key": 76,
      "positions": [
          {
              "title_rus": "Кадровый учет, делопроизводство, кадровое администрирование",
              "url_rus": "kadrovyj-uchet-deloproizvodstvo-kadrovoe-administrirovanie",
              "title": "Кадровый учет, делопроизводство, кадровое администрирование",
              "id_parent": 76,
              "key": 77
          },
          {
              "title_rus": "Оплата труда, компенсации  и льготы",
              "url_rus": "oplata-truda-kompensacii-i-lgoty",
              "title": "Оплата труда, компенсации  и льготы",
              "id_parent": 76,
              "key": 78
          },
          {
              "title_rus": "Охрана труда",
              "url_rus": "ohrana-truda",
              "title": "Охрана труда",
              "id_parent": 76,
              "key": 79
          },
          {
              "title_rus": "Оценка и развитие персонала, обучение, тренинги",
              "url_rus": "ocenka-i-razvitie-personala",
              "title": "Оценка и развитие персонала, обучение, тренинги",
              "id_parent": 76,
              "key": 81
          },
          {
              "title_rus": "Психология труда и социальная психология",
              "url_rus": "psihologiya-truda-i-socialnaya-psihologiya",
              "title": "Психология труда и социальная психология",
              "id_parent": 76,
              "key": 80
          },
          {
              "title_rus": "Рекрутмент, подбор персонала",
              "url_rus": "rekrutment",
              "title": "Рекрутмент, подбор персонала",
              "id_parent": 76,
              "key": 82
          },
          {
              "title_rus": "Управление персоналом, корпоративные коммуникации",
              "url_rus": "upravlenie-personalom",
              "title": "Управление персоналом, корпоративные коммуникации",
              "id_parent": 76,
              "key": 83
          },
          {
              "title_rus": "Другое",
              "url_rus": "drugoe",
              "title": "Другое",
              "id_parent": 76,
              "key": 84
          },
          {
              "title_rus": "Начало карьеры, мало опыта",
              "url_rus": "nachalo-karery-malo-opyta",
              "title": "Начало карьеры, мало опыта",
              "id_parent": 76,
              "key": 85
          }
      ]
  },
  {
      "title_rus": "Консалтинг, стратегическое развитие",
      "url_rus": "konsalting-strategicheskoe-razvitie",
      "title": "Консалтинг, стратегическое развитие",
      "title_trimmed": "Консалтинг,...",
      "key": 426,
      "positions": [
          {
              "title_rus": "IT-консалтинг",
              "url_rus": "it-konsalting",
              "title": "IT-консалтинг",
              "id_parent": 426,
              "key": 427
          },
          {
              "title_rus": "Кадровый консалтинг",
              "url_rus": "kadrovyj-konsalting",
              "title": "Кадровый консалтинг",
              "id_parent": 426,
              "key": 428
          },
          {
              "title_rus": "Корпоративные финансы",
              "url_rus": "korporativnye-finansy",
              "title": "Корпоративные финансы",
              "id_parent": 426,
              "key": 429
          },
          {
              "title_rus": "Маркетинговый и PR консалтинг",
              "url_rus": "marketingovyj-i-pr-konsalting",
              "title": "Маркетинговый и PR консалтинг",
              "id_parent": 426,
              "key": 430
          },
          {
              "title_rus": "Реинжиниринг бизнес-процессов",
              "url_rus": "reinzhiniring-biznes-processov",
              "title": "Реинжиниринг бизнес-процессов",
              "id_parent": 426,
              "key": 431
          },
          {
              "title_rus": "Стратегический консалтинг",
              "url_rus": "strategicheskij-konsalting",
              "title": "Стратегический консалтинг",
              "id_parent": 426,
              "key": 432
          },
          {
              "title_rus": "Управление проектами",
              "url_rus": "upravlenie-proektami",
              "title": "Управление проектами",
              "id_parent": 426,
              "key": 433
          },
          {
              "title_rus": "Управленческий консалтинг",
              "url_rus": "upravlencheskij-konsalting",
              "title": "Управленческий консалтинг",
              "id_parent": 426,
              "key": 434
          },
          {
              "title_rus": "Экологический консалтинг",
              "url_rus": "ekologicheskij-konsalting",
              "title": "Экологический консалтинг",
              "id_parent": 426,
              "key": 435
          },
          {
              "title_rus": "Другое",
              "url_rus": "drugoe",
              "title": "Другое",
              "id_parent": 426,
              "key": 436
          },
          {
              "title_rus": "Начало карьеры, мало опыта",
              "url_rus": "nachalo-karery-malo-opyta",
              "title": "Начало карьеры, мало опыта",
              "id_parent": 426,
              "key": 437
          }
      ]
  },
  {
      "title_rus": "Маркетинг, реклама, PR",
      "url_rus": "marketing-reklama-pr",
      "title": "Маркетинг, реклама, PR",
      "title_trimmed": "Маркетинг, реклама, PR",
      "key": 234,
      "positions": [
          {
              "title_rus": "BTL",
              "url_rus": "btl",
              "title": "BTL",
              "id_parent": 234,
              "key": 235
          },
          {
              "title_rus": "Event, организация мероприятий",
              "url_rus": "event-organizaciya-meropriyatij",
              "title": "Event, организация мероприятий",
              "id_parent": 234,
              "key": 236
          },
          {
              "title_rus": "GR, IR",
              "url_rus": "gr-ir",
              "title": "GR, IR",
              "id_parent": 234,
              "key": 237
          },
          {
              "title_rus": "PR",
              "url_rus": "pr",
              "title": "PR",
              "id_parent": 234,
              "key": 238
          },
          {
              "title_rus": "SMM",
              "url_rus": "smm",
              "title": "SMM",
              "id_parent": 234,
              "key": 617
          },
          {
              "title_rus": "Аналитика, исследование рынков",
              "url_rus": "analitika-issledovanie-rynkov",
              "title": "Аналитика, исследование рынков",
              "id_parent": 234,
              "key": 239
          },
          {
              "title_rus": "Бренд-менеджмент",
              "url_rus": "brend-menedzhment",
              "title": "Бренд-менеджмент",
              "id_parent": 234,
              "key": 240
          },
          {
              "title_rus": "Интернет-маркетинг / Digital",
              "url_rus": "internet-marketing",
              "title": "Интернет-маркетинг / Digital",
              "id_parent": 234,
              "key": 241
          },
          {
              "title_rus": "Копирайтинг",
              "url_rus": "kopirajting",
              "title": "Копирайтинг",
              "id_parent": 234,
              "key": 242
          },
          {
              "title_rus": "Маркетинг",
              "url_rus": "marketing",
              "title": "Маркетинг",
              "id_parent": 234,
              "key": 243
          },
          {
              "title_rus": "Медиаисследования, рейтинги",
              "url_rus": "mediaissledovaniya-rejtingi",
              "title": "Медиаисследования, рейтинги",
              "id_parent": 234,
              "key": 244
          },
          {
              "title_rus": "Медиапланирование",
              "url_rus": "mediaplanirovanie",
              "title": "Медиапланирование",
              "id_parent": 234,
              "key": 245
          },
          {
              "title_rus": "Мерчандайзинг",
              "url_rus": "merchandajzing",
              "title": "Мерчандайзинг",
              "id_parent": 234,
              "key": 246
          },
          {
              "title_rus": "Наружная реклама",
              "url_rus": "naruzhnaya-reklama",
              "title": "Наружная реклама",
              "id_parent": 234,
              "key": 247
          },
          {
              "title_rus": "Партнерский маркетинг / Influence-маркетинг",
              "url_rus": "partnerskij-marketing",
              "title": "Партнерский маркетинг / Influence-маркетинг",
              "id_parent": 234,
              "key": 640
          },
          {
              "title_rus": "Печатная реклама",
              "url_rus": "pechatnaya-reklama",
              "title": "Печатная реклама",
              "id_parent": 234,
              "key": 248
          },
          {
              "title_rus": "Политический PR",
              "url_rus": "politicheskij-pr",
              "title": "Политический PR",
              "id_parent": 234,
              "key": 249
          },
          {
              "title_rus": "Продвижение, специальные мероприятия",
              "url_rus": "prodvizhenie-specialnye-meropriyatiya",
              "title": "Продвижение, специальные мероприятия",
              "id_parent": 234,
              "key": 250
          },
          {
              "title_rus": "Продуктовый маркетинг",
              "url_rus": "produktovyj-marketing",
              "title": "Продуктовый маркетинг",
              "id_parent": 234,
              "key": 639
          },
          {
              "title_rus": "Производство рекламы",
              "url_rus": "proizvodstvo-reklamy",
              "title": "Производство рекламы",
              "id_parent": 234,
              "key": 251
          },
          {
              "title_rus": "Радиореклама",
              "url_rus": "radio-reklama",
              "title": "Радиореклама",
              "id_parent": 234,
              "key": 252
          },
          {
              "title_rus": "Рекламно-сувенирная продукция",
              "url_rus": "reklamno-suvenirnaya-produkciya",
              "title": "Рекламно-сувенирная продукция",
              "id_parent": 234,
              "key": 619
          },
          {
              "title_rus": "Рекламное агентство",
              "url_rus": "reklamnoe-agentstvo",
              "title": "Рекламное агентство",
              "id_parent": 234,
              "key": 253
          },
          {
              "title_rus": "Социологические исследования",
              "url_rus": "sociologicheskie-issledovaniya",
              "title": "Социологические исследования",
              "id_parent": 234,
              "key": 254
          },
          {
              "title_rus": "Телевизионная реклама",
              "url_rus": "televizionnaya-reklama",
              "title": "Телевизионная реклама",
              "id_parent": 234,
              "key": 255
          },
          {
              "title_rus": "Телемаркетинг",
              "url_rus": "telemarketing",
              "title": "Телемаркетинг",
              "id_parent": 234,
              "key": 256
          },
          {
              "title_rus": "Торговый маркетинг",
              "url_rus": "torgovyj-marketing",
              "title": "Торговый маркетинг",
              "id_parent": 234,
              "key": 257
          },
          {
              "title_rus": "Другое",
              "url_rus": "drugoe",
              "title": "Другое",
              "id_parent": 234,
              "key": 258
          },
          {
              "title_rus": "Начало карьеры, мало опыта",
              "url_rus": "nachalo-karery-malo-opyta",
              "title": "Начало карьеры, мало опыта",
              "id_parent": 234,
              "key": 259
          }
      ]
  },
  {
      "title_rus": "Медицина, фармацевтика, ветеринария",
      "url_rus": "medicina-farmacevtika-veterinariya",
      "title": "Медицина, фармацевтика, ветеринария",
      "title_trimmed": "Медицина, фармацевтика,...",
      "key": 136,
      "positions": [
          {
              "title_rus": "Аптеки / Фармацевтика",
              "url_rus": "apteki",
              "title": "Аптеки / Фармацевтика",
              "id_parent": 136,
              "key": 148
          },
          {
              "title_rus": "Больницы, поликлиники, диагностические центры, лаборатории",
              "url_rus": "bolnicy-polikliniki-diagnosticheskie-centry-laboratorii",
              "title": "Больницы, поликлиники, диагностические центры, лаборатории",
              "id_parent": 136,
              "key": 137
          },
          {
              "title_rus": "Ветеринария",
              "url_rus": "veterinariya",
              "title": "Ветеринария",
              "id_parent": 136,
              "key": 138
          },
          {
              "title_rus": "Клинические испытания",
              "url_rus": "klinicheskie-ispytaniya",
              "title": "Клинические испытания",
              "id_parent": 136,
              "key": 139
          },
          {
              "title_rus": "Лечебное дело (врачи-специалисты)",
              "url_rus": "lechebnoe-delo-vrachi-specialisty",
              "title": "Лечебное дело (врачи-специалисты)",
              "id_parent": 136,
              "key": 140
          },
          {
              "title_rus": "Лицензирование",
              "url_rus": "licenzirovanie",
              "title": "Лицензирование",
              "id_parent": 136,
              "key": 141
          },
          {
              "title_rus": "Медицинское оборудование",
              "url_rus": "medicinskoe-oborudovanie",
              "title": "Медицинское оборудование",
              "id_parent": 136,
              "key": 142
          },
          {
              "title_rus": "Санитарно-эпидемиологический надзор",
              "url_rus": "sanitarno-epidemiologicheskij-nadzor",
              "title": "Санитарно-эпидемиологический надзор",
              "id_parent": 136,
              "key": 143
          },
          {
              "title_rus": "Сертификация",
              "url_rus": "sertifikaciya",
              "title": "Сертификация",
              "id_parent": 136,
              "key": 144
          },
          {
              "title_rus": "Средний и младший медицинский персонал",
              "url_rus": "srednij-i-mladshij-medicinskij-personal",
              "title": "Средний и младший медицинский персонал",
              "id_parent": 136,
              "key": 145
          },
          {
              "title_rus": "Товары медицинского назначения",
              "url_rus": "tovary-medicinskogo-naznacheniya",
              "title": "Товары медицинского назначения",
              "id_parent": 136,
              "key": 146
          },
          {
              "title_rus": "Уход за больными",
              "url_rus": "uhod-za-bolnymi",
              "title": "Уход за больными",
              "id_parent": 136,
              "key": 147
          },
          {
              "title_rus": "Другое",
              "url_rus": "drugoe",
              "title": "Другое",
              "id_parent": 136,
              "key": 149
          },
          {
              "title_rus": "Начало карьеры, мало опыта",
              "url_rus": "nachalo-karery-malo-opyta",
              "title": "Начало карьеры, мало опыта",
              "id_parent": 136,
              "key": 150
          }
      ]
  },
  {
      "title_rus": "Наука, образование, повышение квалификации",
      "url_rus": "nauka-obrazovanie-povyshenie-kvalifikacii",
      "title": "Наука, образование, повышение квалификации",
      "title_trimmed": "Наука, образование,...",
      "key": 270,
      "positions": [
          {
              "title_rus": "Академия наук",
              "url_rus": "akademiya-nauk",
              "title": "Академия наук",
              "id_parent": 270,
              "key": 271
          },
          {
              "title_rus": "Внешкольное образование",
              "url_rus": "vneshkolnoe-obrazovanie",
              "title": "Внешкольное образование",
              "id_parent": 270,
              "key": 273
          },
          {
              "title_rus": "Высшее образование",
              "url_rus": "vysshee-obrazovanie",
              "title": "Высшее образование",
              "id_parent": 270,
              "key": 274
          },
          {
              "title_rus": "Дополнительное образование",
              "url_rus": "dopolnitelnoe-obrazovanie",
              "title": "Дополнительное образование",
              "id_parent": 270,
              "key": 272
          },
          {
              "title_rus": "Дошкольное воспитание и образование",
              "url_rus": "doshkolnoe-vospitanie-i-obrazovanie",
              "title": "Дошкольное воспитание и образование",
              "id_parent": 270,
              "key": 275
          },
          {
              "title_rus": "Инновационные технологии",
              "url_rus": "innovacionnye-tehnologii",
              "title": "Инновационные технологии",
              "id_parent": 270,
              "key": 276
          },
          {
              "title_rus": "Курсы, тренинги, семинары",
              "url_rus": "kursy",
              "title": "Курсы, тренинги, семинары",
              "id_parent": 270,
              "key": 277
          },
          {
              "title_rus": "НИИ, КБ",
              "url_rus": "nii-kb",
              "title": "НИИ, КБ",
              "id_parent": 270,
              "key": 278
          },
          {
              "title_rus": "Репетиторство",
              "url_rus": "repetitorstvo",
              "title": "Репетиторство",
              "id_parent": 270,
              "key": 279
          },
          {
              "title_rus": "Среднее образование",
              "url_rus": "srednee-obrazovanie",
              "title": "Среднее образование",
              "id_parent": 270,
              "key": 280
          },
          {
              "title_rus": "Среднее специальное образование",
              "url_rus": "srednee-specialnoe-obrazovanie",
              "title": "Среднее специальное образование",
              "id_parent": 270,
              "key": 281
          },
          {
              "title_rus": "Другое",
              "url_rus": "drugoe",
              "title": "Другое",
              "id_parent": 270,
              "key": 282
          },
          {
              "title_rus": "Начало карьеры, мало опыта",
              "url_rus": "nachalo-karery-malo-opyta",
              "title": "Начало карьеры, мало опыта",
              "id_parent": 270,
              "key": 283
          }
      ]
  },
  {
      "title_rus": "Некоммерческие организации, волонтерство",
      "url_rus": "nekommercheskie-organizacii-volonterstvo",
      "title": "Некоммерческие организации, волонтерство",
      "title_trimmed": "Некоммерческие...",
      "key": 175,
      "positions": [
          {
              "title_rus": "Благотворительность",
              "url_rus": "blagotvoritelnost",
              "title": "Благотворительность",
              "id_parent": 175,
              "key": 176
          },
          {
              "title_rus": "Волонтерство",
              "url_rus": "volonterstvo",
              "title": "Волонтерство",
              "id_parent": 175,
              "key": 641
          },
          {
              "title_rus": "Общественные организации, ассоциации, фонды",
              "url_rus": "obschestvennye-organizacii-associacii-fondy",
              "title": "Общественные организации, ассоциации, фонды",
              "id_parent": 175,
              "key": 177
          },
          {
              "title_rus": "Религиозные организации",
              "url_rus": "religioznye-organizacii",
              "title": "Религиозные организации",
              "id_parent": 175,
              "key": 179
          },
          {
              "title_rus": "Другое",
              "url_rus": "drugoe",
              "title": "Другое",
              "id_parent": 175,
              "key": 180
          },
          {
              "title_rus": "Начало карьеры, мало опыта",
              "url_rus": "nachalo-karery-malo-opyta",
              "title": "Начало карьеры, мало опыта",
              "id_parent": 175,
              "key": 181
          }
      ]
  },
  {
      "title_rus": "Обмен персоналом",
      "url_rus": "obmen-personalom",
      "title": "Обмен персоналом",
      "title_trimmed": "Обмен персоналом",
      "key": 625,
      "positions": [
          {
              "title_rus": "HR - хаб",
              "url_rus": "hr-hab",
              "title": "HR - хаб",
              "id_parent": 625,
              "key": 626
          }
      ]
  },
  {
      "title_rus": "Продажи",
      "url_rus": "prodazhi",
      "title": "Продажи",
      "title_trimmed": "Продажи",
      "key": 438,
      "positions": [
          {
              "title_rus": "Call Center",
              "url_rus": "call-center",
              "title": "Call Center",
              "id_parent": 438,
              "key": 34
          },
          {
              "title_rus": "Автомобили, запчасти",
              "url_rus": "avtomobili-zapchasti",
              "title": "Автомобили, запчасти",
              "id_parent": 438,
              "key": 439
          },
          {
              "title_rus": "Агентства недвижимости, оценка недвижимости",
              "url_rus": "agentstva-nedvizhimosti-ocenka-nedvizhimosti",
              "title": "Агентства недвижимости, оценка недвижимости",
              "id_parent": 438,
              "key": 308
          },
          {
              "title_rus": "Алкоголь, напитки",
              "url_rus": "alkogol-napitki",
              "title": "Алкоголь, напитки",
              "id_parent": 438,
              "key": 440
          },
          {
              "title_rus": "Бытовая техника, электроника, фото, видео",
              "url_rus": "bytovaya-tehnika-elektronika-foto-video",
              "title": "Бытовая техника, электроника, фото, видео",
              "id_parent": 438,
              "key": 441
          },
          {
              "title_rus": "Вендинг",
              "url_rus": "vending",
              "title": "Вендинг",
              "id_parent": 438,
              "key": 442
          },
          {
              "title_rus": "Госзакупки",
              "url_rus": "goszakupki",
              "title": "Госзакупки",
              "id_parent": 438,
              "key": 606
          },
          {
              "title_rus": "ГСМ, нефть",
              "url_rus": "gsm-neft",
              "title": "ГСМ, нефть",
              "id_parent": 438,
              "key": 443
          },
          {
              "title_rus": "Зоотовары, ветеринарные препараты",
              "url_rus": "zootovary-veterinarnye-preparaty",
              "title": "Зоотовары, ветеринарные препараты",
              "id_parent": 438,
              "key": 444
          },
          {
              "title_rus": "Канцелярские товары",
              "url_rus": "kancelyarskie-tovary",
              "title": "Канцелярские товары",
              "id_parent": 438,
              "key": 445
          },
          {
              "title_rus": "Книги, печатные издания",
              "url_rus": "knigi-pechatnye-izdaniya",
              "title": "Книги, печатные издания",
              "id_parent": 438,
              "key": 446
          },
          {
              "title_rus": "Компьютеры, оргтехника, ПО",
              "url_rus": "kompyutery-orgtehnika-po",
              "title": "Компьютеры, оргтехника, ПО",
              "id_parent": 438,
              "key": 447
          },
          {
              "title_rus": "Косметика, бытовая химия",
              "url_rus": "kosmetika-bytovaya-himiya",
              "title": "Косметика, бытовая химия",
              "id_parent": 438,
              "key": 448
          },
          {
              "title_rus": "Логистика",
              "url_rus": "logistika",
              "title": "Логистика",
              "id_parent": 438,
              "key": 621
          },
          {
              "title_rus": "Маркетплейсы, интернет-магазин",
              "url_rus": "marketplejsy",
              "title": "Маркетплейсы, интернет-магазин",
              "id_parent": 438,
              "key": 58
          },
          {
              "title_rus": "Мебель",
              "url_rus": "mebel",
              "title": "Мебель",
              "id_parent": 438,
              "key": 449
          },
          {
              "title_rus": "Медицина, фармацевтика",
              "url_rus": "medicina-farmacevtika",
              "title": "Медицина, фармацевтика",
              "id_parent": 438,
              "key": 450
          },
          {
              "title_rus": "Металлопрокат",
              "url_rus": "metalloprokat",
              "title": "Металлопрокат",
              "id_parent": 438,
              "key": 451
          },
          {
              "title_rus": "Оборудование",
              "url_rus": "oborudovanie",
              "title": "Оборудование",
              "id_parent": 438,
              "key": 452
          },
          {
              "title_rus": "Оптовая торговля",
              "url_rus": "optovaja-torgovlja",
              "title": "Оптовая торговля",
              "id_parent": 438,
              "key": 608
          },
          {
              "title_rus": "Продукты питания",
              "url_rus": "produkty-pitaniya",
              "title": "Продукты питания",
              "id_parent": 438,
              "key": 453
          },
          {
              "title_rus": "Продукция химического производства",
              "url_rus": "produkciya-himicheskogo-proizvodstva",
              "title": "Продукция химического производства",
              "id_parent": 438,
              "key": 454
          },
          {
              "title_rus": "Рекламно-сувенирная продукция",
              "url_rus": "reklamno-suvenirnaya-produkciya",
              "title": "Рекламно-сувенирная продукция",
              "id_parent": 438,
              "key": 618
          },
          {
              "title_rus": "Сантехника",
              "url_rus": "santehnika",
              "title": "Сантехника",
              "id_parent": 438,
              "key": 609
          },
          {
              "title_rus": "Сельское хозяйство",
              "url_rus": "selskoe-hozyajstvo",
              "title": "Сельское хозяйство",
              "id_parent": 438,
              "key": 455
          },
          {
              "title_rus": "Системы безопасности",
              "url_rus": "sistemy-bezopasnosti",
              "title": "Системы безопасности",
              "id_parent": 438,
              "key": 456
          },
          {
              "title_rus": "Спортивные товары и фитнес-услуги",
              "url_rus": "sportivnye-tovary-i-fitnes-uslugi",
              "title": "Спортивные товары и фитнес-услуги",
              "id_parent": 438,
              "key": 468
          },
          {
              "title_rus": "Строительно-отделочные материалы",
              "url_rus": "stroitelno-otdelochnye-materialy",
              "title": "Строительно-отделочные материалы",
              "id_parent": 438,
              "key": 457
          },
          {
              "title_rus": "Сырье",
              "url_rus": "syre",
              "title": "Сырье",
              "id_parent": 438,
              "key": 458
          },
          {
              "title_rus": "Табачная продукция",
              "url_rus": "tabachnaya-produkciya",
              "title": "Табачная продукция",
              "id_parent": 438,
              "key": 459
          },
          {
              "title_rus": "Текстиль, одежда, обувь",
              "url_rus": "tekstil-odezhda-obuv",
              "title": "Текстиль, одежда, обувь",
              "id_parent": 438,
              "key": 460
          },
          {
              "title_rus": "Телекоммуникации, сетевые решения, средства связи",
              "url_rus": "telekommunikacii-setevye-resheniya-sredstva-svyazi",
              "title": "Телекоммуникации, сетевые решения, средства связи",
              "id_parent": 438,
              "key": 461
          },
          {
              "title_rus": "Тендеры",
              "url_rus": "tendery",
              "title": "Тендеры",
              "id_parent": 438,
              "key": 462
          },
          {
              "title_rus": "Товары народного потребления",
              "url_rus": "tovary-narodnogo-potrebleniya",
              "title": "Товары народного потребления",
              "id_parent": 438,
              "key": 463
          },
          {
              "title_rus": "Услуги для бизнеса",
              "url_rus": "uslugi-dlya-biznesa",
              "title": "Услуги для бизнеса",
              "id_parent": 438,
              "key": 464
          },
          {
              "title_rus": "Флористика",
              "url_rus": "floristika",
              "title": "Флористика",
              "id_parent": 438,
              "key": 465
          },
          {
              "title_rus": "Электротехническое оборудование, светотехника",
              "url_rus": "elektrotehnicheskoe-oborudovanie-svetotehnika",
              "title": "Электротехническое оборудование, светотехника",
              "id_parent": 438,
              "key": 466
          },
          {
              "title_rus": "Ювелирные изделия",
              "url_rus": "yuvelirnye-izdeliya",
              "title": "Ювелирные изделия",
              "id_parent": 438,
              "key": 467
          },
          {
              "title_rus": "Другое",
              "url_rus": "drugoe",
              "title": "Другое",
              "id_parent": 438,
              "key": 469
          },
          {
              "title_rus": "Начало карьеры, мало опыта",
              "url_rus": "nachalo-karery-malo-opyta",
              "title": "Начало карьеры, мало опыта",
              "id_parent": 438,
              "key": 470
          }
      ]
  },
  {
      "title_rus": "Промышленность, производство",
      "url_rus": "promyshlennost-proizvodstvo",
      "title": "Промышленность, производство",
      "title_trimmed": "Промышленность,...",
      "key": 327,
      "positions": [
          {
              "title_rus": "Авиационная промышленность",
              "url_rus": "aviacionnaya-promyshlennost",
              "title": "Авиационная промышленность",
              "id_parent": 327,
              "key": 329
          },
          {
              "title_rus": "Автомобильная промышленность",
              "url_rus": "avtomobilnaya-promyshlennost",
              "title": "Автомобильная промышленность",
              "id_parent": 327,
              "key": 330
          },
          {
              "title_rus": "Атомная энергетика",
              "url_rus": "atomnaya-energetika",
              "title": "Атомная энергетика",
              "id_parent": 327,
              "key": 328
          },
          {
              "title_rus": "Железнодорожное машиностроение",
              "url_rus": "zheleznodorozhnoe-mashinostroenie",
              "title": "Железнодорожное машиностроение",
              "id_parent": 327,
              "key": 332
          },
          {
              "title_rus": "Контроль качества, сертификация, экспертиза",
              "url_rus": "kontrol-kachestva-sertifikaciya-ekspertiza",
              "title": "Контроль качества, сертификация, экспертиза",
              "id_parent": 327,
              "key": 358
          },
          {
              "title_rus": "Легкая промышленность",
              "url_rus": "legkaya-promyshlennost",
              "title": "Легкая промышленность",
              "id_parent": 327,
              "key": 334
          },
          {
              "title_rus": "Лесная промышленность",
              "url_rus": "lesnaya-promyshlennost",
              "title": "Лесная промышленность",
              "id_parent": 327,
              "key": 335
          },
          {
              "title_rus": "Машиностроение, станкостроение",
              "url_rus": "mashinostroenie-stankostroenie",
              "title": "Машиностроение, станкостроение",
              "id_parent": 327,
              "key": 336
          },
          {
              "title_rus": "Мебельное производство",
              "url_rus": "mebelnoe-proizvodstvo",
              "title": "Мебельное производство",
              "id_parent": 327,
              "key": 337
          },
          {
              "title_rus": "Металлургия",
              "url_rus": "metallurgiya",
              "title": "Металлургия",
              "id_parent": 327,
              "key": 338
          },
          {
              "title_rus": "Нефтегазовое машиностроение",
              "url_rus": "neftegazovoe-mashinostroenie",
              "title": "Нефтегазовое машиностроение",
              "id_parent": 327,
              "key": 339
          },
          {
              "title_rus": "Нефтепереработка",
              "url_rus": "neftepererabotka",
              "title": "Нефтепереработка",
              "id_parent": 327,
              "key": 611
          },
          {
              "title_rus": "Пищевая промышленность",
              "url_rus": "pischevaya-promyshlennost",
              "title": "Пищевая промышленность",
              "id_parent": 327,
              "key": 340
          },
          {
              "title_rus": "Полиграфическое производство",
              "url_rus": "poligraficheskoe-proizvodstvo",
              "title": "Полиграфическое производство",
              "id_parent": 327,
              "key": 228
          },
          {
              "title_rus": "Приборостроение",
              "url_rus": "priborostroenie",
              "title": "Приборостроение",
              "id_parent": 327,
              "key": 342
          },
          {
              "title_rus": "Производство алкогольных и безалкогольных напитков",
              "url_rus": "proizvodstvo-alkogolnyh-i-bezalkogolnyh-napitkov",
              "title": "Производство алкогольных и безалкогольных напитков",
              "id_parent": 327,
              "key": 344
          },
          {
              "title_rus": "Производство металлических изделий и заготовок",
              "url_rus": "proizvodstvo-metallicheskih-izdelij-i-zagotovok",
              "title": "Производство металлических изделий и заготовок",
              "id_parent": 327,
              "key": 602
          },
          {
              "title_rus": "Производство стройматериалов",
              "url_rus": "proizvodstvo-strojmaterialov",
              "title": "Производство стройматериалов",
              "id_parent": 327,
              "key": 343
          },
          {
              "title_rus": "Производство товаров народного потребления",
              "url_rus": "proizvodstvo-tovarov-narodnogo-potrebleniya",
              "title": "Производство товаров народного потребления",
              "id_parent": 327,
              "key": 345
          },
          {
              "title_rus": "Промышленная безопасность",
              "url_rus": "promyshlennaya-bezopasnost",
              "title": "Промышленная безопасность",
              "id_parent": 327,
              "key": 642
          },
          {
              "title_rus": "Промышленное оборудование",
              "url_rus": "promyshlennoe-oborudovanie",
              "title": "Промышленное оборудование",
              "id_parent": 327,
              "key": 346
          },
          {
              "title_rus": "Радиотехническая и электронная промышленность",
              "url_rus": "radiotehnicheskaya-i-elektronnaya-promyshlennost",
              "title": "Радиотехническая и электронная промышленность",
              "id_parent": 327,
              "key": 347
          },
          {
              "title_rus": "Ракетно-космическая отрасль",
              "url_rus": "raketno-kosmicheskaya-otrasl",
              "title": "Ракетно-космическая отрасль",
              "id_parent": 327,
              "key": 348
          },
          {
              "title_rus": "Робототехника",
              "url_rus": "robototehnika",
              "title": "Робототехника",
              "id_parent": 327,
              "key": 351
          },
          {
              "title_rus": "Сельскохозяйственная техника",
              "url_rus": "selskohozyajstvennaya-tehnika",
              "title": "Сельскохозяйственная техника",
              "id_parent": 327,
              "key": 350
          },
          {
              "title_rus": "Стекольная и фарфоро-фаянсовая промышленность",
              "url_rus": "stekol-naja-i-farforo-fajansovaja-promyshlennost",
              "title": "Стекольная и фарфоро-фаянсовая промышленность",
              "id_parent": 327,
              "key": 601
          },
          {
              "title_rus": "Судостроение",
              "url_rus": "sudostroenie",
              "title": "Судостроение",
              "id_parent": 327,
              "key": 352
          },
          {
              "title_rus": "Фармацевтическая промышленность",
              "url_rus": "farmacevticheskaya-promyshlennost",
              "title": "Фармацевтическая промышленность",
              "id_parent": 327,
              "key": 643
          },
          {
              "title_rus": "Химическая промышленность",
              "url_rus": "himicheskaya-promyshlennost",
              "title": "Химическая промышленность",
              "id_parent": 327,
              "key": 353
          },
          {
              "title_rus": "Химическое машиностроение",
              "url_rus": "himicheskoe-mashinostroenie",
              "title": "Химическое машиностроение",
              "id_parent": 327,
              "key": 354
          },
          {
              "title_rus": "Экология",
              "url_rus": "ekologiya",
              "title": "Экология",
              "id_parent": 327,
              "key": 359
          },
          {
              "title_rus": "Энергетика",
              "url_rus": "energetika",
              "title": "Энергетика",
              "id_parent": 327,
              "key": 355
          },
          {
              "title_rus": "Энергомашиностроение",
              "url_rus": "energomashinostroenie",
              "title": "Энергомашиностроение",
              "id_parent": 327,
              "key": 356
          },
          {
              "title_rus": "Ювелирная промышленность",
              "url_rus": "yuvelirnaya-promyshlennost",
              "title": "Ювелирная промышленность",
              "id_parent": 327,
              "key": 357
          },
          {
              "title_rus": "Другое",
              "url_rus": "drugoe",
              "title": "Другое",
              "id_parent": 327,
              "key": 360
          },
          {
              "title_rus": "Начало карьеры, мало опыта",
              "url_rus": "nachalo-karery-malo-opyta",
              "title": "Начало карьеры, мало опыта",
              "id_parent": 327,
              "key": 361
          }
      ]
  },
  {
      "title_rus": "Рабочий персонал",
      "url_rus": "rabochii-personal",
      "title": "Рабочий персонал",
      "title_trimmed": "Рабочий персонал",
      "key": 505,
      "positions": [
          {
              "title_rus": "Бригада",
              "url_rus": "brigada",
              "title": "Бригада",
              "id_parent": 505,
              "key": 547
          },
          {
              "title_rus": "Квалифицированный рабочий",
              "url_rus": "kvalificirovannyj-rabochij",
              "title": "Квалифицированный рабочий",
              "id_parent": 505,
              "key": 600
          },
          {
              "title_rus": "Рабочий персонал, разное",
              "url_rus": "rabochie-specialnosti-raznoe",
              "title": "Рабочий персонал, разное",
              "id_parent": 505,
              "key": 504
          }
      ]
  },
  {
      "title_rus": "Сельское хозяйство",
      "url_rus": "selskoe-hozyaistvo",
      "title": "Сельское хозяйство",
      "title_trimmed": "Сельское хозяйство",
      "key": 548,
      "positions": [
          {
              "title_rus": "Животноводство",
              "url_rus": "zhivotnovodstvo",
              "title": "Животноводство",
              "id_parent": 548,
              "key": 333
          },
          {
              "title_rus": "Птицеводство",
              "url_rus": "pticevodstvo",
              "title": "Птицеводство",
              "id_parent": 548,
              "key": 615
          },
          {
              "title_rus": "Пчеловодство",
              "url_rus": "pchelovodstvo",
              "title": "Пчеловодство",
              "id_parent": 548,
              "key": 644
          },
          {
              "title_rus": "Растениеводство",
              "url_rus": "rastenievodstvo",
              "title": "Растениеводство",
              "id_parent": 548,
              "key": 331
          },
          {
              "title_rus": "Рыбоводство",
              "url_rus": "rybovodstvo",
              "title": "Рыбоводство",
              "id_parent": 548,
              "key": 616
          },
          {
              "title_rus": "Другое",
              "url_rus": "drugoe",
              "title": "Другое",
              "id_parent": 548,
              "key": 551
          },
          {
              "title_rus": "Начало карьеры, мало опыта",
              "url_rus": "nachalo-karery-malo-opyta",
              "title": "Начало карьеры, мало опыта",
              "id_parent": 548,
              "key": 552
          }
      ]
  },
  {
      "title_rus": "Службы доставки",
      "url_rus": "sluzhby-dostavki",
      "title": "Службы доставки",
      "title_trimmed": "Службы доставки",
      "key": 622,
      "positions": [
          {
              "title_rus": "Комплектация заказов",
              "url_rus": "komplektaciya-zakazov",
              "title": "Комплектация заказов",
              "id_parent": 622,
              "key": 623
          },
          {
              "title_rus": "Курьерская доставка",
              "url_rus": "kurerskaya-dostavka",
              "title": "Курьерская доставка",
              "id_parent": 622,
              "key": 6
          },
          {
              "title_rus": "Пункты выдачи заказов",
              "url_rus": "punkty-vydachi-zakazov",
              "title": "Пункты выдачи заказов",
              "id_parent": 622,
              "key": 645
          }
      ]
  },
  {
      "title_rus": "СМИ, издательства",
      "url_rus": "smi-izdatelstva",
      "title": "СМИ, издательства",
      "title_trimmed": "СМИ, издательства",
      "key": 222,
      "positions": [
          {
              "title_rus": "Журналистика",
              "url_rus": "zhurnalistika",
              "title": "Журналистика",
              "id_parent": 222,
              "key": 226
          },
          {
              "title_rus": "Издательская деятельность",
              "url_rus": "izdatelskaya-deyatelnost",
              "title": "Издательская деятельность",
              "id_parent": 222,
              "key": 224
          },
          {
              "title_rus": "Интернет издания",
              "url_rus": "internet-izdaniya",
              "title": "Интернет издания",
              "id_parent": 222,
              "key": 225
          },
          {
              "title_rus": "Литературные переводы",
              "url_rus": "literaturnye-perevody",
              "title": "Литературные переводы",
              "id_parent": 222,
              "key": 227
          },
          {
              "title_rus": "Печатные издания",
              "url_rus": "pechatnye-izdaniya",
              "title": "Печатные издания",
              "id_parent": 222,
              "key": 223
          },
          {
              "title_rus": "Радио",
              "url_rus": "radio",
              "title": "Радио",
              "id_parent": 222,
              "key": 229
          },
          {
              "title_rus": "Редактура, корректура",
              "url_rus": "redaktura-korrektura",
              "title": "Редактура, корректура",
              "id_parent": 222,
              "key": 230
          },
          {
              "title_rus": "Телевидение",
              "url_rus": "televidenie",
              "title": "Телевидение",
              "id_parent": 222,
              "key": 231
          },
          {
              "title_rus": "Другое",
              "url_rus": "drugoe",
              "title": "Другое",
              "id_parent": 222,
              "key": 232
          },
          {
              "title_rus": "Начало карьеры, мало опыта",
              "url_rus": "nachalo-karery-malo-opyta",
              "title": "Начало карьеры, мало опыта",
              "id_parent": 222,
              "key": 233
          }
      ]
  },
  {
      "title_rus": "Спорт, фитнес, салоны красоты, SPA",
      "url_rus": "sport-fitnes-salony-krasoty-spa",
      "title": "Спорт, фитнес, салоны красоты, SPA",
      "title_trimmed": "Спорт, фитнес, салоны...",
      "key": 260,
      "positions": [
          {
              "title_rus": "Косметология",
              "url_rus": "kosmetologiya",
              "title": "Косметология",
              "id_parent": 260,
              "key": 261
          },
          {
              "title_rus": "Маникюр, педикюр",
              "url_rus": "manikyur-pedikyur",
              "title": "Маникюр, педикюр",
              "id_parent": 260,
              "key": 262
          },
          {
              "title_rus": "Массаж",
              "url_rus": "massazh",
              "title": "Массаж",
              "id_parent": 260,
              "key": 263
          },
          {
              "title_rus": "Парикмахерское дело",
              "url_rus": "parikmaherskoe-delo",
              "title": "Парикмахерское дело",
              "id_parent": 260,
              "key": 264
          },
          {
              "title_rus": "Салоны красоты / SPA",
              "url_rus": "salony-krasoty",
              "title": "Салоны красоты / SPA",
              "id_parent": 260,
              "key": 269
          },
          {
              "title_rus": "Стилистика, визаж",
              "url_rus": "stilistika-vizazh",
              "title": "Стилистика, визаж",
              "id_parent": 260,
              "key": 265
          },
          {
              "title_rus": "Тренерская работа, инструктаж",
              "url_rus": "trenerskaya-rabota-instruktazh",
              "title": "Тренерская работа, инструктаж",
              "id_parent": 260,
              "key": 266
          },
          {
              "title_rus": "Фитнес-клубы / Спортзалы",
              "url_rus": "fitnes-kluby",
              "title": "Фитнес-клубы / Спортзалы",
              "id_parent": 260,
              "key": 646
          },
          {
              "title_rus": "Другое",
              "url_rus": "drugoe",
              "title": "Другое",
              "id_parent": 260,
              "key": 267
          },
          {
              "title_rus": "Начало карьеры, мало опыта",
              "url_rus": "nachalo-karery-malo-opyta",
              "title": "Начало карьеры, мало опыта",
              "id_parent": 260,
              "key": 268
          }
      ]
  },
  {
      "title_rus": "Страхование",
      "url_rus": "strahovanie",
      "title": "Страхование",
      "title_trimmed": "Страхование",
      "key": 284,
      "positions": [
          {
              "title_rus": "Автострахование",
              "url_rus": "avtostrahovanie",
              "title": "Автострахование",
              "id_parent": 284,
              "key": 285
          },
          {
              "title_rus": "Актуарная деятельность",
              "url_rus": "aktuarnaya-deyatelnost",
              "title": "Актуарная деятельность",
              "id_parent": 284,
              "key": 286
          },
          {
              "title_rus": "Андеррайтинг",
              "url_rus": "anderrajting",
              "title": "Андеррайтинг",
              "id_parent": 284,
              "key": 287
          },
          {
              "title_rus": "Медицинское страхование",
              "url_rus": "medicinskoe-strahovanie",
              "title": "Медицинское страхование",
              "id_parent": 284,
              "key": 288
          },
          {
              "title_rus": "Перестрахование",
              "url_rus": "perestrahovanie",
              "title": "Перестрахование",
              "id_parent": 284,
              "key": 289
          },
          {
              "title_rus": "Страхование бизнеса",
              "url_rus": "strahovanie-biznesa",
              "title": "Страхование бизнеса",
              "id_parent": 284,
              "key": 290
          },
          {
              "title_rus": "Страхование грузов",
              "url_rus": "strahovanie-gruzov",
              "title": "Страхование грузов",
              "id_parent": 284,
              "key": 291
          },
          {
              "title_rus": "Страхование жизни",
              "url_rus": "strahovanie-zhizni",
              "title": "Страхование жизни",
              "id_parent": 284,
              "key": 292
          },
          {
              "title_rus": "Страхование имущества",
              "url_rus": "strahovanie-imuschestva",
              "title": "Страхование имущества",
              "id_parent": 284,
              "key": 293
          },
          {
              "title_rus": "Страхование коммерческих и финансовых рисков",
              "url_rus": "strahovanie-kommercheskih-i-finansovyh-riskov",
              "title": "Страхование коммерческих и финансовых рисков",
              "id_parent": 284,
              "key": 294
          },
          {
              "title_rus": "Страхование наружной рекламы",
              "url_rus": "strahovanie-naruzhnoj-reklamy",
              "title": "Страхование наружной рекламы",
              "id_parent": 284,
              "key": 295
          },
          {
              "title_rus": "Страхование недвижимости, ипотечное страхование",
              "url_rus": "strahovanie-nedvizhimosti-ipotechnoe-strahovanie",
              "title": "Страхование недвижимости, ипотечное страхование",
              "id_parent": 284,
              "key": 296
          },
          {
              "title_rus": "Страхование ответственности",
              "url_rus": "strahovanie-otvetstvennosti",
              "title": "Страхование ответственности",
              "id_parent": 284,
              "key": 297
          },
          {
              "title_rus": "Страхование строительно-монтажных работ",
              "url_rus": "strahovanie-stroitelno-montazhnyh-rabot",
              "title": "Страхование строительно-монтажных работ",
              "id_parent": 284,
              "key": 298
          },
          {
              "title_rus": "Страхование туристов",
              "url_rus": "strahovanie-turistov",
              "title": "Страхование туристов",
              "id_parent": 284,
              "key": 299
          },
          {
              "title_rus": "Страхование физических лиц",
              "url_rus": "strahovanie-fizicheskih-lic",
              "title": "Страхование физических лиц",
              "id_parent": 284,
              "key": 300
          },
          {
              "title_rus": "Страхование юридических лиц",
              "url_rus": "strahovanie-yuridicheskih-lic",
              "title": "Страхование юридических лиц",
              "id_parent": 284,
              "key": 301
          },
          {
              "title_rus": "Страховой анализ, оценка",
              "url_rus": "strahovoj-analiz-ocenka",
              "title": "Страховой анализ, оценка",
              "id_parent": 284,
              "key": 302
          },
          {
              "title_rus": "Урегулирование убытков",
              "url_rus": "uregulirovanie-ubytkov",
              "title": "Урегулирование убытков",
              "id_parent": 284,
              "key": 303
          },
          {
              "title_rus": "Другое",
              "url_rus": "drugoe",
              "title": "Другое",
              "id_parent": 284,
              "key": 304
          },
          {
              "title_rus": "Начало карьеры, мало опыта",
              "url_rus": "nachalo-karery-malo-opyta",
              "title": "Начало карьеры, мало опыта",
              "id_parent": 284,
              "key": 305
          }
      ]
  },
  {
      "title_rus": "Строительство, проектирование, недвижимость",
      "url_rus": "stroitelstvo-proektirovanie-nedvizhimost",
      "title": "Строительство, проектирование, недвижимость",
      "title_trimmed": "Строительство,...",
      "key": 306,
      "positions": [
          {
              "title_rus": "Архитектура",
              "url_rus": "arhitektura",
              "title": "Архитектура",
              "id_parent": 306,
              "key": 307
          },
          {
              "title_rus": "Благоустройство территорий",
              "url_rus": "blagoustrojstvo-territorij",
              "title": "Благоустройство территорий",
              "id_parent": 306,
              "key": 309
          },
          {
              "title_rus": "Водоснабжение, канализация",
              "url_rus": "vodosnabzhenie-kanalizaciya",
              "title": "Водоснабжение, канализация",
              "id_parent": 306,
              "key": 311
          },
          {
              "title_rus": "Газоснабжение",
              "url_rus": "gazosnabjenie",
              "title": "Газоснабжение",
              "id_parent": 306,
              "key": 553
          },
          {
              "title_rus": "Геодезия, картография, землеустроительство",
              "url_rus": "geodeziya-kartografiya-zemleustroitelstvo",
              "title": "Геодезия, картография, землеустроительство",
              "id_parent": 306,
              "key": 312
          },
          {
              "title_rus": "ЖКХ",
              "url_rus": "zhkh",
              "title": "ЖКХ",
              "id_parent": 306,
              "key": 313
          },
          {
              "title_rus": "Конструирование",
              "url_rus": "konstruirovanie",
              "title": "Конструирование",
              "id_parent": 306,
              "key": 314
          },
          {
              "title_rus": "Отделочные работы",
              "url_rus": "otdelochnye-raboty",
              "title": "Отделочные работы",
              "id_parent": 306,
              "key": 648
          },
          {
              "title_rus": "Отопление, вентиляция и кондиционирование",
              "url_rus": "otoplenie-ventilyaciya-kondicionirovanie",
              "title": "Отопление, вентиляция и кондиционирование",
              "id_parent": 306,
              "key": 310
          },
          {
              "title_rus": "Подводно-технические работы",
              "url_rus": "podvodno-tehnicheskie-raboty",
              "title": "Подводно-технические работы",
              "id_parent": 306,
              "key": 316
          },
          {
              "title_rus": "Проектирование",
              "url_rus": "proektirovanie",
              "title": "Проектирование",
              "id_parent": 306,
              "key": 317
          },
          {
              "title_rus": "Разработка генерального плана",
              "url_rus": "razrabotka-generalnogo-plana",
              "title": "Разработка генерального плана",
              "id_parent": 306,
              "key": 509
          },
          {
              "title_rus": "Слаботочные системы и сети",
              "url_rus": "slabotochnye-sistemy-i-seti",
              "title": "Слаботочные системы и сети",
              "id_parent": 306,
              "key": 506
          },
          {
              "title_rus": "Сметное дело",
              "url_rus": "smetnoe-delo",
              "title": "Сметное дело",
              "id_parent": 306,
              "key": 318
          },
          {
              "title_rus": "Строительно-монтажные работы",
              "url_rus": "stroitelno-montazhnye-raboty",
              "title": "Строительно-монтажные работы",
              "id_parent": 306,
              "key": 319
          },
          {
              "title_rus": "Строительство деревянных домов и конструкций",
              "url_rus": "stroitelstvo-derevyannyh-domov-i-konstrukcij",
              "title": "Строительство деревянных домов и конструкций",
              "id_parent": 306,
              "key": 647
          },
          {
              "title_rus": "Технический надзор, строительная экспертиза / ПТО",
              "url_rus": "tehnicheskij-nadzor",
              "title": "Технический надзор, строительная экспертиза / ПТО",
              "id_parent": 306,
              "key": 320
          },
          {
              "title_rus": "Транспортные системы (мосты, дороги, тоннели)",
              "url_rus": "transportnie-sistemi",
              "title": "Транспортные системы (мосты, дороги, тоннели)",
              "id_parent": 306,
              "key": 508
          },
          {
              "title_rus": "Трубопроводы",
              "url_rus": "truboprovody",
              "title": "Трубопроводы",
              "id_parent": 306,
              "key": 507
          },
          {
              "title_rus": "Управление недвижимостью",
              "url_rus": "upravlenie-nedvizhimostyu",
              "title": "Управление недвижимостью",
              "id_parent": 306,
              "key": 321
          },
          {
              "title_rus": "Управление проектами (ГИП)",
              "url_rus": "upravlenie-proektami",
              "title": "Управление проектами (ГИП)",
              "id_parent": 306,
              "key": 511
          },
          {
              "title_rus": "Управление строительством, девелопмент",
              "url_rus": "upravlenie-stroitelstvom-development",
              "title": "Управление строительством, девелопмент",
              "id_parent": 306,
              "key": 322
          },
          {
              "title_rus": "Экологическое сопровождение проектов",
              "url_rus": "ekologicheskoe-soprovozhdenie-proektov",
              "title": "Экологическое сопровождение проектов",
              "id_parent": 306,
              "key": 510
          },
          {
              "title_rus": "Эксплуатация зданий",
              "url_rus": "ekspluataciya-zdanij",
              "title": "Эксплуатация зданий",
              "id_parent": 306,
              "key": 323
          },
          {
              "title_rus": "Электроснабжение",
              "url_rus": "elektrika-elektrosnabzhenie",
              "title": "Электроснабжение",
              "id_parent": 306,
              "key": 324
          },
          {
              "title_rus": "Другое",
              "url_rus": "drugoe",
              "title": "Другое",
              "id_parent": 306,
              "key": 325
          },
          {
              "title_rus": "Начало карьеры, мало опыта",
              "url_rus": "nachalo-karery-malo-opyta",
              "title": "Начало карьеры, мало опыта",
              "id_parent": 306,
              "key": 326
          }
      ]
  },
  {
      "title_rus": "Сырье",
      "url_rus": "syre",
      "title": "Сырье",
      "title_trimmed": "Сырье",
      "key": 414,
      "positions": [
          {
              "title_rus": "Газ",
              "url_rus": "gaz",
              "title": "Газ",
              "id_parent": 414,
              "key": 415
          },
          {
              "title_rus": "Добыча",
              "url_rus": "dobycha",
              "title": "Добыча",
              "id_parent": 414,
              "key": 416
          },
          {
              "title_rus": "Металлы",
              "url_rus": "metally",
              "title": "Металлы",
              "id_parent": 414,
              "key": 417
          },
          {
              "title_rus": "Нефть",
              "url_rus": "neft",
              "title": "Нефть",
              "id_parent": 414,
              "key": 418
          },
          {
              "title_rus": "Оборудование",
              "url_rus": "oborudovanie",
              "title": "Оборудование",
              "id_parent": 414,
              "key": 419
          },
          {
              "title_rus": "Переработка",
              "url_rus": "pererabotka",
              "title": "Переработка",
              "id_parent": 414,
              "key": 420
          },
          {
              "title_rus": "Разведка и разработка месторождений",
              "url_rus": "razvedka-i-razrabotka-mestorozhdenij",
              "title": "Разведка и разработка месторождений",
              "id_parent": 414,
              "key": 421
          },
          {
              "title_rus": "Технологии",
              "url_rus": "tehnologii",
              "title": "Технологии",
              "id_parent": 414,
              "key": 422
          },
          {
              "title_rus": "Уголь",
              "url_rus": "ugol",
              "title": "Уголь",
              "id_parent": 414,
              "key": 423
          },
          {
              "title_rus": "Другое",
              "url_rus": "drugoe",
              "title": "Другое",
              "id_parent": 414,
              "key": 424
          },
          {
              "title_rus": "Начало карьеры, мало опыта",
              "url_rus": "nachalo-karery-malo-opyta",
              "title": "Начало карьеры, мало опыта",
              "id_parent": 414,
              "key": 425
          }
      ]
  },
  {
      "title_rus": "Топ-персонал",
      "url_rus": "top-personal",
      "title": "Топ-персонал",
      "title_trimmed": "Топ-персонал",
      "key": 478,
      "positions": [
          {
              "title_rus": "IT, Интернет, связь, телеком",
              "url_rus": "it-internet-svyaz-telekom",
              "title": "IT, Интернет, связь, телеком",
              "id_parent": 478,
              "key": 481
          },
          {
              "title_rus": "Административная работа, секретариат, АХО",
              "url_rus": "administrativnaya-rabota-sekretariat-aho",
              "title": "Административная работа, секретариат, АХО",
              "id_parent": 478,
              "key": 479
          },
          {
              "title_rus": "Банки, инвестиции, лизинг",
              "url_rus": "banki-investicii-lizing",
              "title": "Банки, инвестиции, лизинг",
              "id_parent": 478,
              "key": 499
          },
          {
              "title_rus": "Безопасность, службы охраны",
              "url_rus": "bezopasnost-sluzhby-ohrany",
              "title": "Безопасность, службы охраны",
              "id_parent": 478,
              "key": 488
          },
          {
              "title_rus": "Бухгалтерия, финансы, аудит",
              "url_rus": "buhgalteriya-finansy-audit",
              "title": "Бухгалтерия, финансы, аудит",
              "id_parent": 478,
              "key": 480
          },
          {
              "title_rus": "Государственная служба, некоммерческие организации",
              "url_rus": "gosudarstvennaya-sluzhba-nekommercheskie-organizacii",
              "title": "Государственная служба, некоммерческие организации",
              "id_parent": 478,
              "key": 487
          },
          {
              "title_rus": "Дизайн",
              "url_rus": "dizajn",
              "title": "Дизайн",
              "id_parent": 478,
              "key": 482
          },
          {
              "title_rus": "Закупки, снабжение",
              "url_rus": "zakupki-snabzhenie",
              "title": "Закупки, снабжение",
              "id_parent": 478,
              "key": 513
          },
          {
              "title_rus": "Искусство, культура, развлечения",
              "url_rus": "iskusstvo-kultura-razvlecheniya",
              "title": "Искусство, культура, развлечения",
              "id_parent": 478,
              "key": 490
          },
          {
              "title_rus": "Кадры, управление персоналом",
              "url_rus": "kadry-upravlenie-personalom",
              "title": "Кадры, управление персоналом",
              "id_parent": 478,
              "key": 483
          },
          {
              "title_rus": "Консалтинг, стратегическое развитие",
              "url_rus": "konsalting-strategicheskoe-razvitie",
              "title": "Консалтинг, стратегическое развитие",
              "id_parent": 478,
              "key": 501
          },
          {
              "title_rus": "Маркетинг, реклама, PR",
              "url_rus": "marketing-reklama-pr",
              "title": "Маркетинг, реклама, PR",
              "id_parent": 478,
              "key": 492
          },
          {
              "title_rus": "Медицина, фармацевтика, ветеринария",
              "url_rus": "medicina-farmacevtika-veterinariya",
              "title": "Медицина, фармацевтика, ветеринария",
              "id_parent": 478,
              "key": 486
          },
          {
              "title_rus": "Наука, образование, повышение квалификации",
              "url_rus": "nauka-obrazovanie-povyshenie-kvalifikacii",
              "title": "Наука, образование, повышение квалификации",
              "id_parent": 478,
              "key": 494
          },
          {
              "title_rus": "Продажи",
              "url_rus": "prodazhi",
              "title": "Продажи",
              "id_parent": 478,
              "key": 502
          },
          {
              "title_rus": "Промышленность, производство, сельское хозяйство",
              "url_rus": "promyshlennost-proizvodstvo-selskoe-hozyajstvo",
              "title": "Промышленность, производство, сельское хозяйство",
              "id_parent": 478,
              "key": 497
          },
          {
              "title_rus": "СМИ, издательство, полиграфия",
              "url_rus": "smi-izdatelstvo-poligrafiya",
              "title": "СМИ, издательство, полиграфия",
              "id_parent": 478,
              "key": 491
          },
          {
              "title_rus": "Спорт, фитнес, салоны красоты, SPA",
              "url_rus": "sport-fitnes-salony-krasoty-spa",
              "title": "Спорт, фитнес, салоны красоты, SPA",
              "id_parent": 478,
              "key": 493
          },
          {
              "title_rus": "Страхование",
              "url_rus": "strahovanie",
              "title": "Страхование",
              "id_parent": 478,
              "key": 495
          },
          {
              "title_rus": "Строительство, проектирование, недвижимость",
              "url_rus": "stroitelstvo-proektirovanie-nedvizhimost",
              "title": "Строительство, проектирование, недвижимость",
              "id_parent": 478,
              "key": 496
          },
          {
              "title_rus": "Сырье",
              "url_rus": "syre",
              "title": "Сырье",
              "id_parent": 478,
              "key": 500
          },
          {
              "title_rus": "Транспорт, логистика, ВЭД",
              "url_rus": "transport-logistika-ved",
              "title": "Транспорт, логистика, ВЭД",
              "id_parent": 478,
              "key": 484
          },
          {
              "title_rus": "Туризм, гостиницы, общественное питание",
              "url_rus": "turizm-gostinicy-obschestvennoe-pitanie",
              "title": "Туризм, гостиницы, общественное питание",
              "id_parent": 478,
              "key": 489
          },
          {
              "title_rus": "Услуги, ремонт, сервисное обслуживание",
              "url_rus": "uslugi-remont-servisnoe-obsluzhivanie",
              "title": "Услуги, ремонт, сервисное обслуживание",
              "id_parent": 478,
              "key": 498
          },
          {
              "title_rus": "Юриспруденция",
              "url_rus": "yurisprudenciya",
              "title": "Юриспруденция",
              "id_parent": 478,
              "key": 485
          }
      ]
  },
  {
      "title_rus": "Транспорт, логистика, ВЭД",
      "url_rus": "transport-logistika-ved",
      "title": "Транспорт, логистика, ВЭД",
      "title_trimmed": "Транспорт, логистика, ВЭД",
      "key": 86,
      "positions": [
          {
              "title_rus": "Авиаперевозки",
              "url_rus": "aviaperevozki",
              "title": "Авиаперевозки",
              "id_parent": 86,
              "key": 87
          },
          {
              "title_rus": "Автоперевозки",
              "url_rus": "avtoperevozki",
              "title": "Автоперевозки",
              "id_parent": 86,
              "key": 88
          },
          {
              "title_rus": "ВЭД",
              "url_rus": "ved",
              "title": "ВЭД",
              "id_parent": 86,
              "key": 89
          },
          {
              "title_rus": "Железнодорожные перевозки",
              "url_rus": "zheleznodorozhnye-perevozki",
              "title": "Железнодорожные перевозки",
              "id_parent": 86,
              "key": 90
          },
          {
              "title_rus": "Контейнерные перевозки",
              "url_rus": "kontejnernye-perevozki",
              "title": "Контейнерные перевозки",
              "id_parent": 86,
              "key": 91
          },
          {
              "title_rus": "Логистика",
              "url_rus": "logistika",
              "title": "Логистика",
              "id_parent": 86,
              "key": 92
          },
          {
              "title_rus": "Метрополитен",
              "url_rus": "metropoliten",
              "title": "Метрополитен",
              "id_parent": 86,
              "key": 93
          },
          {
              "title_rus": "Морские, речные перевозки",
              "url_rus": "morskie-rechnye-perevozki",
              "title": "Морские, речные перевозки",
              "id_parent": 86,
              "key": 94
          },
          {
              "title_rus": "Складское хозяйство",
              "url_rus": "skladskoe-hozyajstvo",
              "title": "Складское хозяйство",
              "id_parent": 86,
              "key": 95
          },
          {
              "title_rus": "Такси",
              "url_rus": "taxi",
              "title": "Такси",
              "id_parent": 86,
              "key": 624
          },
          {
              "title_rus": "Таможня",
              "url_rus": "tamozhnya",
              "title": "Таможня",
              "id_parent": 86,
              "key": 96
          },
          {
              "title_rus": "Трубопроводы",
              "url_rus": "truboprovody",
              "title": "Трубопроводы",
              "id_parent": 86,
              "key": 97
          },
          {
              "title_rus": "Другое",
              "url_rus": "drugoe",
              "title": "Другое",
              "id_parent": 86,
              "key": 98
          },
          {
              "title_rus": "Начало карьеры, мало опыта",
              "url_rus": "nachalo-karery-malo-opyta",
              "title": "Начало карьеры, мало опыта",
              "id_parent": 86,
              "key": 99
          }
      ]
  },
  {
      "title_rus": "Туризм, гостиницы, общественное питание",
      "url_rus": "turizm-gostinicy-obschestvennoe-pitanie",
      "title": "Туризм, гостиницы, общественное питание",
      "title_trimmed": "Туризм, гостиницы,...",
      "key": 197,
      "positions": [
          {
              "title_rus": "HORECA",
              "url_rus": "horeca",
              "title": "HORECA",
              "id_parent": 197,
              "key": 198
          },
          {
              "title_rus": "Гостиницы, отели, кемпинги, мотели",
              "url_rus": "gostinicy-oteli-kempingi-moteli",
              "title": "Гостиницы, отели, кемпинги, мотели",
              "id_parent": 197,
              "key": 199
          },
          {
              "title_rus": "Кейтеринг",
              "url_rus": "kejtering",
              "title": "Кейтеринг",
              "id_parent": 197,
              "key": 200
          },
          {
              "title_rus": "Рестораны, кафе, столовые, фастфуд",
              "url_rus": "restorany-kafe-stolovye-fastfud",
              "title": "Рестораны, кафе, столовые, фастфуд",
              "id_parent": 197,
              "key": 201
          },
          {
              "title_rus": "Туристические услуги и продукты",
              "url_rus": "turisticheskie-uslugi-i-produkty",
              "title": "Туристические услуги и продукты",
              "id_parent": 197,
              "key": 202
          },
          {
              "title_rus": "Другое",
              "url_rus": "drugoe",
              "title": "Другое",
              "id_parent": 197,
              "key": 203
          },
          {
              "title_rus": "Начало карьеры, мало опыта",
              "url_rus": "nachalo-karery-malo-opyta",
              "title": "Начало карьеры, мало опыта",
              "id_parent": 197,
              "key": 204
          }
      ]
  },
  {
      "title_rus": "Услуги, ремонт, сервисное обслуживание",
      "url_rus": "uslugi-remont-servisnoe-obsluzhivanie",
      "title": "Услуги, ремонт, сервисное обслуживание",
      "title_trimmed": "Услуги, ремонт,...",
      "key": 362,
      "positions": [
          {
              "title_rus": "Автосервис",
              "url_rus": "avtoservis",
              "title": "Автосервис",
              "id_parent": 362,
              "key": 363
          },
          {
              "title_rus": "Ателье",
              "url_rus": "atele",
              "title": "Ателье",
              "id_parent": 362,
              "key": 364
          },
          {
              "title_rus": "Бани",
              "url_rus": "bani",
              "title": "Бани",
              "id_parent": 362,
              "key": 365
          },
          {
              "title_rus": "Бытовая техника",
              "url_rus": "bytovaya-tehnika",
              "title": "Бытовая техника",
              "id_parent": 362,
              "key": 374
          },
          {
              "title_rus": "Клининг",
              "url_rus": "klining",
              "title": "Клининг",
              "id_parent": 362,
              "key": 367
          },
          {
              "title_rus": "Компьютеры и оргтехника",
              "url_rus": "kompyutery-i-orgtehnika",
              "title": "Компьютеры и оргтехника",
              "id_parent": 362,
              "key": 375
          },
          {
              "title_rus": "Медицинская техника",
              "url_rus": "medicinskaya-tehnika",
              "title": "Медицинская техника",
              "id_parent": 362,
              "key": 371
          },
          {
              "title_rus": "Металлоремонт",
              "url_rus": "metalloremont",
              "title": "Металлоремонт",
              "id_parent": 362,
              "key": 366
          },
          {
              "title_rus": "Оборудование для индустрии развлечения и спортивного инвентаря",
              "url_rus": "oborudovanie-dlya-industrii-razvlecheniya-i-sportivnogo-inventarya",
              "title": "Оборудование для индустрии развлечения и спортивного инвентаря",
              "id_parent": 362,
              "key": 369
          },
          {
              "title_rus": "Обувь",
              "url_rus": "obuv",
              "title": "Обувь",
              "id_parent": 362,
              "key": 368
          },
          {
              "title_rus": "Промышленное оборудование",
              "url_rus": "promyshlennoe-oborudovanie",
              "title": "Промышленное оборудование",
              "id_parent": 362,
              "key": 372
          },
          {
              "title_rus": "Психологическое консультирование",
              "url_rus": "psihologicheskoe-konsultirovanie",
              "title": "Психологическое консультирование",
              "id_parent": 362,
              "key": 649
          },
          {
              "title_rus": "Ритуальные услуги",
              "url_rus": "ritualnye-uslugi",
              "title": "Ритуальные услуги",
              "id_parent": 362,
              "key": 376
          },
          {
              "title_rus": "Телекоммуникационное оборудование и сети",
              "url_rus": "telekommunikacionnoe-oborudovanie-i-seti",
              "title": "Телекоммуникационное оборудование и сети",
              "id_parent": 362,
              "key": 370
          },
          {
              "title_rus": "Торговое, складское, холодильное оборудование",
              "url_rus": "torgovoe-skladskoe-holodilnoe-oborudovanie",
              "title": "Торговое, складское, холодильное оборудование",
              "id_parent": 362,
              "key": 373
          },
          {
              "title_rus": "Фото, аудио, видео услуги",
              "url_rus": "foto-audio-video-uslugi",
              "title": "Фото, аудио, видео услуги",
              "id_parent": 362,
              "key": 377
          },
          {
              "title_rus": "Химчистки, прачечные",
              "url_rus": "himchistki-prachechnye",
              "title": "Химчистки, прачечные",
              "id_parent": 362,
              "key": 378
          },
          {
              "title_rus": "Другое",
              "url_rus": "drugoe",
              "title": "Другое",
              "id_parent": 362,
              "key": 379
          },
          {
              "title_rus": "Начало карьеры, мало опыта",
              "url_rus": "nachalo-karery-malo-opyta",
              "title": "Начало карьеры, мало опыта",
              "id_parent": 362,
              "key": 380
          }
      ]
  },
  {
      "title_rus": "Юриспруденция",
      "url_rus": "yurisprudenciya",
      "title": "Юриспруденция",
      "title_trimmed": "Юриспруденция",
      "key": 100,
      "positions": [
          {
              "title_rus": "Compliance (нормативное право, соблюдение закона )",
              "url_rus": "compliance-normativnoe-pravo-soblyudenie-zakona",
              "title": "Compliance (нормативное право, соблюдение закона )",
              "id_parent": 100,
              "key": 101
          },
          {
              "title_rus": "Авторское право, патентное право",
              "url_rus": "avtorskoe-pravo-patentnoe-pravo",
              "title": "Авторское право, патентное право",
              "id_parent": 100,
              "key": 102
          },
          {
              "title_rus": "Адвокатские услуги",
              "url_rus": "advokatskie-uslugi",
              "title": "Адвокатские услуги",
              "id_parent": 100,
              "key": 103
          },
          {
              "title_rus": "Антимонопольное право",
              "url_rus": "antimonopolnoe-pravo",
              "title": "Антимонопольное право",
              "id_parent": 100,
              "key": 104
          },
          {
              "title_rus": "Арбитраж",
              "url_rus": "arbitrazh",
              "title": "Арбитраж",
              "id_parent": 100,
              "key": 105
          },
          {
              "title_rus": "Банковское право",
              "url_rus": "bankovskoe-pravo",
              "title": "Банковское право",
              "id_parent": 100,
              "key": 106
          },
          {
              "title_rus": "Военное право",
              "url_rus": "voennoe-pravo",
              "title": "Военное право",
              "id_parent": 100,
              "key": 107
          },
          {
              "title_rus": "Гражданское право",
              "url_rus": "grazhdanskoe-pravo",
              "title": "Гражданское право",
              "id_parent": 100,
              "key": 108
          },
          {
              "title_rus": "Договорное право",
              "url_rus": "dogovornoe-pravo",
              "title": "Договорное право",
              "id_parent": 100,
              "key": 109
          },
          {
              "title_rus": "Законотворчество",
              "url_rus": "zakonotvorchestvo",
              "title": "Законотворчество",
              "id_parent": 100,
              "key": 110
          },
          {
              "title_rus": "Земельное право",
              "url_rus": "zemelnoe-pravo",
              "title": "Земельное право",
              "id_parent": 100,
              "key": 111
          },
          {
              "title_rus": "Имущественное право",
              "url_rus": "imuschestvennoe-pravo",
              "title": "Имущественное право",
              "id_parent": 100,
              "key": 112
          },
          {
              "title_rus": "Интеллектуальная собственность",
              "url_rus": "intellektualnaya-sobstvennost",
              "title": "Интеллектуальная собственность",
              "id_parent": 100,
              "key": 113
          },
          {
              "title_rus": "Корпоративное право",
              "url_rus": "korporativnoe-pravo",
              "title": "Корпоративное право",
              "id_parent": 100,
              "key": 114
          },
          {
              "title_rus": "Лицензирование",
              "url_rus": "licenzirovanie",
              "title": "Лицензирование",
              "id_parent": 100,
              "key": 115
          },
          {
              "title_rus": "Медицинское право",
              "url_rus": "medicinskoe-pravo",
              "title": "Медицинское право",
              "id_parent": 100,
              "key": 116
          },
          {
              "title_rus": "Международное право",
              "url_rus": "mezhdunarodnoe-pravo",
              "title": "Международное право",
              "id_parent": 100,
              "key": 117
          },
          {
              "title_rus": "Морское право",
              "url_rus": "morskoe-pravo",
              "title": "Морское право",
              "id_parent": 100,
              "key": 118
          },
          {
              "title_rus": "Налоговое право",
              "url_rus": "nalogovoe-pravo",
              "title": "Налоговое право",
              "id_parent": 100,
              "key": 119
          },
          {
              "title_rus": "Недропользование",
              "url_rus": "nedropolzovanie",
              "title": "Недропользование",
              "id_parent": 100,
              "key": 120
          },
          {
              "title_rus": "Нотариат",
              "url_rus": "notariat",
              "title": "Нотариат",
              "id_parent": 100,
              "key": 121
          },
          {
              "title_rus": "Регистрация, перерегистрация, ликвидация предприятий",
              "url_rus": "registraciya-pereregistraciya-likvidaciya-predpriyatij",
              "title": "Регистрация, перерегистрация, ликвидация предприятий",
              "id_parent": 100,
              "key": 122
          },
          {
              "title_rus": "Семейное право",
              "url_rus": "semejnoe-pravo",
              "title": "Семейное право",
              "id_parent": 100,
              "key": 123
          },
          {
              "title_rus": "Слияния и поглощения",
              "url_rus": "sliyaniya-i-pogloscheniya",
              "title": "Слияния и поглощения",
              "id_parent": 100,
              "key": 124
          },
          {
              "title_rus": "Страховое право",
              "url_rus": "strahovoe-pravo",
              "title": "Страховое право",
              "id_parent": 100,
              "key": 125
          },
          {
              "title_rus": "Таможенное право",
              "url_rus": "tamozhennoe-pravo",
              "title": "Таможенное право",
              "id_parent": 100,
              "key": 126
          },
          {
              "title_rus": "Трудовое право",
              "url_rus": "trudovoe-pravo",
              "title": "Трудовое право",
              "id_parent": 100,
              "key": 127
          },
          {
              "title_rus": "Уголовное право",
              "url_rus": "ugolovnoe-pravo",
              "title": "Уголовное право",
              "id_parent": 100,
              "key": 128
          },
          {
              "title_rus": "Урегулирование убытков",
              "url_rus": "uregulirovanie-ubytkov",
              "title": "Урегулирование убытков",
              "id_parent": 100,
              "key": 129
          },
          {
              "title_rus": "Финансовое право",
              "url_rus": "finansovoe-pravo",
              "title": "Финансовое право",
              "id_parent": 100,
              "key": 130
          },
          {
              "title_rus": "Ценные бумаги",
              "url_rus": "cennye-bumagi",
              "title": "Ценные бумаги",
              "id_parent": 100,
              "key": 131
          },
          {
              "title_rus": "Экологическое право",
              "url_rus": "ekologicheskoe-pravo",
              "title": "Экологическое право",
              "id_parent": 100,
              "key": 132
          },
          {
              "title_rus": "Юридические консультации и услуги",
              "url_rus": "yuridicheskie-konsultacii-i-uslugi",
              "title": "Юридические консультации и услуги",
              "id_parent": 100,
              "key": 133
          },
          {
              "title_rus": "Другое",
              "url_rus": "drugoe",
              "title": "Другое",
              "id_parent": 100,
              "key": 134
          },
          {
              "title_rus": "Начало карьеры, мало опыта",
              "url_rus": "nachalo-karery-malo-opyta",
              "title": "Начало карьеры, мало опыта",
              "id_parent": 100,
              "key": 135
          }
      ]
  }
]
export async function getCategoryList(url) {
  return obj;
  try {
    const response = await fetch("https://startup-summer-2023-proxy.onrender.com/2.0/catalogues", options);
    if (!response.ok) {
      throw new Error('Failed to get catalogues');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
// export async function getVacancies(url) {
//   try {
//     const response = await fetch("https://startup-summer-2023-proxy.onrender.com/2.0/catalogues", options);
//     if (!response.ok) {
//       throw new Error('Failed to get catalogues');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error:', error);
//     throw error;
//   }
// }
// export const getCatalogues = () => {
//   fetch("https://startup-summer-2023-proxy.onrender.com/2.0/catalogues", options)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
// }
const ret = {
  "objects": [
      {
          "canEdit": false,
          "is_closed": false,
          "id": 39305300,
          "id_client": 297921,
          "payment_from": 70000,
          "payment_to": 0,
          "date_pub_to": 1685908805,
          "date_archived": 1635507303,
          "date_published": 1684698002,
          "address": null,
          "profession": "Golang разработчик",
          "work": null,
          "compensation": null,
          "candidat": "Мы ищем разработчиков в команду развития облачной интеграционной платформы Сбербанка. Мы обеспечиваем доставку миллионов запросов ежедневно и помогаем развивать экосистему Сбербанка.\n\nРаботаем с ведущими тех. стандартами для построения облачных приложений и микросервисных архитектур: Kubernates, Istio service mesh, OpenShift, Docker.\nО нас:\nПроект находится в активной фазе своего развития и имеет большую потребность, как со стороны бизнеса, так и со стороны платформ Банка:\n• Мы работаем на open-source стеке технологий\n• Мы разрабатываем высоконагруженные (более 100 000 tps) и отказоустойчивые (99,99) технологии обмена и потоковой обработки событий\n• Мы помогаем развивать экосистему Сбербанка, наши продукты - важные интеграционные элементы экосистемы и одни из ключевых продуктов в поставщике облачных решений SberCloud.\n• У нас приветствуется opensource contribution\nРезультатом твоих трудов станет решение, которое позволит выйти Банку за рамки традиционных для него request/response архитектур и значительно повысить распределенность систем, при этом уменьшая T2M.\nО твоих задачах:\n• Разработка модулей интеграционной платформы Банка: мониторинг, autoscaling, компоненты безопасности, типовые интеграционные компоненты.\n• разработка cloud native компонент, автоматизация работы с cloud (OpenShift API);\n• проектирование, разработка, внедрение высоконагруженных интеграционных сервисов платформы (backend, микросервисы, cloud-native);\n• работа с CI/CD, инструментами деплоя, инфраструктурой: Jenkins, Docker, Kubernetes (OpenShift).\nТы нам подходишь, если у тебя есть\n• Уверенные знания Golang;\n• опыт разработки высоконагруженных приложений;\n• понимание принципов микросервисной архитектуры;\n• понимание и опыт работы с Docker, Kubernetes.\nРабота у нас — это:\n• Команда профессионалов, готовых поддержать ваши инициативы;\n• мощное железо, дополнительные мониторы и всё, что нужно для продуктивной работы;\n• возможность работы с новыми технологиями;\n• Обучение за счёт компании;\n• прозрачная система бонусов и премий, достойная зарплата — размер обсудим на собеседовании;\n• социальный пакет + ДМС;\n• корпоративная программа лояльности (льготное кредитование, скидки в компаниях-партнерах",
          "metro": [],
          "currency": "rub",
          "vacancyRichText": "<i>Мы ищем разработчиков в команду развития облачной интеграционной платформы Сбербанка. Мы обеспечиваем доставку миллионов запросов ежедневно и помогаем развивать экосистему Сбербанка.</i><br /><p>Работаем с ведущими тех. стандартами для построения облачных приложений и микросервисных архитектур: Kubernates, Istio service mesh, OpenShift, Docker.</p><p><b>О нас:</b></p><p>Проект находится в активной фазе своего развития и имеет большую потребность, как со стороны бизнеса, так и со стороны платформ Банка:</p><ul><li>Мы работаем на open-source стеке технологий</li><li>Мы разрабатываем высоконагруженные (более 100 000 tps) и отказоустойчивые (99,99) технологии обмена и потоковой обработки событий</li></ul><ul><li>Мы помогаем развивать экосистему Сбербанка, наши продукты - важные интеграционные элементы экосистемы и одни из ключевых продуктов в поставщике облачных решений SberCloud.</li><li>У нас приветствуется opensource contribution</li></ul><p>Результатом твоих трудов станет решение, которое позволит выйти Банку за рамки традиционных для него request/response архитектур и значительно повысить распределенность систем, при этом уменьшая T2M.</p><p><b>О твоих задачах:</b></p><ul><li>Разработка модулей интеграционной платформы Банка: мониторинг, autoscaling, компоненты безопасности, типовые интеграционные компоненты.</li><li>разработка cloud native компонент, автоматизация работы с cloud (OpenShift API);</li><li>проектирование, разработка, внедрение высоконагруженных интеграционных сервисов платформы (backend, микросервисы, cloud-native);</li><li>работа с CI/CD, инструментами деплоя, инфраструктурой: Jenkins, Docker, Kubernetes (OpenShift).</li></ul><p><b>Ты нам подходишь, если у тебя есть</b></p><ul><li>Уверенные знания Golang;</li><li>опыт разработки высоконагруженных приложений;</li><li>понимание принципов микросервисной архитектуры;</li><li>понимание и опыт работы с Docker, Kubernetes.</li></ul><p><b>Работа у нас — это:</b></p><ul><li>Команда профессионалов, готовых поддержать ваши инициативы;</li><li>мощное железо, дополнительные мониторы и всё, что нужно для продуктивной работы;</li><li>возможность работы с новыми технологиями;</li><li>Обучение за счёт компании;</li><li>прозрачная система бонусов и премий, достойная зарплата — размер обсудим на собеседовании;</li><li>социальный пакет + ДМС;</li><li>корпоративная программа лояльности (льготное кредитование, скидки в компаниях-партнерах</li></ul>",
          "covid_vaccination_requirement": {
              "id": 1,
              "title": "Не важно"
          },
          "external_url": null,
          "contact": null,
          "moveable": false,
          "agreement": false,
          "anonymous": false,
          "is_archive": false,
          "is_storage": false,
          "type_of_work": {
              "id": 6,
              "title": "Полный рабочий день"
          },
          "place_of_work": {
              "id": 2,
              "title": "Удалённая работа (на дому)"
          },
          "education": {
              "id": 2,
              "title": "Высшее"
          },
          "experience": {
              "id": 2,
              "title": "От 1 года"
          },
          "maritalstatus": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "children": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "client": {
              "id": 297921,
              "title": "Сбербанк России",
              "link": "https://www.superjob.ru/clients/sberbank-rossii-297921/vacancies.html",
              "industry": [],
              "description": "Сбер — высокотехнологичная компания и крупнейший банк в России, Центральной и Восточной Европе.\n\nМы собираем лучшие технологии и управленческие методы из мировой практики, обучаем и переобучаем сотрудников, заботимся об их физическом и ментальном здоровье, помогаем достигать поставленных целей и развиваться в выбранном направлении.\n\nСбер сотрудничает с вузами и проводит оплачиваемые стажировки для студентов IT-направлений и финансовых факультетов, а команду обучает в Виртуальной школе и Корпоративном университете. Сотрудники всех направлений Сбера могут переобучаться, получать новые специальности.\n\nНаше IT-комьюнити – технобренд, объединяющий лучшие мировые практики и самый современный стек. Мы работаем по agile в более чем 3 000 продуктовых командах.",
              "vacancy_count": 2321,
              "staff_count": "более 5000",
              "client_logo": "https://public.superjob.ru/images/clients_logos.ru/297921_a4a0093f0710c822609fd387af1d3ca9.jpg",
              "address": "Г. Москва, ул. Вавилова, д. 19",
              "addresses": [
                  {
                      "addressString": "Г. Москва, ул. Вавилова, д. 19",
                      "latitude": 55.700182,
                      "longitude": 37.580158,
                      "phones": []
                  }
              ],
              "url": "http://www.sberbank.ru",
              "short_reg": false,
              "is_blocked": false,
              "registered_date": 1245154183,
              "town": {
                  "id": 4,
                  "title": "Москва",
                  "declension": "в Москве",
                  "hasMetro": true,
                  "genitive": "Москвы"
              }
          },
          "languages": [],
          "driving_licence": [],
          "catalogues": [
              {
                  "id": 33,
                  "title": "IT, Интернет, связь, телеком",
                  "key": 33,
                  "positions": [
                      {
                          "id": 48,
                          "title": "Разработка, программирование",
                          "key": 48
                      }
                  ]
              }
          ],
          "agency": {
              "id": 1,
              "title": "прямой работодатель"
          },
          "town": {
              "id": 217,
              "title": "Рязань",
              "declension": "в Рязани",
              "hasMetro": false,
              "genitive": "Рязани"
          },
          "already_sent_on_vacancy": false,
          "rejected": false,
          "response_info": [],
          "phone": null,
          "phones": null,
          "fax": null,
          "faxes": null,
          "favorite": true,
          "client_logo": "https://public.superjob.ru/images/clients_logos.ru/297921_a4a0093f0710c822609fd387af1d3ca9.jpg",
          "highlight": true,
          "age_from": 0,
          "age_to": 0,
          "gender": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "firm_name": "Сбербанк",
          "firm_activity": "Сбер — высокотехнологичная компания и крупнейший банк в России, Центральной и Восточной Европе. \nМы собираем лучшие технологии и управленческие методы из мировой практики, обучаем и переобучаем сотрудников, заботимся об их физическом и ментальном здоровье, помогаем достигать поставленных целей и развиваться в выбранном направлении. \nСбер сотрудничает с вузами и проводит оплачиваемые стажировки для студентов IT-направлений и финансовых факультетов, а команду обучает в Виртуальной школе и Корпоративном университете. Сотрудники всех направлений Сбера могут переобучаться, получать новые специальности. \nНаше IT-комьюнити – технобренд, объединяющий лучшие мировые практики и самый современный стек. Мы работаем по agile в более чем 3 000 продуктовых командах.",
          "link": "https://ryazan.superjob.ru/vakansii/golang-razrabotchik-39305300.html",
          "isBlacklisted": false,
          "latitude": null,
          "longitude": null
      },
      {
          "canEdit": false,
          "is_closed": false,
          "id": 44933587,
          "id_client": 2974144,
          "payment_from": 40065,
          "payment_to": 0,
          "date_pub_to": 1687257003,
          "date_archived": 1670832602,
          "date_published": 1684665003,
          "address": "Москва, Николоямская улица, 33с1",
          "profession": "Программист 1C",
          "work": null,
          "compensation": null,
          "candidat": "Обязанности: Создание программного комплекса под требования работодателя (1С Колледж)\nТребования: \n- высшее профессиональное (техническое или инженерно-экономическое) образование без предъявления требований к стажу работы или среднее профессиональное (техническое или инженерно-экономическое) образование и стаж работы в должности не менее 3 лет\n- Знание: 1С 8.3, умение читать \"чужой код\". Приветствуется знания: Python, Java Script, Html, CSS\n- Сертификат о вакцинации Covid\nУсловия:\n• Оформление по ТК РФ\n• З/П от 40 065 (оклад) + KPI\n• График работы 5/2\n• Отпуск 28 календарных дней\n• Интересные задачи\nРабота в Правительстве Москвы — это возможность делать наш город современнее и удобнее. Если ты тоже неравнодушен к Москве, хочешь развивать ее и развиваться сам, присоединяйся к нашей команде! Твой город – твое дело!",
          "metro": [],
          "currency": "rub",
          "vacancyRichText": "<p>Обязанности: Создание программного комплекса под требования работодателя (1С Колледж)</p><p>Требования: </p><p>- высшее профессиональное (техническое или инженерно-экономическое) образование без предъявления требований к стажу работы или среднее профессиональное (техническое или инженерно-экономическое) образование и стаж работы в должности не менее 3 лет</p><p>- Знание: 1С 8.3, умение читать \"чужой код\". Приветствуется знания: Python, Java Script, Html, CSS</p><p>- Сертификат о вакцинации Covid</p><p>Условия:</p><ul><li>Оформление по ТК РФ</li><li>З/П от 40 065 (оклад) + KPI</li><li>График работы 5/2</li><li>Отпуск 28 календарных дней</li><li>Интересные задачи</li></ul><p>Работа в Правительстве Москвы — это возможность делать наш город современнее и удобнее. Если ты тоже неравнодушен к Москве, хочешь развивать ее и развиваться сам, присоединяйся к нашей команде! Твой город – твое дело!</p>",
          "covid_vaccination_requirement": {
              "id": 2,
              "title": "Требуется сертификат"
          },
          "external_url": null,
          "contact": "Таренко Алексей Александрович",
          "moveable": false,
          "agreement": false,
          "anonymous": false,
          "is_archive": false,
          "is_storage": false,
          "type_of_work": {
              "id": 6,
              "title": "Полный рабочий день"
          },
          "place_of_work": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "education": {
              "id": 2,
              "title": "Высшее"
          },
          "experience": {
              "id": 3,
              "title": "От 3 лет"
          },
          "maritalstatus": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "children": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "client": {
              "id": 2974144,
              "title": "Медицинский колледж № 7",
              "link": "https://www.superjob.ru/clients/medicinskij-kolledzh-7-2974144/vacancies.html",
              "industry": [],
              "description": "Медицинский колледж № 7",
              "vacancy_count": 0,
              "staff_count": "100 — 500",
              "client_logo": "https://public.superjob.ru/images/clients_logos.ru/2974144_08eba726918269720294f40a0d5d3e34.png",
              "address": "Москва, ул. Николоямская, д.33 ",
              "addresses": [
                  {
                      "addressString": "Москва, ул. Николоямская, д.33 ",
                      "latitude": 55.747475,
                      "longitude": 37.658473,
                      "phones": [
                          {
                              "number": 74959157169,
                              "additionalNumber": null
                          }
                      ]
                  }
              ],
              "url": "http://medcollege7.ru",
              "short_reg": false,
              "is_blocked": false,
              "registered_date": 1479384750,
              "town": {
                  "id": 4,
                  "title": "Москва",
                  "declension": "в Москве",
                  "hasMetro": true,
                  "genitive": "Москвы"
              }
          },
          "languages": [],
          "driving_licence": [],
          "catalogues": [
              {
                  "id": 33,
                  "title": "IT, Интернет, связь, телеком",
                  "key": 33,
                  "positions": [
                      {
                          "id": 36,
                          "title": "Web-верстка",
                          "key": 36
                      },
                      {
                          "id": 42,
                          "title": "Интернет, создание и поддержка сайтов",
                          "key": 42
                      },
                      {
                          "id": 48,
                          "title": "Разработка, программирование",
                          "key": 48
                      },
                      {
                          "id": 53,
                          "title": "Системы управления предприятием (ERP)",
                          "key": 53
                      },
                      {
                          "id": 57,
                          "title": "Техническая поддержка",
                          "key": 57
                      }
                  ]
              }
          ],
          "agency": {
              "id": 1,
              "title": "прямой работодатель"
          },
          "town": {
              "id": 4,
              "title": "Москва",
              "declension": "в Москве",
              "hasMetro": true,
              "genitive": "Москвы"
          },
          "already_sent_on_vacancy": false,
          "rejected": false,
          "response_info": [],
          "phone": null,
          "phones": null,
          "fax": null,
          "faxes": null,
          "favorite": false,
          "client_logo": "https://public.superjob.ru/images/clients_logos.ru/2974144_08eba726918269720294f40a0d5d3e34.png",
          "highlight": false,
          "age_from": 0,
          "age_to": 0,
          "gender": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "firm_name": "ГБПОУ Департамента Здравоохранения Города Москвы Медицинский Колледж № 7",
          "firm_activity": "Медицинский колледж 7",
          "link": "https://www.superjob.ru/vakansii/programmist-1c-44933587.html",
          "isBlacklisted": false,
          "latitude": 55.747475,
          "longitude": 37.658482
      },
      {
          "canEdit": false,
          "is_closed": false,
          "id": 46287341,
          "id_client": 4353589,
          "payment_from": 0,
          "payment_to": 0,
          "date_pub_to": 1685736984,
          "date_archived": 0,
          "date_published": 1684527384,
          "address": "Московская область, Балашиха, Звёздная улица, 7к1",
          "profession": "Программист 1C",
          "work": null,
          "compensation": null,
          "candidat": "Обязанности:\n• Внедрение, сопровождение программ 1С\n• Консультация клиентов по программам 1С\n• Разработка программных модулей 1С\nТребования:\n• Знание языка программирования 1С\n• Коммуникабельность, стрессоустойчивость, аналитический склад ума\n• Стремление развивать свои профессиональные качества\nУсловия:\n• Работа в офисе, удаленно\n• Участие в больших интересных проектах",
          "metro": [],
          "currency": "rub",
          "vacancyRichText": "<p>Обязанности:</p><ul><li>Внедрение, сопровождение программ 1С</li><li>Консультация клиентов по программам 1С</li><li>Разработка программных модулей 1С</li></ul><p>Требования:</p><ul><li>Знание языка программирования 1С</li><li>Коммуникабельность, стрессоустойчивость, аналитический склад ума</li><li>Стремление развивать свои профессиональные качества</li></ul><p>Условия:</p><ul><li>Работа в офисе, удаленно</li><li>Участие в больших интересных проектах</li></ul>",
          "covid_vaccination_requirement": {
              "id": 1,
              "title": "Не важно"
          },
          "external_url": null,
          "contact": "Дмитрий",
          "moveable": true,
          "agreement": true,
          "anonymous": false,
          "is_archive": false,
          "is_storage": false,
          "type_of_work": {
              "id": 6,
              "title": "Полный рабочий день"
          },
          "place_of_work": {
              "id": 2,
              "title": "Удалённая работа (на дому)"
          },
          "education": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "experience": {
              "id": 2,
              "title": "От 1 года"
          },
          "maritalstatus": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "children": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "client": {
              "id": 4353589,
              "title": "Jobers",
              "link": "https://www.superjob.ru/clients/jobers-4353589/vacancies.html",
              "industry": [],
              "description": "Jobers.ru - это сервис, позволяющий работодателям размещать вакансии на всех сайтах сразу.\n\nМы не являемся кадровым агентством!\nНа данной странице Вы можете ознакомиться с вакансиями прямых работодателей, публикующих вакансии через наш cервис (наименование работодателя указано в начале описания вакансии).\n\nДля отклика на вакансию необходимо просто воспользоваться формой «Откликнуться», расположенной под описанием каждой вакансии на портале.\n\nСервис Jobers.ru не взимает с соискателей никаких оплат и комиссий!",
              "vacancy_count": 228,
              "staff_count": "менее 50",
              "client_logo": "https://public.superjob.ru/images/clients_logos.ru/4353589_55ab67a08949ff582ee4f8aba911608f.jpg",
              "address": null,
              "addresses": [],
              "url": "https://jobers.ru",
              "short_reg": false,
              "is_blocked": false,
              "registered_date": 1656493320,
              "town": {
                  "id": 14,
                  "title": "Санкт-Петербург",
                  "declension": "в Санкт-Петербурге",
                  "hasMetro": true,
                  "genitive": "Санкт-Петербурга"
              }
          },
          "languages": [],
          "driving_licence": [],
          "catalogues": [
              {
                  "id": 33,
                  "title": "IT, Интернет, связь, телеком",
                  "key": 33,
                  "positions": [
                      {
                          "id": 40,
                          "title": "Игровое ПО / Геймдев",
                          "key": 40
                      },
                      {
                          "id": 42,
                          "title": "Интернет, создание и поддержка сайтов",
                          "key": 42
                      },
                      {
                          "id": 47,
                          "title": "Разработка и сопровождение банковского ПО",
                          "key": 47
                      },
                      {
                          "id": 48,
                          "title": "Разработка, программирование",
                          "key": 48
                      },
                      {
                          "id": 503,
                          "title": "Внедрение и сопровождение ПО",
                          "key": 503
                      }
                  ]
              }
          ],
          "agency": {
              "id": 2,
              "title": "кадровое агентство"
          },
          "town": {
              "id": 1390,
              "title": "Балашиха",
              "declension": "в Балашихе",
              "hasMetro": false,
              "genitive": "Балашихи"
          },
          "already_sent_on_vacancy": false,
          "rejected": false,
          "response_info": [],
          "phone": "+7 (926) 7555420",
          "phones": [
              {
                  "number": 79267555420,
                  "additionalNumber": null
              }
          ],
          "fax": null,
          "faxes": null,
          "favorite": false,
          "client_logo": "https://public.superjob.ru/images/clients_logos.ru/4353589_55ab67a08949ff582ee4f8aba911608f.jpg",
          "highlight": false,
          "age_from": 0,
          "age_to": 0,
          "gender": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "firm_name": "Jobers",
          "firm_activity": "Jobers.ru - это сервис, позволяющий работодателям размещать вакансии на всех сайтах сразу. \n\nМы не являемся кадровым агентством!\nНа данной странице Вы можете ознакомиться с вакансиями прямых работодателей, публикующих вакансии через наш cервис (наименование работодателя указано в начале описания вакансии). \n\nДля отклика на вакансию необходимо просто воспользоваться формой «Откликнуться», расположенной под описанием каждой вакансии на портале. \n\nСервис Jobers.ru не взимает с соискателей никаких оплат и комиссий!",
          "link": "https://balashiha.superjob.ru/vakansii/programmist-1c-46287341.html",
          "isBlacklisted": false,
          "latitude": 55.827248,
          "longitude": 37.953831
      },
      {
          "canEdit": false,
          "is_closed": false,
          "id": 46355782,
          "id_client": 121161,
          "payment_from": 0,
          "payment_to": 0,
          "date_pub_to": 1686405326,
          "date_archived": 0,
          "date_published": 1684677326,
          "address": "Московская область, Ленинский городской округ, Симферопольское шоссе, 25-й километр, с2",
          "profession": "Разработчик DWH (Oracle)",
          "work": null,
          "compensation": null,
          "candidat": "ГК МЕГАПОЛИС – группа компаний, владеющая и управляющая активами в сфере логистики и дистрибуции товаров повседневного спроса (FMCG): табачная и пивобезалкогольная продукция, бакалейные товары, зажигалки, элементы питания, контрацептивы, энергетики, OTP (сигары, сигариллы, табаки).\n \nВ настоящее время ГК МЕГАПОЛИС обладает крупнейшим портфелем контрактов, включая контракты на дистрибуцию в РФ:\n \n• табачной продукции с производителями Japan Tobacco International, Philip Morris International, Imperial Tobacco Group;\n \n• долгосрочный дистрибьюторский договор с производителем пивобезалкогольной продукции ОАО «Пивоваренная компания «Балтика» (Carlsberg Group);\n \n• дистрибьюторские контракты с производителями чая и кофе – Milagro Food и M.J.F. Teas (Dilmah);\n \n• дистрибьюторский контракт с производителем энергетических напитков Red Bull GmbH (Red Bull, Bullit).\n \nНа данный момент в ГК Мегаполис открыта вакансия \"РАЗРАБОТЧИК ХРАНИЛИЩА ДАННЫХ\"\n \nЗАДАЧИ ДЛЯ ВАС:\n \n• Разработка и анализ процедур загрузки данных в хранилище из систем источников (SAP, web-сервисы);\n \n• Развитие корпоративного хранилища данных на основе СУБД Oracle;\n \n• Разработка витрин данных;\n \n• Разработка ETL процессов и алгоритмов расчета;\n \n• Автоматизация отчетности и визуализация с использованием Oracle APEX;\n \n• Ведение документации по хранилищу и витринам данных.\n \nОТ ВАС МЫ ЖЕЛАЕМ ВИДЕТЬ:\n \n• Законченное высшее образование;\n \n• Знание архитектуры СУБД Oracle и опыт разработки под СУБД Oracle не менее 2-х лет;\n \n• Навыки разработки ETL процессов;\n \n• Знание SQL (PL/SQL) на высоком уровне, включая оптимизацию запросов;\n \n• Знание принципов построения хранилищ данных;\n \nВашим преимуществом будет:\n \n• Навыки разработки на Oracle APEX (знание CSS,HTML,JavaScript);\n \n• Опыт работы со средствами визуализации данных;\n \n• Наличие сертификатов Oracle;\n \n• Опыт работы с Arenadata/\n \nМЫ ПРЕДЛАГАЕМ:\n \n• Работу в крупнейшей (более 13000 чел), стабильной (25 лет на рынке), торговой компании с региональной сетью, ориентированной на долгосрочное сотрудничество.\n \n• Оформление по ТК РФ (ежегодный оплачиваемый отпуск, оплата листка временной нетрудоспособности, соблюдение прочих гарантий по ТК РФ).\n \n• Конкурентную белую заработную плату и реальную возможность профессионального развития в динамично растущем направлении.\n \n• Полис ДМС со стоматологией;\n \n• Корпоративную мобильную связь;\n \n• Частичную компенсацию обедов в корпоративном кафе в офисе;\n \n• Наставничество опытных коллег и возможности внутреннего и внешнего обучения;\n \n• Необходимую технику и софт для работы;\n \n• Доступ в корпоративную библиотеку Альпина;\n \n• Скидки от наших партнеров (фитнес, английский, театры и др.)\n \n• Удаленный формат работы, график 5/2",
          "metro": [],
          "currency": "rub",
          "vacancyRichText": "<p>ГК МЕГАПОЛИС – группа компаний, владеющая и управляющая активами в сфере логистики и дистрибуции товаров повседневного спроса (FMCG): табачная и пивобезалкогольная продукция, бакалейные товары, зажигалки, элементы питания, контрацептивы, энергетики, OTP (сигары, сигариллы, табаки).</p> <p>В настоящее время ГК МЕГАПОЛИС обладает крупнейшим портфелем контрактов, включая контракты на дистрибуцию в РФ:</p> <ul><li>табачной продукции с производителями Japan Tobacco International, Philip Morris International, Imperial Tobacco Group;</li> <li>долгосрочный дистрибьюторский договор с производителем пивобезалкогольной продукции ОАО «Пивоваренная компания «Балтика» (Carlsberg Group);</li> <li>дистрибьюторские контракты с производителями чая и кофе – Milagro Food и M.J.F. Teas (Dilmah);</li> <li>дистрибьюторский контракт с производителем энергетических напитков Red Bull GmbH (Red Bull, Bullit).</li> </ul><p>На данный момент в ГК Мегаполис открыта вакансия \"РАЗРАБОТЧИК ХРАНИЛИЩА ДАННЫХ\"</p> <p>ЗАДАЧИ ДЛЯ ВАС:</p> <ul><li>Разработка и анализ процедур загрузки данных в хранилище из систем источников (SAP, web-сервисы);</li> <li>Развитие корпоративного хранилища данных на основе СУБД Oracle;</li> <li>Разработка витрин данных;</li> <li>Разработка ETL процессов и алгоритмов расчета;</li> <li>Автоматизация отчетности и визуализация с использованием Oracle APEX;</li> <li>Ведение документации по хранилищу и витринам данных.</li> </ul><p>ОТ ВАС МЫ ЖЕЛАЕМ ВИДЕТЬ:</p> <ul><li>Законченное высшее образование;</li> <li>Знание архитектуры СУБД Oracle и опыт разработки под СУБД Oracle не менее 2-х лет;</li> <li>Навыки разработки ETL процессов;</li> <li>Знание SQL (PL/SQL) на высоком уровне, включая оптимизацию запросов;</li> <li>Знание принципов построения хранилищ данных;</li> </ul><p>Вашим преимуществом будет:</p> <ul><li>Навыки разработки на Oracle APEX (знание CSS,HTML,JavaScript);</li> <li>Опыт работы со средствами визуализации данных;</li> <li>Наличие сертификатов Oracle;</li> <li>Опыт работы с Arenadata/</li> </ul><p>МЫ ПРЕДЛАГАЕМ:</p> <ul><li>Работу в крупнейшей (более 13000 чел), стабильной (25 лет на рынке), торговой компании с региональной сетью, ориентированной на долгосрочное сотрудничество.</li> <li>Оформление по ТК РФ (ежегодный оплачиваемый отпуск, оплата листка временной нетрудоспособности, соблюдение прочих гарантий по ТК РФ).</li> <li>Конкурентную белую заработную плату и реальную возможность профессионального развития в динамично растущем направлении.</li> <li>Полис ДМС со стоматологией;</li> <li>Корпоративную мобильную связь;</li> <li>Частичную компенсацию обедов в корпоративном кафе в офисе;</li> <li>Наставничество опытных коллег и возможности внутреннего и внешнего обучения;</li> <li>Необходимую технику и софт для работы;</li> <li>Доступ в корпоративную библиотеку Альпина;</li> <li>Скидки от наших партнеров (фитнес, английский, театры и др.)</li> <li>Удаленный формат работы, график 5/2</li> </ul>",
          "covid_vaccination_requirement": {
              "id": 1,
              "title": "Не важно"
          },
          "external_url": null,
          "contact": "Отдел подбора персонала",
          "moveable": false,
          "agreement": true,
          "anonymous": false,
          "is_archive": false,
          "is_storage": false,
          "type_of_work": {
              "id": 6,
              "title": "Полный рабочий день"
          },
          "place_of_work": {
              "id": 2,
              "title": "Удалённая работа (на дому)"
          },
          "education": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "experience": {
              "id": 3,
              "title": "От 3 лет"
          },
          "maritalstatus": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "children": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "client": {
              "id": 121161,
              "title": "МЕГАПОЛИС",
              "link": "https://www.superjob.ru/clients/megapolis-121161/vacancies.html",
              "industry": [],
              "description": "ГК «МЕГАПОЛИС» – группа компаний, владеющая и управляющая активами в сфере логистики и дистрибуции товаров повседневного спроса (FMCG): табачная и пивобезалкогольная продукция, бакалейные товары, зажигалки, элементы питания, контрацептивы, энергетики, OTP (сигары, сигариллы, табаки).\n\nВ настоящее время ГК МЕГАПОЛИС обладает крупнейшим портфелем контрактов, включая контракты на дистрибуцию в РФ:\n• табачной продукции;\n• пивобезалкогольной продукции;\n• дистрибьюторские контракты с производителями чая и кофе;\n• дистрибьюторский контракт с производителем энергетических напитков Red Bull GmbH (Red Bull, Bullit)(ООО «Ред Булл (Рус)»).\n\nСтабильность и долголетняя история\n\nГК МЕГАПОЛИС начала свою де­ятельность 20 лет назад. За это время мы построили ста­бильный, долго­срочный и кли­енто­ориентированный бизнес. И несмотря на наше лиди­рующее поло­жение на рынке, мы стре­мимся к бо́ль­шему, стоим планы и с опти­мизмом смотрим в будущее.\n\nШирокая география\n\nМы рабо­таем по всей стране, с неве­роят­ным по сво­ей широ­те геогра­фическим покры­тием, со все­ми кана­лами про­даж; в сос­тав ГК МЕГА­ПОЛИС вхо­дит крупней­ший в России дистри­бутор ком­мерческого авто­транспорта, собстве­нные ло­гисти­ческие силы и активы, сильней­ший игрок сег­мента элит­ной табач­ной продук­ции. Мы яв­ля­емся крупней­шей дистрибу­ционной компа­нией в своем сегменте. Груп­па компа­ний МЕГА­ПОЛИС – это 330 филиа­лов на всей терри­тории Рос­сии. Числен­ность сотруд­ников в Рос­сии сос­тав­ляет более 15 000 чело­век.\n\nВысокие позиции\n\nГруппа компаний МЕГА­ПОЛИС зани­мает 6 место в рей­тинге Forbes - 200 круп­нейших частных ком­паний России 2016. Мы зани­маем 14 место в рей­тинге РБК – 500 лиде­ров российс­кого биз­неса 2015.\n\nЭтичный бизнес\n\nГК МЕГА­ПОЛИС ве­дет свой биз­нес этич­ным путем, это зна­чит, что комп­ания неукос­нительно соб­людает законо­дательство и сле­дует луч­шим миро­вым прак­тиках веде­ния биз­неса. ГК МЕГА­ПОЛИС всегда стре­мится осу­ществлять дея­тельность в откры­той и чест­ной мане­ре на основе взаим­ной выгоды и добро­совестного пред­приниматель­ства, нетер­пимости к любым про­явлениям и ви­дам корруп­ции, легал­изации дохо­дов, по­лучен­ных преступ­ным путем, не­законной торговли, руководствуясь высочайши­ми стандар­тами добро­совестности и закон­ности.",
              "vacancy_count": 287,
              "staff_count": "более 5000",
              "client_logo": "https://public.superjob.ru/images/clients_logos.ru/121161_b2bc4d9152e8a2135351f3a727a88a13.png",
              "address": "Россия, Москва, Симферопольское шоссе, 3",
              "addresses": [
                  {
                      "addressString": "Россия, Москва, Симферопольское шоссе, 3",
                      "latitude": 55.569393,
                      "longitude": 37.602148,
                      "phones": [
                          {
                              "number": 74957455130,
                              "additionalNumber": null
                          }
                      ]
                  }
              ],
              "url": "http://www.gkm.ru",
              "short_reg": false,
              "is_blocked": false,
              "registered_date": 1194504833,
              "town": {
                  "id": 4,
                  "title": "Москва",
                  "declension": "в Москве",
                  "hasMetro": true,
                  "genitive": "Москвы"
              }
          },
          "languages": [],
          "driving_licence": [],
          "catalogues": [
              {
                  "id": 33,
                  "title": "IT, Интернет, связь, телеком",
                  "key": 33,
                  "positions": [
                      {
                          "id": 48,
                          "title": "Разработка, программирование",
                          "key": 48
                      }
                  ]
              }
          ],
          "agency": {
              "id": 1,
              "title": "прямой работодатель"
          },
          "town": {
              "id": 4,
              "title": "Москва",
              "declension": "в Москве",
              "hasMetro": true,
              "genitive": "Москвы"
          },
          "already_sent_on_vacancy": false,
          "rejected": false,
          "response_info": [],
          "phone": "+7 (495) 7455130",
          "phones": [
              {
                  "number": 74957455130,
                  "additionalNumber": null
              }
          ],
          "fax": null,
          "faxes": null,
          "favorite": false,
          "client_logo": "https://public.superjob.ru/images/clients_logos.ru/121161_b2bc4d9152e8a2135351f3a727a88a13.png",
          "highlight": false,
          "age_from": 0,
          "age_to": 0,
          "gender": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "firm_name": "Мегаполис",
          "firm_activity": "ГК «МЕГАПОЛИС» – группа компаний, владеющая и управляющая активами в сфере логистики и дистрибуции товаров повседневного спроса (FMCG): табачная и пивобезалкогольная продукция, бакалейные товары, зажигалки, элементы питания, контрацептивы, энергетики, OTP (сигары, сигариллы, табаки). \n\nВ настоящее время ГК МЕГАПОЛИС обладает крупнейшим портфелем контрактов, включая контракты на дистрибуцию в РФ:\n• табачной продукции;\n• пивобезалкогольной продукции;\n• дистрибьюторские контракты с производителями чая и кофе;\n• дистрибьюторский контракт с производителем энергетических напитков Red Bull GmbH (Red Bull, Bullit)(ООО «Ред Булл (Рус)»). \n\nСтабильность и долголетняя история\n\nГК МЕГАПОЛИС начала свою деятельность 20 лет назад. За это время мы построили стабильный, долгосрочный и клиентоориентированный бизнес. И несмотря на наше лидирующее положение на рынке, мы стремимся к бо́льшему, стоим планы и с оптимизмом смотрим в будущее. \n\nШирокая география\n\nМы работаем по всей стране, с невероятным по своей широте географическим покрытием, со всеми каналами продаж; в состав ГК МЕГАПОЛИС входит крупнейший в России дистрибутор коммерческого автотранспорта, собственные логистические силы и активы, сильнейший игрок сегмента элитной табачной продукции. Мы являемся крупнейшей дистрибуционной компанией в своем сегменте. Группа компаний МЕГАПОЛИС – это 330 филиалов на всей территории России. Численность сотрудников в России составляет более 15 000 человек. \n\nВысокие позиции\n\nГруппа компаний МЕГАПОЛИС занимает 6 место в рейтинге Forbes - 200 крупнейших частных компаний России 2016. Мы занимаем 14 место в рейтинге РБК – 500 лидеров российского бизнеса 2015. \n\nЭтичный бизнес\n\nГК МЕГАПОЛИС ведет свой бизнес этичным путем, это значит, что компания неукоснительно соблюдает законодательство и следует лучшим мировым практиках ведения бизнеса. ГК МЕГАПОЛИС всегда стремится осуществлять деятельность в открытой и честной манере на основе взаимной выгоды и добросовестного предпринимательства, нетерпимости к любым проявлениям и видам коррупции, легализации доходов, полученных преступным путем, незаконной торговли, руководствуясь высочайшими стандартами добросовестности и законности.",
          "link": "https://www.superjob.ru/vakansii/razrabotchik-dwh-46355782.html",
          "isBlacklisted": false,
          "latitude": 55.535595,
          "longitude": 37.609406
      },
      {
          "canEdit": false,
          "is_closed": false,
          "id": 42453088,
          "id_client": 3992406,
          "payment_from": 24500,
          "payment_to": 0,
          "date_pub_to": 1686684896,
          "date_archived": 1683659702,
          "date_published": 1684697696,
          "address": "Москва, Новочерёмушкинская улица, 67",
          "profession": "Инженер-программист",
          "work": null,
          "compensation": null,
          "candidat": "Требования:\n• \nвысшее профессиональное (техническое или инженерно-экономическое) образование;\n• \nбез предъявления требований к стажу работы или среднее профессиональное (техническое или инженерно-экономическое) образование и стаж работы в должности техника I категории не менее 3 лет либо других должностях, замещаемых специалистами со средним профессиональным образованием, не менее 5 лет;\n• требования к разработчикам программного обеспечения - уверенное владение каким-либо языком программирования высокого уровня;\nУсловия:\n• \nопыт работы с системами управления базами данных. Владение языком SQL;\n• \nзнание архитектуры современных Web-приложений и рекомендаций по проектированию REST API;\n• \nнавыки работы в операционных системах Unix/Linux.\nУсловия и гарантии:\n\n• \nофициальное оформление с соблюдением требований ТК РФ;\n• \nстабильная заработная плата;\n• \nпремирование ежеквартальное и по итогам работы за год;\n• \n% надбавка к окладу (за непрерывную работу (выслугу лет) гражданскому персоналу войсковых частей, учреждений и подразделениях системы МВД России);\n• \nотпуска, больничные и пр. предоставляются в соответствии с требованием ТК РФ;\n• \nвыплата материальной помощи;\n• \nграфик работы 5/2, с понедельника по четверг с 9:00 до 18:00, пятница с 9:00 до 16:45;\n• \nвозможность профессионального и карьерного роста;\n• \nиные льготы предусмотренные действующим законодательством.",
          "metro": [],
          "currency": "rub",
          "vacancyRichText": "Требования:<ul><li><p>высшее профессиональное (техническое или инженерно-экономическое) образование;</p></li><li><p>без предъявления требований к стажу работы или среднее профессиональное (техническое или инженерно-экономическое) образование и стаж работы в должности техника I категории не менее 3 лет либо других должностях, замещаемых специалистами со средним профессиональным образованием, не менее 5 лет;</p></li><li>требования к разработчикам программного обеспечения - уверенное владение каким-либо языком программирования высокого уровня;</li></ul>Условия:<ul><li><p>опыт работы с системами управления базами данных. Владение языком SQL;</p></li><li><p>знание архитектуры современных Web-приложений и рекомендаций по проектированию REST API;</p></li><li><p>навыки работы в операционных системах Unix/Linux.</p></li></ul>Условия и гарантии:<br /><ul><li><p>официальное оформление с соблюдением требований ТК РФ;</p></li><li><p>стабильная заработная плата;</p></li><li><p>премирование ежеквартальное и по итогам работы за год;</p></li><li><p>% надбавка к окладу (за непрерывную работу (выслугу лет) гражданскому персоналу войсковых частей, учреждений и подразделениях системы МВД России);</p></li><li><p>отпуска, больничные и пр. предоставляются в соответствии с требованием ТК РФ;</p></li><li><p>выплата материальной помощи;</p></li><li><p>график работы 5/2, с понедельника по четверг с 9:00 до 18:00, пятница с 9:00 до 16:45;</p></li><li><p>возможность профессионального и карьерного роста;</p></li><li><p>иные льготы предусмотренные действующим законодательством.</p></li></ul>",
          "covid_vaccination_requirement": {
              "id": 1,
              "title": "Не важно"
          },
          "external_url": null,
          "contact": "Ксения Александровна Воеводина",
          "moveable": true,
          "agreement": false,
          "anonymous": false,
          "is_archive": false,
          "is_storage": false,
          "type_of_work": {
              "id": 6,
              "title": "Полный рабочий день"
          },
          "place_of_work": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "education": {
              "id": 4,
              "title": "Среднее специальное"
          },
          "experience": {
              "id": 2,
              "title": "От 1 года"
          },
          "maritalstatus": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "children": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "client": {
              "id": 3992406,
              "title": "Главный информационно-аналитический центр МВД России",
              "link": "https://www.superjob.ru/clients/glavnyj-informacionno-analiticheskij-centr-mvd-rossii-3992406/vacancies.html",
              "industry": [],
              "description": "Федеральное казенное учреждение «Главный информационно-аналитический центр Министерства внутренних дел Российской Федерации»\n\nОсновные направления деятельности федерального казенного учреждения «Главный информационно-аналитический центр Министерства внутренних дел Российской Федерации»:\n\n– Централизованное информационное обеспечение в установленном порядке подразделений МВД России, органов государственной власти Российской Федерации, органов местного самоуправления, компетентных органов иных государств оперативно-справочными, оперативными, разыскными, криминалистическими, дактилоскопическими, статистическими, архивными сведениями, сведениями, содержащимися в информационных системах и банках данных в сфере миграции;\n\n– Формирование и ведение централизованных учетов, баз данных оперативно-справочной, разыскной, криминалистической, дактилоскопической, статистической и иной информации;\n\n– Формирование архивных фондов, осуществление учета, хранения, экспертизы научной и практической ценности, научно-технической обработки архивных документов, образовавшихся в деятельности служб центрального аппарата МВД (МООП) СССР, МВД (МООП) РСФСР, МВД СССР, МВД России и территориальных органов Министерства внутренних дел Российской Федерации;\n\n– Оказание услуг в целях обеспечения реализации предусмотренных законодательством Российской Федерации полномочий МВД России;\n\n– Обеспечение эксплуатации единой системы информационно-аналитического обеспечения деятельности МВД России;\n\n– Обеспечение эксплуатации и технической поддержки информационных систем и банков данных в сфере миграции.",
              "vacancy_count": 21,
              "staff_count": "менее 50",
              "client_logo": null,
              "address": null,
              "addresses": [],
              "url": "https://мвд.рф/mvd/structure1/Centri/Glavnij_informacionno_analiticheskij_cen",
              "short_reg": false,
              "is_blocked": false,
              "registered_date": 1609320950,
              "town": {
                  "id": 4,
                  "title": "Москва",
                  "declension": "в Москве",
                  "hasMetro": true,
                  "genitive": "Москвы"
              }
          },
          "languages": [],
          "driving_licence": [],
          "catalogues": [
              {
                  "id": 33,
                  "title": "IT, Интернет, связь, телеком",
                  "key": 33,
                  "positions": [
                      {
                          "id": 41,
                          "title": "Инжиниринг",
                          "key": 41
                      },
                      {
                          "id": 48,
                          "title": "Разработка, программирование",
                          "key": 48
                      }
                  ]
              }
          ],
          "agency": {
              "id": 1,
              "title": "прямой работодатель"
          },
          "town": {
              "id": 1536,
              "title": "Щербинка",
              "declension": "в Щербинке",
              "hasMetro": false,
              "genitive": "Щербинки"
          },
          "already_sent_on_vacancy": false,
          "rejected": false,
          "response_info": [],
          "phone": "+7 (495) 6677791",
          "phones": [
              {
                  "number": 74956677791,
                  "additionalNumber": null
              }
          ],
          "fax": null,
          "faxes": null,
          "favorite": false,
          "client_logo": null,
          "highlight": false,
          "age_from": 0,
          "age_to": 0,
          "gender": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "firm_name": "Главный информационно-аналитический центр МВД России",
          "firm_activity": "Федеральное казенное учреждение «Главный информационно-аналитический центр Министерства внутренних дел Российской Федерации»\n\nОсновные направления деятельности федерального казенного учреждения «Главный информационно-аналитический центр Министерства внутренних дел Российской Федерации»:\n\n– Централизованное информационное обеспечение в установленном порядке подразделений МВД России, органов государственной власти Российской Федерации, органов местного самоуправления, компетентных органов иных государств оперативно-справочными, оперативными, разыскными, криминалистическими, дактилоскопическими, статистическими, архивными сведениями, сведениями, содержащимися в информационных системах и банках данных в сфере миграции;\n\n– Формирование и ведение централизованных учетов, баз данных оперативно-справочной, разыскной, криминалистической, дактилоскопической, статистической и иной информации;\n\n– Формирование архивных фондов, осуществление учета, хранения, экспертизы научной и практической ценности, научно-технической обработки архивных документов, образовавшихся в деятельности служб центрального аппарата МВД (МООП) СССР, МВД (МООП) РСФСР, МВД СССР, МВД России и территориальных органов Министерства внутренних дел Российской Федерации;\n\n– Оказание услуг в целях обеспечения реализации предусмотренных законодательством Российской Федерации полномочий МВД России;\n\n– Обеспечение эксплуатации единой системы информационно-аналитического обеспечения деятельности МВД России;\n\n– Обеспечение эксплуатации и технической поддержки информационных систем и банков данных в сфере миграции.",
          "link": "https://scherbinka.superjob.ru/vakansii/inzhener-programmist-42453088.html",
          "isBlacklisted": false,
          "latitude": 55.663822,
          "longitude": 37.563358
      },
      {
          "canEdit": false,
          "is_closed": false,
          "id": 43429226,
          "id_client": 3275780,
          "payment_from": 45000,
          "payment_to": 45000,
          "date_pub_to": 1686481211,
          "date_archived": 1678433701,
          "date_published": 1684494011,
          "address": " Саратов , Гагаринский район село Александровка",
          "profession": "Программист",
          "work": null,
          "compensation": null,
          "candidat": "Обязанности:\n• Поиск и устранение неисправностей в работе технологического оборудования, устранение ошибок программы \n- Разработка и внедрение новых алгоритмов работы оборудования\n- Внедрение новых устройств и функций в существующую систему управления\n- Корректировка систем визуализации тех процесса\n- Разработка инструкций по работе с новыми функциями\nТребования:\n• Высшее образование,\n• Знание Simatic Step7, \n- WinCC flexible,\n- MasterSCADA,\n- Базы данных\nУсловия:\n• \nРабота на крупном, стабильном предприятии - лидере рынка.\nГрафик работы пн.-пт с 8.00 до 17.00 (перерыв на обед с 12.00 -13.00) выходные сб, вск.\nОформление в полном соответствии с ТК РФ.\nПолностью прозрачная заработная плата.\n• \nДоставка корпоративным транспортом от администрации Заводского района до места работы, (Предприятие в 10-ти минутах проезда от Заводского р-на). \n• \nПолный рабочий день на территории работодателя",
          "metro": [],
          "currency": "rub",
          "vacancyRichText": "<b>Обязанности:</b><ul><li>Поиск и устранение неисправностей в работе технологического оборудования, устранение ошибок программы <p>- Разработка и внедрение новых алгоритмов работы оборудования</p><p>- Внедрение новых устройств и функций в существующую систему управления</p><p>- Корректировка систем визуализации тех процесса</p><p>- Разработка инструкций по работе с новыми функциями</p></li></ul><b>Требования:</b><ul><li>Высшее образование,</li><li>Знание Simatic Step7, <p>- WinCC flexible,</p><p>- MasterSCADA,</p><p>- Базы данных</p></li></ul><b>Условия:</b><ul><li><p>Работа на крупном, стабильном предприятии - лидере рынка.</p><p>График работы пн.-пт с 8.00 до 17.00 (перерыв на обед с 12.00 -13.00) выходные сб, вск.</p><p>Оформление в полном соответствии с ТК РФ.</p><p>Полностью прозрачная заработная плата.</p></li><li><p>Доставка корпоративным транспортом от администрации Заводского района до места работы,\n(Предприятие в 10-ти минутах проезда от Заводского р-на).  </p></li><li><p>Полный рабочий день на территории работодателя</p></li></ul>",
          "covid_vaccination_requirement": {
              "id": 1,
              "title": "Не важно"
          },
          "external_url": null,
          "contact": "Татьяна Коннова",
          "moveable": true,
          "agreement": false,
          "anonymous": false,
          "is_archive": false,
          "is_storage": false,
          "type_of_work": {
              "id": 6,
              "title": "Полный рабочий день"
          },
          "place_of_work": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "education": {
              "id": 2,
              "title": "Высшее"
          },
          "experience": {
              "id": 1,
              "title": "Без опыта"
          },
          "maritalstatus": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "children": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "client": {
              "id": 3275780,
              "title": "ДСК Грас",
              "link": "https://www.superjob.ru/clients/dsk-gras-3275780/vacancies.html",
              "industry": [],
              "description": "Производство газобетона.",
              "vacancy_count": 10,
              "staff_count": "100 — 500",
              "client_logo": "https://public.superjob.ru/images/clients_logos.ru/3275780_6b2d20e3dd32f95d5ef0d374b57d16dd.jpg",
              "address": null,
              "addresses": [],
              "url": "http://www.dskgras.ru",
              "short_reg": false,
              "is_blocked": false,
              "registered_date": 1504531241,
              "town": {
                  "id": 146,
                  "title": "Саратов",
                  "declension": "в Саратове",
                  "hasMetro": false,
                  "genitive": "Саратова"
              }
          },
          "languages": [],
          "driving_licence": [],
          "catalogues": [
              {
                  "id": 33,
                  "title": "IT, Интернет, связь, телеком",
                  "key": 33,
                  "positions": [
                      {
                          "id": 48,
                          "title": "Разработка, программирование",
                          "key": 48
                      },
                      {
                          "id": 503,
                          "title": "Внедрение и сопровождение ПО",
                          "key": 503
                      }
                  ]
              }
          ],
          "agency": {
              "id": 1,
              "title": "прямой работодатель"
          },
          "town": {
              "id": 146,
              "title": "Саратов",
              "declension": "в Саратове",
              "hasMetro": false,
              "genitive": "Саратова"
          },
          "already_sent_on_vacancy": false,
          "rejected": false,
          "response_info": [],
          "phone": "+7 (937) 2556852, +7 (8452) 390424 доб. 7020",
          "phones": [
              {
                  "number": 79372556852,
                  "additionalNumber": null
              },
              {
                  "number": 78452390424,
                  "additionalNumber": 7020
              }
          ],
          "fax": null,
          "faxes": null,
          "favorite": false,
          "client_logo": "https://public.superjob.ru/images/clients_logos.ru/3275780_6b2d20e3dd32f95d5ef0d374b57d16dd.jpg",
          "highlight": false,
          "age_from": 0,
          "age_to": 0,
          "gender": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "firm_name": "ДСК Грас",
          "firm_activity": "Производство газобетона.",
          "link": "https://saratov.superjob.ru/vakansii/programmist-43429226.html",
          "isBlacklisted": false,
          "latitude": null,
          "longitude": null
      },
      {
          "canEdit": false,
          "is_closed": false,
          "id": 45594068,
          "id_client": 4292976,
          "payment_from": 60000,
          "payment_to": 0,
          "date_pub_to": 1687172703,
          "date_archived": 0,
          "date_published": 1684580703,
          "address": "Московская область, Коломна",
          "profession": "Программист",
          "work": null,
          "compensation": null,
          "candidat": "Обязанности:\n• Реализация алгоритмов и структур данных для решения задач\nорганизации. Разработка веб-сервисов, системных утилит, систем\nавтоматизации. Осуществление технической поддержки сотрудников. \n\nТребования:\n• Высшее техническое образование. Уверенное знание и опыт\nразработки на Python 3, JS, PostgreSQL. Опыт работы с Linux на уровне\nадминистратора. \n• Знание современных информационных и сетевых технологий.\nГотовность работать в режиме многозадачности. \nУсловия:\n• 40 часовая р/неделя, 8 часовой р/день, с 8.00 до 17.00, выходной - суббота , воскресенье\n• Удалённая работа не рассматривается",
          "metro": [],
          "currency": "rub",
          "vacancyRichText": "<b>Обязанности:</b><ul><li> Реализация алгоритмов и структур данных для решения задач<br />организации. Разработка веб-сервисов, системных утилит, систем<br />автоматизации. Осуществление технической поддержки сотрудников.  <br /></li></ul><b>Требования:</b><ul><li>  Высшее техническое образование. Уверенное знание и опыт<br />разработки на Python 3, JS, PostgreSQL. Опыт работы с Linux на уровне<br />администратора.   </li><li>  Знание современных информационных и сетевых технологий.<br />Готовность работать в режиме многозадачности.   </li></ul><b>Условия:</b><ul><li>40 часовая р/неделя, 8 часовой р/день,  с 8.00 до 17.00, выходной - суббота , воскресенье</li><li>Удалённая работа не рассматривается</li></ul>",
          "covid_vaccination_requirement": {
              "id": 1,
              "title": "Не важно"
          },
          "external_url": null,
          "contact": "Павел Синёв",
          "moveable": true,
          "agreement": false,
          "anonymous": false,
          "is_archive": false,
          "is_storage": false,
          "type_of_work": {
              "id": 6,
              "title": "Полный рабочий день"
          },
          "place_of_work": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "education": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "experience": {
              "id": 1,
              "title": "Без опыта"
          },
          "maritalstatus": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "children": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "client": {
              "id": 4292976,
              "title": "Департамент городского хозяйства",
              "link": "https://www.superjob.ru/clients/departament-gorodskogo-hozyajstva-4292976/vacancies.html",
              "industry": [],
              "description": "Ремонт и техническое обслуживание многоквартирных домов.",
              "vacancy_count": 12,
              "staff_count": "менее 50",
              "client_logo": null,
              "address": null,
              "addresses": [],
              "url": "http://ooodgh.ru",
              "short_reg": false,
              "is_blocked": false,
              "registered_date": 1644329346,
              "town": {
                  "id": 838,
                  "title": "Коломна",
                  "declension": "в Коломне",
                  "hasMetro": false,
                  "genitive": "Коломны"
              }
          },
          "languages": [],
          "driving_licence": [],
          "catalogues": [
              {
                  "id": 33,
                  "title": "IT, Интернет, связь, телеком",
                  "key": 33,
                  "positions": [
                      {
                          "id": 503,
                          "title": "Внедрение и сопровождение ПО",
                          "key": 503
                      }
                  ]
              }
          ],
          "agency": {
              "id": 1,
              "title": "прямой работодатель"
          },
          "town": {
              "id": 838,
              "title": "Коломна",
              "declension": "в Коломне",
              "hasMetro": false,
              "genitive": "Коломны"
          },
          "already_sent_on_vacancy": false,
          "rejected": false,
          "response_info": [],
          "phone": "+7 (496) 6185819",
          "phones": [
              {
                  "number": 74966185819,
                  "additionalNumber": null
              }
          ],
          "fax": null,
          "faxes": null,
          "favorite": false,
          "client_logo": null,
          "highlight": false,
          "age_from": 0,
          "age_to": 0,
          "gender": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "firm_name": "Департамент городского хозяйства",
          "firm_activity": "Ремонт и техническое обслуживание многоквартирных домов.",
          "link": "https://kolomna.superjob.ru/vakansii/programmist-45594068.html",
          "isBlacklisted": false,
          "latitude": 55.103035,
          "longitude": 38.752808
      },
      {
          "canEdit": false,
          "is_closed": false,
          "id": 46050790,
          "id_client": 395739,
          "payment_from": 90000,
          "payment_to": 90000,
          "date_pub_to": 1685713178,
          "date_archived": 1682671502,
          "date_published": 1684676378,
          "address": "Москва, Кантемировская улица, 58",
          "profession": "Программист 1С",
          "work": null,
          "compensation": null,
          "candidat": "Обязанности:\n• доработка нетиповой конфигурации 1С УПП;\n• разработка и внедрение изменений конфигурации, отчетов и обработок по техническим заданиям;\n• поддержка обмена данными между базами 1С (отслеживание и исправление ошибок при обмене);\n• консультация пользователей.\n\nТребования:\n• опыт аналогичный от 3 лет;\n• опыт профессиональной разработки на платформе 1С: предприятие 8;\n• знание основ бухгалтерского и управленческого учета;\n• знание основных механизмов платформы 1С, в том числе СКД, RLS и работы с управляемым приложением;\n• желательно: знание механизмов обмена данными в формате XML.\nУсловия:\n• график работы с 09-00 до 18-00, Пн-Пт, полный рабочий день;\n• оформление с первого дня работы;\n• оплачиваемый отпуск 28 календарных дней, некурящим сотрудникам +2 дня оплачиваемого отпуска;\n• ежегодные премии за выслугу лет, подарки по праздникам;\nНаш офис находится в районе станции метро Кантемировская, шаговая доступность.\nОборудованное место для каждого сотрудника, во всех помещениях установлены кондиционеры.\nНа первом этаже бизнес-центра - столовая, также есть своя комната для приема пищи (холодильник/микроволновка).",
          "metro": [],
          "currency": "rub",
          "vacancyRichText": "<b>Обязанности:</b><ul><li>доработка нетиповой конфигурации 1С УПП;</li><li>разработка и внедрение изменений конфигурации, отчетов и обработок по техническим заданиям;</li><li>поддержка обмена данными между базами 1С (отслеживание и исправление ошибок при обмене);</li><li>консультация пользователей.</li></ul><p><b><br /></b><b>Требования:</b></p><ul><li>опыт аналогичный от 3 лет;</li><li>опыт профессиональной разработки на платформе 1С: предприятие 8;</li><li>знание основ бухгалтерского и управленческого учета;</li><li>знание основных механизмов платформы 1С, в том числе СКД, RLS и работы с управляемым приложением;</li><li>желательно: знание механизмов обмена данными в формате XML.</li></ul><p><b>Условия:</b></p><ul><li>график работы с 09-00 до 18-00, Пн-Пт, полный рабочий день;</li><li>оформление с первого дня работы;</li><li>оплачиваемый отпуск 28 календарных дней, некурящим сотрудникам +2 дня оплачиваемого отпуска;</li><li>ежегодные премии за выслугу лет, подарки по праздникам;</li></ul><p>Наш офис находится в районе станции метро Кантемировская, шаговая доступность.</p><p>Оборудованное место для каждого сотрудника, во всех помещениях установлены кондиционеры.</p><p>На первом этаже бизнес-центра - столовая, также есть своя комната для приема пищи (холодильник/микроволновка).</p>",
          "covid_vaccination_requirement": {
              "id": 1,
              "title": "Не важно"
          },
          "external_url": null,
          "contact": "Рачкова Светлана",
          "moveable": true,
          "agreement": false,
          "anonymous": false,
          "is_archive": false,
          "is_storage": false,
          "type_of_work": {
              "id": 6,
              "title": "Полный рабочий день"
          },
          "place_of_work": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "education": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "experience": {
              "id": 2,
              "title": "От 1 года"
          },
          "maritalstatus": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "children": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "client": {
              "id": 395739,
              "title": "АКП-Техно",
              "link": "https://www.superjob.ru/clients/akp-tehno-395739/vacancies.html",
              "industry": [],
              "description": "Алюминстрой – динамично развивающееся производственно-коммерческое предприятие. Алюминстрой ставит перед собой ясно выраженные цели и владеет всеми инструментами для их достижения. Со дня своего основания Алюминстрой формирует облик современного города, содействует росту благосостояния регионов России. Мы понимаем важность социальной ответственности нашей работы и останемся примером в вопросах социальной защищенности наших сотрудников.",
              "vacancy_count": 69,
              "staff_count": "100 — 500",
              "client_logo": "https://public.superjob.ru/images/clients_logos.ru/395739_5bfe7d923c04e654bda519e19ea6fbed.jpg",
              "address": "Москва, ул. Кантемировская д.58",
              "addresses": [
                  {
                      "addressString": "Москва, ул. Кантемировская д.58",
                      "latitude": 55.639187,
                      "longitude": 37.645258,
                      "phones": []
                  }
              ],
              "url": "http://www.aluminstroy.ru",
              "short_reg": false,
              "is_blocked": false,
              "registered_date": 1267605600,
              "town": {
                  "id": 4,
                  "title": "Москва",
                  "declension": "в Москве",
                  "hasMetro": true,
                  "genitive": "Москвы"
              }
          },
          "languages": [],
          "driving_licence": [],
          "catalogues": [
              {
                  "id": 33,
                  "title": "IT, Интернет, связь, телеком",
                  "key": 33,
                  "positions": [
                      {
                          "id": 48,
                          "title": "Разработка, программирование",
                          "key": 48
                      },
                      {
                          "id": 49,
                          "title": "Сетевые технологии",
                          "key": 49
                      },
                      {
                          "id": 51,
                          "title": "Системное администрирование",
                          "key": 51
                      },
                      {
                          "id": 53,
                          "title": "Системы управления предприятием (ERP)",
                          "key": 53
                      },
                      {
                          "id": 55,
                          "title": "Телекоммуникации и связь",
                          "key": 55
                      }
                  ]
              }
          ],
          "agency": {
              "id": 1,
              "title": "прямой работодатель"
          },
          "town": {
              "id": 4,
              "title": "Москва",
              "declension": "в Москве",
              "hasMetro": true,
              "genitive": "Москвы"
          },
          "already_sent_on_vacancy": false,
          "rejected": false,
          "response_info": [],
          "phone": "+7 (495) 2129221 доб. 111, +7 (963) 7596886",
          "phones": [
              {
                  "number": 74952129221,
                  "additionalNumber": 111
              },
              {
                  "number": 79637596886,
                  "additionalNumber": null
              }
          ],
          "fax": null,
          "faxes": null,
          "favorite": false,
          "client_logo": "https://public.superjob.ru/images/clients_logos.ru/395739_5bfe7d923c04e654bda519e19ea6fbed.jpg",
          "highlight": false,
          "age_from": 0,
          "age_to": 0,
          "gender": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "firm_name": "АКП-Техно",
          "firm_activity": "Кто мы?\nМы - крупнейший производитель современных фасадных материалов, широко востребованных в строительстве. Мы входим в тройку лидеров рынка и продолжаем развиваться, а это значит, что мы все время в движении. Мы активно развиваем свою филиальную сеть - на сегодня у нас 15 филиалов на территории РФ. \nЧто у нас есть?\nУ нас есть свое новое производство, а это значит, что мы уверены в том, что качественно выполним любой заказ клиента. \nУ нас есть все инструменты для того, чтобы много продавать и много зарабатывать, а это значит, что мы не ставим себе ограничений ни в росте, ни в заработке. \nМы рады видеть в своей команде людей активных, честных, стремящихся жить интересно и верящих в свой успех.",
          "link": "https://www.superjob.ru/vakansii/programmist-1s-46050790.html",
          "isBlacklisted": false,
          "latitude": 55.639191,
          "longitude": 37.645267
      },
      {
          "canEdit": false,
          "is_closed": false,
          "id": 46169996,
          "id_client": 514531,
          "payment_from": 0,
          "payment_to": 0,
          "date_pub_to": 1686570940,
          "date_archived": 0,
          "date_published": 1684497235,
          "address": "Алтуфьевское шоссе 48к.1",
          "profession": "Программист 1С",
          "work": null,
          "compensation": null,
          "candidat": "В компанию-производитель ПВХ-окон требуется сотрудник на должность \"Программист 1С\".\nНЕ УДАЛЕНКА! ОФИС М. БИБИРЕВО.\n \nОБЯЗАННОСТИ:\n Составление технических заданий на разработку;\n Разработка с нуля и доработка нетиповых конфигураций 1с по техническим заданиям;\n Интеграция и обмен между базами данных с использованием платформы 1С:(Технологии\nКД2.0, ADO, WS, HTTP);\n Оптимизация запросов и алгоритмов;\n Создание обработок, отчетов по техническим заданиям;\n Работа с высоконагруженными системами, оптимизация программных решений.\nТРЕБОВАНИЯ:\n• Наличие сертификата \"специалист по платформе 1С 8.3\" либо наличие соответствующих знаний и готовность его получить.\n• Знание основ отражения производственных процессов в рамках типовой конфигурации УПП 1.3. (приветствуется).\n• Опыт создания не типовых обменов между различными базами данных, в том числе FireBird (приветствуется).\n• Опыт написания оптимальных запросов в 1С, прямых запросов на T-SQL.\n• Опыт работы с оборудованием чтения и печати штрихкодов в 1С (сканеры, ТСД, принтеры этикеток).\n• Навык чтения чужого кода, умение разобраться в сложных алгоритмах по коду.\n• Желание участвовать в интересных и сложных проектах.\n• Ответственное отношения к работе.\nРАБОТАЯ У НАС, ВЫ ПОЛУЧАЕТЕ:\n√ Стабильная работа в стабильной компании (25лет на оконном рынке)\n√ Место работы: бизнес-центр расположен в пешей/транспортной доступности от м. Алтуфьево, Бибирево, Отрадное, Владыкино : Алтуфьевское шоссе, 48 к.1.\n√ Заработная плата обсуждается на собеседовании, выплаты без задержек;\n√ Перспектива карьерного роста;\n√ Много интересных, разноплановых задач.\nЗВОНИТЕ И ОТКЛИКАЙТЕСЬ!",
          "metro": [],
          "currency": "rub",
          "vacancyRichText": "<p>В компанию-производитель ПВХ-окон требуется сотрудник на должность \"Программист 1С\".</p><p>НЕ УДАЛЕНКА! ОФИС М. БИБИРЕВО.</p><p> </p><p>ОБЯЗАННОСТИ:</p><p> Составление технических заданий на разработку;</p><p> Разработка с нуля и доработка нетиповых конфигураций 1с по техническим заданиям;</p><p> Интеграция и обмен между базами данных с использованием платформы 1С:(Технологии</p><p>КД2.0, ADO, WS, HTTP);</p><p> Оптимизация запросов и алгоритмов;</p><p> Создание обработок, отчетов по техническим заданиям;</p><p> Работа с высоконагруженными системами, оптимизация программных решений.</p><p>ТРЕБОВАНИЯ:</p><ul><li>Наличие сертификата \"специалист по платформе 1С 8.3\" либо наличие соответствующих знаний и готовность его получить.</li><li>Знание основ отражения производственных процессов в рамках типовой конфигурации УПП 1.3. (приветствуется).</li><li>Опыт создания не типовых обменов между различными базами данных, в том числе FireBird (приветствуется).</li><li>Опыт написания оптимальных запросов в 1С, прямых запросов на T-SQL.</li><li>Опыт работы с оборудованием чтения и печати штрихкодов в 1С (сканеры, ТСД, принтеры этикеток).</li><li>Навык чтения чужого кода, умение разобраться в сложных алгоритмах по коду.</li><li>Желание участвовать в интересных и сложных проектах.</li><li>Ответственное отношения к работе.</li></ul><p>РАБОТАЯ У НАС, ВЫ ПОЛУЧАЕТЕ:</p><p>√ Стабильная работа в стабильной компании (25лет на оконном рынке)</p><p>√ Место работы: бизнес-центр расположен в пешей/транспортной доступности от м. Алтуфьево, Бибирево, Отрадное, Владыкино : Алтуфьевское шоссе, 48 к.1.</p><p>√ Заработная плата обсуждается на собеседовании, выплаты без задержек;</p><p>√ Перспектива карьерного роста;</p><p>√ Много интересных, разноплановых задач.</p><p>ЗВОНИТЕ И ОТКЛИКАЙТЕСЬ!</p>   ",
          "covid_vaccination_requirement": {
              "id": 1,
              "title": "Не важно"
          },
          "external_url": null,
          "contact": "Алена Городняя",
          "moveable": true,
          "agreement": true,
          "anonymous": false,
          "is_archive": false,
          "is_storage": false,
          "type_of_work": {
              "id": 6,
              "title": "Полный рабочий день"
          },
          "place_of_work": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "education": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "experience": {
              "id": 3,
              "title": "От 3 лет"
          },
          "maritalstatus": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "children": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "client": {
              "id": 514531,
              "title": "Компания Домком",
              "link": "https://www.superjob.ru/clients/kompaniya-domkom-514531/vacancies.html",
              "industry": [],
              "description": "Уже 25 лет компания \"ДОМКОМ\" работает на оконном рынке и является ведущей компанией –производителем окон ПВХ с филиалами более чем в 30 городах России.\nНаши клиенты ценят нас за широкий предлагаемый ассортимент и качество изделий, доступные цены, оперативность доставки и высокий клиентский сервис.\nА наши сотрудники уверены в завтрашнем дне, т. к. работают в крупной компании с именем, обеспечивающей работу круглый год и выплаты в срок. Присоединяйтесь в нам и ВЫ!",
              "vacancy_count": 19,
              "staff_count": "100 — 500",
              "client_logo": null,
              "address": null,
              "addresses": [],
              "url": "http://www.oknadomkom.ru",
              "short_reg": false,
              "is_blocked": false,
              "registered_date": 1285789780,
              "town": {
                  "id": 4,
                  "title": "Москва",
                  "declension": "в Москве",
                  "hasMetro": true,
                  "genitive": "Москвы"
              }
          },
          "languages": [],
          "driving_licence": [],
          "catalogues": [
              {
                  "id": 11,
                  "title": "Бухгалтерия, финансы, аудит",
                  "key": 11,
                  "positions": [
                      {
                          "id": 14,
                          "title": "Бухгалтерский учет",
                          "key": 14
                      }
                  ]
              },
              {
                  "id": 33,
                  "title": "IT, Интернет, связь, телеком",
                  "key": 33,
                  "positions": [
                      {
                          "id": 48,
                          "title": "Разработка, программирование",
                          "key": 48
                      }
                  ]
              }
          ],
          "agency": {
              "id": 1,
              "title": "прямой работодатель"
          },
          "town": {
              "id": 4,
              "title": "Москва",
              "declension": "в Москве",
              "hasMetro": true,
              "genitive": "Москвы"
          },
          "already_sent_on_vacancy": false,
          "rejected": false,
          "response_info": [],
          "phone": "+7 (963) 6929567",
          "phones": [
              {
                  "number": 79636929567,
                  "additionalNumber": null
              }
          ],
          "fax": null,
          "faxes": null,
          "favorite": false,
          "client_logo": null,
          "highlight": true,
          "age_from": 0,
          "age_to": 0,
          "gender": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "firm_name": "Компания Домком",
          "firm_activity": "Уже 25 лет компания \"ДОМКОМ\" работает на оконном рынке и является ведущей компанией –производителем окон ПВХ с филиалами более чем в 30 городах России. \nНаши клиенты ценят нас за широкий предлагаемый ассортимент и качество изделий, доступные цены, оперативность доставки и высокий клиентский сервис. \nА наши сотрудники уверены в завтрашнем дне, т. к. работают в крупной компании с именем, обеспечивающей работу круглый год и выплаты в срок. Присоединяйтесь в нам и ВЫ!",
          "link": "https://www.superjob.ru/vakansii/programmist-1s-46169996.html",
          "isBlacklisted": false,
          "latitude": null,
          "longitude": null
      },
      {
          "canEdit": false,
          "is_closed": false,
          "id": 46233043,
          "id_client": 4455182,
          "payment_from": 35000,
          "payment_to": 0,
          "date_pub_to": 1687256705,
          "date_archived": 0,
          "date_published": 1684664705,
          "address": "Смоленск, проспект Гагарина, 10/2",
          "profession": "Программист 1С",
          "work": null,
          "compensation": null,
          "candidat": "Ваши задачи:\n• Реализовывать проекты в соответствии с ТЗ пользователей;\n• Принимать участвовать в проектах (API, мобильные приложения и т.п.);\n• Дорабатывать существующие типовые и нетиповые конфигурации по заявкам пользователей;\nВы нам подходите, если:\n• У вас есть знания типовых конфигураций 1С;\n• У вас есть знания внутренних механизмов платформы 1С;\n• У вас есть опыт программирования в среде 1С от 2 лет;\n• Вы имеете базовые навыки по технологиям обмена (КД, http, ws);\n• Уверенно знаете СКД;\n• Понимаете базовые принципы регламентированного учета;\n• Наличие сертификатов 1С будет конкурентным преимуществом;\n• У вас есть опыт взаимодействия с API - интерфейсами внешних систем.",
          "metro": [],
          "currency": "rub",
          "vacancyRichText": "<p>Ваши задачи:</p><ul><li>Реализовывать проекты в соответствии с ТЗ пользователей;</li><li>Принимать участвовать в проектах (API, мобильные приложения и т.п.);</li><li>Дорабатывать существующие типовые и нетиповые конфигурации по заявкам пользователей;</li></ul><p>Вы нам подходите, если:</p><ul><li>У вас есть знания типовых конфигураций 1С;</li><li>У вас есть знания внутренних механизмов платформы 1С;</li><li>У вас есть опыт программирования в среде 1С от 2 лет;</li><li>Вы имеете базовые навыки по технологиям обмена (КД, http, ws);</li><li>Уверенно знаете СКД;</li><li>Понимаете базовые принципы регламентированного учета;</li><li>Наличие сертификатов 1С будет конкурентным преимуществом;</li><li>У вас есть опыт взаимодействия с API - интерфейсами внешних систем.</li></ul>",
          "covid_vaccination_requirement": {
              "id": 1,
              "title": "Не важно"
          },
          "external_url": null,
          "contact": "Елена Катеринчик",
          "moveable": true,
          "agreement": false,
          "anonymous": false,
          "is_archive": false,
          "is_storage": false,
          "type_of_work": {
              "id": 6,
              "title": "Полный рабочий день"
          },
          "place_of_work": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "education": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "experience": {
              "id": 2,
              "title": "От 1 года"
          },
          "maritalstatus": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "children": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "client": {
              "id": 4455182,
              "title": "ТРАНСОПТТОРГ",
              "link": "https://www.superjob.ru/clients/transopttorg-4455182/vacancies.html",
              "industry": [],
              "description": "Мы занимаемся внедрением услуг по автоматизации бизнеса. Наши клиенты получают современное программное обеспечение, технологичное торгово-кассовое оборудование, постоянную техническую поддержку и множество удобных сервисов.\nКаждый из наших сотрудников регулярно повышает свою квалификацию, благодаря этому мы реализовываем самые сложные и длительные проекты наших клиентов.\nМы устанавливаем, настраиваем и запускаем автоматизацию различных бизнес-процессов: начиная с логистических систем управления и заканчивая установками для call-центров. Наша компания также занимается технической стороной любого бизнеса: монтаж, настройка и обслуживание локальных сетей, компьютеров и периферийной техники. Мы являемся официальным поставщиком программного обеспечения 1С, и внедряем эффективные продукты для бухгалтерского учёта в любую организацию. Больше 5 лет мы успешно обслуживаем множество организаций, работаем с предприятиями во всех сферах торговли, обслуживания и управления.",
              "vacancy_count": 3,
              "staff_count": "менее 50",
              "client_logo": "https://public.superjob.ru/images/clients_logos.ru/4455182_e30ade89c0c39d787ff03aea569df12d.png",
              "address": null,
              "addresses": [],
              "url": "http://mnsrv.ru",
              "short_reg": false,
              "is_blocked": false,
              "registered_date": 1680778248,
              "town": {
                  "id": 312,
                  "title": "Смоленск",
                  "declension": "в Смоленске",
                  "hasMetro": false,
                  "genitive": "Смоленска"
              }
          },
          "languages": [],
          "driving_licence": [],
          "catalogues": [
              {
                  "id": 33,
                  "title": "IT, Интернет, связь, телеком",
                  "key": 33,
                  "positions": [
                      {
                          "id": 37,
                          "title": "Администрирование баз данных",
                          "key": 37
                      },
                      {
                          "id": 48,
                          "title": "Разработка, программирование",
                          "key": 48
                      },
                      {
                          "id": 53,
                          "title": "Системы управления предприятием (ERP)",
                          "key": 53
                      },
                      {
                          "id": 503,
                          "title": "Внедрение и сопровождение ПО",
                          "key": 503
                      },
                      {
                          "id": 605,
                          "title": "Управление проектами",
                          "key": 605
                      }
                  ]
              }
          ],
          "agency": {
              "id": 1,
              "title": "прямой работодатель"
          },
          "town": {
              "id": 312,
              "title": "Смоленск",
              "declension": "в Смоленске",
              "hasMetro": false,
              "genitive": "Смоленска"
          },
          "already_sent_on_vacancy": false,
          "rejected": false,
          "response_info": [],
          "phone": "+7 (920) 3389536",
          "phones": [
              {
                  "number": 79203389536,
                  "additionalNumber": null
              }
          ],
          "fax": null,
          "faxes": null,
          "favorite": false,
          "client_logo": "https://public.superjob.ru/images/clients_logos.ru/4455182_e30ade89c0c39d787ff03aea569df12d.png",
          "highlight": false,
          "age_from": 0,
          "age_to": 0,
          "gender": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "firm_name": "ТРАНСОПТТОРГ",
          "firm_activity": "Мы занимаемся внедрением услуг по автоматизации бизнеса. Наши клиенты получают современное программное обеспечение, технологичное торгово-кассовое оборудование, постоянную техническую поддержку и множество удобных сервисов. \nКаждый из наших сотрудников регулярно повышает свою квалификацию, благодаря этому мы реализовываем самые сложные и длительные проекты наших клиентов. \nМы устанавливаем, настраиваем и запускаем автоматизацию различных бизнес-процессов: начиная с логистических систем управления и заканчивая установками для call-центров. Наша компания также занимается технической стороной любого бизнеса: монтаж, настройка и обслуживание локальных сетей, компьютеров и периферийной техники. Мы являемся официальным поставщиком программного обеспечения 1С, и внедряем эффективные продукты для бухгалтерского учёта в любую организацию. Больше 5 лет мы успешно обслуживаем множество организаций, работаем с предприятиями во всех сферах торговли, обслуживания и управления.",
          "link": "https://smolensk.superjob.ru/vakansii/programmist-1s-46233043.html",
          "isBlacklisted": false,
          "latitude": 54.774868,
          "longitude": 32.045727
      },
      {
          "canEdit": false,
          "is_closed": false,
          "id": 46240429,
          "id_client": 534629,
          "payment_from": 70000,
          "payment_to": 0,
          "date_pub_to": 1684909964,
          "date_archived": 0,
          "date_published": 1684650764,
          "address": "Волгоград, Мачтозаводская улица, 1",
          "profession": "Инженер-программист",
          "work": null,
          "compensation": null,
          "candidat": "Обязанности: \n- Разработка программ, обеспечивающих возможность выполнения алгоритма средствами вычислительной техники, проведение тестирований и отладки их;\n- Разработка технологий решения задач по всем этапам обработки информации;\n- Корректировка разработанных программ на основании анализа выходных данных;\n- Разработка инструкций по работе с программами, оформление технической документации;\n- Сопровождение внедренных программ и программных средств;\n- Разработка и внедрение системы автоматической проверки правильности программ, программных средств, составление технологии обработки информации;\n- Участие в создании каталогов и карточек стандартных программ и в разработке форм документов, подлежащих машинной обработке и проектировании программ.\n Требования: \n- Практический продуктивный опыт разработки на 1С 8.х;\n- Знания типовых объектов метаданных, БСП, запросов, СКД и управляемых форм;\n- Умение писать понятный код без грубых ошибок оптимизации;\n- Умение правильно дорабатывать конфигурацию, с минимальными проблемами с обновлением;\n- Опыт по доработке типовых конфигураций программы (УПП, ERP, ЗУП, Бух);\n- Опыт сопровождения ЭДО, кассового ПО;\n- Практические навыки обучения пользователей и сопровождению их запросов;\n- Опыт администрирования и оптимизации работы ИБ1С на MS SQL Server;\n- Знание основ бухгалтерского, складского и производственного учета;\n- Высшее профильное образование.\n Условия: \n-Оклад + бонус по результатам работы;\n-Наличие интересных и сложных задач;\n-Постоянная работа на территории работодателя (Красноармейский р-н г. Волгограда).\n-Работа в стабильной, динамично развивающейся компании;\n-Официальное оформление по ТК РФ (белая заработная плата, отпуск, больничный);\n-Своевременная выплата заработной платы два раза в месяц;\n-График работы: пятидневная рабочая неделя с 8:00 до 17:00.",
          "metro": [],
          "currency": "rub",
          "vacancyRichText": "Обязанности: <p>- Разработка программ, обеспечивающих возможность выполнения алгоритма средствами вычислительной техники, проведение тестирований и отладки их;<br />- Разработка технологий решения задач по всем этапам обработки информации;<br />- Корректировка разработанных программ на основании анализа выходных данных;<br />- Разработка инструкций по работе с программами, оформление технической документации;<br />- Сопровождение внедренных программ и программных средств;<br />- Разработка и внедрение системы автоматической проверки правильности программ, программных средств, составление технологии обработки информации;<br />- Участие в создании каталогов и карточек стандартных программ и в разработке форм документов, подлежащих машинной обработке и проектировании программ.</p> Требования: <p>- Практический продуктивный опыт разработки на 1С 8.х;<br />- Знания типовых объектов метаданных, БСП, запросов, СКД и управляемых форм;<br />- Умение писать понятный код без грубых ошибок оптимизации;<br />- Умение правильно дорабатывать конфигурацию, с минимальными проблемами с обновлением;<br />- Опыт по доработке типовых конфигураций программы (УПП, ERP, ЗУП, Бух);<br />- Опыт сопровождения ЭДО, кассового ПО;<br />- Практические навыки обучения пользователей и сопровождению их запросов;<br />- Опыт администрирования и оптимизации работы ИБ1С на MS SQL Server;<br />- Знание основ бухгалтерского, складского и производственного учета;<br />- Высшее профильное образование.</p> Условия: <p>-Оклад + бонус по результатам работы;<br />-Наличие интересных и сложных задач;<br />-Постоянная работа на территории работодателя (Красноармейский р-н г. Волгограда).<br />-Работа в стабильной, динамично развивающейся компании;<br />-Официальное оформление по ТК РФ (белая заработная плата, отпуск, больничный);<br />-Своевременная выплата заработной платы два раза в месяц;<br />-График работы: пятидневная рабочая неделя с 8:00 до 17:00.</p>",
          "covid_vaccination_requirement": {
              "id": 1,
              "title": "Не важно"
          },
          "external_url": null,
          "contact": "Ветрова Ольга Николаевна",
          "moveable": false,
          "agreement": false,
          "anonymous": false,
          "is_archive": false,
          "is_storage": false,
          "type_of_work": {
              "id": 6,
              "title": "Полный рабочий день"
          },
          "place_of_work": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "education": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "experience": {
              "id": 3,
              "title": "От 3 лет"
          },
          "maritalstatus": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "children": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "client": {
              "id": 534629,
              "title": "Волгоградский керамический завод",
              "link": "https://www.superjob.ru/clients/volgogradskij-keramicheskij-zavod-534629/vacancies.html",
              "industry": [],
              "description": "Современное успешно работающее предприятие по производству: глазурованной керамической плитки для внутренней облицовки стен и пола, декоративных элементов, санитарной сантехники. Завод уже 50 лет радует потребителей своей продукцией. За последние годы предприятие кардинально изменило свою политику, сделав главный акцент именно на удовлетворении покупательского спроса, а также на повышении качества продукции.",
              "vacancy_count": 3,
              "staff_count": "1000 — 5000",
              "client_logo": "https://public.superjob.ru/images/clients_logos.ru/534629_5803fdaabbe78d8824ebdc9929541544.png",
              "address": null,
              "addresses": [],
              "url": "http://www.vkz.ru",
              "short_reg": false,
              "is_blocked": false,
              "registered_date": 1288695208,
              "town": {
                  "id": 89,
                  "title": "Волгоград",
                  "declension": "в Волгограде",
                  "hasMetro": true,
                  "genitive": "Волгограда"
              }
          },
          "languages": [],
          "driving_licence": [],
          "catalogues": [
              {
                  "id": 33,
                  "title": "IT, Интернет, связь, телеком",
                  "key": 33,
                  "positions": [
                      {
                          "id": 41,
                          "title": "Инжиниринг",
                          "key": 41
                      },
                      {
                          "id": 48,
                          "title": "Разработка, программирование",
                          "key": 48
                      }
                  ]
              }
          ],
          "agency": {
              "id": 1,
              "title": "прямой работодатель"
          },
          "town": {
              "id": 89,
              "title": "Волгоград",
              "declension": "в Волгограде",
              "hasMetro": true,
              "genitive": "Волгограда"
          },
          "already_sent_on_vacancy": false,
          "rejected": false,
          "response_info": [],
          "phone": null,
          "phones": null,
          "fax": null,
          "faxes": null,
          "favorite": false,
          "client_logo": "https://public.superjob.ru/images/clients_logos.ru/534629_5803fdaabbe78d8824ebdc9929541544.png",
          "highlight": true,
          "age_from": 0,
          "age_to": 0,
          "gender": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "firm_name": "Волгоградский керамический завод",
          "firm_activity": "Современное успешно работающее предприятие по производству: глазурованной керамической плитки для внутренней облицовки стен и пола, декоративных элементов, санитарной сантехники. Завод уже 50 лет радует потребителей своей продукцией. За последние годы предприятие кардинально изменило свою политику, сделав главный акцент именно на удовлетворении покупательского спроса, а также на повышении качества продукции.",
          "link": "https://volgograd.superjob.ru/vakansii/inzhener-programmist-46240429.html",
          "isBlacklisted": false,
          "latitude": 48.516766,
          "longitude": 44.597771
      },
      {
          "canEdit": false,
          "is_closed": false,
          "id": 46280809,
          "id_client": 4419547,
          "payment_from": 70000,
          "payment_to": 100000,
          "date_pub_to": 1685713387,
          "date_archived": 0,
          "date_published": 1684503787,
          "address": null,
          "profession": "PHP Программист",
          "work": null,
          "compensation": null,
          "candidat": "Вакансия программиста PHP в проекте \"Помощник водителя\". \nГруппа сайтов - сервисов для автомобилистов:\n• поиск и оплата штрафов ГИБДД, МАДИ, АМПП\n• продажа полисов ОСАГО и КАСКО\n• отчеты истории автомобилей\n• и много другое\nНикаких типовых сайтов и модулей к ним. Только хардкор.\n\nБольшинство задач уникальный в рамках проекта, повторяющихся задач будет немного. \nПод капотом проекта:\n• Сбор данных из разных источников (API, парсинг сайтов).\n• Внутренняя обработка данных, расчет статистки и т.п.\n• Рассылки клиентам, email, telegram, смс и другие сервисы. \n• Собственные API для наших сервисов\nВы сможет поработать большим количеством разных технологий:\n• мы работает с большим количеством сторонних API\n\n• мы поддерживаем и развиваем несколько своих API \n• у нас достаточно нагруженная система, базы данных с миллионами записей, сотни тысяч обращений в сутки\n• сайты\n• телеграм боты\nЧто нужно будет делать:\nПоектирование и реализация бизнес задач, написане методов API, внутренних бибилиотек, парсеров сайтов.\nТребования:\n• Уверенно знание PHP, SQL, \n• Базовое знание HTML, CSS, html, css применять придется редко, но знания о них нужны \n• Знание основ javascript, на уровне написать небольшой скирт работающий в браузере\n• Знание Symfony, doctrine2\n• Знание принципов ООП\n Желательно:\n• опыт работы с GIT, \n• опыт работы с docker\nУсловия:\n• гибкие, желательно 8 часов, 5 дней в неделю",
          "metro": [],
          "currency": "rub",
          "vacancyRichText": "<p>Вакансия программиста PHP в проекте \"Помощник водителя\". </p><p>Группа сайтов - сервисов для\nавтомобилистов:</p><ul><li>поиск и оплата штрафов ГИБДД, МАДИ, АМПП</li><li>продажа полисов ОСАГО и КАСКО</li><li>отчеты истории автомобилей</li><li>и много другое</li></ul><p><b>Никаких типовых сайтов и модулей к ним. Только хардкор.</b><br /></p><p>Большинство задач уникальный в рамках проекта, повторяющихся\nзадач будет немного. </p><p>Под капотом проекта:</p><ul><li>Сбор данных из разных источников (API, парсинг сайтов).</li><li>Внутренняя обработка данных, расчет статистки и т.п.</li><li>Рассылки клиентам, email, telegram,\nсмс и другие сервисы. </li><li>Собственные API\nдля наших сервисов</li></ul><p>Вы сможет поработать большим количеством разных технологий:</p><ul><li>мы работает с большим количеством сторонних API<br /></li><li>мы поддерживаем и развиваем несколько своих API </li><li>у нас достаточно нагруженная система, базы данных с миллионами\nзаписей, сотни тысяч обращений в сутки</li><li>сайты</li><li>телеграм боты</li></ul><b>Что нужно будет делать:</b><p>Поектирование и реализация бизнес задач, написане методов API, внутренних бибилиотек, парсеров сайтов.</p><p><b>Требования:</b></p><ul><li>Уверенно знание PHP, SQL,  </li><li>Базовое знание HTML, CSS, html,\ncss применять\nпридется редко, но знания о них нужны  </li><li>Знание основ javascript, на уровне написать небольшой скирт работающий в\nбраузере</li><li>Знание Symfony, doctrine2</li><li>Знание принципов ООП</li></ul><p> Желательно:</p><ul><li>опыт работы с GIT, </li><li>опыт работы с docker</li></ul><b>Условия:</b><ul><li>гибкие, желательно 8 часов, 5 дней в неделю</li></ul><p><br /></p>",
          "covid_vaccination_requirement": {
              "id": 1,
              "title": "Не важно"
          },
          "external_url": null,
          "contact": "Ярослав Киселев",
          "moveable": true,
          "agreement": false,
          "anonymous": false,
          "is_archive": false,
          "is_storage": false,
          "type_of_work": {
              "id": 6,
              "title": "Полный рабочий день"
          },
          "place_of_work": {
              "id": 2,
              "title": "Удалённая работа (на дому)"
          },
          "education": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "experience": {
              "id": 2,
              "title": "От 1 года"
          },
          "maritalstatus": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "children": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "client": {
              "id": 4419547,
              "title": "Помощник водителя",
              "link": "https://www.superjob.ru/clients/pomoschnik-voditelya-4419547/vacancies.html",
              "industry": [],
              "description": "«Помощник водителя» - онлайн сервисы для водителей, основанный в 2015 году.\n\nОсновные сервисы:\n\n- проверка и оплата штрафов ГИБДД\n- калькулятор ОСАГО\n- интерактивная карта камер ГИБДД.",
              "vacancy_count": 0,
              "staff_count": "менее 50",
              "client_logo": "https://public.superjob.ru/images/clients_logos.ru/4419547_3bb571e8042c6d3a5ac74915fa158860.png",
              "address": null,
              "addresses": [],
              "url": "https://www.driver-helper.ru",
              "short_reg": false,
              "is_blocked": false,
              "registered_date": 1671390743,
              "town": {
                  "id": 42,
                  "title": "Воронеж",
                  "declension": "в Воронеже",
                  "hasMetro": false,
                  "genitive": "Воронежа"
              }
          },
          "languages": [],
          "driving_licence": [],
          "catalogues": [
              {
                  "id": 33,
                  "title": "IT, Интернет, связь, телеком",
                  "key": 33,
                  "positions": [
                      {
                          "id": 48,
                          "title": "Разработка, программирование",
                          "key": 48
                      }
                  ]
              }
          ],
          "agency": {
              "id": 1,
              "title": "прямой работодатель"
          },
          "town": {
              "id": 42,
              "title": "Воронеж",
              "declension": "в Воронеже",
              "hasMetro": false,
              "genitive": "Воронежа"
          },
          "already_sent_on_vacancy": false,
          "rejected": false,
          "response_info": [],
          "phone": "+7 (950) 7594233",
          "phones": [
              {
                  "number": 79507594233,
                  "additionalNumber": null
              }
          ],
          "fax": null,
          "faxes": null,
          "favorite": false,
          "client_logo": "https://public.superjob.ru/images/clients_logos.ru/4419547_3bb571e8042c6d3a5ac74915fa158860.png",
          "highlight": false,
          "age_from": 0,
          "age_to": 0,
          "gender": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "firm_name": "Помощник водителя",
          "firm_activity": "«Помощник водителя» - онлайн сервисы для водителей, основанный в 2015 году. \n\nОсновные сервисы:\n\n- проверка и оплата штрафов ГИБДД\n- калькулятор ОСАГО\n- интерактивная карта камер ГИБДД.",
          "link": "https://voronezh.superjob.ru/vakansii/php-programmist-46280809.html",
          "isBlacklisted": false,
          "latitude": null,
          "longitude": null
      },
      {
          "canEdit": false,
          "is_closed": false,
          "id": 46285967,
          "id_client": 3399945,
          "payment_from": 50000,
          "payment_to": 0,
          "date_pub_to": 1685710762,
          "date_archived": 0,
          "date_published": 1684501162,
          "address": "Тула, улица Мосина, 2",
          "profession": "Инженер-программист",
          "work": null,
          "compensation": null,
          "candidat": "Обязанности:\n• \nРабота с базой данных, обслуживание и разработка нового ПО\nТребования:\nУсловия:",
          "metro": [],
          "currency": "rub",
          "vacancyRichText": "<b>Обязанности:</b><ul><li><p>Работа с базой данных, обслуживание и разработка нового ПО</p></li></ul><b>Требования:</b><br /><b>Условия:</b><br />",
          "covid_vaccination_requirement": {
              "id": 1,
              "title": "Не важно"
          },
          "external_url": null,
          "contact": "Марина Владимировна Мартынова",
          "moveable": true,
          "agreement": false,
          "anonymous": false,
          "is_archive": false,
          "is_storage": false,
          "type_of_work": {
              "id": 6,
              "title": "Полный рабочий день"
          },
          "place_of_work": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "education": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "experience": {
              "id": 2,
              "title": "От 1 года"
          },
          "maritalstatus": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "children": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "client": {
              "id": 3399945,
              "title": "Туламашзавод",
              "link": "https://www.superjob.ru/clients/tulamashzavod-3399945/vacancies.html",
              "industry": [],
              "description": "Производственное объединение ТУЛАМАШЗАВОД — один из крупнейших холдингов, включающий в себя материнскую Акционерную компанию ТУЛАМАШЗАВОД и двадцать дочерних обществ, в равной степени ориентированных как на выпуск изделий для оборонной промышленности, так и на производство продукции гражданского назначения.",
              "vacancy_count": 10,
              "staff_count": "менее 50",
              "client_logo": null,
              "address": "Тула, мосина дом 2",
              "addresses": [
                  {
                      "addressString": "Тула, мосина дом 2",
                      "latitude": 54.201739,
                      "longitude": 37.608275,
                      "phones": [
                          {
                              "number": 74872560286,
                              "additionalNumber": null
                          }
                      ]
                  }
              ],
              "url": "http://www.tulamash.ru",
              "short_reg": false,
              "is_blocked": false,
              "registered_date": 1519127212,
              "town": {
                  "id": 19,
                  "title": "Тула",
                  "declension": "в Туле",
                  "hasMetro": false,
                  "genitive": "Тулы"
              }
          },
          "languages": [],
          "driving_licence": [],
          "catalogues": [
              {
                  "id": 33,
                  "title": "IT, Интернет, связь, телеком",
                  "key": 33,
                  "positions": [
                      {
                          "id": 41,
                          "title": "Инжиниринг",
                          "key": 41
                      },
                      {
                          "id": 48,
                          "title": "Разработка, программирование",
                          "key": 48
                      }
                  ]
              }
          ],
          "agency": {
              "id": 1,
              "title": "прямой работодатель"
          },
          "town": {
              "id": 19,
              "title": "Тула",
              "declension": "в Туле",
              "hasMetro": false,
              "genitive": "Тулы"
          },
          "already_sent_on_vacancy": false,
          "rejected": false,
          "response_info": [],
          "phone": "+7 (4872) 321227",
          "phones": [
              {
                  "number": 74872321227,
                  "additionalNumber": null
              }
          ],
          "fax": null,
          "faxes": null,
          "favorite": false,
          "client_logo": null,
          "highlight": false,
          "age_from": 0,
          "age_to": 0,
          "gender": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "firm_name": "Туламашзавод",
          "firm_activity": "Производственное объединение ТУЛАМАШЗАВОД — один из крупнейших холдингов, включающий в себя материнскую Акционерную компанию ТУЛАМАШЗАВОД и двадцать дочерних обществ, в равной степени ориентированных как на выпуск изделий для оборонной промышленности, так и на производство продукции гражданского назначения.",
          "link": "https://tula.superjob.ru/vakansii/inzhener-programmist-46285967.html",
          "isBlacklisted": false,
          "latitude": 54.201118,
          "longitude": 37.613781
      },
      {
          "canEdit": false,
          "is_closed": false,
          "id": 46363137,
          "id_client": 398055,
          "payment_from": 200000,
          "payment_to": 0,
          "date_pub_to": 1686550652,
          "date_archived": 0,
          "date_published": 1684563452,
          "address": "Санкт-Петербург, Петроградская набережная, 38",
          "profession": "Программист C (Linux)",
          "work": null,
          "compensation": null,
          "candidat": "ОАО \"СУПЕРТЕЛ\" - уникальное Российское предприятие, которое самостоятельно разрабатывает и производит современное оборудование проводной (оптической) связи по технологиям OTN, IP, SDH, DWDM; на сегодня в производстве находится порядка 20 типов оборудования. \nДля участия в разработке нового оборудования неспешно ищем опытного программиста. Если Вы оцениваете свой уровень знаний/способностей выше, чем middle, не боитесь сложных задач и Вам нравится программировать на низком уровне (pure C) - будем рады пообщаться с Вами, даже если Ваш опыт отличается от требуемого для этой вакансии.\nУказанный опыт работы - более 6 лет - очень грубый формальный фильтр, от него возможны существенные отклонения. \nЗнание \"в принципе\" других языков программирования подразумевается по умолчанию; основная цель - уметь применить shell/python/perl/sql/etc.. в нужное время и в нужном месте.\n\nОбязанности:\n• Разработка системного и прикладного ПО (Embedded Linux) для телекоммуникационного оборудования \n• Сопровождение и отладка разработанного ПО\n• Участие в разработке современного и перспективного оборудования проводной (оптической) связи\n\nТребования:\n• Желание и умение самостоятельно решать сложные задачи \n• Разработка многопоточных приложений и понимание применения объектов синхронизации (mutex, semaphores, etc.) \n• Умение разбираться в чужом коде \n• Опыт разработки на C не менее 3-х лет \n• Знание средств разработки и отладки (gcc, gdb, Makefile, CMake, Shell scripting, etc.) \n• Знание систем контроля версий git или mercurial \n• Чтение технической документации на английском языке\n\nМы предлагаем:\n\n• Сложную и интересную работу с использованием передовых технологий \n• Адекватную \"белую\" заработную плату (уточняется в зависимости от Ваших знаний и опыта по результатам собеседования) \n• Оформление по трудовому кодексу \n• Уютный офис в центре города \n• Карьерный и профессиональный рост\n• Полис ДМС + льготное страхование для членов семьи\nДля Вас будет дополнительным преимуществом: \n\n• Умение писать код с минимальной избыточностью \n• Опыт разработки драйверов для Linux \n• Опыт работы с системой сборки Yocto/OpenEmbedded \n• Опыт работы с процессорами архитектуры PowerPC, ARM \n• Опыт разработки ПО для микроконтроллеров \n• Опыт работы с RTOS Опыт работы с аппаратными отладчиками JTAG \n• Опыт работы с сетевым оборудованием (L2/L3) либо оборудованием связи\nПриветствуется Ваше резюме с описанием опыта работы и, если есть, примеры кода, разработанного Вами (либо ссылка на него, если он есть в открытом доступе). \n Поскольку работа сложная, а требования к соискателю высокие - перед собеседованием обязательно потребуется выполнить тестовое задание.\n\nПростите за последующий длинный текст - этот сайт перестал поддерживать ссылки на внешние ресурсы \nТестовое задание и условия его выполнения: \n\nТестовое задание должно быть выполнено на «голом» C под Linux. \nТехнологии и языки, применяемые для web|desktop (типа python и CGI) использовать нельзя. \nПо результатам, с одной стороны - Вы немного познакомитесь с нашими задачами, с другой стороны – мы познакомимся с Вашим стилем программирования. Прошу не стесняться обращаться, если текст задания вызывает вопросы. \nРеализацию задачи и скомпилированный исполняемый файл(ы) нужно выслать мне по электронной почте; по результатам анализа - как правило, это несколько дней - либо мы договариваемся о дате/времени собеседования, либо Вы получаете отказ.\nЕсли Вас смущает передача 100% готового кода задания, то для предварительного просмотра достаточно ~70% исходников и исполняемого файла; остальное можно принести на собеседование. \nОбъясню, почему так : задачи, которые будут перед Вами стоять, в случае, если мы договоримся о сотрудничестве, несколько сложнее приведённых в тесте и решать их надо будет самостоятельно. Если Вы не справляетесь с тестовым заданием – нет смысла говорить о большем. Желаю Вам успеха и надеюсь, что наша позиция будет правильно понята. \nХотя, время, затраченное Вами на реализацию тестового задания для нас в общем-то некритично и не является главным при оценке результатов, нам бы хотелось получить решение в течение двух недель.\n\nТекст тестового задания: \n Два типа блоков – «control block» и «client1», «client2», …. , «clientN» соединены в одноранговую локальную сеть Ethernet. \nControl block, он же блок управления, он же «мастер-контроллер»; может быть в составе сети только в одном экземпляре.\nБлоки индикации, они же \"Client#\", имеются в количестве от 3 до 200. Все блоки распределены в пространстве и установлены на улице. Блоки объединены локальной сетью Ethernet. Каждый блок индикации имеет 2 датчика: датчик температуры и датчик освещенности. \nМастер-контроллер в произвольные моменты времени отправляет в блоки индикации данные для отображения; например: текст, температура, время и яркость. Так же, мастер-контроллер периодически (1 раз в 5 секунд) опрашивает все датчики с блоков индикации, рассчитывает среднее значение температуры и освещенности. Среднее значение температуры используется для отправки в блоки индикации в виде текста, а среднее значение освещенности используется для подстройки яркости отображаемой информации. Мастер-контроллер устанавливает значение яркости во все блоки индикации в соответствии с расчетным средним значением освещенности.\nИногда случается так, что блок управления теряет связь с блоками индикации (как повезёт - может со всеми, а может только с частью), поэтому блоки индикации остаются без управления на время более 5 минут. В этом случае роль блока управления должен взять один из блоков индикации, до того момента пока основной блок управления снова станет доступен. Блок индикации, который взял роль мастер-контроллера, так же может потерять связь с блоками индикации (как повезёт - может со всеми, а может только с частью), после чего должен выбраться новый мастер-контроллер.\nКоличество блоков индикации может меняться в процессе работы.\nДо момента подключения к сети мастер-контроллер ничего не знает о клиентах.\nПредложите и реализуйте в программе алгоритм выбора нового мастера между блоками индикации при потере соединения с блоком управления (основным блоком управления или блоком индикации, выполняющим функции мастер-контроллера). Описание алгоритма нужно представить в виде отдельного текстового файла.\nНапишите программу-эмулятор блока индикации, соответствующую описанию.\nНапишите программу-эмулятор блока управления, соответствующую описанию.",
          "metro": [],
          "currency": "rub",
          "vacancyRichText": "<p>ОАО \"СУПЕРТЕЛ\" - уникальное Российское предприятие, которое самостоятельно разрабатывает и производит современное оборудование проводной (оптической) связи по технологиям OTN, IP, SDH, DWDM; на сегодня в производстве находится порядка 20 типов оборудования. </p><p>Для участия в разработке нового оборудования неспешно ищем опытного программиста.\n\nЕсли Вы оцениваете свой уровень знаний/способностей выше, чем middle, не боитесь сложных задач и Вам нравится программировать на низком уровне (pure C) - будем рады пообщаться с Вами, даже если Ваш опыт отличается от требуемого для этой вакансии.</p><p>Указанный опыт работы - более 6 лет - очень грубый формальный фильтр, от него возможны существенные отклонения. </p><p>Знание \"в принципе\" других языков программирования подразумевается по умолчанию; основная цель - уметь применить shell/python/perl/sql/etc.. в нужное время и в нужном месте.<b><br /></b></p><b>Обязанности:</b><ul><li>Разработка системного и прикладного ПО (Embedded Linux) для телекоммуникационного оборудования  </li><li>Сопровождение и отладка разработанного ПО</li><li>Участие в разработке современного и перспективного оборудования проводной (оптической) связи<br /></li></ul><b>Требования:</b><ul><li>Желание и умение самостоятельно решать сложные задачи </li><li> Разработка многопоточных приложений и понимание применения объектов синхронизации (mutex, semaphores, etc.) </li><li> Умение разбираться в чужом коде </li><li> Опыт разработки на C не менее 3-х лет </li><li> Знание средств разработки и отладки (gcc, gdb, Makefile, CMake, Shell scripting, etc.) </li><li> Знание систем контроля версий git или mercurial </li><li> Чтение технической документации на английском языке</li></ul><b></b><p><b>Мы предлагаем:</b><br /></p><ul><li>Сложную и интересную работу с использованием передовых технологий     </li><li>Адекватную \"белую\" заработную плату (уточняется в зависимости от Ваших знаний и опыта по результатам собеседования) </li><li>Оформление по трудовому кодексу </li><li>Уютный офис в центре города </li><li> Карьерный и профессиональный рост</li><li>Полис ДМС + льготное страхование для членов семьи</li></ul><p>Для Вас будет дополнительным преимуществом: <br /></p><ul><li>Умение писать код с минимальной избыточностью </li><li>Опыт разработки драйверов для Linux </li><li>Опыт работы с системой сборки Yocto/OpenEmbedded </li><li>Опыт работы с процессорами архитектуры PowerPC, ARM </li><li>Опыт разработки ПО для микроконтроллеров </li><li>Опыт работы с RTOS Опыт работы с аппаратными отладчиками JTAG  </li><li>Опыт работы с сетевым оборудованием (L2/L3) либо оборудованием связи</li></ul><p>Приветствуется Ваше резюме с описанием опыта работы и, если есть, примеры кода, разработанного Вами (либо ссылка на него, если он есть в открытом доступе). </p><p> Поскольку работа сложная, а требования к соискателю высокие - перед собеседованием обязательно потребуется выполнить тестовое задание.<br /></p><p>Простите за последующий длинный текст - этот сайт перестал поддерживать ссылки на внешние ресурсы  </p><p>Тестовое задание и условия его выполнения: <br /></p><p>Тестовое задание должно быть выполнено на «голом» C под Linux. </p><p>Технологии и языки, применяемые для web|desktop (типа python и CGI) использовать нельзя. </p><p>По результатам, с одной стороны - Вы немного познакомитесь с нашими задачами, с другой стороны – мы познакомимся с Вашим стилем программирования. Прошу не стесняться обращаться, если текст задания вызывает вопросы. </p><p>Реализацию задачи и скомпилированный исполняемый файл(ы) нужно выслать мне по электронной почте; по результатам анализа - как правило, это несколько дней - либо мы договариваемся о дате/времени собеседования, либо Вы получаете отказ.</p><p>Если Вас смущает передача 100% готового кода задания, то для предварительного просмотра достаточно ~70% исходников и исполняемого файла; остальное можно принести на собеседование. </p><p>Объясню, почему так : задачи, которые будут перед Вами стоять, в случае, если мы договоримся о сотрудничестве, несколько сложнее приведённых в тесте и решать их надо будет самостоятельно. Если Вы не справляетесь с тестовым заданием – нет смысла говорить о большем. Желаю Вам успеха и надеюсь, что наша позиция будет правильно понята. </p><p>Хотя, время, затраченное Вами на реализацию тестового задания для нас в общем-то некритично и не является главным при оценке результатов, нам бы хотелось получить решение в течение двух недель.<br /></p><p>Текст тестового задания: </p><p> Два типа блоков – «control block» и «client1», «client2», …. , «clientN» соединены в одноранговую локальную сеть Ethernet. </p><p>Control block, он же блок управления, он же «мастер-контроллер»; может быть в составе сети только в одном экземпляре.</p><p>Блоки индикации, они же \"Client#\", имеются в количестве от 3 до 200.\nВсе блоки распределены в пространстве и установлены на улице. Блоки объединены локальной сетью Ethernet. Каждый блок индикации имеет 2 датчика: датчик температуры и датчик освещенности. </p><p>Мастер-контроллер в произвольные моменты времени отправляет в блоки индикации данные для отображения; например: текст, температура, время и яркость. Так же, мастер-контроллер периодически (1 раз в 5 секунд) опрашивает все датчики с блоков индикации, рассчитывает среднее значение температуры и освещенности. Среднее значение температуры используется для отправки в блоки индикации в виде текста, а среднее значение освещенности используется для подстройки яркости отображаемой информации. Мастер-контроллер устанавливает значение яркости во все блоки индикации в соответствии с расчетным средним значением освещенности.</p><p>Иногда случается так, что блок управления теряет связь с блоками индикации (как повезёт - может со всеми, а может только с частью), поэтому блоки индикации остаются без управления на время более 5 минут. В этом случае роль блока управления должен взять один из блоков индикации, до того момента пока основной блок управления снова станет доступен. Блок индикации, который взял роль мастер-контроллера, так же может потерять связь с блоками индикации (как повезёт - может со всеми, а может только с частью), после чего должен выбраться новый мастер-контроллер.</p><p>Количество блоков индикации может меняться в процессе работы.</p><p>До момента подключения к сети мастер-контроллер ничего не знает о клиентах.</p><p>Предложите и реализуйте в программе алгоритм выбора нового мастера между блоками индикации при потере соединения с блоком управления (основным блоком управления или блоком индикации, выполняющим функции мастер-контроллера). Описание алгоритма нужно представить в виде отдельного текстового файла.</p><p>Напишите программу-эмулятор блока индикации, соответствующую описанию.</p><p>Напишите программу-эмулятор блока управления, соответствующую описанию.<br /></p>",
          "covid_vaccination_requirement": {
              "id": 1,
              "title": "Не важно"
          },
          "external_url": null,
          "contact": "Сергей Лебедев",
          "moveable": true,
          "agreement": true,
          "anonymous": false,
          "is_archive": false,
          "is_storage": false,
          "type_of_work": {
              "id": 6,
              "title": "Полный рабочий день"
          },
          "place_of_work": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "education": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "experience": {
              "id": 4,
              "title": "От 6 лет"
          },
          "maritalstatus": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "children": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "client": {
              "id": 398055,
              "title": "СУПЕРТЕЛ",
              "link": "https://www.superjob.ru/clients/supertel-398055/vacancies.html",
              "industry": [],
              "description": "ОАО «СУПЕРТЕЛ» - уникальный российский разработчик и производитель программно-управляемого телекоммуникационного оборудования отечественного происхождения для транспортных сетей и сетей доступа различных уровней иерархий и технологий: PDH, SDH, NG-SDH, xDSL, IP, OTN и DWDM.\n\nОАО «СУПЕРТЕЛ» создано в 1993 году на базе одного из государственных научно-производственных объединений промышленности средств связи и является одним из ведущих отечественных предприятий в области разработки и производства современных комплексов оборудования на основе технологий канальной и пакетной коммутации.\n\nКоллектив компании сегодня насчитывает более 300 человек- высококлассных профессионалов.\n\nМы приветствуем в своей команде людей, готовых решать сложные задачи, работать быстро и качественно, разделяющих наши ценности: быть ответственным и ориентироваться на результат.\n\nМы обеспечиваем: широкие возможности профессионального развития, открытые отношения между сотрудниками и руководством, надежность и стабильность в работе, расширенный перечень социальных гарантий.",
              "vacancy_count": 1,
              "staff_count": "100 — 500",
              "client_logo": "https://public.superjob.ru/images/clients_logos.ru/398055_df9b9a6062b9205bf5913ca1d7f3201c.jpg",
              "address": "Санкт-Петербург, Петроградская наб. 38А",
              "addresses": [
                  {
                      "addressString": "Санкт-Петербург, Петроградская наб. 38А",
                      "latitude": 59.963832,
                      "longitude": 30.332676,
                      "phones": []
                  }
              ],
              "url": "http://www.supertel.ru",
              "short_reg": false,
              "is_blocked": false,
              "registered_date": 1268129320,
              "town": {
                  "id": 14,
                  "title": "Санкт-Петербург",
                  "declension": "в Санкт-Петербурге",
                  "hasMetro": true,
                  "genitive": "Санкт-Петербурга"
              }
          },
          "languages": [
              [
                  {
                      "id": 1,
                      "title": "Английский"
                  },
                  {
                      "id": 5,
                      "title": "Технический"
                  }
              ]
          ],
          "driving_licence": [],
          "catalogues": [
              {
                  "id": 33,
                  "title": "IT, Интернет, связь, телеком",
                  "key": 33,
                  "positions": [
                      {
                          "id": 48,
                          "title": "Разработка, программирование",
                          "key": 48
                      },
                      {
                          "id": 49,
                          "title": "Сетевые технологии",
                          "key": 49
                      },
                      {
                          "id": 55,
                          "title": "Телекоммуникации и связь",
                          "key": 55
                      }
                  ]
              }
          ],
          "agency": {
              "id": 1,
              "title": "прямой работодатель"
          },
          "town": {
              "id": 14,
              "title": "Санкт-Петербург",
              "declension": "в Санкт-Петербурге",
              "hasMetro": true,
              "genitive": "Санкт-Петербурга"
          },
          "already_sent_on_vacancy": false,
          "rejected": false,
          "response_info": [],
          "phone": "+7 (812) 6440430 доб. 2129",
          "phones": [
              {
                  "number": 78126440430,
                  "additionalNumber": 2129
              }
          ],
          "fax": null,
          "faxes": null,
          "favorite": false,
          "client_logo": "https://public.superjob.ru/images/clients_logos.ru/398055_df9b9a6062b9205bf5913ca1d7f3201c.jpg",
          "highlight": false,
          "age_from": 0,
          "age_to": 0,
          "gender": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "firm_name": "СУПЕРТЕЛ",
          "firm_activity": "ОАО «СУПЕРТЕЛ» - уникальный российский разработчик и производитель программно-управляемого телекоммуникационного оборудования отечественного происхождения для транспортных сетей и сетей доступа различных уровней иерархий и технологий: PDH, SDH, NG-SDH, xDSL, IP, OTN и DWDM. \n\nОАО «СУПЕРТЕЛ» создано в 1993 году на базе одного из государственных научно-производственных объединений промышленности средств связи и является одним из ведущих отечественных предприятий в области разработки и производства современных комплексов оборудования на основе технологий канальной и пакетной коммутации. \n\nКоллектив компании сегодня насчитывает более 300 человек- высококлассных профессионалов. \n\nМы приветствуем в своей команде людей, готовых решать сложные задачи, работать быстро и качественно, разделяющих наши ценности: быть ответственным и ориентироваться на результат. \n\nМы обеспечиваем: широкие возможности профессионального развития, открытые отношения между сотрудниками и руководством, надежность и стабильность в работе, расширенный перечень социальных гарантий.",
          "link": "https://spb.superjob.ru/vakansii/programmist-c-46363137.html",
          "isBlacklisted": false,
          "latitude": 59.963833,
          "longitude": 30.332676
      },
      {
          "canEdit": false,
          "is_closed": false,
          "id": 46394310,
          "id_client": 1996534,
          "payment_from": 0,
          "payment_to": 0,
          "date_pub_to": 1686971818,
          "date_archived": 0,
          "date_published": 1684551958,
          "address": "Магаданская область, Тенькинский муниципальный округ, посёлок Омчак",
          "profession": "Инженер-программист АСУ ТП",
          "work": null,
          "compensation": null,
          "candidat": "Вакансия открыта в АО «Полюс Магадан» - лидирующей компании отрасли. Это возможность стать частью команды профессионалов, обеспечивающих динамичное развитие бизнеса в суровых условиях легендарного колымского края.\nОбязанности:\n• Сопровождение программно–алгоритмического и прикладного обеспечения действующих автоматизированных систем управления технологического оборудования;\n• Анализ работы находящихся в эксплуатации систем автоматизации технологического процесса;\n• Проводит анализ работы находящихся в эксплуатации систем автоматизации технологических процессов, выполняет работу по установлению оптимальных режимов работы систем автоматизации технологического оборудования;\n• Вносит корректировки разработанных прикладных программ на основе анализа работы;\n• Обеспечивает безаварийное, рабочее состояние автоматизированных систем управления технологических процессов;\n• Выполняет сопровождение программно-алгоритмического и прикладного обеспечения действующих систем автоматизации технологического оборудования;\n• Разрабатывает программы, алгоритмы, реализующие задачи изменения производственных, технологических процессов;\n• Проводит анализ отказов систем автоматизации технологического оборудования;\n• Непосредственно участвует в проектах;\n• Выполняет работы по созданию, внедрению и эксплуатации автоматизированных систем управления технологическими процессами;\n• Выполняет работы в других проектах по внедрению новых методов обслуживания оборудования, в том числе повышения энергоэффективности систем и оборудования, находящихся в зоне ответственности;\n• Вносит корректировки разработанных прикладных программ на основе анализа работы автоматизированных систем управления технологических процессов.\nТребования:\n• Высшее образование;\n• Опыт работы от 3-х лет;\n• Опыт работы с пусконаладочными работами, техническим обслуживанием, наладкой и оптимизацией работы оборудования автоматизированных систем управления;\n• Программирование и обслуживание логических контроллеров Siemens, на базе программного обеспечения Simatic Step 7, TIA Portal. Разработка и эксплуатация SCADA систем Archestra Wonderware System Platform IDE, InTouch, WinCC. Опыт работы с оборудованием линейки ROSSMA IIOT;\n• Навыки составления инструкций по разработанным программам автоматизированных систем управления технологических процессов.\nУсловия:\n• Вахтовый метод работы: 2 месяца работы, 2 месяца - отдых;\n• Обсуждаемый уровень окладной части, премирование согласно корпоративным политикам;\n• Оплачиваемый проезд к месту работы и на межвахтовый отдых;\n• Добровольное медицинское страхование, страхование от несчастных случаев, бесплатное трехразовое питание, обеспечение спецодеждой и средствами индивидуальной защиты (СИЗ);\n• Работа на Наталкинском горно-обогатительном комбинате (Магаданская область, Тенькинский район, поселок Омчак, 380 км от города Магадан);\n• Проживание в вахтовом поселке с развитой инфраструктурой в современном благоустроенном общежитии.",
          "metro": [],
          "currency": "rub",
          "vacancyRichText": "<p>Вакансия открыта в АО «Полюс Магадан» - лидирующей компании отрасли. Это возможность стать частью команды профессионалов, обеспечивающих динамичное развитие бизнеса в суровых условиях легендарного колымского края.</p><p>Обязанности:</p><ul><li>Сопровождение программно–алгоритмического и прикладного обеспечения действующих автоматизированных систем управления технологического оборудования;</li><li>Анализ работы находящихся в эксплуатации систем автоматизации технологического процесса;</li><li>Проводит анализ работы находящихся в эксплуатации систем автоматизации технологических процессов, выполняет работу по установлению оптимальных режимов работы систем автоматизации технологического оборудования;</li><li>Вносит корректировки разработанных прикладных программ на основе анализа работы;</li><li>Обеспечивает безаварийное, рабочее состояние автоматизированных систем управления технологических процессов;</li><li>Выполняет сопровождение программно-алгоритмического и прикладного обеспечения действующих систем автоматизации технологического оборудования;</li><li>Разрабатывает программы, алгоритмы, реализующие задачи изменения производственных, технологических процессов;</li><li>Проводит анализ отказов систем автоматизации технологического оборудования;</li><li>Непосредственно участвует в проектах;</li><li>Выполняет работы по созданию, внедрению и эксплуатации автоматизированных систем управления технологическими процессами;</li><li>Выполняет работы в других проектах по внедрению новых методов обслуживания оборудования, в том числе повышения энергоэффективности систем и оборудования, находящихся в зоне ответственности;</li><li>Вносит корректировки разработанных прикладных программ на основе анализа работы автоматизированных систем управления технологических процессов.</li></ul><p>Требования:</p><ul><li>Высшее образование;</li><li>Опыт работы от 3-х лет;</li><li>Опыт работы с пусконаладочными работами, техническим обслуживанием, наладкой и оптимизацией работы оборудования автоматизированных систем управления;</li><li>Программирование и обслуживание логических контроллеров Siemens, на базе программного обеспечения Simatic Step 7, TIA Portal. Разработка и эксплуатация SCADA систем Archestra Wonderware System Platform IDE, InTouch, WinCC. Опыт работы с оборудованием линейки ROSSMA IIOT;</li><li>Навыки составления инструкций по разработанным программам автоматизированных систем управления технологических процессов.</li></ul><p>Условия:</p><ul><li>Вахтовый метод работы: 2 месяца работы, 2 месяца - отдых;</li><li>Обсуждаемый уровень окладной части, премирование согласно корпоративным политикам;</li><li>Оплачиваемый проезд к месту работы и на межвахтовый отдых;</li><li>Добровольное медицинское страхование, страхование от несчастных случаев, бесплатное трехразовое питание, обеспечение спецодеждой и средствами индивидуальной защиты (СИЗ);</li><li>Работа на Наталкинском горно-обогатительном комбинате (Магаданская область, Тенькинский район, поселок Омчак, 380 км от города Магадан);</li><li>Проживание в вахтовом поселке с развитой инфраструктурой в современном благоустроенном общежитии.</li></ul>",
          "covid_vaccination_requirement": {
              "id": 1,
              "title": "Не важно"
          },
          "external_url": null,
          "contact": "Анастасия Владиславовна Кашкина",
          "moveable": true,
          "agreement": true,
          "anonymous": false,
          "is_archive": false,
          "is_storage": false,
          "type_of_work": {
              "id": 9,
              "title": "Работа вахтовым методом"
          },
          "place_of_work": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "education": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "experience": {
              "id": 2,
              "title": "От 1 года"
          },
          "maritalstatus": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "children": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "client": {
              "id": 1996534,
              "title": "Группа Полюс",
              "link": "https://www.superjob.ru/clients/gruppa-polyus-1996534/vacancies.html",
              "industry": [],
              "description": "Группа Полюс — крупнейший производитель золота в России и одна из ведущих мировых золотодобывающих компаний по объему добычи.\n\nОсновные предприятия Компании расположены в богатейших золотодобывающих регионах Восточной Сибири и Дальнего Востока России, и включают 5 действующих рудников, золотоносные россыпи и ряд проектов в стадии строительства и развития.\n\nПредприятия Группы Полюс:\n• АО \"Полюс Красноярск\"\n• АО \"Полюс Магадан\"\n• АО \"Полюс Вернинское\"\n• АО \"ЗДК \"Лензолото\"\n• АО \"Полюс Алдан\"\n• ООО \"СЛ Золото\"\n• АО \"Полюс Логистика\"\n• ООО \"Полюс Строй\"\n• ООО \"Полюс Проект\"\n• ООО \"МФЦ Полюс\"\n• ЗАО \"Витимэнерго\"\n• АО \"Мамаканская ГЭС\"\n• АО \"Витимэнергосбыт\"\n\nШирокая география деятельности Компании, масштабы и сложность реализуемых проектов дают прекрасные возможности для профессионального и карьерного роста!\n\n«Полюс» — ЭТАЛОН ЗОЛОТОДОБЫЧИ\nДобывая золото, мы обеспечиваем богатство и технологический прогресс нашей страны. Мы нацелены делать это максимально эффективно и бережливо, на благо акционеров, с заботой о безопасности труда и сохранности окружающей среды. Результат нашего труда — это универсальная мера ценности, проверенная тысячелетиями.",
              "vacancy_count": 368,
              "staff_count": "более 5000",
              "client_logo": "https://public.superjob.ru/images/clients_logos.ru/1996534_e5d001ba80a3688d5e19ecdd43c43bd3.png",
              "address": null,
              "addresses": [],
              "url": "http://rabota.polyusgold.com",
              "short_reg": false,
              "is_blocked": false,
              "registered_date": 1343117345,
              "town": {
                  "id": 4,
                  "title": "Москва",
                  "declension": "в Москве",
                  "hasMetro": true,
                  "genitive": "Москвы"
              }
          },
          "languages": [],
          "driving_licence": [],
          "catalogues": [
              {
                  "id": 33,
                  "title": "IT, Интернет, связь, телеком",
                  "key": 33,
                  "positions": [
                      {
                          "id": 48,
                          "title": "Разработка, программирование",
                          "key": 48
                      }
                  ]
              },
              {
                  "id": 327,
                  "title": "Промышленность, производство",
                  "key": 327,
                  "positions": [
                      {
                          "id": 338,
                          "title": "Металлургия",
                          "key": 338
                      }
                  ]
              }
          ],
          "agency": {
              "id": 1,
              "title": "прямой работодатель"
          },
          "town": {
              "id": 394,
              "title": "Магадан",
              "declension": "в Магадане",
              "hasMetro": false,
              "genitive": "Магадана"
          },
          "already_sent_on_vacancy": false,
          "rejected": false,
          "response_info": [],
          "phone": "+7 (914) 0323362",
          "phones": [
              {
                  "number": 79140323362,
                  "additionalNumber": null
              }
          ],
          "fax": null,
          "faxes": null,
          "favorite": false,
          "client_logo": "https://public.superjob.ru/images/clients_logos.ru/1996534_e5d001ba80a3688d5e19ecdd43c43bd3.png",
          "highlight": false,
          "age_from": 0,
          "age_to": 0,
          "gender": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "firm_name": "Группа Полюс",
          "firm_activity": "Группа Полюс — крупнейший производитель золота в России и одна из ведущих мировых золотодобывающих компаний по объему добычи. \n\nОсновные предприятия Компании расположены в богатейших золотодобывающих регионах Восточной Сибири и Дальнего Востока России, и включают 5 действующих рудников, золотоносные россыпи и ряд проектов в стадии строительства и развития. \n\nПредприятия Группы Полюс:\n• АО \"Полюс Красноярск\"\n• АО \"Полюс Магадан\"\n• АО \"Полюс Вернинское\"\n• АО \"ЗДК \"Лензолото\"\n• АО \"Полюс Алдан\"\n• ООО \"СЛ Золото\"\n• АО \"Полюс Логистика\"\n• ООО \"Полюс Строй\"\n• ООО \"Полюс Проект\"\n• ООО \"МФЦ Полюс\"\n• ЗАО \"Витимэнерго\"\n• АО \"Мамаканская ГЭС\"\n• АО \"Витимэнергосбыт\"\n\nШирокая география деятельности Компании, масштабы и сложность реализуемых проектов дают прекрасные возможности для профессионального и карьерного роста!\n\n«Полюс» — ЭТАЛОН ЗОЛОТОДОБЫЧИ\nДобывая золото, мы обеспечиваем богатство и технологический прогресс нашей страны. Мы нацелены делать это максимально эффективно и бережливо, на благо акционеров, с заботой о безопасности труда и сохранности окружающей среды. Результат нашего труда — это универсальная мера ценности, проверенная тысячелетиями.",
          "link": "https://magadan.superjob.ru/vakansii/inzhener-programmist-asu-tp-46394310.html",
          "isBlacklisted": false,
          "latitude": 61.640961,
          "longitude": 147.878036
      },
      {
          "canEdit": false,
          "is_closed": false,
          "id": 46396045,
          "id_client": 492210,
          "payment_from": 0,
          "payment_to": 0,
          "date_pub_to": 1686990425,
          "date_archived": 0,
          "date_published": 1684569905,
          "address": "Пенза, Перспективная улица, 5А",
          "profession": "Web-программист (Frontend developer)",
          "work": null,
          "compensation": null,
          "candidat": "Мы ищем web-программиста на разработку интернет-магазина оптово-розничной торговли. \n\nОбязанности:\n• Разработка новых внутренних и внешних продуктов для компании\n• Поддержка рабочих web-проектов и разработка для них нового функционала \n• Интеграции с внешними сервисами (транспортные компании, онлайн оплата)\n• Общение с заказчиками (сотрудниками компании) и составление ТЗ на разработку.\nТребования:\n• Хорошие знания frontend-технологий\n• Уверенное владение VueJs, NodeJs, HTML, CSS, jQuery, JS, Ajax\n• Адаптивная верстка сайта\n• Умение разбираться в чужом коде. \nБудет плюсом:\n• Знание систем контроля версий и умение с ними работать (используем git)\n• Опыт разработки собственного ПО (web-продукты)\n• Опыт работы с фреймворками frontend-технологий\n• Знание реляционных СУБД и языка SQL (mysql)\n• Большим плюсом будет умение работать с backend-технологиями (PHP) \nУсловия:\n\n• Уровень з/п устанавливается по результатам собеседования\n• Режим работы: пн-пт с 8:45 до 16:45\n• Оформление согласно ТК РФ\n• Возможность профессионального и карьерного роста.\n• Дружный творческий коллектив.",
          "metro": [],
          "currency": "rub",
          "vacancyRichText": " Мы ищем web-программиста на разработку интернет-магазина оптово-розничной торговли.  <b><br /></b><p><b>Обязанности:</b></p><ul><li>Разработка новых внутренних и внешних продуктов для компании</li></ul><ul><li>Поддержка рабочих web-проектов и разработка для них нового функционала\n\n</li></ul><ul><li>Интеграции с внешними сервисами (транспортные компании, онлайн оплата)</li></ul><ul><li>Общение с заказчиками (сотрудниками компании) и составление ТЗ на разработку.</li></ul><p><b>Требования:</b></p><ul><li>Хорошие знания frontend-технологий</li></ul><ul><li>Уверенное владение VueJs, NodeJs, HTML, CSS, jQuery, JS, Ajax</li></ul><ul><li>Адаптивная верстка сайта</li></ul><ul><li>Умение разбираться в чужом коде.  </li></ul><p><b>Будет плюсом:</b></p><ul><li>Знание систем контроля версий и умение с ними работать (используем git)</li></ul><ul><li>Опыт разработки собственного ПО (web-продукты)</li></ul><ul><li>Опыт работы с фреймворками frontend-технологий</li></ul><ul><li>Знание реляционных СУБД и языка SQL (mysql)</li></ul><ul><li> Большим плюсом будет умение работать с backend-технологиями (PHP)  </li></ul><p><b>Условия:</b><br /></p><ul><li>Уровень з/п устанавливается по результатам собеседования</li></ul><ul><li>Режим работы: пн-пт с 8:45 до 16:45</li></ul><ul><li> Оформление согласно ТК РФ</li></ul><ul><li>Возможность профессионального и карьерного роста.</li></ul><ul><li>  Дружный творческий коллектив.</li></ul>",
          "covid_vaccination_requirement": {
              "id": 1,
              "title": "Не важно"
          },
          "external_url": null,
          "contact": "Оксана Николаевна Потапова",
          "moveable": true,
          "agreement": true,
          "anonymous": false,
          "is_archive": false,
          "is_storage": false,
          "type_of_work": {
              "id": 6,
              "title": "Полный рабочий день"
          },
          "place_of_work": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "education": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "experience": {
              "id": 2,
              "title": "От 1 года"
          },
          "maritalstatus": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "children": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "client": {
              "id": 492210,
              "title": "СанТреК",
              "link": "https://www.superjob.ru/clients/santrek-492210/vacancies.html",
              "industry": [],
              "description": "Компания «СанТреК» работает на рынке с 2001 года. Основной вид деятельности компании — оптовая продажа сантехники и сантехнического оборудования.\nВ настоящее время «СанТреК» является крупной оптовой базой, одним из основных участников поволжского оптового рынка сантехники и сантехнического оборудования.\n«СанТреК» предлагает своим клиентам качественные товары, поставляемые по прямым контрактам с ведущими зарубежными и отечественными производителями.\n«СанТреК» специализируется на сантехнической продукции так называемого «экономического» класса и класса «комфорт», которая используется, в основном, для снабжения розничной торговли и комплектации жилищного строительства.\nПоэтому основными потребителями нашей продукции являются розничные и мелкооптовые торговые предприятия, предприниматели, строительные фирмы, а также подрядные организации не только Пензенской области, но и всего Центрального, Северо - Западного и Уральского федеральных округов, ряда областей Южного федерального округа, республик Башкортостан, Татарстан, Мордовия, а также ближнего зарубежья.\nОгромный опыт работы, большая клиентская база, широкий и постоянно обновляемый ассортимент качественной продукции (более 10 000 наименований), гибкая ценовая политика, специальные предложения для постоянных клиентов, высокий профессионализм персонала — вот что привлекает к сотрудничеству с компанией «СанТреК» все новых и новых покупателей.",
              "vacancy_count": 10,
              "staff_count": "500 — 1000",
              "client_logo": "https://public.superjob.ru/images/clients_logos.ru/492210_20c4b4f8d67542f23303855a13ee734a.jpg",
              "address": null,
              "addresses": [],
              "url": "http://www.jobs.santrek.ru",
              "short_reg": false,
              "is_blocked": false,
              "registered_date": 1282730860,
              "town": {
                  "id": 401,
                  "title": "Пенза",
                  "declension": "в Пензе",
                  "hasMetro": false,
                  "genitive": "Пензы"
              }
          },
          "languages": [],
          "driving_licence": [],
          "catalogues": [
              {
                  "id": 33,
                  "title": "IT, Интернет, связь, телеком",
                  "key": 33,
                  "positions": [
                      {
                          "id": 41,
                          "title": "Инжиниринг",
                          "key": 41
                      },
                      {
                          "id": 48,
                          "title": "Разработка, программирование",
                          "key": 48
                      }
                  ]
              }
          ],
          "agency": {
              "id": 1,
              "title": "прямой работодатель"
          },
          "town": {
              "id": 401,
              "title": "Пенза",
              "declension": "в Пензе",
              "hasMetro": false,
              "genitive": "Пензы"
          },
          "already_sent_on_vacancy": false,
          "rejected": false,
          "response_info": [],
          "phone": "+7 (927) 3757013",
          "phones": [
              {
                  "number": 79273757013,
                  "additionalNumber": null
              }
          ],
          "fax": null,
          "faxes": null,
          "favorite": false,
          "client_logo": "https://public.superjob.ru/images/clients_logos.ru/492210_20c4b4f8d67542f23303855a13ee734a.jpg",
          "highlight": false,
          "age_from": 0,
          "age_to": 0,
          "gender": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "firm_name": "СанТреК",
          "firm_activity": "Компания «СанТреК» работает на рынке с 2001 года. Основной вид деятельности компании — оптовая продажа сантехники и сантехнического оборудования. \nВ настоящее время «СанТреК» является крупной оптовой базой, одним из основных участников поволжского оптового рынка сантехники и сантехнического оборудования. \n«СанТреК» предлагает своим клиентам качественные товары, поставляемые по прямым контрактам с ведущими зарубежными и отечественными производителями. \n«СанТреК» специализируется на сантехнической продукции так называемого «экономического» класса и класса «комфорт», которая используется, в основном, для снабжения розничной торговли и комплектации жилищного строительства. \nПоэтому основными потребителями нашей продукции являются розничные и мелкооптовые торговые предприятия, предприниматели, строительные фирмы, а также подрядные организации не только Пензенской области, но и всего Центрального, Северо - Западного и Уральского федеральных округов, ряда областей Южного федерального округа, республик Башкортостан, Татарстан, Мордовия, а также ближнего зарубежья. \nОгромный опыт работы, большая клиентская база, широкий и постоянно обновляемый ассортимент качественной продукции (более 10 000 наименований), гибкая ценовая политика, специальные предложения для постоянных клиентов, высокий профессионализм персонала — вот что привлекает к сотрудничеству с компанией «СанТреК» все новых и новых покупателей.",
          "link": "https://penza.superjob.ru/vakansii/web-programmist-46396045.html",
          "isBlacklisted": false,
          "latitude": 53.123009,
          "longitude": 45.000591
      },
      {
          "canEdit": false,
          "is_closed": false,
          "id": 46396283,
          "id_client": 181745,
          "payment_from": 0,
          "payment_to": 0,
          "date_pub_to": 1686989679,
          "date_archived": 0,
          "date_published": 1684569939,
          "address": null,
          "profession": "Программист 1С УПП 1.3",
          "work": null,
          "compensation": null,
          "candidat": "Обязанности:\n• Знание основ бухгалтерского учета.\n• Знание основ ЗУП.\n• Опыт практической работы с конфигурацией УПП 1.3 в блоках бухгалтерского, налогового и ЗУП учета от 3 лет.\n• Обновление нетиповой конфигурации УПП 1.3.\n• Большой опыт практической работы с конфигурацией 1С Конвертация данных, создание и настройка правил обмена.\nТребования:\n- Опыт свертки массивных баз данных 1С.\n- Опыт практической работы с РИБ.\n- Наличие сертификатов 1С будет значительным преимуществом\n- Умение выявлять требования заказчика по доработкам;\n- Умение работать с пользователями.",
          "metro": [],
          "currency": "rub",
          "vacancyRichText": "<p>Обязанности:</p><ul><li>Знание основ бухгалтерского учета.</li><li>Знание основ ЗУП.</li><li>Опыт практической работы с конфигурацией УПП 1.3 в блоках бухгалтерского, налогового и ЗУП учета от 3 лет.</li><li>Обновление нетиповой конфигурации УПП 1.3.</li><li>Большой опыт практической работы с конфигурацией 1С Конвертация данных, создание и настройка правил обмена.</li></ul><p>Требования:</p><p>- Опыт свертки массивных баз данных 1С.</p><p>- Опыт практической работы с РИБ.</p><p>- Наличие сертификатов 1С будет значительным преимуществом</p><p>- Умение выявлять требования заказчика по доработкам;</p><p>- Умение работать с пользователями.</p>",
          "covid_vaccination_requirement": {
              "id": 1,
              "title": "Не важно"
          },
          "external_url": null,
          "contact": "Ольга Сухачева",
          "moveable": true,
          "agreement": true,
          "anonymous": false,
          "is_archive": false,
          "is_storage": false,
          "type_of_work": {
              "id": 14,
              "title": "Неполная дистанционная занятость"
          },
          "place_of_work": {
              "id": 2,
              "title": "Удалённая работа (на дому)"
          },
          "education": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "experience": {
              "id": 2,
              "title": "От 1 года"
          },
          "maritalstatus": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "children": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "client": {
              "id": 181745,
              "title": "AD Smartec",
              "link": "https://www.superjob.ru/clients/ad-smartec-181745/vacancies.html",
              "industry": [],
              "description": "AD SMARTEC - лидер продаж автозапчастей иностранного производства на российском рынке и полноправный член крупнейшей международной группы ADI. Компания AD SMARTEC входит в российскую группу AD Russia, которая является членом торговой группы AutoDistribution International.\n\nМы приглашаем в «СМАРТЭК» лучших специалистов в своей области, профессионалов, талантливых людей, которым интересно работать друг с другом.\n\nСила нашей компании в наших сотрудниках! В команде СМАРТЭК работают высоко-классные специалисты, люди, которые сделали компанию лидером и не собираются останавливаться на достигнутом. Самыми ценными качествами в нашем коллективе считаются результативность, профессионализм и креативность. Умение быстро принимать решения, предугадывать новые тенденции рынка, быть настоящим профессионалом своего дела – это единственный путь к успеху в современном мире. Именно поэтому в компании творческий подход к ведению бизнеса считается нормой. Не менее важным фактором для обеспечения успеха нашего дела мы считаем умение относиться к своим коллегам и партнерам с уважением и достоинством. Лишь в благожелательной рабочей атмосфере люди могут работать максимально эффективно, получая удовлетворение от своей работы и способствуя успеху своей компании.\n\nДля нас всегда важно, чтобы приходящий к нам человек был ответственным и способным принимать решения. Мы ищем людей самостоятельных в своих оценках и действиях, способных брать инициативу и аргументированно отстаивать свою позицию. Мы очень ценим сотрудников, у которых можно чему-нибудь научиться. Помимо профессиональных качеств, в потенциальных сотрудниках мы ценим стрессоустойчивость, способность решать проблемы максимально оперативно, изобретательность, общительность, творческие способности.\n\nВ «СМАРТЭК» двери руководства всегда открыты для своих сотрудников.\n\nЕсли у Вас есть предложения, новые идеи, или Вы хотите поделиться своими мыслями, - мы всегда Вам рады.\n\nУспешное развитие компании невозможно без успеха каждого из ее сотрудников.\n\nМы поможем Вам достичь успеха вместе с командой «СМАРТЭК»",
              "vacancy_count": 3,
              "staff_count": "100 — 500",
              "client_logo": "https://public.superjob.ru/images/clients_logos.ru/181745_98f8f092774a45024f2d1c9196b67318.jpg",
              "address": null,
              "addresses": [],
              "url": "http://www.smartec.ru",
              "short_reg": false,
              "is_blocked": false,
              "registered_date": 1211442049,
              "town": {
                  "id": 4,
                  "title": "Москва",
                  "declension": "в Москве",
                  "hasMetro": true,
                  "genitive": "Москвы"
              }
          },
          "languages": [],
          "driving_licence": [],
          "catalogues": [
              {
                  "id": 33,
                  "title": "IT, Интернет, связь, телеком",
                  "key": 33,
                  "positions": [
                      {
                          "id": 48,
                          "title": "Разработка, программирование",
                          "key": 48
                      },
                      {
                          "id": 503,
                          "title": "Внедрение и сопровождение ПО",
                          "key": 503
                      }
                  ]
              }
          ],
          "agency": {
              "id": 1,
              "title": "прямой работодатель"
          },
          "town": {
              "id": 1397,
              "title": "Одинцово",
              "declension": "в Одинцово",
              "hasMetro": false,
              "genitive": "Одинцово"
          },
          "already_sent_on_vacancy": false,
          "rejected": false,
          "response_info": [],
          "phone": "+7 (495) 7879361 доб. 124, +7 (925) 4499500",
          "phones": [
              {
                  "number": 74957879361,
                  "additionalNumber": 124
              },
              {
                  "number": 79254499500,
                  "additionalNumber": null
              }
          ],
          "fax": null,
          "faxes": null,
          "favorite": false,
          "client_logo": "https://public.superjob.ru/images/clients_logos.ru/181745_98f8f092774a45024f2d1c9196b67318.jpg",
          "highlight": false,
          "age_from": 0,
          "age_to": 0,
          "gender": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "firm_name": "AD Smartec",
          "firm_activity": "AD SMARTEC - лидер продаж автозапчастей иностранного производства на российском рынке и полноправный член крупнейшей международной группы ADI. Компания AD SMARTEC входит в российскую группу AD Russia, которая является членом торговой группы AutoDistribution International. \n\nМы приглашаем в «СМАРТЭК» лучших специалистов в своей области, профессионалов, талантливых людей, которым интересно работать друг с другом. \n\nСила нашей компании в наших сотрудниках! В команде СМАРТЭК работают высоко-классные специалисты, люди, которые сделали компанию лидером и не собираются останавливаться на достигнутом. Самыми ценными качествами в нашем коллективе считаются результативность, профессионализм и креативность. Умение быстро принимать решения, предугадывать новые тенденции рынка, быть настоящим профессионалом своего дела – это единственный путь к успеху в современном мире. Именно поэтому в компании творческий подход к ведению бизнеса считается нормой. Не менее важным фактором для обеспечения успеха нашего дела мы считаем умение относиться к своим коллегам и партнерам с уважением и достоинством. Лишь в благожелательной рабочей атмосфере люди могут работать максимально эффективно, получая удовлетворение от своей работы и способствуя успеху своей компании. \n\nДля нас всегда важно, чтобы приходящий к нам человек был ответственным и способным принимать решения. Мы ищем людей самостоятельных в своих оценках и действиях, способных брать инициативу и аргументированно отстаивать свою позицию. Мы очень ценим сотрудников, у которых можно чему-нибудь научиться. Помимо профессиональных качеств, в потенциальных сотрудниках мы ценим стрессоустойчивость, способность решать проблемы максимально оперативно, изобретательность, общительность, творческие способности. \n\nВ «СМАРТЭК» двери руководства всегда открыты для своих сотрудников. \n\nЕсли у Вас есть предложения, новые идеи, или Вы хотите поделиться своими мыслями, - мы всегда Вам рады. \n\nУспешное развитие компании невозможно без успеха каждого из ее сотрудников. \n\nМы поможем Вам достичь успеха вместе с командой «СМАРТЭК»",
          "link": "https://odintsovo.superjob.ru/vakansii/programmist-1s-upp-1-46396283.html",
          "isBlacklisted": false,
          "latitude": null,
          "longitude": null
      },
      {
          "canEdit": false,
          "is_closed": false,
          "id": 36105291,
          "id_client": 3058622,
          "payment_from": 80000,
          "payment_to": 100000,
          "date_pub_to": 1686127261,
          "date_archived": 1663328102,
          "date_published": 1684658461,
          "address": "Москва, улица Бутлерова, 9",
          "profession": "Web-разработчик (Bitrix)",
          "work": null,
          "compensation": null,
          "candidat": "В команду веб-разработки сети химчисток-прачечных \"ДИАНА\" требуется web-программист.\nОбещаем много увлекательных и интересных задач, требующих творческого подхода и качественной реализации.\nОбязанности:\n• Поддержка и развитие существующих веб-сайтов компании на платформе 1С-Битрикс.\n• Модификация компонентов, интегрирование в существующий проект и разработка своих проектов в зависимости от задачи.\n• Создание новых и доработка действующих web-проектов компании.\n• Техническая поддержка web-проектов (включая оперативную работу).\n• Контроль интеграции сайтов с 1С, CRM Б24 и другими информационными системами компании.\nТребования:\n• Знание CMS 1C-Битрикс (программирование и администрирование)\n• Навыки frontend/backend разработки, умение работать с API\n• Опыт работы с Bitrix, PHP, HTML5,CSS3,JavaScript, Git, HTTP, SQL, JSON, WebSockets, XML\n• Знание и умение применять на практике паттерны проектирования\nУсловия:\n• Работа в стабильной компании\n• Оформление по ТК РФ\n• График работы понедельник-пятница с 10:00 до 19:00, суббота и воскресенье-выходные",
          "metro": [
              {
                  "id": 104,
                  "title": "Калужская",
                  "id_metro_line": 6
              }
          ],
          "currency": "rub",
          "vacancyRichText": "<p><b>В команду веб-разработки сети химчисток-прачечных \"ДИАНА\" требуется web-программист.</b><br /><b>Обещаем много увлекательных и интересных задач, </b><b>требующих </b><b>творческого подхода и качественной реализации.</b></p><b>Обязанности:</b><ul><li>Поддержка и развитие существующих веб-сайтов компании на платформе 1С-Битрикс.</li><li>Модификация компонентов, интегрирование в существующий проект и разработка своих проектов в зависимости от задачи.</li><li>Создание новых и доработка действующих web-проектов компании.</li><li>Техническая поддержка web-проектов (включая оперативную работу).</li><li>Контроль интеграции сайтов с 1С, CRM Б24 и другими информационными системами компании.</li></ul><b>Требования:</b><ul><li>Знание CMS 1C-Битрикс (программирование и администрирование)</li><li>Навыки frontend/backend разработки, умение работать с API</li><li>Опыт работы с Bitrix, PHP, HTML5,CSS3,JavaScript, Git, HTTP, SQL, JSON, WebSockets, XML</li><li>Знание и умение применять на практике паттерны проектирования</li></ul><b>Условия:</b><ul><li>Работа в стабильной компании</li><li>Оформление по ТК РФ</li><li>График работы понедельник-пятница с 10:00 до 19:00, суббота и воскресенье-выходные</li></ul>",
          "covid_vaccination_requirement": {
              "id": 1,
              "title": "Не важно"
          },
          "external_url": null,
          "contact": "Ирина",
          "moveable": true,
          "agreement": false,
          "anonymous": false,
          "is_archive": false,
          "is_storage": false,
          "type_of_work": {
              "id": 6,
              "title": "Полный рабочий день"
          },
          "place_of_work": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "education": {
              "id": 2,
              "title": "Высшее"
          },
          "experience": {
              "id": 3,
              "title": "От 3 лет"
          },
          "maritalstatus": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "children": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "client": {
              "id": 3058622,
              "title": "Объединение \"Диана\"",
              "link": "https://www.superjob.ru/clients/obedinenie-diana-3058622/vacancies.html",
              "industry": [],
              "description": "«Диана» – крупнейшая в России сеть химчисток-прачечных, одна из крупнейших сетей химчистки в Европе. Входит в десятку лучших химчисток мира, по итогам Global Best Practice Awards 2016.\n«Диана» является поистине титулованным участником бизнес-сообщества. В её копилке – три престижных премии «БРЕНД ГОДА/EFFIE» (включая «Золото»-2012), премия «Права потребителей и качество обслуживания 2012», награды Sales Business Awards 2007-2008. Одной из ценнейших считается также полученная в ходе всероссийского потребительского голосования премию «Марка №1 в России 2013». В 2013 году «Диана» была признана лучшей химчисткой в Европе, получив премию The European Awards Best Practices Textile Cleaning. При этом количество личных наград менеджеров сети насчитывает несколько десятков и подтверждаются каждый год.\n\n«Диана-Клининг» занимает одно из ведущих мест на столичном рынке клининговых работ, предоставляя своим клиентам весь комплекс услуг по уборке помещений, включая мытье окон, химчистку мебели, ковров и текстиля.\n\nЗа 27 лет работы на рынке химчисток и клининга «Диана» добилась признания клиентов, партнёров и профессионалов рынка!",
              "vacancy_count": 4,
              "staff_count": "1000 — 5000",
              "client_logo": "https://public.superjob.ru/images/clients_logos.ru/3058622_ac4c46607c933d1756550de864431b1b.png",
              "address": null,
              "addresses": [],
              "url": "http://www.dryclean.ru",
              "short_reg": false,
              "is_blocked": false,
              "registered_date": 1493021937,
              "town": {
                  "id": 4,
                  "title": "Москва",
                  "declension": "в Москве",
                  "hasMetro": true,
                  "genitive": "Москвы"
              }
          },
          "languages": [],
          "driving_licence": [],
          "catalogues": [
              {
                  "id": 62,
                  "title": "Дизайн",
                  "key": 62,
                  "positions": [
                      {
                          "id": 35,
                          "title": "Web-дизайн (UI/UX)",
                          "key": 35
                      }
                  ]
              },
              {
                  "id": 33,
                  "title": "IT, Интернет, связь, телеком",
                  "key": 33,
                  "positions": [
                      {
                          "id": 41,
                          "title": "Инжиниринг",
                          "key": 41
                      },
                      {
                          "id": 42,
                          "title": "Интернет, создание и поддержка сайтов",
                          "key": 42
                      },
                      {
                          "id": 48,
                          "title": "Разработка, программирование",
                          "key": 48
                      },
                      {
                          "id": 50,
                          "title": "Системная интеграция",
                          "key": 50
                      }
                  ]
              }
          ],
          "agency": {
              "id": 1,
              "title": "прямой работодатель"
          },
          "town": {
              "id": 4,
              "title": "Москва",
              "declension": "в Москве",
              "hasMetro": true,
              "genitive": "Москвы"
          },
          "already_sent_on_vacancy": false,
          "rejected": false,
          "response_info": [],
          "phone": "+7 (962) 1592822",
          "phones": [
              {
                  "number": 79621592822,
                  "additionalNumber": null
              }
          ],
          "fax": null,
          "faxes": null,
          "favorite": false,
          "client_logo": "https://public.superjob.ru/images/clients_logos.ru/3058622_ac4c46607c933d1756550de864431b1b.png",
          "highlight": false,
          "age_from": 0,
          "age_to": 0,
          "gender": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "firm_name": "Объединение \"Диана\"",
          "firm_activity": "«Диана» – крупнейшая в России сеть химчисток-прачечных, одна из крупнейших сетей химчистки в Европе. Входит в десятку лучших химчисток мира, по итогам Global Best Practice Awards 2016. \n«Диана» является поистине титулованным участником бизнес-сообщества. В её копилке – три престижных премии «БРЕНД ГОДА/EFFIE» (включая «Золото»-2012), премия «Права потребителей и качество обслуживания 2012», награды Sales Business Awards 2007-2008. Одной из ценнейших считается также полученная в ходе всероссийского потребительского голосования премию «Марка 1 в России 2013». В 2013 году «Диана» была признана лучшей химчисткой в Европе, получив премию The European Awards Best Practices Textile Cleaning. При этом количество личных наград менеджеров сети насчитывает несколько десятков и подтверждаются каждый год. \n\n«Диана-Клининг» занимает одно из ведущих мест на столичном рынке клининговых работ, предоставляя своим клиентам весь комплекс услуг по уборке помещений, включая мытье окон, химчистку мебели, ковров и текстиля. \n\nЗа 27 лет работы на рынке химчисток и клининга «Диана» добилась признания клиентов, партнёров и профессионалов рынка!",
          "link": "https://www.superjob.ru/vakansii/web-razrabotchik-36105291.html",
          "isBlacklisted": false,
          "latitude": 55.65205,
          "longitude": 37.529915
      },
      {
          "canEdit": false,
          "is_closed": false,
          "id": 43151159,
          "id_client": 14449,
          "payment_from": 0,
          "payment_to": 0,
          "date_pub_to": 1686405153,
          "date_archived": 1672064608,
          "date_published": 1684677153,
          "address": "Москва, улица Малая Дмитровка, 20",
          "profession": "Frontend-разработчик",
          "work": null,
          "compensation": null,
          "candidat": "SuperJob — это инновационная IT-компания, которая помогает соискателям найти работу, а работодателям — приобрести ценного сотрудника.\nЕжемесячно нашим сервисом пользуются миллионы соискателей и десятки тысяч работодателей, среди которых РЖД, Мегафон, МТС, Леруа Мерлен, Почта России, Сбербанк, Альфа-Банк, Ригла и многие другие. Мы активно развиваем нашу платформу и делаем ее лучше, подтверждая миссию «Работа должна доставлять удовольствие!»\nНаша команда состоит из инженеров, которые накопили значительную экспертизу в разработке и с удовольствием делятся ею на митапах SuperJob и на профильных конференциях HighLoad++, РИТ++\nЧем придется заниматься:\n• Развивать изоморфное приложение для двух высоконагруженных платформ: настольной и мобильной версий сайта;\n• Разрабатывать мониторинги и улучшать производительность компонентов приложения.\n• Поддерживать и развивать внутреннюю библиотеку react-компонентов.\n• Писать тесты, проводить code-review.\nЧто ждём от вас:\n• Опыта разработки с использованием современных JS-библиотек или фреймворков. Здорово, если есть опыт реализации изоморфных приложений с Flux-архитектурой на React.\n• Знания особенностей JS, стандартов от ES5 и новее.\n• Знания подходов к верстке на Flexbox и Grid.\n• Желания развиваться самостоятельно и помогать развиваться коллегам.\nСвоему будущему коллеге мы предлагаем:\n\n• Работу в одном из самых быстрорастущих рынков - HRTech.\n• Высокую инженерную культуру.\n• Непрерывное профессиональное развитие внутри компании.\n• Возможность стать частью сплоченной команды, любящей свое дело.\n• Официальную заработную плату.\n• Современный офис в 10 минутах пешей прогулки от станций метро Пушкинская/Маяковская/Чеховская/Новослободская.\n• Спортивный уголок.\n• Комфортную зону отдыха.\n• Кофе-поинты с вкуснейшим кофе и вендинговым аппаратом.\n• Оборудованное просторное место для питания.\n• Оплату проезда общественным транспортом.",
          "metro": [
              {
                  "id": 33,
                  "title": "Тверская",
                  "id_metro_line": 2
              },
              {
                  "id": 139,
                  "title": "Чеховская",
                  "id_metro_line": 9
              },
              {
                  "id": 119,
                  "title": "Пушкинская",
                  "id_metro_line": 7
              },
              {
                  "id": 68,
                  "title": "Новослободская",
                  "id_metro_line": 5
              }
          ],
          "currency": "rub",
          "vacancyRichText": "<p>SuperJob — это инновационная IT-компания, которая помогает соискателям найти работу, а работодателям — приобрести ценного сотрудника.</p><p>Ежемесячно нашим сервисом пользуются миллионы соискателей и десятки тысяч работодателей, среди которых РЖД, Мегафон, МТС, Леруа Мерлен, Почта России, Сбербанк, Альфа-Банк, Ригла и многие другие. Мы активно развиваем нашу платформу и делаем ее лучше, подтверждая миссию «Работа должна доставлять удовольствие!»</p><p>Наша команда состоит из инженеров, которые накопили значительную экспертизу в разработке и с удовольствием делятся ею на митапах SuperJob и на профильных конференциях HighLoad++, РИТ++</p><p><b>Чем придется заниматься:</b></p><ul><li>Развивать изоморфное приложение для двух высоконагруженных платформ: настольной и мобильной версий сайта;</li><li>Разрабатывать мониторинги и улучшать производительность компонентов приложения.</li><li>Поддерживать и развивать внутреннюю библиотеку react-компонентов.</li><li>Писать тесты, проводить code-review.</li></ul><p><b>Что ждём от вас:</b></p><ul><li>Опыта разработки с использованием современных JS-библиотек или фреймворков. Здорово, если есть опыт реализации изоморфных приложений с Flux-архитектурой на React.</li><li>Знания особенностей JS, стандартов от ES5 и новее.</li><li>Знания подходов к верстке на Flexbox и Grid.</li><li>Желания развиваться самостоятельно и помогать развиваться коллегам.</li></ul><p><b>Своему будущему коллеге мы предлагаем:</b><br /></p><ul><li>Работу в одном из самых быстрорастущих рынков - HRTech.</li><li>Высокую инженерную культуру.</li><li>Непрерывное профессиональное развитие внутри компании.</li><li>Возможность стать частью сплоченной команды, любящей свое дело.</li><li>Официальную заработную плату.</li><li>Современный офис в 10 минутах пешей прогулки от станций метро Пушкинская/Маяковская/Чеховская/Новослободская.</li><li>Спортивный уголок.</li><li>Комфортную зону отдыха.</li><li>Кофе-поинты с вкуснейшим кофе и вендинговым аппаратом.</li><li>Оборудованное просторное место для питания.</li><li>Оплату проезда общественным транспортом.</li></ul><p><br /></p><p><br /></p>",
          "covid_vaccination_requirement": {
              "id": 1,
              "title": "Не важно"
          },
          "external_url": null,
          "contact": "Савин Виталий",
          "moveable": true,
          "agreement": true,
          "anonymous": false,
          "is_archive": false,
          "is_storage": false,
          "type_of_work": {
              "id": 6,
              "title": "Полный рабочий день"
          },
          "place_of_work": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "education": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "experience": {
              "id": 3,
              "title": "От 3 лет"
          },
          "maritalstatus": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "children": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "client": {
              "id": 14449,
              "title": "SuperJob",
              "link": "https://www.superjob.ru/clients/superjob-14449/vacancies.html",
              "industry": [],
              "description": "Мы — IT-компания, которая 23 года успешно создает технологии для подбора персонала и поиска работы. Ежегодно мы помогаем найти работу миллионам специалистов. Сейчас в компании работает более 300 сотрудников, которые управляют аудиторией в 10 миллионов пользователей ежемесячно.\n\nМы развиваем сервисы SuperJob на всех платформах и ведем секретные разработки в области искусственного интеллекта. Последняя наша разработка — сервис «SuperJob — Работа рядом с домом» — в ближайшие три года снизит пассажиропотоки в крупных городах на треть!\n\nВспомните 10 крупнейших банков, которые знаете! Это наши клиенты. А вместе с ними еще несколько сотен.\n\nА теперь — 10 самых крупных магазинов? Это тоже наши клиенты.\n\nИ с ними десятки тысяч других магазинов. Все страховые компании и пенсионные фонды, лучшие IT-компании и крупнейшие промышленные предприятия страны — клиенты SuperJob.",
              "vacancy_count": 12,
              "staff_count": "100 — 500",
              "client_logo": "https://public.superjob.ru/images/clients_logos.ru/14449_7718fda37702705b312976bef39ec0bc.png",
              "address": "127006, г. Москва, улица Малая Дмитровка, 20",
              "addresses": [
                  {
                      "addressString": "127006, г. Москва, улица Малая Дмитровка, 20",
                      "latitude": 55.771839,
                      "longitude": 37.605256,
                      "phones": []
                  }
              ],
              "url": "http://www.superjob.ru",
              "short_reg": false,
              "is_blocked": false,
              "registered_date": 949586103,
              "town": {
                  "id": 4,
                  "title": "Москва",
                  "declension": "в Москве",
                  "hasMetro": true,
                  "genitive": "Москвы"
              }
          },
          "languages": [],
          "driving_licence": [],
          "catalogues": [
              {
                  "id": 33,
                  "title": "IT, Интернет, связь, телеком",
                  "key": 33,
                  "positions": [
                      {
                          "id": 48,
                          "title": "Разработка, программирование",
                          "key": 48
                      }
                  ]
              }
          ],
          "agency": {
              "id": 1,
              "title": "прямой работодатель"
          },
          "town": {
              "id": 4,
              "title": "Москва",
              "declension": "в Москве",
              "hasMetro": true,
              "genitive": "Москвы"
          },
          "already_sent_on_vacancy": false,
          "rejected": false,
          "response_info": [],
          "phone": "+7 (909) 9334387",
          "phones": [
              {
                  "number": 79099334387,
                  "additionalNumber": null
              }
          ],
          "fax": null,
          "faxes": null,
          "favorite": false,
          "client_logo": "https://public.superjob.ru/images/clients_logos.ru/14449_7718fda37702705b312976bef39ec0bc.png",
          "highlight": true,
          "age_from": 0,
          "age_to": 0,
          "gender": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "firm_name": "SuperJob",
          "firm_activity": "Мы — IT-компания, которая 20 лет успешно создает технологии для подбора персонала и поиска работы. Ежегодно мы помогаем найти работу миллионам специалистов. Сейчас в компании работает более 270 сотрудников, которые управляют аудиторией в 10 миллионов пользователей ежемесячно. \nМы развиваем сервисы Superjob на всех платформах и ведем секретные разработки в области искусственного интеллекта. Последняя наша разработка — сервис «Superjob — Работа рядом с домом» — в ближайшие три года снизит пассажиропотоки в крупных городах на треть!\nВспомните 10 крупнейших банков, которые знаете! Это наши клиенты. А вместе с ними еще несколько сотен. \nА теперь — 10 самых крупных магазинов? Это тоже наши клиенты. \nИ с ними десятки тысяч других магазинов. Все страховые компании и пенсионные фонды, лучшие IT-компании и крупнейшие промышленные предприятия страны — клиенты Superjob. \nСтабильность, интересные задачи, один из лучших офисов в Москве и отличная атмосфера — вряд ли кто-то предложит лучше. \nПриходите и проверьте!",
          "link": "https://www.superjob.ru/vakansii/frontend-razrabotchik-43151159.html",
          "isBlacklisted": false,
          "latitude": 55.771843,
          "longitude": 37.605255
      },
      {
          "canEdit": false,
          "is_closed": false,
          "id": 46308942,
          "id_client": 742886,
          "payment_from": 0,
          "payment_to": 0,
          "date_pub_to": 1686150840,
          "date_archived": 0,
          "date_published": 1684682040,
          "address": "Москва, проспект Вернадского, 53",
          "profession": "Программист 1С (строительство)",
          "work": null,
          "compensation": null,
          "candidat": "Компания ООО \"ССК \"Газрегион\" специализируется на строительстве магистральных трубопроводов, компрессорных и газораспределительных станций. Одним из приоритетных направлений деятельности является газификация регионов Российской Федерации в рамках соответствующей программы ПАО \"Газпром\"\n \nОбязанности:\n \n• Доработка нетиповых конфигураций, внедрение нового функционала в программах 1С Бит Финанс, 1С ЗУП КОРП 3.1\n \n• Разработка новых отчетов, обработок и печатных форм\n \n• Настройка и доработка механизмов интеграции между разными продуктами 1С\n \n• Обновление нетиповых конфигураций\n \n• Настройка прав доступа пользователей\n \nТребования:\n \n• Высшее техническое образование\n \n• Сертификат: 1С: Специалист по Платформе 8.3 – как преимущество\n \n• Опыт разработки в 1С: Предприятие 8.3 от 3-х лет\n \n• Знание языка программирования 1С на высоком уровне\n \n• Отличное знание платформы и средств разработки 1С 8.3\n \n• Навык работы с расширениями\n \n• Навык обновления сильно измененных нетиповых конфигураций, в том числе умение разобраться в чужом коде\n \n• Хорошее знание типовых конфигураций 1С Бухгалтерия предприятия КОРП 3.0, 1С ЗУП КОРП 3.1\n \n• Знание предметных областей: кадрового и бухгалтерского учета, принципов расчета заработной платы\n \nУсловия:\n \n• Итоговый уровень заработной платы обсуждается с успешным кандидатом по результатам собеседования\n \n• Офис: м. Проспект Вернадского, шаговая доступность\n \n• График работы: 5/2, 09.00 - 18.00, пятница - до 16.45, работа в офисе (возможность комбинированного графика обсуждается отдельно)\n \n• Оформление согласно ТК РФ\n \n• Частичная компенсация обедов в офисе\n \n• ДМС после испытательного срока\n \n• Для состоящих в профсоюзе: санаторно-курортное лечение для сотрудников и членов семьи, путевки для детей сотрудников в оздоровительные лагеря и другие мероприятия\n \nЕсли Вы готовы реализовать свой опыт работы в крупнейших проектах, имеющих государственное и общественное значение – мы ждем Вас!",
          "metro": [
              {
                  "id": 620,
                  "title": "Мичуринский проспект",
                  "id_metro_line": 8
              },
              {
                  "id": 18,
                  "title": "Проспект Вернадского",
                  "id_metro_line": 1
              },
              {
                  "id": 19,
                  "title": "Юго-Западная",
                  "id_metro_line": 1
              }
          ],
          "currency": "rub",
          "vacancyRichText": "<p>Компания ООО \"ССК \"Газрегион\" специализируется на строительстве магистральных трубопроводов, компрессорных и газораспределительных станций. Одним из приоритетных направлений деятельности является газификация регионов Российской Федерации в рамках соответствующей программы ПАО \"Газпром\"</p> <p>Обязанности:</p> <ul><li>Доработка нетиповых конфигураций, внедрение нового функционала в программах 1С Бит Финанс, 1С ЗУП КОРП 3.1</li> <li>Разработка новых отчетов, обработок и печатных форм</li> <li>Настройка и доработка механизмов интеграции между разными продуктами 1С</li> <li>Обновление нетиповых конфигураций</li> <li>Настройка прав доступа пользователей</li> </ul><p>Требования:</p> <ul><li>Высшее техническое образование</li> <li>Сертификат: 1С: Специалист по Платформе 8.3 – как преимущество</li> <li>Опыт разработки в 1С: Предприятие 8.3 от 3-х лет</li> <li>Знание языка программирования 1С на высоком уровне</li> <li>Отличное знание платформы и средств разработки 1С 8.3</li> <li>Навык работы с расширениями</li> <li>Навык обновления сильно измененных нетиповых конфигураций, в том числе умение разобраться в чужом коде</li> <li>Хорошее знание типовых конфигураций 1С Бухгалтерия предприятия КОРП 3.0, 1С ЗУП КОРП 3.1</li> <li>Знание предметных областей: кадрового и бухгалтерского учета, принципов расчета заработной платы</li> </ul><p>Условия:</p> <ul><li>Итоговый уровень заработной платы обсуждается с успешным кандидатом по результатам собеседования</li> <li>Офис: м. Проспект Вернадского, шаговая доступность</li> <li>График работы: 5/2, 09.00 - 18.00, пятница - до 16.45, работа в офисе (возможность комбинированного графика обсуждается отдельно)</li> <li>Оформление согласно ТК РФ</li> <li>Частичная компенсация обедов в офисе</li> <li>ДМС после испытательного срока</li> <li>Для состоящих в профсоюзе: санаторно-курортное лечение для сотрудников и членов семьи, путевки для детей сотрудников в оздоровительные лагеря и другие мероприятия</li> </ul><p>Если Вы готовы реализовать свой опыт работы в крупнейших проектах, имеющих государственное и общественное значение – мы ждем Вас!</p>",
          "covid_vaccination_requirement": {
              "id": 1,
              "title": "Не важно"
          },
          "external_url": null,
          "contact": "Екатерина Коломиец",
          "moveable": false,
          "agreement": true,
          "anonymous": false,
          "is_archive": false,
          "is_storage": false,
          "type_of_work": {
              "id": 6,
              "title": "Полный рабочий день"
          },
          "place_of_work": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "education": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "experience": {
              "id": 3,
              "title": "От 3 лет"
          },
          "maritalstatus": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "children": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "client": {
              "id": 742886,
              "title": "\"ССК \"Газрегион\"",
              "link": "https://www.superjob.ru/clients/ssk-gazregion-742886/vacancies.html",
              "industry": [],
              "description": "ООО «ССК «ГАЗРЕГИОН»\n\nКомпания ООО \"ССК \"Газрегион\" специализируется на строительстве магистральных газовых трубопроводов, компрессорных станций и объектов газораспределения.\n\nВ настоящее время Компания осуществляет строительство объектов магистрального газопровода \"Сила Сибири\" в Амурской области и Республике Саха (Якутия), а так же газопровода-отвода на ГРС \"Врангель\" в Приморском крае.\n\nОбщая численность персонала свыше 6600 человек.\n\nСтроительно-монтажные управления и механизированные колонны оснащены всем необходимым оборудованием и современной строительной техникой. Имеются собственные полевая испытательная лаборатория и строительная лаборатория.\n\nТехнологии Специализированной строительной компании ООО \"ССК \"Газрегион\" соответствуют как российским, так и международным стандартам.\n\nСпециалисты ООО \"ССК \"Газрегион\" работают на объектах, применяя новейшие технологические методики, используя современное строительное оборудование. Это позволяет компании вести строительные работы любой сложности в соответствии с заданными сроками и высокими стандартами качества.",
              "vacancy_count": 51,
              "staff_count": "более 5000",
              "client_logo": "https://public.superjob.ru/images/clients_logos.ru/742886_adcb14cd1cbe100afdfc4c5f7751d212.jpg",
              "address": null,
              "addresses": [],
              "url": "http://www.ssk-gaz.ru",
              "short_reg": false,
              "is_blocked": false,
              "registered_date": 1314103287,
              "town": {
                  "id": 4,
                  "title": "Москва",
                  "declension": "в Москве",
                  "hasMetro": true,
                  "genitive": "Москвы"
              }
          },
          "languages": [],
          "driving_licence": [],
          "catalogues": [
              {
                  "id": 33,
                  "title": "IT, Интернет, связь, телеком",
                  "key": 33,
                  "positions": [
                      {
                          "id": 48,
                          "title": "Разработка, программирование",
                          "key": 48
                      },
                      {
                          "id": 53,
                          "title": "Системы управления предприятием (ERP)",
                          "key": 53
                      },
                      {
                          "id": 503,
                          "title": "Внедрение и сопровождение ПО",
                          "key": 503
                      }
                  ]
              }
          ],
          "agency": {
              "id": 1,
              "title": "прямой работодатель"
          },
          "town": {
              "id": 4,
              "title": "Москва",
              "declension": "в Москве",
              "hasMetro": true,
              "genitive": "Москвы"
          },
          "already_sent_on_vacancy": false,
          "rejected": false,
          "response_info": [],
          "phone": null,
          "phones": null,
          "fax": null,
          "faxes": null,
          "favorite": false,
          "client_logo": "https://public.superjob.ru/images/clients_logos.ru/742886_adcb14cd1cbe100afdfc4c5f7751d212.jpg",
          "highlight": false,
          "age_from": 0,
          "age_to": 0,
          "gender": {
              "id": 0,
              "title": "Не имеет значения"
          },
          "firm_name": "ССК ГАЗРЕГИОН",
          "firm_activity": "ООО «ССК «ГАЗРЕГИОН»\n\nКомпания ООО \"ССК \"Газрегион\" специализируется на строительстве магистральных газовых трубопроводов, компрессорных станций и объектов газораспределения. \n\nВ настоящее время Компания осуществляет строительство объектов магистрального газопровода \"Сила Сибири\" в Амурской области и Республике Саха (Якутия), а так же газопровода-отвода на ГРС \"Врангель\" в Приморском крае. \n\nОбщая численность персонала свыше 6600 человек. \n\nСтроительно-монтажные управления и механизированные колонны оснащены всем необходимым оборудованием и современной строительной техникой. Имеются собственные полевая испытательная лаборатория и строительная лаборатория. \n\nТехнологии Специализированной строительной компании ООО \"ССК \"Газрегион\" соответствуют как российским, так и международным стандартам. \n\nСпециалисты ООО \"ССК \"Газрегион\" работают на объектах, применяя новейшие технологические методики, используя современное строительное оборудование. Это позволяет компании вести строительные работы любой сложности в соответствии с заданными сроками и высокими стандартами качества.",
          "link": "https://www.superjob.ru/vakansii/programmist-1s-46308942.html",
          "isBlacklisted": false,
          "latitude": 55.673248,
          "longitude": 37.502293
      }
  ],
  "total": 135,
  "more": true,
  "subscription_id": 0,
  "subscription_active": false
}

export async function getVacancies(params) {
  const url = new URL("https://startup-summer-2023-proxy.onrender.com/2.0/vacancies");
  url.search = new URLSearchParams(params).toString();
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        // 'Content-Type': 'application/json;charset=utf-8',
        redirect: 'follow',
        "x-secret-key": "GEU4nvd3rej*jeh.eqp",
        'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
        Authorization: `Bearer ${'v3.r.137440105.f6cef434853f594de645dcdd992103ccdce56db2.9f8b4c26f90e16d9ba990d3c74da267ceed9f687'}`,
      },
    });
    if (!response.ok) {
      throw new Error('Failed to get vacancies');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}