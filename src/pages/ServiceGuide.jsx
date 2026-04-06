import { useLang, t } from '../i18n'
import './ServiceGuide.css'

const executionModules = [
  {
    zh: '账号基础活跃维护',
    en: 'Account Activity Maintenance',
    descZh: '通过有节奏的社区浏览、轻量互动和安全参与，帮助账号逐步积累 Karma，建立自然的活跃记录',
    descEn: 'Build Karma gradually through rhythmic community browsing, light engagement, and safe participation to establish a natural activity record',
  },
  {
    zh: '社区调研与选题方向',
    en: 'Community Research & Topic Selection',
    descZh: '围绕产品需求和推广目标开展社区调研，识别热门讨论、潜在切入点和可持续跟进的内容主题',
    descEn: 'Conduct community research around product needs and growth goals to identify hot discussions, potential entry points, and sustainable content themes',
  },
  {
    zh: '评论互动策略与内容优化',
    en: 'Comment Engagement Strategy & Optimization',
    descZh: '锚定目标人群，优化评论思路和切入角度。通过配置评论 Skill 实现 100% 自动化筛选 Post + 发布推广评论',
    descEn: 'Target the right audience and optimize comment approach and angles. Configure comment Skills for 100% automated Post screening + promotional comment publishing',
  },
  {
    zh: 'Post 选题与内容优化',
    en: 'Post Topic Selection & Content Optimization',
    descZh: '结合社区规则、表达习惯、话题偏好，协助选题、优化内容结构和语言',
    descEn: 'Combine community rules, expression habits, and topic preferences to assist with topic selection, content structure, and language optimization',
  },
  {
    zh: '风险控制与账号管理',
    en: 'Risk Control & Account Management',
    descZh: 'Agent 自动识别异常互动、沉淀社区注意事项，提供账号管理与风控建议，减少踩坑和无效投入',
    descEn: 'Agent automatically identifies abnormal interactions, captures community notes, and provides account management and risk control recommendations',
  },
  {
    zh: '帖子曝光量提升',
    en: 'Post Exposure Boost',
    descZh: '数据驱动，持续优化发帖时间和曝光策略',
    descEn: 'Data-driven continuous optimization of posting times and exposure strategies',
  },
  {
    zh: 'Karma 增长服务',
    en: 'Karma Growth Service',
    descZh: '快速积累账号权威，达到发帖门槛',
    descEn: 'Quickly build account authority to reach posting thresholds',
  },
  {
    zh: '数据复盘与策略迭代',
    en: 'Data Review & Strategy Iteration',
    descZh: '基于阶段性运营反馈，梳理内容表现、互动情况和社区反馈，Agent 持续参与复盘，建议越来越贴近产品特点和目标用户',
    descEn: 'Based on periodic operational feedback, review content performance, engagement, and community feedback. Agent continuously participates in reviews with increasingly aligned recommendations',
  },
]

const redditStats = [
  { num: '4B+', zh: '月访问量', en: 'Monthly Visits', subZh: '4.3 亿活跃用户', subEn: '430M active users' },
  { num: '#1', zh: '域名权威', en: 'Domain Authority', subZh: '超越 Amazon、YouTube', subEn: 'Outranking Amazon & YouTube' },
  { num: '6x', zh: 'ChatGPT 引用', en: 'ChatGPT Citations', subZh: '是 Twitter 的 6 倍', subEn: 'More than Twitter' },
  { num: '100K+', zh: '垂直社区', en: 'Niche Communities', subZh: '覆盖所有行业赛道', subEn: 'Covering every vertical' },
]

const features = [
  { zh: '智能回帖', en: 'Smart Commenting', descZh: '根据关键词，AI 自动发现与你产品相关的讨论帖，生成有价值的回复，自然引导流量。自动检查 Subreddit 规则合规性，规避封号风险。', descEn: 'AI automatically discovers discussion threads related to your product based on keywords, generates valuable replies, and naturally drives traffic. It automatically checks Subreddit rule compliance to minimize ban risks.' },
  { zh: 'Subreddit 发现与分析', en: 'Subreddit Discovery & Analysis', descZh: '发帖之前，先摸透每个社区。AI 自动评估每个 Subreddit 的营销适配度、用户构成、活跃规律和内容偏好，提供策略建议和切入点推荐。', descEn: "Before posting, get deep insights into each community. AI automatically evaluates each Subreddit's marketing fit, user demographics, activity patterns, and content preferences." },
  { zh: '潜在客户追踪', en: 'Lead Tracking', descZh: '通过关键词和 AI 分析，在帖子和评论中追踪高意向潜在客户，实时通知，精准触达目标用户。', descEn: 'Through keyword and AI analysis, track high-intent leads in posts and comments with real-time notifications for precise targeting.' },
  { zh: 'Karma 增长服务', en: 'Karma Growth', descZh: '从 0 开始帮你的 Reddit 账号积累 Karma 和权威性，快速达到发帖门槛。实测 Karma 从 2 增长到 220+，仅用 48 小时。', descEn: "Build your account's Karma and authority from scratch. In practice, Karma grew from 2 to 220+ in just 48 hours." },
  { zh: '内容策略', en: 'Content Strategy', descZh: '根据数据分析，制定最优发帖时间、内容类型和话题方向。', descEn: 'Develop optimal posting times, content types, and topic directions based on data analysis.' },
  { zh: '竞品监控', en: 'Competitor Monitoring', descZh: '追踪竞品在 Reddit 上的动态和策略，发现增长机会。', descEn: 'Track competitor activity and strategies on Reddit to discover growth opportunities.' },
  { zh: '品牌建设', en: 'Brand Building', descZh: '在目标 Subreddit 建立品牌声量，产出高质量 UGC 内容，让用户成为品牌传播者。', descEn: 'Build brand presence in target Subreddits, produce high-quality UGC content, and turn users into brand advocates.' },
]

const guarantees = [
  { zh: '10 天内容存活保障', en: '10-Day Content Survival', descZh: '所有发布的内容承诺在 Reddit 上保持可见至少 10 天。如在 10 天内被删除，我们将免费重新创建同等质量的替代内容。', descEn: 'All published content is guaranteed to remain visible on Reddit for at least 10 days. If deleted within 10 days, we will recreate equivalent quality content at no extra cost.' },
  { zh: '内容准确性承诺', en: 'Content Accuracy Promise', descZh: '如内容存在事实性错误，我们将免费修正或重新创建。', descEn: 'If content contains factual errors, we will correct or recreate it at no charge.' },
  { zh: '实时数据追踪', en: 'Real-Time Data Tracking', descZh: '提供 Dashboard 实时查看所有内容的发布状态、互动数据和效果表现，跨 Reddit、Google、AI 搜索多维度追踪。', descEn: 'Dashboard provides real-time visibility into all content status, engagement data, and performance across Reddit, Google, and AI search.' },
  { zh: '未消耗退款', en: 'Unused Credit Refunds', descZh: '按需付费，内容发布成功才收费，未消耗部分支持按比例退款。', descEn: 'Pay as you go. You only pay for successfully published content. Unused credits are refunded proportionally.' },
]

export default function ServiceGuide() {
  const { lang } = useLang()
  return (
    <div className="page-container service-guide">
      <h1>{t(lang, '服务指南', 'Service Guide')}</h1>
      <p className="page-updated">{t(lang, '全面了解 Upvote.Reddit 的服务内容与工作流程', 'Everything you need to know about Upvote.Reddit services and workflows')}</p>

      {/* Why Reddit - Big Numbers */}
      <section>
        <h2>{t(lang, '为什么选择 Reddit', 'Why Reddit')}</h2>
        <p>{t(lang,
          'Reddit 是全球最大的英文用户讨论社区，也是品牌出海获取真实口碑和 AI 搜索可见度的最佳渠道。',
          "Reddit is the world's largest English-language discussion community and the best channel for brands to gain authentic word-of-mouth and AI search visibility."
        )}</p>
        <div className="sg-stats-grid">
          {redditStats.map((s, i) => (
            <div className="sg-stat-card" key={i}>
              <div className="sg-stat-num">{s.num}</div>
              <div className="sg-stat-label">{t(lang, s.zh, s.en)}</div>
              <div className="sg-stat-sub">{t(lang, s.subZh, s.subEn)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Search Value */}
      <section>
        <h2>{t(lang, 'AI 搜索价值', 'AI Search Value')}</h2>
        <p>{t(lang,
          'Reddit 内容正在成为 AI 搜索引擎的核心引用来源。通过在 Reddit 上建立品牌内容，你的产品将出现在 ChatGPT、Perplexity、Google AI Overview 等 AI 搜索结果中，获得全新的曝光渠道。',
          'Reddit content is becoming a core citation source for AI search engines. By building brand content on Reddit, your product will appear in AI search results across ChatGPT, Perplexity, Google AI Overview and more.'
        )}</p>
        <div className="sg-ai-benefits">
          <div className="sg-ai-item">
            <strong>{t(lang, '品牌曝光', 'Brand Exposure')}</strong>
            <p>{t(lang, '品牌出现在 AI 搜索推荐结果中', 'Your brand surfaces in AI search recommendations')}</p>
          </div>
          <div className="sg-ai-item">
            <strong>{t(lang, 'Google 首页', 'Google Page 1')}</strong>
            <p>{t(lang, 'Reddit 帖子自带高权重，天然排名优势', 'Reddit posts carry high domain authority with natural ranking advantages')}</p>
          </div>
          <div className="sg-ai-item">
            <strong>{t(lang, '真实口碑', 'Social Proof')}</strong>
            <p>{t(lang, '真实用户评价和讨论，建立品牌信任', 'Authentic user reviews and discussions that build brand trust')}</p>
          </div>
          <div className="sg-ai-item">
            <strong>{t(lang, '精准引流', 'Direct Traffic')}</strong>
            <p>{t(lang, 'Reddit 社区直接为官网导流', 'Drive traffic directly from Reddit communities to your website')}</p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section>
        <h2>{t(lang, '产品简介', 'Product Overview')}</h2>
        <p>{t(lang,
          'Upvote Reddit 是一款 AI 驱动的 Reddit 营销增长工具，基于 OpenClaw AI Agent 全自动运行，覆盖从机会发现、内容发布到互动增长的完整链路，帮助品牌在 Reddit 上安全、高效地获取曝光与用户增长。',
          'Upvote Reddit is an AI-powered Reddit marketing growth tool built on the OpenClaw AI Agent framework. It runs fully automatically, covering the entire pipeline from opportunity discovery and content publishing to engagement growth.'
        )}</p>
        <ul>
          <li>{t(lang, '自动发现高价值 Subreddit 和潜在客户', 'Automatically discover high-value Subreddits and potential customers')}</li>
          <li>{t(lang, '使用 claude-opus-4.6 生成合规内容，规避封号风险', 'Generate compliant content using claude-opus-4.6, minimizing ban risks')}</li>
          <li>{t(lang, '全流程 AI 自动化，无需人工干预', 'Fully automated AI workflow, no manual intervention required')}</li>
          <li>{t(lang, '双重优化：同时提升 Google 排名和 AI 搜索引用率', 'Dual optimization: boost both Google rankings and AI search citation rates')}</li>
        </ul>
      </section>

      {/* Core Features - with icons */}
      <section>
        <h2>{t(lang, '核心功能', 'Core Features')}</h2>
        <div className="sg-features">
          {features.map((f, i) => (
            <div className="sg-feature" key={i}>
              <h3>{t(lang, f.zh, f.en)}</h3>
              <p>{t(lang, f.descZh, f.descEn)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Pipeline */}
      <section>
        <h2>{t(lang, '服务链路', 'Service Pipeline')}</h2>
        <div className="sg-pipeline">
          <div className="sg-pipeline-step"><span>1</span>{t(lang, '账号基础维护', 'Account Maintenance')}</div>
          <div className="sg-pipeline-arrow">{"\u2192"}</div>
          <div className="sg-pipeline-step"><span>2</span>{t(lang, '调研目标社区与话题', 'Research Communities & Topics')}</div>
          <div className="sg-pipeline-arrow">{"\u2192"}</div>
          <div className="sg-pipeline-step"><span>3</span>{t(lang, '撰写推广评论+帖子', 'Write Comments & Posts')}</div>
          <div className="sg-pipeline-arrow">{"\u2192"}</div>
          <div className="sg-pipeline-step"><span>4</span>{t(lang, '分析互动与线索', 'Analyze Engagement & Leads')}</div>
          <div className="sg-pipeline-arrow">{"\u2192"}</div>
          <div className="sg-pipeline-step"><span>5</span>{t(lang, '策略迭代', 'Iterate Strategy')}</div>
        </div>
        <p>{t(lang,
          '在具体合作中，会结合客户当下的运营重点和推广目标定制服务方案，持续协助梳理方向、识别问题、调整策略，并帮助搭建 OpenClaw 自动化工作流。',
          "In each engagement, we customize the service plan based on the client's current operational focus and growth goals, continuously helping to clarify direction, identify issues, adjust strategies, and build OpenClaw automation workflows."
        )}</p>
      </section>

      {/* Execution System */}
      <section>
        <h2>{t(lang, '全链路执行体系', 'Full-Pipeline Execution System')}</h2>
        <p>{t(lang,
          '基于 OpenClaw 的 AI Agent 自动化执行所有 Reddit 增长操作，同时人工执行高级操作：',
          "All Reddit growth operations are executed automatically via OpenClaw's AI Agent, with manual execution for advanced operations:"
        )}</p>
        <div className="sg-modules">
          {executionModules.map((m, i) => (
            <div className="sg-module" key={i}>
              <h4>{t(lang, m.zh, m.en)}</h4>
              <p>{t(lang, m.descZh, m.descEn)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Agent Workflow */}
      <section>
        <h2>{t(lang, 'Agent 工作流程', 'Agent Workflow')}</h2>
        <div className="sg-workflow-grid">
          <div className="sg-workflow-card">
            <h3>{t(lang, '智能回帖 + 评论互动', 'Smart Commenting & Engagement')}</h3>
            <ol>
              <li>{t(lang, 'Agent 自动扫描目标关键词相关讨论', 'Agent automatically scans discussions related to target keywords')}</li>
              <li>{t(lang, '分析帖子内容和社区氛围', 'Analyzes post content and community sentiment')}</li>
              <li>{t(lang, '生成自然、有价值的回复', 'Generates natural, valuable replies')}</li>
              <li>{t(lang, '在合适时机发布，自然引流', 'Publishes at optimal timing for organic traffic')}</li>
            </ol>
          </div>
          <div className="sg-workflow-card">
            <h3>{t(lang, '高质量自主帖子', 'High-Quality Original Posts')}</h3>
            <ol>
              <li>{t(lang, '基于 Subreddit 分析，选择最佳话题', 'Select the best topics based on Subreddit analysis')}</li>
              <li>{t(lang, '撰写符合社区调性的原创内容', 'Write original content matching community tone')}</li>
              <li>{t(lang, '选择最优发帖时间', 'Choose optimal posting time')}</li>
              <li>{t(lang, '发布后持续监控互动数据', 'Continuously monitor engagement data after publishing')}</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Service Guarantees - with icons */}
      <section>
        <h2>{t(lang, '服务保障', 'Service Guarantees')}</h2>
        <div className="sg-guarantees">
          {guarantees.map((g, i) => (
            <div className="sg-guarantee-item" key={i}>
              <strong>{t(lang, g.zh, g.en)}</strong>
              <p>{t(lang, g.descZh, g.descEn)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h2>{t(lang, '客户评价', 'Client Testimonials')}</h2>
        <div className="sg-testimonials">
          <blockquote className="sg-quote">
            <p>{t(lang,
              '\u201c我们尝试自己做 Reddit 发了好几个月，用了 Upvote 两周后，我们在 r/startups 的帖子就开始拿到 50+ 赞。光是发帖时间优化这一项，就值回 10 倍价格。\u201d',
              '\u201cWe tried doing Reddit ourselves for months. Within two weeks of using Upvote, our posts on r/startups started getting 50+ upvotes. The posting time optimization alone was worth 10x the price.\u201d'
            )}</p>
            <cite>{"\u2014 "}{t(lang, 'SaaS 创始人', 'SaaS Founder')}</cite>
          </blockquote>
          <blockquote className="sg-quote">
            <p>{t(lang,
              '\u201c上线 48 小时 Karma 就从 2 涨到了 220+，第一周评论就开始有自然互动了。之前找了两家服务商都踩坑封号，Upvote 是唯一让我账号安全活下来的。\u201d',
              '\u201cKarma went from 2 to 220+ in 48 hours, and our comments started getting organic engagement in the first week. We got burned by two other providers before \u2014 Upvote is the only one that kept our account safe.\u201d'
            )}</p>
            <cite>{"\u2014 "}{t(lang, 'AI 工具出海团队', 'AI Tool Go-Global Team')}</cite>
          </blockquote>
          <blockquote className="sg-quote">
            <p>{t(lang,
              '\u201c用了三个月之后，我们的产品开始出现在 ChatGPT 和 Perplexity 的推荐结果里。Reddit 上的内容直接带来了 AI 搜索可见度。\u201d',
              '\u201cAfter three months, our product started appearing in ChatGPT and Perplexity recommendations. The Reddit content directly drove AI search visibility.\u201d'
            )}</p>
            <cite>{"\u2014 "}{t(lang, 'DTC 品牌营销负责人', 'DTC Brand Marketing Lead')}</cite>
          </blockquote>
        </div>
      </section>

      {/* Pricing - with dividers and CTA */}
      <section>
        <h2>{t(lang, '定价', 'Pricing')}</h2>
        <div className="sg-pricing-grid">
          <div className="sg-pricing-card sg-pricing-highlight">
            <div className="sg-pricing-badge">{t(lang, '限时优惠', 'Launch Special')}</div>
            <div className="sg-pricing-amount">$99<span>/mo</span></div>
            <h4>{t(lang, '轻度用户', 'Starter')}</h4>
            <div className="sg-pricing-divider" />
            <ul className="sg-pricing-features">
              <li>{t(lang, '20 条精准评论/月', '20 targeted comments/mo')}</li>
              <li>{t(lang, 'Karma 基础增长', 'Basic Karma growth')}</li>
              <li>{t(lang, '1 个目标 Subreddit', '1 target Subreddit')}</li>
              <li>{t(lang, '月度数据报告', 'Monthly data report')}</li>
            </ul>
            <a href="#cta" className="sg-pricing-cta">{t(lang, '立即开始', 'Get Started')}</a>
            <p className="sg-pricing-note">{t(lang, '限时优惠至 5.1', 'Limited offer until May 1')}</p>
          </div>
          <div className="sg-pricing-card">
            <div className="sg-pricing-badge">Professional</div>
            <div className="sg-pricing-amount">$299<span>/mo</span></div>
            <h4>{t(lang, '小型 SaaS 产品', 'Growing SaaS')}</h4>
            <div className="sg-pricing-divider" />
            <ul className="sg-pricing-features">
              <li>{t(lang, '60 条精准评论/月', '60 targeted comments/mo')}</li>
              <li>{t(lang, '4 篇深度长文/月', '4 long-form posts/mo')}</li>
              <li>{t(lang, 'Karma 加速增长', 'Accelerated Karma growth')}</li>
              <li>{t(lang, '3 个目标 Subreddit', '3 target Subreddits')}</li>
              <li>{t(lang, '内容发布前审核', 'Pre-publishing content review')}</li>
              <li>{t(lang, '双周策略会议', 'Bi-weekly strategy sync')}</li>
            </ul>
            <a href="#cta" className="sg-pricing-cta">{t(lang, '立即开始', 'Get Started')}</a>
          </div>
          <div className="sg-pricing-card">
            <div className="sg-pricing-badge">Enterprise</div>
            <div className="sg-pricing-amount">$499<span>/mo</span></div>
            <h4>{t(lang, '规模化增长', 'Scale')}</h4>
            <div className="sg-pricing-divider" />
            <ul className="sg-pricing-features">
              <li>{t(lang, '100+ 条精准评论/月', '100+ targeted comments/mo')}</li>
              <li>{t(lang, '8 篇深度长文/月', '8 long-form posts/mo')}</li>
              <li>{t(lang, '品牌 Subreddit 创建与运营', 'Brand Subreddit creation & management')}</li>
              <li>{t(lang, '5+ 个目标 Subreddit', '5+ target Subreddits')}</li>
              <li>{t(lang, '潜在客户追踪与通知', 'Lead tracking & notifications')}</li>
              <li>{t(lang, '竞品监控报告', 'Competitor monitoring reports')}</li>
              <li>{t(lang, '每周策略会议 + Dashboard', 'Weekly strategy sync + Dashboard')}</li>
            </ul>
            <a href="#cta" className="sg-pricing-cta">{t(lang, '联系我们', 'Contact Us')}</a>
          </div>
        </div>
        <p className="sg-pricing-future">{t(lang,
          '后续可支持 X / Instagram / TikTok 增长。多月合作（3 个月+）享额外折扣。',
          'Future support for X / Instagram / TikTok growth. Multi-month partnerships (3+ months) receive additional discounts.'
        )}</p>
      </section>

      {/* Getting Started */}
      <section>
        <h2>{t(lang, '快速开始', 'Getting Started')}</h2>
        <ol className="sg-steps">
          <li>{t(lang, '访问官网：', 'Visit our website: ')}<a href="https://reddit-growth-orpin.vercel.app/" target="_blank" rel="noopener noreferrer">reddit-growth-orpin.vercel.app</a></li>
          <li>{t(lang, '点击「免费开始」注册账号', 'Click "Get Started Free" to create your account')}</li>
          <li>{t(lang, '通过下方联系方式提交你的品牌和目标 Subreddit 信息', 'Submit your brand and target Subreddit information via the contact methods below')}</li>
          <li>{t(lang, 'Agent 自动开始执行增长策略', 'Agent automatically begins executing your growth strategy')}</li>
        </ol>
      </section>

      {/* Contact */}
      <section id="cta">
        <h2>{t(lang, '联系我们', 'Contact Us')}</h2>
        <div className="sg-contact">
          <div className="sg-contact-item">
            <strong>{t(lang, '邮箱', 'Email')}</strong>
            <a href="mailto:nicole@daobang.tech">nicole@daobang.tech</a>
          </div>
          <div className="sg-contact-item">
            <strong>{t(lang, '微信', 'WeChat')}</strong>
            <span>c1426217526</span>
          </div>
        </div>
      </section>

      <a href="/" className="page-back">{"\u2190 "}{t(lang, '返回首页', 'Back to Home')}</a>
    </div>
  )
}
