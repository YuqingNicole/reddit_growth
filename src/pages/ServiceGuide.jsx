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

export default function ServiceGuide() {
  const { lang } = useLang()
  return (
    <div className="page-container service-guide">
      <h1>{t(lang, '服务指南', 'Service Guide')}</h1>
      <p className="page-updated">{t(lang, '全面了解 Upvote.Reddit 的服务内容与工作流程', 'Everything you need to know about Upvote.Reddit services and workflows')}</p>

      {/* Product Overview */}
      <section>
        <h2>{t(lang, '产品简介', 'Product Overview')}</h2>
        <p>{t(lang,
          'Upvote Reddit 是一款 AI 驱动的 Reddit 营销增长工具，基于 OpenClaw AI Agent 全自动运行，覆盖从机会发现、内容发布到互动增长的完整链路，帮助品牌在 Reddit 上安全、高效地获取曝光与用户增长。',
          'Upvote Reddit is an AI-powered Reddit marketing growth tool built on the OpenClaw AI Agent framework. It runs fully automatically, covering the entire pipeline from opportunity discovery and content publishing to engagement growth — helping brands safely and efficiently gain exposure and user growth on Reddit.'
        )}</p>
        <ul>
          <li>{t(lang, '自动发现高价值 Subreddit 和潜在客户', 'Automatically discover high-value Subreddits and potential customers')}</li>
          <li>{t(lang, '使用 claude-opus-4.6 生成合规内容，规避封号风险', 'Generate compliant content using claude-opus-4.6, minimizing ban risks')}</li>
          <li>{t(lang, '全流程 AI 自动化，无需人工干预', 'Fully automated AI workflow — no manual intervention required')}</li>
        </ul>
      </section>

      {/* Core Features */}
      <section>
        <h2>{t(lang, '核心功能', 'Core Features')}</h2>
        <div className="sg-features">
          <div className="sg-feature">
            <h3>{t(lang, '智能回帖', 'Smart Commenting')}</h3>
            <p>{t(lang,
              '根据关键词，AI 自动发现与你产品相关的讨论帖，生成有价值的回复，自然引导流量。自动检查 Subreddit 规则合规性，规避封号风险。',
              'AI automatically discovers discussion threads related to your product based on keywords, generates valuable replies, and naturally drives traffic. It automatically checks Subreddit rule compliance to minimize ban risks.'
            )}</p>
          </div>
          <div className="sg-feature">
            <h3>{t(lang, 'Subreddit 发现与分析', 'Subreddit Discovery & Analysis')}</h3>
            <p>{t(lang,
              '发帖之前，先摸透每个社区。AI 自动评估每个 Subreddit 的营销适配度、用户构成、活跃规律和内容偏好，提供策略建议和切入点推荐。',
              'Before posting, get deep insights into each community. AI automatically evaluates each Subreddit\'s marketing fit, user demographics, activity patterns, and content preferences — providing strategic recommendations and entry point suggestions.'
            )}</p>
          </div>
          <div className="sg-feature">
            <h3>{t(lang, '潜在客户追踪', 'Lead Tracking')}</h3>
            <p>{t(lang,
              '通过关键词和 AI 分析，在帖子和评论中追踪高意向潜在客户，实时通知，精准触达目标用户。',
              'Through keyword and AI analysis, track high-intent leads in posts and comments with real-time notifications for precise targeting of your ideal users.'
            )}</p>
          </div>
          <div className="sg-feature">
            <h3>{t(lang, 'Karma 增长服务', 'Karma Growth Service')}</h3>
            <p>{t(lang,
              '从 0 开始帮你的 Reddit 账号积累 Karma 和权威性，快速达到发帖门槛。实测 Karma 从 2 增长到 220+，仅用 48 小时。',
              'Build your Reddit account\'s Karma and authority from scratch to quickly reach posting thresholds. In practice, Karma grew from 2 to 220+ in just 48 hours.'
            )}</p>
          </div>
          <div className="sg-feature">
            <h3>{t(lang, '内容策略', 'Content Strategy')}</h3>
            <p>{t(lang,
              '根据数据分析，制定最优发帖时间、内容类型和话题方向。',
              'Develop optimal posting times, content types, and topic directions based on data analysis.'
            )}</p>
          </div>
          <div className="sg-feature">
            <h3>{t(lang, '竞品监控', 'Competitor Monitoring')}</h3>
            <p>{t(lang,
              '追踪竞品在 Reddit 上的动态和策略，发现增长机会。',
              'Track competitor activity and strategies on Reddit to discover growth opportunities.'
            )}</p>
          </div>
          <div className="sg-feature">
            <h3>{t(lang, '品牌建设', 'Brand Building')}</h3>
            <p>{t(lang,
              '在目标 Subreddit 建立品牌声量，产出高质量 UGC 内容，让用户成为品牌传播者。',
              'Build brand presence in target Subreddits, produce high-quality UGC content, and turn users into brand advocates.'
            )}</p>
          </div>
        </div>
      </section>

      {/* Service Pipeline */}
      <section>
        <h2>{t(lang, '服务链路', 'Service Pipeline')}</h2>
        <div className="sg-pipeline">
          <div className="sg-pipeline-step"><span>1</span>{t(lang, '账号基础维护', 'Account Maintenance')}</div>
          <div className="sg-pipeline-arrow">&rarr;</div>
          <div className="sg-pipeline-step"><span>2</span>{t(lang, '调研目标社区与话题', 'Research Communities & Topics')}</div>
          <div className="sg-pipeline-arrow">&rarr;</div>
          <div className="sg-pipeline-step"><span>3</span>{t(lang, '撰写推广评论+帖子', 'Write Comments & Posts')}</div>
          <div className="sg-pipeline-arrow">&rarr;</div>
          <div className="sg-pipeline-step"><span>4</span>{t(lang, '分析互动与线索', 'Analyze Engagement & Leads')}</div>
          <div className="sg-pipeline-arrow">&rarr;</div>
          <div className="sg-pipeline-step"><span>5</span>{t(lang, '策略迭代', 'Iterate Strategy')}</div>
        </div>
        <p>{t(lang,
          '在具体合作中，会结合客户当下的运营重点和推广目标定制服务方案，持续协助梳理方向、识别问题、调整策略，并帮助搭建 OpenClaw 自动化工作流。',
          'In each engagement, we customize the service plan based on the client\'s current operational focus and growth goals, continuously helping to clarify direction, identify issues, adjust strategies, and build OpenClaw automation workflows.'
        )}</p>
      </section>

      {/* Execution System */}
      <section>
        <h2>{t(lang, '全链路执行体系', 'Full-Pipeline Execution System')}</h2>
        <p>{t(lang,
          '基于 OpenClaw 的 AI Agent 自动化执行所有 Reddit 增长操作，同时人工执行高级操作：',
          'All Reddit growth operations are executed automatically via OpenClaw\'s AI Agent, with manual execution for advanced operations:'
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

      {/* Testimonial */}
      <section>
        <h2>{t(lang, '客户评价', 'Client Testimonials')}</h2>
        <blockquote className="sg-quote">
          {t(lang,
            '"我们尝试自己做 Reddit 发了好几个月，用了 Upvote 两周后，我们在 r/startups 的帖子就开始拿到 50+ 赞。光是发帖时间优化这一项，就值回 10 倍价格。"',
            '"We tried doing Reddit ourselves for months. Within two weeks of using Upvote, our posts on r/startups started getting 50+ upvotes. The posting time optimization alone was worth 10x the price."'
          )}
        </blockquote>
      </section>

      {/* Pricing */}
      <section>
        <h2>{t(lang, '定价', 'Pricing')}</h2>
        <p>{t(lang,
          '按需付费，内容发布成功才收费，未消耗部分支持退款。',
          'Pay as you go — you only pay for successfully published content. Unused credits are refundable.'
        )}</p>
        <div className="sg-pricing-grid">
          <div className="sg-pricing-card sg-pricing-highlight">
            <div className="sg-pricing-badge">{t(lang, '内测价格', 'Beta')}</div>
            <div className="sg-pricing-amount">$99<span>/mo</span></div>
            <p>{t(lang, '轻度用户', 'Light users')}</p>
            <p className="sg-pricing-note">{t(lang, '有效期至 5.1', 'Valid until May 1')}</p>
          </div>
          <div className="sg-pricing-card">
            <div className="sg-pricing-badge">Professional</div>
            <div className="sg-pricing-amount">$299<span>/mo</span></div>
            <p>{t(lang, '小型 SaaS 产品', 'Small SaaS products')}</p>
          </div>
          <div className="sg-pricing-card">
            <div className="sg-pricing-badge">Enterprise</div>
            <div className="sg-pricing-amount">$499<span>/mo</span></div>
            <p>{t(lang, '硬件产品或大型 SaaS 产品', 'Hardware or large SaaS products')}</p>
          </div>
        </div>
        <p className="sg-pricing-future">{t(lang,
          '后续可支持 X / Instagram / TikTok 增长。',
          'Future support for X / Instagram / TikTok growth.'
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
      <section>
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

      <a href="/" className="page-back">{t(lang, '← 返回首页', '← Back to Home')}</a>
    </div>
  )
}
