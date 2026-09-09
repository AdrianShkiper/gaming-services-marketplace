const ROUTES=Object.freeze({
  home:null,
  tasks:null,
  community:null,
  rating:null,
  partner:null,
  help:null,
  messages:null,
  notifications:null,
  profile:null,
  orders:null,
  balance:null,
  favorites:null,
  settings:null,
  terms:null,
  privacy:null,
  rules:null
});
const ROUTE_LABELS={home:'Главная',tasks:'Задания',community:'Сообщество',rating:'Рейтинг',partner:'Стать партнёром',help:'Помощь',messages:'Сообщения',notifications:'Уведомления',profile:'Профиль',orders:'Мои заказы',balance:'Баланс',favorites:'Избранное',settings:'Настройки',terms:'Пользовательское соглашение',privacy:'Политика конфиденциальности',rules:'Правила сервиса'};

const tasks=[
{title:'Поднять персонажа на 60 уровень',desc:'Нужен опытный игрок, который сможет быстро и безопасно прокачать персонажа до 60 уровня. Все детали обсудим в чате.',tags:['Прокачка','Фарм'],server:'Scryde x1',price:50,driver:'Ragnarok',ago:'3 дня назад',rating:'4.9',reviews:128,comments:12,img:1},
{title:'Сбор адены на спотах',desc:'Нужно собрать Nkk адены на спотах (Локация: Долина Драконов). Оплата после проверки.',tags:['Фарм','Адена'],server:'Луч x5',price:30,driver:'ZergHunter',ago:'5 минут назад',rating:'4.8',reviews:96,comments:18,img:2},
{title:'Крафт S грейда (оружие/броня)',desc:'Ищу крафтера с хорошей репутацией. Нужен крафт S грейда. Материалы предоставлю.',tags:['Крафт','S грейд'],server:'BonePTS x3',price:80,driver:'IronBard',ago:'12 минут назад',rating:'4.8',reviews:74,comments:25,img:3},
{title:'Помощь в прохождении ивента',desc:'Нужен сильный игрок для прохождения ивента. Опыт обязателен. Подробности в личке.',tags:['Ивенты','Помощь'],server:'VON x1',price:40,driver:'NightWalker',ago:'45 минут назад',rating:'4.7',reviews:63,comments:9,img:4},
{title:'Создать 20 предметов (ковка/кузнец)',desc:'Требуется кузнец, который может сделать 20 предметов. Материалы мои. Оплата — по договорённости.',tags:['Крафт','Кузнец'],server:'Луч x3',price:25,driver:'Asteria',ago:'1 час назад',rating:'4.7',reviews:58,comments:14,img:5},
{title:'Фарм эпиков (по договорённости)',desc:'Нужен отряд/игроки для фарма эпиков. Опыт обязателен. Пиши в ЛС, обсудим условия.',tags:['Фарм','Эпики'],server:'Scryde x1',price:60,driver:'ShadowRogue',ago:'2 часа назад',rating:'4.6',reviews:52,comments:21,img:6}
];

let state={mode:'all',cat:'all',reviews:false,page:1};
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];

function filtered(){
  const q=$('#search').value.trim().toLowerCase();
  const min=Number($('#minPrice').value)||0;
  const max=Number($('#maxPrice').value)||Infinity;
  let a=tasks.filter(t=>(!q||[t.title,t.desc,t.driver,t.server].join(' ').toLowerCase().includes(q))&&t.price>=min&&t.price<=max&&(state.cat==='all'||t.tags.includes(state.cat))&&(!state.reviews||t.reviews>0));
  if(state.mode==='new')a=[...a].reverse();
  if(state.mode==='popular')a.sort((x,y)=>y.reviews-x.reviews);
  if(state.mode==='cheap')a.sort((x,y)=>x.price-y.price);
  if(state.mode==='expensive')a.sort((x,y)=>y.price-x.price);
  return a;
}

function render(){
  const a=filtered();
  $('#tasks').innerHTML=a.map(t=>`<article class="task-card"><div class="task-thumb" data-task="${t.img}"></div><div class="task-main"><div class="task-title">${t.title}</div><div class="task-desc">${t.desc}</div><div class="tags">${t.tags.map(x=>`<span class="tag">${x}</span>`).join('')}</div></div><div class="server"><span class="server-chip">${t.server}</span><div class="price">€ ${t.price}</div></div><div class="driver"><span class="avatar-sprite" data-avatar="${t.img}"></span><span class="driver-name">${t.driver}</span><span class="driver-time">${t.ago}</span><div class="rating">★ ${t.rating} <small>(${t.reviews})</small></div></div><div class="task-actions"><span class="comment"><span class="ico-sprite i-comment"></span>${t.comments}</span><button class="write-btn" type="button" data-title="${t.title.replaceAll('"','&quot;')}">Написать</button></div></article>`).join('')||'<div style="height:629px;display:grid;place-items:center;color:#8fa1ac">Ничего не найдено</div>';
  $$('.write-btn').forEach(b=>b.onclick=()=>openModal(b.dataset.title));
}

function toast(s){
  const t=$('#toast');
  t.textContent=s;
  t.classList.add('show');
  clearTimeout(toast.i);
  toast.i=setTimeout(()=>t.classList.remove('show'),1700);
}

function openModal(title){
  $('#modalTitle').textContent=title;
  $('#modalText').textContent='Шаблон кнопки работает. Позже сюда подключим страницу заказа, чат и временную driver-сессию.';
  $('#modal').classList.add('open');
}

function goRoute(route){
  const target=ROUTES[route];
  if(target){window.location.href=target;return;}
  toast(`${ROUTE_LABELS[route]||route}: ссылка будет подключена позже`);
}

function bindRouteControls(){
  $$('.route-control').forEach(control=>control.addEventListener('click',()=>{
    const route=control.dataset.route;
    if(control.classList.contains('topnav-item')){
      $$('.topnav-item').forEach(x=>x.classList.remove('active'));
      control.classList.add('active');
    }
    if(control.closest('.side-menu')){
      $$('.side-menu button').forEach(x=>x.classList.remove('active'));
      control.classList.add('active');
    }
    goRoute(route);
  }));
}

$('#modalClose').onclick=()=>$('#modal').classList.remove('open');
$('#modalContact').onclick=()=>{$('#modal').classList.remove('open');toast('Кнопка работает — чат подключим позже')};
$('#modal').onclick=e=>{if(e.target.id==='modal')$('#modal').classList.remove('open')};

['search','minPrice','maxPrice'].forEach(id=>$('#'+id).addEventListener('input',render));
$('#level').addEventListener('change',()=>toast(`Уровень: ${$('#level').value}`));

$$('.cat').forEach(b=>b.onclick=()=>{
  $$('.cat').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
  state.cat=b.dataset.cat;
  render();
});

$$('.tab').forEach((b,i)=>b.onclick=()=>{
  $$('.tab').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
  state.mode=i===0?'all':b.dataset.mode;
  render();
});

$('#reviews').onclick=()=>{
  state.reviews=!state.reviews;
  $('#reviews').classList.toggle('on',state.reviews);
  $('#reviews').setAttribute('aria-pressed',state.reviews);
  render();
};

$('#reset').onclick=()=>{
  $('#search').value='';
  $('#minPrice').value='';
  $('#maxPrice').value='';
  state={mode:'all',cat:'all',reviews:false,page:1};
  $('#reviews').classList.remove('on');
  $$('.cat').forEach((b,i)=>b.classList.toggle('active',i===0));
  $$('.tab').forEach((b,i)=>b.classList.toggle('active',i===0));
  $$('.pagination button').forEach(b=>b.classList.toggle('active',b.dataset.page==='1'));
  render();
  toast('Фильтры сброшены');
};

$$('.pagination button').forEach(b=>b.addEventListener('click',()=>{
  const value=b.dataset.page;
  if(value==='prev')state.page=Math.max(1,state.page-1);
  else if(value==='next')state.page=Math.min(5,state.page+1);
  else state.page=Number(value);
  $$('.pagination button').forEach(x=>x.classList.toggle('active',x.dataset.page===String(state.page)));
  toast(`Страница ${state.page}`);
}));

bindRouteControls();
render();