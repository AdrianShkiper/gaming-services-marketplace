# Visual V4 — Component Map v0.1

Источник визуальной правды: `visual-v4/REFERENCE.md` и утверждённый скриншот 1536×1024.

Цель этого документа — разложить эталон на переиспользуемые frontend-компоненты без изменения визуала. Никаких отдельных версий сайта под 1366/1920/2560 не создаём: строим один адаптивный интерфейс из компонентов.

## 1. Базовая архитектура

```text
AppShell
├─ PageBackground
├─ OuterOrnament
├─ Header
├─ ContentGrid
│  ├─ LeftSidebar
│  ├─ MainContent
│  └─ RightSidebar
└─ Footer
```

Desktop строится через CSS Grid. Внутренние группы — через Grid/Flexbox. Абсолютные координаты допускаются только внутри декоративных составных элементов, но не как основа всей страницы.

## 2. Система визуальных рамок

Рамки не рисуются отдельно для каждого блока. Создаём набор presets и применяем только там, где соответствующий тип реально есть на эталоне.

### `FramePageOrnate`
Использование:
- внешняя рамка страницы;
- четыре декоративных угла;
- боковая резьба;
- верхняя и нижняя золотые линии;
- центральные ромбы/орнаменты.

Метод: точные срезы из эталона, 9-slice / отдельные corner-edge-center assets.

### `FramePanelGold`
Использование:
- WelcomeCard;
- LeftNavigationPanel;
- CategoriesPanel;
- FiltersPanel.

Характер:
- тонкая золотая линия;
- почти прямоугольная геометрия;
- без искусственного добавления срезанных углов там, где их нет.

### `FramePromoGold`
Использование:
- левый promo-блок;
- правый promo-блок.

Характер:
- золотая рамка;
- нижний центральный декоративный ромб/узел;
- собственные декоративные детали из эталона.

### `FrameChamferedTeal`
Использование:
- карточки заданий;
- части toolbar/search chrome, где на эталоне действительно есть срезы.

Характер:
- тёмная сине-зелёная панель;
- тонкий холодный контур;
- небольшие срезанные углы;
- без золотой декоративной резьбы.

### `FrameControlGold`
Использование:
- активный top-nav item;
- активный sidebar item;
- кнопки `Написать`;
- выбранный tab `Все задания`.

Характер:
- золотой контур;
- мягкое золотое свечение;
- тёмная внутренняя заливка.

### `FrameInputBlue`
Использование:
- поиск;
- select уровня;
- поля цены;
- компактные input/select controls.

## 3. Header

```text
Header
├─ BrandLogo
├─ MainNavigation
│  ├─ NavItem: Задания
│  ├─ NavItem: Сообщество
│  ├─ NavItem: Рейтинг
│  ├─ NavItem: Стать партнёром
│  └─ NavItem: Помощь
├─ MailButton
├─ NotificationButton
│  └─ NotificationBadge
└─ UserMenuButton
   ├─ UserAvatar
   ├─ UserName
   └─ DropdownChevron
```

Интерактивность:
- все nav items — реальные `button`/`a`;
- mail/bell/profile — реальные кнопки;
- badge — состояние данных, не часть фоновой картинки.

Визуальные assets:
- logo;
- 5 золотых nav icons;
- mail icon;
- bell icon;
- profile avatar.

## 4. LeftSidebar

```text
LeftSidebar
├─ WelcomeCard
│  ├─ WelcomePortrait
│  ├─ WelcomeEyebrow
│  ├─ UserName
│  └─ WelcomeText
├─ LeftNavigationPanel
│  ├─ SidebarItem: Главная
│  ├─ SidebarItem: Задания
│  ├─ SidebarItem: Мои заказы
│  ├─ SidebarItem: Сообщество
│  │  └─ Badge
│  ├─ SidebarItem: Профиль
│  ├─ SidebarItem: Баланс
│  ├─ SidebarItem: Избранное
│  └─ SidebarItem: Настройки
└─ LeftPromoCard
   ├─ PromoArtwork
   └─ PromoText
```

Интерактивность:
- все sidebar items — реальные кнопки/ссылки;
- активный пункт использует `FrameControlGold`;
- badge задаётся данными.

## 5. MainContent

```text
MainContent
├─ HeroPanel
│  ├─ HeroArtwork
│  ├─ HeroTitle
│  └─ HeroSubtitle
├─ TaskToolbar
│  ├─ TaskTabs
│  │  ├─ Все задания
│  │  ├─ Новые
│  │  ├─ Популярные
│  │  ├─ Сначала дешёвые
│  │  └─ Сначала дорогие
│  └─ TaskSearch
├─ TaskList
│  └─ TaskCard × N
└─ Pagination
```

### HeroPanel
Статическая artwork-часть отделяется от текста. Это позволит позже менять игру, рекламный баннер или подпись без перерисовки всего hero.

### TaskToolbar
- tabs — реальные кнопки;
- search — реальный input;
- визуальный chrome повторяет эталон.

## 6. TaskCard

Один универсальный компонент, данные подаются извне.

```text
TaskCard
├─ TaskThumbnail
├─ TaskBody
│  ├─ TaskTitle
│  ├─ TaskDescription
│  └─ TaskTags
├─ ServerAndPrice
│  ├─ ServerBadge
│  └─ Price
├─ DriverInfo
│  ├─ DriverAvatar
│  ├─ DriverName
│  └─ PostedAgo
├─ SocialInfo
│  ├─ CommentsIcon
│  └─ CommentsCount
├─ Rating
│  ├─ StarIcon
│  ├─ RatingValue
│  └─ ReviewsCount
└─ ActionButton
```

Визуал:
- вся карточка использует `FrameChamferedTeal`;
- thumbnail и avatar — отдельные assets;
- теги — компактные pills;
- `Написать` — `FrameControlGold`.

Логика первой версии:
- поиск по title/description/server;
- фильтрация по категории;
- фильтрация по цене;
- фильтрация по отзывам;
- сортировка;
- пагинация;
- `Написать` открывает modal/placeholder action до подключения backend.

## 7. RightSidebar

```text
RightSidebar
├─ CategoriesPanel
│  ├─ PanelTitle
│  └─ CategoryItem × N
├─ FiltersPanel
│  ├─ LevelSelect
│  ├─ PriceRange
│  │  ├─ PriceFrom
│  │  └─ PriceTo
│  ├─ ReviewsOnlyToggle
│  └─ ResetFiltersButton
└─ RightPromoCard
   ├─ PromoArtwork
   └─ PromoText
```

Интерактивность:
- category items — реальные кнопки;
- select/input/toggle — реальные native/accessible controls;
- reset — реальная кнопка.

## 8. Footer

```text
Footer
├─ Copyright
└─ FooterLinks
   ├─ Пользовательское соглашение
   ├─ Политика конфиденциальности
   └─ Правила сервиса
```

Footer остаётся лёгким и не смешивается с внешней декоративной рамкой страницы.

## 9. Адаптивность — закладывается сразу

Мы не создаём отдельные HTML-версии под разные разрешения.

### Desktop
```text
[ LeftSidebar ][ MainContent ][ RightSidebar ]
```

### Tablet
- MainContent остаётся главным;
- боковые панели могут сжиматься;
- при недостатке ширины RightSidebar переводится в drawer/filter panel;
- LeftSidebar может стать компактным navigation drawer.

### Mobile
```text
[ CompactHeader ]
[ MainContent ]
[ Filter/Category Drawer ]
[ Navigation Drawer / Bottom access ]
```

Те же компоненты переиспользуются. Дублировать отдельную мобильную страницу нельзя.

Технические правила:
- CSS Grid/Flexbox;
- `minmax()`, `clamp()`, относительные размеры;
- CSS custom properties/design tokens;
- media/container queries;
- изображения через responsive sizing (`object-fit`, `srcset` позже при необходимости);
- touch-targets не менее удобного размера на мобильном интерфейсе.

## 10. Design tokens

Сразу выносим в переменные:

```text
--page-bg
--panel-bg
--panel-bg-raised
--gold
--gold-soft
--line-cold
--text-main
--text-muted
--danger
--header-height
--sidebar-left-width
--sidebar-right-width
--content-gap
--panel-gap
--chamfer-size
--control-height
--frame-line-width
```

Цель: изменения масштаба, плотности и темы не должны требовать ручного редактирования десятков элементов.

## 11. Asset map

### Строго извлекаем из утверждённого эталона
- outer ornate corners/edges/diamonds;
- logo;
- gold icons;
- welcome portrait;
- hero artwork;
- left/right promo artwork;
- task thumbnails;
- driver avatars;
- уникальные декоративные элементы рамок.

### Не запекаем в картинки
- основной текст интерфейса;
- цены;
- usernames;
- ratings;
- counters;
- category counts;
- filter values;
- notification badge;
- кнопочные состояния.

Это обеспечивает масштабируемость и дальнейшее подключение backend.

## 12. Порядок реализации

1. Зафиксировать точные frame presets.
2. Нарезать reusable visual assets из эталона.
3. Собрать AppShell + desktop grid.
4. Собрать Header/LeftSidebar/RightSidebar.
5. Собрать Hero/Toolbar.
6. Собрать один универсальный TaskCard.
7. Подать текущие 6 задач как данные.
8. Подключить поиск/фильтры/сортировку/пагинацию/modal.
9. Провести визуальное сравнение с эталоном.
10. После desktop-match включить tablet/mobile reflow теми же компонентами.

## 13. Критический принцип

Визуальный эталон определяет внешний вид. Компонентная архитектура определяет поведение и масштабируемость. Нельзя жертвовать одним ради другого: сайт должен одновременно выглядеть как эталон и оставаться нормальным поддерживаемым frontend-приложением.
