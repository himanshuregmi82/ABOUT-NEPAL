(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const applyTheme = theme => {
    root.dataset.theme = theme;
    try { localStorage.setItem('nepal-verse-theme', theme); } catch (error) { /* Storage may be disabled in private contexts. */ }
    const dark = theme === 'dark';
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#071e2d' : '#f7f4ed');
  };
  if (toggle) {
    applyTheme(root.dataset.theme || 'light');
    toggle.addEventListener('click', () => applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
  }

  const builder = document.querySelector('#trip-builder');
  const result = document.querySelector('#planner-result');
  const routes = {
    '3': {
      culture: 'Kathmandu’s living heritage → Patan’s craft courtyards → Bhaktapur at golden hour.',
      adventure: 'Kathmandu → Pokhara → Sarangkot sunrise and a gentle lakeside hike.',
      nature: 'Kathmandu → Chitwan for a responsible jungle stay and river time.',
      balanced: 'Kathmandu heritage → Pokhara’s lake and mountain views → a slow final morning.'
    },
    '7': {
      culture: 'Kathmandu Valley → Patan and Bhaktapur → Lumbini’s monastic zone → Kathmandu.',
      adventure: 'Kathmandu → Pokhara → a guided Annapurna foothills walk → lakeside rest.',
      nature: 'Kathmandu → Chitwan → Pokhara → a quiet Phewa Lake sunrise.',
      balanced: 'Kathmandu Valley → Pokhara → short guided mountain walk → Chitwan wildlife.'
    },
    '14': {
      culture: 'Kathmandu Valley → Bandipur → Pokhara → Lumbini → Chitwan, with time to linger.',
      adventure: 'Kathmandu → Pokhara → a suitable guided Himalayan trek → recovery by the lake.',
      nature: 'Kathmandu → Chitwan → Pokhara → Rara Lake or a longer Himalayan valley route.',
      balanced: 'Kathmandu heritage → Himalayan trek → Pokhara → Chitwan, paced with weather days.'
    }
  };
  if (builder && result) builder.addEventListener('submit', event => {
    event.preventDefault();
    const form = new FormData(builder);
    const days = form.get('days');
    const style = form.get('style');
    const labels = { '3': '3–5 day Nepal route', '7': '6–9 day Nepal route', '14': '10+ day Nepal route' };
    result.innerHTML = `<span>YOUR STARTING ROUTE</span><h3>${labels[days]}</h3><p>${routes[days][style]} Build in buffer days for weather, roads and the unexpected.</p>`;
    result.hidden = false;
    result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
})();
