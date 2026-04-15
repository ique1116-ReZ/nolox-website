const translations = {
  zh: {
    nav_get: "获取应用",
    new_flow: "<span>NEW</span> AI 拆解流",
    hero_title: '<span class="line"><span class="word">功能少，</span></span><span class="line"><span class="word">即是</span><span class="word highlight">护城河。</span></span>',
    hero_sub: "摒弃子任务、标签与日历。<br>一句话生成待办，剩下的全交给 AI。",
    mockup_task: '车辆闲时自动洗车<span class="blinking-cursor"></span>',
    mockup_ai: '<span class="badge-tag">AI</span> 事务',
    mockup_buy: '购买',
    mockup_out: '输出',
    mockup_keep: '维护',
    mockup_confirm: '确认记录',
    phil_title: '<span class="block">当其他应用都在做加法时，</span><span class="block">我们在做减法。</span>',
    phil_p: "极简不是不作为，而是对注意力的绝对保护。我们的 AI 三层分类机制，精准捕获你的每一刻灵感。",
    rule_label: "--- 核心分类规则",
    rule_title: "化繁为四",
    cat_buy: "购买",
    cat_affair: "事务",
    cat_out: "输出",
    cat_keep: "维护",
    b_1: "买牛奶",
    b_2: "下单耳机",
    b_desc: "BUY / 消费型",
    a_1: "缴电费",
    a_2: "办签证",
    a_desc: "AFFAIR / 行政手续",
    o_1: "写周报",
    o_2: "剪视频",
    o_desc: "OUTPUT / 工作创作",
    k_1: "跑步 5km",
    k_2: "按时吃药",
    k_desc: "KEEP / 健康日常",
    deco_label: "--- 任务拆解",
    deco_title: "从庞大的想法<br>到可执行的步骤",
    deco_p: "结合预设专家场景，AI 一键帮你将「闲时自驾旅行」、「项目大纲」等宽泛想法，自动拆分为多日时间范围的小步待办。",
    term_pre: "Flowchart Preview...",
    term_1: "> 正在生成子任务<br>> 匹配预设模型：项目管家",
    m_deco_hd: "任务拆解",
    m_d_g1: "─── 功能定义 ───",
    m_d_r1: "✓ 确定需求",
    m_d_t1: "输出 ｜ 最近",
    m_d_r2: "✓ 制定规范",
    m_d_t2: "输出 ｜ 最近",
    m_d_g2: "─── 技术实现 ───",
    m_d_r3: "✓ 选择定位系统",
    m_d_t3: "购买 ｜ 本周",
    m_d_r4: "✓ 开发导航算法",
    m_d_t4: "输出 ｜ 本周",
    m_d_btn: "确认 · 智能派出 (15/15)",
    cta_title: "准备好做减法了吗？",
    cta_sub: "¥12 Buy Once. Yours Forever.",
    cta_btn: "在 App Store 获取",
    link_1: "支持",
    link_2: "隐私协议",
    copy: "© 2026 Nolox. iOS 26+ 建议体验."
  },
  en: {
    nav_get: "Get App",
    new_flow: "<span>NEW</span> AI Breakdown",
    hero_title: '<span class="line"><span class="word">Less </span><span class="word">is </span></span><span class="line"><span class="word">a </span><span class="word highlight">Moat.</span></span>',
    hero_sub: "No subtasks, tags, or calendars.<br>One sentence, and AI handles the rest.",
    mockup_task: 'Auto wash car when idle<span class="blinking-cursor"></span>',
    mockup_ai: '<span class="badge-tag">AI</span> AFFAIR',
    mockup_buy: 'BUY',
    mockup_out: 'OUTPUT',
    mockup_keep: 'KEEP',
    mockup_confirm: 'Confirm & Record',
    phil_title: '<span class="block">While others add,</span><span class="block">we subtract.</span>',
    phil_p: "Minimalism isn't doing nothing, it's the absolute protection of attention. Our 3-layer AI categorization system captures your every inspiration precisely.",
    rule_label: "--- CORE RULES",
    rule_title: "Simplify into Four",
    cat_buy: "BUY",
    cat_affair: "AFFAIR",
    cat_out: "OUTPUT",
    cat_keep: "KEEP",
    b_1: "Buy milk",
    b_2: "Order headphones",
    b_desc: "BUY / Consumption",
    a_1: "Pay electric bill",
    a_2: "Apply for visa",
    a_desc: "AFFAIR / Administrative",
    o_1: "Write weekly report",
    o_2: "Edit video",
    o_desc: "OUTPUT / Creation",
    k_1: "Run 5km",
    k_2: "Take medicine",
    k_desc: "KEEP / Health & Routine",
    deco_label: "--- DECOMPOSITION",
    deco_title: "From massive ideas<br>to actionable steps",
    deco_p: "Combined with expert presets, AI automatically breaks down broad ideas like 'road trip' or 'project outline' into actionable steps with targeted timelines.",
    term_pre: "Flowchart Preview...",
    term_1: "> Mapping sub-tasks...<br>> Matched expert model: PM",
    m_deco_hd: "Task Decompose",
    m_d_g1: "─── Feature Def ───",
    m_d_r1: "✓ Define requirements",
    m_d_t1: "OUTPUT ｜ RECENT",
    m_d_r2: "✓ Set specifications",
    m_d_t2: "OUTPUT ｜ RECENT",
    m_d_g2: "─── Engineering ───",
    m_d_r3: "✓ Select GPS system",
    m_d_t3: "BUY ｜ THIS WK",
    m_d_r4: "✓ Develop nav algo",
    m_d_t4: "OUTPUT ｜ THIS WK",
    m_d_btn: "Confirm & Dispatch (15/15)",
    cta_title: "Ready to subtract?",
    cta_sub: "$1.99 Buy Once. Yours Forever.",
    cta_btn: "Get on App Store",
    link_1: "Support",
    link_2: "Privacy",
    copy: "© 2026 Nolox. iOS 26+ Recommended."
  }
};

let currentLang = 'zh';

function toggleLanguage() {
  currentLang = currentLang === 'zh' ? 'en' : 'zh';
  document.getElementById('lang-toggle').innerText = currentLang === 'zh' ? 'EN' : '中';
  
  // Need to kill ScrollTriggers related to text reveal in philosophy
  // because replacing innerHTML removes the elements from DOM
  const isScrollTriggerActive = typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined";
  
  let stInstances = [];
  if (isScrollTriggerActive) {
    // Only kill triggers bound to text we are replacing
    ScrollTrigger.getAll().forEach(t => {
      if (t.trigger && (t.trigger.classList.contains('block') || t.trigger.classList.contains('hero-title'))) {
        t.kill();
      }
    });
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key];
    }
  });

  // Re-apply reveal-text animations for the new innerHTML blocks
  if (isScrollTriggerActive) {
    setTimeout(() => {
      const revealBlocks = gsap.utils.toArray('.reveal-text .block');
      revealBlocks.forEach(block => {
        gsap.to(block, {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: block,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true
          }
        });
      });
      ScrollTrigger.refresh();
    }, 100);
  }
}

const currentTranslations = {
  zh: {
    sc_text1: "随时待命<br>纯净的输入窗口",
    sc_text2: "1秒倾泻想法<br>AI 瞬时分类",
    sc_text3: "克制的视觉流<br>极简不仅是皮囊"
  },
  en: {
    sc_text1: "Always stand by<br>Pure input window",
    sc_text2: "1s dump idea<br>AI instant sort",
    sc_text3: "Restrained visuals<br>More than skin deep"
  }
};
Object.assign(translations.zh, currentTranslations.zh);
Object.assign(translations.en, currentTranslations.en);

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('lang-toggle');
  if(btn) {
    btn.addEventListener('click', toggleLanguage);
  }
});
